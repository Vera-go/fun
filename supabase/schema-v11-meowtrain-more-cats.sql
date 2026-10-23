-- =========================================================
-- v11：喵喵列車長的貓咪增加到 32 種
-- 排行榜上傳時會檢查「一局最多花色」，原本上限是 20 種，現在改成 50 種。
-- 在 Supabase 的 SQL Editor 執行一次（可重複執行）。
-- =========================================================
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
  -- 合理範圍：棋盤 13×15 格最多 195 隻；花色最多 50 種；每收編一隻至少 10 分
  if p_score < 0 or p_score > 30000 or p_len < 1 or p_len > 195 or p_kinds < 0 or p_kinds > 50
     or p_score < (p_len - 1) * 10 then
    raise exception 'invalid score';
  end if;
  if p_leader is null or p_leader !~ '^[a-z]{2,16}$' then p_leader := 'orange'; end if;
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
grant execute on function public.meowtrain_submit(uuid, text, int, int, int, text) to anon, authenticated;
