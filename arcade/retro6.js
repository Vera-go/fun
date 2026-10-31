/* 電玩廳：復古經典第四批：泡泡龍、鋼琴塊、對對碰、中國象棋。
   玩法是大家熟悉的老遊戲，名字和畫面都是自己重新做的。 */
(function(){
"use strict";
const A = window.Arcade, K = A.kit, $ = A.$;
const {setupCanvas, pointerX, runLoop, shell, setStats, finish, roundRect, rand, clamp} = K;
const pick = arr => arr[Math.floor(Math.random() * arr.length)];
const PAL = ["#FF4FA3", "#35E0FF", "#FFD84A", "#5CFFA0", "#B07CFF", "#FF9F4A"];

/* ---------- 1. 泡泡龍 ---------- */
function gBubble(){
  A.cleanup();
  const W = 352, H = 480, R = 16, RH = R * Math.sqrt(3), COLS = 11, SX = W / 2, SY = H - 38, LINE = H - 84;
  let par = 0, grid = [], level = 0, score = 0, shots = 0, miss = 0, missLimit = 6, over = false, fly = null, cur = 0, nxt = 0, aim = -Math.PI / 2, aiming = false, pops = [], t = 0, colors = 4;
  const off = r => (r + par) % 2;
  const center = (r, c) => [R + c * 2 * R + (off(r) ? R : 0), R + r * RH];
  const valid = (r, c) => r >= 0 && c >= 0 && c < COLS - (off(r) ? 1 : 0);
  const nbrs = (r, c) => { const o = off(r); const l = [[r, c - 1], [r, c + 1]]; if(o) l.push([r - 1, c], [r - 1, c + 1], [r + 1, c], [r + 1, c + 1]); else l.push([r - 1, c - 1], [r - 1, c], [r + 1, c - 1], [r + 1, c]); return l.filter(([a, b]) => valid(a, b)); };
  const get = (r, c) => (grid[r] && grid[r][c] != null) ? grid[r][c] : null;
  const mkRow = () => Array.from({length:COLS}, () => Math.floor(Math.random() * colors));
  const present = () => { const s = new Set(); grid.forEach(row => row.forEach(v => { if(v != null) s.add(v); })); return [...s]; };
  const rollColor = () => { const p = present(); return p.length ? pick(p) : Math.floor(Math.random() * colors); };
  const build = () => { level++; colors = Math.min(6, 3 + level); missLimit = Math.max(3, 7 - level); grid = []; par = 0; const rows = Math.min(9, 4 + level); for(let r = 0; r < rows; r++){ const row = mkRow(); if(off(r)) row[COLS - 1] = null; grid.push(row); } miss = 0; cur = rollColor(); nxt = rollColor(); paintStats(); };
  shell("bubble", "", "按住畫面瞄準（會出現虛線），放開發射。三個同色連在一起就消掉，不要讓泡泡碰到底線。");
  const {cv, ctx} = setupCanvas(W, H); $("#stage").appendChild(cv);
  const paintStats = () => setStats(`<span>分數 <b>${score}</b></span><span>第 <b>${level}</b> 關</span><span>再 <b>${Math.max(0, missLimit - miss)}</b> 次沒消掉會多一排</span>`);
  const aimAt = e => { const r = cv.getBoundingClientRect(), x = (e.clientX - r.left) * (W / r.width), y = (e.clientY - r.top) * (H / r.height); aim = clamp(Math.atan2(y - SY, x - SX), -Math.PI + .18, -.18); };
  cv.addEventListener("pointerdown", e => { e.preventDefault(); A.audio(); cv.setPointerCapture && cv.setPointerCapture(e.pointerId); aiming = true; aimAt(e); });
  cv.addEventListener("pointermove", e => { if(aiming) aimAt(e); });
  cv.addEventListener("pointerup", e => { if(!aiming) return; aiming = false; aimAt(e); shoot(); });
  const kd = e => { if(e.key === "ArrowLeft") aim = clamp(aim - .06, -Math.PI + .18, -.18); else if(e.key === "ArrowRight") aim = clamp(aim + .06, -Math.PI + .18, -.18); else if(e.key === " "){ e.preventDefault(); shoot(); } };
  addEventListener("keydown", kd); A.onCleanup(() => removeEventListener("keydown", kd));
  const shoot = () => { if(fly || over) return; fly = {x:SX, y:SY, vx:Math.cos(aim) * 620, vy:Math.sin(aim) * 620, col:cur}; cur = nxt; nxt = rollColor(); shots++; A.beep(520, .04, .06); };
  const settle = () => {
    // 找最近的空格子（要貼著已有泡泡或在最上排）
    const maxR = grid.length + 1; let best = null, bd = Infinity;
    for(let r = 0; r <= maxR; r++) for(let c = 0; c < COLS; c++){
      if(!valid(r, c) || get(r, c) != null) continue;
      if(r > 0 && !nbrs(r, c).some(([a, b]) => get(a, b) != null)) continue;
      const [x, y] = center(r, c), d = Math.hypot(x - fly.x, y - fly.y); if(d < bd){ bd = d; best = [r, c]; }
    }
    if(!best) best = [0, 0];
    const [r, c] = best; while(grid.length <= r) grid.push(Array(COLS).fill(null)); grid[r][c] = fly.col; const col = fly.col; fly = null;
    // 同色相連
    const seen = new Set([r + "," + c]), q = [[r, c]];
    while(q.length){ const [a, b] = q.pop(); for(const [x, y] of nbrs(a, b)){ const k = x + "," + y; if(!seen.has(k) && get(x, y) === col){ seen.add(k); q.push([x, y]); } } }
    let popped = 0;
    if(seen.size >= 3){ seen.forEach(k => { const [a, b] = k.split(",").map(Number); const [x, y] = center(a, b); pops.push({x, y, col, t:280}); grid[a][b] = null; popped++; }); score += popped * 10 + (popped > 3 ? (popped - 3) * 10 : 0); A.beep(420 + popped * 40, .12, .09, "triangle"); A.buzz(30); }
    // 沒有連到最上排的就掉下來
    const hold = new Set(), q2 = [];
    (grid[0] || []).forEach((v, cc) => { if(v != null){ hold.add("0," + cc); q2.push([0, cc]); } });
    while(q2.length){ const [a, b] = q2.pop(); for(const [x, y] of nbrs(a, b)){ const k = x + "," + y; if(!hold.has(k) && get(x, y) != null){ hold.add(k); q2.push([x, y]); } } }
    let dropped = 0; grid.forEach((row, a) => row.forEach((v, b) => { if(v != null && !hold.has(a + "," + b)){ const [x, y] = center(a, b); pops.push({x, y, col:v, t:420, vy:80}); grid[a][b] = null; dropped++; } }));
    if(dropped){ score += dropped * 20; A.beep(300, .2, .08, "triangle"); }
    if(!popped) miss++; else miss = 0;
    while(grid.length && grid[grid.length - 1].every(v => v == null)) grid.pop();
    if(miss >= missLimit){ miss = 0; par = 1 - par; const row = mkRow(); if(off(0)) row[COLS - 1] = null; grid.unshift(row); A.beep(200, .15, .08, "sawtooth"); }
    paintStats();
    if(!grid.length || grid.every(row => row.every(v => v == null))){ score += 200 * level; A.beep(988, .4, .1, "triangle"); A.later(build, 600); return; }
    let low = 0; grid.forEach((row, a) => { if(row.some(v => v != null)) low = Math.max(low, center(a, 0)[1]); });
    if(low + R >= LINE){ over = true; A.beep(110, .6, .13, "sawtooth"); A.buzz(300); A.later(() => finish("bubble", score, `打到第 ${level} 關`), 500); }
    if(!present().includes(cur)) cur = rollColor(); if(!present().includes(nxt)) nxt = rollColor();
  };
  const update = dt => {
    t += dt; const s = dt / 1000; pops.forEach(p => { p.t -= dt; if(p.vy){ p.y += p.vy * s; p.vy += 900 * s; } }); pops = pops.filter(p => p.t > 0);
    if(!fly || over) return;
    let rem = 620 * s;
    while(rem > 0 && fly){
      const stp = Math.min(6, rem); rem -= stp; const m = Math.hypot(fly.vx, fly.vy);
      fly.x += fly.vx / m * stp; fly.y += fly.vy / m * stp;
      if(fly.x < R){ fly.x = R; fly.vx = Math.abs(fly.vx); } if(fly.x > W - R){ fly.x = W - R; fly.vx = -Math.abs(fly.vx); }
      let hit = fly.y <= R;
      if(!hit) outer: for(let r = 0; r < grid.length; r++) for(let c = 0; c < COLS; c++){ if(get(r, c) == null) continue; const [x, y] = center(r, c); if(Math.hypot(x - fly.x, y - fly.y) < 2 * R - 3){ hit = true; break outer; } }
      if(hit){ settle(); return; }
    }
  };
  const bub = (x, y, col, r = R - 1) => { ctx.fillStyle = PAL[col]; ctx.beginPath(); ctx.arc(x, y, r, 0, 7); ctx.fill(); ctx.fillStyle = "rgba(255,255,255,.35)"; ctx.beginPath(); ctx.arc(x - r * .32, y - r * .32, r * .3, 0, 7); ctx.fill(); };
  const draw = () => {
    ctx.fillStyle = "#12123A"; ctx.fillRect(0, 0, W, H);
    ctx.strokeStyle = "#FF5A6E"; ctx.setLineDash([8, 6]); ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(0, LINE); ctx.lineTo(W, LINE); ctx.stroke(); ctx.setLineDash([]);
    grid.forEach((row, r) => row.forEach((v, c) => { if(v != null){ const [x, y] = center(r, c); bub(x, y, v); } }));
    pops.forEach(p => { ctx.globalAlpha = clamp(p.t / 280, 0, 1); bub(p.x, p.y, p.col, (R - 1) * (p.vy ? 1 : 1 + (1 - p.t / 280) * .5)); ctx.globalAlpha = 1; });
    if(!fly && !over){ ctx.strokeStyle = "rgba(255,255,255,.5)"; ctx.setLineDash([3, 8]); ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(SX, SY); ctx.lineTo(SX + Math.cos(aim) * 190, SY + Math.sin(aim) * 190); ctx.stroke(); ctx.setLineDash([]); }
    if(fly) bub(fly.x, fly.y, fly.col);
    if(!fly) bub(SX, SY, cur); bub(SX - 70, SY + 10, nxt, 11);
    ctx.fillStyle = "#9C98C8"; ctx.font = "700 11px system-ui,sans-serif"; ctx.textAlign = "center"; ctx.fillText("下一個", SX - 70, SY + 34);
  };
  build();
  runLoop(update, draw);
}

/* ---------- 2. 鋼琴塊 ---------- */
function gPiano(){
  A.cleanup();
  const W = 320, H = 480, CW = W / 4, RHT = H / 4;
  const NOTES = [262, 294, 330, 392, 440, 523, 587, 659];
  let rows = [], score = 0, started = false, over = false, speed = 200, t = 0, note = 0, wrong = null;
  const addRow = y => rows.push({y, col:Math.floor(Math.random() * 4), hit:false});
  for(let i = 0; i < 6; i++) addRow(H - RHT * (i + 1) - RHT * 0);
  shell("piano", "", "只點黑色的方塊，漏掉或點到白色就結束。越來越快！");
  const {cv, ctx} = setupCanvas(W, H); $("#stage").appendChild(cv);
  const paintStats = () => setStats(`<span>分數 <b>${score}</b></span>`); paintStats();
  A.dbgPiano = () => ({rows, score, over, RHT, CW});   // 測試用
  const tap = e => {
    e.preventDefault(); A.audio(); if(over) return;
    const r = cv.getBoundingClientRect(), x = (e.clientX - r.left) * (W / r.width), y = (e.clientY - r.top) * (H / r.height), col = clamp(Math.floor(x / CW), 0, 3);
    const tile = rows.find(o => !o.hit && o.col === col && y >= o.y && y <= o.y + RHT);
    if(!tile){ const any = rows.find(o => o.hit && o.col === col && y >= o.y && y <= o.y + RHT); if(any) return; wrong = {x:col * CW, y:y - RHT / 2, t:400}; return die("點到白色了"); }
    tile.hit = true; started = true; score++; paintStats(); const f = NOTES[note++ % NOTES.length] * (note > 8 ? 1 : 1); A.beep(f, .18, .1, "triangle"); A.buzz(10);
  };
  cv.addEventListener("pointerdown", tap);
  const kd = e => { const col = {d:0, f:1, j:2, k:3, a:0, s:1, ArrowLeft:0, ArrowDown:1, ArrowUp:2, ArrowRight:3}[e.key]; if(col === undefined) return; const tile = rows.filter(o => !o.hit).sort((p, q) => q.y - p.y)[0]; if(tile && tile.col === col){ tile.hit = true; started = true; score++; paintStats(); A.beep(NOTES[note++ % NOTES.length], .18, .1, "triangle"); } else if(!over && tile) die("點到白色了"); };
  addEventListener("keydown", kd); A.onCleanup(() => removeEventListener("keydown", kd));
  const die = why => { over = true; A.beep(120, .5, .13, "sawtooth"); A.buzz(250); A.later(() => finish("piano", score, why), 500); };
  const update = dt => {
    t += dt; if(wrong) wrong.t -= dt; if(!started || over) return; const s = dt / 1000;
    speed = Math.min(720, 200 + score * 4.2); rows.forEach(o => { o.y += speed * s; });
    const top = Math.min(...rows.map(o => o.y)); if(top > 0) addRow(top - RHT);
    for(const o of rows){ if(!o.hit && o.y > H){ wrong = {x:o.col * CW, y:H - RHT, t:500}; return die("漏掉一個方塊"); } }
    rows = rows.filter(o => o.y < H + RHT);
  };
  const draw = () => {
    ctx.fillStyle = "#F4F1FF"; ctx.fillRect(0, 0, W, H);
    ctx.strokeStyle = "#CFC9EE"; ctx.lineWidth = 2; for(let i = 1; i < 4; i++){ ctx.beginPath(); ctx.moveTo(i * CW, 0); ctx.lineTo(i * CW, H); ctx.stroke(); }
    for(const o of rows){ if(o.y < -RHT || o.y > H) continue; ctx.fillStyle = o.hit ? "#C9C4E6" : "#1A1A3A"; roundRect(ctx, o.col * CW + 3, o.y + 3, CW - 6, RHT - 6, 8); ctx.fill(); if(!started && !o.hit && o.y >= H - RHT - 1 && o.y <= H - RHT + 1){ ctx.fillStyle = "#fff"; ctx.font = "800 18px system-ui,sans-serif"; ctx.textAlign = "center"; ctx.fillText("點這裡開始", o.col * CW + CW / 2, o.y + RHT / 2 + 6); } }
    if(wrong && wrong.t > 0){ ctx.fillStyle = "rgba(255,90,110,.7)"; ctx.fillRect(wrong.x, wrong.y, CW, RHT); }
  };
  runLoop(update, draw);
}

/* ---------- 3. 對對碰 ---------- */
function gMatch3(){
  A.cleanup();
  const N = 8, C = 44, W = N * C, H = N * C, TYPES = 6, MOVES = 25;
  let g = [], moves = MOVES, score = 0, phase = "idle", sel = null, sw = null, combo = 0, over = false, t = 0, hintT = 0;
  const mk = () => ({c:Math.floor(Math.random() * TYPES), ox:0, oy:0, s:1, clr:0});
  const matchesOf = () => {
    const m = new Set();
    for(let r = 0; r < N; r++) for(let c = 0; c < N - 2; c++){ const v = g[r][c] && g[r][c].c; if(v != null && g[r][c + 1] && g[r][c + 2] && g[r][c + 1].c === v && g[r][c + 2].c === v){ let k = c; while(k < N && g[r][k] && g[r][k].c === v){ m.add(r + "," + k); k++; } } }
    for(let c = 0; c < N; c++) for(let r = 0; r < N - 2; r++){ const v = g[r][c] && g[r][c].c; if(v != null && g[r + 1][c] && g[r + 2][c] && g[r + 1][c].c === v && g[r + 2][c].c === v){ let k = r; while(k < N && g[k][c] && g[k][c].c === v){ m.add(k + "," + c); k++; } } }
    return m;
  };
  const swapCells = (a, b) => { const t = g[a[0]][a[1]]; g[a[0]][a[1]] = g[b[0]][b[1]]; g[b[0]][b[1]] = t; };
  const hasMove = () => { for(let r = 0; r < N; r++) for(let c = 0; c < N; c++) for(const [dr, dc] of [[0, 1], [1, 0]]){ const r2 = r + dr, c2 = c + dc; if(r2 >= N || c2 >= N) continue; swapCells([r, c], [r2, c2]); const ok = matchesOf().size > 0; swapCells([r, c], [r2, c2]); if(ok) return [[r, c], [r2, c2]]; } return null; };
  const fresh = () => { do { g = Array.from({length:N}, () => Array.from({length:N}, mk)); } while(matchesOf().size || !hasMove()); };
  shell("match3", "", "點一個寶石再點旁邊的，或直接滑動，把三個以上同色排成一線。步數用完就結束。");
  const {cv, ctx} = setupCanvas(W, H); $("#stage").appendChild(cv);
  const paintStats = () => setStats(`<span>分數 <b>${score}</b></span><span>剩下步數 <b>${moves}</b></span>`);
  fresh(); paintStats();
  A.dbgMatch = () => ({phase, move:hasMove(), moves, score, over});   // 測試用
  const cellAt = e => { const r = cv.getBoundingClientRect(); return [clamp(Math.floor((e.clientY - r.top) * (H / r.height) / C), 0, N - 1), clamp(Math.floor((e.clientX - r.left) * (W / r.width) / C), 0, N - 1)]; };
  const trySwap = (a, b) => {
    if(phase !== "idle" || over) return; if(Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]) !== 1){ sel = b; return; }
    sel = null; swapCells(a, b); const ok = matchesOf().size > 0; swapCells(a, b);
    sw = {a, b, t:0, back:!ok}; phase = "swap"; A.beep(380, .04, .05);
  };
  let down = null;
  cv.addEventListener("pointerdown", e => { e.preventDefault(); A.audio(); down = {cell:cellAt(e), x:e.clientX, y:e.clientY, done:false}; if(phase === "idle" && !over){ if(sel && Math.abs(sel[0] - down.cell[0]) + Math.abs(sel[1] - down.cell[1]) === 1){ trySwap(sel, down.cell); down.done = true; } else sel = down.cell; } });
  cv.addEventListener("pointermove", e => { if(!down || down.done || phase !== "idle") return; const dx = e.clientX - down.x, dy = e.clientY - down.y; if(Math.max(Math.abs(dx), Math.abs(dy)) < 18) return; const [r, c] = down.cell; const b = Math.abs(dx) > Math.abs(dy) ? [r, c + (dx > 0 ? 1 : -1)] : [r + (dy > 0 ? 1 : -1), c]; down.done = true; if(b[0] >= 0 && b[0] < N && b[1] >= 0 && b[1] < N) trySwap([r, c], b); });
  cv.addEventListener("pointerup", () => { down = null; });
  const startClear = () => {
    const m = matchesOf(); if(!m.size){ combo = 0; phase = "idle"; if(moves <= 0){ over = true; A.later(() => finish("match3", score, `用完 ${MOVES} 步`), 500); } else if(!hasMove()){ A.toast("沒有可以交換的了，重新洗牌"); fresh(); } return; }
    combo++; const gain = m.size * 10 * combo; score += gain; paintStats(); m.forEach(k => { const [r, c] = k.split(",").map(Number); g[r][c].clearing = true; }); phase = "clear"; A.beep(440 + combo * 70, .12, .09, "triangle"); A.buzz(20); sw = {t:0};
  };
  const update = dt => {
    t += dt; const s = dt / 1000; if(over) return;
    if(phase === "swap"){
      sw.t += dt / 150;
      if(sw.t >= 1){
        if(!sw.back){ swapCells(sw.a, sw.b); moves--; paintStats(); sw = null; startClear(); return; }   // 有連線：真的交換
        if(!sw.rev){ sw.rev = true; sw.t = 0; return; }                                                 // 沒連線：換回去
        phase = "idle"; sw = null;
      }
    } else if(phase === "clear"){
      sw.t += dt / 220; if(sw.t >= 1){
        // 移除 + 下落
        for(let c = 0; c < N; c++){ const col = []; for(let r = N - 1; r >= 0; r--) if(!g[r][c].clearing) col.push({tile:g[r][c], from:r}); const missing = N - col.length; let r = N - 1;
          for(const it of col){ it.tile.oy = -(r - it.from) * C + it.tile.oy; g[r][c] = it.tile; r--; }
          for(let k = 0; k < missing; k++){ const tl = mk(); tl.oy = -(r + 1 + k) * C; g[r][c] = tl; r--; } }
        phase = "fall"; sw = null;
      }
    } else if(phase === "fall"){
      let moving = false; for(let r = 0; r < N; r++) for(let c = 0; c < N; c++){ const tl = g[r][c]; if(tl.oy < 0){ tl.vy = (tl.vy || 0) + 2400 * s; tl.oy = Math.min(0, tl.oy + tl.vy * s); if(tl.oy === 0) tl.vy = 0; else moving = true; } }
      if(!moving){ A.beep(260, .04, .05); startClear(); }
    } else if(phase === "idle"){ hintT += dt; }
  };
  const shape = (ctx, k, x, y, r) => {
    ctx.beginPath();
    if(k === 0){ ctx.arc(x, y, r, 0, 7); } else if(k === 1){ roundRect(ctx, x - r, y - r, r * 2, r * 2, 6); } else if(k === 2){ ctx.moveTo(x, y - r - 1); ctx.lineTo(x + r + 1, y + r); ctx.lineTo(x - r - 1, y + r); ctx.closePath(); }
    else if(k === 3){ ctx.moveTo(x, y - r - 2); ctx.lineTo(x + r + 2, y); ctx.lineTo(x, y + r + 2); ctx.lineTo(x - r - 2, y); ctx.closePath(); }
    else if(k === 4){ for(let i = 0; i < 6; i++){ const a = i * Math.PI / 3 + Math.PI / 6; ctx[i ? "lineTo" : "moveTo"](x + Math.cos(a) * (r + 1), y + Math.sin(a) * (r + 1)); } ctx.closePath(); }
    else { for(let i = 0; i < 10; i++){ const a = i * Math.PI / 5 - Math.PI / 2, rr = i % 2 ? r * .5 : r + 2; ctx[i ? "lineTo" : "moveTo"](x + Math.cos(a) * rr, y + Math.sin(a) * rr); } ctx.closePath(); }
    ctx.fill();
  };
  const draw = () => {
    ctx.fillStyle = "#12123A"; ctx.fillRect(0, 0, W, H);
    for(let r = 0; r < N; r++) for(let c = 0; c < N; c++){ if((r + c) % 2) { ctx.fillStyle = "#171745"; ctx.fillRect(c * C, r * C, C, C); } }
    for(let r = 0; r < N; r++) for(let c = 0; c < N; c++){
      const tl = g[r][c]; if(!tl) continue; let x = c * C + C / 2, y = r * C + C / 2 + (tl.oy || 0), sc = 1;
      if(phase === "swap" && sw){ const e = Math.min(1, sw.t), f = sw.rev ? 1 - e : e; const A1 = sw.a, B1 = sw.b; if(r === A1[0] && c === A1[1]){ x += (B1[1] - A1[1]) * C * f; y += (B1[0] - A1[0]) * C * f; } else if(r === B1[0] && c === B1[1]){ x += (A1[1] - B1[1]) * C * f; y += (A1[0] - B1[0]) * C * f; } }
      if(tl.clearing){ sc = 1 - Math.min(1, sw ? sw.t : 0); }
      ctx.save(); ctx.translate(x, y); ctx.scale(sc, sc); ctx.fillStyle = PAL[tl.c]; shape(ctx, tl.c, 0, 0, 14); ctx.fillStyle = "rgba(255,255,255,.28)"; ctx.beginPath(); ctx.arc(-4, -5, 3.5, 0, 7); ctx.fill(); ctx.restore();
    }
    if(sel && phase === "idle"){ ctx.strokeStyle = "#fff"; ctx.lineWidth = 3; roundRect(ctx, sel[1] * C + 3, sel[0] * C + 3, C - 6, C - 6, 8); ctx.stroke(); }
    if(phase === "idle" && hintT > 6000 && !over){ const h = hasMove(); if(h){ ctx.strokeStyle = `rgba(255,216,74,${.4 + Math.sin(t / 150) * .3})`; ctx.lineWidth = 3; roundRect(ctx, h[0][1] * C + 3, h[0][0] * C + 3, C - 6, C - 6, 8); ctx.stroke(); } }
  };
  runLoop((dt) => { if(phase === "idle" && !down) { /* hint 計時 */ } if(phase !== "idle") hintT = 0; update(dt); }, draw);
}

/* ---------- 4. 中國象棋 ---------- */
function gChess(){
  A.cleanup();
  const X = window.Xiangqi;
  const CELL = 36, MX = 34, MY = 34, W = MX * 2 + CELL * 8, H = MY * 2 + CELL * 9;
  const NAME = {K:"帥", A:"仕", E:"相", H:"傌", R:"俥", C:"炮", P:"兵", k:"將", a:"士", e:"象", h:"馬", r:"車", c:"砲", p:"卒"};
  let b, sel = null, legal = [], turn = 1, over = false, streak = 0, last = null, ply = 0, busy = false;
  shell("chess", "", "你是紅方（下面），先走。點棋子再點目標位置。把對方將死（或讓他沒棋可走）就贏。");
  const {cv, ctx} = setupCanvas(W, H); $("#stage").appendChild(cv);
  const paintStats = () => setStats(`<span>連勝 <b>${streak}</b> 場</span><span>電腦強度 <b>${streak < 1 ? 1 : streak < 3 ? 2 : streak < 5 ? 3 : 4}</b></span>`);
  const nextBar = (label, fn) => { $("#ctrl").innerHTML = `<div class="row" style="margin-top:12px"><button class="btn" id="nextm">${label}</button></div>`; $("#nextm").addEventListener("click", () => { A.audio(); fn(); }); };
  const endMatch = res => {
    over = true;
    if(res === "lose"){ A.beep(130, .5, .12, "sawtooth"); A.buzz(200); A.later(() => finish("chess", streak, streak ? `連勝 ${streak} 場後，輸給電腦` : "第一場就輸了，再試一次"), 800); return; }
    if(res === "win"){ A.beep(988, .3, .1, "triangle"); A.buzz(80); nextBar("贏了！下一場（電腦會更強）", () => start(streak + 1)); return; }
    nextBar("和棋，再下一局", () => start(streak));
  };
  const start = s => { streak = s; b = X.newBoard(); sel = null; legal = []; turn = 1; over = false; last = null; ply = 0; busy = false; $("#ctrl").innerHTML = ""; paintStats(); };
  const afterMove = who => {
    ply++; const other = -who; const ms = X.legalMoves(b, other);
    if(!ms.length){ endMatch(who === 1 ? "win" : "lose"); return; }
    if(ply >= 200){ endMatch("draw"); return; }
    if(X.inCheck(b, other)){ A.toast(other === 1 ? "你被將軍了！" : "將軍！"); A.beep(700, .1, .08, "triangle"); }
    turn = other; if(other === -1){ busy = true; A.later(cpu, 350); }
  };
  const cpu = () => {
    if(over) return; const depth = streak < 1 ? 1 : streak < 3 ? 2 : streak < 5 ? 3 : 4, blunder = Math.max(0, .35 - streak * .1);
    const m = X.bestMove(b, -1, depth, blunder); busy = false; if(!m){ endMatch("win"); return; }
    X.apply(b, m); last = m; A.beep(300, .05, .07); afterMove(-1);
  };
  const posOf = e => { const r = cv.getBoundingClientRect(), x = (e.clientX - r.left) * (W / r.width), y = (e.clientY - r.top) * (H / r.height); const c = Math.round((x - MX) / CELL), rr = Math.round((y - MY) / CELL); if(c < 0 || c > 8 || rr < 0 || rr > 9) return null; return [rr, c]; };
  cv.addEventListener("pointerdown", e => {
    e.preventDefault(); A.audio(); if(over || busy || turn !== 1) return; const p = posOf(e); if(!p) return; const [r, c] = p, ch = b[r][c];
    if(sel){ const mv = legal.find(m => m[2] === r && m[3] === c); if(mv){ X.apply(b, mv); last = mv; sel = null; legal = []; A.beep(420, .05, .07); A.buzz(15); afterMove(1); return; } }
    if(ch !== "." && X.sideOf(ch) === 1){ sel = [r, c]; legal = X.legalFrom(b, 1, r, c); A.beep(500, .02, .04); } else { sel = null; legal = []; }
  });
  A.dbgChess = () => ({b, turn, over, busy, streak, ply});   // 測試用
  const px = c => MX + c * CELL, py = r => MY + r * CELL;
  const draw = () => {
    ctx.fillStyle = "#D9A867"; ctx.fillRect(0, 0, W, H); ctx.strokeStyle = "#5A3A1E"; ctx.lineWidth = 1.6;
    for(let r = 0; r < 10; r++){ ctx.beginPath(); ctx.moveTo(px(0), py(r)); ctx.lineTo(px(8), py(r)); ctx.stroke(); }
    for(let c = 0; c < 9; c++){ ctx.beginPath(); if(c === 0 || c === 8){ ctx.moveTo(px(c), py(0)); ctx.lineTo(px(c), py(9)); } else { ctx.moveTo(px(c), py(0)); ctx.lineTo(px(c), py(4)); ctx.moveTo(px(c), py(5)); ctx.lineTo(px(c), py(9)); } ctx.stroke(); }
    for(const [r0, r1] of [[0, 2], [7, 9]]){ ctx.beginPath(); ctx.moveTo(px(3), py(r0)); ctx.lineTo(px(5), py(r1)); ctx.moveTo(px(5), py(r0)); ctx.lineTo(px(3), py(r1)); ctx.stroke(); }
    ctx.fillStyle = "#5A3A1E"; ctx.font = "700 20px 'Noto Serif TC',serif"; ctx.textAlign = "center"; ctx.fillText("楚 河", px(2), py(4.5) + 7); ctx.fillText("漢 界", px(6), py(4.5) + 7);
    if(last){ ctx.strokeStyle = "#2F7B64"; ctx.lineWidth = 3; ctx.strokeRect(px(last[1]) - 17, py(last[0]) - 17, 34, 34); ctx.strokeRect(px(last[3]) - 17, py(last[2]) - 17, 34, 34); }
    for(let r = 0; r < 10; r++) for(let c = 0; c < 9; c++){
      const ch = b[r][c]; if(ch === ".") continue; const red = ch === ch.toUpperCase();
      ctx.fillStyle = "#F6E7C8"; ctx.beginPath(); ctx.arc(px(c), py(r), 16, 0, 7); ctx.fill(); ctx.strokeStyle = red ? "#C0392B" : "#222"; ctx.lineWidth = 2.2; ctx.beginPath(); ctx.arc(px(c), py(r), 13.5, 0, 7); ctx.stroke();
      ctx.fillStyle = red ? "#C0392B" : "#222"; ctx.font = "900 19px 'Noto Serif TC',serif"; ctx.textAlign = "center"; ctx.fillText(NAME[ch], px(c), py(r) + 7);
    }
    if(sel){ ctx.strokeStyle = "#35E0FF"; ctx.lineWidth = 3.5; ctx.beginPath(); ctx.arc(px(sel[1]), py(sel[0]), 18, 0, 7); ctx.stroke(); legal.forEach(m => { ctx.fillStyle = b[m[2]][m[3]] === "." ? "rgba(47,123,100,.8)" : "rgba(255,90,110,.75)"; ctx.beginPath(); ctx.arc(px(m[3]), py(m[2]), b[m[2]][m[3]] === "." ? 6 : 17, 0, 7); if(b[m[2]][m[3]] === ".") ctx.fill(); else { ctx.lineWidth = 3.5; ctx.strokeStyle = "rgba(255,90,110,.85)"; ctx.stroke(); } }); }
  };
  start(0);
  runLoop(() => {}, draw);
}

/* ---------- 註冊 ---------- */
Object.assign(A.GAMES, {
  bubble:{name:"泡泡龍", tag:"瞄準發射泡泡，三個同色就消掉", dir:1, group:"retro", fmt:v => v + " 分", col:"#B07CFF", ic:'<circle cx="16" cy="16" r="8" fill="#FF4FA3"/><circle cx="32" cy="16" r="8" fill="#35E0FF"/><circle cx="24" cy="30" r="8" fill="#FFD84A"/><circle cx="24" cy="42" r="3" fill="#5CFFA0"/>'},
  piano:{name:"鋼琴塊", tag:"只點黑色方塊，越來越快", dir:1, group:"retro", fmt:v => v + " 塊", col:"#EEEBFF", ic:'<rect x="6" y="6" width="36" height="36" rx="4" fill="#F4F1FF"/><rect x="8" y="8" width="8" height="14" rx="2" fill="#1A1A3A"/><rect x="32" y="16" width="8" height="14" rx="2" fill="#1A1A3A"/><rect x="20" y="26" width="8" height="14" rx="2" fill="#1A1A3A"/>'},
  match3:{name:"對對碰", tag:"交換寶石排成三個同色，25 步", dir:1, group:"retro", fmt:v => v + " 分", col:"#FF9F4A", ic:'<circle cx="14" cy="14" r="7" fill="#FF4FA3"/><rect x="25" y="8" width="14" height="14" rx="3" fill="#FFD84A"/><path d="M14 28l7 12H7z" fill="#35E0FF"/><path d="M32 27l7 7-7 7-7-7z" fill="#5CFFA0"/>'},
  chess:{name:"中國象棋", tag:"你執紅先走，對電腦連勝", dir:1, group:"retro", fmt:v => v + " 場連勝", col:"#D9A867", ic:'<circle cx="24" cy="24" r="17" fill="#F6E7C8"/><circle cx="24" cy="24" r="14" fill="none" stroke="#C0392B" stroke-width="2.5"/><text x="24" y="31" font-size="19" font-weight="900" fill="#C0392B" text-anchor="middle" font-family="serif">帥</text>'}
});
Object.assign(A.RUN, {bubble:gBubble, piano:gPiano, match3:gMatch3, chess:gChess});
A.menu();
})();
