-- =========================================================
-- 揪團投票 v5：同名字就能編輯自己的推薦
-- 換了瀏覽器或手機會變成新的身分；這裡讓「目前登入的名字」和推薦人名字一樣的人，
-- 也能編輯、刪除那筆推薦（名字比對忽略前後空白和英文大小寫）。
-- 原本的規則照舊：推薦的本人（同一個身分）和活動主辦人都可以。
-- 注意：別人登入時打一樣的名字也能改，這是為了方便換裝置而接受的取捨。
-- 在 Supabase 的 SQL Editor 執行一次（可重複執行，不會改動任何資料）。
-- =========================================================

-- 目前登入的人，名字是不是 n
create or replace function public.is_my_name(n text) returns boolean
language sql stable security definer set search_path = public as $$
  select exists (
    select 1 from public.profiles p
    where p.id = auth.uid() and trim(p.name) <> '' and lower(trim(p.name)) = lower(trim(coalesce(n, '')))
  );
$$;
revoke execute on function public.is_my_name(text) from public, anon, authenticated;
grant execute on function public.is_my_name(text) to authenticated;

drop policy if exists "restaurants update" on public.restaurants;
create policy "restaurants update" on public.restaurants for update to authenticated
  using (created_by = auth.uid() or public.is_event_admin(event_id) or public.is_my_name(recommender))
  with check (created_by = auth.uid() or public.is_event_admin(event_id) or public.is_my_name(recommender));

drop policy if exists "restaurants delete" on public.restaurants;
create policy "restaurants delete" on public.restaurants for delete to authenticated
  using (created_by = auth.uid() or public.is_event_admin(event_id) or public.is_my_name(recommender));
