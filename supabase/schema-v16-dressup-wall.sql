-- =========================================================
-- v16：換裝小舞台「穿搭牆」
-- 大家可以把穿搭貼上來、按讚、看排行；每個瀏覽器用自己產生的代號（client_id），不用登入。
-- 資料表不開放直接讀寫，只能透過下面的函式，函式會檢查長度、頻率。
-- - 每個瀏覽器 20 秒內只能貼一次、一天最多貼 10 套
-- - 被 3 個不同的人檢舉，會自動隱藏（hidden = true）
-- 管理：到 Supabase 的 Table Editor 打開 dressup_posts，可以直接刪掉，或把 hidden 改成 true／false。
-- 在 Supabase 的 SQL Editor 執行一次（可重複執行）。
-- =========================================================
create table if not exists public.dressup_posts (
  id bigint generated always as identity primary key,
  client_id uuid not null,
  name text not null check (char_length(name) between 1 and 12),
  title text not null default '' check (char_length(title) <= 20),
  look jsonb not null check (jsonb_typeof(look) = 'object' and octet_length(look::text) <= 4000),
  theme text not null default '' check (theme ~ '^[a-z]{0,16}$'),
  likes int not null default 0,
  reports int not null default 0,
  hidden boolean not null default false,
  created_at timestamptz not null default now()
);
create index if not exists dressup_posts_new on public.dressup_posts (created_at desc);
create index if not exists dressup_posts_top on public.dressup_posts (likes desc, created_at desc);
create index if not exists dressup_posts_client on public.dressup_posts (client_id, created_at desc);

create table if not exists public.dressup_likes (
  post_id bigint not null references public.dressup_posts(id) on delete cascade,
  client_id uuid not null,
  created_at timestamptz not null default now(),
  primary key (post_id, client_id)
);
create table if not exists public.dressup_reports (
  post_id bigint not null references public.dressup_posts(id) on delete cascade,
  client_id uuid not null,
  created_at timestamptz not null default now(),
  primary key (post_id, client_id)
);
alter table public.dressup_posts enable row level security;
alter table public.dressup_likes enable row level security;
alter table public.dressup_reports enable row level security;
-- 不建立任何讀寫規則：訪客不能直接讀寫資料表，只能用下面的函式
revoke all on public.dressup_posts, public.dressup_likes, public.dressup_reports from anon, authenticated;

-- 貼上穿搭：回傳新的編號
create or replace function public.dressup_post(p_client uuid, p_name text, p_title text, p_look jsonb, p_theme text default '')
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
  insert into public.dressup_posts (client_id, name, title, look, theme)
  values (p_client, v_name, v_title, p_look, v_theme)
  returning id into v_id;
  return v_id;
end $$;

-- 穿搭牆：p_sort = 'new' 最新、'week' 本週最多讚、'top' 歷來最多讚、'mine' 我貼的
create or replace function public.dressup_wall(p_sort text default 'new', p_client uuid default null, p_limit int default 24, p_offset int default 0)
returns table(id bigint, name text, title text, look jsonb, theme text, likes int, liked boolean, mine boolean, created_at timestamptz)
language sql stable security definer set search_path = public as $$
  select p.id, p.name, p.title, p.look, p.theme, p.likes,
         (p_client is not null and exists (select 1 from public.dressup_likes l where l.post_id = p.id and l.client_id = p_client)) as liked,
         (p_client is not null and p.client_id = p_client) as mine,
         p.created_at
  from public.dressup_posts p
  where (not p.hidden or (p_sort = 'mine' and p.client_id = p_client))
    and (p_sort <> 'week' or p.created_at > now() - interval '7 days')
    and (p_sort <> 'mine' or p.client_id = p_client)
  order by case when p_sort in ('week', 'top') then p.likes else 0 end desc, p.created_at desc
  limit least(greatest(coalesce(p_limit, 24), 1), 48)
  offset greatest(coalesce(p_offset, 0), 0);
$$;

-- 按讚／收回讚：回傳現在的讚數和自己有沒有按
create or replace function public.dressup_like(p_client uuid, p_id bigint)
returns json
language plpgsql security definer set search_path = public as $$
declare v_liked boolean; v_likes int;
begin
  if p_client is null then raise exception 'missing client'; end if;
  if not exists (select 1 from public.dressup_posts where id = p_id and not hidden) then raise exception 'not found'; end if;
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

-- 刪掉自己貼的
create or replace function public.dressup_delete(p_client uuid, p_id bigint)
returns boolean
language plpgsql security definer set search_path = public as $$
begin
  delete from public.dressup_posts where id = p_id and client_id = p_client;
  return found;
end $$;

-- 檢舉：3 個不同的人檢舉就自動隱藏
create or replace function public.dressup_report(p_client uuid, p_id bigint)
returns json
language plpgsql security definer set search_path = public as $$
declare v_reports int;
begin
  if p_client is null then raise exception 'missing client'; end if;
  insert into public.dressup_reports (post_id, client_id) values (p_id, p_client) on conflict do nothing;
  update public.dressup_posts set reports = (select count(*) from public.dressup_reports where post_id = p_id),
         hidden = hidden or (select count(*) from public.dressup_reports where post_id = p_id) >= 3
  where id = p_id returning reports into v_reports;
  return json_build_object('reports', coalesce(v_reports, 0));
end $$;

grant execute on function public.dressup_post(uuid, text, text, jsonb, text) to anon, authenticated;
grant execute on function public.dressup_wall(text, uuid, int, int) to anon, authenticated;
grant execute on function public.dressup_like(uuid, bigint) to anon, authenticated;
grant execute on function public.dressup_delete(uuid, bigint) to anon, authenticated;
grant execute on function public.dressup_report(uuid, bigint) to anon, authenticated;
