-- =========================================================
-- 餐廳推薦（RestaurantRecommendations）資料庫
-- 在 Supabase 後台的 SQL Editor 貼上整份執行一次即可。
-- 原則：每張表都開啟 RLS，預設誰都不能讀寫，下面逐一開放需要的權限。
-- =========================================================

-- 使用者名稱（匿名登入的人也有一筆，id 就是 Supabase 的使用者 id）
create table if not exists public.profiles (
  id uuid primary key references auth.users on delete cascade,
  name text not null check (char_length(name) between 1 and 30),
  created_at timestamptz not null default now()
);

-- 管理員名單（只能從後台的 SQL Editor 加人，網頁端不能改）
create table if not exists public.admins (
  user_id uuid primary key references auth.users on delete cascade
);

create or replace function public.is_admin() returns boolean
language sql stable security definer set search_path = public as $$
  select exists (select 1 from public.admins where user_id = auth.uid());
$$;

create table if not exists public.restaurants (
  id bigint generated always as identity primary key,
  name text not null,
  type text not null,
  price text not null,
  address text not null,
  distance text not null,
  rating real not null default 4 check (rating between 1 and 5),
  notes text not null default '',
  image_url text not null default '',
  recommender text not null default '',
  website_url text not null default '',
  created_by uuid default auth.uid() references auth.users on delete set null,
  created_at timestamptz not null default now()
);

create table if not exists public.votes (
  id bigint generated always as identity primary key,
  user_id uuid not null default auth.uid() references auth.users on delete cascade,
  restaurant_id bigint not null references public.restaurants on delete cascade,
  created_at timestamptz not null default now(),
  unique (user_id, restaurant_id)          -- 同一家餐廳只能投一票
);

-- 每人最多 2 票：由資料庫檢查，網頁端繞不過
create or replace function public.enforce_vote_limit() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  if (select count(*) from public.votes where user_id = new.user_id) >= 2 then
    raise exception '你已經用完 2 次投票機會了！請先取消一個現有投票再重試。' using errcode = 'P0001';
  end if;
  return new;
end;
$$;
drop trigger if exists votes_limit on public.votes;
create trigger votes_limit before insert on public.votes
  for each row execute function public.enforce_vote_limit();

-- ---------- 權限（RLS） ----------
alter table public.profiles enable row level security;
alter table public.admins enable row level security;
alter table public.restaurants enable row level security;
alter table public.votes enable row level security;

-- 餐廳：所有人都能看；登入的人能新增；只有新增的人自己和管理員能修改、刪除
drop policy if exists "restaurants read" on public.restaurants;
create policy "restaurants read" on public.restaurants for select to anon, authenticated using (true);
drop policy if exists "restaurants insert" on public.restaurants;
create policy "restaurants insert" on public.restaurants for insert to authenticated with check (created_by = auth.uid());
drop policy if exists "restaurants update" on public.restaurants;
create policy "restaurants update" on public.restaurants for update to authenticated
  using (created_by = auth.uid() or public.is_admin()) with check (created_by = auth.uid() or public.is_admin());
drop policy if exists "restaurants delete" on public.restaurants;
create policy "restaurants delete" on public.restaurants for delete to authenticated
  using (created_by = auth.uid() or public.is_admin());

-- 名稱：自己看自己的、管理員看全部；只能寫自己的
drop policy if exists "profiles read" on public.profiles;
create policy "profiles read" on public.profiles for select to authenticated using (id = auth.uid() or public.is_admin());
drop policy if exists "profiles insert" on public.profiles;
create policy "profiles insert" on public.profiles for insert to authenticated with check (id = auth.uid());
drop policy if exists "profiles update" on public.profiles;
create policy "profiles update" on public.profiles for update to authenticated using (id = auth.uid()) with check (id = auth.uid());

-- 投票：自己看自己的、管理員看全部；只能投自己的、取消自己的
drop policy if exists "votes read" on public.votes;
create policy "votes read" on public.votes for select to authenticated using (user_id = auth.uid() or public.is_admin());
drop policy if exists "votes insert" on public.votes;
create policy "votes insert" on public.votes for insert to authenticated with check (user_id = auth.uid());
drop policy if exists "votes delete" on public.votes;
create policy "votes delete" on public.votes for delete to authenticated using (user_id = auth.uid());

-- 建專案時關掉了「自動開放新表」，所以要明確授權
grant select on public.restaurants to anon, authenticated;
grant insert, update, delete on public.restaurants to authenticated;
grant select, insert, update on public.profiles to authenticated;
grant select, insert, delete on public.votes to authenticated;

-- ---------- 給所有人看的統計（不透露是誰投的） ----------
create or replace function public.restaurant_vote_counts()
returns table (restaurant_id bigint, vote_count bigint)
language sql stable security definer set search_path = public as $$
  select restaurant_id, count(*) from public.votes group by restaurant_id;
$$;

create or replace function public.unique_voters_count() returns bigint
language sql stable security definer set search_path = public as $$
  select count(distinct user_id) from public.votes;
$$;

-- 誰投了哪家：只有管理員拿得到名單，其他人拿到空的
create or replace function public.restaurant_voters(rid bigint)
returns table (id uuid, name text)
language sql stable security definer set search_path = public as $$
  select p.id, p.name from public.votes v join public.profiles p on p.id = v.user_id
  where v.restaurant_id = rid and public.is_admin();
$$;

revoke execute on function public.restaurant_vote_counts(), public.unique_voters_count(), public.restaurant_voters(bigint), public.is_admin() from public;
grant execute on function public.restaurant_vote_counts(), public.unique_voters_count() to anon, authenticated;
grant execute on function public.restaurant_voters(bigint), public.is_admin() to authenticated;
revoke execute on function public.enforce_vote_limit() from public, anon, authenticated;
