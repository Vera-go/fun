-- =========================================================
-- 管理中心 v9：揪團投票的主辦人管理（只有 admins 名單裡的人＝你能用）
-- 1. 重新產生管理連結：主辦人忘了管理連結時用；舊連結失效，已經開過的裝置還是主辦人
-- 2. 主辦人名單：看每個活動有哪些主辦人（名字、成為主辦人的時間），可以移除
-- 在 Supabase 的 SQL Editor 執行一次（可重複執行，不會刪除任何資料）。
-- 需要先執行過 schema-v8-admin-console.sql。
-- =========================================================
create extension if not exists pgcrypto with schema extensions;

-- 記下每個主辦人是什麼時候加入的（之前的主辦人沒有紀錄，會顯示成執行這份檔案的時間）
alter table public.event_admins add column if not exists added_at timestamptz not null default now();

-- 活動總覽多回傳主辦人數（回傳欄位變了，要先刪掉舊的再建）
drop function if exists public.admin_list_events();
create or replace function public.admin_list_events()
returns table (code text, title text, kind text, created_at timestamptz, recommend_deadline date, vote_deadline date,
               items bigint, voters bigint, hosts bigint, today date)
language sql stable security definer set search_path = public as $$
  select e.code, e.title, e.kind, e.created_at, e.recommend_deadline, e.vote_deadline,
         (select count(*) from public.restaurants r where r.event_id = e.id),
         (select count(distinct v.user_id) from public.votes v join public.restaurants r on r.id = v.restaurant_id where r.event_id = e.id),
         (select count(*) from public.event_admins a where a.event_id = e.id),
         public.tw_today()
  from public.events e
  where public.is_admin()
  order by e.created_at desc;
$$;

-- 主辦人名單：名字是他在揪團投票登入時填的（沒登入過就是空的）
create or replace function public.admin_list_event_hosts(p_code text)
returns table (user_id uuid, name text, is_creator boolean, added_at timestamptz)
language sql stable security definer set search_path = public as $$
  select a.user_id, p.name, a.user_id = e.created_by, a.added_at
  from public.events e
  join public.event_admins a on a.event_id = e.id
  left join public.profiles p on p.id = a.user_id
  where e.code = lower(p_code) and public.is_admin()
  order by a.added_at;
$$;

-- 移除主辦人：那台裝置之後打開活動就只是一般參加者
create or replace function public.admin_remove_event_host(p_code text, p_user uuid) returns boolean
language plpgsql security definer set search_path = public as $$
begin
  if not public.is_admin() then raise exception '只有網站管理員可以移除主辦人' using errcode = 'P0001'; end if;
  delete from public.event_admins a using public.events e
  where a.event_id = e.id and e.code = lower(p_code) and a.user_id = p_user;
  return found;
end;
$$;

-- 重新產生管理連結：回傳新的管理密碼（只會出現這一次，資料庫只存它的指紋）
create or replace function public.admin_reset_event_token(p_code text) returns text
language plpgsql security definer set search_path = public, extensions as $$
declare t text;
begin
  if not public.is_admin() then raise exception '只有網站管理員可以重新產生管理連結' using errcode = 'P0001'; end if;
  t := encode(gen_random_bytes(18), 'hex');
  update public.events set admin_token_hash = encode(digest(t, 'sha256'), 'hex') where code = lower(p_code);
  if not found then raise exception '找不到這個活動' using errcode = 'P0001'; end if;
  return t;
end;
$$;

revoke execute on function public.admin_list_events(), public.admin_list_event_hosts(text),
  public.admin_remove_event_host(text, uuid), public.admin_reset_event_token(text) from public, anon, authenticated;
grant execute on function public.admin_list_events(), public.admin_list_event_hosts(text),
  public.admin_remove_event_host(text, uuid), public.admin_reset_event_token(text) to authenticated;
