/* 電玩廳：復古經典第五批：連連看、華容道、切水果、跳跳高樓。
   玩法是大家熟悉的老遊戲，名字和畫面都是自己重新做的。 */
(function(){
"use strict";
const A = window.Arcade, K = A.kit, $ = A.$, esc = A.esc;
const {setupCanvas, pointerX, runLoop, shell, setStats, finish, roundRect, rand, clamp} = K;
const pick = arr => arr[Math.floor(Math.random() * arr.length)];
const shuffled = a => { a = a.slice(); for(let i = a.length - 1; i > 0; i--){ const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const PAL = ["#FF4FA3", "#35E0FF", "#FFD84A", "#5CFFA0", "#B07CFF", "#FF9F4A"];
function shape(ctx, k, x, y, r){
  ctx.beginPath();
  if(k === 0){ ctx.arc(x, y, r, 0, 7); } else if(k === 1){ roundRect(ctx, x - r, y - r, r * 2, r * 2, 6); } else if(k === 2){ ctx.moveTo(x, y - r - 1); ctx.lineTo(x + r + 1, y + r); ctx.lineTo(x - r - 1, y + r); ctx.closePath(); }
  else if(k === 3){ ctx.moveTo(x, y - r - 2); ctx.lineTo(x + r + 2, y); ctx.lineTo(x, y + r + 2); ctx.lineTo(x - r - 2, y); ctx.closePath(); }
  else if(k === 4){ for(let i = 0; i < 6; i++){ const a = i * Math.PI / 3 + Math.PI / 6; ctx[i ? "lineTo" : "moveTo"](x + Math.cos(a) * (r + 1), y + Math.sin(a) * (r + 1)); } ctx.closePath(); }
  else { for(let i = 0; i < 10; i++){ const a = i * Math.PI / 5 - Math.PI / 2, rr = i % 2 ? r * .5 : r + 2; ctx[i ? "lineTo" : "moveTo"](x + Math.cos(a) * rr, y + Math.sin(a) * rr); } ctx.closePath(); }
  ctx.fill();
}

/* ---------- 1. 連連看 ---------- */
function gLink(){
  A.cleanup();
  const COLS = 8, ROWS = 10, C = 40, PADX = 16, PADY = 16, W = COLS * C + PADX * 2, H = ROWS * C + PADY * 2, TYPES = 20, TIME = 180;
  let g, sel = null, flash = null, left = TIME, score = 0, pairs = 0, over = false, t = 0, shuffles = 2, hintPair = null;
  const R2 = ROWS + 2, C2 = COLS + 2;
  const build = () => {
    const list = []; for(let k = 0; k < TYPES; k++) for(let n = 0; n < 4; n++) list.push(k + 1); const sh = shuffled(list);
    g = Array.from({length:R2}, () => Array(C2).fill(0)); let i = 0; for(let r = 1; r <= ROWS; r++) for(let c = 1; c <= COLS; c++) g[r][c] = sh[i++];
  };
  const DIRS = [[0, 1], [1, 0], [0, -1], [-1, 0]];
  const path = (a, b) => {
    const seen = new Set(), q = [{r:a[0], c:a[1], d:-1, t:0, prev:null}]; let head = 0;
    while(head < q.length){
      const s = q[head++];
      for(let d = 0; d < 4; d++){
        const nt = (s.d === -1 || s.d === d) ? s.t : s.t + 1; if(nt > 2) continue;
        const nr = s.r + DIRS[d][0], nc = s.c + DIRS[d][1]; if(nr < 0 || nr >= R2 || nc < 0 || nc >= C2) continue;
        if(nr === b[0] && nc === b[1]){ const pts = [[nr, nc]]; let p = s; while(p){ pts.push([p.r, p.c]); p = p.prev; } return pts.reverse(); }
        if(g[nr][nc] !== 0) continue; const k = nr + "," + nc + "," + d + "," + nt; if(seen.has(k)) continue; seen.add(k); q.push({r:nr, c:nc, d, t:nt, prev:s});
      }
    }
    return null;
  };
  const findPair = () => { const by = {}; for(let r = 1; r <= ROWS; r++) for(let c = 1; c <= COLS; c++) if(g[r][c]) (by[g[r][c]] = by[g[r][c]] || []).push([r, c]);
    for(const k in by){ const l = by[k]; for(let i = 0; i < l.length; i++) for(let j = i + 1; j < l.length; j++){ const p = path(l[i], l[j]); if(p) return [l[i], l[j], p]; } } return null; };
  const remaining = () => { let n = 0; for(let r = 1; r <= ROWS; r++) for(let c = 1; c <= COLS; c++) if(g[r][c]) n++; return n; };
  const reshuffle = () => { const cells = [], vals = []; for(let r = 1; r <= ROWS; r++) for(let c = 1; c <= COLS; c++) if(g[r][c]){ cells.push([r, c]); vals.push(g[r][c]); } for(let tries = 0; tries < 30; tries++){ const sh = shuffled(vals); cells.forEach(([r, c], i) => { g[r][c] = sh[i]; }); if(findPair()) return; } };
  shell("link", "", "找兩個一模一樣的圖案，中間的連線轉彎不超過兩次就能消掉。時間用完或全部消完就結束。");
  const {cv, ctx} = setupCanvas(W, H); $("#stage").appendChild(cv);
  $("#ctrl").innerHTML = `<div class="row" style="margin-top:12px"><button class="btn ghost sm" id="hint">提示（扣 10 秒）</button><button class="btn ghost sm" id="shuf">重新洗牌（剩 <span id="sc">2</span> 次）</button></div>`;
  const paintStats = () => setStats(`<span>分數 <b>${score}</b></span><span>剩下 <b id="tl">${Math.ceil(left)}</b> 秒</span><span>剩 <b>${remaining()}</b> 張</span>`);
  A.dbgLink = () => ({g, pair:findPair(), left, remaining:remaining()});   // 測試用
  build(); if(!findPair()) reshuffle(); paintStats();
  $("#hint").addEventListener("click", () => { if(over) return; const p = findPair(); if(p){ hintPair = [p[0], p[1]]; left = Math.max(1, left - 10); A.beep(600, .08, .06); A.later(() => { hintPair = null; }, 1500); } });
  $("#shuf").addEventListener("click", () => { if(over || shuffles <= 0) return; shuffles--; $("#sc").textContent = shuffles; reshuffle(); sel = null; A.beep(400, .08, .06); });
  cv.addEventListener("pointerdown", e => {
    e.preventDefault(); A.audio(); if(over || flash) return; const r = cv.getBoundingClientRect(), x = (e.clientX - r.left) * (W / r.width), y = (e.clientY - r.top) * (H / r.height);
    const c = Math.floor((x - PADX) / C) + 1, rr = Math.floor((y - PADY) / C) + 1; if(rr < 1 || rr > ROWS || c < 1 || c > COLS || !g[rr][c]) return;
    if(!sel){ sel = [rr, c]; A.beep(500, .03, .05); return; }
    if(sel[0] === rr && sel[1] === c){ sel = null; return; }
    if(g[sel[0]][sel[1]] === g[rr][c]){ const p = path(sel, [rr, c]); if(p){ flash = {a:sel, b:[rr, c], p, t:260}; sel = null; return; } }
    sel = [rr, c]; A.beep(260, .03, .04);
  });
  const update = dt => {
    t += dt; if(over) return;
    if(flash){ flash.t -= dt; if(flash.t <= 0){ const {a, b} = flash; g[a[0]][a[1]] = 0; g[b[0]][b[1]] = 0; flash = null; pairs++; score += 10 + Math.min(10, Math.floor(left / 18)); A.beep(700 + pairs * 10, .1, .08, "triangle"); A.buzz(15); paintStats();
      if(!remaining()){ over = true; score += Math.floor(left) * 5; A.beep(988, .4, .1, "triangle"); A.later(() => finish("link", score, `全部消完，還剩 ${Math.floor(left)} 秒`), 500); return; }
      if(!findPair()){ reshuffle(); A.toast("沒有可以連的了，自動洗牌"); } }
    } else { left -= dt / 1000; const e = $("#tl"); if(e) e.textContent = Math.ceil(left); if(left <= 0){ left = 0; over = true; A.beep(130, .5, .12, "sawtooth"); A.later(() => finish("link", score, `時間到，還剩 ${remaining()} 張`), 400); } }
  };
  const draw = () => {
    ctx.fillStyle = "#12123A"; ctx.fillRect(0, 0, W, H);
    for(let r = 1; r <= ROWS; r++) for(let c = 1; c <= COLS; c++){ const v = g[r][c]; if(!v) continue; const x = PADX + (c - 1) * C, y = PADY + (r - 1) * C;
      ctx.fillStyle = "#F4F1FF"; roundRect(ctx, x + 2, y + 2, C - 4, C - 4, 8); ctx.fill();
      ctx.fillStyle = PAL[((v - 1) / 6) | 0]; shape(ctx, (v - 1) % 6, x + C / 2, y + C / 2, 11);
      if((sel && sel[0] === r && sel[1] === c) || (hintPair && hintPair.some(h => h[0] === r && h[1] === c))){ ctx.strokeStyle = sel && sel[0] === r && sel[1] === c ? "#FFD84A" : "#5CFFA0"; ctx.lineWidth = 3.5; roundRect(ctx, x + 2, y + 2, C - 4, C - 4, 8); ctx.stroke(); } }
    if(flash){ ctx.strokeStyle = "#FFD84A"; ctx.lineWidth = 4; ctx.lineJoin = "round"; ctx.beginPath(); flash.p.forEach(([r, c], i) => { const x = PADX + (c - 1) * C + C / 2, y = PADY + (r - 1) * C + C / 2; i ? ctx.lineTo(x, y) : ctx.moveTo(x, y); }); ctx.stroke(); }
  };
  runLoop(update, draw);
}

/* ---------- 2. 華容道 ---------- */
const KL = [{"name": "入門", "pieces": [["V", 0, 3], ["V", 3, 1], ["H", 1, 0], ["S", 0, 0], ["S", 0, 2], ["V", 1, 2], ["V", 2, 0], ["S", 2, 1], ["S", 4, 0], ["C", 3, 2]], "best": 10}, {"name": "簡單", "pieces": [["V", 1, 2], ["V", 3, 1], ["H", 0, 1], ["S", 1, 3], ["S", 0, 3], ["V", 3, 0], ["V", 2, 3], ["S", 3, 2], ["S", 4, 2], ["C", 1, 0]], "best": 24}, {"name": "中等", "pieces": [["V", 1, 3], ["V", 1, 2], ["H", 0, 1], ["S", 1, 1], ["S", 1, 0], ["V", 3, 2], ["V", 3, 3], ["S", 4, 1], ["S", 4, 0], ["C", 2, 0]], "best": 48}, {"name": "困難", "pieces": [["V", 0, 2], ["V", 3, 1], ["H", 2, 0], ["S", 4, 2], ["S", 3, 0], ["V", 2, 2], ["V", 0, 3], ["S", 2, 3], ["S", 3, 3], ["C", 0, 0]], "best": 80}, {"name": "橫刀立馬", "pieces": [["V", 0, 0], ["C", 0, 1], ["V", 0, 3], ["V", 2, 0], ["H", 2, 1], ["V", 2, 3], ["S", 3, 1], ["S", 3, 2], ["S", 4, 0], ["S", 4, 3]], "best": 116}];

const KSIZE = {C:[2, 2], H:[1, 2], V:[2, 1], S:[1, 1]};   // [高, 寬]
const KNAME = {C:"曹操", H:"關羽", S:"兵"}, VNAMES = ["張飛", "趙雲", "馬超", "黃忠"];
function gKlotski(){
  A.cleanup();
  const D = A.D; D.kl = D.kl || {};
  const cleared = () => Object.keys(D.kl).filter(k => D.kl[k]).length;
  const menu = () => {
    A.cleanup(); $("#view").onclick = null;
    A.view(`<div class="top"><button class="btn ghost sm" data-menu="1">← 選單</button><span class="sp"></span><span class="t">華容道</span></div>
      <div class="stat"><span>已過關 <b>${cleared()}</b> / ${KL.length}</span></div>
      <p class="sub2" style="text-align:center;margin:0 0 10px">把最大的「曹操」移到最下面中間的出口。每滑一格算一步。</p>
      <div style="display:grid;gap:8px">${KL.map((l, i) => `<button class="game" data-kl="${i}"><span class="ic" style="background:#FFD84A22"><b style="font-size:20px">${D.kl[i] ? "✓" : i + 1}</b></span><span><b>${esc(l.name)}</b><small>最少 ${l.best} 步${D.kl[i] ? "　你的最佳 " + D.kl[i] + " 步" : ""}</small></span></button>`).join("")}</div>`);
    $("#view").onclick = e => { const b = e.target.closest("[data-kl]"); if(b) play(+b.dataset.kl); };
  };
  const play = lv => {
    A.cleanup(); $("#view").onclick = null;
    const CW = 76, W = 4 * CW, H = 5 * CW;
    let v = 0; const ps = KL[lv].pieces.map(p => ({k:p[0], r:p[1], c:p[2], name:p[0] === "V" ? VNAMES[v++ % 4] : KNAME[p[0]]})); let sel = -1, steps = 0, hist = [], won = false;
    const sz = p => KSIZE[p.k];
    const grid = () => { const g = Array.from({length:5}, () => Array(4).fill(-1)); ps.forEach((p, i) => { const [h, w] = sz(p); for(let r = 0; r < h; r++) for(let c = 0; c < w; c++) g[p.r + r][p.c + c] = i; }); return g; };
    shell("klotski", "", "滑動棋子（或選一個再按方向鍵）。把曹操移到下面中間的缺口。");
    const paintStats = () => setStats(`<span>${esc(KL[lv].name)}</span><span>步數 <b>${steps}</b></span><span>最少 <b>${KL[lv].best}</b></span>`); paintStats();
    const {cv, ctx} = setupCanvas(W, H); $("#stage").appendChild(cv);
    $("#ctrl").innerHTML = `<div class="row" style="gap:8px;flex-wrap:nowrap;margin-top:10px"><button class="btn ghost" data-d="left" style="flex:1;padding:14px 0">◀</button><button class="btn ghost" data-d="up" style="flex:1;padding:14px 0">▲</button><button class="btn ghost" data-d="down" style="flex:1;padding:14px 0">▼</button><button class="btn ghost" data-d="right" style="flex:1;padding:14px 0">▶</button></div><div class="row" style="margin-top:10px"><button class="btn ghost sm" id="undo">復原</button><button class="btn ghost sm" id="redo">重來</button><button class="btn ghost sm" id="lvl">選題目</button></div>`;
    const DV = {left:[0, -1], right:[0, 1], up:[-1, 0], down:[1, 0]};
    const tryMove = (i, d) => {
      if(won || i < 0) return false; const [dr, dc] = DV[d], p = ps[i], [h, w] = sz(p), g = grid();
      for(let r = 0; r < h; r++) for(let c = 0; c < w; c++){ const nr = p.r + r + dr, nc = p.c + c + dc; if(nr < 0 || nr >= 5 || nc < 0 || nc >= 4) return false; const o = g[nr][nc]; if(o !== -1 && o !== i) return false; }
      hist.push(ps.map(q => [q.r, q.c])); p.r += dr; p.c += dc; steps++; paintStats(); A.beep(300, .03, .05);
      const cao = ps.find(q => q.k === "C"); if(cao.r === 3 && cao.c === 1){ won = true; D.kl[lv] = Math.min(D.kl[lv] || 1e9, steps); A.save(); A.beep(988, .4, .1, "triangle"); A.buzz(100); A.later(() => finish("klotski", cleared(), `${KL[lv].name}：${steps} 步完成（最少 ${KL[lv].best} 步）`), 700); }
      return true;
    };
    A.dbgKl = () => ({ps, steps});   // 測試用
    const pieceAt = (x, y) => grid()[clamp(Math.floor(y / CW), 0, 4)][clamp(Math.floor(x / CW), 0, 3)];
    let down = null;
    cv.addEventListener("pointerdown", e => { e.preventDefault(); A.audio(); const r = cv.getBoundingClientRect(), x = (e.clientX - r.left) * (W / r.width), y = (e.clientY - r.top) * (H / r.height); const i = pieceAt(x, y); sel = i; down = {i, x:e.clientX, y:e.clientY}; cv.setPointerCapture && cv.setPointerCapture(e.pointerId); });
    cv.addEventListener("pointermove", e => { if(!down || down.i < 0) return; const dx = e.clientX - down.x, dy = e.clientY - down.y; if(Math.max(Math.abs(dx), Math.abs(dy)) < 26) return; tryMove(down.i, Math.abs(dx) > Math.abs(dy) ? (dx > 0 ? "right" : "left") : (dy > 0 ? "down" : "up")); down.x = e.clientX; down.y = e.clientY; });
    cv.addEventListener("pointerup", () => { down = null; });
    $("#ctrl").addEventListener("pointerdown", e => { const b = e.target.closest("[data-d]"); if(b){ e.preventDefault(); A.audio(); tryMove(sel, b.dataset.d); } });
    $("#undo").addEventListener("click", () => { if(won) return; const h = hist.pop(); if(!h) return; h.forEach((q, i) => { ps[i].r = q[0]; ps[i].c = q[1]; }); steps = Math.max(0, steps - 1); paintStats(); });
    $("#redo").addEventListener("click", () => play(lv)); $("#lvl").addEventListener("click", () => gKlotski());
    const kd = e => { const d = {ArrowLeft:"left", ArrowRight:"right", ArrowUp:"up", ArrowDown:"down"}[e.key]; if(d){ e.preventDefault(); tryMove(sel, d); } };
    addEventListener("keydown", kd); A.onCleanup(() => removeEventListener("keydown", kd));
    const draw = () => {
      ctx.fillStyle = "#2A1F12"; ctx.fillRect(0, 0, W, H); ctx.fillStyle = "#3C2E1B"; ctx.fillRect(2, 2, W - 4, H - 4);
      ctx.fillStyle = "#5CFFA0"; ctx.fillRect(CW, H - 5, CW * 2, 5);
      ps.forEach((p, i) => {
        const [h, w] = sz(p), x = p.c * CW + 3, y = p.r * CW + 3, pw = w * CW - 6, ph = h * CW - 6;
        ctx.fillStyle = p.k === "C" ? "#FFB020" : p.k === "H" ? "#FF5A6E" : p.k === "V" ? "#35A8E0" : "#6B8A5A"; roundRect(ctx, x, y, pw, ph, 10); ctx.fill();
        if(i === sel){ ctx.strokeStyle = "#fff"; ctx.lineWidth = 3.5; roundRect(ctx, x, y, pw, ph, 10); ctx.stroke(); }
        ctx.fillStyle = "#14142F"; ctx.font = `900 ${p.k === "S" ? 20 : 26}px 'Noto Serif TC',serif`; ctx.textAlign = "center"; ctx.fillText(p.name, x + pw / 2, y + ph / 2 + 9);
      });
    };
    runLoop(() => {}, draw);
  };
  menu();
}

/* ---------- 3. 切水果 ---------- */
function gSlice(){
  A.cleanup();
  const W = 360, H = 480, GRAV = 760;
  let items = [], halves = [], trail = [], score = 0, lives = 3, over = false, t = 0, spawnIn = .6, combo = 0, drag = false, cutNow = 0, last = null, popups = [];
  const FRUITS = [{c:"#FF5A6E", r:24, n:"蘋果"}, {c:"#FF9F4A", r:26, n:"橘子"}, {c:"#FFD84A", r:22, n:"檸檬"}, {c:"#5CFFA0", r:25, n:"西瓜"}, {c:"#B07CFF", r:21, n:"葡萄"}];
  shell("slice", "", "用手指在畫面上快速滑過水果把它切開。千萬別切到炸彈！漏掉太多水果也會結束。");
  const {cv, ctx} = setupCanvas(W, H); $("#stage").appendChild(cv);
  const paintStats = () => setStats(`<span>分數 <b>${score}</b></span><span>生命 <b>${lives}</b></span>`); paintStats();
  const toXY = e => { const r = cv.getBoundingClientRect(); return [(e.clientX - r.left) * (W / r.width), (e.clientY - r.top) * (H / r.height)]; };
  A.dbgSlice = () => ({items, score, lives});   // 測試用
  const cutSeg = (x1, y1, x2, y2) => {
    for(const it of items){
      if(it.dead) continue; const dx = x2 - x1, dy = y2 - y1, l2 = dx * dx + dy * dy || 1; let u = ((it.x - x1) * dx + (it.y - y1) * dy) / l2; u = clamp(u, 0, 1);
      if(Math.hypot(x1 + dx * u - it.x, y1 + dy * u - it.y) < it.r + 4){
        it.dead = true;
        if(it.bomb){ over = true; A.beep(90, .7, .15, "sawtooth"); A.buzz(400); A.later(() => finish("slice", score, "切到炸彈了"), 600); return; }
        cutNow++; score += 1; A.beep(500 + Math.min(500, cutNow * 90), .08, .08, "triangle"); A.buzz(15);
        const ang = Math.atan2(dy, dx); halves.push({x:it.x, y:it.y, vx:it.vx - Math.sin(ang) * 90, vy:it.vy - 40, r:it.r, c:it.f.c, a:ang, side:1, life:900}, {x:it.x, y:it.y, vx:it.vx + Math.sin(ang) * 90, vy:it.vy - 40, r:it.r, c:it.f.c, a:ang, side:-1, life:900});
        popups.push({x:it.x, y:it.y, t:600, txt:"+1"});
      }
    }
  };
  cv.addEventListener("pointerdown", e => { e.preventDefault(); A.audio(); drag = true; cutNow = 0; last = toXY(e); trail = [last.concat(performance.now())]; cv.setPointerCapture && cv.setPointerCapture(e.pointerId); });
  cv.addEventListener("pointermove", e => { if(!drag || over) return; const p = toXY(e); if(last) cutSeg(last[0], last[1], p[0], p[1]); last = p; trail.push(p.concat(performance.now())); });
  const up = () => { if(drag && cutNow >= 3){ score += cutNow * 2; popups.push({x:W / 2, y:H / 2, t:900, txt:`${cutNow} 連切！ +${cutNow * 2}`}); A.beep(988, .25, .1, "triangle"); } drag = false; last = null; paintStats(); };
  cv.addEventListener("pointerup", up); cv.addEventListener("pointercancel", up);
  const launch = () => {
    const bomb = Math.random() < Math.min(.3, .1 + score * .002), f = pick(FRUITS), x = rand(60, W - 60), tx = clamp(W / 2 + rand(-80, 80), 40, W - 40);
    const vy = -rand(620, 760), tm = -2 * vy / GRAV; items.push({x, y:H + 30, vx:(tx - x) / tm, vy, r:bomb ? 22 : f.r, f, bomb, rot:rand(0, 6), vr:rand(-3, 3)});
  };
  const update = dt => {
    t += dt; const s = dt / 1000; if(over) return;
    spawnIn -= s; if(spawnIn <= 0){ const n = 1 + (Math.random() < Math.min(.6, score * .01) ? 1 + Math.floor(Math.random() * 2) : 0); for(let i = 0; i < n; i++) launch(); spawnIn = Math.max(.55, 1.3 - score * .012) + rand(0, .4); }
    for(const it of items){ it.vy += GRAV * s; it.x += it.vx * s; it.y += it.vy * s; it.rot += it.vr * s; if(it.y > H + 40 && it.vy > 0 && !it.dead){ it.dead = true; if(!it.bomb){ lives--; A.beep(150, .25, .1, "sawtooth"); A.buzz(100); paintStats(); if(lives <= 0){ over = true; A.later(() => finish("slice", score, "漏掉太多水果"), 400); return; } } } }
    items = items.filter(it => !(it.dead && it.y > H + 40)); items = items.filter(it => !it.dead || it.y < H + 40);
    halves.forEach(h => { h.vy += GRAV * s; h.x += h.vx * s; h.y += h.vy * s; h.life -= dt; }); halves = halves.filter(h => h.life > 0 && h.y < H + 60);
    popups.forEach(p => { p.t -= dt; p.y -= 30 * s; }); popups = popups.filter(p => p.t > 0);
    const now = performance.now(); trail = trail.filter(p => now - p[2] < 180);
  };
  const draw = () => {
    ctx.fillStyle = "#2B1B3F"; ctx.fillRect(0, 0, W, H); ctx.fillStyle = "#3A2756"; ctx.fillRect(0, H - 60, W, 60);
    for(const it of items){ if(it.dead) continue; ctx.save(); ctx.translate(it.x, it.y); ctx.rotate(it.rot);
      if(it.bomb){ ctx.fillStyle = "#14142F"; ctx.beginPath(); ctx.arc(0, 0, it.r, 0, 7); ctx.fill(); ctx.strokeStyle = "#FF5A6E"; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(8, -it.r + 2); ctx.quadraticCurveTo(14, -it.r - 8, 20, -it.r - 4); ctx.stroke(); ctx.fillStyle = "#FF5A6E"; ctx.beginPath(); ctx.arc(0, 0, 6, 0, 7); ctx.fill(); }
      else { ctx.fillStyle = it.f.c; ctx.beginPath(); ctx.arc(0, 0, it.r, 0, 7); ctx.fill(); ctx.fillStyle = "rgba(255,255,255,.35)"; ctx.beginPath(); ctx.arc(-it.r * .35, -it.r * .35, it.r * .28, 0, 7); ctx.fill(); ctx.fillStyle = "#3DCB7A"; ctx.beginPath(); ctx.ellipse(2, -it.r, 7, 3.5, -.4, 0, 7); ctx.fill(); }
      ctx.restore(); }
    for(const h of halves){ ctx.save(); ctx.globalAlpha = clamp(h.life / 500, 0, 1); ctx.translate(h.x, h.y); ctx.rotate(h.a + h.life / 300 * h.side); ctx.fillStyle = h.c; ctx.beginPath(); ctx.arc(0, 0, h.r, h.side > 0 ? 0 : Math.PI, h.side > 0 ? Math.PI : 0); ctx.closePath(); ctx.fill(); ctx.restore(); }
    for(const p of popups){ ctx.globalAlpha = clamp(p.t / 400, 0, 1); ctx.fillStyle = "#FFD84A"; ctx.font = "900 20px system-ui,sans-serif"; ctx.textAlign = "center"; ctx.fillText(p.txt, p.x, p.y); ctx.globalAlpha = 1; }
    if(trail.length > 1){ ctx.lineCap = "round"; ctx.lineJoin = "round"; for(let i = 1; i < trail.length; i++){ ctx.strokeStyle = `rgba(255,255,255,${i / trail.length})`; ctx.lineWidth = 2 + 6 * i / trail.length; ctx.beginPath(); ctx.moveTo(trail[i - 1][0], trail[i - 1][1]); ctx.lineTo(trail[i][0], trail[i][1]); ctx.stroke(); } }
  };
  runLoop(update, draw);
}

/* ---------- 4. 跳跳高樓 ---------- */
function gJump(){
  A.cleanup();
  const W = 360, H = 480, GRAV = 1500;
  let plats = [], cam = 0, best = 0, over = false, t = 0, targetX = W / 2, started = false;
  const me = {x:W / 2, y:H - 120, vy:0, face:1};
  const mkPlat = y => { const h = Math.max(0, -y) / 10; const type = Math.random(); const w = 62;
    return {x:rand(10, W - w - 10), y, w, kind:h > 200 && type < .16 ? "move" : h > 80 && type < .3 ? "break" : type > .93 ? "spring" : "norm", vx:rand(40, 90) * (Math.random() < .5 ? 1 : -1), gone:false}; };
  plats.push({x:W / 2 - 40, y:H - 80, w:80, kind:"norm", vx:0, gone:false});
  let top = H - 80; while(top > -H){ top -= rand(60, 100); plats.push(mkPlat(top)); }
  shell("jump", "", "左右拖動（或按方向鍵）控制貓咪，踩平台一直往上跳，掉下去就結束。");
  const {cv, ctx} = setupCanvas(W, H); $("#stage").appendChild(cv);
  const paintStats = () => setStats(`<span>高度 <b>${Math.floor(best / 10)}</b> 公尺</span>`); paintStats();
  const move = e => { const r = cv.getBoundingClientRect(); targetX = (e.clientX - r.left) * (W / r.width); started = true; };
  cv.addEventListener("pointerdown", e => { A.audio(); cv.setPointerCapture && cv.setPointerCapture(e.pointerId); move(e); }); cv.addEventListener("pointermove", move);
  const keys = {}; const kd = e => { keys[e.key] = true; started = true; }, ku = e => { keys[e.key] = false; };
  addEventListener("keydown", kd); addEventListener("keyup", ku); A.onCleanup(() => { removeEventListener("keydown", kd); removeEventListener("keyup", ku); });
  A.dbgJump = () => ({me, plats, best, over});   // 測試用
  const update = dt => {
    t += dt; const s = dt / 1000; if(over) return; if(!started){ return; }
    if(keys.ArrowLeft) targetX -= 420 * s; if(keys.ArrowRight) targetX += 420 * s;
    const dx = targetX - me.x; me.x += clamp(dx, -520 * s, 520 * s); if(Math.abs(dx) > 2) me.face = dx > 0 ? 1 : -1; if(me.x < -14) me.x = W + 14; if(me.x > W + 14) me.x = -14; if(targetX < -14) targetX += W + 28; if(targetX > W + 14) targetX -= W + 28;
    const oldY = me.y; me.vy += GRAV * s; me.y += me.vy * s;
    if(me.vy > 0){ for(const p of plats){ if(p.gone) continue; const py = p.y; if(oldY + 16 <= py + 2 && me.y + 16 >= py && me.x > p.x - 8 && me.x < p.x + p.w + 8){ if(p.kind === "break"){ p.gone = true; p.fall = 1; A.beep(180, .15, .06, "sawtooth"); continue; } me.vy = p.kind === "spring" ? -1180 : -780; me.y = py - 16; A.beep(p.kind === "spring" ? 880 : 520, .06, .07); break; } } }
    // 鏡頭：貓咪升到畫面上方 40% 以上就往上捲
    if(me.y < H * .4){ const d = H * .4 - me.y; me.y = H * .4; plats.forEach(p => { p.y += d; }); best += d; paintStats(); }
    plats.forEach(p => { if(p.kind === "move"){ p.x += p.vx * s; if(p.x < 4 || p.x + p.w > W - 4) p.vx = -p.vx; } if(p.fall){ p.y += 500 * s; } });
    let top2 = Math.min(...plats.filter(p => !p.fall).map(p => p.y)); const gap = Math.min(150, 64 + best / 90);
    while(top2 > -60){ top2 -= rand(gap * .55, gap); plats.push(mkPlat(top2 - best * 0)); }
    plats = plats.filter(p => p.y < H + 40);
    if(me.y > H + 30){ over = true; A.beep(120, .6, .13, "sawtooth"); A.buzz(300); A.later(() => finish("jump", Math.floor(best / 10), "掉下去了"), 500); }
  };
  const draw = () => {
    ctx.fillStyle = "#16163F"; ctx.fillRect(0, 0, W, H); ctx.fillStyle = "#2A2A5A"; for(let i = 0; i < 18; i++) ctx.fillRect((i * 83) % W, ((i * 61 + best * .25) % H), 2, 2);
    for(const p of plats){ ctx.fillStyle = p.kind === "norm" ? "#5CFFA0" : p.kind === "move" ? "#35E0FF" : p.kind === "break" ? "#C98B52" : "#FF4FA3"; roundRect(ctx, p.x, p.y, p.w, 12, 6); ctx.fill(); if(p.kind === "spring"){ ctx.fillStyle = "#FFD84A"; ctx.fillRect(p.x + p.w / 2 - 8, p.y - 8, 16, 8); } if(p.kind === "break"){ ctx.strokeStyle = "#7A4A1E"; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(p.x + 20, p.y); ctx.lineTo(p.x + 26, p.y + 12); ctx.moveTo(p.x + 40, p.y); ctx.lineTo(p.x + 34, p.y + 12); ctx.stroke(); } }
    ctx.save(); ctx.translate(me.x, me.y); ctx.scale(me.face, 1); ctx.fillStyle = "#FF8A5B"; ctx.beginPath(); ctx.arc(0, -2, 15, 0, 7); ctx.fill(); ctx.beginPath(); ctx.moveTo(-12, -10); ctx.lineTo(-9, -24); ctx.lineTo(-2, -15); ctx.fill(); ctx.beginPath(); ctx.moveTo(12, -10); ctx.lineTo(9, -24); ctx.lineTo(2, -15); ctx.fill(); ctx.fillStyle = "#14142F"; ctx.beginPath(); ctx.arc(-5, -3, 2.2, 0, 7); ctx.arc(6, -3, 2.2, 0, 7); ctx.fill(); ctx.restore();
    if(!started){ ctx.fillStyle = "#EEEBFF"; ctx.font = "800 18px system-ui,sans-serif"; ctx.textAlign = "center"; ctx.fillText("拖動畫面開始", W / 2, H / 2); }
  };
  runLoop(update, draw);
}

/* ---------- 註冊 ---------- */
Object.assign(A.GAMES, {
  link:{name:"連連看", tag:"找出一樣的圖案，連線轉彎不超過兩次", dir:1, group:"retro", fmt:v => v + " 分", col:"#5CFFA0", ic:'<rect x="6" y="10" width="14" height="14" rx="3" fill="#F4F1FF"/><circle cx="13" cy="17" r="4" fill="#FF4FA3"/><rect x="28" y="24" width="14" height="14" rx="3" fill="#F4F1FF"/><circle cx="35" cy="31" r="4" fill="#FF4FA3"/><path d="M20 17h8v14" fill="none" stroke="#FFD84A" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>'},
  klotski:{name:"華容道", tag:"滑動方塊，把曹操送到出口", dir:1, group:"retro", fmt:v => v + " 題", col:"#FFB020", ic:'<rect x="9" y="6" width="30" height="36" rx="3" fill="#3C2E1B"/><rect x="17" y="8" width="14" height="14" rx="3" fill="#FFB020"/><rect x="11" y="24" width="14" height="7" rx="2" fill="#FF5A6E"/><rect x="27" y="24" width="10" height="14" rx="2" fill="#35A8E0"/><rect x="17" y="40" width="14" height="3" fill="#5CFFA0"/>'},
  slice:{name:"切水果", tag:"滑過水果切開它，別碰炸彈", dir:1, group:"retro", fmt:v => v + " 分", col:"#FF9F4A", ic:'<circle cx="19" cy="26" r="12" fill="#FF5A6E"/><path d="M8 40L40 8" stroke="#fff" stroke-width="4" stroke-linecap="round"/><circle cx="34" cy="14" r="6" fill="#14142F" stroke="#FF5A6E" stroke-width="2"/>'},
  jump:{name:"跳跳高樓", tag:"踩平台一直往上跳，別掉下去", dir:1, group:"retro", fmt:v => v + " 公尺", col:"#5CFFA0", ic:'<rect x="8" y="36" width="20" height="5" rx="2.5" fill="#5CFFA0"/><rect x="24" y="22" width="18" height="5" rx="2.5" fill="#35E0FF"/><circle cx="18" cy="26" r="7" fill="#FF8A5B"/><path d="M13 21l1-6 4 3zM23 21l-1-6-4 3z" fill="#FF8A5B"/>'}
});
Object.assign(A.RUN, {link:gLink, klotski:gKlotski, slice:gSlice, jump:gJump});
A.menu();
})();
