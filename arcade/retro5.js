/* 電玩廳：復古經典第三批（重量級）：坦克大戰、炸彈超人。
   玩法是大家熟悉的老遊戲，名字和畫面都是自己重新做的。 */
(function(){
"use strict";
const A = window.Arcade, K = A.kit, $ = A.$;
const {setupCanvas, runLoop, shell, setStats, finish, roundRect, rand, clamp} = K;
const pick = arr => arr[Math.floor(Math.random() * arr.length)];
const DV = [[0, -1], [1, 0], [0, 1], [-1, 0]];   // 上、右、下、左
const KEYDIR = {ArrowUp:0, ArrowRight:1, ArrowDown:2, ArrowLeft:3, w:0, d:1, s:2, a:3};
function padHtml(actionLabel){
  return `<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:10px;align-items:center">
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px"><span></span><button class="btn ghost" data-dir="0" style="padding:14px 0">▲</button><span></span><button class="btn ghost" data-dir="3" style="padding:14px 0">◀</button><button class="btn ghost" data-dir="2" style="padding:14px 0">▼</button><button class="btn ghost" data-dir="1" style="padding:14px 0">▶</button></div>
    <button class="btn" data-act="1" style="padding:34px 0;font-size:20px">${actionLabel}</button></div>`;
}
/* 按住方向鍵移動（手機是按住按鈕，電腦是鍵盤） */
function bindPad(onAct){
  const held = []; let acting = false;
  const sync = () => held.filter((v, i, a) => a.indexOf(v) === i);
  $("#ctrl").addEventListener("pointerdown", e => {
    const d = e.target.closest("[data-dir]"), a = e.target.closest("[data-act]"); A.audio();
    if(d){ e.preventDefault(); const v = +d.dataset.dir; const i = held.indexOf(v); if(i >= 0) held.splice(i, 1); held.push(v); }
    else if(a){ e.preventDefault(); acting = true; if(onAct) onAct(); }
  });
  const rel = () => { held.length = 0; acting = false; };
  addEventListener("pointerup", rel); addEventListener("pointercancel", rel);
  const kd = e => { const v = KEYDIR[e.key]; if(v !== undefined){ e.preventDefault(); const i = held.indexOf(v); if(i < 0) held.push(v); } else if(e.key === " "){ e.preventDefault(); acting = true; if(onAct) onAct(); } };
  const ku = e => { const v = KEYDIR[e.key]; if(v !== undefined){ const i = held.indexOf(v); if(i >= 0) held.splice(i, 1); } else if(e.key === " ") acting = false; };
  addEventListener("keydown", kd); addEventListener("keyup", ku);
  A.onCleanup(() => { removeEventListener("pointerup", rel); removeEventListener("pointercancel", rel); removeEventListener("keydown", kd); removeEventListener("keyup", ku); });
  return {dir:() => held.length ? held[held.length - 1] : -1, acting:() => acting};
}

/* ---------- 1. 坦克大戰 ---------- */
function gTank(){
  A.cleanup();
  const T = 26, N = 13, W = N * T, H = N * T, BOX = 22, OFF = 2;
  let map, stage = 0, score = 0, lives = 3, over = false, t = 0, baseOk = true, total = 0, spawned = 0, killed = 0, spawnIn = 1, bullets = [], enemies = [], flash = [], clearing = 0;
  const player = {x:4 * T, y:12 * T, dir:0, inv:0, cool:0, alive:true};
  const SPAWNS = [[0, 0], [6, 0], [12, 0]];
  const buildMap = () => {
    map = Array.from({length:N}, () => Array(N).fill(" "));
    for(let k = 0; k < 26 + stage * 2; k++){ const c = 1 + Math.floor(Math.random() * 11), r = 2 + Math.floor(Math.random() * 8), w = 1 + Math.floor(Math.random() * 2), h = 1 + Math.floor(Math.random() * 2), ch = Math.random() < .17 ? "S" : "B"; for(let y = r; y < r + h; y++) for(let x = c; x < c + w; x++) if(y < 11 && x < N) map[y][x] = ch; }
    for(let y = 0; y < 2; y++) for(let x = 0; x < N; x++) map[y][x] = " ";
    [[5, 12], [5, 11], [6, 11], [7, 11], [7, 12]].forEach(([x, y]) => { map[y][x] = "B"; }); map[12][6] = "H";
    for(let x = 2; x <= 4; x++) map[12][x] = " ";   // 玩家出生點周圍清空
    map[11][4] = " "; map[10][4] = " ";
  };
  const startStage = () => { stage++; buildMap(); total = Math.min(24, 6 + stage * 2); spawned = killed = 0; enemies = []; bullets = []; spawnIn = 1.2; Object.assign(player, {x:4 * T, y:12 * T, dir:0, inv:2000, alive:true}); paintStats(); };
  shell("tank", "", "按住方向鍵移動，按「開火」射擊。打光敵人，保護下方的貓窩，磚牆可以打破。");
  const {cv, ctx} = setupCanvas(W, H); $("#stage").appendChild(cv);
  const paintStats = () => setStats(`<span>分數 <b>${score}</b></span><span>生命 <b>${lives}</b></span><span>剩下敵人 <b>${total - killed}</b></span><span>第 <b>${stage}</b> 關</span>`);
  $("#ctrl").innerHTML = padHtml("開火");
  const fire = () => { if(over || !player.alive || bullets.some(b => b.own === "p")) return; const [dx, dy] = DV[player.dir]; bullets.push({x:player.x + T / 2 + dx * 12, y:player.y + T / 2 + dy * 12, dx, dy, own:"p", v:300}); A.beep(700, .03, .05); };
  const pad = bindPad(fire);
  const hitsSolid = (x, y) => { const x0 = Math.floor((x + OFF) / T), x1 = Math.floor((x + OFF + BOX - 1) / T), y0 = Math.floor((y + OFF) / T), y1 = Math.floor((y + OFF + BOX - 1) / T); for(let cy = y0; cy <= y1; cy++) for(let cx = x0; cx <= x1; cx++){ if(cx < 0 || cy < 0 || cx >= N || cy >= N) return true; if(map[cy][cx] !== " ") return true; } return false; };
  const hitsTank = (self, x, y) => { const all = enemies.concat(player.alive ? [player] : []); return all.some(o => o !== self && Math.abs(o.x - x) < BOX && Math.abs(o.y - y) < BOX); };
  const move = (tk, dir, dist) => {
    const [dx, dy] = DV[dir]; if(tk.dir !== dir){ if((tk.dir % 2) !== (dir % 2)){ const sx = Math.round(tk.x / T) * T, sy = Math.round(tk.y / T) * T; if(!hitsSolid(sx, sy) && !hitsTank(tk, sx, sy)){ tk.x = sx; tk.y = sy; } } tk.dir = dir; }
    let nx = tk.x + dx * dist, ny = tk.y + dy * dist;
    if(!hitsSolid(nx, ny) && !hitsTank(tk, nx, ny)){ tk.x = nx; tk.y = ny; return true; }
    // 貼牆時微調，讓轉彎比較容易
    return false;
  };
  const kill = e => { score += 100; killed++; flash.push({x:e.x + T / 2, y:e.y + T / 2, t:300}); A.beep(200, .2, .1, "triangle"); A.buzz(30); paintStats(); };
  const hurt = () => { if(player.inv > 0) return; lives--; A.beep(110, .5, .13, "sawtooth"); A.buzz(250); paintStats(); if(lives <= 0){ over = true; return finish("tank", score, `打到第 ${stage} 關`); } Object.assign(player, {x:4 * T, y:12 * T, dir:0, inv:2200}); };
  const baseHit = () => { if(!baseOk) return; baseOk = false; over = true; A.beep(100, .8, .14, "sawtooth"); A.buzz(300); A.later(() => finish("tank", score, `貓窩被打爛了，打到第 ${stage} 關`), 700); };
  const update = dt => {
    t += dt; const s = dt / 1000; if(over) return;
    if(player.inv > 0) player.inv -= dt;
    const d = pad.dir(); if(d >= 0 && player.alive) move(player, d, 110 * s);
    if(pad.acting()) fire();
    spawnIn -= s; if(spawnIn <= 0 && spawned < total && enemies.length < 3 + Math.min(2, stage)){ spawnIn = 1.6; const sp = pick(SPAWNS), x = sp[0] * T, y = sp[1] * T; if(!hitsTank(null, x, y)){ enemies.push({x, y, dir:2, turn:rand(.6, 1.8), shoot:rand(.8, 2), armor:stage >= 3 && Math.random() < .3 ? 2 : 1}); spawned++; } }
    for(const e of enemies){
      e.turn -= s; e.shoot -= s;
      const moved = move(e, e.dir, (50 + stage * 6) * s);
      if(!moved || e.turn <= 0){ e.turn = rand(.6, 2); const r = Math.random(); e.dir = r < .38 ? 2 : r < .52 ? (e.x < 6 * T ? 1 : 3) : Math.floor(Math.random() * 4); }
      if(e.shoot <= 0){ e.shoot = rand(1, 2.4) - Math.min(.5, stage * .05); const [dx, dy] = DV[e.dir]; bullets.push({x:e.x + T / 2 + dx * 12, y:e.y + T / 2 + dy * 12, dx, dy, own:"e", v:200}); }
    }
    for(const b of bullets){
      b.x += b.dx * b.v * s; b.y += b.dy * b.v * s; const cx = Math.floor(b.x / T), cy = Math.floor(b.y / T);
      if(cx < 0 || cy < 0 || cx >= N || cy >= N){ b.dead = true; continue; }
      const ch = map[cy][cx];
      if(ch === "B"){ map[cy][cx] = " "; b.dead = true; A.beep(160, .04, .05); }
      else if(ch === "S"){ b.dead = true; A.beep(500, .03, .04); }
      else if(ch === "H"){ b.dead = true; baseHit(); }
      else if(b.own === "p"){ const e = enemies.find(e => b.x > e.x + OFF && b.x < e.x + OFF + BOX && b.y > e.y + OFF && b.y < e.y + OFF + BOX); if(e){ b.dead = true; e.armor--; if(e.armor <= 0){ e.dead = true; kill(e); } else A.beep(300, .05, .06); } }
      else if(player.alive && b.x > player.x + OFF && b.x < player.x + OFF + BOX && b.y > player.y + OFF && b.y < player.y + OFF + BOX){ b.dead = true; hurt(); if(over) return; }
    }
    const pb = bullets.filter(b => b.own === "p" && !b.dead), eb = bullets.filter(b => b.own === "e" && !b.dead);
    for(const a of pb) for(const c of eb) if(Math.hypot(a.x - c.x, a.y - c.y) < 5){ a.dead = c.dead = true; }
    bullets = bullets.filter(b => !b.dead); enemies = enemies.filter(e => !e.dead); flash.forEach(f => { f.t -= dt; }); flash = flash.filter(f => f.t > 0);
    if(!over && killed >= total && !enemies.length){ clearing += dt; if(clearing > 900){ clearing = 0; score += 500; A.beep(988, .4, .1, "triangle"); startStage(); } }
  };
  const tank = (tk, col, tcol) => {
    ctx.save(); ctx.translate(tk.x + T / 2, tk.y + T / 2); ctx.rotate(tk.dir * Math.PI / 2);
    ctx.fillStyle = col; roundRect(ctx, -10, -10, 20, 20, 4); ctx.fill(); ctx.fillStyle = "#14142F"; ctx.fillRect(-12, -11, 4, 22); ctx.fillRect(8, -11, 4, 22);
    ctx.fillStyle = tcol; ctx.beginPath(); ctx.arc(0, 0, 6, 0, 7); ctx.fill(); ctx.fillRect(-2, -15, 4, 12); ctx.restore();
  };
  const draw = () => {
    ctx.fillStyle = "#0A0A1E"; ctx.fillRect(0, 0, W, H);
    for(let y = 0; y < N; y++) for(let x = 0; x < N; x++){
      const ch = map[y][x], X = x * T, Y = y * T;
      if(ch === "B"){ ctx.fillStyle = "#C25B3A"; ctx.fillRect(X + 1, Y + 1, T - 2, T - 2); ctx.strokeStyle = "#7A3320"; ctx.lineWidth = 1.5; ctx.beginPath(); ctx.moveTo(X, Y + T / 2); ctx.lineTo(X + T, Y + T / 2); ctx.moveTo(X + T / 2, Y); ctx.lineTo(X + T / 2, Y + T / 2); ctx.moveTo(X + T / 4, Y + T / 2); ctx.lineTo(X + T / 4, Y + T); ctx.moveTo(X + T * .75, Y + T / 2); ctx.lineTo(X + T * .75, Y + T); ctx.stroke(); }
      else if(ch === "S"){ ctx.fillStyle = "#9AA3C8"; ctx.fillRect(X + 1, Y + 1, T - 2, T - 2); ctx.fillStyle = "#DDE3FF"; ctx.fillRect(X + 5, Y + 5, T - 10, T - 10); }
      else if(ch === "H"){ ctx.fillStyle = baseOk ? "#FF8A5B" : "#555"; ctx.beginPath(); ctx.arc(X + T / 2, Y + T / 2 + 1, 11, 0, 7); ctx.fill(); ctx.beginPath(); ctx.moveTo(X + 4, Y + 8); ctx.lineTo(X + 6, Y); ctx.lineTo(X + 12, Y + 5); ctx.fill(); ctx.beginPath(); ctx.moveTo(X + T - 4, Y + 8); ctx.lineTo(X + T - 6, Y); ctx.lineTo(X + T - 12, Y + 5); ctx.fill(); ctx.fillStyle = "#14142F"; ctx.beginPath(); ctx.arc(X + 9, Y + 12, 1.8, 0, 7); ctx.arc(X + T - 9, Y + 12, 1.8, 0, 7); ctx.fill(); }
    }
    for(const e of enemies) tank(e, e.armor > 1 ? "#B07CFF" : "#FF4FA3", "#FFD84A");
    if(player.alive && (player.inv <= 0 || (t / 100 | 0) % 2)) tank(player, "#35E0FF", "#EEEBFF");
    ctx.fillStyle = "#FFD84A"; bullets.forEach(b => { ctx.beginPath(); ctx.arc(b.x, b.y, 3, 0, 7); ctx.fill(); });
    flash.forEach(f => { ctx.fillStyle = `rgba(255,216,74,${f.t / 300})`; ctx.beginPath(); ctx.arc(f.x, f.y, 18 * (1.3 - f.t / 300), 0, 7); ctx.fill(); });
  };
  A.dbgTank = () => ({win:() => { killed = total; enemies = []; spawned = total; }, stage:() => stage, base:() => map[12][5]});   // 測試用
  startStage();
  runLoop(update, draw);
}

/* ---------- 2. 炸彈超人 ---------- */
function gBomber(){
  A.cleanup();
  const T = 30, N = 11, W = N * T, H = N * T;
  let map, level = 0, score = 0, lives = 3, over = false, t = 0, bombs = [], fires = [], enemies = [], items = [], door = null, doorOpen = false, freeze = 0, clearT = 0;
  const me = {c:1, r:1, dc:0, dr:0, t:0, inv:0, range:2, max:1, speed:4.6, leave:null};
  const wallAt = (c, r) => map[r] === undefined || map[r][c] === undefined || map[r][c] === "#";
  const buildLevel = () => {
    map = Array.from({length:N}, (_, r) => Array.from({length:N}, (_, c) => (r === 0 || c === 0 || r === N - 1 || c === N - 1 || (r % 2 === 0 && c % 2 === 0)) ? "#" : (Math.random() < .55 && !(r < 3 && c < 3) ? "b" : " ")));
    const blocks = []; map.forEach((row, r) => row.forEach((ch, c) => { if(ch === "b") blocks.push([c, r]); }));
    const shuffled = blocks.sort(() => Math.random() - .5); const d = shuffled.pop(); door = {c:d[0], r:d[1], shown:false};
    items = []; shuffled.slice(0, 5).forEach((b, i) => items.push({c:b[0], r:b[1], k:["R", "B", "S", "R", "B"][i], shown:false}));
    bombs = []; fires = []; enemies = [];
    const free = []; map.forEach((row, r) => row.forEach((ch, c) => { if(ch === " " && c + r > 8) free.push([c, r]); }));
    for(let i = 0; i < Math.min(7, 2 + level); i++){ const f = free.splice(Math.floor(Math.random() * free.length), 1)[0]; if(f) enemies.push({c:f[0], r:f[1], dc:0, dr:0, t:0, spd:1.7 + level * .18}); }
    doorOpen = false; Object.assign(me, {c:1, r:1, dc:0, dr:0, t:0, inv:1500, leave:null}); freeze = 700;
  };
  const startLevel = () => { level++; buildLevel(); paintStats(); };
  shell("bomber", "", "按住方向鍵移動，按「放炸彈」炸開褐色磚塊和敵人，自己別被炸到。找出隱藏的出口。");
  const {cv, ctx} = setupCanvas(W, H); $("#stage").appendChild(cv);
  const paintStats = () => setStats(`<span>分數 <b>${score}</b></span><span>生命 <b>${lives}</b></span><span>第 <b>${level}</b> 關</span><span>敵人 <b>${enemies.length}</b></span>`);
  $("#ctrl").innerHTML = padHtml("放炸彈");
  const bombAt = (c, r) => bombs.find(b => b.c === c && b.r === r);
  const place = () => { if(over || freeze > 0 || bombs.length >= me.max) return; const c = me.c + (me.t > .5 ? me.dc : 0), r = me.r + (me.t > .5 ? me.dr : 0); if(bombAt(c, r) || map[r][c] !== " ") return; bombs.push({c, r, timer:2200, range:me.range}); me.leave = {c, r}; A.beep(260, .06, .07); };
  const pad = bindPad(place);
  const blocked = (c, r, who) => { if(wallAt(c, r) || map[r][c] === "b") return true; const b = bombAt(c, r); if(b && !(who === me && me.leave && me.leave.c === c && me.leave.r === r)) return true; return false; };
  const explode = b => {
    if(b.done) return; b.done = true; A.beep(120, .35, .12, "sawtooth"); A.buzz(60);
    const cells = [[b.c, b.r]];
    for(const [dc, dr] of [[1, 0], [-1, 0], [0, 1], [0, -1]]){ for(let k = 1; k <= b.range; k++){ const c = b.c + dc * k, r = b.r + dr * k; if(wallAt(c, r)) break; cells.push([c, r]); if(map[r][c] === "b"){ map[r][c] = " "; score += 10; if(door.c === c && door.r === r) door.shown = true; const it = items.find(i => i.c === c && i.r === r); if(it) it.shown = true; break; } const ob = bombAt(c, r); if(ob && !ob.done) { ob.timer = 0; } } }
    fires.push({cells, t:500});
  };
  const killPlayer = () => { if(me.inv > 0) return; lives--; A.beep(110, .5, .13, "sawtooth"); A.buzz(250); paintStats(); if(lives <= 0){ over = true; return finish("bomber", score, `打到第 ${level} 關`); } Object.assign(me, {c:1, r:1, dc:0, dr:0, t:0, inv:2000, leave:null}); };
  const advance = (e, dist, choose, arrive) => {
    let guard = 6;
    while(dist > 0 && guard--){
      if(!(e.dc || e.dr)){ choose(e); if(!(e.dc || e.dr)) return; }
      const need = 1 - e.t; if(dist < need){ e.t += dist; return; }
      dist -= need; e.c += e.dc; e.r += e.dr; e.t = 0; if(arrive) arrive(e); choose(e);
    }
  };
  const meChoose = e => { const d = pad.dir(); if(d >= 0){ const [dc, dr] = DV[d]; if(!blocked(e.c + dc, e.r + dr, me)){ e.dc = dc; e.dr = dr; return; } } e.dc = e.dr = 0; };
  const arriveMe = () => {
    if(me.leave && !(me.c === me.leave.c && me.r === me.leave.r)) me.leave = null;
    const it = items.find(i => i.shown && i.c === me.c && i.r === me.r && !i.got);
    if(it){ it.got = true; if(it.k === "R") me.range++; else if(it.k === "B") me.max++; else me.speed = Math.min(7, me.speed + .7); score += 50; A.beep(900, .15, .08, "triangle"); paintStats(); }
    if(doorOpen && me.c === door.c && me.r === door.r){ score += 500 + level * 100; A.beep(988, .4, .1, "triangle"); startLevel(); }
  };
  const enemyChoose = e => {
    const opts = DV.filter(([dc, dr]) => !blocked(e.c + dc, e.r + dr, e) && !(dc === -e.dc && dr === -e.dr));
    const all = DV.filter(([dc, dr]) => !blocked(e.c + dc, e.r + dr, e)); const list = opts.length ? opts : all;
    if(!list.length){ e.dc = e.dr = 0; return; }
    let p = pick(list); if(Math.random() < .25 + level * .05){ p = list.reduce((b, d) => { const dd = Math.abs(e.c + d[0] - me.c) + Math.abs(e.r + d[1] - me.r); return !b || dd < b.dd ? {d, dd} : b; }, null).d; }
    e.dc = p[0]; e.dr = p[1];
  };
  const update = dt => {
    t += dt; const s = dt / 1000; if(over) return; if(me.inv > 0) me.inv -= dt;
    if(freeze > 0){ freeze -= dt; return; }
    advance(me, me.speed * s, meChoose, arriveMe);
    if(pad.acting()) place();
    for(const e of enemies) advance(e, e.spd * s, enemyChoose);
    bombs.forEach(b => { b.timer -= dt; }); for(const b of bombs.filter(b => b.timer <= 0 && !b.done)) explode(b);
    bombs = bombs.filter(b => !b.done); fires.forEach(f => { f.t -= dt; });
    const hot = new Set(); fires.forEach(f => f.cells.forEach(([c, r]) => hot.add(c + "," + r)));
    fires = fires.filter(f => f.t > 0);
    const pc = Math.round(me.c + me.dc * me.t), pr = Math.round(me.r + me.dr * me.t);
    if(hot.has(pc + "," + pr)) killPlayer();
    if(over) return;
    for(const e of enemies){ const ec = Math.round(e.c + e.dc * e.t), er = Math.round(e.r + e.dr * e.t); if(hot.has(ec + "," + er)){ e.dead = true; score += 100; A.beep(220, .15, .09, "triangle"); } else if(me.inv <= 0 && Math.hypot(e.c + e.dc * e.t - (me.c + me.dc * me.t), e.r + e.dr * e.t - (me.r + me.dr * me.t)) < .6){ killPlayer(); if(over) return; } }
    if(enemies.some(e => e.dead)){ enemies = enemies.filter(e => !e.dead); paintStats(); }
    if(!enemies.length && door.shown && !doorOpen){ doorOpen = true; A.beep(700, .2, .08, "triangle"); }
  };
  const draw = () => {
    ctx.fillStyle = "#12123A"; ctx.fillRect(0, 0, W, H);
    for(let r = 0; r < N; r++) for(let c = 0; c < N; c++){
      const X = c * T, Y = r * T, ch = map[r][c];
      if(ch === "#"){ ctx.fillStyle = "#3C4A9C"; roundRect(ctx, X + 1, Y + 1, T - 2, T - 2, 5); ctx.fill(); ctx.fillStyle = "#5B6BD0"; ctx.fillRect(X + 6, Y + 6, T - 12, T - 12); }
      else if(ch === "b"){ ctx.fillStyle = "#B7773C"; roundRect(ctx, X + 1, Y + 1, T - 2, T - 2, 4); ctx.fill(); ctx.strokeStyle = "#7A4A1E"; ctx.lineWidth = 1.5; ctx.strokeRect(X + 5, Y + 5, T - 10, T - 10); }
      else { ctx.fillStyle = "#1B1B4A"; ctx.fillRect(X, Y, T, T); }
    }
    if(door.shown && map[door.r][door.c] === " "){ ctx.fillStyle = doorOpen ? "#5CFFA0" : "#555A7A"; roundRect(ctx, door.c * T + 5, door.r * T + 3, T - 10, T - 6, 6); ctx.fill(); ctx.fillStyle = "#14142F"; ctx.fillRect(door.c * T + T / 2 - 2, door.r * T + T / 2 - 4, 4, 8); }
    for(const it of items){ if(!it.shown || it.got || map[it.r][it.c] !== " ") continue; ctx.fillStyle = it.k === "R" ? "#FF5A6E" : it.k === "B" ? "#FFD84A" : "#35E0FF"; ctx.beginPath(); ctx.arc(it.c * T + T / 2, it.r * T + T / 2, 9, 0, 7); ctx.fill(); ctx.fillStyle = "#14142F"; ctx.font = "900 12px system-ui,sans-serif"; ctx.textAlign = "center"; ctx.fillText(it.k === "R" ? "火" : it.k === "B" ? "彈" : "速", it.c * T + T / 2, it.r * T + T / 2 + 4); }
    for(const f of fires) for(const [c, r] of f.cells){ ctx.fillStyle = `rgba(255,${120 + (f.t / 5 | 0) % 100},60,${Math.min(1, f.t / 250)})`; roundRect(ctx, c * T + 3, r * T + 3, T - 6, T - 6, 8); ctx.fill(); }
    for(const b of bombs){ const pulse = 1 + Math.sin(b.timer / 80) * .08; ctx.fillStyle = "#0A0A1E"; ctx.beginPath(); ctx.arc(b.c * T + T / 2, b.r * T + T / 2 + 2, 10 * pulse, 0, 7); ctx.fill(); ctx.strokeStyle = "#FF5A6E"; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(b.c * T + T / 2 + 3, b.r * T + 5); ctx.lineTo(b.c * T + T / 2 + 8, b.r * T + 2); ctx.stroke(); }
    for(const e of enemies){ const x = (e.c + e.dc * e.t) * T + T / 2, y = (e.r + e.dr * e.t) * T + T / 2; ctx.fillStyle = "#B07CFF"; ctx.beginPath(); ctx.arc(x, y, 11, Math.PI, 0); ctx.lineTo(x + 11, y + 10); ctx.lineTo(x - 11, y + 10); ctx.fill(); ctx.fillStyle = "#fff"; ctx.beginPath(); ctx.arc(x - 4, y - 2, 3, 0, 7); ctx.arc(x + 4, y - 2, 3, 0, 7); ctx.fill(); ctx.fillStyle = "#14142F"; ctx.beginPath(); ctx.arc(x - 4, y - 2, 1.3, 0, 7); ctx.arc(x + 4, y - 2, 1.3, 0, 7); ctx.fill(); }
    if(me.inv <= 0 || (t / 90 | 0) % 2){
      const x = (me.c + me.dc * me.t) * T + T / 2, y = (me.r + me.dr * me.t) * T + T / 2;
      ctx.fillStyle = "#FF8A5B"; ctx.beginPath(); ctx.arc(x, y + 1, 11, 0, 7); ctx.fill(); ctx.beginPath(); ctx.moveTo(x - 10, y - 4); ctx.lineTo(x - 8, y - 14); ctx.lineTo(x - 2, y - 9); ctx.fill(); ctx.beginPath(); ctx.moveTo(x + 10, y - 4); ctx.lineTo(x + 8, y - 14); ctx.lineTo(x + 2, y - 9); ctx.fill();
      ctx.fillStyle = "#14142F"; ctx.beginPath(); ctx.arc(x - 4, y, 1.8, 0, 7); ctx.arc(x + 4, y, 1.8, 0, 7); ctx.fill();
    }
  };
  startLevel();
  runLoop(update, draw);
}

/* ---------- 註冊 ---------- */
Object.assign(A.GAMES, {
  tank:{name:"坦克大戰", tag:"打光敵方坦克，保護貓窩", dir:1, group:"retro", fmt:v => v + " 分", col:"#35E0FF", ic:'<rect x="10" y="22" width="28" height="16" rx="4" fill="#35E0FF"/><rect x="8" y="22" width="5" height="16" fill="#14142F"/><rect x="35" y="22" width="5" height="16" fill="#14142F"/><circle cx="24" cy="26" r="6" fill="#EEEBFF"/><rect x="22" y="8" width="4" height="16" fill="#EEEBFF"/>'},
  bomber:{name:"炸彈超人", tag:"放炸彈炸開磚塊和敵人，找出口", dir:1, group:"retro", fmt:v => v + " 分", col:"#FF5A6E", ic:'<circle cx="22" cy="28" r="12" fill="#14142F" stroke="#FF5A6E" stroke-width="3"/><path d="M30 18l6-6" stroke="#FFD84A" stroke-width="3" stroke-linecap="round"/><circle cx="38" cy="10" r="3" fill="#FF5A6E"/>'}
});
Object.assign(A.RUN, {tank:gTank, bomber:gBomber});
A.menu();
})();
