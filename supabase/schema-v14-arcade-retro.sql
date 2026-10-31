-- =========================================================
-- v14：電玩廳「復古經典」排行榜
-- 在 v13 的 5 個遊戲之外，多 5 個遊戲各有一個排行榜（成績都是越大越好）：
--   brick   打磚塊（分數）
--   invader 星際防衛（分數）
--   block   落磚方塊（分數）
--   flap    拍翅小鳥（穿過幾根柱子）
--   merge   數字合併 2048（分數）
-- 一樣只能透過函式讀寫，函式會檢查成績是否合理，同一個瀏覽器同一個遊戲 3 秒內只能上傳一次。
-- 需要先執行過 v13。在 Supabase 的 SQL Editor 執行一次（可重複執行）。
-- =========================================================

-- 1. 放寬資料表允許的遊戲代號
do $$
declare c text;
begin
  select conname into c
  from pg_constraint
  where conrelid = 'public.arcade_scores'::regclass
    and contype = 'c'
    and pg_get_constraintdef(oid) ~ '\mgame\M';
  if c is not null then
    execute format('alter table public.arcade_scores drop constraint %I', c);
  end if;
  alter table public.arcade_scores add constraint arcade_scores_game_check
    check (game in ('react', 'whack', 'simon', 'nums', 'tap', 'brick', 'invader', 'block', 'flap', 'merge'));
end $$;

-- 2. 上傳成績（重新建立，加入新遊戲的合理範圍）
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
  if p_game is null or p_game not in ('react', 'whack', 'simon', 'nums', 'tap', 'brick', 'invader', 'block', 'flap', 'merge') then
    raise exception 'unknown game';
  end if;
  if char_length(v_name) < 1 or char_length(v_name) > 12 then raise exception 'name must be 1-12 characters'; end if;
  -- 合理範圍：人類做不到的成績直接擋掉
  if p_score is null or not (
       (p_game = 'react'   and p_score between 90 and 2000)
    or (p_game = 'whack'   and p_score between 0 and 250)
    or (p_game = 'simon'   and p_score between 0 and 60)
    or (p_game = 'nums'    and p_score between 2500 and 600000)
    or (p_game = 'tap'     and p_score between 0 and 16)
    or (p_game = 'brick'   and p_score between 0 and 20000)
    or (p_game = 'invader' and p_score between 0 and 30000)
    or (p_game = 'block'   and p_score between 0 and 1000000)
    or (p_game = 'flap'    and p_score between 0 and 600)
    or (p_game = 'merge'   and p_score between 0 and 1000000)
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

grant execute on function public.arcade_submit(uuid, text, text, numeric) to anon, authenticated;
-- arcade_top 不用改（排序方向只看 react、nums 兩個「越小越好」的遊戲）
