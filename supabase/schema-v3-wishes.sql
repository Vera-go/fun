-- =========================================================
-- 全網最聽勸：許願池（和餐廳推薦共用同一個 Supabase 專案，在 SQL Editor 執行一次）
-- 只有許願和 +1；依 +1 排序；待處理和已完成分開；你可以標「不採納」（不公開）。
-- =========================================================

create table if not exists public.wishes (
  id bigint generated always as identity primary key,
  site text not null check (site in ('restaurant', 'wheel', 'english', 'nostrings', 'portal', 'new')),
  title text not null check (char_length(title) between 4 and 60),
  detail text not null default '' check (char_length(detail) <= 500),
  author_name text not null check (char_length(author_name) between 1 and 20),
  created_by uuid not null default auth.uid() references auth.users on delete cascade,
  status text not null default 'open' check (status in ('open', 'doing', 'done', 'rejected')),
  admin_note text not null default '',      -- 你的回覆，例如不採納的原因、做了什麼
  done_url text not null default '',        -- 完成後的連結
  created_at timestamptz not null default now(),
  done_at timestamptz
);
create table if not exists public.wish_votes (
  wish_id bigint not null references public.wishes on delete cascade,
  user_id uuid not null default auth.uid() references auth.users on delete cascade,
  created_at timestamptz not null default now(),
  primary key (wish_id, user_id)            -- 每個人每個願望只能 +1 一次
);
alter table public.wishes enable row level security;
alter table public.wish_votes enable row level security;

-- 許願的檢查：不雅字詞、每人每天最多 5 個願望；新願望一律從「待處理」開始
create or replace function public.check_wish() returns trigger
language plpgsql security definer set search_path = public as $$
declare bad text[] := array['幹', '靠北', '靠杯', '白癡', '白痴', '智障', '垃圾', '去死', '婊', '賤', '屌', '雞巴', 'fuck', 'shit', 'bitch'];
        w text;
begin
  foreach w in array bad loop
    if position(w in lower(new.title || ' ' || new.detail || ' ' || new.author_name)) > 0 then
      raise exception '內容有不適合的字詞，請修改後再送出' using errcode = 'P0001';
    end if;
  end loop;
  if (select count(*) from public.wishes where created_by = new.created_by and created_at > now() - interval '1 day') >= 5 then
    raise exception '每人每天最多許 5 個願望，明天再來吧！' using errcode = 'P0001';
  end if;
  new.status := 'open'; new.admin_note := ''; new.done_url := ''; new.done_at := null;
  return new;
end;
$$;
drop trigger if exists wishes_check on public.wishes;
create trigger wishes_check before insert on public.wishes for each row execute function public.check_wish();

-- 許願的人自動幫自己 +1
create or replace function public.auto_vote_wish() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  insert into public.wish_votes (wish_id, user_id) values (new.id, new.created_by) on conflict do nothing;
  return new;
end;
$$;
drop trigger if exists wishes_autovote on public.wishes;
create trigger wishes_autovote after insert on public.wishes for each row execute function public.auto_vote_wish();

-- 狀態改成已完成時記下時間
create or replace function public.stamp_wish_done() returns trigger
language plpgsql as $$
begin
  if new.status = 'done' and old.status <> 'done' then new.done_at := now(); end if;
  if new.status <> 'done' then new.done_at := null; end if;
  return new;
end;
$$;
drop trigger if exists wishes_done on public.wishes;
create trigger wishes_done before update on public.wishes for each row execute function public.stamp_wish_done();

-- ---------- 權限 ----------
-- 願望：大家都看得到（不採納的只有你看得到）；登入（匿名也可）就能許願；只有你能改狀態；許願的人可以刪掉自己還沒處理的願望
drop policy if exists "wishes read" on public.wishes;
create policy "wishes read" on public.wishes for select to anon, authenticated using (status <> 'rejected' or public.is_admin());
drop policy if exists "wishes insert" on public.wishes;
create policy "wishes insert" on public.wishes for insert to authenticated with check (created_by = auth.uid());
drop policy if exists "wishes update" on public.wishes;
create policy "wishes update" on public.wishes for update to authenticated using (public.is_admin()) with check (public.is_admin());
drop policy if exists "wishes delete" on public.wishes;
create policy "wishes delete" on public.wishes for delete to authenticated
  using (public.is_admin() or (created_by = auth.uid() and status = 'open'));

-- +1：只能加、取消自己的；已完成或不採納的願望不能再 +1
drop policy if exists "wish votes read" on public.wish_votes;
create policy "wish votes read" on public.wish_votes for select to authenticated using (user_id = auth.uid());
drop policy if exists "wish votes insert" on public.wish_votes;
create policy "wish votes insert" on public.wish_votes for insert to authenticated
  with check (user_id = auth.uid() and exists (select 1 from public.wishes w where w.id = wish_id and w.status in ('open', 'doing')));
drop policy if exists "wish votes delete" on public.wish_votes;
create policy "wish votes delete" on public.wish_votes for delete to authenticated using (user_id = auth.uid());

grant select on public.wishes to anon, authenticated;
grant insert, update, delete on public.wishes to authenticated;
grant select, insert, delete on public.wish_votes to authenticated;

-- 列出願望和 +1 數（mine：目前的人有沒有 +1 過）
create or replace function public.list_wishes()
returns table (id bigint, site text, title text, detail text, author_name text, status text, admin_note text,
               done_url text, created_at timestamptz, done_at timestamptz, votes bigint, mine boolean, is_author boolean)
language sql stable security definer set search_path = public as $$
  select w.id, w.site, w.title, w.detail, w.author_name, w.status, w.admin_note, w.done_url, w.created_at, w.done_at,
         (select count(*) from public.wish_votes v where v.wish_id = w.id),
         exists (select 1 from public.wish_votes v where v.wish_id = w.id and v.user_id = auth.uid()),
         w.created_by = auth.uid()
  from public.wishes w
  where w.status <> 'rejected' or public.is_admin();
$$;

revoke execute on function public.list_wishes(), public.check_wish(), public.auto_vote_wish(), public.stamp_wish_done() from public, anon, authenticated;
grant execute on function public.list_wishes() to anon, authenticated;
-- 讀取規則裡的 is_admin() 沒登入的訪客也要能執行（對他們一律回傳 false）
grant execute on function public.is_admin() to anon;
