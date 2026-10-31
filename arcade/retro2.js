/* 電玩廳：復古經典第二批（跳跳跑酷、過馬路、迷宮吃豆、乒乓、踩地雷）。
   玩法是大家熟悉的老遊戲，名字和畫面都是自己重新做的。 */
(function(){
"use strict";
const A = window.Arcade, K = A.kit, $ = A.$, esc = A.esc;
const {setupCanvas, pointerX, runLoop, shell, setStats, finish, roundRect, rand, clamp} = K;
const DPAD = `<div class="row" style="gap:8px;flex-wrap:nowrap;margin-top:10px"><button class="btn ghost" data-d="left" style="flex:1;padding:14px 0">◀</button><button class="btn ghost" data-d="up" style="flex:1;padding:14px 0">▲</button><button class="btn ghost" data-d="down" style="flex:1;padding:14px 0">▼</button><button class="btn ghost" data-d="right" style="flex:1;padding:14px 0">▶</button></div>`;
const DIRV = {left:[-1, 0], right:[1, 0], up:[0, -1], down:[0, 1]};
const KEYDIR = {ArrowLeft:"left", ArrowRight:"right", ArrowUp:"up", ArrowDown:"down", a:"left", d:"right", w:"up", s:"down"};
function bindDirs(cv, fn, tapDir){
  $("#ctrl").innerHTML = DPAD;
  $("#ctrl").addEventListener("pointerdown", e => { const b = e.target.closest("[data-d]"); if(!b) return; e.preventDefault(); A.audio(); fn(b.dataset.d); });
  const kd = e => { const d = KEYDIR[e.key]; if(d){ e.preventDefault(); fn(d); } };
  addEventListener("keydown", kd); A.onCleanup(() => removeEventListener("keydown", kd));
  let sx = 0, sy = 0, on = false;
  cv.addEventListener("pointerdown", e => { e.preventDefault(); A.audio(); sx = e.clientX; sy = e.clientY; on = true; cv.setPointerCapture && cv.setPointerCapture(e.pointerId); });
  cv.addEventListener("pointerup", e => {
    if(!on) return; on = false; const dx = e.clientX - sx, dy = e.clientY - sy;
    if(Math.max(Math.abs(dx), Math.abs(dy)) < 20){ if(tapDir) fn(tapDir); return; }
    fn(Math.abs(dx) > Math.abs(dy) ? (dx > 0 ? "right" : "left") : (dy > 0 ? "down" : "up"));
  });
}

/* ---------- 1. 跳跳跑酷 ---------- */
function gRun(){
  A.cleanup();
  const W = 360, H = 240, GY = H - 44;
  let started = false, over = false, dist = 0, speed = 230, t = 0, hold = false, gap = 0, obs = [];
  const cat = {x:56, y:GY, vy:0, w:30, h:26};
  shell("run", "", "點一下跳，按住不放跳更高。越跑越快！");
  const {cv, ctx} = setupCanvas(W, H); $("#stage").appendChild(cv);
  const paintStats = () => setStats(`<span>距離 <b>${Math.floor(dist / 10)}</b> 公尺</span>`); paintStats();
  const jump = () => { A.audio(); if(over) return; started = true; hold = true; if(cat.y >= GY){ cat.vy = -560; A.beep(620, .05, .05); } };
  cv.addEventListener("pointerdown", e => { e.preventDefault(); jump(); });
  const pu = () => { hold = false; }; addEventListener("pointerup", pu); A.onCleanup(() => removeEventListener("pointerup", pu));
  const kd = e => { if(e.key === " " || e.key === "ArrowUp"){ e.preventDefault(); jump(); } }, ku = e => { if(e.key === " " || e.key === "ArrowUp") hold = false; };
  addEventListener("keydown", kd); addEventListener("keyup", ku); A.onCleanup(() => { removeEventListener("keydown", kd); removeEventListener("keyup", ku); });
  const spawn = () => {
    const kind = Math.random();
    if(kind < .25){ obs.push({x:W + 20, w:rand(20, 28), h:rand(40, 50)}); }
    else if(kind < .5){ const w = rand(20, 28); obs.push({x:W + 20, w, h:rand(26, 36)}, {x:W + 20 + w + 22, w:rand(20, 28), h:rand(26, 36)}); }
    else obs.push({x:W + 20, w:rand(24, 40), h:rand(26, 42)});
    gap = Math.max(260, speed * (.75 + Math.random() * .7));
  };
  const update = dt => {
    t += dt; const s = dt / 1000;
    if(!started || over){ return; }
    speed = Math.min(540, 230 + dist / 38);
    dist += speed * s; gap -= speed * s;
    obs.forEach(o => o.x -= speed * s); obs = obs.filter(o => o.x + o.w > -10);
    if(gap <= 0) spawn();
    cat.vy += (hold && cat.vy < 0 ? 1500 : 2800) * s; cat.y += cat.vy * s;
    if(cat.y >= GY){ cat.y = GY; cat.vy = 0; }
    paintStats();
    const cx = cat.x + 4, cy = cat.y - cat.h + 4, cw = cat.w - 8, ch = cat.h - 8;
    for(const o of obs){ if(cx < o.x + o.w - 3 && cx + cw > o.x + 3 && cy + ch > GY - o.h + 3){
      over = true; A.beep(140, .4, .12, "sawtooth"); A.buzz(180); A.later(() => finish("run", Math.floor(dist / 10), `跑了 ${Math.floor(dist / 10)} 公尺`), 450); return; } }
  };
  const draw = () => {
    ctx.fillStyle = "#14193F"; ctx.fillRect(0, 0, W, H);
    ctx.fillStyle = "#2A3070"; for(let i = 0; i < 8; i++){ const x = ((i * 97 - dist * .2) % (W + 60) + W + 60) % (W + 60) - 30; ctx.beginPath(); ctx.ellipse(x, 40 + (i * 37) % 70, 26, 8, 0, 0, 7); ctx.fill(); }
    ctx.fillStyle = "#2B2A5A"; ctx.fillRect(0, GY, W, H - GY); ctx.fillStyle = "#5CFFA0"; ctx.fillRect(0, GY, W, 3);
    ctx.fillStyle = "#3A3A7A"; for(let x = -((dist * 1) % 28); x < W; x += 28) ctx.fillRect(x, GY + 14, 14, 3);
    for(const o of obs){ ctx.fillStyle = "#C98B52"; roundRect(ctx, o.x, GY - o.h, o.w, o.h, 4); ctx.fill(); ctx.strokeStyle = "#8F5E2F"; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(o.x + o.w / 2, GY - o.h); ctx.lineTo(o.x + o.w / 2, GY); ctx.stroke(); }
    // 貓
    const run = started && !over && cat.y >= GY, step = run ? Math.floor(t / 90) % 2 : 0, y = cat.y;
    ctx.fillStyle = "#FF8A5B"; roundRect(ctx, cat.x, y - cat.h, cat.w, cat.h - 6, 8); ctx.fill();
    ctx.beginPath(); ctx.moveTo(cat.x + 4, y - cat.h + 2); ctx.lineTo(cat.x + 7, y - cat.h - 8); ctx.lineTo(cat.x + 13, y - cat.h + 1); ctx.fill();
    ctx.beginPath(); ctx.moveTo(cat.x + 19, y - cat.h + 1); ctx.lineTo(cat.x + 25, y - cat.h - 8); ctx.lineTo(cat.x + 28, y - cat.h + 3); ctx.fill();
    ctx.strokeStyle = "#FF8A5B"; ctx.lineWidth = 4; ctx.lineCap = "round"; ctx.beginPath(); ctx.moveTo(cat.x, y - 14); ctx.quadraticCurveTo(cat.x - 12, y - 24, cat.x - 6, y - 32); ctx.stroke();
    ctx.fillRect(cat.x + 4 + step * 4, y - 6, 5, 6); ctx.fillRect(cat.x + 20 - step * 4, y - 6, 5, 6);
    ctx.fillStyle = "#14142F"; ctx.beginPath(); ctx.arc(cat.x + 21, y - cat.h + 9, 2.3, 0, 7); ctx.fill();
    if(!started){ ctx.fillStyle = "#EEEBFF"; ctx.font = "800 18px system-ui,sans-serif"; ctx.textAlign = "center"; ctx.fillText("點一下開始", W / 2, 80); }
  };
  runLoop(update, draw);
}

/* ---------- 2. 過馬路 ---------- */
function gCross(){
  A.cleanup();
  const T = 36, COLS = 10, ROWS = 11, W = COLS * T, H = ROWS * T;
  const ROAD = [6, 7, 8, 9], RIVER = [1, 2, 3, 4];
  let score = 0, lives = 3, level = 1, mult = 1, best = ROWS - 1, hopAt = 0, flash = 0, t = 0;
  const frog = {x:(COLS / 2 - .5) * T, r:ROWS - 1};
  let lanes = {};
  const build = () => {
    lanes = {};
    const mk = (r, v, kind) => {
      const n = kind === "car" ? 3 : 3, items = []; let x = rand(0, 60);
      for(let i = 0; i < n; i++){ const w = kind === "car" ? rand(34, 66) : rand(84, 140); items.push({x, w}); x += w + (kind === "car" ? rand(80, 150) : rand(60, 100)); }
      let len = x; if(len < W + 150){ const extra = (W + 150 - len) / n; items.forEach((it, i) => { it.x += extra * i; }); len = W + 150; }
      lanes[r] = {v, kind, items, len};
    };
    [55, -75, 95, -65].forEach((v, i) => mk(ROAD[i], v * mult, "car"));
    [-38, 52, -62, 44].forEach((v, i) => mk(RIVER[i], v * (1 + (mult - 1) * .6), "log"));
  };
  const resetFrog = () => { frog.x = (COLS / 2 - .5) * T; frog.r = ROWS - 1; best = ROWS - 1; };
  shell("cross", "", "滑動或按方向鍵往上走：躲開車子，跳上木頭過河，到最上面就過關。");
  const {cv, ctx} = setupCanvas(W, H); $("#stage").appendChild(cv);
  const paintStats = () => setStats(`<span>分數 <b>${score}</b></span><span>生命 <b>${lives}</b></span><span>第 <b>${level}</b> 關</span>`);
  build(); paintStats();
  const die = why => {
    lives--; flash = 700; A.beep(why === "water" ? 200 : 130, .35, .12, "sawtooth"); A.buzz(180); paintStats();
    if(lives <= 0) return finish("cross", score, `到第 ${level} 關`);
    resetFrog();
  };
  const hop = d => {
    const now = performance.now(); if(now - hopAt < 90 || lives <= 0) return; hopAt = now;
    const [dx, dy] = DIRV[d]; frog.x = clamp(frog.x + dx * T, 0, W - T); const nr = frog.r + dy; if(nr < 0 || nr > ROWS - 1) return; frog.r = nr;
    A.beep(500 + (ROWS - frog.r) * 20, .03, .05);
    if(frog.r < best){ best = frog.r; score += 10; paintStats(); }
    if(frog.r === 0){ score += 100 + level * 20; level++; mult *= 1.12; A.beep(988, .25, .1, "triangle"); build(); resetFrog(); paintStats(); }
  };
  bindDirs(cv, hop, "up");
  const update = dt => {
    const s = dt / 1000; t += dt; if(flash > 0) flash -= dt;
    for(const r in lanes){ const L = lanes[r]; L.items.forEach(it => { it.x += L.v * s; if(L.v > 0 && it.x > W + 10) it.x -= L.len; if(L.v < 0 && it.x + it.w < -10) it.x += L.len; }); }
    if(lives <= 0 || flash > 400) return;
    const L = lanes[frog.r], fx = frog.x + 6, fw = T - 12;
    if(L && L.kind === "car"){ if(L.items.some(c => fx < c.x + c.w && fx + fw > c.x)) return die("car"); }
    else if(L && L.kind === "log"){
      const cx = frog.x + T / 2, on = L.items.find(c => cx > c.x + 2 && cx < c.x + c.w - 2);
      if(!on) return die("water");
      frog.x += L.v * s; if(frog.x < -T / 2 || frog.x > W - T / 2) return die("water");
    }
  };
  const draw = () => {
    ctx.fillStyle = "#0E0E22"; ctx.fillRect(0, 0, W, H);
    for(let r = 0; r < ROWS; r++){
      const y = r * T;
      if(RIVER.includes(r)){ ctx.fillStyle = "#1B3A7A"; ctx.fillRect(0, y, W, T); }
      else if(ROAD.includes(r)){ ctx.fillStyle = "#26264F"; ctx.fillRect(0, y, W, T); ctx.fillStyle = "#3A3A7A"; for(let x = 6; x < W; x += 40) ctx.fillRect(x, y + T - 2, 22, 2); }
      else { ctx.fillStyle = r === 0 ? "#1F6B45" : "#2B5A3A"; ctx.fillRect(0, y, W, T); }
    }
    ctx.fillStyle = "#5CFFA0"; ctx.font = "800 12px system-ui,sans-serif"; ctx.textAlign = "center"; ctx.fillText("終點", W / 2, 22);
    for(const r in lanes){ const L = lanes[r], y = r * T;
      L.items.forEach(it => {
        if(L.kind === "log"){ ctx.fillStyle = "#9B6A3A"; roundRect(ctx, it.x, y + 4, it.w, T - 8, 10); ctx.fill(); ctx.fillStyle = "#7A4F26"; for(let k = 12; k < it.w - 8; k += 22) ctx.fillRect(it.x + k, y + 10, 3, T - 20); }
        else { ctx.fillStyle = ["#FF4FA3", "#35E0FF", "#FFD84A", "#B07CFF"][r % 4]; roundRect(ctx, it.x, y + 6, it.w, T - 12, 7); ctx.fill(); ctx.fillStyle = "#14142F"; ctx.fillRect(it.x + (L.v > 0 ? it.w - 14 : 6), y + 10, 8, T - 20); }
      });
    }
    if(!(flash > 0 && (t / 80 | 0) % 2)){
      const fx = frog.x, fy = frog.r * T;
      ctx.fillStyle = "#5CFFA0"; roundRect(ctx, fx + 5, fy + 8, T - 10, T - 12, 9); ctx.fill();
      ctx.fillStyle = "#fff"; ctx.beginPath(); ctx.arc(fx + 11, fy + 10, 5, 0, 7); ctx.arc(fx + T - 11, fy + 10, 5, 0, 7); ctx.fill();
      ctx.fillStyle = "#14142F"; ctx.beginPath(); ctx.arc(fx + 11, fy + 10, 2.2, 0, 7); ctx.arc(fx + T - 11, fy + 10, 2.2, 0, 7); ctx.fill();
    }
  };
  runLoop(update, draw);
}

/* ---------- 3. 迷宮吃豆 ---------- */
const MAZE = [
"###############", "#o.....#.....o#", "#.###.#.#.###.#", "#.............#", "#.###.###.###.#", "#.....#.#.....#", "#####.#.#.#####", "#.....GGG.....#", "#.###.#.#.###.#",
"#.............#", "#.#.#.###.#.#.#", "#...#.....#...#", "###.#.###.#.###", "#o.....P.....o#", "#.###.###.###.#", "#.............#", "###############"];
function gMaze(){
  A.cleanup();
  const CELL = 24, COLS = 15, ROWS = MAZE.length, W = COLS * CELL, H = ROWS * CELL;
  const cellAt = (c, r) => (MAZE[r] && MAZE[r][c]) || "#";
  const wall = (c, r) => cellAt(c, r) === "#";
  let dots, score = 0, lives = 3, level = 1, freeze = 0, fright = 0, t = 0, over = false, bonus = 0;
  const pac = {c:7, r:13, dc:0, dr:0, t:0, want:null, mouth:0};
  const GCOL = ["#FF4FA3", "#35E0FF", "#FF9F4A"], starts = [[6, 7], [7, 7], [8, 7]];
  let ghosts = [];
  const resetDots = () => { dots = MAZE.map(r => [...r].map(ch => ch === "." ? 1 : ch === "o" ? 2 : 0)); };
  const resetPos = () => {
    Object.assign(pac, {c:7, r:13, dc:0, dr:0, t:0, want:null});
    ghosts = starts.map((s, i) => ({c:s[0], r:s[1], dc:0, dr:0, t:0, i, wait:900 + i * 2200, fright:false, dead:0}));
    freeze = 1000; fright = 0;
  };
  resetDots(); resetPos();
  shell("maze", "", "滑動或按方向鍵轉彎，吃光所有點點。大顆的能量點可以反過來吃怪獸。");
  const {cv, ctx} = setupCanvas(W, H); $("#stage").appendChild(cv);
  const paintStats = () => setStats(`<span>分數 <b>${score}</b></span><span>生命 <b>${lives}</b></span><span>第 <b>${level}</b> 關</span>`); paintStats();
  const ok = (e, d) => !wall(e.c + d[0], e.r + d[1]);
  const pacChoose = e => {
    if(e.want && ok(e, e.want)){ e.dc = e.want[0]; e.dr = e.want[1]; }
    else if(!(e.dc || e.dr) || !ok(e, [e.dc, e.dr])){ e.dc = e.dr = 0; }
  };
  const ghostChoose = g => {
    const opts = Object.values(DIRV).filter(d => ok(g, d) && !(d[0] === -g.dc && d[1] === -g.dr));
    const all = Object.values(DIRV).filter(d => ok(g, d));
    const list = opts.length ? opts : all;
    if(!list.length){ g.dc = g.dr = 0; return; }
    let pick;
    if(g.fright || (g.i === 2 && Math.random() < .35)) pick = list[Math.floor(Math.random() * list.length)];
    else {
      const ahead = g.i === 1 ? 3 : 0, tx = pac.c + pac.dc * ahead, ty = pac.r + pac.dr * ahead;
      pick = list.reduce((b, d) => { const dd = (g.c + d[0] - tx) ** 2 + (g.r + d[1] - ty) ** 2; return !b || dd < b.dd ? {d, dd} : b; }, null).d;
    }
    g.dc = pick[0]; g.dr = pick[1];
  };
  const advance = (e, dist, choose, arrive) => {
    let guard = 6;
    while(dist > 0 && guard--){
      if(!(e.dc || e.dr)){ choose(e); if(!(e.dc || e.dr)) return; }
      const need = 1 - e.t;
      if(dist < need){ e.t += dist; return; }
      dist -= need; e.c += e.dc; e.r += e.dr; e.t = 0; if(arrive) arrive(e); choose(e);
    }
  };
  const arrivePac = e => {
    const v = dots[e.r][e.c];
    if(v){ dots[e.r][e.c] = 0; score += v === 1 ? 10 : 50; A.beep(v === 1 ? 420 + (score / 10 % 2) * 80 : 700, .04, .05);
      if(v === 2){ fright = 6500; bonus = 0; ghosts.forEach(g => { if(g.dead <= 0 && g.wait <= 0){ g.fright = true; g.dc = -g.dc; g.dr = -g.dr; if(g.t){ g.c += -g.dc; g.r += -g.dr; g.t = 1 - g.t; } } }); }
      paintStats();
      if(!dots.flat().some(x => x)){ level++; resetDots(); resetPos(); A.beep(988, .3, .1, "triangle"); paintStats(); }
    }
  };
  const setWant = d => {
    const v = DIRV[d]; pac.want = v;
    if((pac.dc || pac.dr) && v[0] === -pac.dc && v[1] === -pac.dr && pac.t > 0){ pac.c += pac.dc; pac.r += pac.dr; pac.dc = -pac.dc; pac.dr = -pac.dr; pac.t = 1 - pac.t; }
    else if(!(pac.dc || pac.dr)) pacChoose(pac);
  };
  bindDirs(cv, setWant, null);
  const pos = e => [e.c + e.dc * e.t, e.r + e.dr * e.t];
  const lose = () => { lives--; A.beep(130, .5, .12, "sawtooth"); A.buzz(200); paintStats(); if(lives <= 0){ over = true; return finish("maze", score, `到第 ${level} 關`); } resetPos(); };
  const update = dt => {
    t += dt; if(over) return;
    if(freeze > 0){ freeze -= dt; return; }
    const speed = 5.0 * dt / 1000;
    advance(pac, speed, pacChoose, arrivePac); pac.mouth += dt;
    if(fright > 0){ fright -= dt; if(fright <= 0) ghosts.forEach(g => { g.fright = false; }); }
    const gs = (3.9 + level * .25) * dt / 1000;
    for(const g of ghosts){
      if(g.dead > 0){ g.dead -= dt; if(g.dead <= 0){ g.c = starts[g.i][0]; g.r = starts[g.i][1]; g.dc = g.dr = 0; g.t = 0; g.fright = false; g.wait = 300; } continue; }
      if(g.wait > 0){ g.wait -= dt; continue; }
      advance(g, g.fright ? gs * .6 : gs, ghostChoose);
      const [gx, gy] = pos(g), [px, py] = pos(pac);
      if(Math.hypot(gx - px, gy - py) < .6){
        if(g.fright){ bonus = bonus ? bonus * 2 : 200; score += bonus; g.dead = 2500; g.fright = false; A.beep(880, .15, .1, "triangle"); paintStats(); }
        else return lose();
      }
    }
  };
  const drawGhost = (g, x, y, fr, flick) => {
    ctx.fillStyle = fr ? (flick ? "#FFFFFF" : "#3C5BFF") : GCOL[g.i];
    ctx.beginPath(); ctx.arc(x, y - 1, CELL * .42, Math.PI, 0); ctx.lineTo(x + CELL * .42, y + CELL * .4);
    for(let k = 0; k < 4; k++){ ctx.lineTo(x + CELL * .42 - (k + .5) * CELL * .21, y + CELL * (k % 2 ? .4 : .28)); ctx.lineTo(x + CELL * .42 - (k + 1) * CELL * .21, y + CELL * .4); }
    ctx.closePath(); ctx.fill();
    ctx.fillStyle = "#fff"; ctx.beginPath(); ctx.arc(x - 4, y - 2, 3.4, 0, 7); ctx.arc(x + 4, y - 2, 3.4, 0, 7); ctx.fill();
    ctx.fillStyle = "#14142F"; ctx.beginPath(); ctx.arc(x - 4 + g.dc * 1.5, y - 2 + g.dr * 1.5, 1.6, 0, 7); ctx.arc(x + 4 + g.dc * 1.5, y - 2 + g.dr * 1.5, 1.6, 0, 7); ctx.fill();
  };
  const draw = () => {
    ctx.fillStyle = "#0A0A1E"; ctx.fillRect(0, 0, W, H);
    for(let r = 0; r < ROWS; r++) for(let c = 0; c < COLS; c++){
      const x = c * CELL, y = r * CELL;
      if(wall(c, r)){ ctx.fillStyle = "#26359A"; roundRect(ctx, x + 1.5, y + 1.5, CELL - 3, CELL - 3, 6); ctx.fill(); ctx.fillStyle = "#0A0A1E"; roundRect(ctx, x + 5, y + 5, CELL - 10, CELL - 10, 3); ctx.fill(); }
      else { const v = dots[r][c]; if(v === 1){ ctx.fillStyle = "#FFE9B0"; ctx.beginPath(); ctx.arc(x + CELL / 2, y + CELL / 2, 2.2, 0, 7); ctx.fill(); } else if(v === 2 && (t / 220 | 0) % 2){ ctx.fillStyle = "#FFD84A"; ctx.beginPath(); ctx.arc(x + CELL / 2, y + CELL / 2, 6, 0, 7); ctx.fill(); } }
    }
    const [px, py] = pos(pac), ang = Math.atan2(pac.dr || 0, pac.dc || 1), open = (pac.dc || pac.dr) ? .1 + Math.abs(Math.sin(pac.mouth / 70)) * .38 : .12;
    ctx.fillStyle = "#FFD84A"; ctx.beginPath(); ctx.moveTo(px * CELL + CELL / 2, py * CELL + CELL / 2); ctx.arc(px * CELL + CELL / 2, py * CELL + CELL / 2, CELL * .44, ang + open * Math.PI, ang + (2 - open) * Math.PI); ctx.closePath(); ctx.fill();
    for(const g of ghosts){ if(g.dead > 0) continue; const [gx, gy] = pos(g); drawGhost(g, gx * CELL + CELL / 2, gy * CELL + CELL / 2, g.fright, fright < 1800 && (t / 150 | 0) % 2); }
    if(freeze > 0){ ctx.fillStyle = "#EEEBFF"; ctx.font = "900 18px system-ui,sans-serif"; ctx.textAlign = "center"; ctx.fillText("準備！", W / 2, 8 * CELL + 6); }
  };
  runLoop(update, draw);
}

/* ---------- 4. 乒乓 ---------- */
function gPong(){
  A.cleanup();
  const W = 360, H = 480, PW = 74, PH = 12;
  let score = 0, miss = 0, started = false, cpuSpeed = 170, t = 0;
  const me = {x:W / 2, y:H - 34}, cpu = {x:W / 2, y:34}, ball = {x:W / 2, y:H / 2, vx:0, vy:0, r:7, sp:260};
  shell("pong", "", "拖動畫面移動球拍，把球打回去。漏接 5 次就結束。");
  const {cv, ctx} = setupCanvas(W, H); $("#stage").appendChild(cv);
  const paintStats = () => setStats(`<span>你得 <b>${score}</b> 分</span><span>漏接 <b>${miss}</b> / 5</span>`); paintStats();
  const serve = dir => { ball.x = W / 2; ball.y = H / 2; ball.sp = 260 + Math.min(160, score * 8); const a = rand(-.5, .5); ball.vx = Math.sin(a) * ball.sp; ball.vy = Math.cos(a) * ball.sp * dir; };
  const move = e => { me.x = clamp(pointerX(cv, e, W), PW / 2, W - PW / 2); };
  cv.addEventListener("pointermove", move);
  cv.addEventListener("pointerdown", e => { A.audio(); cv.setPointerCapture && cv.setPointerCapture(e.pointerId); move(e); if(!started){ started = true; serve(1); } });
  const keys = {}; const kd = e => { keys[e.key] = true; if(e.key === " " && !started){ started = true; serve(1); } }, ku = e => { keys[e.key] = false; };
  addEventListener("keydown", kd); addEventListener("keyup", ku); A.onCleanup(() => { removeEventListener("keydown", kd); removeEventListener("keyup", ku); });
  const step = dt => {
    const s = dt / 1000;
    if(keys.ArrowLeft) me.x = clamp(me.x - 420 * s, PW / 2, W - PW / 2); if(keys.ArrowRight) me.x = clamp(me.x + 420 * s, PW / 2, W - PW / 2);
    if(!started) return;
    ball.x += ball.vx * s; ball.y += ball.vy * s;
    if(ball.x < ball.r){ ball.x = ball.r; ball.vx = Math.abs(ball.vx); A.beep(260, .03, .05); } if(ball.x > W - ball.r){ ball.x = W - ball.r; ball.vx = -Math.abs(ball.vx); A.beep(260, .03, .05); }
    // 電腦球拍：追球，但速度有限，打到 5 分以後會變快一點點
    const target = ball.vy < 0 ? ball.x + Math.sin(t / 500) * 18 : W / 2;
    const sp = cpuSpeed + Math.min(150, score * 6); cpu.x += clamp(target - cpu.x, -sp * s, sp * s); cpu.x = clamp(cpu.x, PW / 2, W - PW / 2);
    const hit = (p, dir) => { const off = clamp((ball.x - p.x) / (PW / 2), -1, 1), a = off * 1.0; ball.sp = Math.min(560, ball.sp + 14); ball.vx = Math.sin(a) * ball.sp; ball.vy = dir * Math.cos(a) * ball.sp; };
    if(ball.vy > 0 && ball.y + ball.r >= me.y && ball.y + ball.r <= me.y + PH + 10 && Math.abs(ball.x - me.x) <= PW / 2 + ball.r){ hit(me, -1); ball.y = me.y - ball.r; A.beep(380, .04, .07); A.buzz(15); }
    if(ball.vy < 0 && ball.y - ball.r <= cpu.y + PH && ball.y - ball.r >= cpu.y - 10 && Math.abs(ball.x - cpu.x) <= PW / 2 + ball.r){ hit(cpu, 1); ball.y = cpu.y + PH + ball.r; A.beep(300, .04, .06); }
    if(ball.y < -20){ score++; paintStats(); A.beep(880, .15, .1, "triangle"); started = true; serve(1); }
    if(ball.y > H + 20){ miss++; paintStats(); A.beep(140, .3, .1, "sawtooth"); A.buzz(120); if(miss >= 5) return finish("pong", score, `電腦拿下 5 分`); serve(1); }
  };
  runLoop(dt => { t += dt; for(let r = dt; r > 0; r -= 8) step(Math.min(8, r)); }, () => {
    ctx.fillStyle = "#0E0E22"; ctx.fillRect(0, 0, W, H);
    ctx.strokeStyle = "#2A2A5A"; ctx.setLineDash([10, 10]); ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(0, H / 2); ctx.lineTo(W, H / 2); ctx.stroke(); ctx.setLineDash([]);
    ctx.fillStyle = "#FF4FA3"; roundRect(ctx, cpu.x - PW / 2, cpu.y, PW, PH, 6); ctx.fill();
    ctx.fillStyle = "#35E0FF"; roundRect(ctx, me.x - PW / 2, me.y, PW, PH, 6); ctx.fill();
    ctx.fillStyle = "#FFD84A"; ctx.beginPath(); ctx.arc(ball.x, ball.y, ball.r, 0, 7); ctx.fill();
    if(!started){ ctx.fillStyle = "#EEEBFF"; ctx.font = "800 18px system-ui,sans-serif"; ctx.textAlign = "center"; ctx.fillText("點一下發球", W / 2, H / 2 + 60); }
  });
}

/* ---------- 5. 踩地雷 ---------- */
const MINES = {
  mine1:{name:"踩地雷・簡單", cols:9, rows:9, mines:10},
  mine2:{name:"踩地雷・中等", cols:12, rows:12, mines:24},
  mine3:{name:"踩地雷・困難", cols:12, rows:16, mines:40}
};
const NCOL = ["", "#5C9BFF", "#5CFFA0", "#FF5A6E", "#B07CFF", "#FF9F4A", "#35E0FF", "#EEEBFF", "#9C98C8"];
function gMine(id){
  A.cleanup();
  const {cols, rows, mines} = MINES[id];
  let cells, started = false, over = false, flagMode = false, revealed = 0, flags = 0, t0 = 0, press = null;
  const make = () => { cells = Array.from({length:rows}, () => Array.from({length:cols}, () => ({m:false, n:0, open:false, flag:false}))); revealed = 0; flags = 0; };
  make();
  shell(id, "", "點一下翻開；長按（或切到「插旗」）標記地雷。第一下一定安全。");
  $("#stage").innerHTML = `<div id="mgrid" style="display:grid;grid-template-columns:repeat(${cols},1fr);gap:3px;max-width:${cols * 34}px;margin:0 auto"></div>`;
  $("#ctrl").innerHTML = `<div class="row" style="margin-top:12px"><button class="btn ghost sm" id="mmode">模式：翻開</button><button class="btn ghost sm" data-again="${id}">重來</button></div>`;
  const paintStats = () => setStats(`<span>地雷 <b>${mines - flags}</b></span><span>時間 <b id="mt">${started && !over ? Math.floor((performance.now() - t0) / 1000) : 0}</b> 秒</span>`); paintStats();
  const nb = (c, r) => { const o = []; for(let dr = -1; dr <= 1; dr++) for(let dc = -1; dc <= 1; dc++) if((dr || dc) && cells[r + dr] && cells[r + dr][c + dc]) o.push([c + dc, r + dr]); return o; };
  const grid = $("#mgrid");
  const paint = () => {
    grid.innerHTML = cells.map((row, r) => row.map((k, c) => {
      let txt = "", st = "background:#2A2A5A;color:#EEEBFF";
      if(k.open){ st = "background:#171738;color:" + (NCOL[k.n] || "#fff"); txt = k.m ? "●" : (k.n || ""); if(k.m) st = "background:#FF5A6E;color:#fff"; }
      else if(over && k.m){ st = "background:#3A2030;color:#FF5A6E"; txt = "●"; }
      else if(k.flag){ txt = "⚑"; st = "background:#3A3A7A;color:#FFD84A"; }
      return `<button data-c="${c}" data-r="${r}" style="${st};aspect-ratio:1;border:0;border-radius:6px;font:900 15px system-ui,sans-serif;cursor:pointer;padding:0;touch-action:manipulation;user-select:none;-webkit-user-select:none">${txt}</button>`;
    }).join("")).join("");
  };
  paint();
  A.dbgMine = () => ({cells, over});   // 測試用
  const plant = (sc, sr) => {
    const safe = new Set([sc + "," + sr, ...nb(sc, sr).map(p => p.join())]); let n = 0;
    while(n < mines){ const c = Math.floor(Math.random() * cols), r = Math.floor(Math.random() * rows); if(cells[r][c].m || safe.has(c + "," + r)) continue; cells[r][c].m = true; n++; }
    cells.forEach((row, r) => row.forEach((k, c) => { k.n = nb(c, r).filter(([x, y]) => cells[y][x].m).length; }));
  };
  const open = (c, r) => {
    const k = cells[r][c]; if(k.open || k.flag) return;
    if(!started){ started = true; t0 = performance.now(); plant(c, r); A.later(function tick(){ if(started && !over){ const e = $("#mt"); if(e) e.textContent = Math.floor((performance.now() - t0) / 1000); A.later(tick, 500); } }, 500); }
    const stack = [[c, r]];
    while(stack.length){ const [x, y] = stack.pop(), q = cells[y][x]; if(q.open || q.flag) continue; q.open = true; revealed++; if(!q.n && !q.m) nb(x, y).forEach(p => stack.push(p)); }
    if(k.m){ over = true; A.beep(110, .6, .14, "sawtooth"); A.buzz(300); paint(); setStats("<span>踩到地雷了</span>"); $("#ctrl").innerHTML = `<div class="row" style="margin-top:12px"><button class="btn" data-again="${id}">再玩一次</button><button class="btn ghost" data-menu="1">回選單</button></div>`; return; }
    A.beep(360, .03, .05); paint();
    if(revealed >= cols * rows - mines){ over = true; const sec = Math.max(1, Math.round((performance.now() - t0) / 100) / 10); finish(id, sec, `${MINES[id].name}，全部安全格都翻開了`); }
  };
  const flag = (c, r) => { const k = cells[r][c]; if(k.open) return; k.flag = !k.flag; flags += k.flag ? 1 : -1; A.beep(k.flag ? 520 : 380, .04, .05); A.buzz(20); paintStats(); paint(); };
  const act = (c, r, long) => { if(over) return; (long || flagMode) ? flag(c, r) : open(c, r); };
  grid.addEventListener("pointerdown", e => { const b = e.target.closest("[data-c]"); if(!b) return; A.audio(); const c = +b.dataset.c, r = +b.dataset.r; press = {c, r, long:false, id:setTimeout(() => { if(press){ press.long = true; act(c, r, true); } }, 420)}; });
  const up = e => { if(!press) return; clearTimeout(press.id); const p = press; press = null; if(!p.long){ const b = e.target.closest && e.target.closest("[data-c]"); if(b && +b.dataset.c === p.c && +b.dataset.r === p.r) act(p.c, p.r, false); } };
  grid.addEventListener("pointerup", up); grid.addEventListener("pointerleave", () => { if(press){ clearTimeout(press.id); press = null; } });
  grid.addEventListener("contextmenu", e => { e.preventDefault(); const b = e.target.closest("[data-c]"); if(b) flag(+b.dataset.c, +b.dataset.r); });
  $("#mmode").addEventListener("click", () => { flagMode = !flagMode; $("#mmode").textContent = flagMode ? "模式：插旗" : "模式：翻開"; });
}

/* ---------- 註冊 ---------- */
Object.assign(A.GAMES, {
  run:{name:"跳跳跑酷", tag:"點一下跳過紙箱，越跑越快", dir:1, group:"retro", fmt:v => v + " 公尺", col:"#FF8A5B", ic:'<path d="M6 36h36" stroke="#5CFFA0" stroke-width="3" stroke-linecap="round"/><rect x="26" y="22" width="12" height="14" rx="2" fill="#C98B52"/><rect x="8" y="18" width="14" height="14" rx="5" fill="#FF8A5B"/><path d="M10 18l2-7 5 6zM17 17l5-6 2 7z" fill="#FF8A5B"/>'},
  cross:{name:"過馬路", tag:"躲車子、跳木頭，平安到對岸", dir:1, group:"retro", fmt:v => v + " 分", col:"#5CFFA0", ic:'<rect x="6" y="8" width="36" height="9" rx="3" fill="#1B3A7A"/><rect x="8" y="10" width="14" height="5" rx="2" fill="#9B6A3A"/><rect x="6" y="20" width="36" height="12" fill="#26264F"/><rect x="14" y="23" width="14" height="6" rx="2" fill="#FF4FA3"/><rect x="16" y="35" width="16" height="9" rx="4" fill="#5CFFA0"/>'},
  maze:{name:"迷宮吃豆", tag:"吃光點點，躲開追你的怪獸", dir:1, group:"retro", fmt:v => v + " 分", col:"#FFD84A", ic:'<path d="M22 24 L38 14 A18 18 0 1 0 38 34 Z" fill="#FFD84A"/><circle cx="40" cy="24" r="2.4" fill="#FFE9B0"/><circle cx="46" cy="24" r="1.8" fill="#FFE9B0"/><circle cx="26" cy="14" r="2" fill="#14142F"/>'},
  pong:{name:"乒乓", tag:"拖動球拍，把球打回去", dir:1, group:"retro", fmt:v => v + " 分", col:"#35E0FF", ic:'<rect x="14" y="8" width="20" height="5" rx="2.5" fill="#FF4FA3"/><rect x="14" y="35" width="20" height="5" rx="2.5" fill="#35E0FF"/><circle cx="28" cy="24" r="3.5" fill="#FFD84A"/>'},
  mine1:{name:"踩地雷・簡單", tag:"9×9，10 顆地雷，越快越好", dir:-1, group:"retro", fmt:v => v + " 秒", col:"#9C98C8", ic:'<circle cx="24" cy="26" r="9" fill="#9C98C8"/><path d="M24 12v6M24 34v6M10 26h6M32 26h6M14 16l4 4M30 32l4 4M34 16l-4 4M14 36l4-4" stroke="#9C98C8" stroke-width="3" stroke-linecap="round"/><circle cx="21" cy="23" r="2.5" fill="#EEEBFF"/>'},
  mine2:{name:"踩地雷・中等", tag:"12×12，24 顆地雷", dir:-1, group:"retro", fmt:v => v + " 秒", col:"#B07CFF", ic:'<circle cx="24" cy="26" r="9" fill="#B07CFF"/><path d="M24 12v6M24 34v6M10 26h6M32 26h6M14 16l4 4M30 32l4 4M34 16l-4 4M14 36l4-4" stroke="#B07CFF" stroke-width="3" stroke-linecap="round"/><circle cx="21" cy="23" r="2.5" fill="#EEEBFF"/>'},
  mine3:{name:"踩地雷・困難", tag:"12×16，40 顆地雷", dir:-1, group:"retro", fmt:v => v + " 秒", col:"#FF5A6E", ic:'<circle cx="24" cy="26" r="9" fill="#FF5A6E"/><path d="M24 12v6M24 34v6M10 26h6M32 26h6M14 16l4 4M30 32l4 4M34 16l-4 4M14 36l4-4" stroke="#FF5A6E" stroke-width="3" stroke-linecap="round"/><circle cx="21" cy="23" r="2.5" fill="#EEEBFF"/>'}
});
Object.assign(A.RUN, {run:gRun, cross:gCross, maze:gMaze, pong:gPong, mine1:() => gMine("mine1"), mine2:() => gMine("mine2"), mine3:() => gMine("mine3")});
A.menu();
})();
