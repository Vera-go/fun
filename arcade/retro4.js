/* 電玩廳：復古經典第三批（棋類和益智）：四子棋、黑白棋、五子棋、推箱子、數獨、滑塊拼圖。
   玩法是大家熟悉的老遊戲，名字和畫面都是自己重新做的。 */
(function(){
"use strict";
const A = window.Arcade, K = A.kit, $ = A.$, esc = A.esc;
const {setupCanvas, pointerX, runLoop, shell, setStats, finish, roundRect, rand, clamp} = K;
const pick = arr => arr[Math.floor(Math.random() * arr.length)];
const shuffled = a => { a = a.slice(); for(let i = a.length - 1; i > 0; i--){ const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const DPAD = `<div class="row" style="gap:8px;flex-wrap:nowrap;margin-top:10px"><button class="btn ghost" data-d="left" style="flex:1;padding:14px 0">◀</button><button class="btn ghost" data-d="up" style="flex:1;padding:14px 0">▲</button><button class="btn ghost" data-d="down" style="flex:1;padding:14px 0">▼</button><button class="btn ghost" data-d="right" style="flex:1;padding:14px 0">▶</button></div>`;

/* 對電腦的連勝賽：贏了連勝 +1、電腦變強；輸了結束，成績是連勝場數；平手重下一局 */
function nextBar(label, fn){
  $("#ctrl").innerHTML = `<div class="row" style="margin-top:12px"><button class="btn" id="nextm">${label}</button></div>`;
  $("#nextm").addEventListener("click", () => { A.audio(); fn(); });
}
function endMatch(id, res, streak, next){
  if(res === "lose"){ A.beep(130, .5, .12, "sawtooth"); A.buzz(200); A.later(() => finish(id, streak, streak ? `連勝 ${streak} 場後，輸給電腦` : "第一場就輸了，再試一次"), 700); return; }
  if(res === "win"){ A.beep(988, .3, .1, "triangle"); A.buzz(80); nextBar(`贏了！下一場（電腦會更強）`, () => next(streak + 1)); return; }
  A.beep(400, .2, .08); nextBar("平手，再下一局", () => next(streak));
}

/* ---------- 1. 四子棋 ---------- */
function gC4(){
  A.cleanup();
  const COLS = 7, ROWS = 6, C = 48, W = COLS * C, H = (ROWS + 1) * C;
  let board, turn, over, anim = null, hover = -1, streak = 0, games = 0, win = null, busy = false;
  const idx = (c, r) => r * COLS + c;
  shell("c4", "", "點一欄把棋子丟進去，先連成四個的贏。贏了連勝，電腦會越來越強。");
  const {cv, ctx} = setupCanvas(W, H); $("#stage").appendChild(cv);
  const paintStats = () => setStats(`<span>連勝 <b>${streak}</b> 場</span><span>電腦強度 <b>${Math.min(6, 1 + Math.floor(streak / 2))}</b></span>`);
  const dropRow = (b, c) => { for(let r = ROWS - 1; r >= 0; r--) if(!b[idx(c, r)]) return r; return -1; };
  const lines = [];
  for(let r = 0; r < ROWS; r++) for(let c = 0; c < COLS; c++) for(const [dc, dr] of [[1, 0], [0, 1], [1, 1], [1, -1]]){ const cells = []; for(let k = 0; k < 4; k++){ const cc = c + dc * k, rr = r + dr * k; if(cc < 0 || cc >= COLS || rr < 0 || rr >= ROWS) break; cells.push(idx(cc, rr)); } if(cells.length === 4) lines.push(cells); }
  const winner = b => { for(const l of lines){ const v = b[l[0]]; if(v && v === b[l[1]] && v === b[l[2]] && v === b[l[3]]) return {p:v, cells:l}; } return null; };
  const full = b => b.every(Boolean);
  const evalB = b => {
    let s = 0;
    for(const l of lines){ let me = 0, you = 0; for(const i of l){ if(b[i] === 2) me++; else if(b[i] === 1) you++; } if(me && you) continue; if(me === 3) s += 8; else if(me === 2) s += 2; if(you === 3) s -= 9; else if(you === 2) s -= 2; }
    for(let r = 0; r < ROWS; r++){ const v = b[idx(3, r)]; if(v === 2) s += 3; else if(v === 1) s -= 3; }
    return s;
  };
  const search = (b, depth, alpha, beta, who) => {   // who 2 = 電腦（取大），1 = 玩家（取小）
    const w = winner(b); if(w) return w.p === 2 ? 100000 + depth : -100000 - depth; if(full(b)) return 0; if(depth === 0) return evalB(b);
    const order = [3, 2, 4, 1, 5, 0, 6];
    if(who === 2){ let best = -Infinity; for(const c of order){ const r = dropRow(b, c); if(r < 0) continue; b[idx(c, r)] = 2; const v = search(b, depth - 1, alpha, beta, 1); b[idx(c, r)] = 0; best = Math.max(best, v); alpha = Math.max(alpha, v); if(alpha >= beta) break; } return best; }
    let best = Infinity; for(const c of order){ const r = dropRow(b, c); if(r < 0) continue; b[idx(c, r)] = 1; const v = search(b, depth - 1, alpha, beta, 2); b[idx(c, r)] = 0; best = Math.min(best, v); beta = Math.min(beta, v); if(alpha >= beta) break; } return best;
  };
  const cpuMove = () => {
    const depth = Math.min(6, 1 + Math.floor(streak / 2)), blunder = Math.max(0, .3 - streak * .06);
    const valid = [0, 1, 2, 3, 4, 5, 6].filter(c => dropRow(board, c) >= 0);
    if(Math.random() < blunder) return pick(valid);
    let best = -Infinity, bestC = [];
    for(const c of valid){ const r = dropRow(board, c); board[idx(c, r)] = 2; const v = search(board, depth, -Infinity, Infinity, 1) + Math.random() * .5; board[idx(c, r)] = 0; if(v > best + 1e-9){ best = v; bestC = [c]; } else if(Math.abs(v - best) < 1e-9) bestC.push(c); }
    return pick(bestC);
  };
  const place = (c, who) => { const r = dropRow(board, c); anim = {c, r, who, y:-C, vy:0}; board[idx(c, r)] = who; busy = true; A.beep(300 + r * 40, .05, .06); };
  const afterDrop = who => {
    anim = null; busy = false;
    const w = winner(board);
    if(w){ over = true; win = w; endMatch("c4", who === 1 ? "win" : "lose", streak, s => start(s)); return; }
    if(full(board)){ over = true; endMatch("c4", "draw", streak, s => start(s)); return; }
    if(who === 1){ turn = 2; A.later(() => { place(cpuMove(), 2); }, 350); } else turn = 1;
  };
  const start = s => {
    streak = s; games++; board = Array(ROWS * COLS).fill(0); over = false; win = null; anim = null; busy = false; turn = 1; $("#ctrl").innerHTML = ""; paintStats();
    if(games % 2 === 0){ turn = 2; A.later(() => place(cpuMove(), 2), 450); }
  };
  const colAt = e => clamp(Math.floor(pointerX(cv, e, W) / C), 0, COLS - 1);
  cv.addEventListener("pointermove", e => { hover = colAt(e); });
  cv.addEventListener("pointerdown", e => { A.audio(); const c = colAt(e); hover = c; if(over || busy || turn !== 1) return; if(dropRow(board, c) < 0) return; place(c, 1); });
  cv.addEventListener("pointerleave", () => { hover = -1; });
  const update = dt => { if(!anim) return; anim.vy += 2600 * dt / 1000; anim.y += anim.vy * dt / 1000; const ty = (anim.r + 1) * C; if(anim.y >= ty){ const who = anim.who; anim.y = ty; draw(); afterDrop(who); } };
  const draw = () => {
    ctx.fillStyle = "#0E0E22"; ctx.fillRect(0, 0, W, H);
    if(!over && turn === 1 && hover >= 0 && !busy){ ctx.globalAlpha = .55; ctx.fillStyle = "#FF4FA3"; ctx.beginPath(); ctx.arc(hover * C + C / 2, C / 2, C * .38, 0, 7); ctx.fill(); ctx.globalAlpha = 1; }
    if(anim){ ctx.fillStyle = anim.who === 1 ? "#FF4FA3" : "#FFD84A"; ctx.beginPath(); ctx.arc(anim.c * C + C / 2, anim.y + C / 2, C * .38, 0, 7); ctx.fill(); }
    ctx.fillStyle = "#26359A"; roundRect(ctx, 0, C, W, ROWS * C, 14); ctx.fill();
    for(let r = 0; r < ROWS; r++) for(let c = 0; c < COLS; c++){
      const v = board ? board[idx(c, r)] : 0, hiding = anim && anim.c === c && anim.r === r;
      ctx.fillStyle = v && !hiding ? (v === 1 ? "#FF4FA3" : "#FFD84A") : "#0E0E22"; ctx.beginPath(); ctx.arc(c * C + C / 2, (r + 1) * C + C / 2, C * .38, 0, 7); ctx.fill();
      if(win && win.cells.includes(idx(c, r))){ ctx.strokeStyle = "#fff"; ctx.lineWidth = 4; ctx.beginPath(); ctx.arc(c * C + C / 2, (r + 1) * C + C / 2, C * .38, 0, 7); ctx.stroke(); }
    }
  };
  start(0);
  runLoop(update, draw);
}

/* ---------- 2. 黑白棋 ---------- */
function gReversi(){
  A.cleanup();
  const N = 8, C = 42, W = N * C, H = N * C;
  const WEIGHT = [[100,-20,10,5,5,10,-20,100],[-20,-50,-2,-2,-2,-2,-50,-20],[10,-2,-1,-1,-1,-1,-2,10],[5,-2,-1,-1,-1,-1,-2,5],[5,-2,-1,-1,-1,-1,-2,5],[10,-2,-1,-1,-1,-1,-2,10],[-20,-50,-2,-2,-2,-2,-50,-20],[100,-20,10,5,5,10,-20,100]];
  let b, turn, over, streak = 0, games = 0, hint = true, busy = false;
  shell("reversi", "", "夾住對方的棋子就能翻成自己的顏色。有小點的地方是可以下的位置，最後棋子多的贏。");
  const {cv, ctx} = setupCanvas(W, H); $("#stage").appendChild(cv);
  const cnt = () => { let me = 0, cpu = 0; b.forEach(r => r.forEach(v => { if(v === 1) me++; else if(v === 2) cpu++; })); return [me, cpu]; };
  const paintStats = () => { const [me, cpu] = cnt(); setStats(`<span>連勝 <b>${streak}</b></span><span>你 <b>${me}</b></span><span>電腦 <b>${cpu}</b></span>`); };
  const flips = (bd, x, y, who) => {
    if(bd[y][x]) return []; const out = [];
    for(let dy = -1; dy <= 1; dy++) for(let dx = -1; dx <= 1; dx++){ if(!dx && !dy) continue; const line = []; let cx = x + dx, cy = y + dy; while(cx >= 0 && cx < N && cy >= 0 && cy < N && bd[cy][cx] && bd[cy][cx] !== who){ line.push([cx, cy]); cx += dx; cy += dy; } if(line.length && cx >= 0 && cx < N && cy >= 0 && cy < N && bd[cy][cx] === who) out.push(...line); }
    return out;
  };
  const moves = (bd, who) => { const out = []; for(let y = 0; y < N; y++) for(let x = 0; x < N; x++){ const f = flips(bd, x, y, who); if(f.length) out.push({x, y, f}); } return out; };
  const apply = (bd, m, who) => { const nb = bd.map(r => r.slice()); nb[m.y][m.x] = who; m.f.forEach(([x, y]) => { nb[y][x] = who; }); return nb; };
  const score = (bd) => { let s = 0, mob = moves(bd, 2).length - moves(bd, 1).length; for(let y = 0; y < N; y++) for(let x = 0; x < N; x++){ if(bd[y][x] === 2) s += WEIGHT[y][x]; else if(bd[y][x] === 1) s -= WEIGHT[y][x]; } return s + mob * 6; };
  const search = (bd, depth, alpha, beta, who) => {
    const mv = moves(bd, who);
    if(!mv.length){ const other = moves(bd, who === 2 ? 1 : 2); if(!other.length){ let me = 0, cpu = 0; bd.forEach(r => r.forEach(v => { if(v === 1) me++; else if(v === 2) cpu++; })); return (cpu - me) * 1000; } return search(bd, depth, alpha, beta, who === 2 ? 1 : 2); }
    if(depth === 0) return score(bd);
    if(who === 2){ let best = -Infinity; for(const m of mv){ best = Math.max(best, search(apply(bd, m, 2), depth - 1, alpha, beta, 1)); alpha = Math.max(alpha, best); if(alpha >= beta) break; } return best; }
    let best = Infinity; for(const m of mv){ best = Math.min(best, search(apply(bd, m, 1), depth - 1, alpha, beta, 2)); beta = Math.min(beta, best); if(alpha >= beta) break; } return best;
  };
  const cpuPick = () => {
    const mv = moves(b, 2), depth = Math.min(4, Math.floor(streak / 1.5)), blunder = Math.max(0, .4 - streak * .08);
    if(Math.random() < blunder || depth === 0) { return streak === 0 ? pick(mv) : mv.slice().sort((p, q) => q.f.length - p.f.length)[0]; }
    let best = -Infinity, bestM = [];
    for(const m of mv){ const v = search(apply(b, m, 2), depth - 1, -Infinity, Infinity, 1) + Math.random() * .3; if(v > best + 1e-9){ best = v; bestM = [m]; } else if(Math.abs(v - best) < 1e-9) bestM.push(m); }
    return pick(bestM);
  };
  A.dbgReversi = () => ({b, turn, over, mv:moves(b, 1)});   // 測試用
  const finishGame = () => { over = true; const [me, cpu] = cnt(); endMatch("reversi", me > cpu ? "win" : me < cpu ? "lose" : "draw", streak, s => start(s)); };
  const advance = who => {   // who：剛下完的人
    paintStats(); const nxt = who === 1 ? 2 : 1;
    if(moves(b, nxt).length){ turn = nxt; if(nxt === 2) A.later(cpuTurn, 500); return; }
    if(moves(b, who).length){ A.toast(nxt === 1 ? "你沒有地方可以下，輪到電腦" : "電腦沒有地方可以下，繼續你"); turn = who; if(who === 2) A.later(cpuTurn, 600); return; }
    finishGame();
  };
  const cpuTurn = () => { if(over) return; const m = cpuPick(); b = apply(b, m, 2); A.beep(330, .05, .06); advance(2); };
  const start = s => {
    streak = s; games++; over = false; busy = false; b = Array.from({length:N}, () => Array(N).fill(0)); b[3][3] = b[4][4] = 2; b[3][4] = b[4][3] = 1; turn = 1; $("#ctrl").innerHTML = ""; paintStats();
    if(games % 2 === 0){ turn = 2; A.later(cpuTurn, 500); }
  };
  cv.addEventListener("pointerdown", e => {
    A.audio(); if(over || turn !== 1) return;
    const r = cv.getBoundingClientRect(), x = Math.floor((e.clientX - r.left) * (W / r.width) / C), y = Math.floor((e.clientY - r.top) * (H / r.height) / C);
    if(x < 0 || x >= N || y < 0 || y >= N) return; const f = flips(b, x, y, 1); if(!f.length) return;
    b = apply(b, {x, y, f}, 1); A.beep(420, .05, .06); A.buzz(15); advance(1);
  });
  const draw = () => {
    ctx.fillStyle = "#1B5E4B"; ctx.fillRect(0, 0, W, H); ctx.strokeStyle = "#124538"; ctx.lineWidth = 1.5;
    for(let i = 1; i < N; i++){ ctx.beginPath(); ctx.moveTo(i * C, 0); ctx.lineTo(i * C, H); ctx.moveTo(0, i * C); ctx.lineTo(W, i * C); ctx.stroke(); }
    const mine = turn === 1 && !over ? moves(b, 1) : [];
    for(let y = 0; y < N; y++) for(let x = 0; x < N; x++){ const v = b[y][x]; if(v){ ctx.fillStyle = v === 1 ? "#FF4FA3" : "#35E0FF"; ctx.beginPath(); ctx.arc(x * C + C / 2, y * C + C / 2, C * .4, 0, 7); ctx.fill(); ctx.fillStyle = "rgba(255,255,255,.25)"; ctx.beginPath(); ctx.arc(x * C + C / 2 - 5, y * C + C / 2 - 5, C * .13, 0, 7); ctx.fill(); } }
    if(hint) mine.forEach(m => { ctx.fillStyle = "rgba(255,255,255,.45)"; ctx.beginPath(); ctx.arc(m.x * C + C / 2, m.y * C + C / 2, 5, 0, 7); ctx.fill(); });
  };
  start(0);
  runLoop(() => {}, draw);
}

/* ---------- 3. 五子棋 ---------- */
function gGomoku(){
  A.cleanup();
  const N = 13, C = 26, PAD = 13, W = N * C, H = N * C;
  let b = Array.from({length:N}, () => Array(N).fill(0)), turn = 1, over = false, streak = 0, games = 0, cursor = null, last = null, winLine = null;
  shell("gomoku", "", "按住畫面選位置（會出現預覽），放開就下子。先連成五子的贏。");
  const {cv, ctx} = setupCanvas(W, H); $("#stage").appendChild(cv);
  const paintStats = () => setStats(`<span>連勝 <b>${streak}</b> 場</span><span>電腦強度 <b>${Math.min(5, 1 + Math.floor(streak / 2))}</b></span>`);
  const inb = (x, y) => x >= 0 && x < N && y >= 0 && y < N;
  const DIRS = [[1, 0], [0, 1], [1, 1], [1, -1]];
  const five = (x, y, who) => { for(const [dx, dy] of DIRS){ const cells = [[x, y]]; for(const s of [1, -1]){ let cx = x + dx * s, cy = y + dy * s; while(inb(cx, cy) && b[cy][cx] === who){ cells.push([cx, cy]); cx += dx * s; cy += dy * s; } } if(cells.length >= 5) return cells; } return null; };
  const patScore = (x, y, who) => {
    let tot = 0;
    for(const [dx, dy] of DIRS){
      let n = 1, open = 0;
      for(const s of [1, -1]){ let cx = x + dx * s, cy = y + dy * s; while(inb(cx, cy) && b[cy][cx] === who){ n++; cx += dx * s; cy += dy * s; } if(inb(cx, cy) && b[cy][cx] === 0) open++; }
      if(n >= 5) tot += 100000; else if(n === 4) tot += open === 2 ? 10000 : open === 1 ? 1200 : 0; else if(n === 3) tot += open === 2 ? 1000 : open === 1 ? 100 : 0; else if(n === 2) tot += open === 2 ? 100 : open === 1 ? 10 : 0; else if(n === 1) tot += open;
    }
    return tot;
  };
  const cpuMove = () => {
    const lvl = Math.min(5, 1 + Math.floor(streak / 2)), cand = [];
    let any = false; for(let y = 0; y < N; y++) for(let x = 0; x < N; x++) if(b[y][x]) any = true;
    if(!any) return [Math.floor(N / 2), Math.floor(N / 2)];
    for(let y = 0; y < N; y++) for(let x = 0; x < N; x++){
      if(b[y][x]) continue; let near = false; for(let dy = -2; dy <= 2 && !near; dy++) for(let dx = -2; dx <= 2; dx++) if(inb(x + dx, y + dy) && b[y + dy][x + dx]){ near = true; break; }
      if(!near) continue; const atk = patScore(x, y, 2), def = patScore(x, y, 1);
      cand.push({x, y, s:atk * (1 + lvl * .05) + def * (.8 + lvl * .12) + Math.random() * 3});
    }
    cand.sort((p, q) => q.s - p.s);
    const take = Math.max(1, 4 - lvl); const forced = cand[0] && cand[0].s > 9000;
    const c = forced ? cand[0] : pick(cand.slice(0, take)); return [c.x, c.y];
  };
  const put = (x, y, who) => {
    b[y][x] = who; last = [x, y]; A.beep(who === 1 ? 420 : 330, .04, .06);
    const w = five(x, y, who);
    if(w){ over = true; winLine = w; endMatch("gomoku", who === 1 ? "win" : "lose", streak, s => start(s)); return; }
    if(b.every(r => r.every(Boolean))){ over = true; endMatch("gomoku", "draw", streak, s => start(s)); return; }
    if(who === 1){ turn = 2; A.later(() => { if(over) return; const [cx, cy] = cpuMove(); put(cx, cy, 2); turn = 1; }, 450); }
  };
  const start = s => { streak = s; games++; b = Array.from({length:N}, () => Array(N).fill(0)); turn = 1; over = false; last = null; winLine = null; cursor = null; $("#ctrl").innerHTML = ""; paintStats();
    if(games % 2 === 0){ turn = 2; A.later(() => { put(Math.floor(N / 2), Math.floor(N / 2), 2); turn = 1; }, 400); } };
  A.dbgGomoku = () => ({b, turn, over});   // 測試用
  const cell = e => { const r = cv.getBoundingClientRect(); return [clamp(Math.round(((e.clientX - r.left) * (W / r.width) - PAD) / C), 0, N - 1), clamp(Math.round(((e.clientY - r.top) * (H / r.height) - PAD) / C), 0, N - 1)]; };
  let dragging = false;
  cv.addEventListener("pointerdown", e => { e.preventDefault(); A.audio(); if(over || turn !== 1) return; dragging = true; cv.setPointerCapture && cv.setPointerCapture(e.pointerId); cursor = cell(e); });
  cv.addEventListener("pointermove", e => { if(dragging) cursor = cell(e); });
  const up = e => { if(!dragging) return; dragging = false; if(over || turn !== 1 || !cursor) { cursor = null; return; } const [x, y] = cursor; cursor = null; if(!b[y][x]) put(x, y, 1); };
  cv.addEventListener("pointerup", up); cv.addEventListener("pointercancel", () => { dragging = false; cursor = null; });
  const draw = () => {
    ctx.fillStyle = "#2B2A5A"; ctx.fillRect(0, 0, W, H); ctx.strokeStyle = "#5A58A0"; ctx.lineWidth = 1.2;
    for(let i = 0; i < N; i++){ ctx.beginPath(); ctx.moveTo(PAD, PAD + i * C); ctx.lineTo(PAD + (N - 1) * C, PAD + i * C); ctx.moveTo(PAD + i * C, PAD); ctx.lineTo(PAD + i * C, PAD + (N - 1) * C); ctx.stroke(); }
    for(const [sx, sy] of [[3, 3], [9, 3], [3, 9], [9, 9], [6, 6]]){ ctx.fillStyle = "#5A58A0"; ctx.beginPath(); ctx.arc(PAD + sx * C, PAD + sy * C, 3, 0, 7); ctx.fill(); }
    for(let y = 0; y < N; y++) for(let x = 0; x < N; x++){ const v = b[y][x]; if(!v) continue; ctx.fillStyle = v === 1 ? "#FF4FA3" : "#35E0FF"; ctx.beginPath(); ctx.arc(PAD + x * C, PAD + y * C, C * .43, 0, 7); ctx.fill(); }
    if(last){ ctx.strokeStyle = "#fff"; ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(PAD + last[0] * C, PAD + last[1] * C, C * .43 + 2, 0, 7); ctx.stroke(); }
    if(winLine){ ctx.strokeStyle = "#FFD84A"; ctx.lineWidth = 4; ctx.beginPath(); winLine.forEach(([x, y], i) => { if(i) ctx.lineTo(PAD + x * C, PAD + y * C); else ctx.moveTo(PAD + x * C, PAD + y * C); }); ctx.stroke(); }
    if(cursor && !b[cursor[1]][cursor[0]]){ ctx.globalAlpha = .6; ctx.fillStyle = "#FF4FA3"; ctx.beginPath(); ctx.arc(PAD + cursor[0] * C, PAD + cursor[1] * C, C * .43, 0, 7); ctx.fill(); ctx.globalAlpha = 1; ctx.strokeStyle = "#fff"; ctx.lineWidth = 1.5; ctx.strokeRect(PAD + cursor[0] * C - C / 2, PAD + cursor[1] * C - C / 2, C, C); }
  };
  start(0);
  runLoop(() => {}, draw);
}

/* ---------- 4. 推箱子 ---------- */
const SOKO = [["######", "#    #", "#  $ #", "##.  #", "#   @#", "######"], ["######", "#    #", "#  #$#", "#    #", "#@ #.#", "######"], ["#######", "#  @  #", "# $  ##", "##   .#", "#   # #", "#######"], ["#######", "# +   #", "# $   #", "#  .  #", "#   $ #", "## #  #", "#######"], ["#######", "#     #", "#$  # #", "#  .  #", "#.  $@#", "## #  #", "#######"], ["#######", "#     #", "##$@$ #", "#     #", "#..   #", "##   ##", "#######"], ["########", "#.@    #", "# #    #", "# . # ##", "# $ $ ##", "#    ###", "########"], ["########", "#     ##", "# $@#$ #", "#  $  .#", "#.  .  #", "#      #", "########"], ["########", "#   #  #", "#    @ #", "# ##.$ #", "#    . #", "##$$.  #", "#      #", "########"], ["########", "#.   $ #", "#    # #", "# .$$  #", "#   ## #", "# . #  #", "#   @  #", "########"], ["########", "#+#    #", "#$   $ #", "#     ##", "# $    #", "#  #  .#", "#  ##. #", "########"], ["#########", "#    #  #", "# $ ##$ #", "#   #.. #", "#  . @  #", "##$     #", "#      ##", "#########"], ["#########", "# $    .#", "# . .#. #", "# $     #", "#  #    #", "#   $ $ #", "#    #@##", "#########"], ["#########", "#@$  .  #", "#$ $    #", "#. .    #", "# ##  $.#", "##      #", "#       #", "#    #  #", "#########"], ["#########", "#       #", "#.  $# $#", "#    # .#", "#   .   #", "#  # .  #", "# $# $  #", "##@#    #", "#########"], ["#########", "##  #@$.#", "#    $ .#", "#     #$#", "#       #", "##  $ . #", "#  #    #", "##   .  #", "#########"], ["#########", "#  #@$. #", "#   $ * #", "#.$     #", "# $   . #", "#  .#   #", "#   #   #", "#     # #", "#########"], ["##########", "#       ##", "#.* .  $ #", "# #      #", "# .    # #", "#   #    #", "#$$ .$   #", "#@ #     #", "##########"], ["##########", "# #    .##", "#   .$ # #", "#      $ #", "##  $   .#", "#  $@$ . #", "#   #. # #", "##       #", "##########"], ["##########", "#.    #  #", "##   * $@#", "#     #.##", "#       ##", "# $ ##   #", "#   .  $.#", "# $  #   #", "#        #", "##########"]];

function gSoko(){
  A.cleanup();
  const D = A.D; D.sk = D.sk || {};
  const cleared = () => Object.keys(D.sk).filter(k => D.sk[k]).length;
  const menu = () => {
    A.cleanup();
    A.view(`<div class="top"><button class="btn ghost sm" data-menu="1">← 選單</button><span class="sp"></span><span class="t">推箱子</span></div>
      <div class="stat"><span>已過關 <b>${cleared()}</b> / ${SOKO.length}</span></div>
      <p class="sub2" style="text-align:center;margin:0 0 10px">把所有箱子推到粉紅色的目標上。只能推、不能拉。</p>
      <div class="lvgrid">${SOKO.map((_, i) => `<button class="lvbtn ${D.sk[i] ? "done" : ""}" data-lv="${i}">${D.sk[i] ? "✓" : i + 1}</button>`).join("")}</div>`);
    $("#view").onclick = e => { const b = e.target.closest("[data-lv]"); if(b){ play(+b.dataset.lv); return; } };
  };
  const play = lv => {
    A.cleanup(); $("#view").onclick = null;
    const rows = SOKO[lv], H0 = rows.length, W0 = Math.max(...rows.map(r => r.length)), C = Math.floor(Math.min(46, 340 / Math.max(W0, H0))), W = W0 * C, H = H0 * C;
    let wall = [], goal = [], box = [], px = 0, py = 0, moves = 0, hist = [], won = false;
    rows.forEach((r, y) => { wall.push([]); goal.push([]); box.push([]); for(let x = 0; x < W0; x++){ const ch = r[x] || "#"; wall[y][x] = ch === "#"; goal[y][x] = ch === "." || ch === "*" || ch === "+"; box[y][x] = ch === "$" || ch === "*"; if(ch === "@" || ch === "+"){ px = x; py = y; } } });
    const init = {box:box.map(r => r.slice()), px, py};
    shell("sokoban", "", "滑動或按方向鍵移動。推到死角可以按「復原」。");
    const paintStats = () => setStats(`<span>第 <b>${lv + 1}</b> 關</span><span>步數 <b>${moves}</b></span>`); paintStats();
    const {cv, ctx} = setupCanvas(W, H); $("#stage").appendChild(cv);
    $("#ctrl").innerHTML = DPAD + `<div class="row" style="margin-top:10px"><button class="btn ghost sm" id="undo">復原</button><button class="btn ghost sm" id="redo">重來這關</button><button class="btn ghost sm" id="lvl">選關卡</button></div>`;
    const V = {left:[-1, 0], right:[1, 0], up:[0, -1], down:[0, 1]};
    const step = d => {
      if(won) return; const [dx, dy] = V[d], nx = px + dx, ny = py + dy; if(wall[ny][nx]) return;
      if(box[ny][nx]){ const bx = nx + dx, by = ny + dy; if(wall[by][bx] || box[by][bx]) { A.beep(160, .05, .05, "sawtooth"); return; } hist.push({box:box.map(r => r.slice()), px, py, moves}); box[ny][nx] = false; box[by][bx] = true; A.beep(260, .04, .06); }
      else hist.push({box:box.map(r => r.slice()), px, py, moves});
      px = nx; py = ny; moves++; paintStats();
      if(box.every((r, y) => r.every((v, x) => !v || goal[y][x]))){ won = true; D.sk[lv] = true; A.save(); A.beep(988, .4, .1, "triangle"); A.buzz(100); A.later(() => finish("sokoban", cleared(), `第 ${lv + 1} 關完成，用了 ${moves} 步`), 600); }
    };
    const undo = () => { const h = hist.pop(); if(!h || won) return; box = h.box; px = h.px; py = h.py; moves = h.moves; paintStats(); };
    $("#ctrl").addEventListener("pointerdown", e => { const b = e.target.closest("[data-d]"); if(b){ e.preventDefault(); A.audio(); step(b.dataset.d); } });
    $("#undo").addEventListener("click", undo); $("#redo").addEventListener("click", () => play(lv)); $("#lvl").addEventListener("click", () => gSoko());
    const KD = {ArrowLeft:"left", ArrowRight:"right", ArrowUp:"up", ArrowDown:"down", z:"undo"}; const kd = e => { const k = KD[e.key]; if(k){ e.preventDefault(); k === "undo" ? undo() : step(k); } };
    addEventListener("keydown", kd); A.onCleanup(() => removeEventListener("keydown", kd));
    let sx = 0, sy = 0, on = false;
    cv.addEventListener("pointerdown", e => { e.preventDefault(); A.audio(); sx = e.clientX; sy = e.clientY; on = true; cv.setPointerCapture && cv.setPointerCapture(e.pointerId); });
    cv.addEventListener("pointerup", e => { if(!on) return; on = false; const dx = e.clientX - sx, dy = e.clientY - sy; if(Math.max(Math.abs(dx), Math.abs(dy)) < 20) return; step(Math.abs(dx) > Math.abs(dy) ? (dx > 0 ? "right" : "left") : (dy > 0 ? "down" : "up")); });
    const draw = () => {
      ctx.fillStyle = "#0E0E22"; ctx.fillRect(0, 0, W, H);
      for(let y = 0; y < H0; y++) for(let x = 0; x < W0; x++){
        const X = x * C, Y = y * C;
        if(wall[y][x]){ ctx.fillStyle = "#26359A"; roundRect(ctx, X + 1, Y + 1, C - 2, C - 2, 6); ctx.fill(); continue; }
        ctx.fillStyle = "#171738"; ctx.fillRect(X, Y, C, C);
        if(goal[y][x]){ ctx.strokeStyle = "#FF4FA3"; ctx.lineWidth = 3; ctx.beginPath(); ctx.arc(X + C / 2, Y + C / 2, C * .22, 0, 7); ctx.stroke(); }
        if(box[y][x]){ const on = goal[y][x]; ctx.fillStyle = on ? "#3DCB7A" : "#C98B52"; roundRect(ctx, X + 4, Y + 4, C - 8, C - 8, 5); ctx.fill(); ctx.strokeStyle = on ? "#1F7B58" : "#8F5E2F"; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(X + 8, Y + 8); ctx.lineTo(X + C - 8, Y + C - 8); ctx.moveTo(X + C - 8, Y + 8); ctx.lineTo(X + 8, Y + C - 8); ctx.stroke(); }
      }
      ctx.fillStyle = "#FF8A5B"; ctx.beginPath(); ctx.arc(px * C + C / 2, py * C + C / 2 + 1, C * .32, 0, 7); ctx.fill();
      ctx.beginPath(); ctx.moveTo(px * C + C * .2, py * C + C * .28); ctx.lineTo(px * C + C * .26, py * C + C * .08); ctx.lineTo(px * C + C * .42, py * C + C * .2); ctx.fill(); ctx.beginPath(); ctx.moveTo(px * C + C * .8, py * C + C * .28); ctx.lineTo(px * C + C * .74, py * C + C * .08); ctx.lineTo(px * C + C * .58, py * C + C * .2); ctx.fill();
      ctx.fillStyle = "#14142F"; ctx.beginPath(); ctx.arc(px * C + C * .4, py * C + C * .5, C * .045, 0, 7); ctx.arc(px * C + C * .6, py * C + C * .5, C * .045, 0, 7); ctx.fill();
    };
    runLoop(() => {}, draw);
  };
  menu();
}

/* ---------- 5. 數獨 ---------- */
function sudokuSolve(g, limit, randomize){
  let nodes = 0;
  const rec = () => {
    if(++nodes > 200000) return limit;
    let bi = -1, bm = 0, bn = 10;
    for(let i = 0; i < 81; i++){
      if(g[i]) continue; const r = (i / 9) | 0, c = i % 9; let used = 0;
      for(let k = 0; k < 9; k++){ used |= 1 << g[r * 9 + k]; used |= 1 << g[k * 9 + c]; }
      const br = r - r % 3, bc = c - c % 3; for(let y = 0; y < 3; y++) for(let x = 0; x < 3; x++) used |= 1 << g[(br + y) * 9 + bc + x];
      const m = ~used & 0x3FE; let n = 0; for(let d = 1; d <= 9; d++) if(m & (1 << d)) n++;
      if(n === 0) return 0; if(n < bn){ bn = n; bi = i; bm = m; if(n === 1) break; }
    }
    if(bi < 0) return 1;
    let total = 0; const ds = []; for(let d = 1; d <= 9; d++) if(bm & (1 << d)) ds.push(d); const order = randomize ? shuffled(ds) : ds;
    for(const d of order){ g[bi] = d; total += rec(); if(total >= limit){ if(randomize) return total; g[bi] = 0; return total; } if(!randomize || total === 0) g[bi] = 0; }
    if(randomize && total === 0) g[bi] = 0; return total;
  };
  return rec();
}
function makeSudoku(clues){
  const sol = Array(81).fill(0); sudokuSolve(sol, 1, true);
  const g = sol.slice(), order = shuffled([...Array(81).keys()]); let left = 81;
  for(const i of order){ if(left <= clues) break; const keep = g[i]; g[i] = 0; const t = g.slice(); if(sudokuSolve(t, 2, false) !== 1){ g[i] = keep; } else left--; }
  return {puzzle:g, solution:sol};
}
const SUD = {sudoku1:{name:"簡單", clues:42}, sudoku2:{name:"中等", clues:34}, sudoku3:{name:"困難", clues:28}};
function gSudokuMenu(){
  A.cleanup();
  A.view(`<div class="top"><button class="btn ghost sm" data-menu="1">← 選單</button><span class="sp"></span><span class="t">數獨</span></div>
    <div class="panel"><p class="sub2" style="margin:0 0 12px">每一橫排、每一直排、每個粗線 3×3 方格，都要填進 1 到 9，不能重複。選難度：</p>
    <div class="row" style="margin-top:0">${Object.entries(SUD).map(([id, s]) => `<button class="btn" data-again="${id}">${s.name}<br><small style="font-weight:700;opacity:.85">最佳 ${A.D.best[id] != null ? A.GAMES[id].fmt(A.D.best[id]) : "—"}</small></button>`).join("")}</div></div>`);
}
function gSudoku(id){
  A.cleanup();
  shell(id, "", "點格子再點下面的數字。「筆記」模式可以在格子裡先記下可能的數字。");
  $("#stage").innerHTML = `<div class="panel"><p class="sub2" style="margin:0">出題中⋯⋯</p></div>`;
  A.later(() => {
    const {puzzle, solution} = makeSudoku(SUD[id].clues);
    const g = puzzle.slice(), given = puzzle.map(Boolean), notes = Array(81).fill(0);
    let sel = -1, noteMode = false, t0 = performance.now(), done = false;
    $("#stage").innerHTML = `<div id="sgrid" style="display:grid;grid-template-columns:repeat(9,1fr);max-width:360px;margin:0 auto;border:3px solid #6B68B0;border-radius:10px;overflow:hidden"></div>`;
    $("#ctrl").innerHTML = `<div style="display:grid;grid-template-columns:repeat(5,1fr);gap:6px;margin-top:10px">${[1, 2, 3, 4, 5, 6, 7, 8, 9].map(n => `<button class="btn ghost" data-n="${n}" style="padding:12px 0">${n}</button>`).join("")}<button class="btn ghost" data-n="0" style="padding:12px 0">清除</button></div><div class="row" style="margin-top:10px"><button class="btn ghost sm" id="nm">筆記：關</button><button class="btn ghost sm" data-again="${id}">換一題</button></div>`;
    const conflict = i => { if(!g[i]) return false; const r = (i / 9) | 0, c = i % 9; for(let k = 0; k < 9; k++){ if(k !== c && g[r * 9 + k] === g[i]) return true; if(k !== r && g[k * 9 + c] === g[i]) return true; } const br = r - r % 3, bc = c - c % 3; for(let y = 0; y < 3; y++) for(let x = 0; x < 3; x++){ const j = (br + y) * 9 + bc + x; if(j !== i && g[j] === g[i]) return true; } return false; };
    const paint = () => {
      const sv = sel >= 0 ? g[sel] : 0;
      $("#sgrid").innerHTML = g.map((v, i) => {
        const r = (i / 9) | 0, c = i % 9, rel = sel >= 0 && (r === ((sel / 9) | 0) || c === sel % 9 || ((r / 3) | 0) === (((sel / 9) | 0) / 3 | 0) && ((c / 3) | 0) === ((sel % 9 / 3) | 0));
        let bg = i === sel ? "#4A47A0" : (sv && v === sv) ? "#35306E" : rel ? "#232352" : "#171738", col = given[i] ? "#EEEBFF" : "#35E0FF";
        if(conflict(i)) col = "#FF5A6E";
        const bd = `border-right:${c % 3 === 2 && c < 8 ? 2 : 1}px solid ${c % 3 === 2 && c < 8 ? "#6B68B0" : "#2A2A5A"};border-bottom:${r % 3 === 2 && r < 8 ? 2 : 1}px solid ${r % 3 === 2 && r < 8 ? "#6B68B0" : "#2A2A5A"}`;
        let inner = v ? `<span style="font-size:20px;font-weight:${given[i] ? 900 : 700}">${v}</span>` : notes[i] ? `<span style="display:grid;grid-template-columns:repeat(3,1fr);font-size:9px;line-height:1.05;color:#9C98C8;width:100%">${[1, 2, 3, 4, 5, 6, 7, 8, 9].map(n => `<i style="font-style:normal">${notes[i] & (1 << n) ? n : "&nbsp;"}</i>`).join("")}</span>` : "";
        return `<button data-i="${i}" style="aspect-ratio:1;border:0;${bd};background:${bg};color:${col};display:grid;place-items:center;padding:0;font:inherit;cursor:pointer;touch-action:manipulation">${inner}</button>`;
      }).join("");
    };
    A.dbgSudoku = () => ({solution, g, given});   // 測試用
    const paintStats = () => setStats(`<span>${SUD[id].name}</span><span>時間 <b id="st">${Math.floor((performance.now() - t0) / 1000)}</b> 秒</span>`); paintStats(); paint();
    A.later(function tick(){ if(done) return; const e = $("#st"); if(e) e.textContent = Math.floor((performance.now() - t0) / 1000); A.later(tick, 500); }, 500);
    const check = () => { if(g.every((v, i) => v === solution[i])){ done = true; const sec = Math.round((performance.now() - t0) / 100) / 10; A.beep(988, .4, .1, "triangle"); finish(id, sec, `數獨${SUD[id].name}完成`); } };
    const setNum = n => {
      if(sel < 0 || given[sel] || done) return;
      if(noteMode && n){ if(g[sel]) return; notes[sel] ^= (1 << n); }
      else { g[sel] = n; notes[sel] = 0; if(n){ const r = (sel / 9) | 0, c = sel % 9; for(let k = 0; k < 9; k++){ notes[r * 9 + k] &= ~(1 << n); notes[k * 9 + c] &= ~(1 << n); } } }
      A.beep(n ? 440 : 300, .03, .05); paint(); if(g.every(Boolean)) check();
    };
    $("#sgrid").addEventListener("pointerdown", e => { const b = e.target.closest("[data-i]"); if(!b) return; A.audio(); sel = +b.dataset.i; paint(); });
    $("#ctrl").addEventListener("pointerdown", e => { const b = e.target.closest("[data-n]"); if(b){ e.preventDefault(); setNum(+b.dataset.n); } });
    $("#nm").addEventListener("click", () => { noteMode = !noteMode; $("#nm").textContent = noteMode ? "筆記：開" : "筆記：關"; });
    const kd = e => { if(/^[1-9]$/.test(e.key)) setNum(+e.key); else if(e.key === "Backspace" || e.key === "Delete" || e.key === "0") setNum(0); else if(sel >= 0 && /^Arrow/.test(e.key)){ e.preventDefault(); const d = {ArrowLeft:-1, ArrowRight:1, ArrowUp:-9, ArrowDown:9}[e.key]; const n = sel + d; if(n >= 0 && n < 81 && !(Math.abs(d) === 1 && ((sel / 9) | 0) !== ((n / 9) | 0))){ sel = n; paint(); } } };
    addEventListener("keydown", kd); A.onCleanup(() => removeEventListener("keydown", kd));
  }, 40);
}

/* ---------- 6. 滑塊拼圖 ---------- */
function gSlide(){
  A.cleanup();
  const N = 4; let tiles, moves = 0, t0 = 0, started = false, done = false;
  shell("slide", "", "點旁邊的數字方塊滑進空格，把 1 到 15 排好。");
  $("#stage").innerHTML = `<div id="sl" style="display:grid;grid-template-columns:repeat(${N},1fr);gap:6px;max-width:340px;margin:0 auto"></div>`;
  $("#ctrl").innerHTML = `<div class="row" style="margin-top:12px"><button class="btn ghost sm" data-again="slide">重新洗牌</button></div>`;
  tiles = Array.from({length:N * N}, (_, i) => (i + 1) % (N * N));
  let blank = N * N - 1, prev = -1;
  for(let i = 0; i < 300; i++){ const nb = [blank - N, blank + N, blank % N ? blank - 1 : -1, (blank + 1) % N ? blank + 1 : -1].filter(x => x >= 0 && x < N * N && x !== prev); const m = pick(nb); [tiles[blank], tiles[m]] = [tiles[m], tiles[blank]]; prev = blank; blank = m; }
  if(tiles.every((v, i) => v === (i + 1) % (N * N))){ [tiles[0], tiles[1]] = [tiles[1], tiles[0]]; [tiles[2], tiles[3]] = [tiles[3], tiles[2]]; }
  A.dbgSlide = () => ({tiles, set:t => { tiles = t; paint(); }});   // 測試用
  const paintStats = () => setStats(`<span>步數 <b>${moves}</b></span><span>時間 <b id="st">${started && !done ? Math.floor((performance.now() - t0) / 1000) : 0}</b> 秒</span>`); paintStats();
  const paint = () => { $("#sl").innerHTML = tiles.map((v, i) => v ? `<button data-i="${i}" style="aspect-ratio:1;border:0;border-radius:12px;background:${v === i + 1 ? "#2F7B64" : "#3A3A7A"};color:#EEEBFF;font:900 26px system-ui,sans-serif;cursor:pointer;touch-action:manipulation">${v}</button>` : `<div style="aspect-ratio:1"></div>`).join(""); };
  paint();
  const tryMove = i => {
    if(done) return; const b = tiles.indexOf(0), r = (i / N) | 0, c = i % N, br = (b / N) | 0, bc = b % N; if(Math.abs(r - br) + Math.abs(c - bc) !== 1) return;
    if(!started){ started = true; t0 = performance.now(); A.later(function tick(){ if(done) return; const e = $("#st"); if(e) e.textContent = Math.floor((performance.now() - t0) / 1000); A.later(tick, 500); }, 500); }
    [tiles[b], tiles[i]] = [tiles[i], tiles[b]]; moves++; A.beep(300, .03, .05); paintStats(); paint();
    if(tiles.every((v, k) => v === (k + 1) % (N * N))){ done = true; const sec = Math.max(1, Math.round((performance.now() - t0) / 100) / 10); A.beep(988, .4, .1, "triangle"); A.later(() => finish("slide", sec, `${moves} 步完成`), 400); }
  };
  $("#sl").addEventListener("pointerdown", e => { const b = e.target.closest("[data-i]"); if(b){ A.audio(); tryMove(+b.dataset.i); } });
}

/* ---------- 註冊 ---------- */
const ST = v => v + " 場連勝";
Object.assign(A.GAMES, {
  c4:{name:"四子棋", tag:"對電腦連勝，電腦會越來越強", dir:1, group:"retro", fmt:ST, col:"#FFD84A", ic:'<rect x="6" y="10" width="36" height="30" rx="6" fill="#26359A"/><circle cx="16" cy="20" r="4.5" fill="#FF4FA3"/><circle cx="26" cy="20" r="4.5" fill="#FFD84A"/><circle cx="16" cy="31" r="4.5" fill="#FFD84A"/><circle cx="26" cy="31" r="4.5" fill="#FF4FA3"/><circle cx="36" cy="31" r="4.5" fill="#FF4FA3"/>'},
  reversi:{name:"黑白棋", tag:"夾住對方的棋子翻面，對電腦連勝", dir:1, group:"retro", fmt:ST, col:"#35E0FF", ic:'<rect x="6" y="6" width="36" height="36" rx="5" fill="#1B5E4B"/><circle cx="19" cy="19" r="7" fill="#FF4FA3"/><circle cx="30" cy="19" r="7" fill="#35E0FF"/><circle cx="19" cy="30" r="7" fill="#35E0FF"/><circle cx="30" cy="30" r="7" fill="#FF4FA3"/>'},
  gomoku:{name:"五子棋", tag:"先連成五子的贏，對電腦連勝", dir:1, group:"retro", fmt:ST, col:"#B07CFF", ic:'<rect x="6" y="6" width="36" height="36" rx="5" fill="#2B2A5A"/><path d="M14 10v28M24 10v28M34 10v28M10 14h28M10 24h28M10 34h28" stroke="#5A58A0" stroke-width="1.5"/><circle cx="14" cy="14" r="3.5" fill="#FF4FA3"/><circle cx="24" cy="24" r="3.5" fill="#FF4FA3"/><circle cx="34" cy="34" r="3.5" fill="#FF4FA3"/><circle cx="24" cy="14" r="3.5" fill="#35E0FF"/>'},
  sokoban:{name:"推箱子", tag:"把箱子推到目標上，20 關", dir:1, group:"retro", fmt:v => v + " 關", col:"#FF8A5B", ic:'<rect x="9" y="9" width="18" height="18" rx="3" fill="#C98B52"/><path d="M13 13l10 10M23 13L13 23" stroke="#8F5E2F" stroke-width="2.5"/><circle cx="35" cy="35" r="6" fill="none" stroke="#FF4FA3" stroke-width="3"/><circle cx="14" cy="36" r="5" fill="#FF8A5B"/>'},
  sudoku:{name:"數獨", tag:"簡單、中等、困難，比誰填得快", dir:-1, group:"retro", nolb:true, fmt:v => v + " 秒", col:"#9B8CFF", ic:'<rect x="6" y="6" width="36" height="36" rx="4" fill="#171738" stroke="#9B8CFF" stroke-width="2.5"/><path d="M18 6v36M30 6v36M6 18h36M6 30h36" stroke="#6B68B0" stroke-width="1.8"/><text x="12" y="16" font-size="9" font-weight="900" fill="#35E0FF" text-anchor="middle" font-family="system-ui">5</text><text x="24" y="28" font-size="9" font-weight="900" fill="#EEEBFF" text-anchor="middle" font-family="system-ui">3</text><text x="36" y="40" font-size="9" font-weight="900" fill="#EEEBFF" text-anchor="middle" font-family="system-ui">8</text>'},
  sudoku1:{name:"數獨・簡單", tag:"", dir:-1, hide:true, fmt:v => v + " 秒", col:"#9B8CFF", ic:""},
  sudoku2:{name:"數獨・中等", tag:"", dir:-1, hide:true, fmt:v => v + " 秒", col:"#9B8CFF", ic:""},
  sudoku3:{name:"數獨・困難", tag:"", dir:-1, hide:true, fmt:v => v + " 秒", col:"#9B8CFF", ic:""},
  slide:{name:"滑塊拼圖", tag:"把 1～15 滑回順序，越快越好", dir:-1, group:"retro", fmt:v => v + " 秒", col:"#5CFFA0", ic:'<rect x="6" y="6" width="16" height="16" rx="4" fill="#3A3A7A"/><rect x="26" y="6" width="16" height="16" rx="4" fill="#2F7B64"/><rect x="6" y="26" width="16" height="16" rx="4" fill="#2F7B64"/><text x="14" y="18" font-size="11" font-weight="900" fill="#EEEBFF" text-anchor="middle" font-family="system-ui">7</text><text x="34" y="18" font-size="11" font-weight="900" fill="#EEEBFF" text-anchor="middle" font-family="system-ui">2</text><text x="14" y="38" font-size="11" font-weight="900" fill="#EEEBFF" text-anchor="middle" font-family="system-ui">9</text>'}
});
Object.assign(A.RUN, {c4:gC4, reversi:gReversi, gomoku:gGomoku, sokoban:gSoko, sudoku:gSudokuMenu, sudoku1:() => gSudoku("sudoku1"), sudoku2:() => gSudoku("sudoku2"), sudoku3:() => gSudoku("sudoku3"), slide:gSlide});
A.menu();
})();
