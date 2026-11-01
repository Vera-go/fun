-- =========================================================
-- v18：安全性補強（要先執行過 v3 到 v17）
-- 在 Supabase 的 SQL Editor 貼上整份、按 Run 執行一次（可重複執行，不會刪掉任何現有資料）。
--
-- 為什麼要補：作品牆、排行榜用「瀏覽器自己產生的代號（client_id）」認人，
-- 有心人每次換一個新代號，就能繞過「每人」的限制。所以這裡加上「全站」的上限，
-- 並把可以被一個人濫用的功能改掉。
--
-- 1. 作品牆檢舉：不再「3 個人檢舉就自動隱藏」（換代號就能把整面牆藏光），
--    改成送到管理中心，由管理員決定隱藏或刪除；檢舉本身也有次數上限
-- 2. 作品牆：全站每分鐘最多貼 30 個作品；每個作品每 10 分鐘最多多 30 個讚、全站每分鐘最多 300 個讚
-- 3. 作品牆、排行榜的名字和標題：擋掉不雅字詞（跟許願池同一份清單）
-- 4. 排行榜（電玩廳、喵喵列車）：全站每分鐘新加入的玩家有上限，避免被大量假名字洗版
-- 5. 許願池：建立時間一律由資料庫填（原本可以自己填一個很久以前的時間，繞過「每天 5 個」）；
--    只開放填網站、標題、內容、名字這四個欄位
-- 6. 英文教室同步碼：進度資料上限從 2MB 降到 500KB；裝置時間不能比現在晚太多（避免卡死別人的進度）；
--    資料表再多鎖一層
-- 7. 各列表函式的分頁加上上限
-- =========================================================

-- ---------- 共用：不雅字詞檢查 ----------
create or replace function public.has_bad_word(p text) returns boolean
language plpgsql immutable set search_path = public as $$
declare bad text[] := array['幹', '靠北', '靠杯', '白癡', '白痴', '智障', '垃圾', '去死', '婊', '賤', '屌', '雞巴', 'fuck', 'shit', 'bitch'];
        w text;
begin
  foreach w in array bad loop
    if position(w in lower(coalesce(p, ''))) > 0 then return true; end if;
  end loop;
  return false;
end $$;

-- ---------- 1. 作品牆檢舉：改成送管理員審核 ----------
create or replace function public.dressup_report(p_client uuid, p_id bigint)
returns json
language plpgsql security definer set search_path = public as $$
declare v_reports int;
begin
  if p_client is null then raise exception 'missing client'; end if;
  -- 全站每分鐘最多 20 次檢舉、同一個瀏覽器一天最多 20 次
  if (select count(*) from public.dressup_reports where created_at > now() - interval '1 minute') >= 20 then raise exception 'too many requests'; end if;
  if (select count(*) from public.dressup_reports where client_id = p_client and created_at > now() - interval '1 day') >= 20 then raise exception 'daily limit'; end if;
  insert into public.dressup_reports (post_id, client_id) values (p_id, p_client) on conflict do nothing;
  -- 只記錄被檢舉幾次，不自動隱藏；管理中心「被檢舉的」會照檢舉次數排好
  update public.dressup_posts set reports = (select count(*) from public.dressup_reports where post_id = p_id)
  where id = p_id returning reports into v_reports;
  return json_build_object('reports', coalesce(v_reports, 0));
end $$;
grant execute on function public.dressup_report(uuid, bigint) to anon, authenticated;

-- ---------- 2、3. 作品牆：全站上限、不雅字詞（用觸發器，不用改原本的函式） ----------
create or replace function public.dressup_posts_guard() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  if public.has_bad_word(new.name || ' ' || new.title) then raise exception 'bad words'; end if;
  if (select count(*) from public.dressup_posts where created_at > now() - interval '1 minute') >= 30 then raise exception 'too many requests'; end if;
  new.created_at := now();
  return new;
end $$;
drop trigger if exists dressup_posts_guard on public.dressup_posts;
create trigger dressup_posts_guard before insert on public.dressup_posts for each row execute function public.dressup_posts_guard();

create or replace function public.dressup_likes_guard() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  if (select count(*) from public.dressup_likes where created_at > now() - interval '1 minute') >= 300 then raise exception 'too many requests'; end if;
  if (select count(*) from public.dressup_likes where post_id = new.post_id and created_at > now() - interval '10 minutes') >= 30 then raise exception 'too many requests'; end if;
  new.created_at := now();
  return new;
end $$;
drop trigger if exists dressup_likes_guard on public.dressup_likes;
create trigger dressup_likes_guard before insert on public.dressup_likes for each row execute function public.dressup_likes_guard();

-- ---------- 4. 排行榜：不雅字詞、全站每分鐘新玩家上限 ----------
create or replace function public.arcade_scores_guard() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  if public.has_bad_word(new.name) then raise exception 'bad words'; end if;
  -- 新玩家（第一次上傳這個遊戲）：全站每分鐘最多 200 筆（一個人第一次同步時，可能一次上傳好幾個遊戲）
  if tg_op = 'INSERT' and (select count(*) from public.arcade_scores where created_at > now() - interval '1 minute') >= 200 then
    raise exception 'too many requests';
  end if;
  return new;
end $$;
drop trigger if exists arcade_scores_guard on public.arcade_scores;
create trigger arcade_scores_guard before insert or update of name on public.arcade_scores for each row execute function public.arcade_scores_guard();

create or replace function public.meowtrain_scores_guard() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  if public.has_bad_word(new.name) then raise exception 'bad words'; end if;
  if tg_op = 'INSERT' and (select count(*) from public.meowtrain_scores where created_at > now() - interval '1 minute') >= 30 then
    raise exception 'too many requests';
  end if;
  return new;
end $$;
drop trigger if exists meowtrain_scores_guard on public.meowtrain_scores;
create trigger meowtrain_scores_guard before insert or update of name on public.meowtrain_scores for each row execute function public.meowtrain_scores_guard();

-- ---------- 5. 許願池：建立時間由資料庫填、只開放四個欄位 ----------
create or replace function public.wishes_stamp() returns trigger
language plpgsql as $$
begin
  new.created_at := now();
  return new;
end $$;
drop trigger if exists wishes_stamp on public.wishes;
create trigger wishes_stamp before insert on public.wishes for each row execute function public.wishes_stamp();

revoke insert on public.wishes from authenticated;
grant insert (site, title, detail, author_name) on public.wishes to authenticated;

-- ---------- 6. 英文教室同步碼 ----------
create or replace function public.english_sync_create(p_state jsonb, p_updated bigint) returns text
language plpgsql security definer set search_path = public, extensions as $$
declare alphabet text := 'ABCDEFGHJKMNPQRSTUVWXYZ23456789'; c text; i int;
        v_now bigint := (extract(epoch from now()) * 1000)::bigint;
begin
  if p_state is null or octet_length(p_state::text) > 500000 then raise exception '進度資料太大' using errcode = 'P0001'; end if;
  if (select count(*) from public.english_sync where created_at > now() - interval '1 minute') >= 30 then
    raise exception '現在太多人在產生同步碼，請稍後再試' using errcode = 'P0001';
  end if;
  loop
    c := '';
    for i in 1..8 loop c := c || substr(alphabet, 1 + (get_byte(gen_random_bytes(1), 0) % length(alphabet)), 1); end loop;
    exit when not exists (select 1 from public.english_sync where code = c);
  end loop;
  insert into public.english_sync (code, state, updated_at) values (c, p_state, least(coalesce(p_updated, 0), v_now + 60000));
  return c;
end $$;

create or replace function public.english_sync_push(p_code text, p_state jsonb, p_updated bigint) returns bigint
language plpgsql security definer set search_path = public as $$
declare cur bigint; v_upd bigint := least(coalesce(p_updated, 0), (extract(epoch from now()) * 1000)::bigint + 60000);   -- 不能比現在晚超過 1 分鐘
begin
  if p_state is null or octet_length(p_state::text) > 500000 then raise exception '進度資料太大' using errcode = 'P0001'; end if;
  select s.updated_at into cur from public.english_sync s where s.code = upper(p_code) for update;
  if cur is null then raise exception '找不到這組同步碼' using errcode = 'P0002'; end if;
  if v_upd > cur then
    update public.english_sync s set state = p_state, updated_at = v_upd, touched_at = now() where s.code = upper(p_code);
    return v_upd;
  end if;
  return cur;
end $$;

revoke all on public.english_sync from anon, authenticated;
do $$ begin
  if to_regclass('public.lighthouse_planes') is not null then execute 'revoke all on public.lighthouse_planes from anon, authenticated'; end if;
end $$;

-- ---------- 7. 列表的分頁上限 ----------
create or replace function public.dressup_wall(p_sort text default 'new', p_client uuid default null, p_limit int default 24, p_offset int default 0)
returns table(id bigint, name text, title text, look jsonb, theme text, contest text, likes int, liked boolean, mine boolean, created_at timestamptz)
language sql stable security definer set search_path = public as $$
  select p.id, p.name, p.title, p.look, p.theme, p.contest, p.likes,
         (p_client is not null and exists (select 1 from public.dressup_likes l where l.post_id = p.id and l.client_id = p_client)) as liked,
         (p_client is not null and p.client_id = p_client) as mine,
         p.created_at
  from public.dressup_posts p
  where (not p.hidden or (p_sort = 'mine' and p.client_id = p_client))
    and (p_sort <> 'week' or p.created_at > now() - interval '7 days')
    and (p_sort <> 'mine' or p.client_id = p_client)
    and (p_sort <> 'contest' or p.contest = public.dressup_week())
  order by case when p_sort in ('week', 'top', 'contest') then p.likes else 0 end desc,
           case when p_sort = 'contest' then p.created_at end asc,
           p.created_at desc
  limit least(greatest(coalesce(p_limit, 24), 1), 48)
  offset least(greatest(coalesce(p_offset, 0), 0), 2000);
$$;
grant execute on function public.dressup_wall(text, uuid, int, int) to anon, authenticated;

-- 執行完可以用這行確認：應該會看到 6 個觸發器
-- select tgname from pg_trigger where tgname in ('dressup_posts_guard','dressup_likes_guard','arcade_scores_guard','meowtrain_scores_guard','wishes_stamp','wishes_check');
