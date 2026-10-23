-- =========================================================
-- v10：喵喵列車長
-- 1. 許願池的願望可以選「喵喵列車長」這個網站（之前資料表的檢查規則不允許，選了會送不出去）
-- 2. 排行榜：每個瀏覽器一筆紀錄（名字、最高分、最長隊伍、最多花色），大家都看得到前幾名
--    資料表不開放直接讀寫，只能透過下面的函式，函式會檢查名字長度和分數是否合理。
--    要刪掉不雅的名字：到 Supabase 的 Table Editor 打開 meowtrain_scores，直接刪那一列。
-- 在 Supabase 的 SQL Editor 執行一次（可重複執行）。
-- =========================================================

-- ---------- 1. 許願池可以選喵喵列車長 ----------
do $$
declare c text;
begin
  select conname into c
  from pg_constraint
  where conrelid = 'public.wishes'::regclass
    and contype = 'c'
    and pg_get_constraintdef(oid) ~ '\msite\M';
  if c is not null then
    execute format('alter table public.wishes drop constraint %I', c);
  end if;
  alter table public.wishes add constraint wishes_site_check
    check (site in ('restaurant', 'wheel', 'english', 'nostrings', 'lighthouse', 'meowtrain', 'portal', 'new'));
end $$;

-- ---------- 2. 排行榜 ----------
create table if not exists public.meowtrain_scores (
  client_id uuid primary key,                 -- 每個瀏覽器自己產生的代號（存在瀏覽器裡）
  name text not null check (char_length(name) between 1 and 12),
  score int not null default 0,               -- 最高分
  len int not null default 1,                 -- 最長隊伍（含列車長）
  kinds int not null default 0,               -- 一局最多花色
  leader text not null default 'orange',      -- 拿到最高分時的列車長（排行榜上顯示牠）
  games int not null default 0,               -- 上傳過幾次
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
alter table public.meowtrain_scores enable row level security;
-- 不建立任何讀寫規則：訪客不能直接讀寫資料表，只能用下面的函式
revoke all on public.meowtrain_scores from anon, authenticated;

-- 上傳成績：只會保留每一項的最高值；回傳目前的名次
create or replace function public.meowtrain_submit(
  p_client uuid, p_name text, p_score int, p_len int, p_kinds int, p_leader text
) returns json
language plpgsql security definer set search_path = public as $$
declare
  v_name text := btrim(coalesce(p_name, ''));
  v_last timestamptz;
  v_row public.meowtrain_scores;
begin
  if p_client is null then raise exception 'missing client'; end if;
  if char_length(v_name) < 1 or char_length(v_name) > 12 then raise exception 'name must be 1-12 characters'; end if;
  -- 合理範圍：棋盤 13×15 格最多 195 隻；花色 20 種；每收編一隻至少 10 分
  if p_score < 0 or p_score > 30000 or p_len < 1 or p_len > 195 or p_kinds < 0 or p_kinds > 20
     or p_score < (p_len - 1) * 10 then
    raise exception 'invalid score';
  end if;
  if p_leader is null or p_leader !~ '^[a-z]{2,16}$' then p_leader := 'orange'; end if;
  -- 太頻繁的上傳擋掉
  select updated_at into v_last from public.meowtrain_scores where client_id = p_client;
  if v_last is not null and v_last > now() - interval '3 seconds' then raise exception 'too many requests'; end if;

  insert into public.meowtrain_scores as t (client_id, name, score, len, kinds, leader, games)
  values (p_client, v_name, p_score, p_len, p_kinds, p_leader, 1)
  on conflict (client_id) do update set
    name = excluded.name,
    leader = case when excluded.score >= t.score then excluded.leader else t.leader end,
    score = greatest(t.score, excluded.score),
    len = greatest(t.len, excluded.len),
    kinds = greatest(t.kinds, excluded.kinds),
    games = t.games + 1,
    updated_at = now()
  returning * into v_row;

  return json_build_object(
    'score', v_row.score, 'len', v_row.len,
    'score_rank', (select count(*) + 1 from public.meowtrain_scores where score > v_row.score),
    'len_rank', (select count(*) + 1 from public.meowtrain_scores where len > v_row.len),
    'players', (select count(*) from public.meowtrain_scores)
  );
end $$;

-- 前幾名：p_by = 'score'（分數）或 'len'（最長隊伍）；mine 標出自己那一筆
create or replace function public.meowtrain_top(p_by text default 'score', p_client uuid default null, p_limit int default 10)
returns table(rank bigint, name text, score int, len int, kinds int, leader text, mine boolean)
language sql stable security definer set search_path = public as $$
  select row_number() over (order by case when p_by = 'len' then t.len else t.score end desc, t.score desc, t.updated_at) as rank,
         t.name, t.score, t.len, t.kinds, t.leader, (p_client is not null and t.client_id = p_client) as mine
  from public.meowtrain_scores t
  where t.score > 0
  order by case when p_by = 'len' then t.len else t.score end desc, t.score desc, t.updated_at
  limit least(greatest(coalesce(p_limit, 10), 1), 50);
$$;

grant execute on function public.meowtrain_submit(uuid, text, int, int, int, text) to anon, authenticated;
grant execute on function public.meowtrain_top(text, uuid, int) to anon, authenticated;
