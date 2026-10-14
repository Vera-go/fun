-- =========================================================
-- 餐廳推薦 v2：多檔活動（在 schema.sql 之後執行一次）
-- 每個活動有自己的餐廳、票數、截止日期；主辦人用「專屬管理連結」管理。
-- 注意：會清空現有的餐廳和投票（v1 的資料表裡目前沒有正式資料）。
-- =========================================================
create extension if not exists pgcrypto with schema extensions;

-- 活動：不開放直接讀取（避免被列出所有活動），只能透過下面的函式用活動代碼查
create table if not exists public.events (
  id bigint generated always as identity primary key,
  code text not null unique,                       -- 邀請連結裡的活動代碼
  title text not null check (char_length(title) between 1 and 60),
  description text not null default '' check (char_length(description) <= 500),
  recommend_deadline date not null,                -- 這天（台灣時間）結束前可以推薦餐廳
  vote_deadline date not null,                     -- 這天（台灣時間）結束前可以投票
  votes_per_person int not null default 2 check (votes_per_person between 1 and 5),
  admin_token_hash text not null,                  -- 管理連結密碼的 sha256，原文不存
  created_by uuid default auth.uid() references auth.users on delete set null,
  created_at timestamptz not null default now(),
  check (vote_deadline >= recommend_deadline)
);
alter table public.events enable row level security;

-- 主辦人名單：打開管理連結時自動加入（每個裝置都要開過一次管理連結）
create table if not exists public.event_admins (
  event_id bigint not null references public.events on delete cascade,
  user_id uuid not null references auth.users on delete cascade,
  primary key (event_id, user_id)
);
alter table public.event_admins enable row level security;

-- 餐廳屬於某個活動
truncate public.votes, public.restaurants restart identity cascade;
alter table public.restaurants add column if not exists event_id bigint not null references public.events on delete cascade;
create index if not exists restaurants_event_idx on public.restaurants (event_id);

-- ---------- 小工具 ----------
create or replace function public.tw_today() returns date
language sql stable as $$ select (now() at time zone 'Asia/Taipei')::date; $$;

create or replace function public.is_event_admin(eid bigint) returns boolean
language sql stable security definer set search_path = public as $$
  select public.is_admin() or exists (select 1 from public.event_admins where event_id = eid and user_id = auth.uid());
$$;

create or replace function public.event_of(rid bigint) returns bigint
language sql stable security definer set search_path = public as $$
  select event_id from public.restaurants where id = rid;
$$;

create or replace function public.can_recommend(eid bigint) returns boolean
language sql stable security definer set search_path = public as $$
  select exists (select 1 from public.events where id = eid and public.tw_today() <= recommend_deadline)
      or public.is_event_admin(eid);
$$;

create or replace function public.can_vote(rid bigint) returns boolean
language sql stable security definer set search_path = public as $$
  select exists (select 1 from public.restaurants r join public.events e on e.id = r.event_id
                 where r.id = rid and public.tw_today() <= e.vote_deadline);
$$;

-- ---------- 權限規則（取代 v1 的寫入規則） ----------
drop policy if exists "restaurants insert" on public.restaurants;
create policy "restaurants insert" on public.restaurants for insert to authenticated
  with check (created_by = auth.uid() and public.can_recommend(event_id));
drop policy if exists "restaurants update" on public.restaurants;
create policy "restaurants update" on public.restaurants for update to authenticated
  using (created_by = auth.uid() or public.is_event_admin(event_id))
  with check (created_by = auth.uid() or public.is_event_admin(event_id));
drop policy if exists "restaurants delete" on public.restaurants;
create policy "restaurants delete" on public.restaurants for delete to authenticated
  using (created_by = auth.uid() or public.is_event_admin(event_id));

drop policy if exists "votes read" on public.votes;
create policy "votes read" on public.votes for select to authenticated
  using (user_id = auth.uid() or public.is_event_admin(public.event_of(restaurant_id)));
drop policy if exists "votes insert" on public.votes;
create policy "votes insert" on public.votes for insert to authenticated
  with check (user_id = auth.uid() and public.can_vote(restaurant_id));
drop policy if exists "votes delete" on public.votes;
create policy "votes delete" on public.votes for delete to authenticated
  using (user_id = auth.uid() and public.can_vote(restaurant_id));

-- 票數上限改成「每個活動各自的設定」
create or replace function public.enforce_vote_limit() returns trigger
language plpgsql security definer set search_path = public as $$
declare lim int; used int;
begin
  select e.votes_per_person into lim from public.restaurants r join public.events e on e.id = r.event_id where r.id = new.restaurant_id;
  select count(*) into used from public.votes v join public.restaurants r on r.id = v.restaurant_id
    where v.user_id = new.user_id and r.event_id = public.event_of(new.restaurant_id);
  if used >= lim then
    raise exception '你已經用完 % 次投票機會了！請先取消一個現有投票再重試。', lim using errcode = 'P0001';
  end if;
  return new;
end;
$$;

-- ---------- 活動相關函式 ----------
-- 建立活動：回傳活動代碼和管理連結密碼（密碼只會出現這一次）
create or replace function public.create_event(p_title text, p_description text, p_recommend date, p_vote date, p_votes int default 2)
returns table (code text, token text)
language plpgsql security definer set search_path = public, extensions as $$
declare c text; t text; eid bigint;
begin
  if auth.uid() is null then raise exception '請先登入' using errcode = 'P0001'; end if;
  if (select count(*) from public.events where created_by = auth.uid() and created_at > now() - interval '1 day') >= 10 then
    raise exception '一天最多建立 10 個活動' using errcode = 'P0001';
  end if;
  if p_vote < p_recommend then raise exception '最後投票日期不能早於推薦截止日期' using errcode = 'P0001'; end if;
  loop
    c := lower(substr(translate(encode(gen_random_bytes(9), 'base64'), '+/=', 'xyz'), 1, 8));
    exit when not exists (select 1 from public.events where events.code = c);
  end loop;
  t := encode(gen_random_bytes(18), 'hex');
  insert into public.events (code, title, description, recommend_deadline, vote_deadline, votes_per_person, admin_token_hash)
  values (c, trim(p_title), coalesce(trim(p_description), ''), p_recommend, p_vote, coalesce(p_votes, 2), encode(digest(t, 'sha256'), 'hex'))
  returning id into eid;
  insert into public.event_admins (event_id, user_id) values (eid, auth.uid());
  return query select c, t;
end;
$$;

-- 用活動代碼查活動（is_admin：目前的人是不是主辦人）
create or replace function public.get_event(p_code text)
returns table (id bigint, code text, title text, description text, recommend_deadline date, vote_deadline date,
               votes_per_person int, today date, is_admin boolean)
language sql stable security definer set search_path = public as $$
  select e.id, e.code, e.title, e.description, e.recommend_deadline, e.vote_deadline, e.votes_per_person,
         public.tw_today(), public.is_event_admin(e.id)
  from public.events e where e.code = lower(p_code);
$$;

-- 打開管理連結：密碼正確就把目前的人加為主辦人
create or replace function public.claim_event_admin(p_code text, p_token text) returns boolean
language plpgsql security definer set search_path = public, extensions as $$
declare eid bigint;
begin
  if auth.uid() is null then return false; end if;
  select id into eid from public.events where code = lower(p_code) and admin_token_hash = encode(digest(p_token, 'sha256'), 'hex');
  if eid is null then return false; end if;
  insert into public.event_admins (event_id, user_id) values (eid, auth.uid()) on conflict do nothing;
  return true;
end;
$$;

create or replace function public.update_event(p_code text, p_title text, p_description text, p_recommend date, p_vote date, p_votes int)
returns boolean
language plpgsql security definer set search_path = public as $$
declare eid bigint;
begin
  select id into eid from public.events where code = lower(p_code);
  if eid is null or not public.is_event_admin(eid) then raise exception '只有主辦人可以修改活動' using errcode = 'P0001'; end if;
  if p_vote < p_recommend then raise exception '最後投票日期不能早於推薦截止日期' using errcode = 'P0001'; end if;
  update public.events set title = trim(p_title), description = coalesce(trim(p_description), ''),
    recommend_deadline = p_recommend, vote_deadline = p_vote, votes_per_person = p_votes where id = eid;
  return true;
end;
$$;

create or replace function public.delete_event(p_code text) returns boolean
language plpgsql security definer set search_path = public as $$
declare eid bigint;
begin
  select id into eid from public.events where code = lower(p_code);
  if eid is null or not public.is_event_admin(eid) then raise exception '只有主辦人可以刪除活動' using errcode = 'P0001'; end if;
  delete from public.events where id = eid;
  return true;
end;
$$;

-- 統計改成以活動為單位（取代 v1 不分活動的版本）
drop function if exists public.restaurant_vote_counts();
drop function if exists public.unique_voters_count();
create or replace function public.restaurant_vote_counts(p_event bigint)
returns table (restaurant_id bigint, vote_count bigint)
language sql stable security definer set search_path = public as $$
  select v.restaurant_id, count(*) from public.votes v join public.restaurants r on r.id = v.restaurant_id
  where r.event_id = p_event group by v.restaurant_id;
$$;
create or replace function public.unique_voters_count(p_event bigint) returns bigint
language sql stable security definer set search_path = public as $$
  select count(distinct v.user_id) from public.votes v join public.restaurants r on r.id = v.restaurant_id where r.event_id = p_event;
$$;

-- 誰投了哪家：只有這個活動的主辦人（和你這個超級管理員）拿得到
create or replace function public.restaurant_voters(rid bigint)
returns table (id uuid, name text)
language sql stable security definer set search_path = public as $$
  select p.id, p.name from public.votes v join public.profiles p on p.id = v.user_id
  where v.restaurant_id = rid and public.is_event_admin(public.event_of(rid));
$$;

-- ---------- 執行權限 ----------
-- Supabase 預設會直接把函式權限給 anon、authenticated，所以三個都要先收回，再逐一開放
revoke execute on all functions in schema public from public, anon, authenticated;
grant execute on function public.get_event(text), public.restaurant_vote_counts(bigint), public.unique_voters_count(bigint) to anon, authenticated;
grant execute on function public.create_event(text, text, date, date, int), public.claim_event_admin(text, text),
  public.update_event(text, text, text, date, date, int), public.delete_event(text),
  public.restaurant_voters(bigint), public.is_admin() to authenticated;
-- RLS 規則裡會用到的小工具，登入的人要能執行
grant execute on function public.tw_today(), public.is_event_admin(bigint), public.event_of(bigint),
  public.can_recommend(bigint), public.can_vote(bigint) to anon, authenticated;
