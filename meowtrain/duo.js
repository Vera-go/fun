/* =========================================================
   喵喵列車長：雙人連線（許願池 #22）
   - 一個人開房間拿到 4 位數房間碼，朋友用自己的電腦或手機輸入房間碼加入
   - 用 Supabase Realtime 的 broadcast 傳資料（只在線上傳，不存進資料庫）
   - 房主的瀏覽器負責跑遊戲：兩列火車、流浪貓、食物都在房主這邊算，每走一步把畫面傳給朋友；
     朋友只把按鍵傳給房主，再把收到的畫面畫出來
   - 規則：限時 3 分鐘，分數高的贏
     撞到對方的隊伍：對方從被撞的那一隻開始，後面的貓都會被撞跑（撞的人每隻 +5 分）
     撞牆、撞到自己、兩個列車長對撞：後面一半的貓嚇跑，剩下的過一下在安全的地方重新出發
   這個檔案用到 index.html 裡的畫圖、音效、存檔函式（drawCat、toast、save…）
   ========================================================= */
const DUO = (() => {
  const DC = 17, DR = 15;            // 雙人棋盤比較大
  const MATCH = 180000, COUNT = 3000; // 比賽 3 分鐘、開始前倒數 3 秒
  const PCOL = ["#FF7A2F", "#2F7BE8"], PSHADOW = ["rgba(255,122,47,.5)", "rgba(47,123,232,.5)"], PROLE = ["房主", "朋友"];
  const BIDX = Object.fromEntries(BREEDS.map((b, i) => [b.id, i]));
  const FOOD_KEYS = Object.keys(FOODS);
  const TAB = Math.random().toString(36).slice(2, 8);   // 同一個瀏覽器開兩個分頁也分得出來
  const D = {on:false};
  let sb = null, ch = null, code = "", role = "", me = null, mate = null, status = "", joinTimer = 0;
  let phase = "home";          // home 還沒進房間 / joining 加入中 / lobby 在房間裡 / match 比賽中 / result 看結果
  let M = null;                // 房主：比賽的資料
  let V = null, vAt = 0, lastSeq = -1, names = ["", ""];   // 朋友：收到的畫面
  let result = null, applied = "";
  let flee = [], pops = [];    // 被撞跑的貓、飄出來的分數（兩邊各自畫）
  let lastSent = 0, simAt = 0;
  const $ = id => document.getElementById(id);
  const myIdx = () => role === "host" ? 0 : 1;

  // ---------- 連線 ----------
  function loadSb(){
    if(sb) return Promise.resolve(sb);
    return new Promise((ok, no) => {
      const go = () => { sb = window.supabase.createClient(SUPA_URL, SUPA_KEY, {realtime:{params:{eventsPerSecond:20}}}); ok(sb); };
      if(window.supabase) return go();
      const s = document.createElement("script");
      s.src = "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.45.4/dist/umd/supabase.js";
      s.onload = go; s.onerror = () => no(new Error("load"));
      document.head.appendChild(s);
    });
  }
  function readName(){
    const el = $("duoName"), v = (el ? el.value : save.duoName || "").trim();
    if(!v || v.length > 8){ status = "先輸入你的名字（1～8 個字），對方會看到。"; showPanel(); setTimeout(() => $("duoName") && $("duoName").focus(), 0); return false; }
    save.duoName = v; persist(); return true;
  }
  async function host(){
    if(!readName()) return;
    status = "建立房間中⋯⋯"; showPanel();
    try{ await loadSb(); }catch(e){ status = "連線工具載入失敗，請檢查網路。"; return showPanel(); }
    role = "host"; code = String(1000 + Math.floor(Math.random() * 9000));
    status = ""; connect();
  }
  async function join(){
    if(!readName()) return;
    const c = ($("duoCode") ? $("duoCode").value : "").trim();
    if(!/^\d{4}$/.test(c)){ status = "房間碼是 4 位數字。"; return showPanel(); }
    status = ""; phase = "joining"; code = c; showPanel();
    try{ await loadSb(); }catch(e){ status = "連線工具載入失敗，請檢查網路。"; phase = "home"; return showPanel(); }
    role = "guest"; connect();
    clearTimeout(joinTimer);
    joinTimer = setTimeout(() => { if(phase === "joining"){ leaveRoom(); status = `找不到房間 ${c}。請確認房間碼，或請朋友再開一次房間。`; showPanel(); } }, 6000);
  }
  function connect(){
    if(role === "host") phase = "lobby";
    me = {key:save.client + "-" + TAB, name:save.duoName, leader:save.leader, role, at:Date.now()};
    mate = null;
    ch = sb.channel("meowtrain-duo:" + code, {config:{broadcast:{self:false}, presence:{key:me.key}}});
    ch.on("presence", {event:"sync"}, onPresence);
    ch.on("broadcast", {event:"m"}, ({payload}) => onMsg(payload));
    ch.subscribe(s => {
      if(s === "SUBSCRIBED") ch.track(me);
      else if((s === "CHANNEL_ERROR" || s === "TIMED_OUT") && phase !== "home"){ leaveRoom(); status = "連線失敗，請檢查網路後再試一次。"; showPanel(); }
    });
    showPanel();
  }
  function leaveRoom(){
    clearTimeout(joinTimer);
    if(ch){ const c = ch; ch = null; c.untrack().catch(() => {}); sb.removeChannel(c); }
    mate = null; M = null; V = null; phase = "home"; setMusic(false);
  }
  const send = m => { if(ch) ch.send({type:"broadcast", event:"m", payload:m}); };
  function onPresence(){
    if(!ch) return;
    const st = ch.presenceState();
    const others = Object.entries(st).filter(([k]) => k !== me.key).map(([k, a]) => ({key:k, ...a[a.length - 1]}));
    if(role === "host"){
      // 剛好撞到別人已經在用的房間碼：換一個
      if(others.some(o => o.role === "host" && o.at < me.at)){ leaveRoom(); code = String(1000 + Math.floor(Math.random() * 9000)); connect(); return; }
      const had = mate;
      mate = others.filter(o => o.role === "guest").sort((a, b) => a.at - b.at)[0] || null;
      if(had && !mate){
        toast(`${had.name}離開了房間`, "", "bad");
        if(phase === "match" && M && !M.over) finish("left");
      }
      if(phase === "lobby" || phase === "result") showPanel();
      return;
    }
    const h = others.find(o => o.role === "host");
    if(phase === "joining"){
      if(!h) return;   // 等房主出現（最多 6 秒）
      if(others.some(o => o.role === "guest" && o.at < me.at)){ leaveRoom(); status = `房間 ${code} 已經有兩個人了。`; return showPanel(); }
      clearTimeout(joinTimer); phase = "lobby"; mate = h; meow("happy"); showPanel(); return;
    }
    if(!h){
      if(phase === "home") return;
      const wasResult = phase === "result";
      leaveRoom(); status = wasResult ? "房主離開了房間。" : "房主離開了房間，比賽結束。";
      if(wasResult) phase = "result";   // 結果畫面留著，只是不能回房間了
      showPanel(); return;
    }
    mate = h;
    if(phase === "lobby") showPanel();
  }
  function onMsg(m){
    if(role === "host"){ if(m.t === "in" && M && !M.over) applyTurn(M.P[1], m.d); return; }
    if(m.t === "start"){
      phase = "match"; V = null; lastSeq = -1; flee = []; pops = []; names = m.names; result = null;
      hideOverlay(); setMusic(true);
    }else if(m.t === "s"){
      if(m.q <= lastSeq || phase !== "match") return;
      lastSeq = m.q; V = m; vAt = performance.now();
      m.ev.forEach(playEvent);
    }else if(m.t === "over"){ showResult(m.res, 1); }
  }

  // ---------- 畫面上的面板 ----------
  function card(p, i, crown){
    if(!p) return `<div class="duop empty">等朋友加入⋯⋯</div>`;
    return `<div class="duop" style="--c:${PCOL[i]}" data-cat="${esc(p.leader)}">${crown ? `<em class="crown">${crown}</em>` : ""}<b>${esc(p.name)}</b><span>${PROLE[i]}${(role === "host") === (i === 0) ? "（你）" : ""}</span></div>`;
  }
  function fillCats(){
    panel.querySelectorAll("[data-cat]").forEach(el => el.prepend(miniCanvas(56, (c, px) => drawCat(c, px / 2, px * .56, px * .9, BY[el.dataset.cat] ? el.dataset.cat : "orange", {leader:true, mood:"happy"}))));
  }
  const RULES = `<h3 class="sh">雙人規則</h3><ol class="help">
      <li>比賽 <b>3 分鐘</b>，時間到分數高的贏（分數一樣比隊伍長度）。</li>
      <li>撞到<b>對方的隊伍</b>：對方從被撞的那隻開始，後面的貓都會被撞跑，你每撞跑一隻 +5 分。</li>
      <li>撞到<b>牆壁、自己的隊伍</b>，或兩個列車長<b>正面對撞</b>：後面一半的貓會嚇跑，剩下的過 2 秒在安全的地方重新出發。</li>
      <li><b>金色貓罐罐</b>：+15 分，還有一次<b>保護罩</b>，下次撞到一隻貓都不會跑掉。</li>
      <li>收編、吃東西、送養的分數跟單人一樣。收編的貓會記進圖鑑，送養的隻數會加進<b>送養排行榜</b>。</li>
    </ol>`;
  function showPanel(){
    if(phase === "match"){ hideOverlay(); return; }
    if(phase === "result" && result) return showResult(result.res, result.idx);
    const msg = status ? `<p class="duomsg">${esc(status)}</p>` : "";
    if(phase === "home" || phase === "joining"){
      showOverlay(`<h2>雙人連線</h2>
        <p class="muted">兩個人各自用自己的電腦或手機打開這個網頁：一個人開房間，另一個人輸入房間碼加入。</p>
        <div class="duoform"><label>你的名字<input id="duoName" maxlength="8" value="${esc(save.duoName || save.name || "")}" placeholder="暱稱（1～8 個字）" autocomplete="nickname"></label></div>
        <div class="btns" style="margin-top:4px"><button class="btn acc" data-act="duohost">開新房間</button></div>
        <div class="duoform"><label>朋友的房間碼<input id="duoCode" inputmode="numeric" maxlength="4" value="${esc(D.prefill || "")}" placeholder="4 位數字"></label><button class="btn small" data-act="duojoin">${phase === "joining" ? "加入中⋯⋯" : "加入"}</button></div>
        ${msg}${RULES}
        <div class="btns"><button class="btn" data-act="menu">回單人模式</button></div>`);
      return;
    }
    // 房間裡
    const hostP = role === "host" ? me : mate, guestP = role === "host" ? mate : me;
    showOverlay(`<h2>雙人連線・房間碼</h2>
      <p class="duocode">${code}</p>
      <p class="muted">${role === "host" ? (mate ? "朋友到了！準備好就按「開始比賽」。" : "把房間碼告訴朋友，請他在「雙人連線」輸入房間碼加入。") : "已經加入房間，等房主按開始。"}</p>
      <div class="duoplayers">${card(hostP, 0)}<b class="vs">VS</b>${card(guestP, 1)}</div>
      ${msg}
      <div class="btns">${role === "host" ? `<button class="btn acc" data-act="duostart" ${mate ? "" : "disabled"}>開始比賽</button>` : ""}<button class="btn" data-act="duocopy">複製邀請連結</button><button class="btn" data-act="duoleave">離開房間</button></div>
      <p class="muted small">列車長是你在單人模式選的那隻貓；你是${role === "host" ? "橘色" : "藍色"}的隊伍。</p>
      ${RULES}`);
    fillCats();
  }
  D.panel = showPanel;
  D.open = (prefill = "") => {
    D.on = true; state = "duo"; setMusic(false);
    COLS = DC; ROWS = DR; resize();
    if(prefill) D.prefill = prefill;
    if(!ch){ phase = "home"; }
    showPanel();
  };
  D.leave = () => {
    leaveRoom(); D.on = false; status = ""; D.prefill = "";
    COLS = 13; ROWS = 15; resize(); updateHud();
  };
  D.act = act => {
    audio();
    if(act === "duo") return D.open();
    if(act === "duohost") return host();
    if(act === "duojoin") return join();
    if(act === "duostart") return startMatch();
    if(act === "duolobby"){ phase = "lobby"; status = ""; return showPanel(); }
    if(act === "duoleave"){ leaveRoom(); status = ""; return showPanel(); }
    if(act === "duocopy"){
      const url = location.origin + location.pathname + "?room=" + code;
      const done = ok => { status = ok ? "邀請連結複製好了，貼給朋友就可以直接加入。" : `邀請連結：${url}`; showPanel(); };
      if(navigator.clipboard) navigator.clipboard.writeText(url).then(() => done(true), () => done(false)); else done(false);
    }
  };
  panel.addEventListener("keydown", e => {
    if(e.key !== "Enter") return;
    if(e.target.id === "duoCode"){ e.preventDefault(); join(); }
    else if(e.target.id === "duoName" && $("duoCode") && $("duoCode").value.trim()){ e.preventDefault(); join(); }
  });

  // ---------- 房主：比賽 ----------
  const mkCat = (x, y, breed) => ({x, y, px:x, py:y, breed, fat:0, happy:0, scared:0});
  function startMatch(){
    if(role !== "host" || !mate) return;
    const mk = (p, i) => {
      const x = i ? DC - 4 : 3, y = i ? DR - 5 : 4, dir = i ? "left" : "right";
      return {name:p.name, leader:BY[p.leader] ? p.leader : "orange", train:[mkCat(x, y, BY[p.leader] ? p.leader : "orange")], dir, moveDir:dir, queue:[],
        score:0, adopted:0, knocked:0, best:1, collected:{}, gave:{}, shield:false, down:0, pending:false, want:null};
    };
    M = {t:0, acc:0, tickMs:230, seq:0, P:[mk(me, 0), mk(mate, 1)], strays:[], foods:[], can:null, adopter:null, adoptTimer:14000, canTimer:16000, ev:[], over:false};
    mSpawnStray(); mSpawnStray(); for(let i = 0; i < 3; i++) mSpawnFood();
    M.ev = [];
    phase = "match"; result = null; flee = []; pops = []; simAt = 0; status = "";
    names = M.P.map(p => p.name);
    send({t:"start", names});
    hideOverlay(); setMusic(true);
    sendState();
  }
  function ev(e){ M.ev.push(e); playEvent(e); }
  function playEvent(e){
    if(e.k === "toast") toast(e.m, e.s || "", e.c || "");
    else if(e.k === "sfx"){ if(SFX[e.n]) SFX[e.n](); }
    else if(e.k === "meow") meow(e.n);
    else if(e.k === "pop") pops.push({x:e.x, y:e.y, text:"+" + e.p, color:e.c, t0:performance.now()});
    else if(e.k === "flee") e.cats.forEach(([x, y, bi]) => {
      const a = Math.random() * Math.PI * 2, sp = 3 + Math.random() * 3;
      flee.push({x, y, breed:BREEDS[bi].id, vx:Math.cos(a) * sp, vy:Math.sin(a) * sp - 2, spin:(Math.random() - .5) * 6, t0:performance.now()});
    });
  }
  const fleeEv = cats => ({k:"flee", cats:cats.map(c => [c.x, c.y, BIDX[c.breed]])});
  function mOccupied(x, y){
    return M.P.some(p => p.train.some(c => c.x === x && c.y === y)) || M.strays.some(s => s.x === x && s.y === y) ||
      M.foods.some(f => f.x === x && f.y === y) || (M.can && M.can.x === x && M.can.y === y) || (M.adopter && M.adopter.x === x && M.adopter.y === y);
  }
  function mFree(){
    for(let k = 0; k < 300; k++){
      const x = Math.floor(Math.random() * DC), y = Math.floor(Math.random() * DR);
      if(mOccupied(x, y)) continue;
      // 不要直接生在列車長正前方 2 格內
      if(M.P.some(p => { const h = p.train[0], [dx, dy] = DIRS[p.dir]; return [1, 2].some(s => h.x + dx * s === x && h.y + dy * s === y); })) continue;
      return {x, y};
    }
    return null;
  }
  function mSpawnStray(){
    const p = mFree(); if(!p) return false;
    const n = Math.max(...M.P.map(q => q.train.length));
    const top = TIERS.reduce((m, t, i) => n >= t.need ? i : m, 0);
    const tw = TIERS.slice(0, top + 1).map(t => t.weight);
    let roll = Math.random() * tw.reduce((a, b) => a + b, 0), tier = 0;
    while(roll >= tw[tier]){ roll -= tw[tier]; tier++; }
    const cand = BREEDS.filter(b => b.tier === tier), b = cand[Math.floor(Math.random() * cand.length)];
    M.strays.push({...p, breed:b.id, tier, until:TIERS[tier].leave ? M.t + TIERS[tier].leave : 0});
    if(tier >= 2) ev({k:"toast", m:`附近出現了${TIERS[tier].name}的${b.name}！`, s:`${TIERS[tier].leave / 1000} 秒內沒人收編，牠就會跑走。`, c:"gold"});
    return true;
  }
  function mSpawnFood(){
    const p = mFree(); if(!p) return;
    const list = Math.random() < .62 ? GOOD_FOODS : BAD_FOODS;
    M.foods.push({...p, kind:list[Math.floor(Math.random() * list.length)]});
  }
  function mSpawnAdopter(){
    const kinds = [...new Set(M.P.flatMap(p => p.train.slice(1).map(c => c.breed)))];
    const p = mFree();
    if(!kinds.length || !p){ M.adoptTimer = 5000; return; }
    const n = Math.min(kinds.length, kinds.length >= 3 && Math.random() < .5 ? 2 : 1), want = [];
    while(want.length < n) want.push(kinds.splice(Math.floor(Math.random() * kinds.length), 1)[0]);
    const s = Math.floor(Math.random() * ADOPTERS.length), A = ADOPTERS[s];
    M.adopter = {...p, ...A, s, want, until:M.t + 20000};
    ev({k:"toast", m:`${A.who}想來領養貓！`, s:`想要：${want.map(id => BY[id].name).join("、")}。誰先走到他那裡、隊伍裡又有，就能送養。`, c:"gold"});
  }
  // 轉彎：跟單人一樣，剛開始走這一格就直接轉，不然先排隊（最多 2 個）
  function applyTurn(p, d){
    if(!DIRS[d]) return;
    if(M.t < COUNT){ p.dir = p.moveDir = d; return; }
    if(p.down){ p.want = d; if(!p.pending) p.dir = p.moveDir = d; return; }
    if(!p.queue.length && M.acc / M.tickMs < .35 && d !== p.dir && d !== OPP[p.moveDir]){ p.dir = d; return; }
    const last = p.queue.length ? p.queue[p.queue.length - 1] : p.dir;
    if(d === last || d === OPP[last]) return;
    if(p.queue.length < 2) p.queue.push(d);
  }
  function hostSim(){
    const now = performance.now(), dt = simAt ? Math.min(1000, now - simAt) : 0;
    simAt = now;
    if(M && !M.over) hostFrame(dt);
  }
  function hostFrame(dt){
    M.t += dt;
    M.P.forEach(p => p.train.forEach(c => { c.happy = Math.max(0, c.happy - dt); c.scared = Math.max(0, c.scared - dt); }));
    if(M.t >= COUNT){
      // 撞到以後：先暈一下，再搬到安全的地方閃爍，然後重新出發
      M.P.forEach(p => { if(p.down){ p.down = Math.max(0, p.down - dt); if(p.pending && p.down <= 1000) respawn(p); } });
      M.strays = M.strays.filter(s => { if(s.until && M.t > s.until){ ev({k:"toast", m:`${BY[s.breed].name}跑走了……`, c:"bad"}); return false; } return true; });
      while(M.strays.length < 2 && mSpawnStray());
      if(M.adopter){ if(M.t > M.adopter.until){ ev({k:"toast", m:`${M.adopter.who}等不到，先離開了`, s:"下一位領養人很快就會來。", c:"bad"}); M.adopter = null; M.adoptTimer = 8000; } }
      else if(M.P.some(p => p.train.length >= 4)){ M.adoptTimer -= dt; if(M.adoptTimer <= 0) mSpawnAdopter(); }
      if(!M.can){ M.canTimer -= dt; if(M.canTimer <= 0){ const p = mFree(); if(p){ M.can = {...p, until:M.t + 9000}; ev({k:"toast", m:"金色貓罐罐出現了！", s:"吃到 +15 分，還有一次保護罩。9 秒後會消失。", c:"gold"}); } M.canTimer = 20000 + Math.random() * 10000; } }
      else if(M.t > M.can.until) M.can = null;
      // 越後面走越快：每格 0.23 秒 → 0.17 秒
      M.tickMs = 230 - 60 * Math.min(1, (M.t - COUNT) / MATCH);
      M.acc += dt;
      while(M.acc >= M.tickMs && !M.over){ M.acc -= M.tickMs; tick(); }
      if(M.t >= COUNT + MATCH && !M.over) return finish("time");
    }
    if(M.t - lastSent > 250) sendState();
  }
  function tick(){
    M.P.forEach(p => p.train.forEach(c => { c.px = c.x; c.py = c.y; }));
    const moves = M.P.map((p, i) => { if(p.down) return null; const [dx, dy] = DIRS[p.dir], h = p.train[0]; return {p, i, nx:h.x + dx, ny:h.y + dy}; });
    const grows = mv => !!mv && M.strays.some(s => s.x === mv.nx && s.y === mv.ny);
    const crashes = [], cuts = [];
    moves.forEach(mv => {
      if(!mv) return;
      const {p, i, nx, ny} = mv;
      if(nx < 0 || ny < 0 || nx >= DC || ny >= DR){ crashes.push([i, "wall"]); return; }
      const own = (grows(mv) ? p.train : p.train.slice(0, -1)).slice(1);
      if(own.some(c => c.x === nx && c.y === ny)){ crashes.push([i, "self"]); return; }
      const j = 1 - i, o = M.P[j], om = moves[j];
      if(o.down || !om) return;   // 對方在重新出發中：穿過去不算
      const oh = o.train[0];
      // 兩個列車長對撞：走到同一格，或是互相交換位置
      if((om.nx === nx && om.ny === ny) || (nx === oh.x && ny === oh.y && om.nx === p.train[0].x && om.ny === p.train[0].y)){ crashes.push([i, "head"]); return; }
      // 撞到對方的隊伍
      const body = grows(om) ? o.train : o.train.slice(0, -1);
      const k = body.findIndex((c, idx) => idx > 0 && c.x === nx && c.y === ny);
      if(k > 0) cuts.push([j, k, i, nx, ny]);
    });
    cuts.forEach(([j, k, by, x, y]) => {
      const o = M.P[j], p = M.P[by], gone = o.train.splice(k);
      p.score += gone.length * 5; p.knocked += gone.length;
      ev(fleeEv(gone)); ev({k:"sfx", n:"bad"}); ev({k:"meow", n:"scared"});
      ev({k:"pop", x, y, p:gone.length * 5, c:PCOL[by]});
      ev({k:"toast", m:`${p.name}撞到${o.name}的隊伍！`, s:`${o.name}的 ${gone.length} 隻貓被撞跑了，${p.name} +${gone.length * 5} 分。`, c:"bad"});
    });
    crashes.forEach(([i, kind]) => crashP(i, kind));
    moves.forEach(mv => { if(mv && !M.P[mv.i].down) moveP(mv); });
    sendState();
  }
  function moveP({p, i, nx, ny}){
    const tail = p.train[p.train.length - 1], tx = tail.x, ty = tail.y;
    for(let k = p.train.length - 1; k > 0; k--){ p.train[k].x = p.train[k - 1].x; p.train[k].y = p.train[k - 1].y; }
    const h = p.train[0]; h.x = nx; h.y = ny; p.moveDir = p.dir;
    while(p.queue.length){ const d = p.queue.shift(); if(d !== OPP[p.moveDir]){ p.dir = d; break; } }
    // 收編流浪貓
    const si = M.strays.findIndex(s => s.x === nx && s.y === ny);
    if(si >= 0){
      const st = M.strays.splice(si, 1)[0], b = BY[st.breed], T = TIERS[st.tier];
      const c = mkCat(tx, ty, b.id); c.happy = 1500; p.train.push(c);
      p.collected[b.id] = (p.collected[b.id] || 0) + 1; p.score += T.score; p.best = Math.max(p.best, p.train.length);
      ev({k:"pop", x:nx, y:ny, p:T.score, c:PCOL[i]}); ev({k:"meow", n:"happy"});
      ev({k:"toast", m:`${p.name}收編了一隻${st.tier ? T.name + "的" : ""}${b.name}！`, s:"", c:st.tier >= 2 ? "gold" : ""});
      mSpawnStray();
    }
    // 送養
    const A = M.adopter;
    if(A && A.x === nx && A.y === ny){
      const gone = [];
      A.want.forEach(id => { for(let k = p.train.length - 1; k > 0; k--) if(p.train[k].breed === id){ p.train.splice(k, 1); gone.push(id); break; } });
      if(gone.length){
        M.adopter = null; M.adoptTimer = 12000 + Math.random() * 6000;
        gone.forEach(id => { p.gave[id] = (p.gave[id] || 0) + 1; });
        p.adopted += gone.length; p.score += gone.length * 20;
        ev({k:"pop", x:nx, y:ny, p:gone.length * 20, c:"#D2449A"}); ev({k:"sfx", n:"can"}); ev({k:"meow", n:"happy"});
        ev({k:"toast", m:`${p.name}把${gone.map(id => BY[id].name).join("、")}送養給${A.who}了！`, s:`送養 +${gone.length * 20} 分，${p.name}這一局送養了 ${p.adopted} 隻。`, c:"gold"});
      }else if(!A.told || !A.told[i]){
        A.told = A.told || {}; A.told[i] = true;
        ev({k:"toast", m:`${p.name}的隊伍裡沒有${A.want.map(id => BY[id].name).join("、")}`, s:`${A.who}還在等。`, c:"bad"});
      }
    }
    // 吃東西
    const fi = M.foods.findIndex(f => f.x === nx && f.y === ny);
    if(fi >= 0){
      const f = M.foods.splice(fi, 1)[0], F = FOODS[f.kind];
      if(F.good){
        p.score += 5; ev({k:"pop", x:nx, y:ny, p:5, c:"#2E9B4F"}); ev({k:"sfx", n:"good"});
        p.train.forEach(c => c.happy = 1800);
        const fat = p.train.find(c => c.fat > 0); if(fat) fat.fat--;
        ev({k:"toast", m:`${p.name}：${F.msg}`, s:fat ? `${BY[fat.breed].name}瘦回來一點了。` : ""});
      }else{
        p.score += 1; ev({k:"pop", x:nx, y:ny, p:1, c:"#9A8676"}); ev({k:"sfx", n:"bad"});
        const cand = p.train.filter(c => c.fat < 2), n = Math.min(cand.length, 1 + Math.floor(Math.random() * 2));
        for(let k = 0; k < n; k++) cand.splice(Math.floor(Math.random() * cand.length), 1)[0].fat++;
        ev({k:"toast", m:`${p.name}：${F.msg}`, s:n ? "有貓變胖了！" : "", c:"bad"});
      }
      mSpawnFood();
    }
    // 金色貓罐罐
    if(M.can && M.can.x === nx && M.can.y === ny){
      M.can = null; p.score += 15; p.shield = true; M.canTimer = 20000 + Math.random() * 10000;
      ev({k:"pop", x:nx, y:ny, p:15, c:"#C99400"}); ev({k:"sfx", n:"can"});
      ev({k:"toast", m:`${p.name}吃到金色貓罐罐！`, s:"+15 分，還有一次保護罩：下次撞到不會掉貓。", c:"gold"});
    }
    // 前面 2 格有貓（自己或對方的）：那隻貓會害怕
    const [dx, dy] = DIRS[p.dir];
    for(let s = 1; s <= 2; s++){
      const ax = nx + dx * s, ay = ny + dy * s;
      M.P.forEach((q, j) => q.train.forEach((c, k) => { if((j !== i || k > 1) && c.x === ax && c.y === ay) c.scared = 700; }));
    }
  }
  function crashP(i, kind){
    const p = M.P[i], shield = p.shield;
    const lose = shield ? 0 : Math.floor((p.train.length - 1) / 2);
    const gone = lose ? p.train.splice(p.train.length - lose) : [];
    p.shield = false; p.down = 2200; p.pending = true; p.queue = []; p.want = null;
    p.train.forEach(c => c.scared = 1300);
    ev({k:"sfx", n:"crash"}); if(gone.length) ev(fleeEv(gone));
    const what = kind === "wall" ? "撞到牆" : kind === "self" ? "撞到自己的隊伍" : "和對方的列車長正面對撞";
    ev({k:"toast", m:`${p.name}${what}了！`, s:shield ? "保護罩擋住了，一隻貓都沒有跑掉。" : gone.length ? `${gone.length} 隻貓嚇跑了，等一下在安全的地方重新出發。` : "等一下在安全的地方重新出發。", c:"bad"});
  }
  // 重新出發：找一格前面至少 4 格是空的地方，離對方的列車長遠一點；整列貓先疊在同一格，走了就會散開
  function respawn(p){
    p.pending = false;
    const o = M.P.find(q => q !== p), oh = o.train[0];
    const blocked = (x, y) => x < 0 || y < 0 || x >= DC || y >= DR || o.train.some(c => c.x === x && c.y === y);
    const dirs = Object.keys(DIRS);
    let spot = null;
    for(let k = 0; k < 400 && !spot; k++){
      const x = 1 + Math.floor(Math.random() * (DC - 2)), y = 1 + Math.floor(Math.random() * (DR - 2));
      if(Math.abs(x - oh.x) + Math.abs(y - oh.y) < 5 || blocked(x, y) || mOccupied(x, y) && !p.train.some(c => c.x === x && c.y === y)) continue;
      const order = p.want ? [p.want, ...dirs.filter(d => d !== p.want)] : dirs.sort(() => Math.random() - .5);
      for(const d of order){ const [dx, dy] = DIRS[d]; if([1, 2, 3, 4].every(s => !blocked(x + dx * s, y + dy * s))){ spot = {x, y, d}; break; } }
    }
    if(!spot) spot = {x:Math.floor(DC / 2), y:Math.floor(DR / 2), d:"up"};
    p.train.forEach(c => { c.x = c.px = spot.x; c.y = c.py = spot.y; });
    p.dir = p.moveDir = spot.d; p.want = null;
  }
  function finish(reason){
    M.over = true;
    const res = {id:Math.random().toString(36).slice(2), reason,
      P:M.P.map(p => ({name:p.name, leader:p.leader, score:p.score, len:p.train.length, best:Math.max(p.best, p.train.length), adopted:p.adopted, knocked:p.knocked, collected:p.collected, gave:p.gave}))};
    sendState(); send({t:"over", res});
    showResult(res, 0);
  }
  function sendState(){
    if(!M || role !== "host") return;
    lastSent = M.t;
    send({t:"s", q:++M.seq, tm:Math.round(M.t), tk:Math.round(M.tickMs), ac:Math.round(M.acc),
      P:M.P.map(p => ({tr:p.train.map(c => [c.x, c.y, BIDX[c.breed], c.fat, c.scared ? 2 : c.happy ? 1 : 0]), d:p.dir, sc:p.score, ad:p.adopted, sh:p.shield ? 1 : 0, dn:Math.round(p.down), pd:p.pending ? 1 : 0})),
      st:M.strays.map(s => [s.x, s.y, BIDX[s.breed], s.tier, s.until]),
      fd:M.foods.map(f => [f.x, f.y, FOOD_KEYS.indexOf(f.kind)]),
      cn:M.can ? [M.can.x, M.can.y, M.can.until] : 0,
      ap:M.adopter ? [M.adopter.x, M.adopter.y, M.adopter.s, M.adopter.until, M.adopter.want.map(id => BIDX[id])] : 0,
      ev:M.ev});
    M.ev = [];
  }
  // 房主的分頁切到背景時，畫面不會更新，改用計時器繼續跑（瀏覽器大約每秒跑一次）
  setInterval(() => { if(document.hidden && D.on && role === "host" && phase === "match") hostSim(); }, 250);
  addEventListener("pagehide", () => { if(ch) ch.untrack().catch(() => {}); });

  // ---------- 結果 ----------
  function showResult(res, idx){
    phase = "result"; result = {res, idx}; setMusic(false);
    const A = res.P[idx], B = res.P[1 - idx];
    const cmp = A.score - B.score || A.len - B.len;
    if(applied !== res.id){
      applied = res.id;
      // 收編的貓記進圖鑑、送養數加進紀錄（送養排行榜用累計送養數）
      const R = save.rec;
      Object.entries(A.collected).forEach(([id, n]) => { save.seen[id] = (save.seen[id] || 0) + n; R.total += n; });
      Object.entries(A.gave).forEach(([id, n]) => { save.adopt[id] = (save.adopt[id] || 0) + n; });
      R.adopted += A.adopted; R.adoptBest = Math.max(R.adoptBest, A.adopted);
      R.duo = R.duo || {games:0, wins:0}; R.duo.games++; if(cmp > 0) R.duo.wins++;
      persist(); updateRecordBox(); lbStatus = "";
      if(save.name) submitScore();
      if(cmp > 0) SFX.can(); else SFX.bad();
    }
    const winIdx = cmp > 0 ? idx : cmp < 0 ? 1 - idx : -1;
    const title = res.reason === "left" ? `${B.name}離開了，比賽提早結束` : cmp > 0 ? "你贏了！" : cmp < 0 ? `${B.name}贏了！` : "平手！";
    const row = (label, f) => `<tr><td>${label}</td><td><b>${f(res.P[0])}</b></td><td><b>${f(res.P[1])}</b></td></tr>`;
    const showLobby = role === "host" ? !!mate : !!ch;
    showOverlay(`<h2>${title}</h2>
      <div class="duoplayers">${card(res.P[0], 0, winIdx === 0 ? "勝利" : "")}<b class="vs">VS</b>${card(res.P[1], 1, winIdx === 1 ? "勝利" : "")}</div>
      <table class="score duores"><tbody>
        <tr><td></td><td style="color:${PCOL[0]}">${esc(res.P[0].name)}</td><td style="color:${PCOL[1]}">${esc(res.P[1].name)}</td></tr>
        ${row("分數", p => p.score)}${row("最後隊伍", p => p.len + " 隻")}${row("最長隊伍", p => p.best + " 隻")}${row("送養", p => p.adopted + " 隻")}${row("撞跑對方的貓", p => p.knocked + " 隻")}
      </tbody></table>
      <p class="muted small">這一局收編的貓已經記進圖鑑，送養的 ${A.adopted} 隻也加進你的送養紀錄了（累計 ${save.rec.adopted} 隻）。</p>
      <div class="lbbox" id="lbBox"></div>
      <div class="btns">${role === "host" && mate ? `<button class="btn acc" data-act="duostart">再來一局</button>` : ""}${showLobby ? `<button class="btn" data-act="duolobby">回房間</button>` : ""}<button class="btn" data-act="duoleave">離開房間</button></div>
      ${role === "guest" && ch ? `<p class="muted small">房主按「再來一局」就會直接開始。</p>` : ""}`);
    fillCats(); renderLbBox();
  }

  // ---------- 畫面 ----------
  // 兩邊用同一套畫法：房主直接拿比賽資料，朋友拿收到的畫面
  function view(){
    if(role === "host" && M){
      return {t:M.t, k:M.acc / M.tickMs, left:COUNT + MATCH - M.t, lag:false,
        P:M.P.map(p => ({name:p.name, dir:p.dir, down:p.down, pending:p.pending, shield:p.shield, score:p.score,
          train:p.train.map(c => ({x:c.x, y:c.y, breed:c.breed, fat:c.fat, mood:c.scared ? "scared" : c.happy ? "happy" : "normal"}))})),
        strays:M.strays, foods:M.foods, can:M.can, adopter:M.adopter};
    }
    if(!V) return null;
    const el = performance.now() - vAt, t = V.tm + el;
    return {t, k:Math.min(1, (V.ac + el) / V.tk), left:COUNT + MATCH - t, lag:el > 2500,
      P:V.P.map((p, i) => ({name:names[i], dir:p.d, down:p.dn, pending:!!p.pd, shield:!!p.sh, score:p.sc,
        train:p.tr.map(c => ({x:c[0], y:c[1], breed:BREEDS[c[2]].id, fat:c[3], mood:["normal", "happy", "scared"][c[4]]}))})),
      strays:V.st.map(s => ({x:s[0], y:s[1], breed:BREEDS[s[2]].id, tier:s[3], until:s[4]})),
      foods:V.fd.map(f => ({x:f[0], y:f[1], kind:FOOD_KEYS[f[2]]})),
      can:V.cn ? {x:V.cn[0], y:V.cn[1], until:V.cn[2]} : null,
      adopter:V.ap ? {...ADOPTERS[V.ap[2]], x:V.ap[0], y:V.ap[1], until:V.ap[3], want:V.ap[4].map(b => BREEDS[b].id)} : null};
  }
  D.frame = () => {
    if(role === "host" && phase === "match") hostSim();
    render();
  };
  function render(){
    const s = CELL;
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    drawBoard();
    const v = phase === "match" || phase === "result" ? view() : null;
    if(!v){ if(phase === "match") banner("等待房主的畫面⋯⋯", "連線中"); return; }
    const t = v.t;
    v.foods.forEach(f => drawItem(ctx, (f.x + .5) * s, (f.y + .5) * s, s, f.kind, t));
    if(v.can && (v.can.until - t > 2500 || Math.floor(t / 150) % 2)) drawItem(ctx, (v.can.x + .5) * s, (v.can.y + .5) * s, s, "can", t);
    if(v.adopter) drawAdopter(t, v.adopter);
    v.strays.forEach(st => drawStray(st, t));
    v.P.forEach((p, i) => drawTrain(v, i));
    drawFlee(); drawPops();
    scoreBar(v);
    const mine = v.P[myIdx()];
    if(t < COUNT) banner(`比賽開始倒數 ${Math.ceil((COUNT - t) / 1000)}`, `你是${myIdx() ? "藍色" : "橘色"}的隊伍（${mine.name}），先按方向鍵選出發方向`);
    else if(v.lag && phase === "match") banner("連線不穩，等待房主的畫面⋯⋯", "");
    else if(mine.down && phase === "match") banner(mine.pending ? "撞到了！" : "按方向鍵選方向，準備重新出發", "");
    // 側邊的數字顯示自己的
    $("hLen").textContent = mine.train.length; $("hScore").textContent = mine.score; $("hLives").textContent = mine.shield ? "護罩" : "—";
    $("hFat").hidden = true;
  }
  function drawTrain(v, i){
    const p = v.P[i], s = CELL, n = p.train.length, h = p.train[0];
    if(p.down && !p.pending && Math.floor(v.t / 120) % 2) return;   // 重新出發前閃爍
    const moving = !p.down && v.t >= COUNT;
    const k = moving ? v.k : 0, [dx, dy] = DIRS[p.dir] || [0, 0];
    const hx = h.x + dx, hy = h.y + dy;
    const blocked = hx < 0 || hy < 0 || hx >= DC || hy >= DR || p.train.slice(1, -1).some(c => c.x === hx && c.y === hy);
    let headAt = null;
    for(let j = n - 1; j >= 0; j--){
      const c = p.train[j];
      const tx = j ? p.train[j - 1].x : hx, ty = j ? p.train[j - 1].y : hy;
      let kk = j === 0 && blocked ? k * .45 : k;
      if(Math.abs(tx - c.x) + Math.abs(ty - c.y) > 1) kk = 0;
      const x = (c.x + (tx - c.x) * kk + .5) * s, y = (c.y + (ty - c.y) * kk + .5) * s;
      const hop = moving ? Math.abs(Math.sin(v.t / 140 + j * .9)) * s * .05 : 0;
      ctx.fillStyle = PSHADOW[i]; ctx.beginPath(); ctx.ellipse(x, y + s * .36, s * .4, s * .13, 0, 0, Math.PI * 2); ctx.fill();
      const mood = p.down && p.pending ? (j ? "scared" : "dizzy") : c.mood;
      drawCat(ctx, x, y - hop, s * 1.02, c.breed, {mood, fat:c.fat, leader:j === 0, shake:mood === "scared"});
      if(j > 0 && v.adopter && v.adopter.want.includes(c.breed)) heart(ctx, x, y - s * .62 - Math.abs(Math.sin(v.t / 250)) * s * .08, s * .17, "#FF5C8A");
      if(j === 0) headAt = [x, y - hop];
    }
    const [x, y] = headAt;
    if(p.shield){ ctx.save(); ctx.strokeStyle = "#F2B01E"; ctx.lineWidth = Math.max(2, s * .07); ctx.setLineDash([s * .12, s * .08]); ctx.beginPath(); ctx.arc(x, y, s * .62, 0, Math.PI * 2); ctx.stroke(); ctx.restore(); }
    // 名牌
    const label = p.name + (i === myIdx() ? "（你）" : "");
    ctx.save(); ctx.font = `900 ${Math.max(11, s * .34)}px system-ui,"Noto Sans TC",sans-serif`; ctx.textAlign = "center"; ctx.textBaseline = "middle";
    const w = ctx.measureText(label).width + s * .3, ly = Math.max(s * .3, y - s * .95), lx = Math.min(Math.max(x, w / 2 + 2), DC * s - w / 2 - 2);
    ctx.fillStyle = PCOL[i]; ctx.strokeStyle = INK; ctx.lineWidth = 1.5;
    ctx.beginPath(); ctx.roundRect(lx - w / 2, ly - s * .22, w, s * .44, s * .2); ctx.fill(); ctx.stroke();
    ctx.fillStyle = "#fff"; ctx.fillText(label, lx, ly + 1); ctx.restore();
  }
  function drawStray(st, t){
    const s = CELL, T = TIERS[st.tier || 0], bob = Math.sin(t / 250 + st.x) * s * .04;
    const leaving = st.until && st.until - t < 3000;
    if(!leaving || Math.floor(t / 160) % 2) drawCat(ctx, (st.x + .5) * s, (st.y + .5) * s + bob, s * .9, st.breed, {blush:true, glow:T.glow});
    const bx = (st.x + .5) * s + s * .38, by = (st.y + .5) * s - s * .5;
    ctx.save(); ctx.fillStyle = "#fff"; ctx.strokeStyle = INK; ctx.lineWidth = Math.max(1, s * .04);
    ctx.beginPath(); ctx.roundRect(bx - s * .26, by - s * .17, s * .52, s * .3, s * .1); ctx.fill(); ctx.stroke();
    ctx.font = `900 ${s * .2}px system-ui,"Noto Sans TC",sans-serif`; ctx.textAlign = "center"; ctx.textBaseline = "middle";
    ctx.fillStyle = st.tier ? TIER_BG[st.tier] : INK; ctx.fillText(st.tier ? T.name : "喵？", bx, by - s * .02); ctx.restore();
  }
  function drawFlee(){
    const now = performance.now(), s = CELL;
    flee = flee.filter(f => now - f.t0 < 1300);
    flee.forEach(f => {
      const tt = (now - f.t0) / 1000;
      drawCat(ctx, (f.x + .5 + f.vx * tt) * s, (f.y + .5 + f.vy * tt + 3.2 * tt * tt) * s, s, f.breed, {mood:"scared", rot:f.spin * tt, alpha:Math.max(0, 1 - tt / 1.3), shake:true});
    });
  }
  function drawPops(){
    const now = performance.now(), s = CELL;
    pops = pops.filter(p => now - p.t0 < 1000);
    ctx.save(); ctx.textAlign = "center"; ctx.textBaseline = "middle"; ctx.lineJoin = "round";
    pops.forEach(p => {
      const k = (now - p.t0) / 1000, x = (p.x + .5) * s, y = (p.y + .5) * s - s * (.4 + k * .9);
      ctx.globalAlpha = k < .7 ? 1 : 1 - (k - .7) / .3;
      ctx.font = `900 ${s * (.42 + Math.min(k * 4, 1) * .12)}px system-ui,"Noto Sans TC",sans-serif`;
      ctx.lineWidth = s * .12; ctx.strokeStyle = "#fff"; ctx.strokeText(p.text, x, y);
      ctx.fillStyle = p.color; ctx.fillText(p.text, x, y);
    });
    ctx.restore();
  }
  // 最上面的比分和剩下的時間
  function scoreBar(v){
    const W = DC * CELL, bh = Math.max(24, CELL * .85), bw = Math.min(W - 12, 440), x0 = (W - bw) / 2, y0 = 4;
    const left = Math.max(0, Math.min(MATCH, v.left)), sec = Math.ceil(left / 1000);
    const fs = Math.max(12, bh * .5);
    ctx.save(); ctx.globalAlpha = .9; ctx.fillStyle = "#fff"; ctx.strokeStyle = INK; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.roundRect(x0, y0, bw, bh, bh / 2); ctx.fill(); ctx.stroke(); ctx.globalAlpha = 1;
    ctx.textBaseline = "middle"; ctx.font = `900 ${fs}px system-ui,"Noto Sans TC",sans-serif`;
    const cy = y0 + bh / 2 + 1, nm = (p, n) => p.name.length > n ? p.name.slice(0, n) + "…" : p.name;
    ctx.textAlign = "left"; ctx.fillStyle = PCOL[0]; ctx.fillText(`${nm(v.P[0], 5)} ${v.P[0].score}`, x0 + bh * .45, cy);
    ctx.textAlign = "right"; ctx.fillStyle = PCOL[1]; ctx.fillText(`${v.P[1].score} ${nm(v.P[1], 5)}`, x0 + bw - bh * .45, cy);
    ctx.textAlign = "center"; ctx.fillStyle = sec <= 10 && v.t >= COUNT ? "#C2475E" : INK; ctx.fillText(`${Math.floor(sec / 60)}:${String(sec % 60).padStart(2, "0")}`, W / 2, cy);
    ctx.restore();
  }

  // ---------- 操作 ----------
  D.turn = d => {
    audio();
    if(phase !== "match") return;
    if(role === "host"){ if(M && !M.over) applyTurn(M.P[0], d); }
    else send({t:"in", d});
  };

  D.debug = () => ({M, V, phase, role});   // 開發時在主控台看狀態用
  // 打開網址有 ?room=1234：直接到雙人連線，房間碼已經填好
  const rp = new URLSearchParams(location.search).get("room");
  if(/^\d{4}$/.test(rp || "")) setTimeout(() => D.open(rp), 0);
  return D;
})();
