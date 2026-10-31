/* 電玩廳：復古經典第三批（動作類）：賽車閃躲、接水果、垂直射擊、小行星。
   玩法是大家熟悉的老遊戲，名字和畫面都是自己重新做的。 */
(function(){
"use strict";
const A = window.Arcade, K = A.kit, $ = A.$;
const {setupCanvas, pointerX, runLoop, shell, setStats, finish, roundRect, rand, clamp} = K;
const pick = arr => arr[Math.floor(Math.random() * arr.length)];

/* ---------- 1. 賽車閃躲 ---------- */
function gRace(){
  A.cleanup();
  const W = 360, H = 480, LANES = 4, LW = 76, RX = (W - LANES * LW) / 2, CARW = 40, CARH = 64;
  let dist = 0, speed = 240, fuel = 100, over = false, t = 0, spawnIn = .6, items = [], target = 1.5, px = RX + 1.5 * LW, offset = 0;
  const laneX = l => RX + l * LW + LW / 2;
  shell("race", "", "左右滑動（或點畫面左半邊、右半邊）換車道，躲開前面的車，撿油桶補油。");
  const {cv, ctx} = setupCanvas(W, H); $("#stage").appendChild(cv);
  const paintStats = () => setStats(`<span>距離 <b>${Math.floor(dist / 20)}</b> 公尺</span><span>油量 <b style="color:${fuel < 25 ? "#FF5A6E" : "#5CFFA0"}">${Math.ceil(fuel)}%</b></span>`);
  paintStats();
  const go = d => { target = clamp(target + d, 0, LANES - 1); A.beep(420, .03, .04); };
  let sx = 0, on = false;
  cv.addEventListener("pointerdown", e => { e.preventDefault(); A.audio(); sx = e.clientX; on = true; cv.setPointerCapture && cv.setPointerCapture(e.pointerId); });
  cv.addEventListener("pointerup", e => { if(!on) return; on = false; const dx = e.clientX - sx; if(Math.abs(dx) > 24) go(dx > 0 ? 1 : -1); else go(pointerX(cv, e, W) < W / 2 ? -1 : 1); });
  const kd = e => { if(e.key === "ArrowLeft"){ e.preventDefault(); go(-1); } else if(e.key === "ArrowRight"){ e.preventDefault(); go(1); } };
  addEventListener("keydown", kd); A.onCleanup(() => removeEventListener("keydown", kd));
  const die = why => { over = true; A.beep(120, .5, .13, "sawtooth"); A.buzz(250); A.later(() => finish("race", Math.floor(dist / 20), why), 500); };
  const update = dt => {
    t += dt; const s = dt / 1000; if(over) return;
    speed = Math.min(620, 240 + dist / 14); dist += speed * s; offset = (offset + speed * s) % 40;
    fuel -= s * (5 + speed / 160); if(fuel <= 0){ fuel = 0; paintStats(); return die("油用完了"); }
    px += (laneX(target) - px) * Math.min(1, s * 14);
    spawnIn -= s; if(spawnIn <= 0){
      spawnIn = clamp(2.4 * 240 / speed * .55 + rand(0, .25), .38, 1.2);
      const free = Math.floor(Math.random() * LANES);
      for(let l = 0; l < LANES; l++){ if(l === free) { if(Math.random() < .28) items.push({l, y:-40, kind:"fuel"}); continue; } if(Math.random() < .62) items.push({l, y:-CARH - 10, kind:"car", col:pick(["#FF4FA3", "#FFD84A", "#B07CFF", "#35E0FF"])}); }
    }
    items.forEach(o => o.y += (o.kind === "car" ? speed * .75 : speed) * s); items = items.filter(o => o.y < H + 80);
    const me = {x:px - CARW / 2 + 4, y:H - 110, w:CARW - 8, h:CARH - 10};
    for(const o of items){
      const ox = laneX(o.l) - CARW / 2 + 4, oy = o.kind === "car" ? o.y + 4 : o.y - 6, ow = CARW - 8, oh = o.kind === "car" ? CARH - 10 : 36;
      if(me.x < ox + ow && me.x + me.w > ox && me.y < oy + oh && me.y + me.h > oy){
        if(o.kind === "fuel"){ fuel = Math.min(100, fuel + 30); o.y = H + 200; A.beep(900, .12, .08, "triangle"); } else return die("撞車了");
      }
    }
    paintStats();
  };
  const car = (x, y, col, me) => { ctx.fillStyle = col; roundRect(ctx, x - CARW / 2, y, CARW, CARH, 10); ctx.fill(); ctx.fillStyle = me ? "#14142F" : "#0E0E22"; roundRect(ctx, x - CARW / 2 + 6, y + (me ? 12 : 30), CARW - 12, 18, 5); ctx.fill(); ctx.fillStyle = "#fff"; ctx.fillRect(x - CARW / 2 + 3, y + (me ? 2 : CARH - 6), 7, 4); ctx.fillRect(x + CARW / 2 - 10, y + (me ? 2 : CARH - 6), 7, 4); };
  const draw = () => {
    ctx.fillStyle = "#0E0E22"; ctx.fillRect(0, 0, W, H);
    ctx.fillStyle = "#1B1B40"; ctx.fillRect(RX, 0, LANES * LW, H);
    ctx.fillStyle = "#35E0FF"; ctx.fillRect(RX - 4, 0, 4, H); ctx.fillRect(RX + LANES * LW, 0, 4, H);
    ctx.fillStyle = "#3A3A7A"; for(let l = 1; l < LANES; l++) for(let y = -40 + offset; y < H; y += 40) ctx.fillRect(RX + l * LW - 1.5, y, 3, 20);
    for(const o of items){
      if(o.kind === "car") car(laneX(o.l), o.y, o.col, false);
      else { ctx.fillStyle = "#FFD84A"; roundRect(ctx, laneX(o.l) - 13, o.y - 6, 26, 32, 5); ctx.fill(); ctx.fillStyle = "#14142F"; ctx.font = "900 16px system-ui,sans-serif"; ctx.textAlign = "center"; ctx.fillText("油", laneX(o.l), o.y + 16); }
    }
    car(px, H - 110, "#5CFFA0", true);
  };
  runLoop(update, draw);
}

/* ---------- 2. 接水果 ---------- */
function gCatch(){
  A.cleanup();
  const W = 360, H = 480, BW = 70;
  let score = 0, lives = 3, x = W / 2, items = [], spawnIn = .5, t = 0, over = false, caught = 0;
  const FR = [{c:"#FF5A6E", r:12, p:1}, {c:"#FF9F4A", r:13, p:1}, {c:"#FFD84A", r:12, p:1}, {c:"#5CFFA0", r:12, p:1}, {c:"#B07CFF", r:11, p:2}];
  shell("catch", "", "拖動畫面移動籃子，接住水果，不要接到炸彈，也別漏掉太多水果。");
  const {cv, ctx} = setupCanvas(W, H); $("#stage").appendChild(cv);
  const paintStats = () => setStats(`<span>分數 <b>${score}</b></span><span>生命 <b>${lives}</b></span>`); paintStats();
  const move = e => { x = clamp(pointerX(cv, e, W), BW / 2, W - BW / 2); };
  cv.addEventListener("pointermove", move); cv.addEventListener("pointerdown", e => { A.audio(); cv.setPointerCapture && cv.setPointerCapture(e.pointerId); move(e); });
  const keys = {}; const kd = e => { keys[e.key] = true; }, ku = e => { keys[e.key] = false; };
  addEventListener("keydown", kd); addEventListener("keyup", ku); A.onCleanup(() => { removeEventListener("keydown", kd); removeEventListener("keyup", ku); });
  A.dbgCatch = () => ({items, x, score, lives});   // 測試用
  const hurt = () => { lives--; A.beep(140, .3, .12, "sawtooth"); A.buzz(150); paintStats(); if(lives <= 0){ over = true; finish("catch", score, `接了 ${caught} 個水果`); } };
  const update = dt => {
    t += dt; const s = dt / 1000; if(over) return;
    if(keys.ArrowLeft) x = clamp(x - 420 * s, BW / 2, W - BW / 2); if(keys.ArrowRight) x = clamp(x + 420 * s, BW / 2, W - BW / 2);
    spawnIn -= s; if(spawnIn <= 0){ spawnIn = Math.max(.32, .85 - caught * .008) + rand(0, .25); const bomb = Math.random() < Math.min(.28, .08 + caught * .004); items.push(bomb ? {x:rand(20, W - 20), y:-20, bomb:true, r:13, vy:rand(150, 200) + caught * 2} : {x:rand(20, W - 20), y:-20, f:pick(FR), vy:rand(130, 190) + caught * 2.4}); }
    for(const o of items){ o.y += o.vy * s; }
    for(const o of items){
      const r = o.bomb ? o.r : o.f.r;
      if(o.y + r >= H - 36 && o.y - r <= H - 14 && Math.abs(o.x - x) <= BW / 2 + 4){
        o.y = H + 100;
        if(o.bomb){ hurt(); } else { score += o.f.p; caught++; A.beep(520 + o.f.p * 200, .05, .06); A.buzz(10); paintStats(); }
      }else if(o.y > H + 20 && !o.bomb && !o.gone){ o.gone = true; hurt(); if(over) return; }
    }
    items = items.filter(o => o.y < H + 30);
  };
  const draw = () => {
    ctx.fillStyle = "#12123A"; ctx.fillRect(0, 0, W, H);
    for(const o of items){
      if(o.bomb){ ctx.fillStyle = "#26264F"; ctx.beginPath(); ctx.arc(o.x, o.y, o.r, 0, 7); ctx.fill(); ctx.strokeStyle = "#FF5A6E"; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(o.x + 6, o.y - 10); ctx.quadraticCurveTo(o.x + 12, o.y - 18, o.x + 18, o.y - 14); ctx.stroke(); ctx.fillStyle = "#FF5A6E"; ctx.beginPath(); ctx.arc(o.x, o.y, 4, 0, 7); ctx.fill(); }
      else { ctx.fillStyle = o.f.c; ctx.beginPath(); ctx.arc(o.x, o.y, o.f.r, 0, 7); ctx.fill(); ctx.fillStyle = "#5CFFA0"; ctx.beginPath(); ctx.ellipse(o.x + 3, o.y - o.f.r, 6, 3, -.5, 0, 7); ctx.fill(); ctx.fillStyle = "rgba(255,255,255,.35)"; ctx.beginPath(); ctx.arc(o.x - 4, o.y - 4, 3, 0, 7); ctx.fill(); }
    }
    ctx.fillStyle = "#FF8A5B"; ctx.beginPath(); ctx.moveTo(x - BW / 2, H - 38); ctx.lineTo(x + BW / 2, H - 38); ctx.lineTo(x + BW / 2 - 9, H - 12); ctx.lineTo(x - BW / 2 + 9, H - 12); ctx.closePath(); ctx.fill();
    ctx.fillStyle = "#C9703F"; ctx.fillRect(x - BW / 2 - 2, H - 42, BW + 4, 6);
  };
  runLoop(update, draw);
}

/* ---------- 3. 垂直射擊 ---------- */
function gGalaxy(){
  A.cleanup();
  const W = 360, H = 480;
  let score = 0, lives = 3, wave = 0, t = 0, over = false, power = 1, fireAt = 0, inv = 0, spawnQ = [], spawnT = 0, nextWave = 800;
  let en = [], pb = [], eb = [], items = [], boss = null, stars = Array.from({length:30}, () => ({x:rand(0, W), y:rand(0, H), v:rand(20, 70)}));
  const me = {x:W / 2, y:H - 60, tx:W / 2, ty:H - 60};
  shell("galaxy", "", "拖動畫面移動戰機（會自動射擊），撿 P 升級火力、H 補血。每 4 波有大魔王。");
  const {cv, ctx} = setupCanvas(W, H); $("#stage").appendChild(cv);
  const paintStats = () => setStats(`<span>分數 <b>${score}</b></span><span>生命 <b>${lives}</b></span><span>第 <b>${wave}</b> 波</span><span>火力 <b>${power}</b></span>`); paintStats();
  const move = e => { me.tx = clamp(pointerX(cv, e, W), 20, W - 20); const r = cv.getBoundingClientRect(); me.ty = clamp((e.clientY - r.top) * (H / r.height) - 50, H * .45, H - 36); };
  cv.addEventListener("pointermove", move); cv.addEventListener("pointerdown", e => { A.audio(); cv.setPointerCapture && cv.setPointerCapture(e.pointerId); move(e); });
  const keys = {}; const kd = e => { keys[e.key] = true; }, ku = e => { keys[e.key] = false; };
  addEventListener("keydown", kd); addEventListener("keyup", ku); A.onCleanup(() => { removeEventListener("keydown", kd); removeEventListener("keyup", ku); });
  const startWave = () => {
    wave++; paintStats(); spawnQ = [];
    if(wave % 4 === 0){ boss = {x:W / 2, y:-60, w:110, h:46, hp:50 + wave * 12, max:50 + wave * 12, dir:1, shoot:900, ty:70}; return; }
    const n = 6 + wave * 2, kind = ["line", "sine", "shoot"][wave % 3];
    for(let i = 0; i < n; i++) spawnQ.push({at:i * 420, kind, x0:kind === "line" ? 40 + (i % 5) * 70 : rand(40, W - 40), i});
    spawnT = 0;
  };
  A.dbgGalaxy = () => ({en, boss, me, score, lives, wave, power});   // 測試用
  const hit = () => { if(inv > 0) return; lives--; inv = 1500; power = Math.max(1, power - 1); A.beep(120, .4, .12, "sawtooth"); A.buzz(180); paintStats(); if(lives <= 0){ over = true; finish("galaxy", score, `打到第 ${wave} 波`); } };
  const kill = (e, big) => { score += big ? 500 : e.kind === "shoot" ? 30 : 20; A.beep(big ? 200 : 300, big ? .4 : .06, .08); if(!big && Math.random() < .16) items.push({x:e.x, y:e.y, k:Math.random() < .7 ? "P" : "H"}); paintStats(); };
  const update = dt => {
    t += dt; const s = dt / 1000; if(over) return; if(inv > 0) inv -= dt;
    stars.forEach(st => { st.y += st.v * s; if(st.y > H){ st.y = 0; st.x = rand(0, W); } });
    if(keys.ArrowLeft) me.tx = clamp(me.tx - 360 * s, 20, W - 20); if(keys.ArrowRight) me.tx = clamp(me.tx + 360 * s, 20, W - 20); if(keys.ArrowUp) me.ty = clamp(me.ty - 300 * s, H * .45, H - 36); if(keys.ArrowDown) me.ty = clamp(me.ty + 300 * s, H * .45, H - 36);
    me.x += (me.tx - me.x) * Math.min(1, s * 14); me.y += (me.ty - me.y) * Math.min(1, s * 14);
    fireAt -= dt; if(fireAt <= 0){ fireAt = 190; const offs = power === 1 ? [0] : power === 2 ? [-8, 8] : [-12, 0, 12]; offs.forEach(o => pb.push({x:me.x + o, y:me.y - 14, vx:power === 3 ? o * 2.2 : 0})); A.beep(1000, .02, .02); }
    pb.forEach(b => { b.y -= 520 * s; b.x += b.vx * s; }); pb = pb.filter(b => b.y > -10);
    if(!en.length && !spawnQ.length && !boss){ nextWave -= dt; if(nextWave <= 0){ nextWave = 1200; startWave(); } }
    spawnT += dt; while(spawnQ.length && spawnQ[0].at <= spawnT){ const q = spawnQ.shift(); en.push({x:q.x0, y:-20, x0:q.x0, kind:q.kind, hp:q.kind === "shoot" ? 3 : 1, t:0, sh:rand(600, 1400), vy:q.kind === "line" ? 110 + wave * 6 : 90 + wave * 5}); }
    for(const e of en){ e.t += s; e.y += e.vy * s; if(e.kind === "sine") e.x = e.x0 + Math.sin(e.t * 3) * 70; if(e.kind === "shoot"){ e.sh -= dt; if(e.sh <= 0){ e.sh = rand(1100, 1800); const a = Math.atan2(me.y - e.y, me.x - e.x); eb.push({x:e.x, y:e.y + 8, vx:Math.cos(a) * 170, vy:Math.sin(a) * 170}); } } }
    if(boss){
      boss.y += (boss.ty - boss.y) * Math.min(1, s * 2); boss.x += boss.dir * 70 * s; if(boss.x < 70 || boss.x > W - 70) boss.dir = -boss.dir;
      boss.shoot -= dt; if(boss.shoot <= 0){ boss.shoot = 1100; for(let a = -2; a <= 2; a++){ eb.push({x:boss.x, y:boss.y + 24, vx:a * 55, vy:170}); } }
    }
    eb.forEach(b => { b.x += b.vx * s; b.y += b.vy * s; }); eb = eb.filter(b => b.y < H + 10 && b.x > -10 && b.x < W + 10 && b.y > -20);
    items.forEach(i => i.y += 90 * s); items = items.filter(i => i.y < H + 20);
    for(const b of pb){
      for(const e of en){ if(e.hp > 0 && Math.abs(b.x - e.x) < 16 && Math.abs(b.y - e.y) < 16){ e.hp--; b.y = -99; if(e.hp <= 0) kill(e, false); break; } }
      if(boss && Math.abs(b.x - boss.x) < boss.w / 2 && Math.abs(b.y - boss.y) < boss.h / 2){ boss.hp--; b.y = -99; A.beep(180, .02, .03); if(boss.hp <= 0){ kill(boss, true); boss = null; for(let k = 0; k < 3; k++) items.push({x:W / 2 + (k - 1) * 40, y:60, k:k === 1 ? "H" : "P"}); score += wave * 100; paintStats(); } }
    }
    en = en.filter(e => e.hp > 0 && e.y < H + 20);
    for(const e of en){ if(Math.abs(e.x - me.x) < 18 && Math.abs(e.y - me.y) < 18){ e.hp = 0; hit(); if(over) return; } }
    for(const b of eb){ if(Math.abs(b.x - me.x) < 10 && Math.abs(b.y - me.y) < 12){ b.y = H + 99; hit(); if(over) return; } }
    if(boss && Math.abs(boss.x - me.x) < boss.w / 2 && Math.abs(boss.y - me.y) < boss.h / 2 + 10){ hit(); if(over) return; }
    for(const i of items){ if(Math.abs(i.x - me.x) < 20 && Math.abs(i.y - me.y) < 22){ i.y = H + 99; if(i.k === "P"){ power = Math.min(3, power + 1); score += 50; } else { lives = Math.min(5, lives + 1); } A.beep(900, .15, .08, "triangle"); paintStats(); } }
  };
  const draw = () => {
    ctx.fillStyle = "#0A0A1E"; ctx.fillRect(0, 0, W, H);
    ctx.fillStyle = "#3A3A7A"; stars.forEach(st => ctx.fillRect(st.x, st.y, 2, 2));
    for(const e of en){ ctx.fillStyle = e.kind === "shoot" ? "#FF5A6E" : e.kind === "sine" ? "#B07CFF" : "#FFD84A"; ctx.beginPath(); ctx.moveTo(e.x, e.y + 12); ctx.lineTo(e.x - 14, e.y - 10); ctx.lineTo(e.x, e.y - 4); ctx.lineTo(e.x + 14, e.y - 10); ctx.closePath(); ctx.fill(); }
    if(boss){ ctx.fillStyle = "#FF4FA3"; roundRect(ctx, boss.x - boss.w / 2, boss.y - boss.h / 2, boss.w, boss.h, 12); ctx.fill(); ctx.fillStyle = "#14142F"; ctx.fillRect(boss.x - 26, boss.y - 6, 14, 12); ctx.fillRect(boss.x + 12, boss.y - 6, 14, 12); ctx.fillStyle = "#26264F"; ctx.fillRect(boss.x - boss.w / 2, boss.y - boss.h / 2 - 10, boss.w, 6); ctx.fillStyle = "#5CFFA0"; ctx.fillRect(boss.x - boss.w / 2, boss.y - boss.h / 2 - 10, boss.w * boss.hp / boss.max, 6); }
    ctx.fillStyle = "#FFD84A"; pb.forEach(b => ctx.fillRect(b.x - 1.5, b.y - 7, 3, 12));
    ctx.fillStyle = "#FF5A6E"; eb.forEach(b => { ctx.beginPath(); ctx.arc(b.x, b.y, 3.5, 0, 7); ctx.fill(); });
    for(const i of items){ ctx.fillStyle = i.k === "P" ? "#35E0FF" : "#FF4FA3"; ctx.beginPath(); ctx.arc(i.x, i.y, 11, 0, 7); ctx.fill(); ctx.fillStyle = "#14142F"; ctx.font = "900 13px system-ui,sans-serif"; ctx.textAlign = "center"; ctx.fillText(i.k, i.x, i.y + 4.5); }
    if(inv <= 0 || (t / 90 | 0) % 2){ ctx.fillStyle = "#5CFFA0"; ctx.beginPath(); ctx.moveTo(me.x, me.y - 16); ctx.lineTo(me.x + 15, me.y + 12); ctx.lineTo(me.x, me.y + 6); ctx.lineTo(me.x - 15, me.y + 12); ctx.closePath(); ctx.fill(); ctx.fillStyle = "#35E0FF"; ctx.beginPath(); ctx.arc(me.x, me.y - 2, 4, 0, 7); ctx.fill(); }
  };
  runLoop(update, draw);
}

/* ---------- 4. 小行星 ---------- */
function gRocks(){
  A.cleanup();
  const W = 360, H = 480;
  let score = 0, lives = 3, level = 0, rocks = [], bullets = [], t = 0, over = false, fireAt = 0, inv = 0, nextLevel = 600;
  const ship = {x:W / 2, y:H / 2, a:-Math.PI / 2, vx:0, vy:0};
  const ctl = {left:false, right:false, thrust:false, fire:false};
  shell("rocks", "", "◀ ▶ 轉向、推進加速、射擊（可以按住）。打碎大隕石會分裂成小的。");
  const {cv, ctx} = setupCanvas(W, H); $("#stage").appendChild(cv);
  const paintStats = () => setStats(`<span>分數 <b>${score}</b></span><span>生命 <b>${lives}</b></span><span>第 <b>${level}</b> 關</span>`); paintStats();
  $("#ctrl").innerHTML = `<div class="row" style="gap:8px;flex-wrap:nowrap;margin-top:10px"><button class="btn ghost" data-c="left" style="flex:1;padding:16px 0">◀</button><button class="btn ghost" data-c="right" style="flex:1;padding:16px 0">▶</button><button class="btn ghost" data-c="thrust" style="flex:1.3;padding:16px 0">推進</button><button class="btn" data-c="fire" style="flex:1.3;padding:16px 0">射擊</button></div>`;
  const setC = (e, v) => { const b = e.target.closest("[data-c]"); if(b){ e.preventDefault(); ctl[b.dataset.c] = v; } };
  $("#ctrl").addEventListener("pointerdown", e => { A.audio(); setC(e, true); }); const rel = () => { ctl.left = ctl.right = ctl.thrust = ctl.fire = false; };
  addEventListener("pointerup", rel); addEventListener("pointercancel", rel); A.onCleanup(() => { removeEventListener("pointerup", rel); removeEventListener("pointercancel", rel); });
  const KM = {ArrowLeft:"left", ArrowRight:"right", ArrowUp:"thrust", " ":"fire"}; const kd = e => { if(KM[e.key]){ e.preventDefault(); ctl[KM[e.key]] = true; } }, ku = e => { if(KM[e.key]) ctl[KM[e.key]] = false; };
  addEventListener("keydown", kd); addEventListener("keyup", ku); A.onCleanup(() => { removeEventListener("keydown", kd); removeEventListener("keyup", ku); });
  const mkRock = (x, y, size) => { const a = rand(0, 6.28), sp = rand(30, 60) + level * 6 + (3 - size) * 22; return {x, y, vx:Math.cos(a) * sp, vy:Math.sin(a) * sp, size, r:[0, 11, 20, 32][size], ph:rand(0, 6.28), rot:rand(-1, 1), pts:Array.from({length:10}, () => rand(.78, 1.12))}; };
  const startLevel = () => { level++; rocks = []; for(let i = 0; i < 2 + level; i++){ let x, y; do { x = rand(0, W); y = rand(0, H); } while(Math.hypot(x - ship.x, y - ship.y) < 110); rocks.push(mkRock(x, y, 3)); } paintStats(); };
  const hit = () => { if(inv > 0) return; lives--; A.beep(110, .5, .13, "sawtooth"); A.buzz(250); paintStats(); if(lives <= 0){ over = true; return finish("rocks", score, `打到第 ${level} 關`); } Object.assign(ship, {x:W / 2, y:H / 2, vx:0, vy:0, a:-Math.PI / 2}); inv = 2000; };
  const wrap = o => { if(o.x < -30) o.x = W + 30; if(o.x > W + 30) o.x = -30; if(o.y < -30) o.y = H + 30; if(o.y > H + 30) o.y = -30; };
  const update = dt => {
    t += dt; const s = dt / 1000; if(over) return; if(inv > 0) inv -= dt;
    if(ctl.left) ship.a -= 4 * s; if(ctl.right) ship.a += 4 * s;
    if(ctl.thrust){ ship.vx += Math.cos(ship.a) * 240 * s; ship.vy += Math.sin(ship.a) * 240 * s; }
    const d = Math.pow(.55, s); ship.vx *= d; ship.vy *= d; const sp = Math.hypot(ship.vx, ship.vy); if(sp > 260){ ship.vx *= 260 / sp; ship.vy *= 260 / sp; }
    ship.x += ship.vx * s; ship.y += ship.vy * s; wrap(ship);
    fireAt -= dt; if(ctl.fire && fireAt <= 0 && bullets.length < 5){ fireAt = 220; bullets.push({x:ship.x + Math.cos(ship.a) * 14, y:ship.y + Math.sin(ship.a) * 14, vx:Math.cos(ship.a) * 360 + ship.vx * .4, vy:Math.sin(ship.a) * 360 + ship.vy * .4, life:1.3}); A.beep(900, .03, .04); }
    bullets.forEach(b => { b.x += b.vx * s; b.y += b.vy * s; b.life -= s; wrap(b); }); bullets = bullets.filter(b => b.life > 0);
    rocks.forEach(r => { r.x += r.vx * s; r.y += r.vy * s; r.ph += r.rot * s; wrap(r); });
    const born = [];
    for(const b of bullets){ for(const r of rocks){ if(r.size && Math.hypot(b.x - r.x, b.y - r.y) < r.r){ b.life = 0; score += r.size === 3 ? 20 : r.size === 2 ? 50 : 100; A.beep(r.size === 1 ? 300 : 200, .08, .08); if(r.size > 1){ born.push(mkRock(r.x, r.y, r.size - 1), mkRock(r.x, r.y, r.size - 1)); } r.size = 0; paintStats(); break; } } }
    rocks = rocks.filter(r => r.size).concat(born);
    if(inv <= 0) for(const r of rocks){ if(Math.hypot(ship.x - r.x, ship.y - r.y) < r.r + 8){ hit(); if(over) return; break; } }
    if(!rocks.length){ nextLevel -= dt; if(nextLevel <= 0){ nextLevel = 900; startLevel(); } }
  };
  const draw = () => {
    ctx.fillStyle = "#0A0A1E"; ctx.fillRect(0, 0, W, H);
    ctx.lineWidth = 2; ctx.strokeStyle = "#B7B4E8";
    for(const r of rocks){ ctx.beginPath(); r.pts.forEach((p, i) => { const a = i / r.pts.length * 6.283 + r.ph, x = r.x + Math.cos(a) * r.r * p, y = r.y + Math.sin(a) * r.r * p; if(i) ctx.lineTo(x, y); else ctx.moveTo(x, y); }); ctx.closePath(); ctx.stroke(); }
    ctx.fillStyle = "#FFD84A"; bullets.forEach(b => { ctx.beginPath(); ctx.arc(b.x, b.y, 2.5, 0, 7); ctx.fill(); });
    if(inv <= 0 || (t / 100 | 0) % 2){
      ctx.save(); ctx.translate(ship.x, ship.y); ctx.rotate(ship.a); ctx.strokeStyle = "#5CFFA0"; ctx.lineWidth = 2.4; ctx.beginPath(); ctx.moveTo(14, 0); ctx.lineTo(-10, 9); ctx.lineTo(-5, 0); ctx.lineTo(-10, -9); ctx.closePath(); ctx.stroke();
      if(ctl.thrust){ ctx.strokeStyle = "#FF9F4A"; ctx.beginPath(); ctx.moveTo(-6, 4); ctx.lineTo(-16 - Math.random() * 6, 0); ctx.lineTo(-6, -4); ctx.stroke(); } ctx.restore();
    }
  };
  startLevel();
  runLoop(update, draw);
}

/* ---------- 註冊 ---------- */
Object.assign(A.GAMES, {
  race:{name:"賽車閃躲", tag:"換車道躲開前面的車，撿油桶", dir:1, group:"retro", fmt:v => v + " 公尺", col:"#5CFFA0", ic:'<rect x="6" y="6" width="36" height="36" rx="4" fill="#1B1B40"/><rect x="14" y="26" width="12" height="16" rx="4" fill="#5CFFA0"/><rect x="28" y="8" width="10" height="14" rx="3" fill="#FF4FA3"/>'},
  catch:{name:"接水果", tag:"拖動籃子接水果，小心炸彈", dir:1, group:"retro", fmt:v => v + " 分", col:"#FF5A6E", ic:'<circle cx="18" cy="16" r="7" fill="#FF5A6E"/><circle cx="32" cy="22" r="6" fill="#FFD84A"/><path d="M8 32h32l-5 11H13z" fill="#FF8A5B"/>'},
  galaxy:{name:"垂直射擊", tag:"駕戰機打敵機，撿道具升級", dir:1, group:"retro", fmt:v => v + " 分", col:"#35E0FF", ic:'<path d="M24 6l9 22-9-4-9 4z" fill="#35E0FF"/><path d="M14 34h20l-4 8H18z" fill="#FF4FA3"/><circle cx="24" cy="20" r="2.5" fill="#14142F"/>'},
  rocks:{name:"小行星", tag:"旋轉、推進、射擊，打碎隕石", dir:1, group:"retro", fmt:v => v + " 分", col:"#B7B4E8", ic:'<path d="M10 20l8-10 12 3 8 10-6 12-14 3-10-8z" fill="none" stroke="#B7B4E8" stroke-width="3" stroke-linejoin="round"/><path d="M22 24l8 4-8 4z" fill="#5CFFA0"/>'}
});
Object.assign(A.RUN, {race:gRace, catch:gCatch, galaxy:gGalaxy, rocks:gRocks});
A.menu();
})();
