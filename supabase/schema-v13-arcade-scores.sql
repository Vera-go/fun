-- =========================================================
-- v13：電玩廳排行榜
-- 5 個小遊戲各有一個排行榜，每個瀏覽器每個遊戲只留一筆最佳成績：
--   react  反應速度（平均毫秒，越小越好）
--   whack  打貓（分數，越大越好）
--   simon  記憶挑戰（通過幾關，越大越好）
--   nums   數字衝刺（毫秒，越小越好）
--   tap    狂點 10 秒（每秒幾下，越大越好）
-- 資料表不開放直接讀寫，只能透過下面兩個函式；函式會檢查名字長度、成績是否合理，
-- 同一個瀏覽器同一個遊戲 3 秒內只能上傳一次。
-- 要刪掉不雅的名字：到 Supabase 的 Table Editor 打開 arcade_scores，直接刪那一列。
-- 在 Supabase 的 SQL Editor 執行一次（可重複執行）。
-- =========================================================

create table if not exists public.arcade_scores (
  client_id uuid not null,                    -- 每個瀏覽器自己產生的代號（存在瀏覽器裡）
  game text not null check (game in ('react', 'whack', 'simon', 'nums', 'tap')),
  name text not null check (char_length(name) between 1 and 12),
  score numeric not null,
  plays int not null default 1,               -- 這個遊戲上傳過幾次
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  primary key (client_id, game)
);
alter table public.arcade_scores enable row level security;
-- 不建立任何讀寫規則：訪客不能直接讀寫資料表，只能用下面的函式
revoke all on public.arcade_scores from anon, authenticated;

create index if not exists arcade_scores_game_idx on public.arcade_scores (game, score);

-- 上傳成績：只保留最佳值（react、nums 取最小，其他取最大）；回傳目前的最佳和名次
create or replace function public.arcade_submit(
  p_client uuid, p_name text, p_game text, p_score numeric
) returns json
language plpgsql security definer set search_path = public as $$
declare
  v_name text := btrim(coalesce(p_name, ''));
  v_low boolean := p_game in ('react', 'nums');   -- 越小越好
  v_last timestamptz;
  v_best numeric;
  v_rank bigint;
begin
  if p_client is null then raise exception 'missing client'; end if;
  if p_game is null or p_game not in ('react', 'whack', 'simon', 'nums', 'tap') then raise exception 'unknown game'; end if;
  if char_length(v_name) < 1 or char_length(v_name) > 12 then raise exception 'name must be 1-12 characters'; end if;
  -- 合理範圍：人類做不到的成績直接擋掉
  if p_score is null or not (
       (p_game = 'react' and p_score between 90 and 2000)        -- 5 回合平均毫秒
    or (p_game = 'whack' and p_score between 0 and 250)          -- 30 秒
    or (p_game = 'simon' and p_score between 0 and 60)           -- 通過關數
    or (p_game = 'nums'  and p_score between 2500 and 600000)    -- 毫秒
    or (p_game = 'tap'   and p_score between 0 and 16)           -- 每秒幾下
  ) then
    raise exception 'invalid score';
  end if;
  select updated_at into v_last from public.arcade_scores where client_id = p_client and game = p_game;
  if v_last is not null and v_last > now() - interval '3 seconds' then raise exception 'too many requests'; end if;

  insert into public.arcade_scores as t (client_id, game, name, score, plays)
  values (p_client, p_game, v_name, p_score, 1)
  on conflict (client_id, game) do update set
    name = excluded.name,
    score = case when v_low then least(t.score, excluded.score) else greatest(t.score, excluded.score) end,
    plays = t.plays + 1,
    updated_at = now()
  returning score into v_best;

  select count(*) + 1 into v_rank from public.arcade_scores s
   where s.game = p_game and (case when v_low then s.score < v_best else s.score > v_best end);

  return json_build_object(
    'best', v_best,
    'rank', v_rank,
    'players', (select count(*) from public.arcade_scores where game = p_game)
  );
end $$;

-- 前幾名：mine 標出自己那一筆
create or replace function public.arcade_top(p_game text, p_client uuid default null, p_limit int default 20)
returns table(rank bigint, name text, score numeric, mine boolean)
language sql stable security definer set search_path = public as $$
  select row_number() over (
           order by case when p_game in ('react', 'nums') then t.score else -t.score end, t.updated_at
         ) as rank,
         t.name, t.score, (p_client is not null and t.client_id = p_client) as mine
  from public.arcade_scores t
  where t.game = p_game and t.score > 0
  order by case when p_game in ('react', 'nums') then t.score else -t.score end, t.updated_at
  limit least(greatest(coalesce(p_limit, 20), 1), 50);
$$;

grant execute on function public.arcade_submit(uuid, text, text, numeric) to anon, authenticated;
grant execute on function public.arcade_top(text, uuid, int) to anon, authenticated;
