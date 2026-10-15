-- =========================================================
-- 安安英文教室：同步碼（在 SQL Editor 執行一次）
-- 一組同步碼對應一份完整的學習進度；知道同步碼的裝置就能讀寫這份進度。
-- 資料表不開放直接讀寫，只能透過下面三個函式，而且一定要帶同步碼。
-- =========================================================

create table if not exists public.english_sync (
  code text primary key,                 -- 8 碼同步碼（不含容易看錯的 0 O 1 I L）
  state jsonb not null,                  -- 完整進度
  updated_at bigint not null,            -- 進度最後修改時間（毫秒，來自裝置）
  created_at timestamptz not null default now(),
  touched_at timestamptz not null default now()
);
alter table public.english_sync enable row level security;   -- 沒有任何規則：只能透過函式存取

-- 產生同步碼，並存入目前這台裝置的進度
create or replace function public.english_sync_create(p_state jsonb, p_updated bigint) returns text
language plpgsql security definer set search_path = public, extensions as $$
declare alphabet text := 'ABCDEFGHJKMNPQRSTUVWXYZ23456789'; c text; i int;
begin
  if octet_length(p_state::text) > 2000000 then raise exception '進度資料太大' using errcode = 'P0001'; end if;
  -- 防灌爆：全站每分鐘最多產生 30 組
  if (select count(*) from public.english_sync where created_at > now() - interval '1 minute') >= 30 then
    raise exception '現在太多人在產生同步碼，請稍後再試' using errcode = 'P0001';
  end if;
  loop
    c := '';
    for i in 1..8 loop c := c || substr(alphabet, 1 + (get_byte(gen_random_bytes(1), 0) % length(alphabet)), 1); end loop;
    exit when not exists (select 1 from public.english_sync where code = c);
  end loop;
  insert into public.english_sync (code, state, updated_at) values (c, p_state, p_updated);
  return c;
end;
$$;

-- 用同步碼讀取進度
create or replace function public.english_sync_pull(p_code text) returns table (state jsonb, updated_at bigint)
language plpgsql security definer set search_path = public as $$
begin
  update public.english_sync s set touched_at = now() where s.code = upper(p_code);
  return query select s.state, s.updated_at from public.english_sync s where s.code = upper(p_code);
end;
$$;

-- 用同步碼寫入進度：只有比雲端新的才寫入；回傳雲端目前的時間（比裝置新代表其他裝置更新過）
create or replace function public.english_sync_push(p_code text, p_state jsonb, p_updated bigint) returns bigint
language plpgsql security definer set search_path = public as $$
declare cur bigint;
begin
  if octet_length(p_state::text) > 2000000 then raise exception '進度資料太大' using errcode = 'P0001'; end if;
  select s.updated_at into cur from public.english_sync s where s.code = upper(p_code) for update;
  if cur is null then raise exception '找不到這組同步碼' using errcode = 'P0002'; end if;
  if p_updated > cur then
    update public.english_sync s set state = p_state, updated_at = p_updated, touched_at = now() where s.code = upper(p_code);
    return p_updated;
  end if;
  return cur;
end;
$$;

revoke execute on function public.english_sync_create(jsonb, bigint), public.english_sync_pull(text), public.english_sync_push(text, jsonb, bigint) from public;
grant execute on function public.english_sync_create(jsonb, bigint), public.english_sync_pull(text), public.english_sync_push(text, jsonb, bigint) to anon, authenticated;
