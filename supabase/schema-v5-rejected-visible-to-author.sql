-- =========================================================
-- 許願池 v5：被標成「不採納」的願望，提出的人（同一個登入身分）自己也看得到，
-- 並看得到你寫的回覆；其他人仍然看不到。在 Supabase 的 SQL Editor 執行一次（可重複執行）。
-- 注意：許願的人是匿名登入，所以只有「提出願望的那個瀏覽器」看得到；換裝置或清除瀏覽資料就看不到了。
-- 這個檔案只改「誰看得到」，不改欄位、不改排序、不改 +1 的規則。
-- =========================================================

-- 1) 列出願望：不採納的，只有管理員和提出的人看得到
create or replace function public.list_wishes()
returns table (id bigint, site text, title text, detail text, author_name text, status text, admin_note text,
               done_url text, created_at timestamptz, done_at timestamptz, votes bigint, mine boolean, is_author boolean)
language sql stable security definer set search_path = public as $$
  select w.id, w.site, w.title, w.detail, w.author_name, w.status, w.admin_note, w.done_url, w.created_at, w.done_at,
         (select count(*) from public.wish_votes v where v.wish_id = w.id),
         exists (select 1 from public.wish_votes v where v.wish_id = w.id and v.user_id = auth.uid()),
         w.created_by = auth.uid()
  from public.wishes w
  where w.status <> 'rejected' or public.is_admin() or w.created_by = auth.uid();
$$;

-- 2) 資料表的讀取規則也同步（網頁用 list_wishes 讀，這裡只是保持一致）
drop policy if exists "wishes read" on public.wishes;
create policy "wishes read" on public.wishes for select to anon, authenticated
  using (status <> 'rejected' or public.is_admin() or created_by = auth.uid());
