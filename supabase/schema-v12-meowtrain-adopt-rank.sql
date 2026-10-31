-- =========================================================
-- v12：喵喵列車長「送養排行榜」（許願池 #22）
-- 1. 排行榜多記一個「累計送養幾隻」（單人和雙人連線都算）
-- 2. 上傳函式多收一個 p_adopted（舊版網頁沒帶這個參數也能用，預設 0）
-- 3. 排行榜函式可以用 p_by = 'adopted' 排送養數
-- 雙人連線本身用 Supabase Realtime 的 broadcast，不存資料庫，不需要另外設定。
-- 在 Supabase 的 SQL Editor 執行一次（可重複執行）。
-- =========================================================
alter table public.meowtrain_scores add column if not exists adopted int not null default 0;

drop function if exists public.meowtrain_submit(uuid, text, int, int, int, text);
create or replace function public.meowtrain_submit(
  p_client uuid, p_name text, p_score int, p_len int, p_kinds int, p_leader text, p_adopted int default 0
) returns json
language plpgsql security definer set search_path = public as $$
declare
  v_name text := btrim(coalesce(p_name, ''));
  v_last timestamptz;
  v_row public.meowtrain_scores;
begin
  if p_client is null then raise exception 'missing client'; end if;
  if char_length(v_name) < 1 or char_length(v_name) > 12 then raise exception 'name must be 1-12 characters'; end if;
  -- 合理範圍：棋盤 13×15 格最多 195 隻；花色最多 50 種；每收編一隻至少 10 分；送養累計最多 100000 隻
  if p_score < 0 or p_score > 30000 or p_len < 1 or p_len > 195 or p_kinds < 0 or p_kinds > 50
     or p_score < (p_len - 1) * 10 or coalesce(p_adopted, 0) < 0 or p_adopted > 100000 then
    raise exception 'invalid score';
  end if;
  if p_leader is null or p_leader !~ '^[a-z]{2,16}$' then p_leader := 'orange'; end if;
  select updated_at into v_last from public.meowtrain_scores where client_id = p_client;
  if v_last is not null and v_last > now() - interval '3 seconds' then raise exception 'too many requests'; end if;

  insert into public.meowtrain_scores as t (client_id, name, score, len, kinds, leader, adopted, games)
  values (p_client, v_name, p_score, p_len, p_kinds, p_leader, coalesce(p_adopted, 0), 1)
  on conflict (client_id) do update set
    name = excluded.name,
    leader = case when excluded.score >= t.score then excluded.leader else t.leader end,
    score = greatest(t.score, excluded.score),
    len = greatest(t.len, excluded.len),
    kinds = greatest(t.kinds, excluded.kinds),
    adopted = greatest(t.adopted, excluded.adopted),
    games = t.games + 1,
    updated_at = now()
  returning * into v_row;

  return json_build_object(
    'score', v_row.score, 'len', v_row.len, 'adopted', v_row.adopted,
    'score_rank', (select count(*) + 1 from public.meowtrain_scores where score > v_row.score),
    'len_rank', (select count(*) + 1 from public.meowtrain_scores where len > v_row.len),
    'adopted_rank', (select count(*) + 1 from public.meowtrain_scores where adopted > v_row.adopted),
    'players', (select count(*) from public.meowtrain_scores)
  );
end $$;

-- 前幾名：p_by = 'score'（分數）、'len'（最長隊伍）或 'adopted'（累計送養）；mine 標出自己那一筆
drop function if exists public.meowtrain_top(text, uuid, int);
create or replace function public.meowtrain_top(p_by text default 'score', p_client uuid default null, p_limit int default 10)
returns table(rank bigint, name text, score int, len int, kinds int, leader text, adopted int, mine boolean)
language sql stable security definer set search_path = public as $$
  select row_number() over (order by case p_by when 'len' then t.len when 'adopted' then t.adopted else t.score end desc, t.score desc, t.updated_at) as rank,
         t.name, t.score, t.len, t.kinds, t.leader, t.adopted, (p_client is not null and t.client_id = p_client) as mine
  from public.meowtrain_scores t
  where case when p_by = 'adopted' then t.adopted > 0 else t.score > 0 end
  order by case p_by when 'len' then t.len when 'adopted' then t.adopted else t.score end desc, t.score desc, t.updated_at
  limit least(greatest(coalesce(p_limit, 10), 1), 50);
$$;

grant execute on function public.meowtrain_submit(uuid, text, int, int, int, text, int) to anon, authenticated;
grant execute on function public.meowtrain_top(text, uuid, int) to anon, authenticated;
