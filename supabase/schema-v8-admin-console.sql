-- =========================================================
-- 管理中心 v8：許願池下方的管理中心可以看到所有揪團投票活動
-- 只有 admins 名單裡的人（你）拿得到資料；其他人呼叫只會拿到空的。
-- 刪除活動沿用 delete_event（主辦人或你都能刪）。
-- 在 Supabase 的 SQL Editor 執行一次（可重複執行，不會改動任何資料）。
-- 需要先執行過揪團投票的 schema-v3-event-kind.sql（events 有 kind 欄位）。
-- =========================================================

create or replace function public.admin_list_events()
returns table (code text, title text, kind text, created_at timestamptz, recommend_deadline date, vote_deadline date,
               items bigint, voters bigint, today date)
language sql stable security definer set search_path = public as $$
  select e.code, e.title, e.kind, e.created_at, e.recommend_deadline, e.vote_deadline,
         (select count(*) from public.restaurants r where r.event_id = e.id),
         (select count(distinct v.user_id) from public.votes v join public.restaurants r on r.id = v.restaurant_id where r.event_id = e.id),
         public.tw_today()
  from public.events e
  where public.is_admin()
  order by e.created_at desc;
$$;

revoke execute on function public.admin_list_events() from public, anon, authenticated;
grant execute on function public.admin_list_events() to authenticated;
