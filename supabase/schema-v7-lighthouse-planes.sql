-- =========================================================
-- Lighthouse v7：紙飛機真實計數
-- 每放飛一架紙飛機記一筆「時間」，只記時間：不記寫的字、不記是誰。
-- 放飛後畫面會顯示「今天已經有 N 架紙飛機…」，數字是真的。
-- 在 Supabase 的 SQL Editor 執行一次（可重複執行）。
-- =========================================================

create table if not exists public.lighthouse_planes (
  id bigint generated always as identity primary key,
  created_at timestamptz not null default now()
);
create index if not exists lighthouse_planes_created_at on public.lighthouse_planes (created_at);
-- 開啟權限保護、不給任何規則：外面不能直接讀寫這張表，只能透過下面的函式
alter table public.lighthouse_planes enable row level security;

-- 統計：今天（台灣時間）幾架、總共幾架
create or replace function public.lighthouse_plane_stats() returns jsonb
language sql stable security definer set search_path = public as $$
  select jsonb_build_object(
    'today', count(*) filter (where created_at >= date_trunc('day', now() at time zone 'Asia/Taipei') at time zone 'Asia/Taipei'),
    'total', count(*)
  ) from public.lighthouse_planes;
$$;

-- 放飛一架：記一筆，回傳最新統計。
-- 防灌票：全站每分鐘最多記 60 架，超過的不記（畫面照樣顯示目前數字）
create or replace function public.lighthouse_fly() returns jsonb
language plpgsql security definer set search_path = public as $$
begin
  if (select count(*) from public.lighthouse_planes where created_at > now() - interval '1 minute') < 60 then
    insert into public.lighthouse_planes default values;
  end if;
  return public.lighthouse_plane_stats();
end;
$$;

revoke execute on function public.lighthouse_fly(), public.lighthouse_plane_stats() from public;
grant execute on function public.lighthouse_fly(), public.lighthouse_plane_stats() to anon, authenticated;
