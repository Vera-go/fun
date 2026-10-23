-- =========================================================
-- 揪團投票 v6：同一個活動裡，同名字＝同一個人（投票也一樣）
-- v4 是「同名字的另一個身分不能投」；v5 讓同名字可以編輯推薦。
-- 這裡改成和編輯一致：換了瀏覽器或手機、用同樣的名字登入，
-- 就能看到自己投過哪些、取消、繼續投；票數上限合併計算，同一個選項也只能投一次。
-- 名字比對忽略前後空白和英文大小寫（is_my_name 在 v5 建立）。
-- 在 Supabase 的 SQL Editor 執行一次（可重複執行，不會改動現有的票）。
-- 需要先執行過 schema-v5-edit-by-name.sql。
-- =========================================================

-- 這張票的投票人是不是「我」：同一個身分，或同名字
create or replace function public.same_person(uid uuid) returns boolean
language sql stable security definer set search_path = public as $$
  select uid = auth.uid()
      or exists (select 1 from public.profiles p where p.id = uid and public.is_my_name(p.name));
$$;

-- 投票檢查：同一個選項不能重複投、票數上限合併計算
create or replace function public.enforce_vote_limit() returns trigger
language plpgsql security definer set search_path = public as $$
declare lim int; used int; eid bigint;
begin
  eid := public.event_of(new.restaurant_id);
  if exists (select 1 from public.votes v where v.restaurant_id = new.restaurant_id and public.same_person(v.user_id)) then
    raise exception '你已經投過這一個了（可能是用另一個裝置、同樣的名字投的）。' using errcode = 'P0001';
  end if;
  select e.votes_per_person into lim from public.events e where e.id = eid;
  select count(*) into used from public.votes v join public.restaurants r on r.id = v.restaurant_id
    where r.event_id = eid and public.same_person(v.user_id);
  if used >= lim then
    raise exception '你已經用完 % 次投票機會了（同樣的名字在其他裝置投的也算）！請先取消一個現有投票再重試。', lim using errcode = 'P0001';
  end if;
  return new;
end;
$$;

-- 我（含同名字）在這個活動投了哪些
create or replace function public.my_votes(p_event bigint) returns table (restaurant_id bigint)
language sql stable security definer set search_path = public as $$
  select v.restaurant_id from public.votes v join public.restaurants r on r.id = v.restaurant_id
  where r.event_id = p_event and public.same_person(v.user_id);
$$;

-- 取消投票：不管是哪個裝置投的，同名字都可以取消（截止後不行）
create or replace function public.unvote(p_restaurant bigint) returns boolean
language plpgsql security definer set search_path = public as $$
begin
  if not public.can_vote(p_restaurant) then raise exception '投票已經截止，不能再取消。' using errcode = 'P0001'; end if;
  delete from public.votes where restaurant_id = p_restaurant and public.same_person(user_id);
  return found;
end;
$$;

-- 參與投票人數：同名字算一個人
create or replace function public.unique_voters_count(p_event bigint) returns bigint
language sql stable security definer set search_path = public as $$
  select count(distinct coalesce(nullif(lower(trim(p.name)), ''), v.user_id::text))
  from public.votes v join public.restaurants r on r.id = v.restaurant_id
  left join public.profiles p on p.id = v.user_id
  where r.event_id = p_event;
$$;

revoke execute on function public.same_person(uuid), public.my_votes(bigint), public.unvote(bigint) from public, anon, authenticated;
grant execute on function public.same_person(uuid), public.my_votes(bigint), public.unvote(bigint) to authenticated;
grant execute on function public.unique_voters_count(bigint) to anon, authenticated;
