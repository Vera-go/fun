-- =========================================================
-- 揪團投票 v4：同一個活動裡，同一個名字只算一個人
-- 投票是匿名身分（綁瀏覽器），換裝置、換瀏覽器、切換管理員帳號都會變成另一個身分。
-- 這裡加一條規則：這個活動裡如果已經有「另一個身分、用同樣的名字」投過票，就不能再投。
-- （名字比對會忽略前後空白和英文大小寫）
-- 在 Supabase 的 SQL Editor 執行一次（可重複執行，不會改動現有的票）。
-- =========================================================

create or replace function public.enforce_vote_limit() returns trigger
language plpgsql security definer set search_path = public as $$
declare lim int; used int; eid bigint; my_name text; other_voted boolean;
begin
  eid := public.event_of(new.restaurant_id);

  -- 同名字已經用另一個身分投過票
  select lower(trim(name)) into my_name from public.profiles where id = new.user_id;
  if my_name is not null and my_name <> '' then
    select exists (
      select 1 from public.votes v
      join public.restaurants r on r.id = v.restaurant_id
      join public.profiles p on p.id = v.user_id
      where r.event_id = eid and v.user_id <> new.user_id and lower(trim(p.name)) = my_name
    ) into other_voted;
    if other_voted then
      raise exception '「%」已經用另一個裝置或身分在這個活動投過票了。請回到原本投票的手機或電腦；如果是不同人，請換一個能區分的名字（例如加上座號）。',
        (select trim(name) from public.profiles where id = new.user_id) using errcode = 'P0001';
    end if;
  end if;

  -- 每人票數上限（每個活動各自的設定）
  select e.votes_per_person into lim from public.restaurants r join public.events e on e.id = r.event_id where r.id = new.restaurant_id;
  select count(*) into used from public.votes v join public.restaurants r on r.id = v.restaurant_id
    where v.user_id = new.user_id and r.event_id = eid;
  if used >= lim then
    raise exception '你已經用完 % 次投票機會了！請先取消一個現有投票再重試。', lim using errcode = 'P0001';
  end if;
  return new;
end;
$$;
