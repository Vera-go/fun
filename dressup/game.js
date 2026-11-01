/* =========================================================
   換裝小舞台：介面、主題挑戰評分、衣櫥（畫圖在 draw.js）
   - 自由搭配：左邊是舞台，右邊選分類、單品、顏色和花紋
   - 主題挑戰：選一個主題穿搭，三位貓咪評審照「符合主題、配色、整體」打分數（1～5 顆星）
     拿到 4 顆星以上可以解鎖那個主題的限定單品（不用抽卡、不用課金）
   - 衣櫥：把喜歡的穿搭存起來，之後可以再穿上；也可以下載成圖片
   進度都存在這個瀏覽器（localStorage）。
   ========================================================= */
const $ = id => document.getElementById(id);
const esc = s => String(s).replace(/[&<>"']/g, c => ({"&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;"}[c]));
const pick = a => a[Math.floor(Math.random() * a.length)];
const HIST = [];   // 復原用：每次換衣服前的樣子
const TOUCH = matchMedia("(hover: none) and (pointer: coarse)").matches;

// ---------- 主題挑戰 ----------
const THEMES = [
  {id:"school",   name:"開學第一天", desc:"第一天上學，穿得整齊又有精神！", bg:"classroom", like:["school", "neat"], dislike:["beach", "festival", "halloween", "fancy"], reward:["eyes", "star"]},
  {id:"beach",    name:"海邊度假",   desc:"陽光、沙灘、海風，穿得清涼又可愛。", bg:"beach", like:["beach", "summer"], dislike:["winter", "warm", "rain", "fancy"], reward:["glasses", "heart"]},
  {id:"winter",   name:"下雪天出門", desc:"外面好冷，要穿得暖暖的才出門。", bg:"snow", like:["winter", "warm"], dislike:["summer", "beach"], reward:["hat", "earmuffs"]},
  {id:"rain",     name:"下雨天上學", desc:"外面下大雨，不要被淋濕了！", bg:"rain", like:["rain"], dislike:["beach", "fancy"], reward:["hand", "rainbow"]},
  {id:"sport",    name:"運動會",     desc:"要跑步、跳遠、拔河，穿得方便好活動。", bg:"park", like:["sport"], dislike:["fancy", "formal"], reward:["neck", "medal"]},
  {id:"party",    name:"畢業舞會",   desc:"今晚是主角！穿上最閃亮的衣服。", bg:"stage", like:["party", "formal", "fancy"], dislike:["sport", "rain"], reward:["hat", "crown"]},
  {id:"market",   name:"逛夜市",     desc:"吃雞排、喝珍奶、撈金魚，穿得輕鬆自在。", bg:"market", like:["snack", "casual"], dislike:["fancy"], reward:["hat", "catears"]},
  {id:"festival", name:"夏日祭典",   desc:"看煙火、逛攤位，來一套祭典風。", bg:"festival", like:["festival", "summer"], dislike:["winter", "warm"], reward:["hat", "foxmask"]},
  {id:"halloween", name:"萬聖節派對", desc:"不給糖就搗蛋！來一套有點神祕的萬聖節造型。", bg:"halloween", like:["halloween", "party"], dislike:["sport", "beach"], reward:["hand", "wand"]},
  {id:"christmas", name:"聖誕節交換禮物", desc:"聖誕夜和朋友交換禮物，穿得溫暖又有節日感。", bg:"xmas", like:["xmas", "winter", "warm"], dislike:["summer", "beach"], reward:["hat", "antlers"]},
];
const TH = Object.fromEntries(THEMES.map(t => [t.id, t]));
const SLOT_LISTS = {top:TOPS, bottom:BOTTOMS, dress:DRESSES, outer:OUTERS, socks:SOCKS, shoes:SHOES, hat:HATS, glasses:GLASSES, hairpin:HAIRPINS, neck:NECKS, scarf:SCARVES, bag:BAGS, hand:HANDS, petwear:PETWEAR, pettoy:PETTOYS};
const KEY_LISTS = {...SLOT_LISTS, eyes:EYES};
const PET_ACC = ["hat", "glasses", "hairpin", "neck", "scarf"];   // 寵物可以戴的配件
const human = L => L.role !== "pet";
const ACC_SLOTS = ["hat", "glasses", "hairpin", "neck", "scarf", "bag", "hand"];

// ---------- 分類 ----------
// type：slot 衣服配件（可以換顏色）、pick 選一種、color 顏色、toggle 開關
const CATS = [
  {id:"role", name:"角色", groups:[{type:"pick", key:"role", label:"選角色（會換成這個角色的基本造型，之後衣服配件都可以自由搭）", list:ROLES, vb:"40 20 220 440"}]},
  {id:"petbody", roles:["pet"], name:"寵物", groups:[
    {type:"pick", key:"species", label:"種類", list:SPECIES, vb:"40 0 220 460"},
    {type:"color", key:"fur", label:"毛色", pal:FUR_PAL},
    {type:"pick", key:"petMouth", label:"嘴巴", list:PET_MOUTHS, vb:"126 236 48 44", only:L => !["hamster", "pig", "penguin", "duck", "koala", "frog"].includes(L.species)},
    {type:"pick", key:"furPat", label:"花色", list:FUR_PATS, only:L => petPats(L).length > 1, keys:petPats, vb:"60 60 180 300"},
    {type:"color", key:"blush", label:"腮紅", pal:BLUSH, none:true},
    {type:"slot", key:"petwear", label:"寵物的衣服", list:PETWEAR, vb:"50 180 200 270"},
    {type:"slot", key:"pettoy", label:"抱著的玩具", list:PETTOYS, vb:"95 360 110 90"}]},
  {id:"hair", roles:["girl", "boy"], name:"髮型", groups:[
    {type:"pick", key:"hairB", label:"髮型", list:HAIRB, vb:"60 26 180 290"},
    {type:"pick", key:"hairF", label:"瀏海", list:HAIRF, vb:"84 44 132 132"},
    {type:"color", key:"hairC", label:"髮色", pal:HAIR_PAL},
    {type:"color", key:"hairTip", label:"挑染（髮尾變色）", pal:TIP_PAL, none:true}]},
  {id:"face", name:"五官", groups:[
    {type:"color", key:"skin", only:human, label:"膚色", pal:SKIN, index:true},
    {type:"pick", key:"faceShape", only:human, label:"臉型", list:FACES, vb:"76 62 148 148"},
    {type:"pick", key:"eyes", label:"眼睛", list:EYES, vb:"100 106 100 64"},
    {type:"color", key:"eyeC", label:"眼睛顏色", pal:EYE_PAL},
    {type:"pick", key:"brows", only:human, label:"眉毛", list:BROWS, vb:"104 98 92 56"},
    {type:"pick", key:"nose", only:human, label:"鼻子", list:NOSES, vb:"124 134 52 36"},
    {type:"pick", key:"mouth", only:human, label:"嘴巴", list:MOUTHS, vb:"118 138 64 44"}]},
  {id:"makeup", roles:["girl", "boy"], name:"妝容", groups:[
    {type:"color", key:"blush", label:"腮紅", pal:BLUSH, none:true},
    {type:"color", key:"lip", label:"口紅", pal:LIPS, none:true},
    {type:"color", key:"shadow", label:"眼影", pal:SHADOW, none:true},
    {type:"pick", key:"eyeliner", label:"眼線（睜開的眼睛才看得到）", list:LINERS, none:true, vb:"100 106 100 64"},
    {type:"toggle", key:"gloss", label:"唇蜜亮光"},
    {type:"toggle", key:"glitter", label:"眼下亮片"},
    {type:"toggle", key:"freckles", label:"雀斑"},
    {type:"pick", key:"sticker", label:"臉頰小貼紙", list:STICKERS, none:true, vb:"100 100 110 90"}]},
  {id:"fun", roles:["girl", "boy"], name:"搞笑", groups:[
    {type:"multi", key:"fun", label:"搞笑的臉（可以選好幾個）", list:FUN, vb:"84 70 132 140"}]},
  {id:"top", roles:["girl", "boy"], name:"上衣", groups:[{type:"slot", key:"top", label:"上衣", list:TOPS, vb:"64 188 172 160"}]},
  {id:"bottom", roles:["girl", "boy"], name:"下身", groups:[{type:"slot", key:"bottom", label:"裙子和褲子", list:BOTTOMS, vb:"56 270 188 188"}]},
  {id:"dress", roles:["girl", "boy"], name:"洋裝", groups:[{type:"slot", key:"dress", label:"洋裝（會蓋過上衣和下身）", list:DRESSES, vb:"36 190 228 268"}]},
  {id:"outer", roles:["girl", "boy"], name:"外套", groups:[{type:"slot", key:"outer", label:"外套", list:OUTERS, vb:"56 190 188 210"}]},
  {id:"feet", roles:["girl", "boy"], name:"鞋襪", groups:[
    {type:"slot", key:"socks", label:"襪子", list:SOCKS, vb:"96 336 108 120"},
    {type:"slot", key:"shoes", label:"鞋子", list:SHOES, vb:"100 364 100 92"}]},
  {id:"acc", name:"配件", groups:[
    {type:"slot", key:"hat", label:"帽子和頭飾", list:HATS, vb:"40 20 220 160"},
    {type:"slot", key:"glasses", label:"眼鏡", list:GLASSES, vb:"96 104 108 72"},
    {type:"slot", key:"hairpin", label:"髮飾", list:HAIRPINS, vb:"156 60 72 64"},
    {type:"slot", key:"neck", label:"項鍊和領結", list:NECKS, vb:"108 194 84 80"},
    {type:"slot", key:"scarf", label:"圍巾", list:SCARVES, vb:"96 186 108 108"},
    {type:"slot", key:"bag", only:human, label:"包包", list:BAGS, vb:"66 196 168 172"},
    {type:"slot", key:"hand", only:human, label:"手上拿的", list:HANDS, vb:"150 30 150 330"}]},
  {id:"pose", roles:["girl", "boy"], name:"動作", groups:[{type:"pick", key:"pose", label:"動作", list:POSES, vb:"40 150 220 220"}]},
  {id:"bg", name:"背景", groups:[
    {type:"pick", key:"bg", label:"背景", list:BGS, full:true},
    {type:"color", key:"bgC", label:"純色背景的顏色", pal:PAL, only:L => L.bg === "plain"},
    {type:"pick", key:"pet", label:"寵物", list:PETS, none:true, vb:"200 356 96 100"}]},
];
const NO_PAT = ["hat", "glasses", "hairpin", "neck", "bag", "hand", "shoes"];

// ---------- 存檔 ----------
const SAVE_KEY = "dressup.v1";
const DEFAULT_LOOK = {role:"girl", species:"cat", fur:"#F6A64A", furPat:"plain", petwear:null, pettoy:null, petMouth:"w", skin:0, hairB:"long", hairF:"blunt", hairC:"#5A3A2A", eyes:"round", eyeC:"#6B4530", brows:"soft", mouth:"smile",
  blush:"#FF9AAE", lip:"", shadow:"", freckles:false, sticker:"", bg:"room", bgC:"#F7D3E0", pet:"", faceShape:"round", nose:"small", hairTip:"", pose:"down", eyeliner:"", gloss:false, glitter:false, fun:[],
  top:{id:"tee", color:"#FFFFFF", pat:"none"}, bottom:{id:"pleat", color:"#2C3E70", pat:"none"}, dress:null, outer:null,
  socks:{id:"short", color:"#FFFFFF", pat:"none"}, shoes:{id:"sneaker", color:"#FFFFFF", pat:"none"},
  hat:null, glasses:null, hairpin:null, neck:null, scarf:null, bag:null, hand:null};
// 換角色時套用的基本造型
const ROLE_PRESET = {
  girl:{hairB:"long", hairF:"blunt", brows:"soft", eyes:"round", blush:"#FF9AAE", top:{id:"tee", color:"#FFFFFF", pat:"none"}, bottom:{id:"pleat", color:"#2C3E70", pat:"none"}, dress:null, outer:null,
    socks:{id:"short", color:"#FFFFFF", pat:"none"}, shoes:{id:"sneaker", color:"#FFFFFF", pat:"none"}, hairpin:null, neck:null},
  pet:{species:"cat", fur:"#F6A64A", furPat:"tabby", eyes:"round", blush:"#FF9AAE", petwear:{id:"bandana", color:"#4C8FE0", pat:"none"}, bag:null, hand:null},
  boy:{hairB:"boycut", hairF:"boyfringe", brows:"bold", eyes:"round", blush:"", lip:"", shadow:"", eyeliner:"", gloss:false, glitter:false, hairTip:"",
    top:{id:"hoodboy", color:"#2C3E70", pat:"none"}, bottom:{id:"khaki", color:"#C9A877", pat:"none"}, dress:null, outer:null,
    socks:{id:"short", color:"#FFFFFF", pat:"none"}, shoes:{id:"sneaker", color:"#FFFFFF", pat:"none"}, hairpin:null, neck:null},
};
const BOY_HAIR = ["boycut", "mushroom", "wolf", "curlyboy", "buzz", "short", "twoblock", "longboy", "afro"], BOY_FRINGE = ["boyfringe", "sweep", "bowl", "spiky", "quiff", "side", "messy", "comma"];
// 男生隨機搭配時不抽這些（自己選還是可以穿）
const BOY_SKIP = ["cami", "crop", "blouse", "offshoulder", "ruffle", "culottes", "mermaid", "sailor", "maryjane", "heels", "lace", "tights", "knee", "striped", "pearl", "heart", "choker", "handbag", "catbag", "bunny", "bouquet", "fairy", "flowers"];
const BOY_BOTTOM = ["khaki", "bshorts", "jeans", "shorts", "slacks", "wide", "cargo", "track", "joggers", "ripped"];
const applyRole = (look, r) => Object.assign(look, clone(ROLE_PRESET[r] || ROLE_PRESET.girl), {role:r});
let S = {look:clone(DEFAULT_LOOK), cat:"hair", theme:"", best:{}, wardrobe:[]};
try{ const v = JSON.parse(localStorage.getItem(SAVE_KEY) || "null"); if(v) S = Object.assign(S, v); }catch(e){}
S.look = Object.assign(clone(DEFAULT_LOOK), S.look);
// 衣櫥每一套都有自己的代號（合照用）
const newId = () => Math.random().toString(36).slice(2, 9);
(S.wardrobe || []).forEach(w => { if(!w.id) w.id = newId(); });
if(!S.group) S.group = {picks:[], bg:"park"};
if(EYE_OLD[S.look.eyeC]) S.look.eyeC = EYE_OLD[S.look.eyeC];   // 舊版的眼睛顏色換成柔和的
const save = () => { try{ localStorage.setItem(SAVE_KEY, JSON.stringify(S)); }catch(e){} };
function clone(o){ return JSON.parse(JSON.stringify(o)); }
const unlocked = themeId => (S.best[themeId] || 0) >= 4;
const lockedItem = it => it && it.lock && !unlocked(it.lock);
const L = () => S.look;

// ---------- 畫面 ----------
function render(){
  $("stage").innerHTML = drawLook(L());
  $("mini").innerHTML = drawLook(L());
  $("bUndo").disabled = !HIST.length;
  const t = TH[S.theme];
  $("stageBar").innerHTML = t
    ? `<span class="chip theme">主題挑戰：${esc(t.name)}</span><small class="muted" style="font-weight:700">${esc(t.desc)}</small><span style="flex:1"></span><button class="btn sm" id="bLeave">離開挑戰</button>`
    : `<span class="chip">自由搭配</span><button class="chip contest" id="bContest">本週比賽：${esc(contestOf(weekOf(Date.now()).key).name)}</button>`;
  const ed = editingItem();
  if(!ed && S.editing) delete S.editing;
  $("bSave").textContent = ed ? `更新「${wdName(ed)}」` : "存進衣櫥";
  $("editBar").hidden = !ed;
  if(ed) $("editBar").innerHTML = `<span>正在編輯衣櫥裡的「<b>${esc(wdName(ed))}</b>」，改好按「更新」就會存回去</span><button class="btn sm" id="bSaveNew">另存一套新的</button><button class="btn sm" id="bEditEnd">不編輯了</button>`;
  if($("bSaveNew")) $("bSaveNew").onclick = () => { delete S.editing; saveLook(true); };
  if($("bEditEnd")) $("bEditEnd").onclick = () => { delete S.editing; save(); render(); toast("之後按「存進衣櫥」會存成新的一套"); };
  if($("bContest")) $("bContest").onclick = () => loadWall("contest");
  $("bScore").hidden = !t;
  if($("bLeave")) $("bLeave").onclick = () => { S.theme = ""; save(); render(); };
  renderCats(); renderGroups();
}
// 這個角色看得到的分類（寵物沒有髮型、上衣這些）
const visCats = () => CATS.filter(c => !c.roles || c.roles.includes(L().role || "girl"));
function renderCats(){
  $("cats").innerHTML = visCats().map(c => `<button class="${c.id === S.cat ? "on" : ""}" data-cat="${c.id}">${c.name}</button>`).join("");
}
// 小圖：用現在的穿搭，只換掉那一樣東西，只看那一塊
function thumb(g, v){
  const look = clone(L());
  if(g.type === "slot") look[g.key] = v ? {id:v, color:(look[g.key] && look[g.key].id === v ? look[g.key].color : g.list[v].color), pat:(look[g.key] && look[g.key].id === v ? look[g.key].pat : "none")} : null;
  else if(g.type === "multi") look[g.key] = v ? [v] : [];
  else if(g.key === "role") applyRole(look, v);
  else if(g.key === "species") Object.assign(look, {species:v, fur:SPECIES[v].fur || look.fur});
  else look[g.key] = v;
  if(g.type === "slot" && v){
    if(g.key === "top" || g.key === "bottom"){ if(look.dress && !DRESSES[look.dress.id].overTop) look.dress = null; }
    if(g.key === "hat" || g.key === "glasses" || g.key === "hairpin") { /* 頭上的東西：照常 */ }
  }
  // 寵物整隻往下移、放大過（PET_FIT），五官、配件的小圖要照同樣的位置去框，才不會只框到頭頂
  const vb = g.vb && look.role === "pet" && !PET_VB_OK.includes(g.key) ? petVb(g.vb) : g.vb;
  return drawLook(look, {bg:!!g.full, vb:g.full ? undefined : vb});
}
const PET_VB_OK = ["role", "species", "furPat", "petMouth", "petwear", "pettoy"];   // 這些小圖本來就是照寵物框的
const petVb = vb => { const [x, y, w, h] = vb.split(" ").map(Number); return [150 + (x - 150) * 1.1, 434 - (322 - y) * 1.1, w * 1.1, h * 1.1].map(n => +n.toFixed(1)).join(" "); };
function renderGroups(){
  const cat = visCats().find(c => c.id === S.cat) || CATS[0], look = L();
  $("groups").innerHTML = cat.groups.filter(g => !g.only || g.only(look)).map(g => {
    let h = `<div class="grp"><h3>${esc(g.label)}</h3>`;
    if(g.type === "slot" || g.type === "pick" || g.type === "multi"){
      const multi = g.type === "multi", sel = multi ? (look[g.key] || []) : null;
      const cur = g.type === "slot" ? (look[g.key] && look[g.key].id) : multi ? (sel.length ? "?" : "") : look[g.key];
      const none = g.type === "slot" || g.none || multi;
      h += `<div class="items">`;
      if(none) h += `<button class="it ${!cur ? "on" : ""}" data-t="${g.type}" data-k="${g.key}" data-v=""><span class="none">✕</span>不要</button>`;
      h += Object.entries(g.list).filter(([id]) => !g.keys || g.keys(look).includes(id)).map(([id, it]) => {
        const lk = lockedItem(it);
        const wk = !lk && weekTags().length && (it.tags || []).some(t => weekTags().includes(t));
        return `<button class="it ${(multi ? sel.includes(id) : cur === id) ? "on" : ""} ${lk ? "lock" : ""}" data-t="${g.type}" data-k="${g.key}" data-v="${id}">${thumb(g, id)}${lk ? `<span class="lk">挑戰解鎖</span>` : ""}${wk ? `<span class="wk">本週</span>` : ""}${esc(it.name)}</button>`;
      }).join("");
      h += `</div>`;
      // 選了衣服：可以換顏色和花紋
      if(g.type === "slot" && look[g.key]){
        const v = look[g.key];
        h += `<div class="sw"><span class="lb">顏色</span>${PAL.map(c => `<button class="${v.color === c ? "on" : ""}" style="background:${c}" data-t="scol" data-k="${g.key}" data-v="${c}" aria-label="顏色"></button>`).join("")}</div>`;
        if(!NO_PAT.includes(g.key) && !(g.list[v.id] || {}).stripe) h += `<div class="sw"><span class="lb">花紋</span>${Object.entries(PATS).map(([p, n]) => `<button class="pt ${(v.pat || "none") === p ? "on" : ""}" data-t="spat" data-k="${g.key}" data-v="${p}">${n}</button>`).join("")}</div>`;
      }
    }else if(g.type === "color"){
      const cur = look[g.key];
      h += `<div class="sw">${g.none ? `<button class="no ${!cur ? "on" : ""}" data-t="color" data-k="${g.key}" data-v="" aria-label="不要"></button>` : ""}${g.pal.map((c, i) => { const val = g.index ? i : c; return `<button class="${cur === val ? "on" : ""}" style="background:${c}" data-t="color" data-k="${g.key}" data-v="${val}" data-i="${g.index ? 1 : ""}" aria-label="顏色"></button>`; }).join("")}</div>`;
    }else if(g.type === "toggle"){
      h += `<label class="tog"><input type="checkbox" data-t="toggle" data-k="${g.key}" ${look[g.key] ? "checked" : ""}> 加上${esc(g.label)}</label>`;
    }
    return h + `</div>`;
  }).join("") + (cat.id === "dress" ? `<p class="muted small">「吊帶裙」會露出裡面的上衣，其他洋裝會蓋過上衣和下身。</p>` : "") +
    (cat.id === "pose" ? `<p class="muted small">雙手背在後面時，手上拿的東西和手提包會先收起來；揮手和比 YA 時，另一隻手還可以拿東西，手提包會先收起來。換回「自然站立」就會再出現。</p>` : "");
}
function toast(msg){
  const t = document.createElement("div"); t.className = "toast"; t.textContent = msg; document.body.appendChild(t);
  setTimeout(() => t.remove(), 1800);
}

// ---------- 換衣服 ----------
$("cats").addEventListener("click", e => { const b = e.target.closest("[data-cat]"); if(!b) return; S.cat = b.dataset.cat; save(); renderCats(); renderGroups(); });
$("groups").addEventListener("click", e => {
  const b = e.target.closest("[data-t]"); if(!b || b.dataset.t === "toggle") return;
  const look = L(), k = b.dataset.k, v = b.dataset.v, t = b.dataset.t;
  const lockMsg = it => it && lockedItem(it) && `在「${TH[it.lock].name}」挑戰拿到 4 顆星就能解鎖`;
  const m = lockMsg(t === "slot" ? SLOT_LISTS[k][v] : t === "pick" && KEY_LISTS[k] ? KEY_LISTS[k][v] : null);
  if(m){ toast(m); return; }
  snap();
  if(t === "slot"){
    const list = SLOT_LISTS[k], it = list[v];
    if(it && lockedItem(it)){ toast(`在「${TH[it.lock].name}」挑戰拿到 4 顆星就能解鎖`); return; }
    const old = look[k];
    look[k] = v ? {id:v, color:old && old.custom ? old.color : it.color, pat:old && old.custom ? old.pat || "none" : "none", custom:old && old.custom} : null;
    if(v && (k === "top" || k === "bottom") && look.dress && !DRESSES[look.dress.id].overTop){ look.dress = null; toast("換下洋裝了"); }
  }else if(t === "pick"){
    const it = KEY_LISTS[k] && KEY_LISTS[k][v];
    if(it && lockedItem(it)){ toast(`在「${TH[it.lock].name}」挑戰拿到 4 顆星就能解鎖`); return; }
    if(k === "role"){ if(look.role !== v) applyRole(look, v); }
    else if(k === "species"){ look.species = v; if(SPECIES[v].fur) look.fur = SPECIES[v].fur; if(!petPats(look).includes(look.furPat)) look.furPat = "plain"; }
    else look[k] = v;
  }else if(t === "scol"){ look[k].color = v; look[k].custom = true; }
  else if(t === "spat"){ look[k].pat = v; look[k].custom = true; }
  else if(t === "multi"){ const a = look[k] || []; look[k] = !v ? [] : a.includes(v) ? a.filter(x => x !== v) : [...a, v]; }
  else if(t === "color"){ look[k] = b.dataset.i ? +v : v; }
  save(); render();
});
$("groups").addEventListener("change", e => { const b = e.target.closest("[data-t=toggle]"); if(!b) return; snap(); L()[b.dataset.k] = b.checked; save(); render(); });

// ---------- 隨機搭配 ----------
const avail = list => Object.keys(list).filter(id => !lockedItem(list[id]));
function randomLook(){
  const look = clone(L());
  const scheme = pick([["#FFFFFF", "#2C3E70", "#D9414E"], ["#F7A8C4", "#FFFFFF", "#B9A3E8"], ["#F6E7C8", "#8A5A3C", "#4FA36B"], ["#9BD0F5", "#FFFFFF", "#F6D65A"], ["#2E2B2B", "#FFFFFF", "#E8679A"], ["#9ADBC0", "#F6E7C8", "#F59A4A"], ["#B9A3E8", "#7E5BC2", "#F7A8C4"]]);
  const boy = look.role === "boy";
  if(look.role === "pet") return randomPet(look);
  const col = () => pick(scheme), it = (list, pat = .2) => { const id = pick(avail(list).filter(k => !boy || !BOY_SKIP.includes(k))); return {id, color:col(), pat:Math.random() < pat ? pick(["dots", "stripes", "check", "flower"]) : "none"}; };
  look.hairB = pick(boy ? BOY_HAIR : Object.keys(HAIRB).filter(k => !BOY_HAIR.includes(k) || Math.random() < .3)); look.hairF = pick(boy ? BOY_FRINGE : Object.keys(HAIRF)); look.hairC = pick(HAIR_PAL);
  look.pose = pick(["down", "down", "behind", "wave", "peace"]);
  look.faceShape = pick(Object.keys(FACES)); look.nose = pick(Object.keys(NOSES)); look.hairTip = Math.random() < .2 ? pick(TIP_PAL) : "";
  look.eyes = pick(avail(EYES)); look.eyeC = pick(EYE_PAL); look.mouth = pick(Object.keys(MOUTHS)); look.brows = pick(["soft", "soft", "straight", "worried"]);
  look.blush = Math.random() < (boy ? .2 : .7) ? pick(BLUSH) : ""; look.lip = !boy && Math.random() < .4 ? pick(LIPS) : ""; look.shadow = !boy && Math.random() < .3 ? pick(SHADOW) : "";
  if(boy){ look.brows = pick(["bold", "bold", "straight", "sharp", "soft"]); look.eyeliner = ""; look.gloss = false; look.glitter = false; look.hairTip = Math.random() < .1 ? look.hairTip : ""; }
  look.dress = null; look.top = null; look.bottom = null;
  if(boy){ look.top = it(TOPS); look.bottom = {...it(BOTTOMS), id:pick(BOY_BOTTOM)}; }
  else if(Math.random() < .35){ look.dress = it(DRESSES); if(DRESSES[look.dress.id].overTop) look.top = it(TOPS, 0); }
  else { look.top = it(TOPS); look.bottom = it(BOTTOMS); }
  look.outer = Math.random() < .35 ? it(OUTERS, 0) : null;
  look.socks = Math.random() < .5 ? it(SOCKS, 0) : null;
  look.shoes = it(SHOES, 0);
  ACC_SLOTS.forEach(k => look[k] = null);
  for(let n = 1 + Math.floor(Math.random() * 3), tries = 0; n > 0 && tries < 20; tries++){ const k = pick(ACC_SLOTS); if(look[k] || (boy && k === "hairpin")) continue; look[k] = it(SLOT_LISTS[k], 0); n--; }
  look.bg = pick(Object.keys(BGS)); look.pet = Math.random() < .4 ? pick(Object.keys(PETS)) : "";
  return look;
}
function randomPet(look){
  const col = () => pick(PAL);
  look.species = pick(Object.keys(SPECIES)); look.fur = Math.random() < .5 ? SPECIES[look.species].fur : pick(FUR_PAL); look.furPat = pick(petPats(look)); look.petMouth = Math.random() < .5 ? "w" : pick(Object.keys(PET_MOUTHS));
  look.eyes = pick(avail(EYES)); look.eyeC = pick(EYE_PAL); look.blush = Math.random() < .6 ? pick(BLUSH) : "";
  look.petwear = Math.random() < .75 ? {id:pick(avail(PETWEAR)), color:col(), pat:Math.random() < .2 ? pick(["dots", "stripes", "check", "flower"]) : "none"} : null;
  if(Math.random() < .4){ const id = pick(avail(PETTOYS)); look.pettoy = {id, color:PETTOYS[id].color, pat:"none"}; } else look.pettoy = null;
  ACC_SLOTS.forEach(k => look[k] = null);
  for(let n = Math.floor(Math.random() * 3), tries = 0; n > 0 && tries < 20; tries++){ const k = pick(PET_ACC); if(look[k]) continue; look[k] = {id:pick(avail(SLOT_LISTS[k])), color:col(), pat:"none"}; n--; }
  look.bg = pick(Object.keys(BGS)); look.pet = "";
  return look;
}
$("bRandom").onclick = () => { snap(); S.look = randomLook(); save(); render(); };

// ---------- 主題挑戰：選主題 ----------
const starStr = n => `${"★".repeat(n)}<i>${"★".repeat(5 - n)}</i>`;
function rewardName(t){ const [slot, id] = t.reward; return KEY_LISTS[slot][id].name; }
function showThemes(){
  const done = THEMES.filter(t => unlocked(t.id)).length;
  openPanel(`<h2>主題挑戰</h2>
    <p class="muted" style="text-align:center">選一個主題穿搭，貓咪評審會幫你打分數。拿到 4 顆星可以解鎖限定單品（已解鎖 ${done} / ${THEMES.length}）。</p>
    <div class="themes">${THEMES.map(t => `<button class="th" data-theme="${t.id}">${drawLook({...L(), bg:t.bg}, {vb:"0 0 300 200"}).replace(/<svg /, '<svg preserveAspectRatio="xMidYMid slice" ')}<span class="tx"><b>${esc(t.name)}</b><br><span class="small muted">${esc(t.desc)}</span><br><span class="st">${starStr(S.best[t.id] || 0)}</span><span class="rw">${unlocked(t.id) ? `已解鎖：${esc(rewardName(t))}` : `4 顆星解鎖：${esc(rewardName(t))}`}</span></span></button>`).join("")}</div>
    <div class="btns"><button class="btn" data-close>關閉</button></div>`);
}
$("bTheme").onclick = showThemes;

// ---------- 評分 ----------
function hueFamily(hex){
  const n = parseInt(hex.slice(1), 16), r = (n >> 16) / 255, g = (n >> 8 & 255) / 255, b = (n & 255) / 255;
  const mx = Math.max(r, g, b), mn = Math.min(r, g, b), l = (mx + mn) / 2, d = mx - mn;
  const s = d ? d / (1 - Math.abs(2 * l - 1)) : 0;
  if(s < .2 || l > .9 || l < .2) return "neutral";
  let h = mx === r ? ((g - b) / d) % 6 : mx === g ? (b - r) / d + 2 : (r - g) / d + 4;
  h = (h * 60 + 360) % 360;
  return String(Math.round(h / 45) % 8);
}
function worn(look){
  if(look.role === "pet") return ["petwear", "pettoy", ...PET_ACC].filter(k => look[k] && SLOT_LISTS[k][look[k].id]).map(k => ({slot:k, v:look[k], it:SLOT_LISTS[k][look[k].id]}));
  const dress = look.dress && DRESSES[look.dress.id];
  const slots = ["dress", "outer", "socks", "shoes", ...ACC_SLOTS];
  if(!dress) slots.unshift("top", "bottom");
  else if(dress.overTop) slots.unshift("top");
  // 手背在後面時，手上拿的東西和手提包看不到，不算分
  return slots.filter(k => !(look.pose === "behind" && k === "hand") && !((look.pose === "behind" || look.pose === "wave" || look.pose === "peace") && k === "bag" && look[k] && look[k].id === "handbag"))
    .filter(k => look[k] && SLOT_LISTS[k][look[k].id]).map(k => ({slot:k, v:look[k], it:SLOT_LISTS[k][look[k].id]}));
}
function scoreLook(look, t){
  const items = worn(look), lines = [];
  let pts = 30;
  const has = (it, tags) => it.tags.some(x => tags.includes(x));
  // 穿在外套裡面的上衣看不到，不算不適合；小配件和日常百搭的單品不適合只扣一半
  const hidden = x => x.slot === "top" && look.outer;
  const good = items.filter(x => has(x.it, t.like)), bad = items.filter(x => !hidden(x) && !has(x.it, t.like) && has(x.it, t.dislike));
  const gp = Math.min(45, good.length * 9);
  if(good.length) lines.push([`符合主題：${good.map(x => x.it.name).join("、")}`, gp]);
  else lines.push(["還沒有符合主題的單品", 0]);
  // 不適合的單品扣分；日常百搭的單品（casual）只扣一半
  const penalty = x => x.it.tags.includes("casual") || ["hairpin", "neck", "glasses", "socks"].includes(x.slot) ? 6 : 12, bp = bad.reduce((a, x) => a + penalty(x), 0);
  if(bad.length) lines.push([`不太適合這個主題：${bad.map(x => x.it.name).join("、")}`, -bp]);
  pts += gp - bp;
  // 背景
  const bg = BGS[look.bg];
  const bgp = look.bg === t.bg ? 10 : bg && bg.tags.some(x => t.like.includes(x)) ? 5 : 0;
  lines.push([bgp ? `背景「${bg.name}」很搭` : `背景可以換成「${BGS[t.bg].name}」`, bgp]); pts += bgp;
  // 有沒有穿好
  const dress = look.dress && DRESSES[look.dress.id];
  const pet = look.role === "pet";
  const dressed = pet || (dress && !dress.overTop) || ((look.top || dress) && (look.bottom || dress));
  if(!dressed){ lines.push(["還沒穿好（要有上衣和下身，或是一件洋裝）", -15]); pts -= 15; }
  if(pet){ lines.push([look.petwear ? "穿了可愛的衣服" : "寵物不穿衣服也很可愛", 5]); pts += 5; }
  else if(look.shoes){ lines.push(["有穿鞋子", 5]); pts += 5; } else { lines.push(["忘了穿鞋子", -5]); pts -= 5; }
  // 配色：衣服的顏色有幾個色系（黑白灰米色不算）
  const fams = new Set(items.filter(x => !ACC_SLOTS.includes(x.slot) || x.slot === "hat" || x.slot === "scarf").map(x => hueFamily(x.v.color)).filter(f => f !== "neutral"));
  const cp = fams.size <= 2 ? 8 : fams.size === 3 ? 4 : -4;
  lines.push([fams.size <= 2 ? `配色很協調（${fams.size ? fams.size + " 個色系" : "以黑白灰米色為主"}）` : fams.size === 3 ? "配色還不錯（3 個色系）" : `顏色有點太多（${fams.size} 個色系）`, cp]); pts += cp;
  const pats = items.filter(x => x.v.pat && x.v.pat !== "none").length;
  const pp = pats <= 1 ? 2 : pats === 2 ? 0 : -5;
  if(pats >= 2) lines.push([pats >= 3 ? `花紋有點多（${pats} 件）` : "兩件有花紋，剛好", pp]); else lines.push([pats ? "一件有花紋，很亮眼" : "素色很清爽", pp]);
  pts += pp;
  // 配件
  const acc = ACC_SLOTS.filter(k => look[k]).length;
  const ap = acc >= 1 && acc <= 3 ? 5 : acc >= 5 ? -3 : 0;
  lines.push([acc === 0 ? "加一兩件配件會更亮眼" : acc <= 3 ? `配件 ${acc} 件，剛剛好` : acc === 4 ? "配件 4 件，有點多了" : `配件 ${acc} 件，太多了`, ap]); pts += ap;
  if(["smile", "grin", "cat", "tongue"].includes(look.mouth)){ lines.push(["笑容滿分", 2]); pts += 2; }
  const total = Math.max(0, Math.min(100, Math.round(pts)));
  const stars = total >= 90 ? 5 : total >= 78 ? 4 : total >= 62 ? 3 : total >= 45 ? 2 : 1;
  return {total, stars, lines, good, bad, fams:fams.size, pats, acc, dressed, bgOk:look.bg === t.bg};
}
// 貓咪評審的臉
function judgeCat(base, patch){
  return `<svg viewBox="0 0 64 64">${P("M12 26 L10 6 L28 16 Z", base, 2.2)}${P("M52 26 L54 6 L36 16 Z", patch || base, 2.2)}${E(32, 36, 22, 20, base, 2.4)}${patch ? `<path d="M40 18 Q54 22 54 36 Q46 32 40 18 Z" fill="${patch}"/>` : ""}${C(24, 34, 3, INK, 0)}${C(40, 34, 3, INK, 0)}${C(25, 33, 1, "#fff", 0)}${C(41, 33, 1, "#fff", 0)}${LN("M28 43 Q32 47 32 43 Q32 47 36 43", 1.8)}${E(32, 40, 2.4, 1.8, "#F07F98", 0)}${E(19, 42, 4, 2.4, "#FF9AAE", 0, 'opacity=".6"')}${E(45, 42, 4, 2.4, "#FF9AAE", 0, 'opacity=".6"')}</svg>`;
}
function judgeComments(r, t){
  const theme = r.good.length >= 4 && !r.bad.length ? `完全就是「${t.name}」的感覺，喵！` : r.good.length >= 2 && !r.bad.length ? "很符合主題，再多一兩件相關的單品會更好。" : r.bad.length ? `${r.bad[0].it.name}跟這個主題不太搭喔。` : "跟主題有點距離，看看主題說明再試試？";
  const color = r.fams <= 2 && r.pats <= 2 ? "顏色好協調，看起來很舒服。" : r.fams === 3 ? "配色不錯，如果少一種顏色會更有質感。" : "顏色有點多，選兩三種顏色搭配看看。";
  const overall = !r.dressed ? "還沒穿完整喔，記得上衣和下身，或穿一件洋裝。" : r.acc === 0 ? "加個帽子、髮飾或包包，會更有亮點！" : r.acc >= 5 ? "配件有點多，挑幾件最喜歡的就好。" : r.bgOk ? "背景也選得很好，整體很完整！" : `背景換成「${BGS[t.bg].name}」會更有氣氛。`;
  return [["主題評審", "橘貓", "#F6A64A", "", theme], ["配色評審", "賓士貓", "#2E2B2B", "", color], ["整體評審", "三花貓", "#FFFDF8", "#F09A3E", overall]];
}
$("bScore").onclick = () => {
  const t = TH[S.theme]; if(!t) return;
  const r = scoreLook(L(), t), was = S.best[t.id] || 0, wasUnlocked = unlocked(t.id);
  if(r.stars > was) S.best[t.id] = r.stars;
  save();
  const newUnlock = !wasUnlocked && unlocked(t.id);
  const [slot, id] = t.reward;
  openPanel(`<h2>「${esc(t.name)}」評分結果</h2>
    <div class="score"><div class="big">${r.total} 分</div><div class="stars">${starStr(r.stars)}</div>${r.stars > was && was ? `<p class="small muted">比上次的 ${was} 顆星更好了！</p>` : ""}</div>
    <div class="judges">${judgeComments(r, t).map(([role, name, base, patch, txt]) => `<div class="jd">${judgeCat(base, patch)}<div><b>${role}・${name}</b>${esc(txt)}</div></div>`).join("")}</div>
    <ul class="detail">${r.lines.map(([txt, p]) => `<li><span>${esc(txt)}</span><b class="${p > 0 ? "pl" : p < 0 ? "mi" : ""}">${p > 0 ? "+" + p : p}</b></li>`).join("")}</ul>
    ${newUnlock ? `<div class="unlock">解鎖新單品：${esc(KEY_LISTS[slot][id].name)}！到「${slot === "eyes" ? "五官" : "配件"}」就可以穿戴。</div>` : !wasUnlocked ? `<p class="small muted" style="text-align:center">拿到 4 顆星可以解鎖「${esc(rewardName(t))}」。</p>` : ""}
    <div class="btns"><button class="btn acc" data-close>繼續修改</button><button class="btn" data-act="save">存進衣櫥</button><button class="btn vio" data-act="themes">換一個主題</button></div>`);
  if(newUnlock) render();
};

// ---------- 衣櫥 ----------
// 從衣櫥按「編輯」換上的那套：再按「存進衣櫥」就是更新那一套，不會多出一套（S.editing 記著是哪一套）
const editingItem = () => S.editing && S.wardrobe.find(w => w.id === S.editing);
function saveLook(asNew){
  const d = new Date(), at = `${d.getMonth() + 1}/${d.getDate()}`, ed = editingItem();
  if(ed && !asNew){ ed.look = clone(L()); ed.at = at; ed.theme = S.theme || ed.theme || ""; save(); render(); toast(`「${wdName(ed)}」更新好了！`); return; }
  if(S.wardrobe.length >= 24){ toast("衣櫥滿了（最多 24 套），先刪掉幾套吧"); return; }
  const id = newId(); S.wardrobe.unshift({id, look:clone(L()), at, theme:S.theme || ""});
  S.editing = id; save(); render(); toast("存進衣櫥了！之後再按「存進衣櫥」會更新這一套");
}
$("bSave").onclick = () => saveLook(false);
// 衣櫥每一套的名字：自己取的優先，沒取的就叫「女生 1、女生 2、寵物 1」（照存的先後編號）
function wdName(w){
  if(w.name) return w.name;
  const role = (w.look && w.look.role) || "girl", same = S.wardrobe.filter(x => ((x.look && x.look.role) || "girl") === role);
  return `${(ROLES[role] || ROLES.girl).name} ${same.length - same.indexOf(w)}`;
}
function showWardrobe(){
  openPanel(`<h2>我的衣櫥</h2>
    <p class="muted" style="text-align:center">存在這個瀏覽器裡，最多 24 套。</p>
    ${S.wardrobe.length ? `<div class="wardrobe">${S.wardrobe.map((w, i) => `<div class="wd">${drawLook(w.look)}<div class="tx"><b>${esc(wdName(w))}</b>${w.theme && TH[w.theme] ? esc(TH[w.theme].name) : "自由搭配"}・${esc(w.at)} 存的<div class="row"><button class="btn sm acc" data-wear="${i}">編輯</button><button class="btn sm" data-ren="${i}">取名字</button><button class="btn sm" data-del="${i}">刪除</button></div></div></div>`).join("")}</div>` : `<p style="text-align:center">還沒有存任何穿搭。搭好喜歡的造型後，按「存進衣櫥」。</p>`}
    <div class="btns"><button class="btn" data-close>關閉</button></div>`);
}
$("bWardrobe").onclick = showWardrobe;

// ---------- 合照：從衣櫥挑幾個角色（不帶自己的背景），一起放到同一個背景前面，還能擺上房子、家具、花草樹木等小物 ----------
const GROUP_MAX = 8, PROP_MAX = 40;
// 角色的樣子：存過的合照會把當時的樣子一起存起來（looks），衣櫥刪掉了也還在
const groupLook = id => (S.group.looks || {})[id] || (id === "now" ? L() : (S.wardrobe.find(w => w.id === id) || {}).look);
// ---------- 儲存的合照（最多 12 張，存在這個瀏覽器） ----------
const SCENE_MAX = 12;
if(!S.scenes) S.scenes = [];
function withGroup(g, fn){ const keep = S.group; S.group = g; try{ return fn(); } finally { S.group = keep; } }
function saveScene(asNew){
  if(!gHasAny()) return toast("合照裡還沒有東西");
  const g = clone(S.group), looks = {};
  // 「現在的穿搭」會一直變：存的時候換成一個固定的代號，把當下的樣子記下來
  g.picks = g.picks.map(id => { if(id !== "now") return id; const nid = "n" + newId(); ["pos", "size", "rot", "flip", "z"].forEach(k => { if(g[k] && g[k].now !== undefined){ g[k][nid] = g[k].now; delete g[k].now; } }); looks[nid] = clone(L()); return nid; });
  g.picks.forEach(id => { if(!looks[id]) looks[id] = clone(withGroup(S.group, () => groupLook(id))); });
  g.looks = looks; delete g.sceneId;
  const d = new Date(), at = `${d.getMonth() + 1}/${d.getDate()} ${d.getHours()}:${String(d.getMinutes()).padStart(2, "0")}`;
  const old = !asNew && S.group.sceneId && S.scenes.find(x => x.id === S.group.sceneId);
  if(old){ old.group = g; old.at = at; toast("合照更新好了！"); }
  else{
    if(S.scenes.length >= SCENE_MAX) return toast(`最多存 ${SCENE_MAX} 張合照，先刪掉幾張吧`);
    const id = newId(); S.scenes.unshift({id, at, group:g}); S.group.sceneId = id; toast("合照存好了！");
  }
  // 存好後，現在這張也改用存下來的版本（角色的樣子固定下來）
  const cur = S.scenes.find(x => x.id === S.group.sceneId); S.group = Object.assign(clone(cur.group), {sceneId:cur.id});
  save(); renderGroup();
}
const GW = () => S.group.wide ? (S.group.ww || 600) : 300;   // 合照寬度：直式 300、橫式照螢幕比例（至少 600，高度都是 470）
// 橫式的寬度：讓合照剛好撐滿右邊選單以外的空間；寬度變了，大家的左右位置跟著等比例移動
function groupFit(){
  if(!S.group.wide) return false;
  const wrap = document.querySelector(".gwrap"), right = document.querySelector(".gright");
  const narrow = innerWidth <= 760, availW = wrap && right ? wrap.clientWidth - right.offsetWidth - 16 : innerWidth - 420, availH = innerHeight - 46;
  const W = narrow ? 600 : Math.round(Math.max(600, Math.min(1300, 470 * availW / Math.max(300, availH))));
  const old = S.group.ww || 600;
  if(Math.abs(W - old) < 3) return false;
  Object.values(gMap("pos")).forEach(p => p.x *= W / old); S.group.ww = W; save(); return true;
}
// 角色和小物都用同一套位置、大小、角度、翻轉（存在 pos/size/rot/flip 裡，用代號對應；小物的代號是 p 開頭）
const gMap = k => S.group[k] || (S.group[k] = {});
const gIds = () => S.group.picks.filter(groupLook);
const isProp = key => key[0] === "p" && (S.group.props || []).some(p => p.id === key);
const propOf = key => (S.group.props || []).find(p => p.id === key);
// 人數越多每個人縮小一點；小物跟著同一個比例，看起來大小才一致
const groupBase = n => (S.group.wide ? [.9, .82, .74, .66, .6, .56, .52, .5] : [1, .8, .66, .56, .5, .46, .43, .4])[Math.max(0, Math.min(7, n - 1))];
function gItem(key){
  const ids = gIds(), n = Math.max(1, ids.length), m = gMap("size")[key] || 1, a = gMap("rot")[key] || 0, f = !!gMap("flip")[key];
  if(isProp(key)){ const pr = propOf(key), it = PROPS[pr.t] || PROPS.flowers, i = S.group.props.indexOf(pr);
    return {key, prop:true, it, base:groupBase(n), m, a, f, back:!!it.back, p:gMap("pos")[key] || {x:GW() / 2 + (i % 5 - 2) * 24, y:it.sky ? 160 : it.back ? 400 : 440}}; }
  const i = ids.indexOf(key), l = groupLook(key);
  return {key, l, base:groupBase(n) * (l.role === "pet" ? .78 : 1), m, a, f, p:gMap("pos")[key] || {x:GW() * (i + .5) / ids.length, y:452}};
}
// 角色：腳踩的點對齊位置、繞著身體中間轉；小物：底部中間對齊位置、繞著自己的中間轉
const gTf = (it, p, k, a) => it.prop
  ? `translate(${p.x.toFixed(1)} ${p.y.toFixed(1)}) scale(${k.toFixed(3)})${a ? ` rotate(${Math.round(a)} 0 ${-it.it.h / 2})` : ""}${it.f ? " scale(-1 1)" : ""}`
  : `translate(${p.x.toFixed(1)} ${p.y.toFixed(1)}) scale(${k.toFixed(3)}) translate(-150 -452)${a ? ` rotate(${Math.round(a)} 150 330)` : ""}${it.f ? " translate(300 0) scale(-1 1)" : ""}`;
let groupSel = "";   // 現在選到的角色或小物（可以放大縮小、轉角度）
function groupSVG(size){
  const items = [...gIds(), ...(S.group.props || []).map(p => p.id)].map(gItem);
  // 河、地毯、天上的東西畫在最後面；其他照前後：站得比較後面（腳比較高）的先畫
  items.sort((a, b) => gDepth(a) - gDepth(b));
  const body = items.map(it => `<g class="gch${!size && it.key === groupSel ? " sel" : ""}" data-gid="${it.key}" transform="${gTf(it, it.p, it.base * it.m, it.a)}">${it.prop ? it.it.draw() : drawLook(Object.assign(clone(DEFAULT_LOOK), it.l), {bg:false, size:[300, 470]})}</g>`).join("");
  const k = BGS[S.group.bg] && !lockedItem(BGS[S.group.bg]) ? S.group.bg : "park", back = S.group.wide ? bgWide(k, "#F7D3E0", GW()) : BGS[k].draw("#F7D3E0");
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${GW()} 470"${size ? ` width="${size[0]}" height="${size[1]}"` : ""}>${back}${body}</svg>`;
}
const gHasAny = () => gIds().length || (S.group.props || []).length;
const gForget = key => ["pos", "size", "rot", "flip", "z"].forEach(k => delete gMap(k)[key]);
// 前後順序：越大畫在越前面。河、地毯、天上的東西本來在最後面；腳越往下越前面；再加上自己手動調的前後（z）
const gDepth = it => (it.back ? -1e4 : 0) + it.p.y + (gMap("z")[it.key] || 0);
function groupLayer(how){
  const items = [...gIds(), ...(S.group.props || []).map(p => p.id)].map(gItem).sort((a, b) => gDepth(a) - gDepth(b));
  const i = items.findIndex(it => it.key === groupSel); if(i < 0) return;
  const me = items[i], d = gDepth(me), others = items.filter(it => it.key !== groupSel);
  const target = how === "top" ? (others.length ? gDepth(others[others.length - 1]) + 1 : d)
    : how === "bottom" ? (others.length ? gDepth(others[0]) - 1 : d)
    : how === "up" ? (items[i + 1] ? gDepth(items[i + 1]) + .5 : d)
    : (items[i - 1] ? gDepth(items[i - 1]) - .5 : d);
  if(target === d) return toast(how === "up" || how === "top" ? "已經在最前面了" : "已經在最後面了");
  gMap("z")[groupSel] = (gMap("z")[groupSel] || 0) + target - d; save(); renderGroup();
}
function renderGroup(){
  // 現在身上這套也能放進合照；選過的會顯示第幾個（就是從左邊數來的位置）
  const opts = [{id:"now", look:L(), name:"現在的穿搭"}, ...S.wardrobe.map(w => ({id:w.id, look:w.look, name:wdName(w)})),
    ...Object.entries(S.group.looks || {}).filter(([id]) => !S.wardrobe.some(w => w.id === id)).map(([id, look]) => ({id, look, name:`合照裡的${(ROLES[look.role] || ROLES.girl).name}`}))];
  S.group.picks = S.group.picks.filter(id => opts.some(o => o.id === id));
  S.group.props = (S.group.props || []).filter(p => PROPS[p.t]);
  const keep = document.querySelector(".gright"), top = keep ? keep.scrollTop : 0;   // 右邊選單重畫後停在原本捲到的地方
  const sel = groupSel && (S.group.picks.includes(groupSel) || isProp(groupSel)) ? groupSel : "";
  const selName = !sel ? "" : isProp(sel) ? PROPS[propOf(sel).t].name : "角色";
  $("panel").innerHTML = `<div class="gwrap"><div class="gleft">
    <div class="gstage${S.group.wide ? " wide" : ""}"${S.group.wide ? ` style="--gw:${GW()}"` : ""}>${gHasAny() ? groupSVG() : `<div class="gempty">先點選角色或小物吧！</div>`}</div>
    </div><div class="gright">
    <button class="gx" data-close title="關閉" aria-label="關閉">✕</button>
    <h2>合照</h2>
    <p class="muted ghint">挑最多 ${GROUP_MAX} 個角色、加上小物、選一個背景，在合照裡直接拖拉換位置（往上拖會站到後面）。</p>
    <div class="gsize">${sel ? `<span>選到的${esc(selName)}：</span><button class="btn sm" data-gz="0.85">－ 縮小</button><button class="btn sm" data-gz="1.15">＋ 放大</button><button class="btn sm" data-gz="0">原本大小</button><span class="gbr"></span>
      <button class="btn sm" data-grot="-15">↺ 左轉</button><button class="btn sm" data-grot="15">↻ 右轉</button>${isProp(sel) ? "" : `<button class="btn sm" data-grot="lie">躺下</button>`}<button class="btn sm" data-grot="0">擺正</button><button class="btn sm" data-gflip>左右翻轉</button><span class="gbr"></span>
      <button class="btn sm" data-glayer="up">往前一層</button><button class="btn sm" data-glayer="down">往後一層</button><button class="btn sm" data-glayer="top">移到最前面</button><button class="btn sm" data-glayer="bottom">移到最後面</button>
      ${isProp(sel) ? `<button class="btn sm" data-gdup>複製</button><button class="btn sm" data-gdel>刪除</button>` : ""}`
      : `<span class="muted">點一下合照裡的角色或小物，就能放大縮小、轉角度（也可以用滑鼠滾輪；手機用兩根手指捏合、轉動）</span>`}</div>
    <div class="gmode"><button class="btn sm ${S.group.wide ? "" : "acc"}" data-gwide="0">直式</button><button class="btn sm ${S.group.wide ? "acc" : ""}" data-gwide="1">橫式</button></div>
    <div class="btns"><button class="btn acc" data-gdl ${gHasAny() ? "" : "disabled"}>下載合照</button><button class="btn" data-greset>角色重新排好</button><button class="btn" data-gclear>全部清掉</button><button class="btn" data-close>關閉</button></div>
    <div class="btns"><button class="btn vio" data-gsave>${S.group.sceneId ? "儲存（更新這張）" : "儲存合照"}</button>${S.group.sceneId ? `<button class="btn" data-gsavenew>另存一張新的</button>` : ""}<button class="btn" data-gnew>開一張新的</button></div>
    ${S.scenes.length ? `<h3>我的合照（${S.scenes.length}/${SCENE_MAX}）</h3><div class="gscenes">${S.scenes.map(sc => `<div class="gsc ${sc.id === S.group.sceneId ? "on" : ""}">
      <button class="gsc-open" data-gopen="${sc.id}" title="打開這張合照">${withGroup(Object.assign({}, sc.group, {wide:sc.group.wide}), () => groupSVG([0, 0]).replace(/ width="0" height="0"/, ""))}</button>
      <div class="gsc-tx">${esc(sc.at)}<button class="gsc-del" data-gdelsc="${sc.id}" title="刪掉這張">刪除</button></div></div>`).join("")}</div>` : ""}
    <h3>選角色</h3>
    <div class="items">${opts.map(o => { const n = S.group.picks.indexOf(o.id);
      return `<button class="it ${n >= 0 ? "on" : ""}" data-gp="${o.id}">${n >= 0 ? `<span class="wk">${n + 1}</span>` : ""}${drawLook(Object.assign(clone(DEFAULT_LOOK), o.look), {bg:false, vb:"40 20 220 440"})}${esc(o.name)}</button>`; }).join("")}</div>
    ${S.wardrobe.length ? "" : `<p class="muted" style="text-align:center">衣櫥還是空的：搭好一套按「存進衣櫥」，就能在這裡一起合照。</p>`}
    <h3>加小物（點一下就放進合照，可以放很多個）</h3>
    ${[...PROP_CATS, {name:"其他", keys:Object.keys(PROPS).filter(k => !PROP_CATS.some(c => c.keys.includes(k)))}].filter(c => c.keys.length).map(c => `<div class="gpcat">${esc(c.name)}</div><div class="items">${c.keys.filter(k => PROPS[k]).map(k => { const it = PROPS[k], s = Math.max(it.w, it.h) + 30, n = S.group.props.filter(p => p.t === k).length;
      return `<button class="it" data-gadd="${k}">${n ? `<span class="wk">${n}</span>` : ""}<svg viewBox="${-s / 2} ${-it.h / 2 - s / 2} ${s} ${s}">${it.draw()}</svg>${esc(it.name)}</button>`; }).join("")}</div>`).join("")}
    <h3>選背景</h3>
    <div class="items">${Object.entries(BGS).filter(([k, it]) => !lockedItem(it)).map(([k, it]) => `<button class="it ${S.group.bg === k ? "on" : ""}" data-gbg="${k}"><svg viewBox="0 60 300 300">${it.draw("#F7D3E0")}</svg>${esc(it.name)}</button>`).join("")}</div>
    </div></div>`;
  if(top) document.querySelector(".gright").scrollTop = top;
  if(groupFit()) return renderGroup();   // 量了實際空間發現寬度不對：用新的寬度再畫一次
  groupDrag();
}
// 拖拉：按住角色或小物拖到想要的位置，放開時記下來；兩根手指捏合縮放、轉動
function groupDrag(){
  const svg = document.querySelector(".gstage svg"); if(!svg) return;
  let drag = null, pinch = null;
  const ptrs = new Map();
  const pt = e => { const m = svg.getScreenCTM().inverse(); return {x:e.clientX * m.a + e.clientY * m.c + m.e, y:e.clientX * m.b + e.clientY * m.d + m.f}; };
  const dist = () => { const [a, b] = [...ptrs.values()]; return Math.hypot(a.x - b.x, a.y - b.y) || 1; };
  const ang = () => { const [a, b] = [...ptrs.values()]; return Math.atan2(b.y - a.y, b.x - a.x) * 180 / Math.PI; };
  // 選到的東西：外面畫一個虛線框，左上角 ✕ 直接刪掉，右下角的圓點拖一拖就能同時放大縮小和旋轉
  let box = null;
  const selG = groupSel && svg.querySelector(`[data-gid="${groupSel}"]`);
  if(selG){
    // 角色外面包著整張 300×470 的小畫布、明暗是蓋滿整張的方塊：只量真的畫出來的形狀，框才會貼著角色
    const r = {left:1e9, top:1e9, right:-1e9, bottom:-1e9};
    selG.querySelectorAll("path,ellipse,circle,polygon,line,text,rect").forEach(el => {
      if(el.closest("defs,clipPath,mask,pattern,[clip-path],[mask]")) return; const b = el.getBoundingClientRect(); if(!b.width && !b.height) return;
      r.left = Math.min(r.left, b.left); r.top = Math.min(r.top, b.top); r.right = Math.max(r.right, b.right); r.bottom = Math.max(r.bottom, b.bottom); });
    const m = svg.getScreenCTM().inverse(), u = 1 / svg.getScreenCTM().a;
    const tp = (x, y) => ({x:x * m.a + y * m.c + m.e, y:x * m.b + y * m.d + m.f});
    const a = tp(r.left, r.top), b = tp(r.right, r.bottom), vb = svg.viewBox.baseVal, rad = 13 * u;
    const cl = (v, lo, hi) => Math.max(lo + rad, Math.min(hi - rad, v));
    const x0 = cl(a.x, 0, vb.width), y0 = cl(a.y, 0, vb.height), x1 = cl(b.x, 0, vb.width), y1 = cl(b.y, 0, vb.height);
    box = {cx:(a.x + b.x) / 2, cy:(a.y + b.y) / 2};
    svg.insertAdjacentHTML("beforeend", `<g class="ghand"><rect x="${a.x}" y="${a.y}" width="${b.x - a.x}" height="${b.y - a.y}" fill="none" stroke="#E8679A" stroke-width="${2 * u}" stroke-dasharray="${6 * u} ${4 * u}" pointer-events="none"/>
      <g class="gh-del" style="cursor:pointer"><circle cx="${x0}" cy="${y0}" r="${rad}" fill="#fff" stroke="#D9414E" stroke-width="${2.5 * u}"/><path d="M${x0 - 5 * u} ${y0 - 5 * u} L${x0 + 5 * u} ${y0 + 5 * u} M${x0 + 5 * u} ${y0 - 5 * u} L${x0 - 5 * u} ${y0 + 5 * u}" stroke="#D9414E" stroke-width="${2.6 * u}" stroke-linecap="round"/></g>
      <g class="gh-rs" style="cursor:nwse-resize"><circle cx="${x1}" cy="${y1}" r="${rad}" fill="#E8679A" stroke="#fff" stroke-width="${2.5 * u}"/><path d="M${x1 - 5 * u} ${y1 + 1 * u} A${5 * u} ${5 * u} 0 1 1 ${x1 + 1 * u} ${y1 + 5 * u}" fill="none" stroke="#fff" stroke-width="${2.2 * u}" stroke-linecap="round"/></g></g>`);
  }
  svg.addEventListener("pointerdown", e => {
    // ✕：刪掉小物，或把角色從合照拿掉
    if(e.target.closest(".gh-del")){ e.preventDefault(); e.stopPropagation(); const k = groupSel;
      if(isProp(k)) S.group.props = S.group.props.filter(x => x.id !== k); else S.group.picks = S.group.picks.filter(x => x !== k);
      gForget(k); groupSel = ""; save(); return renderGroup(); }
    // 右下角圓點：以中心為準，拉遠變大、拉近變小，繞圈就轉
    if(e.target.closest(".gh-rs") && box){ e.preventDefault(); const it = gItem(groupSel), q = pt(e), g = svg.querySelector(`[data-gid="${groupSel}"]`);
      ptrs.set(e.pointerId, {x:e.clientX, y:e.clientY}); try{ svg.setPointerCapture(e.pointerId); }catch(err){}
      svg.querySelector(".ghand").style.display = "none";
      pinch = {g, it, key:it.key, handle:true, c:box, d0:Math.hypot(q.x - box.cx, q.y - box.cy) || 1, a0:Math.atan2(q.y - box.cy, q.x - box.cx) * 180 / Math.PI, m0:it.m, m:it.m, r0:it.a, r:it.a, p:it.p}; return; }
    ptrs.set(e.pointerId, {x:e.clientX, y:e.clientY}); try{ svg.setPointerCapture(e.pointerId); }catch(err){}
    if(ptrs.size === 2){
      const key = drag ? drag.key : groupSel, g = key && svg.querySelector(`[data-gid="${key}"]`);
      if(g){ const it = gItem(key); pinch = {g, it, key, d0:dist(), a0:ang(), m0:it.m, m:it.m, r0:it.a, r:it.a, p:drag ? drag.p : it.p}; groupSel = key; }
      e.preventDefault(); return;
    }
    const g = e.target.closest(".gch");
    if(!g){ if(ptrs.size === 1) groupSel = ""; return; }   // 點到空白的地方：取消選取，放開後虛線框就消失
    if(ptrs.size > 1) return;
    const it = gItem(g.dataset.gid), q = pt(e);
    groupSel = it.key;
    drag = {g, it, key:it.key, p:{...it.p}, dx:it.p.x - q.x, dy:it.p.y - q.y, moved:false};
    svg.appendChild(g); e.preventDefault();
  });
  svg.addEventListener("pointermove", e => {
    if(!ptrs.has(e.pointerId)) return;
    ptrs.set(e.pointerId, {x:e.clientX, y:e.clientY});
    if(pinch && pinch.handle){
      const q = pt(e); pinch.m = Math.max(.3, Math.min(3, pinch.m0 * Math.hypot(q.x - pinch.c.cx, q.y - pinch.c.cy) / pinch.d0));
      let da = Math.atan2(q.y - pinch.c.cy, q.x - pinch.c.cx) * 180 / Math.PI - pinch.a0; da = ((da + 540) % 360) - 180;
      pinch.r = pinch.r0 + (Math.abs(da) < 4 ? 0 : da);   // 只是拉大小時角度不要亂跳
      pinch.g.setAttribute("transform", gTf(pinch.it, pinch.p, pinch.it.base * pinch.m, pinch.r)); return;
    }
    if(pinch && ptrs.size >= 2){
      pinch.m = Math.max(.3, Math.min(3, pinch.m0 * dist() / pinch.d0));
      let da = ang() - pinch.a0; da = ((da + 540) % 360) - 180; pinch.r = pinch.r0 + da;
      pinch.g.setAttribute("transform", gTf(pinch.it, pinch.p, pinch.it.base * pinch.m, pinch.r)); return;
    }
    if(!drag || pinch) return; const q = pt(e);
    // 上下左右都可以自由拖（躺下來可以拖到床上、也能放到高處），只留一點邊不要整個拖出畫面
    drag.p = {x:Math.max(-40, Math.min(GW() + 40, q.x + drag.dx)), y:Math.max(20, Math.min(720, q.y + drag.dy))}; drag.moved = true;
    drag.g.setAttribute("transform", gTf(drag.it, drag.p, drag.it.base * drag.it.m, drag.it.a));
  });
  const end = e => {
    ptrs.delete(e.pointerId);
    if(pinch && (pinch.handle || ptrs.size < 2)){ gMap("size")[pinch.key] = pinch.m; gMap("rot")[pinch.key] = Math.round(pinch.r) % 360; save(); pinch = null; }
    if(ptrs.size) return;
    if(drag && drag.moved){ gMap("pos")[drag.key] = drag.p; save(); }
    drag = null; renderGroup();
  };
  svg.addEventListener("pointerup", end); svg.addEventListener("pointercancel", end);
  svg.addEventListener("wheel", e => { const g = e.target.closest(".gch"); if(!g) return; e.preventDefault(); groupSel = g.dataset.gid; groupResize(e.deltaY < 0 ? 1.08 : 1 / 1.08); }, {passive:false});
}
function groupResize(f){
  if(!groupSel) return toast("先點一下要調整的角色或小物");
  gMap("size")[groupSel] = Math.max(.3, Math.min(3, (gMap("size")[groupSel] || 1) * f)); save(); renderGroup();
}
// 合照開著的時候重新整理網頁，回來還是在合照
function showGroup(){ openPanel(""); $("panel").classList.add("wide"); S.groupOpen = true; save(); renderGroup(); }
// 視窗大小變了：合照也跟著重新撐滿
let groupRT = 0;
addEventListener("resize", () => { clearTimeout(groupRT); groupRT = setTimeout(() => { if(!$("ov").hidden && $("panel").classList.contains("wide")) renderGroup(); }, 200); });
$("bGroup").onclick = showGroup;
$("ov").addEventListener("click", e => {
  const p = e.target.closest("[data-gp]");
  if(p){ const id = p.dataset.gp, a = S.group.picks;
    if(a.includes(id)){ S.group.picks = a.filter(x => x !== id); gForget(id); }
    else if(a.length >= GROUP_MAX) return toast(`最多放 ${GROUP_MAX} 個角色`);
    else a.push(id);
    save(); return renderGroup(); }
  const ad = e.target.closest("[data-gadd]");
  if(ad){ S.group.props = S.group.props || [];
    if(S.group.props.length >= PROP_MAX) return toast(`小物最多放 ${PROP_MAX} 個`);
    const id = "p" + newId(); S.group.props.push({id, t:ad.dataset.gadd}); groupSel = id; save(); toast(`放了一個${PROPS[ad.dataset.gadd].name}，拖到想放的地方吧`); return renderGroup(); }
  const g = e.target.closest("[data-gbg]");
  if(g){ S.group.bg = g.dataset.gbg; save(); return renderGroup(); }
  if(e.target.closest("[data-gclear]")){ if(!confirm("要把合照裡的角色和小物全部清掉嗎？")) return; S.group.picks = []; S.group.props = []; ["pos", "size", "rot", "flip", "z"].forEach(k => S.group[k] = {}); groupSel = ""; save(); return renderGroup(); }
  if(e.target.closest("[data-greset]")){ gIds().forEach(gForget); save(); return renderGroup(); }
  if(e.target.closest("[data-gdel]") && isProp(groupSel)){ S.group.props = S.group.props.filter(x => x.id !== groupSel); gForget(groupSel); groupSel = ""; save(); return renderGroup(); }
  if(e.target.closest("[data-gdup]") && isProp(groupSel)){ const src = propOf(groupSel), id = "p" + newId(), it = gItem(groupSel);
    S.group.props.push({id, t:src.t}); ["size", "rot", "flip", "z"].forEach(k => { if(gMap(k)[groupSel] !== undefined) gMap(k)[id] = gMap(k)[groupSel]; });
    gMap("pos")[id] = {x:Math.min(GW(), it.p.x + 30), y:it.p.y}; groupSel = id; save(); return renderGroup(); }
  const ly = e.target.closest("[data-glayer]");
  if(ly && groupSel) return groupLayer(ly.dataset.glayer);
  if(e.target.closest("[data-gflip]") && groupSel){ gMap("flip")[groupSel] = !gMap("flip")[groupSel]; save(); return renderGroup(); }
  const ro = e.target.closest("[data-grot]");
  if(ro && groupSel){ const v = ro.dataset.grot, r = gMap("rot")[groupSel] || 0;
    gMap("rot")[groupSel] = v === "lie" ? (r === 90 ? -90 : 90) : +v ? r + +v : 0; save(); return renderGroup(); }
  const wd = e.target.closest("[data-gwide]");
  if(wd){ const w = wd.dataset.gwide === "1"; if(!!S.group.wide !== w){ const f = w ? (S.group.ww || 600) / 300 : 300 / GW(); Object.values(gMap("pos")).forEach(p => p.x *= f); S.group.wide = w; save(); } return renderGroup(); }
  const z = e.target.closest("[data-gz]");
  if(z && groupSel){ if(+z.dataset.gz) return groupResize(+z.dataset.gz); delete gMap("size")[groupSel]; save(); return renderGroup(); }
  if(e.target.closest("[data-gsave]")) return saveScene(false);
  if(e.target.closest("[data-gsavenew]")) return saveScene(true);
  if(e.target.closest("[data-gnew]")){ if(gHasAny() && !confirm("要開一張新的合照嗎？還沒儲存的修改會不見喔")) return; S.group = {picks:[], props:[], bg:S.group.bg || "park", wide:S.group.wide, ww:S.group.ww}; groupSel = ""; save(); return renderGroup(); }
  const op = e.target.closest("[data-gopen]");
  if(op){ const sc = S.scenes.find(x => x.id === op.dataset.gopen); if(!sc) return;
    if(sc.id !== S.group.sceneId && gHasAny() && !S.group.sceneId && !confirm("要打開這張合照嗎？現在這張還沒儲存的話會不見喔")) return;
    const ww = S.group.ww; S.group = Object.assign(clone(sc.group), {sceneId:sc.id}); if(S.group.wide && ww && S.group.ww !== ww){ /* 螢幕寬度不同：groupFit 會照比例調整 */ }
    groupSel = ""; save(); toast("打開合照了"); return renderGroup(); }
  const ds = e.target.closest("[data-gdelsc]");
  if(ds){ if(!confirm("確定要刪掉這張合照嗎？")) return; S.scenes = S.scenes.filter(x => x.id !== ds.dataset.gdelsc); if(S.group.sceneId === ds.dataset.gdelsc) delete S.group.sceneId; save(); return renderGroup(); }
  if(e.target.closest("[data-gdl]")) saveImage(groupSVG([GW() * 2, 940]), "我們的合照", GW() * 2);
});

// ---------- 下載圖片 ----------
$("bDownload").onclick = () => saveImage(drawLook(L(), {size:[600, 940]}), "我的穿搭");
function saveImage(svg, name, w = 600){
  const img = new Image();
  img.onload = () => {
    const cv = document.createElement("canvas"); cv.width = w; cv.height = 940;
    cv.getContext("2d").drawImage(img, 0, 0, w, 940);
    // 手機（尤其 iPhone、LINE 裡開的網頁）下載檔案常常沒反應：直接顯示圖片，長按就能存到相簿
    if(TOUCH){ const url = cv.toDataURL("image/png"); openPanel(`<h2>存成圖片</h2><p class="muted" style="text-align:center">長按下面的圖片，選「儲存影像」或「加入照片」就能存到相簿。</p><img src="${url}" alt="${name}" style="width:100%;max-width:320px;display:block;margin:0 auto;border-radius:12px;border:2px solid #EAD7DF"><div class="btns"><a class="btn" href="${url}" download="我的穿搭.png">下載檔案</a><button class="btn" data-close>關閉</button></div>`); return; }
    cv.toBlob(b => { const a = document.createElement("a"); a.href = URL.createObjectURL(b); a.download = `${name}.png`; a.click(); setTimeout(() => URL.revokeObjectURL(a.href), 2000); }, "image/png");
  };
  img.onerror = () => toast("圖片產生失敗，請再試一次");
  img.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
}

// ---------- 彈出視窗 ----------
function openPanel(html){ S.groupOpen = false; $("panel").className = "panel"; $("panel").innerHTML = html; $("ov").hidden = false; $("ov").scrollTop = 0; }
function closePanel(){ $("ov").hidden = true; if(S.groupOpen){ S.groupOpen = false; save(); } }
$("ov").addEventListener("click", e => {
  if(e.target === $("ov") || e.target.closest("[data-close]")) return closePanel();
  const th = e.target.closest("[data-theme]");
  if(th){ S.theme = th.dataset.theme; save(); closePanel(); render(); toast(`主題：${TH[S.theme].name}。搭好了按「送出評分」`); return; }
  const a = e.target.closest("[data-act]");
  if(a && a.dataset.act === "save") return saveLook();
  if(a && a.dataset.act === "themes") return showThemes();
  const w = e.target.closest("[data-wear]");
  if(w){ const it = S.wardrobe[+w.dataset.wear]; snap(); S.look = Object.assign(clone(DEFAULT_LOOK), clone(it.look)); S.editing = it.id; save(); closePanel(); render(); toast(`開始編輯「${wdName(it)}」，改好按「更新」`); return; }
  const rn = e.target.closest("[data-ren]");
  if(rn){ const w = S.wardrobe[+rn.dataset.ren], v = prompt("幫這套穿搭取個名字（例如：小美、我家的貓）", w.name || wdName(w));
    if(v !== null){ w.name = v.trim().slice(0, 12) || undefined; if(!w.name) delete w.name; save(); showWardrobe(); } return; }
  const d = e.target.closest("[data-del]");
  if(d && confirm("確定要刪掉這套穿搭嗎？")){ S.wardrobe.splice(+d.dataset.del, 1); save(); showWardrobe(); }
});
addEventListener("keydown", e => { if(e.key === "Escape" && !$("ov").hidden) closePanel(); });

// ---------- 穿搭牆（存在 Supabase，大家看得到；每個瀏覽器用自己產生的代號，不用登入） ----------
const SUPA_URL = "https://bbydhrcyxxwxtbtemszb.supabase.co", SUPA_KEY = "sb_publishable_hlbBn6LWqC5oLdCS32lchw_xzZeIph7";
async function rpc(fn, body){
  const r = await fetch(`${SUPA_URL}/rest/v1/rpc/${fn}`, {method:"POST", headers:{apikey:SUPA_KEY, Authorization:`Bearer ${SUPA_KEY}`, "Content-Type":"application/json"}, body:JSON.stringify(body)});
  if(!r.ok) throw new Error(await r.text());
  return r.json();
}
if(!S.client){ S.client = crypto.randomUUID ? crypto.randomUUID() : "10000000-1000-4000-8000-100000000000".replace(/[018]/g, ch => (ch ^ Math.random() * 16 >> ch / 4).toString(16)); save(); }
const wallErr = e => /contest closed/.test(e.message) ? "這週的比賽已經結束，名次已經固定，不能再按讚了。" : /too many/.test(e.message) ? "貼太快了，等 20 秒再試。" : /daily limit/.test(e.message) ? "今天已經貼 10 套了，明天再來！" : /own post/.test(e.message) ? "不能幫自己按讚喔。" : /function|PGRST202/.test(e.message) ? "穿搭牆還沒開放（資料庫還沒設定好）。" : "連線失敗，請稍後再試。";
// 別人貼的穿搭：每一個欄位都要檢查過才拿來畫（只接受清單裡的單品和 #RRGGBB 顏色），避免被塞奇怪的東西
const HEX = /^#[0-9a-fA-F]{6}$/;
function sanitizeLook(raw){
  const o = clone(DEFAULT_LOOK);
  if(!raw || typeof raw !== "object") return o;
  [["hairB", HAIRB], ["hairF", HAIRF], ["eyes", EYES], ["brows", BROWS], ["mouth", MOUTHS], ["bg", BGS]].forEach(([k, list]) => { if(typeof raw[k] === "string" && list[raw[k]]) o[k] = raw[k]; });
  [["pet", PETS], ["sticker", STICKERS]].forEach(([k, list]) => { if(raw[k] === "" || (typeof raw[k] === "string" && list[raw[k]])) o[k] = raw[k]; });
  ["hairC", "eyeC", "bgC", "fur"].forEach(k => { if(HEX.test(raw[k])) o[k] = raw[k]; });
  [["faceShape", FACES], ["nose", NOSES], ["pose", POSES], ["role", ROLES], ["species", SPECIES], ["furPat", FUR_PATS], ["petMouth", PET_MOUTHS]].forEach(([k, list]) => { if(typeof raw[k] === "string" && list[raw[k]]) o[k] = raw[k]; });
  if(raw.hairTip === "" || HEX.test(raw.hairTip)) o.hairTip = raw.hairTip;
  ["blush", "lip", "shadow"].forEach(k => { if(raw[k] === "" || HEX.test(raw[k])) o[k] = raw[k]; });
  if(Number.isInteger(raw.skin) && raw.skin >= 0 && raw.skin < SKIN.length) o.skin = raw.skin;
  o.freckles = raw.freckles === true; o.gloss = raw.gloss === true; o.glitter = raw.glitter === true;
  if(raw.eyeliner === "" || LINERS[raw.eyeliner]) o.eyeliner = raw.eyeliner;
  o.fun = Array.isArray(raw.fun) ? raw.fun.filter(x => FUN[x]).slice(0, 9) : [];
  Object.keys(SLOT_LISTS).forEach(k => {
    const v = raw[k];
    o[k] = v && typeof v === "object" && typeof v.id === "string" && SLOT_LISTS[k][v.id] && HEX.test(v.color) ? {id:v.id, color:v.color, pat:PATS[v.pat] ? v.pat : "none"} : null;
  });
  return o;
}
const W8 = {sort:"new", offset:0, rows:[], more:false, loading:false};
const HEART = `<svg viewBox="0 0 20 20"><path d="M10 17 C1 11 2 4 6.5 4 C8.5 4 9.6 5.4 10 6.4 C10.4 5.4 11.5 4 13.5 4 C18 4 19 11 10 17 Z" fill="currentColor"/></svg>`;
function wallCard(r, rank){
  const look = sanitizeLook(r.look), t = TH[r.theme], closed = !!r.contest && r.contest !== weekOf(Date.now()).key;
  const likeOff = r.mine ? `disabled title="自己的穿搭"` : closed ? `disabled title="比賽已經結束"` : "";
  return `<div class="wp ${r.mine ? "mine" : ""}" data-id="${r.id}">${rank && r.likes > 0 ? `<span class="rank r${rank}">${rank}</span>` : ""}${drawLook(look).replace("<svg ", '<svg class="look" ')}
    <div class="tx"><b>${esc(r.title || "我的穿搭")}</b>${esc(r.name)}${r.mine ? "（你）" : ""}${t ? ` <span class="tg">${esc(t.name)}</span>` : ""}${r.contest ? ` <span class="tg" style="background:#FFE7B8;color:#8A5300">比賽：${esc(contestOf(r.contest).name)}</span>` : ""}</div>
    <div class="row"><button class="likeb ${r.liked ? "on" : ""}" data-w="like" ${likeOff}>${HEART}<span>${r.likes}</span></button><button class="btn sm" data-w="try">穿穿看</button><button class="linkb" data-w="share">分享</button>${r.mine ? `<button class="linkb" data-w="del" style="margin-left:0">刪除</button>` : r.rank ? "" : `<button class="linkb" data-w="report" style="margin-left:0">檢舉</button>`}</div></div>`;
}
function renderWall(msg){
  const tabs = [["contest", "本週比賽"], ["new", "最新"], ["week", "本週熱門"], ["top", "最多讚"], ["hall", "名人堂"], ["mine", "我貼的"]];
  const wk = weekOf(Date.now()), ct = contestOf(wk.key), sun = new Date(wk.mon + 6 * DAY);
  const bar = W8.sort === "contest" ? `<div class="contestbar"><span>本週主題比賽：<b>${esc(ct.name)}</b><br><span class="small">${esc(ct.desc)}${weekItems() ? `<br>相關單品：${esc(weekItems())}` : ""}<br>比賽到 ${sun.getUTCMonth() + 1}/${sun.getUTCDate()}（日）晚上 12 點，讚數最多的前三名會進名人堂。</span></span><button class="btn sm acc" data-w="post" data-c="1" style="margin-left:auto">參加比賽</button></div>`
    : W8.sort === "hall" ? `<div class="contestbar"><span>每週主題比賽讚數最多的前三名。比賽結束後就不能再按讚，名次就固定了。</span></div>` : "";
  const body = W8.sort === "hall" ? hallHtml() : `<div class="wall">${W8.rows.map((r, i) => wallCard(r, W8.sort === "contest" && i < 3 ? i + 1 : 0)).join("")}</div>`;
  openPanel(`<h2>穿搭牆</h2>
    <p class="muted small" style="text-align:center">大家貼上來的穿搭。喜歡就按愛心，也可以「穿穿看」換到自己身上。</p>
    <div class="btns" style="margin-top:6px"><button class="btn acc" data-w="post">貼上我現在的穿搭</button><button class="btn" data-close>關閉</button></div>
    <div class="wtabs">${tabs.map(([k, n]) => `<button class="${W8.sort === k ? "on" : ""}" data-w="sort" data-v="${k}">${n}</button>`).join("")}</div>
    ${bar}<div id="wallBox">${msg ? `<p style="text-align:center">${esc(msg)}</p>` : W8.rows.length ? body : `<p style="text-align:center" class="muted">${W8.sort === "mine" ? "你還沒有貼過穿搭。" : W8.sort === "hall" ? "還沒有比賽結果，第一屆的冠軍會是你嗎？" : W8.sort === "contest" ? "這週還沒有人參加，按「參加比賽」當第一個！" : "還沒有人貼，當第一個吧！"}</p>`}</div>
    ${W8.more ? `<div class="btns"><button class="btn" data-w="more">看更多</button></div>` : ""}`);
}
async function loadWall(sort, append){
  if(W8.loading) return;
  W8.loading = true;
  if(!append){ W8.sort = sort; W8.offset = 0; W8.rows = []; renderWall("載入中⋯⋯"); }
  try{
    const rows = W8.sort === "hall" ? await rpc("dressup_hall", {p_weeks:8}) : await rpc("dressup_wall", {p_sort:W8.sort, p_client:S.client, p_limit:24, p_offset:W8.offset});
    if(W8.sort === "hall"){ W8.rows = rows; W8.more = false; W8.loading = false; return renderWall(); }
    W8.rows = W8.rows.concat(rows); W8.offset += rows.length; W8.more = rows.length === 24;
    W8.loading = false; renderWall();
  }catch(e){ W8.loading = false; renderWall(wallErr(e)); }
}
$("bWall").onclick = () => loadWall(W8.sort);
function showPost(msg, contest){
  openPanel(`<h2>貼到穿搭牆</h2>
    <div class="postbox">${drawLook(L())}<div>
      <label>你的暱稱<input id="wName" maxlength="12" value="${esc(S.wallName || "")}" placeholder="1～12 個字"></label>
      <label>幫這套穿搭取個名字（選填）<input id="wTitle" maxlength="20" placeholder="例如：夏天的海風"></label>
      ${TH[S.theme] ? `<p class="small">會標上主題：<b>${esc(TH[S.theme].name)}</b></p>` : ""}
      <label class="chk"><input type="checkbox" id="wContest" ${contest ? "checked" : ""}> 參加本週主題比賽「${esc(contestOf(weekOf(Date.now()).key).name)}」</label>
      <p class="muted small">穿搭牆大家都看得到，請不要用真實姓名，也不要寫不好的字。被檢舉太多次會自動隱藏。</p>
      ${msg ? `<p class="small" style="color:#D9414E;font-weight:800">${esc(msg)}</p>` : ""}
    </div></div>
    <div class="btns"><button class="btn acc" data-w="send">貼上去</button><button class="btn" data-w="back">回穿搭牆</button></div>`);
  setTimeout(() => { const el = $(S.wallName ? "wTitle" : "wName"); if(el) el.focus(); }, 0);
}
let posting = false;
async function sendPost(){
  const name = ($("wName").value || "").trim(), title = ($("wTitle").value || "").trim(), contest = $("wContest").checked;
  if(!name){ $("wName").focus(); return; }
  if(posting) return; posting = true;
  S.wallName = name; save();
  const look = clone(L()); Object.keys(SLOT_LISTS).forEach(k => { if(look[k]) delete look[k].custom; });
  try{
    const body = {p_client:S.client, p_name:name, p_title:title, p_look:look, p_theme:S.theme || ""};
    try{ await rpc("dressup_post", {...body, p_contest:contest}); }
    catch(e){ if(!contest && /PGRST202|p_contest/.test(e.message)) await rpc("dressup_post", body); else throw e; }   // 資料庫還沒更新到 v17
    posting = false; toast(contest ? "參加比賽了！快請朋友來按讚" : "貼上去了！"); loadWall(contest ? "contest" : "new");
  }catch(e){ posting = false; showPost(wallErr(e), contest); }
}
$("ov").addEventListener("click", async e => {
  const b = e.target.closest("[data-w]"); if(!b) return;
  const act = b.dataset.w, card = b.closest("[data-id]"), id = card ? +card.dataset.id : 0, row = W8.rows.find(r => r.id === id);
  if(act === "sort") return loadWall(b.dataset.v);
  if(act === "more") return loadWall(W8.sort, true);
  if(act === "post") return showPost("", b.dataset.c === "1" || W8.sort === "contest");
  if(act === "back") return renderWall();
  if(act === "send") return sendPost();
  if(!row) return;
  if(act === "share") return shareLook(sanitizeLook(row.look));
  if(act === "try"){
    const stripped = wearLook(row.look);
    toast(stripped ? "換上了！有些限定單品你還沒解鎖，先拿掉了" : `換上「${row.title || "我的穿搭"}」了！`);
  }else if(act === "like"){
    // 先改畫面，再送出（失敗再改回來）
    row.liked = !row.liked; row.likes += row.liked ? 1 : -1;
    b.classList.toggle("on", row.liked); b.querySelector("span").textContent = row.likes;
    try{ const r = await rpc("dressup_like", {p_client:S.client, p_id:id}); row.likes = r.likes; row.liked = r.liked; b.classList.toggle("on", r.liked); b.querySelector("span").textContent = r.likes; }
    catch(err){ row.liked = !row.liked; row.likes += row.liked ? 1 : -1; b.classList.toggle("on", row.liked); b.querySelector("span").textContent = row.likes; toast(wallErr(err)); }
  }else if(act === "del"){
    if(!confirm("確定要從穿搭牆刪掉這套嗎？")) return;
    try{ await rpc("dressup_delete", {p_client:S.client, p_id:id}); W8.rows = W8.rows.filter(r => r.id !== id); renderWall(); toast("刪掉了"); }catch(err){ toast(wallErr(err)); }
  }else if(act === "report"){
    if(!confirm("這套穿搭的名字或內容不恰當嗎？被檢舉 3 次會自動隱藏。")) return;
    try{ await rpc("dressup_report", {p_client:S.client, p_id:id}); toast("已經收到檢舉，謝謝你"); b.disabled = true; b.textContent = "已檢舉"; }catch(err){ toast(wallErr(err)); }
  }
});
$("ov").addEventListener("keydown", e => { if(e.key === "Enter" && (e.target.id === "wName" || e.target.id === "wTitle")){ e.preventDefault(); sendPost(); } });
function hallHtml(){
  let last = "", h = "";
  W8.rows.forEach(r => {
    if(r.week !== last){ last = r.week; const [y, w] = r.week.split("-W"); h += `<div class="hallwk">${y} 年第 ${+w} 週・${esc(contestOf(r.week).name)}</div>`; }
    h += wallCard({...r, contest:r.week}, +r.rank);
  });
  return `<div class="wall">${h}</div>`;
}

// ---------- 每週主題比賽：週次用台灣時間（週一到週日），跟資料庫的 dressup_week() 一樣 ----------
const DAY = 864e5;
function weekOf(ms){
  const t = new Date(ms + 8 * 3600e3), d = Date.UTC(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate());
  const mon = d - ((new Date(d).getUTCDay() + 6) % 7) * DAY, thu = mon + 3 * DAY, y = new Date(thu).getUTCFullYear();
  const wk = 1 + Math.floor((thu - Date.UTC(y, 0, 1)) / (7 * DAY));
  return {key:`${y}-W${String(wk).padStart(2, "0")}`, mon};
}
// 節日那一週用節日主題，其他週輪流
// tags：跟這個主題有關的單品標籤（單品小圖會標上「本週」）
const HOLIDAYS = [[9, 31, {name:"萬聖節派對", desc:"不給糖就搗蛋！來一套有點神祕的萬聖節造型。", tags:["halloween"]}], [11, 25, {name:"聖誕節交換禮物", desc:"聖誕帽、毛衣、禮物，穿出節日的溫暖。", tags:["xmas"]}], [0, 1, {name:"新年穿新衣", desc:"新的一年，穿上最喜歡的新衣服，拿個紅包！", tags:["newyear"]}]];
const CONTESTS = [
  {name:"校外教學", desc:"要走很多路、拍很多照片，方便又好看。", tags:["school"]}, {name:"森林野餐", desc:"帶著野餐籃去草地上，清新自然風。", tags:["casual"]},
  {name:"偶像演唱會", desc:"今天是舞台上的偶像！閃亮登場。", tags:["party"]}, {name:"動物派對", desc:"帶上寵物，或打扮成你最喜歡的動物。", tags:["animal"]},
  {name:"甜點下午茶", desc:"粉粉嫩嫩的甜點風，配一杯珍奶也可以。", tags:["snack"]}, {name:"雨天散步", desc:"下雨也要漂亮出門，雨傘雨鞋準備好。", tags:["rain"]},
  {name:"運動明星", desc:"球場上的焦點，帥氣又有活力。", tags:["sport"]}, {name:"童話故事", desc:"像從童話書裡走出來的角色。", tags:["formal"]},
  {name:"全身同色系", desc:"選一個顏色，從頭到腳都用同一個色系。", tags:[]}, {name:"復古風", desc:"像爸爸媽媽年輕時的照片，格紋、條紋都很適合。", tags:["neat"]},
];
// 本週比賽的標籤、相關單品（列在比賽說明裡，例如「女巫帽（配件）」）
const weekTags = () => contestOf(weekOf(Date.now()).key).tags || [];
function weekItems(){
  const tags = weekTags(); if(!tags.length) return "";
  const where = {top:"上衣", bottom:"下身", dress:"洋裝", outer:"外套", socks:"鞋襪", shoes:"鞋襪", hat:"配件", glasses:"配件", hairpin:"配件", neck:"配件", scarf:"配件", bag:"配件", hand:"配件", petwear:"寵物", pettoy:"寵物"};
  const list = Object.entries(SLOT_LISTS).flatMap(([k, items]) => Object.values(items).filter(it => (it.tags || []).some(t => tags.includes(t))).map(it => `${it.name}（${where[k]}${it.lock && !unlocked(it.lock) ? "，挑戰解鎖" : ""}）`));
  const bgs = Object.values(BGS).filter(b => b.tags.some(t => tags.includes(t))).map(b => `${b.name}（背景）`);
  return [...list, ...bgs].join("、");
}
function contestOf(key){
  const [y, w] = String(key).split("-W").map(Number);
  if(!y || !w) return {name:"本週主題", desc:""};
  const jan4 = Date.UTC(y, 0, 4), mon = jan4 - ((new Date(jan4).getUTCDay() + 6) % 7) * DAY + (w - 1) * 7 * DAY;
  for(let i = 0; i < 7; i++){ const d = new Date(mon + i * DAY); const h = HOLIDAYS.find(([m, dd]) => d.getUTCMonth() === m && d.getUTCDate() === dd); if(h) return h[2]; }
  return CONTESTS[(y * 53 + w) % CONTESTS.length];
}

// ---------- 復原 ----------
function snap(){ HIST.push(JSON.stringify(S.look)); if(HIST.length > 40) HIST.shift(); }
function undo(){ if(!HIST.length){ toast("沒有可以復原的了"); return; } S.look = JSON.parse(HIST.pop()); save(); render(); }
$("bUndo").onclick = undo;
// 重新開始：整套換回一開始的樣子（按錯可以按「復原」救回來）
$("bReset").onclick = () => {
  if(!confirm("要清除現在的穿搭，從頭開始嗎？（按錯可以按「復原」救回來）")) return;
  snap(); S.look = clone(DEFAULT_LOOK); delete S.editing; save(); render(); toast("重新開始了！");
};
addEventListener("keydown", e => { if((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "z" && !/INPUT|TEXTAREA/.test(document.activeElement.tagName)){ e.preventDefault(); undo(); } });

// ---------- 換上別人的穿搭（穿搭牆、分享連結）：還沒解鎖的限定單品先拿掉 ----------
function wearLook(raw){
  const look = sanitizeLook(raw);
  let stripped = false;
  Object.keys(SLOT_LISTS).forEach(k => { if(look[k] && lockedItem(SLOT_LISTS[k][look[k].id])){ look[k] = null; stripped = true; } });
  if(lockedItem(EYES[look.eyes])){ look.eyes = "round"; stripped = true; }
  snap(); S.look = look; delete S.editing; save(); closePanel(); render();
  return stripped;
}

// ---------- 分享連結：整套穿搭放在網址裡（?look=…），朋友打開就看得到 ----------
const b64e = s => btoa(unescape(encodeURIComponent(s))).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
const b64d = s => decodeURIComponent(escape(atob(s.replace(/-/g, "+").replace(/_/g, "/"))));
async function shareLook(look){
  const l = clone(look); Object.keys(SLOT_LISTS).forEach(k => { if(l[k]) delete l[k].custom; });
  const url = location.origin + location.pathname + "?look=" + b64e(JSON.stringify(l));
  if(TOUCH && navigator.share){ try{ await navigator.share({title:"我的穿搭｜換裝小舞台", url}); return; }catch(e){ if(e.name === "AbortError") return; } }
  try{ await navigator.clipboard.writeText(url); toast("分享連結複製好了，貼給朋友就能看到這套穿搭"); }
  catch(e){ openPanel(`<h2>分享連結</h2><p>複製下面的連結傳給朋友：</p><input readonly value="${esc(url)}" onfocus="this.select()" style="width:100%;font:inherit;padding:8px;border:2px solid #3A2A20;border-radius:10px"><div class="btns"><button class="btn" data-close>關閉</button></div>`); }
}
$("bShare").onclick = () => shareLook(L());
let sharedLook = null;
{
  const q = new URLSearchParams(location.search).get("look");
  if(q){
    try{ sharedLook = JSON.parse(b64d(q)); }catch(e){ sharedLook = null; }
    history.replaceState(null, "", location.pathname);
    if(sharedLook) setTimeout(() => openPanel(`<h2>朋友分享的穿搭</h2><div style="max-width:260px;margin:8px auto;border:2px solid #EAD7DF;border-radius:14px;overflow:hidden;line-height:0">${drawLook(sanitizeLook(sharedLook))}</div><div class="btns"><button class="btn acc" data-w="wearshared">穿上這套</button><button class="btn" data-close>只是看看</button></div>`), 0);
  }
}
$("ov").addEventListener("click", e => { if(e.target.closest("[data-w=wearshared]") && sharedLook){ const s = wearLook(sharedLook); toast(s ? "換上了！有些限定單品你還沒解鎖，先拿掉了" : "換上了！"); } });

// ---------- 手機：往下選衣服時，右下角顯示小預覽 ----------
if("IntersectionObserver" in window){
  new IntersectionObserver(([en]) => { $("mini").hidden = en.isIntersecting || innerWidth > 820; }, {threshold:.25}).observe($("stage"));
}
$("mini").onclick = () => $("stage").scrollIntoView({behavior:"smooth", block:"center"});

render();
// 上次重新整理前正在合照：直接回到合照
if(S.groupOpen) showGroup();
