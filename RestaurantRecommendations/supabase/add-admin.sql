-- 把你自己設成管理員：先在 Authentication → Users 建好你的帳號，
-- 再把下面的 email 換成你的，在 SQL Editor 執行一次。
insert into public.admins (user_id)
select id from auth.users where email = '你的email@example.com'
on conflict do nothing;

-- 確認：應該會列出你的 email
select u.email from public.admins a join auth.users u on u.id = a.user_id;
