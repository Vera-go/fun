/* 電玩廳：復古經典。玩法是大家熟悉的老遊戲，名字和畫面都是自己重新做的。
   用法：index.html 先建立 window.Arcade，這個檔案把遊戲加進去再重畫選單。 */
(function(){
"use strict";
const A = window.Arcade, $ = A.$, esc = A.esc;
const rand = (a, b) => a + Math.random() * (b - a);
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

/* ---------- 共用：畫布、迴圈 ---------- */
function setupCanvas(W, H){
  const cv = document.createElement("canvas"), dpr = Math.min(window.devicePixelRatio || 1, 3);
  cv.width = W * dpr; cv.height = H * dpr;
  cv.style.cssText = `display:block;width:100%;max-width:${W}px;margin:0 auto;border-radius:16px;background:#0E0E22;touch-action:none;user-select:none;-webkit-user-select:none`;
  const ctx = cv.getContext("2d"); ctx.scale(dpr, dpr);
  return {cv, ctx};
}
function pointerX(cv, e, W){ const r = cv.getBoundingClientRect(); return (e.clientX - r.left) * (W / r.width); }
function runLoop(update, draw){
  let last = 0, stop = false, raf = 0;
  const f = ts => { if(stop) return; const dt = Math.min(40, ts - (last || ts)); last = ts; update(dt); draw(); raf = requestAnimationFrame(f); };
  raf = requestAnimationFrame(f);
  const halt = () => { stop = true; cancelAnimationFrame(raf); };
  A.onCleanup(halt);
  return halt;
}
let finished = false;
function shell(id, statsHtml, hint){
  finished = false;
  const g = A.GAMES[id];
  A.view(`<div class="top"><button class="btn ghost sm" data-menu="1">← 選單</button><span class="sp"></span><span class="t">${esc(g.name)}</span></div>
    <div class="stat" id="stats">${statsHtml}</div><div id="stage"></div>${hint ? `<p class="sub2" style="text-align:center">${hint}</p>` : ""}<div id="ctrl"></div>`);
}
const setStats = html => { const e = $("#stats"); if(e) e.innerHTML = html; };
function finish(id, score, extra){
  if(finished) return; finished = true;
  A.cleanup();
  const nb = A.record(id, score);
  A.resultView(id, score, extra, nb);
}
function roundRect(ctx, x, y, w, h, r){ ctx.beginPath(); ctx.moveTo(x + r, y); ctx.arcTo(x + w, y, x + w, y + h, r); ctx.arcTo(x + w, y + h, x, y + h, r); ctx.arcTo(x, y + h, x, y, r); ctx.arcTo(x, y, x + w, y, r); ctx.closePath(); }

/* ---------- 1. 打磚塊 ---------- */
function gBrick(){
  A.cleanup();
  const W = 360, H = 480, COLS = 9, ROWS = 6, BW = (W - 20) / COLS, BH = 16, TOP = 56;
  const COL = ["#FF4FA3", "#FF8A5B", "#FFD84A", "#5CFFA0", "#35E0FF", "#9B8CFF"];
  let score = 0, lives = 3, level = 1, bricks = [], speed = 270, hits = 0, stuck = true;
  const pad = {x:W / 2, w:72, y:H - 36, h:12}, ball = {x:0, y:0, vx:0, vy:0, r:6};
  const build = () => { bricks = []; for(let r = 0; r < ROWS; r++) for(let c = 0; c < COLS; c++) bricks.push({x:10 + c * BW, y:TOP + r * (BH + 4), alive:true, row:r}); };
  const reset = () => { stuck = true; ball.x = pad.x; ball.y = pad.y - ball.r - 1; ball.vx = ball.vy = 0; };
  shell("brick", "", "拖動畫面移動擋板，點一下發球。");
  const {cv, ctx} = setupCanvas(W, H); $("#stage").appendChild(cv);
  const paintStats = () => setStats(`<span>分數 <b>${score}</b></span><span>生命 <b>${lives}</b></span><span>第 <b>${level}</b> 關</span>`);
  build(); reset(); paintStats();
  A.dbg = () => ({ball, pad, score, lives, level, bricks, left:bricks.filter(b => b.alive).length});   // 測試用
  const move = e => { pad.x = clamp(pointerX(cv, e, W), pad.w / 2, W - pad.w / 2); if(stuck) ball.x = pad.x; };
  cv.addEventListener("pointermove", move);
  cv.addEventListener("pointerdown", e => { A.audio(); cv.setPointerCapture && cv.setPointerCapture(e.pointerId); move(e);
    if(stuck){ stuck = false; const a = rand(-.5, .5); ball.vx = Math.sin(a) * speed; ball.vy = -Math.cos(a) * speed; A.beep(520, .05); } });
  const keys = {}; const kd = e => { keys[e.key] = true; if(e.key === " " && stuck){ stuck = false; ball.vx = rand(-90, 90); ball.vy = -speed; } }, ku = e => { keys[e.key] = false; };
  addEventListener("keydown", kd); addEventListener("keyup", ku); A.onCleanup(() => { removeEventListener("keydown", kd); removeEventListener("keyup", ku); });
  const step = dt => {
    if(keys.ArrowLeft) pad.x = clamp(pad.x - .45 * dt, pad.w / 2, W - pad.w / 2);
    if(keys.ArrowRight) pad.x = clamp(pad.x + .45 * dt, pad.w / 2, W - pad.w / 2);
    if(stuck){ ball.x = pad.x; return; }
    ball.x += ball.vx * dt / 1000; ball.y += ball.vy * dt / 1000;
    if(ball.x < ball.r){ ball.x = ball.r; ball.vx = Math.abs(ball.vx); } if(ball.x > W - ball.r){ ball.x = W - ball.r; ball.vx = -Math.abs(ball.vx); }
    if(ball.y < ball.r){ ball.y = ball.r; ball.vy = Math.abs(ball.vy); }
    if(ball.vy > 0 && ball.y + ball.r >= pad.y && ball.y + ball.r <= pad.y + pad.h + 8 && Math.abs(ball.x - pad.x) <= pad.w / 2 + ball.r){
      const off = clamp((ball.x - pad.x) / (pad.w / 2), -1, 1), a = off * 1.05, sp = Math.hypot(ball.vx, ball.vy);
      ball.vx = Math.sin(a) * sp; ball.vy = -Math.cos(a) * sp; ball.y = pad.y - ball.r; A.beep(330, .04); }
    for(const b of bricks){
      if(!b.alive) continue;
      if(ball.x + ball.r > b.x && ball.x - ball.r < b.x + BW - 2 && ball.y + ball.r > b.y && ball.y - ball.r < b.y + BH){
        b.alive = false; score += b.row < 2 ? 15 : 10; hits++; A.beep(520 + (5 - b.row) * 60, .05);
        const ox = Math.min(ball.x + ball.r - b.x, b.x + BW - 2 - (ball.x - ball.r)), oy = Math.min(ball.y + ball.r - b.y, b.y + BH - (ball.y - ball.r));
        if(ox < oy) ball.vx = -ball.vx; else ball.vy = -ball.vy;
        const sp = Math.min(520, speed + hits * 1.6), cur = Math.hypot(ball.vx, ball.vy); ball.vx *= sp / cur; ball.vy *= sp / cur;
        paintStats(); break;
      }
    }
    if(!bricks.some(b => b.alive)){ level++; speed = Math.min(420, speed + 25); hits = 0; build(); reset(); paintStats(); A.beep(880, .2, .1, "triangle"); }
    if(ball.y > H + 10){ lives--; A.beep(150, .3, .1, "sawtooth"); A.buzz(150); paintStats(); if(lives <= 0) return finish("brick", score, `到第 ${level} 關`); reset(); }
  };
  const draw = () => {
    ctx.fillStyle = "#0E0E22"; ctx.fillRect(0, 0, W, H);
    for(const b of bricks){ if(!b.alive) continue; ctx.fillStyle = COL[b.row]; roundRect(ctx, b.x, b.y, BW - 2, BH, 4); ctx.fill(); }
    ctx.fillStyle = "#EEEBFF"; roundRect(ctx, pad.x - pad.w / 2, pad.y, pad.w, pad.h, 6); ctx.fill();
    ctx.fillStyle = "#FFD84A"; ctx.beginPath(); ctx.arc(ball.x, ball.y, ball.r, 0, 7); ctx.fill();
  };
  runLoop(dt => { for(let t = dt; t > 0; t -= 8) step(Math.min(8, t)); }, draw);
}

/* ---------- 2. 星際防衛 ---------- */
const SPR = [
  ["00100100", "10111101", "11111111", "01111110", "00100100", "01000010"],
  ["00111100", "01111110", "11011011", "11111111", "00100100", "01000010"],
  ["01000010", "00100100", "01111110", "11011011", "11111111", "10100101"]
];
function drawSprite(ctx, pat, x, y, px, col){ ctx.fillStyle = col; for(let r = 0; r < pat.length; r++) for(let c = 0; c < pat[r].length; c++) if(pat[r][c] === "1") ctx.fillRect(x + c * px, y + r * px, px, px); }
function gInvader(){
  A.cleanup();
  const W = 360, H = 480, COLS = 8, ROWS = 4, SZ = 3;
  let score = 0, lives = 3, wave = 1, aliens = [], dir = 1, speed = 24, shots = [], bombs = [], fireAt = 0, bombAt = 1200, t = 0, inv = 0, frame = 0, frameAt = 0;
  const ship = {x:W / 2, y:H - 40, w:30};
  const build = () => { aliens = []; for(let r = 0; r < ROWS; r++) for(let c = 0; c < COLS; c++) aliens.push({x:36 + c * 38, y:56 + r * 32, row:r, col:c, alive:true}); dir = 1; speed = 20 + wave * 6; shots = []; bombs = []; };
  shell("invader", "", "拖動畫面移動飛船，會自動射擊。");
  const {cv, ctx} = setupCanvas(W, H); $("#stage").appendChild(cv);
  const paintStats = () => setStats(`<span>分數 <b>${score}</b></span><span>生命 <b>${lives}</b></span><span>第 <b>${wave}</b> 波</span>`);
  build(); paintStats();
  const move = e => { ship.x = clamp(pointerX(cv, e, W), 20, W - 20); };
  cv.addEventListener("pointermove", move); cv.addEventListener("pointerdown", e => { A.audio(); cv.setPointerCapture && cv.setPointerCapture(e.pointerId); move(e); });
  const keys = {}; const kd = e => { keys[e.key] = true; }, ku = e => { keys[e.key] = false; };
  addEventListener("keydown", kd); addEventListener("keyup", ku); A.onCleanup(() => { removeEventListener("keydown", kd); removeEventListener("keyup", ku); });
  const update = dt => {
    t += dt; if(inv > 0) inv -= dt;
    if(keys.ArrowLeft) ship.x = clamp(ship.x - .3 * dt, 20, W - 20); if(keys.ArrowRight) ship.x = clamp(ship.x + .3 * dt, 20, W - 20);
    const alive = aliens.filter(a => a.alive), left = alive.length, sp = speed * (1 + (COLS * ROWS - left) / 14);
    let edge = false; for(const a of alive){ a.x += dir * sp * dt / 1000; if(a.x < 8 || a.x > W - 36) edge = true; }
    if(edge){ dir = -dir; for(const a of alive){ a.y += 14; a.x += dir * 4; } }
    frameAt += dt; if(frameAt > Math.max(150, 600 - (COLS * ROWS - left) * 12)){ frameAt = 0; frame ^= 1; }
    fireAt -= dt; if(fireAt <= 0){ fireAt = 420; shots.push({x:ship.x, y:ship.y - 6}); A.beep(900, .03, .04); }
    shots.forEach(s => s.y -= 420 * dt / 1000); shots = shots.filter(s => s.y > -10);
    bombAt -= dt; if(bombAt <= 0 && alive.length){ bombAt = Math.max(450, 1300 - wave * 120 - (COLS * ROWS - left) * 15); const cols = {}; alive.forEach(a => { if(!cols[a.col] || a.y > cols[a.col].y) cols[a.col] = a; }); const bottoms = Object.values(cols), pick = bottoms[Math.floor(Math.random() * bottoms.length)]; bombs.push({x:pick.x + 12, y:pick.y + 18}); }
    bombs.forEach(b => b.y += (170 + wave * 10) * dt / 1000); bombs = bombs.filter(b => b.y < H + 10);
    for(const s of shots){ for(const a of alive){ if(a.alive && s.x > a.x - 2 && s.x < a.x + 26 && s.y > a.y && s.y < a.y + 20){ a.alive = false; s.y = -99; score += 10 + (ROWS - 1 - a.row) * 5; A.beep(300, .06, .07); paintStats(); break; } } }
    for(const b of bombs){ if(inv <= 0 && b.x > ship.x - ship.w / 2 && b.x < ship.x + ship.w / 2 && b.y > ship.y - 6 && b.y < ship.y + 14){ b.y = H + 99; lives--; inv = 1400; A.beep(120, .35, .12, "sawtooth"); A.buzz(150); paintStats(); if(lives <= 0) return finish("invader", score, `守到第 ${wave} 波`); } }
    if(alive.length && alive.some(a => a.y + 20 > ship.y - 4)) return finish("invader", score, `守到第 ${wave} 波，入侵者落地了`);
    if(!alive.length){ wave++; build(); paintStats(); A.beep(880, .2, .1, "triangle"); }
  };
  const draw = () => {
    ctx.fillStyle = "#0E0E22"; ctx.fillRect(0, 0, W, H);
    ctx.fillStyle = "#2A2A5A"; for(let i = 0; i < 24; i++) ctx.fillRect((i * 97) % W, (i * 53 + t / 40) % H, 2, 2);
    for(const a of aliens){ if(a.alive) drawSprite(ctx, SPR[a.row % 3], a.x + (frame ? 1 : 0), a.y, SZ, ["#FF4FA3", "#FFD84A", "#5CFFA0", "#35E0FF"][a.row]); }
    ctx.fillStyle = "#FFD84A"; shots.forEach(s => ctx.fillRect(s.x - 1.5, s.y - 8, 3, 10));
    ctx.fillStyle = "#FF5A6E"; bombs.forEach(b => ctx.fillRect(b.x - 1.5, b.y - 6, 3, 10));
    if(inv <= 0 || (t / 100 | 0) % 2){ ctx.fillStyle = "#35E0FF"; ctx.beginPath(); ctx.moveTo(ship.x, ship.y - 12); ctx.lineTo(ship.x + 16, ship.y + 10); ctx.lineTo(ship.x - 16, ship.y + 10); ctx.closePath(); ctx.fill(); }
  };
  runLoop(update, draw);
}

/* ---------- 3. 落磚方塊 ---------- */
const SHAPES = {
  I:[[0,0,0,0],[1,1,1,1],[0,0,0,0],[0,0,0,0]], O:[[1,1],[1,1]], T:[[0,1,0],[1,1,1],[0,0,0]], S:[[0,1,1],[1,1,0],[0,0,0]],
  Z:[[1,1,0],[0,1,1],[0,0,0]], J:[[1,0,0],[1,1,1],[0,0,0]], L:[[0,0,1],[1,1,1],[0,0,0]]
};
const SCOL = {I:"#35E0FF", O:"#FFD84A", T:"#B07CFF", S:"#5CFFA0", Z:"#FF5A6E", J:"#5C86FF", L:"#FF9F4A"};
const rot = m => m[0].map((_, c) => m.map(r => r[c]).reverse());
function gBlock(){
  A.cleanup();
  const CW = 10, CH = 20, C = 26, W = CW * C, H = CH * C;
  let grid = Array.from({length:CH}, () => Array(CW).fill(0)), bag = [], cur = null, next = null, score = 0, lines = 0, level = 1, acc = 0, over = false;
  const take = () => { if(!bag.length) bag = Object.keys(SHAPES).sort(() => Math.random() - .5); const k = bag.pop(); return {k, m:SHAPES[k].map(r => r.slice()), x:0, y:0}; };
  const fits = (p, dx = 0, dy = 0, m = p.m) => m.every((row, r) => row.every((v, c) => { if(!v) return true; const x = p.x + c + dx, y = p.y + r + dy; return x >= 0 && x < CW && y < CH && (y < 0 || !grid[y][x]); }));
  const spawn = () => { cur = next || take(); next = take(); cur.x = Math.floor((CW - cur.m[0].length) / 2); cur.y = cur.k === "I" ? -1 : 0; if(!fits(cur)){ over = true; } paintStats(); };
  shell("block", "", "畫面上滑動移動、點一下旋轉；也可以按下面的按鈕。電腦：← → 移動、↑ 旋轉、↓ 加速、空白鍵直接落到底。");
  const {cv, ctx} = setupCanvas(W, H); $("#stage").appendChild(cv);
  const paintStats = () => setStats(`<span>分數 <b>${score}</b></span><span>行數 <b>${lines}</b></span><span>等級 <b>${level}</b></span><span>下一個 <canvas id="nx" width="64" height="36" style="vertical-align:middle;margin-left:4px"></canvas></span>`);
    const nc = $("#nx"); if(nc && next){ const x = nc.getContext("2d"), m = next.m.filter(r => r.some(Boolean)), sz = 8, ox = (64 - m[0].length * sz) / 2, oy = (36 - m.length * sz) / 2; x.fillStyle = SCOL[next.k]; m.forEach((r, i) => r.forEach((v, j) => { if(v) x.fillRect(ox + j * sz + .5, oy + i * sz + .5, sz - 1, sz - 1); })); }
  $("#ctrl").innerHTML = `<div class="row" style="gap:8px;flex-wrap:nowrap"><button class="btn ghost" data-k="left" style="flex:1;padding:14px 0">◀</button><button class="btn ghost" data-k="rot" style="flex:1;padding:14px 0;white-space:nowrap">轉</button><button class="btn ghost" data-k="right" style="flex:1;padding:14px 0">▶</button><button class="btn ghost" data-k="down" style="flex:1;padding:14px 0">▼</button><button class="btn" data-k="drop" style="flex:1.3;padding:14px 0;white-space:nowrap">到底</button></div>`;
  const lock = () => {
    cur.m.forEach((row, r) => row.forEach((v, c) => { if(v && cur.y + r >= 0) grid[cur.y + r][cur.x + c] = cur.k; }));
    let n = 0; for(let y = CH - 1; y >= 0; y--){ if(grid[y].every(Boolean)){ grid.splice(y, 1); grid.unshift(Array(CW).fill(0)); n++; y++; } }
    if(n){ lines += n; score += [0, 100, 300, 500, 800][n] * level; level = 1 + Math.floor(lines / 10); A.beep(600 + n * 100, .15, .1, "triangle"); A.buzz(40); } else A.beep(200, .04, .05);
    spawn(); if(over) end();
  };
  const end = () => finish("block", score, `消了 ${lines} 行，到第 ${level} 級`);
  const act = k => {
    if(over || !cur) return;
    if(k === "left" && fits(cur, -1)) cur.x--;
    else if(k === "right" && fits(cur, 1)) cur.x++;
    else if(k === "rot"){ const m = rot(cur.m); for(const dx of [0, -1, 1, -2, 2]) if(fits(cur, dx, 0, m)){ cur.m = m; cur.x += dx; A.beep(440, .03, .05); break; } }
    else if(k === "down"){ if(fits(cur, 0, 1)){ cur.y++; score++; acc = 0; } else lock(); }
    else if(k === "drop"){ let n = 0; while(fits(cur, 0, 1)){ cur.y++; n++; } score += n * 2; lock(); }
    if(!over) paintStats();
  };
  let holdTimer = null;
  const stopHold = () => { clearInterval(holdTimer); holdTimer = null; };
  A.onCleanup(stopHold);
  $("#ctrl").addEventListener("pointerdown", e => { const b = e.target.closest("[data-k]"); if(!b) return; e.preventDefault(); A.audio(); const k = b.dataset.k; act(k); stopHold(); if(k === "left" || k === "right" || k === "down") holdTimer = setInterval(() => act(k), 90); });
  addEventListener("pointerup", stopHold); A.onCleanup(() => removeEventListener("pointerup", stopHold));
  const kd = e => { const m = {ArrowLeft:"left", ArrowRight:"right", ArrowUp:"rot", ArrowDown:"down", " ":"drop"}[e.key]; if(m){ e.preventDefault(); act(m); } };
  addEventListener("keydown", kd); A.onCleanup(() => removeEventListener("keydown", kd));
  // 手機也能在畫布上操作：點一下旋轉，左右滑移動，往下滑加速
  let sx = 0, sy = 0, lx = 0, moved = false;
  cv.addEventListener("pointerdown", e => { A.audio(); sx = lx = e.clientX; sy = e.clientY; moved = false; });
  cv.addEventListener("pointermove", e => { if(e.buttons === 0 && e.pointerType === "mouse") return; const dx = e.clientX - lx; if(Math.abs(dx) > C){ act(dx > 0 ? "right" : "left"); lx = e.clientX; moved = true; } if(e.clientY - sy > 60){ act("down"); sy = e.clientY; moved = true; } });
  cv.addEventListener("pointerup", () => { if(!moved) act("rot"); });
  spawn(); if(over) return end();
  const update = dt => { if(over) return; acc += dt; const iv = Math.max(90, 800 - (level - 1) * 70); if(acc >= iv){ acc = 0; if(fits(cur, 0, 1)) cur.y++; else lock(); } };
  const cell = (x, y, col, a = 1) => { ctx.globalAlpha = a; ctx.fillStyle = col; roundRect(ctx, x * C + 1, y * C + 1, C - 2, C - 2, 5); ctx.fill(); ctx.globalAlpha = 1; };
  const draw = () => {
    ctx.fillStyle = "#0E0E22"; ctx.fillRect(0, 0, W, H);
    ctx.strokeStyle = "#1B1B40"; ctx.lineWidth = 1; for(let x = 1; x < CW; x++){ ctx.beginPath(); ctx.moveTo(x * C, 0); ctx.lineTo(x * C, H); ctx.stroke(); } for(let y = 1; y < CH; y++){ ctx.beginPath(); ctx.moveTo(0, y * C); ctx.lineTo(W, y * C); ctx.stroke(); }
    grid.forEach((row, y) => row.forEach((v, x) => { if(v) cell(x, y, SCOL[v]); }));
    if(cur){
      let gy = 0; while(fits(cur, 0, gy + 1)) gy++;
      cur.m.forEach((row, r) => row.forEach((v, c) => { if(v){ cell(cur.x + c, cur.y + gy + r, SCOL[cur.k], .22); } }));
      cur.m.forEach((row, r) => row.forEach((v, c) => { if(v && cur.y + r >= 0) cell(cur.x + c, cur.y + r, SCOL[cur.k]); }));
    }
  };
  runLoop(update, draw);
}

/* ---------- 4. 拍翅小鳥 ---------- */
function gFlap(){
  A.cleanup();
  const W = 320, H = 480, GROUND = 56;
  let started = false, over = false, score = 0, y = H / 2 - 40, vy = 0, pipes = [], spawnIn = 0, gx = 0, wing = 0;
  const bird = {x:90, r:13};
  shell("flap", "", "點一下畫面（或按空白鍵）拍翅，穿過柱子中間的縫。");
  const {cv, ctx} = setupCanvas(W, H); $("#stage").appendChild(cv);
  const paintStats = () => setStats(`<span>分數 <b>${score}</b></span>`); paintStats();
  const flap = () => { if(over) return; A.audio(); started = true; vy = -400; wing = 1; A.beep(660, .04, .06); };
  cv.addEventListener("pointerdown", e => { e.preventDefault(); flap(); });
  const kd = e => { if(e.key === " " || e.key === "ArrowUp"){ e.preventDefault(); flap(); } };
  addEventListener("keydown", kd); A.onCleanup(() => removeEventListener("keydown", kd));
  const die = () => { over = true; A.beep(140, .4, .12, "sawtooth"); A.buzz(180); A.later(() => finish("flap", score, ""), 500); };
  const update = dt => {
    const s = dt / 1000; gx = (gx + 140 * s * (over ? 0 : 1)) % 24; if(wing > 0) wing -= s * 4;
    if(!started){ y = H / 2 - 40 + Math.sin(performance.now() / 220) * 8; spawnIn = .8; return; }
    vy += 1250 * s; y += vy * s;
    if(!over){
      spawnIn -= s; if(spawnIn <= 0){ spawnIn = 1.55; const gap = 138 - Math.min(22, score * 1.2); pipes.push({x:W + 20, top:rand(70, H - GROUND - 70 - gap), gap, passed:false}); }
      pipes.forEach(p => { p.x -= 140 * s; if(!p.passed && p.x + 26 < bird.x){ p.passed = true; score++; paintStats(); A.beep(880, .06, .08); } });
      pipes = pipes.filter(p => p.x > -60);
      if(y + bird.r > H - GROUND || y - bird.r < -20) return die();
      for(const p of pipes){ if(bird.x + bird.r - 3 > p.x && bird.x - bird.r + 3 < p.x + 52 && (y - bird.r + 3 < p.top || y + bird.r - 3 > p.top + p.gap)) return die(); }
    }else if(y + bird.r < H - GROUND){ /* 掉下去 */ } else { y = H - GROUND - bird.r; vy = 0; }
  };
  const draw = () => {
    ctx.fillStyle = "#1B2B5E"; ctx.fillRect(0, 0, W, H);
    ctx.fillStyle = "#26397A"; ctx.fillRect(0, H - GROUND - 60, W, 60);
    for(const p of pipes){ ctx.fillStyle = "#3DCB7A"; ctx.fillRect(p.x, 0, 52, p.top); ctx.fillRect(p.x, p.top + p.gap, 52, H - GROUND - p.top - p.gap); ctx.fillStyle = "#2AA862"; ctx.fillRect(p.x - 4, p.top - 16, 60, 16); ctx.fillRect(p.x - 4, p.top + p.gap, 60, 16); }
    ctx.fillStyle = "#7A5A3A"; ctx.fillRect(0, H - GROUND, W, GROUND); ctx.fillStyle = "#5CFFA0"; ctx.fillRect(0, H - GROUND, W, 8);
    ctx.fillStyle = "#6B4A2E"; for(let x = -gx; x < W; x += 24) ctx.fillRect(x, H - GROUND + 20, 12, 6);
    ctx.save(); ctx.translate(bird.x, y); ctx.rotate(clamp(vy / 700, -.5, 1.1));
    ctx.fillStyle = "#FFD84A"; ctx.beginPath(); ctx.arc(0, 0, bird.r, 0, 7); ctx.fill();
    ctx.fillStyle = "#FF8A5B"; ctx.beginPath(); ctx.moveTo(bird.r - 2, -2); ctx.lineTo(bird.r + 9, 2); ctx.lineTo(bird.r - 2, 6); ctx.closePath(); ctx.fill();
    ctx.fillStyle = "#fff"; ctx.beginPath(); ctx.arc(5, -5, 4.5, 0, 7); ctx.fill(); ctx.fillStyle = "#14142F"; ctx.beginPath(); ctx.arc(6.5, -5, 2, 0, 7); ctx.fill();
    ctx.fillStyle = "#FFB020"; ctx.beginPath(); ctx.ellipse(-4, 4, 7, wing > 0 ? 3 : 6, -.3, 0, 7); ctx.fill();
    ctx.restore();
    if(!started){ ctx.fillStyle = "#EEEBFF"; ctx.font = "800 20px system-ui,sans-serif"; ctx.textAlign = "center"; ctx.fillText("點一下開始", W / 2, H / 2 + 60); }
  };
  runLoop(update, draw);
}

/* ---------- 5. 數字合併 2048 ---------- */
function gMerge(){
  A.cleanup();
  const N = 4, W = 340, GAP = 10, T = (W - GAP * (N + 1)) / N;
  const COLS = {0:["#2A2A5A", "#2A2A5A"], 2:["#EEE4DA", "#14142F"], 4:["#EDE0C8", "#14142F"], 8:["#F2B179", "#14142F"], 16:["#F59563", "#fff"], 32:["#F67C5F", "#fff"], 64:["#F65E3B", "#fff"], 128:["#EDCF72", "#14142F"], 256:["#EDCC61", "#14142F"], 512:["#EDC850", "#14142F"], 1024:["#EDC53F", "#14142F"], 2048:["#EDC22E", "#14142F"]};
  let g = Array.from({length:N}, () => Array(N).fill(0)), score = 0, over = false, won = false;
  const put = () => { const e = []; g.forEach((r, y) => r.forEach((v, x) => { if(!v) e.push([x, y]); })); if(!e.length) return; const [x, y] = e[Math.floor(Math.random() * e.length)]; g[y][x] = Math.random() < .9 ? 2 : 4; };
  put(); put();
  shell("merge", "", "滑動畫面（或按方向鍵）合併相同的數字，湊出 2048。");
  const {cv, ctx} = setupCanvas(W, W); $("#stage").appendChild(cv);
  const paintStats = () => setStats(`<span>分數 <b>${score}</b></span><span>最大 <b>${Math.max(...g.flat())}</b></span>`);
  const slideLine = line => { const a = line.filter(Boolean), out = []; for(let i = 0; i < a.length; i++){ if(a[i] === a[i + 1]){ out.push(a[i] * 2); score += a[i] * 2; i++; } else out.push(a[i]); } while(out.length < N) out.push(0); return out; };
  const move = dir => {
    if(over) return;
    const before = JSON.stringify(g);
    for(let i = 0; i < N; i++){
      const line = dir === "left" || dir === "right" ? g[i].slice() : g.map(r => r[i]);
      const res = (dir === "right" || dir === "down") ? slideLine(line.reverse()).reverse() : slideLine(line);
      if(dir === "left" || dir === "right") g[i] = res; else res.forEach((v, r) => { g[r][i] = v; });
    }
    if(JSON.stringify(g) === before) return;
    put(); A.beep(300 + Math.min(600, Math.max(...g.flat()) / 4), .05, .06); A.buzz(15); paintStats();
    if(!won && g.flat().includes(2048)){ won = true; A.beep(988, .4, .1, "triangle"); A.toast("湊出 2048 了！可以繼續玩"); }
    const dead = !g.flat().includes(0) && !g.some((r, y) => r.some((v, x) => (x < N - 1 && v === r[x + 1]) || (y < N - 1 && v === g[y + 1][x])));
    if(dead){ over = true; A.later(() => finish("merge", score, `最大的數字是 ${Math.max(...g.flat())}`), 450); }
  };
  let sx = 0, sy = 0, active = false;
  cv.addEventListener("pointerdown", e => { e.preventDefault(); A.audio(); sx = e.clientX; sy = e.clientY; active = true; cv.setPointerCapture && cv.setPointerCapture(e.pointerId); });
  cv.addEventListener("pointerup", e => { if(!active) return; active = false; const dx = e.clientX - sx, dy = e.clientY - sy; if(Math.max(Math.abs(dx), Math.abs(dy)) < 24) return; move(Math.abs(dx) > Math.abs(dy) ? (dx > 0 ? "right" : "left") : (dy > 0 ? "down" : "up")); });
  const kd = e => { const m = {ArrowLeft:"left", ArrowRight:"right", ArrowUp:"up", ArrowDown:"down"}[e.key]; if(m){ e.preventDefault(); move(m); } };
  addEventListener("keydown", kd); A.onCleanup(() => removeEventListener("keydown", kd));
  const draw = () => {
    ctx.fillStyle = "#1F1F45"; ctx.fillRect(0, 0, W, W);
    for(let y = 0; y < N; y++) for(let x = 0; x < N; x++){
      const v = g[y][x], c = COLS[v] || ["#3C3A32", "#fff"], px = GAP + x * (T + GAP), py = GAP + y * (T + GAP);
      ctx.fillStyle = c[0]; roundRect(ctx, px, py, T, T, 8); ctx.fill();
      if(v){ ctx.fillStyle = c[1]; ctx.font = `900 ${v < 100 ? 34 : v < 1000 ? 28 : 22}px system-ui,sans-serif`; ctx.textAlign = "center"; ctx.textBaseline = "middle"; ctx.fillText(v, px + T / 2, py + T / 2 + 2); }
    }
  };
  paintStats(); draw();
  runLoop(() => {}, draw);
}

/* ---------- 註冊 ---------- */
Object.assign(A.GAMES, {
  brick:{name:"打磚塊", tag:"拖動擋板接球，打光所有磚塊", dir:1, group:"retro", fmt:v => v + " 分", col:"#FF4FA3", ic:'<rect x="6" y="9" width="12" height="7" rx="2" fill="#FF4FA3"/><rect x="20" y="9" width="12" height="7" rx="2" fill="#FFD84A"/><rect x="34" y="9" width="8" height="7" rx="2" fill="#5CFFA0"/><circle cx="26" cy="29" r="4" fill="#fff"/><rect x="14" y="38" width="20" height="4" rx="2" fill="#35E0FF"/>'},
  invader:{name:"星際防衛", tag:"拖動飛船自動射擊，擋住入侵者", dir:1, group:"retro", fmt:v => v + " 分", col:"#35E0FF", ic:'<path d="M14 12h4v4h-4zM30 12h4v4h-4zM10 16h28v6H10zM6 22h36v8H6zM12 30h6v4h-6zM30 30h6v4h-6z" fill="#35E0FF"/><path d="M24 36l6 8H18z" fill="#FFD84A"/>'},
  block:{name:"落磚方塊", tag:"移動旋轉，排滿一行就消除", dir:1, group:"retro", fmt:v => v + " 分", col:"#B07CFF", ic:'<rect x="8" y="8" width="10" height="10" rx="2" fill="#B07CFF"/><rect x="18" y="8" width="10" height="10" rx="2" fill="#B07CFF"/><rect x="28" y="8" width="10" height="10" rx="2" fill="#B07CFF"/><rect x="18" y="18" width="10" height="10" rx="2" fill="#B07CFF"/><rect x="8" y="34" width="10" height="8" rx="2" fill="#FFD84A"/><rect x="18" y="34" width="10" height="8" rx="2" fill="#5CFFA0"/><rect x="28" y="34" width="10" height="8" rx="2" fill="#FF5A6E"/>'},
  flap:{name:"拍翅小鳥", tag:"點一下拍翅，穿過柱子中間", dir:1, group:"retro", fmt:v => v + " 根", col:"#FFD84A", ic:'<circle cx="22" cy="26" r="13" fill="#FFD84A"/><path d="M33 24l9 3-9 3z" fill="#FF8A5B"/><circle cx="27" cy="22" r="3.5" fill="#fff"/><circle cx="28" cy="22" r="1.6" fill="#14142F"/>'},
  merge:{name:"數字合併 2048", tag:"滑動合併相同數字，湊出 2048", dir:1, group:"retro", fmt:v => v + " 分", col:"#F2B179", ic:'<rect x="6" y="6" width="17" height="17" rx="4" fill="#EEE4DA"/><rect x="25" y="6" width="17" height="17" rx="4" fill="#F2B179"/><rect x="6" y="25" width="17" height="17" rx="4" fill="#F67C5F"/><rect x="25" y="25" width="17" height="17" rx="4" fill="#EDC22E"/>'}
});
Object.assign(A.RUN, {brick:gBrick, invader:gInvader, block:gBlock, flap:gFlap, merge:gMerge});
A.menu();
})();
