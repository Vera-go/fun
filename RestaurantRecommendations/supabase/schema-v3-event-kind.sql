-- =========================================================
-- 餐廳推薦 v3：活動類型（在 schema-v2-events.sql 之後執行一次，可重複執行）
-- 建立活動時可以選「餐廳」或「旅遊地點」（例如畢業旅行投票）。
-- 兩種活動共用同一套推薦、投票、截止日期，只有畫面上的用詞和欄位說明不同。
-- 現有的活動一律是「餐廳」，不受影響。
-- =========================================================

alter table public.events add column if not exists kind text not null default 'restaurant';
alter table public.events drop constraint if exists events_kind_check;
alter table public.events add constraint events_kind_check check (kind in ('restaurant', 'trip'));

-- 建立活動：多一個 p_kind（不傳就是餐廳，舊版網頁照樣能用）
drop function if exists public.create_event(text, text, date, date, int);
create or replace function public.create_event(p_title text, p_description text, p_recommend date, p_vote date, p_votes int default 2,
                                               p_kind text default 'restaurant')
returns table (code text, token text)
language plpgsql security definer set search_path = public, extensions as $$
declare c text; t text; eid bigint;
begin
  if auth.uid() is null then raise exception '請先登入' using errcode = 'P0001'; end if;
  if (select count(*) from public.events where created_by = auth.uid() and created_at > now() - interval '1 day') >= 10 then
    raise exception '一天最多建立 10 個活動' using errcode = 'P0001';
  end if;
  if p_vote < p_recommend then raise exception '最後投票日期不能早於推薦截止日期' using errcode = 'P0001'; end if;
  if coalesce(p_kind, 'restaurant') not in ('restaurant', 'trip') then raise exception '活動類型不正確' using errcode = 'P0001'; end if;
  loop
    c := lower(substr(translate(encode(gen_random_bytes(9), 'base64'), '+/=', 'xyz'), 1, 8));
    exit when not exists (select 1 from public.events where events.code = c);
  end loop;
  t := encode(gen_random_bytes(18), 'hex');
  insert into public.events (code, title, description, recommend_deadline, vote_deadline, votes_per_person, admin_token_hash, kind)
  values (c, trim(p_title), coalesce(trim(p_description), ''), p_recommend, p_vote, coalesce(p_votes, 2), encode(digest(t, 'sha256'), 'hex'),
          coalesce(p_kind, 'restaurant'))
  returning id into eid;
  insert into public.event_admins (event_id, user_id) values (eid, auth.uid());
  return query select c, t;
end;
$$;

-- 用活動代碼查活動：多回傳 kind（回傳欄位變了，要先刪掉舊的）
drop function if exists public.get_event(text);
create or replace function public.get_event(p_code text)
returns table (id bigint, code text, title text, description text, recommend_deadline date, vote_deadline date,
               votes_per_person int, today date, is_admin boolean, kind text)
language sql stable security definer set search_path = public as $$
  select e.id, e.code, e.title, e.description, e.recommend_deadline, e.vote_deadline, e.votes_per_person,
         public.tw_today(), public.is_event_admin(e.id), e.kind
  from public.events e where e.code = lower(p_code);
$$;

revoke execute on function public.create_event(text, text, date, date, int, text), public.get_event(text) from public, anon, authenticated;
grant execute on function public.get_event(text) to anon, authenticated;
grant execute on function public.create_event(text, text, date, date, int, text) to authenticated;
