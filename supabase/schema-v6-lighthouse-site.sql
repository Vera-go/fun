-- =========================================================
-- 許願池 v6：願望可以選「Lighthouse」這個網站
-- 之前資料表只允許 restaurant / wheel / english / nostrings / portal / new 六種，
-- 所以許願表單選不到 Lighthouse。這個檔案把 lighthouse 加進允許的清單。
-- 在 Supabase 的 SQL Editor 執行一次（可重複執行，不會動到現有的願望）。
-- 要先執行這個，再讓網站的新版本上線。
-- =========================================================
do $$
declare c text;
begin
  -- 找出 site 欄位原本的檢查規則（名字不一定叫什麼，所以用內容找）
  select conname into c
  from pg_constraint
  where conrelid = 'public.wishes'::regclass
    and contype = 'c'
    and pg_get_constraintdef(oid) ~ '\msite\M';
  if c is not null then
    execute format('alter table public.wishes drop constraint %I', c);
  end if;
  alter table public.wishes add constraint wishes_site_check
    check (site in ('restaurant', 'wheel', 'english', 'nostrings', 'lighthouse', 'portal', 'new'));
end $$;
