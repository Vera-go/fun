-- =========================================================
-- v16：電玩廳「復古經典」第三批排行榜
-- 新增 14 個排行榜：
--   race    賽車閃躲（跑幾公尺，越大越好）
--   catch   接水果（分數，越大越好）
--   galaxy  垂直射擊（分數，越大越好）
--   rocks   小行星（分數，越大越好）
--   c4      四子棋（對電腦連勝幾場，越大越好）
--   reversi 黑白棋（連勝幾場，越大越好）
--   gomoku  五子棋（連勝幾場，越大越好）
--   sokoban 推箱子（過了幾關，越大越好）
--   tank    坦克大戰（分數，越大越好）
--   bomber  炸彈超人（分數，越大越好）
--   sudoku1 數獨簡單（完成秒數，越小越好）
--   sudoku2 數獨中等（完成秒數，越小越好）
--   sudoku3 數獨困難（完成秒數，越小越好）
--   slide   滑塊拼圖（完成秒數，越小越好）
-- 需要先執行過 v13、v14、v15。在 Supabase 的 SQL Editor 執行一次（可重複執行）。
-- =========================================================

-- 1. 放寬資料表允許的遊戲代號
do $$
declare c text;
begin
  select conname into c
  from pg_constraint
  where conrelid = 'public.arcade_scores'::regclass
    and contype = 'c'
    and pg_get_constraintdef(oid) ~ '\mgame\M';
  if c is not null then
    execute format('alter table public.arcade_scores drop constraint %I', c);
  end if;
  alter table public.arcade_scores add constraint arcade_scores_game_check
    check (game in ('react', 'whack', 'simon', 'nums', 'tap', 'brick', 'invader', 'block', 'flap', 'merge',
                    'run', 'cross', 'maze', 'pong', 'mine1', 'mine2', 'mine3',
                    'race', 'catch', 'galaxy', 'rocks', 'c4', 'reversi', 'gomoku', 'sokoban', 'tank', 'bomber',
                    'sudoku1', 'sudoku2', 'sudoku3', 'slide'));
end $$;

-- 2. 上傳成績（重新建立：新遊戲的合理範圍、越小越好的遊戲加上數獨和滑塊拼圖）
create or replace function public.arcade_submit(
  p_client uuid, p_name text, p_game text, p_score numeric
) returns json
language plpgsql security definer set search_path = public as $$
declare
  v_name text := btrim(coalesce(p_name, ''));
  v_low boolean := p_game in ('react', 'nums', 'mine1', 'mine2', 'mine3', 'sudoku1', 'sudoku2', 'sudoku3', 'slide');   -- 越小越好
  v_last timestamptz;
  v_best numeric;
  v_rank bigint;
begin
  if p_client is null then raise exception 'missing client'; end if;
  if p_game is null or p_game not in ('react', 'whack', 'simon', 'nums', 'tap', 'brick', 'invader', 'block', 'flap', 'merge',
                                      'run', 'cross', 'maze', 'pong', 'mine1', 'mine2', 'mine3',
                                      'race', 'catch', 'galaxy', 'rocks', 'c4', 'reversi', 'gomoku', 'sokoban', 'tank', 'bomber',
                                      'sudoku1', 'sudoku2', 'sudoku3', 'slide') then
    raise exception 'unknown game';
  end if;
  if char_length(v_name) < 1 or char_length(v_name) > 12 then raise exception 'name must be 1-12 characters'; end if;
  -- 合理範圍：人類做不到的成績直接擋掉
  if p_score is null or not (
       (p_game = 'react'   and p_score between 90 and 2000)
    or (p_game = 'whack'   and p_score between 0 and 250)
    or (p_game = 'simon'   and p_score between 0 and 60)
    or (p_game = 'nums'    and p_score between 2500 and 600000)
    or (p_game = 'tap'     and p_score between 0 and 16)
    or (p_game = 'brick'   and p_score between 0 and 20000)
    or (p_game = 'invader' and p_score between 0 and 30000)
    or (p_game = 'block'   and p_score between 0 and 1000000)
    or (p_game = 'flap'    and p_score between 0 and 600)
    or (p_game = 'merge'   and p_score between 0 and 1000000)
    or (p_game = 'run'     and p_score between 0 and 30000)
    or (p_game = 'cross'   and p_score between 0 and 50000)
    or (p_game = 'maze'    and p_score between 0 and 100000)
    or (p_game = 'pong'    and p_score between 0 and 1000)
    or (p_game = 'mine1'   and p_score between 1.5 and 3600)
    or (p_game = 'mine2'   and p_score between 5 and 3600)
    or (p_game = 'mine3'   and p_score between 10 and 3600)
    or (p_game = 'race'    and p_score between 0 and 50000)
    or (p_game = 'catch'   and p_score between 0 and 5000)
    or (p_game = 'galaxy'  and p_score between 0 and 200000)
    or (p_game = 'rocks'   and p_score between 0 and 200000)
    or (p_game = 'c4'      and p_score between 0 and 500)
    or (p_game = 'reversi' and p_score between 0 and 500)
    or (p_game = 'gomoku'  and p_score between 0 and 500)
    or (p_game = 'sokoban' and p_score between 0 and 60)
    or (p_game = 'tank'    and p_score between 0 and 200000)
    or (p_game = 'bomber'  and p_score between 0 and 200000)
    or (p_game = 'sudoku1' and p_score between 30 and 7200)
    or (p_game = 'sudoku2' and p_score between 50 and 7200)
    or (p_game = 'sudoku3' and p_score between 90 and 7200)
    or (p_game = 'slide'   and p_score between 6 and 3600)
  ) then
    raise exception 'invalid score';
  end if;
  select updated_at into v_last from public.arcade_scores where client_id = p_client and game = p_game;
  if v_last is not null and v_last > now() - interval '3 seconds' then raise exception 'too many requests'; end if;

  insert into public.arcade_scores as t (client_id, game, name, score, plays)
  values (p_client, p_game, v_name, p_score, 1)
  on conflict (client_id, game) do update set
    name = excluded.name,
    score = case when v_low then least(t.score, excluded.score) else greatest(t.score, excluded.score) end,
    plays = t.plays + 1,
    updated_at = now()
  returning score into v_best;

  select count(*) + 1 into v_rank from public.arcade_scores s
   where s.game = p_game and (case when v_low then s.score < v_best else s.score > v_best end);

  return json_build_object(
    'best', v_best,
    'rank', v_rank,
    'players', (select count(*) from public.arcade_scores where game = p_game)
  );
end $$;

-- 3. 前幾名（重新建立：數獨和滑塊拼圖是越小越好）
create or replace function public.arcade_top(p_game text, p_client uuid default null, p_limit int default 20)
returns table(rank bigint, name text, score numeric, mine boolean)
language sql stable security definer set search_path = public as $$
  select row_number() over (
           order by case when p_game in ('react', 'nums', 'mine1', 'mine2', 'mine3', 'sudoku1', 'sudoku2', 'sudoku3', 'slide') then t.score else -t.score end, t.updated_at
         ) as rank,
         t.name, t.score, (p_client is not null and t.client_id = p_client) as mine
  from public.arcade_scores t
  where t.game = p_game and t.score > 0
  order by case when p_game in ('react', 'nums', 'mine1', 'mine2', 'mine3', 'sudoku1', 'sudoku2', 'sudoku3', 'slide') then t.score else -t.score end, t.updated_at
  limit least(greatest(coalesce(p_limit, 20), 1), 50);
$$;

grant execute on function public.arcade_submit(uuid, text, text, numeric) to anon, authenticated;
grant execute on function public.arcade_top(text, uuid, int) to anon, authenticated;
