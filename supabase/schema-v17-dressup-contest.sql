-- =========================================================
-- v17：換裝小舞台「每週主題比賽」和穿搭牆管理（要先執行過 v16）
-- 1. 貼穿搭時可以參加本週比賽：contest 記錄是哪一週（台灣時間，週一到週日，例如 2026-W44）
--    週次由資料庫決定，不能貼到已經結束的比賽；比賽結束後，那一週的比賽穿搭不能再按讚（名次固定）
--    每週的主題名稱由網頁依週次決定（萬聖節、聖誕節那週會換成節日主題）
-- 2. 名人堂：過去每一週比賽讚數最多的前三名
-- 3. 管理中心（許願池下方，管理員登入後）：看被檢舉的穿搭、隱藏或刪除
-- 在 Supabase 的 SQL Editor 執行一次（可重複執行）。
-- =========================================================
alter table public.dressup_posts add column if not exists contest text not null default '';
create index if not exists dressup_posts_contest on public.dressup_posts (contest, likes desc, created_at);

-- 現在是哪一週（台灣時間）
create or replace function public.dressup_week() returns text
language sql stable as $$ select to_char(now() at time zone 'Asia/Taipei', 'IYYY-"W"IW') $$;

-- 貼上穿搭（多了 p_contest：要不要參加本週比賽）
drop function if exists public.dressup_post(uuid, text, text, jsonb, text);
create or replace function public.dressup_post(p_client uuid, p_name text, p_title text, p_look jsonb, p_theme text default '', p_contest boolean default false)
returns bigint
language plpgsql security definer set search_path = public as $$
declare
  v_name text := btrim(coalesce(p_name, ''));
  v_title text := btrim(coalesce(p_title, ''));
  v_theme text := coalesce(p_theme, '');
  v_id bigint;
begin
  if p_client is null then raise exception 'missing client'; end if;
  if char_length(v_name) < 1 or char_length(v_name) > 12 then raise exception 'name must be 1-12 characters'; end if;
  if char_length(v_title) > 20 then raise exception 'title too long'; end if;
  if p_look is null or jsonb_typeof(p_look) <> 'object' or octet_length(p_look::text) > 4000 then raise exception 'invalid look'; end if;
  if v_theme !~ '^[a-z]{0,16}$' then v_theme := ''; end if;
  if exists (select 1 from public.dressup_posts where client_id = p_client and created_at > now() - interval '20 seconds') then
    raise exception 'too many requests';
  end if;
  if (select count(*) from public.dressup_posts where client_id = p_client and created_at > now() - interval '1 day') >= 10 then
    raise exception 'daily limit';
  end if;
  insert into public.dressup_posts (client_id, name, title, look, theme, contest)
  values (p_client, v_name, v_title, p_look, v_theme, case when p_contest then public.dressup_week() else '' end)
  returning id into v_id;
  return v_id;
end $$;

-- 穿搭牆：p_sort = 'new' 最新、'week' 本週最多讚、'top' 歷來最多讚、'mine' 我貼的、'contest' 本週比賽（讚數排名）
drop function if exists public.dressup_wall(text, uuid, int, int);
create or replace function public.dressup_wall(p_sort text default 'new', p_client uuid default null, p_limit int default 24, p_offset int default 0)
returns table(id bigint, name text, title text, look jsonb, theme text, contest text, likes int, liked boolean, mine boolean, created_at timestamptz)
language sql stable security definer set search_path = public as $$
  select p.id, p.name, p.title, p.look, p.theme, p.contest, p.likes,
         (p_client is not null and exists (select 1 from public.dressup_likes l where l.post_id = p.id and l.client_id = p_client)) as liked,
         (p_client is not null and p.client_id = p_client) as mine,
         p.created_at
  from public.dressup_posts p
  where (not p.hidden or (p_sort = 'mine' and p.client_id = p_client))
    and (p_sort <> 'week' or p.created_at > now() - interval '7 days')
    and (p_sort <> 'mine' or p.client_id = p_client)
    and (p_sort <> 'contest' or p.contest = public.dressup_week())
  order by case when p_sort in ('week', 'top', 'contest') then p.likes else 0 end desc,
           case when p_sort = 'contest' then p.created_at end asc,
           p.created_at desc
  limit least(greatest(coalesce(p_limit, 24), 1), 48)
  offset greatest(coalesce(p_offset, 0), 0);
$$;

-- 名人堂：過去幾週的比賽，每週讚數最多的前三名（至少要有 1 個讚）
create or replace function public.dressup_hall(p_weeks int default 8)
returns table(week text, rank bigint, id bigint, name text, title text, look jsonb, likes int)
language sql stable security definer set search_path = public as $$
  with ranked as (
    select p.contest as week, row_number() over (partition by p.contest order by p.likes desc, p.created_at) as rank,
           p.id, p.name, p.title, p.look, p.likes
    from public.dressup_posts p
    where p.contest <> '' and p.contest < public.dressup_week() and not p.hidden and p.likes > 0
  )
  select * from ranked
  where rank <= 3 and week in (select distinct contest from public.dressup_posts where contest <> '' and contest < public.dressup_week() order by contest desc limit least(greatest(coalesce(p_weeks, 8), 1), 30))
  order by week desc, rank;
$$;

-- 按讚：比賽已經結束的穿搭不能再按（名次固定）
create or replace function public.dressup_like(p_client uuid, p_id bigint)
returns json
language plpgsql security definer set search_path = public as $$
declare v_liked boolean; v_likes int; v_contest text;
begin
  if p_client is null then raise exception 'missing client'; end if;
  select contest into v_contest from public.dressup_posts where id = p_id and not hidden;
  if not found then raise exception 'not found'; end if;
  if v_contest <> '' and v_contest <> public.dressup_week() then raise exception 'contest closed'; end if;
  if exists (select 1 from public.dressup_posts where id = p_id and client_id = p_client) then raise exception 'own post'; end if;
  if exists (select 1 from public.dressup_likes where post_id = p_id and client_id = p_client) then
    delete from public.dressup_likes where post_id = p_id and client_id = p_client;
    v_liked := false;
  else
    insert into public.dressup_likes (post_id, client_id) values (p_id, p_client);
    v_liked := true;
  end if;
  update public.dressup_posts set likes = (select count(*) from public.dressup_likes where post_id = p_id)
  where id = p_id returning likes into v_likes;
  return json_build_object('likes', v_likes, 'liked', v_liked);
end $$;

-- ---------- 管理中心（只有 admins 名單裡的人能用） ----------
-- p_filter = 'reported' 被檢舉過的、'hidden' 已隱藏的、'all' 全部（最新 100 筆）
create or replace function public.dressup_admin_list(p_filter text default 'reported')
returns table(id bigint, name text, title text, look jsonb, theme text, contest text, likes int, reports int, hidden boolean, created_at timestamptz)
language sql stable security definer set search_path = public as $$
  select p.id, p.name, p.title, p.look, p.theme, p.contest, p.likes, p.reports, p.hidden, p.created_at
  from public.dressup_posts p
  where public.is_admin()
    and (p_filter <> 'reported' or p.reports > 0)
    and (p_filter <> 'hidden' or p.hidden)
  order by case when p_filter = 'reported' then p.reports else 0 end desc, p.created_at desc
  limit 100;
$$;
create or replace function public.dressup_admin_set(p_id bigint, p_hidden boolean)
returns void
language plpgsql security definer set search_path = public as $$
begin
  if not public.is_admin() then raise exception 'not admin'; end if;
  update public.dressup_posts set hidden = p_hidden, reports = case when p_hidden then reports else 0 end where id = p_id;
  if not p_hidden then delete from public.dressup_reports where post_id = p_id; end if;
end $$;
create or replace function public.dressup_admin_delete(p_id bigint)
returns void
language plpgsql security definer set search_path = public as $$
begin
  if not public.is_admin() then raise exception 'not admin'; end if;
  delete from public.dressup_posts where id = p_id;
end $$;

grant execute on function public.dressup_week() to anon, authenticated;
grant execute on function public.dressup_post(uuid, text, text, jsonb, text, boolean) to anon, authenticated;
grant execute on function public.dressup_wall(text, uuid, int, int) to anon, authenticated;
grant execute on function public.dressup_hall(int) to anon, authenticated;
grant execute on function public.dressup_like(uuid, bigint) to anon, authenticated;
revoke execute on function public.dressup_admin_list(text) from public, anon;
revoke execute on function public.dressup_admin_set(bigint, boolean) from public, anon;
revoke execute on function public.dressup_admin_delete(bigint) from public, anon;
grant execute on function public.dressup_admin_list(text) to authenticated;
grant execute on function public.dressup_admin_set(bigint, boolean) to authenticated;
grant execute on function public.dressup_admin_delete(bigint) to authenticated;
