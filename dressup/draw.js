/* =========================================================
   換裝小舞台：畫圖（角色、衣服、配件、背景全部用 SVG 畫，沒有用圖片）
   畫布 300×470；角色正面站著，頭大身體小的Ｑ版比例。
   左右對稱的東西只寫左邊，用 MX() 鏡射成右邊。
   每個單品：name 名稱、tags 主題標籤（評分用）、color 預設顏色、draw(fill, color) 回傳 SVG。
   ========================================================= */
const INK = "#3A2A20";
const W = 300, H = 470;

// ---------- 小工具 ----------
const MX = d => d.replace(/(-?\d+(?:\.\d+)?) (-?\d+(?:\.\d+)?)/g, (_, x, y) => `${+(W - x).toFixed(1)} ${y}`);
// extra 裡自己指定 stroke 的話，就不要再加預設的墨色外框（同一個屬性寫兩次，存成圖片時會壞掉）
const SK = extra => /(^|\s)stroke=/.test(extra) ? "" : `stroke="${INK}"`;
const P = (d, fill, sw = 2.6, extra = "") => `<path d="${d}" fill="${fill}" ${SK(extra)} stroke-width="${sw}" stroke-linejoin="round" stroke-linecap="round" ${extra}/>`;
const PB = (d, fill, sw = 2.6, extra = "") => P(d, fill, sw, extra) + P(MX(d), fill, sw, extra);   // 左右各一個
const LN = (d, sw = 2.2, col = INK, extra = "") => `<path d="${d}" fill="none" stroke="${col}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" ${extra}/>`;
const C = (cx, cy, r, fill, sw = 2.4, extra = "") => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}" ${sw ? SK(extra) : 'stroke="none"'} stroke-width="${sw}" ${extra}/>`;
const E = (cx, cy, rx, ry, fill, sw = 2.4, extra = "") => `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="${fill}" ${sw ? SK(extra) : 'stroke="none"'} stroke-width="${sw}" ${extra}/>`;
// 有外框的粗線（手腳、袖子、褲管）：先畫粗的墨線，再畫細一點的顏色
const TUBE = (d, w, fill) => `<path d="${d}" fill="none" stroke="${INK}" stroke-width="${w + 5}" stroke-linecap="round"/><path d="${d}" fill="none" stroke="${fill}" stroke-width="${w}" stroke-linecap="round"/>`;
const TUBES = (d, w, fill) => TUBE(d, w, fill) + TUBE(MX(d), w, fill);
// 顏色變亮（amt > 0）或變暗（amt < 0）
function shade(hex, amt){
  const n = parseInt(hex.slice(1), 16), r = n >> 16, g = n >> 8 & 255, b = n & 255;
  const t = amt < 0 ? 0 : 255, k = Math.abs(amt);
  const f = v => Math.round(v + (t - v) * k);
  return "#" + [f(r), f(g), f(b)].map(v => v.toString(16).padStart(2, "0")).join("");
}
// 兩個顏色混合（t = 0 是 a，1 是 b）
function mix(a, b, t){
  const p = h => [parseInt(h.slice(1, 3), 16), parseInt(h.slice(3, 5), 16), parseInt(h.slice(5, 7), 16)];
  const x = p(a), y = p(b);
  return "#" + x.map((v, i) => Math.round(v + (y[i] - v) * t).toString(16).padStart(2, "0")).join("");
}
const lum = hex => { const n = parseInt(hex.slice(1), 16); return ((n >> 16) * .299 + (n >> 8 & 255) * .587 + (n & 255) * .114) / 255; };
function star(cx, cy, r, fill, sw = 2){
  let d = "";
  for(let i = 0; i < 10; i++){ const a = -Math.PI / 2 + i * Math.PI / 5, q = i % 2 ? r * .45 : r; d += (i ? "L" : "M") + (cx + Math.cos(a) * q).toFixed(1) + " " + (cy + Math.sin(a) * q).toFixed(1) + " "; }
  return P(d + "Z", fill, sw);
}
const heartD = (cx, cy, s) => `M${cx} ${cy + s * .9} C${cx - s * 1.6} ${cy - s * .2} ${cx - s * .7} ${cy - s * 1.3} ${cx} ${cy - s * .45} C${cx + s * .7} ${cy - s * 1.3} ${cx + s * 1.6} ${cy - s * .2} ${cx} ${cy + s * .9} Z`;

// ---------- 調色盤 ----------
const PAL = ["#FFFFFF", "#F6E7C8", "#D9B99B", "#8A5A3C", "#2E2B2B", "#9EA3AD", "#2C3E70", "#4C8FE0", "#9BD0F5", "#9ADBC0", "#4FA36B", "#F6D65A", "#F59A4A", "#D9414E", "#F7A8C4", "#E8679A", "#B9A3E8", "#7E5BC2"];
const HAIR_PAL = ["#2B2523", "#5A3A2A", "#8A5A3C", "#C98A4B", "#E8C26A", "#D9DCE3", "#F2A7C3", "#7DB4E8", "#A889DD", "#C2473F", "#7CC9A0"];
// 眼睛顏色：柔和、偏自然的色調（不用太飽和的紅色和桃紅）
// 舊版的眼睛顏色（比較飽和）：畫的時候換成最接近的柔和顏色（衣櫥、穿搭牆、分享連結裡的舊穿搭都適用）
const EYE_OLD = {"#5A3A2A":"#6B4530", "#2B2523":"#3A2C28", "#4C8FE0":"#5E7FA8", "#4FA36B":"#6E8B4E", "#7E5BC2":"#8E78B8", "#D9414E":"#B87D8B", "#C99A3A":"#C9A24A", "#E8679A":"#B87D8B"};
const EYE_PAL = ["#6B4530", "#3A2C28", "#A8743A", "#6E8B4E", "#5E7FA8", "#6FA8D6", "#8E78B8", "#B87D8B", "#C9A24A"];
const SKIN = ["#FFE6D6", "#F8D2B8", "#EBBB97", "#C98E68", "#9A6646", "#FFF1E8", "#7A4E35"];
// 臉型：chin 是下巴的位置（下巴下面的影子跟著移動）
const FACES = {
  round:  {name:"圓臉", chin:194, d:"M92 131 C92 95 118 68 150 68 C182 68 208 95 208 131 C208 167 182 194 150 194 C118 194 92 167 92 131 Z"},
  oval:   {name:"鵝蛋臉", chin:198, d:"M93 128 C93 94 118 68 150 68 C182 68 207 94 207 128 C207 162 184 196 150 198 C116 196 93 162 93 128 Z"},
  heart:  {name:"瓜子臉", chin:198, d:"M92 126 C92 92 118 68 150 68 C182 68 208 92 208 126 C208 152 194 172 172 188 Q160 197 150 198 Q140 197 128 188 C106 172 92 152 92 126 Z"},
  square: {name:"方圓臉", chin:196, d:"M92 128 C92 92 118 68 150 68 C182 68 208 92 208 128 C208 158 205 178 190 188 Q172 196 150 196 Q128 196 110 188 C95 178 92 158 92 128 Z"},
};
const NOSES = {small:{name:"小巧鼻"}, round:{name:"圓鼻頭"}, line:{name:"挺鼻"}, dot:{name:"點點鼻"}};
function drawNose(type, skin){
  const c = shade(skin, -.35);
  if(type === "round") return E(150, 153, 3.6, 2.6, shade(skin, -.16), 0) + LN("M146.5 154 Q150 156.5 153.5 154", 1.6, c);
  if(type === "line") return LN("M152 143 Q154.5 151 150.5 155 Q148.5 156 147 155", 1.8, c);
  if(type === "dot") return C(150, 153.5, 1.5, c, 0);
  return LN("M148 153 Q150 155 152 153", 2, c);
}
// 挑染的顏色（髮尾）
const TIP_PAL = ["#F2A7C3", "#E8679A", "#7DB4E8", "#A889DD", "#7CC9A0", "#E8C26A", "#D9DCE3", "#C2473F"];
const BLUSH = ["#FF9AAE", "#FFB38A", "#F27BA0", "#E8A0D6", "#FF8A80", "#F7C8A0", "#C9A0DC", "#FFB0C8"];
const LIPS = ["#E8667A", "#D9414E", "#F59A8A", "#C2475E", "#E8679A", "#B5655F", "#8E3A59", "#7E5BC2", "#2E2B2B"];
const SHADOW = ["#F7A8C4", "#B9A3E8", "#9BD0F5", "#F6C27A", "#9ADBC0", "#C99A6A", "#7A6BB0", "#F2C14E", "#8FD0C8", "#3A3A48"];
// 眼線（畫在睜開的眼睛上）
const LINERS = {thin:{name:"細眼線"}, wing:{name:"上揚眼線"}, cat:{name:"貓眼眼線"}, dots:{name:"點點眼線"}};
const OPEN_EYES = ["round", "sparkle", "lashes", "droopy", "upturn", "almond", "teary", "cat", "cross"];
function drawLiner(type, cx, right){
  const cy = EYE_Y, o = right ? 1 : -1;
  if(type === "dots") return [0, 1, 2].map(i => C(cx + (5 + i * 4) * o, cy + 13 - i * 2, 1.2, INK, 0)).join("");
  const top = `M${cx - 11} ${cy - 9} Q${cx} ${cy - 16} ${cx + 11} ${cy - 9}`;
  if(type === "thin") return LN(top, 2.2);
  if(type === "wing") return LN(top, 2.6) + LN(`M${cx + 10 * o} ${cy - 9.5} Q${cx + 15 * o} ${cy - 11} ${cx + 18 * o} ${cy - 15}`, 2.4);
  return LN(top, 3.6) + P(`M${cx + 9 * o} ${cy - 11} L${cx + 21 * o} ${cy - 16} L${cx + 11 * o} ${cy - 6} Z`, INK, 1) + LN(`M${cx + 4 * o} ${cy + 12} Q${cx + 10 * o} ${cy + 10} ${cx + 13 * o} ${cy + 4}`, 1.8);
}
// 搞笑的臉（可以同時選好幾個）
const FUN = {
  snot:     {name:"鼻涕泡泡"},
  mustache: {name:"小鬍子"},
  pig:      {name:"豬鼻子"},
  unibrow:  {name:"一字眉"},
  eyebags:  {name:"黑眼圈"},
  bandaid:  {name:"OK 繃"},
  anger:    {name:"生氣青筋"},
  sweat:    {name:"冒冷汗"},
  dirt:     {name:"臉髒髒"},
};
const PATS = {none:"素色", dots:"點點", stripes:"條紋", check:"格紋", flower:"小花"};

// 花紋：每次畫的時候用不同的 id（同一頁面有很多張小圖，id 不能重複）
function patDef(id, pat, color){
  const dk = shade(color, -.22), lt = lum(color) > .78 ? shade(color, -.3) : shade(color, .5);
  const head = `<pattern id="${id}" patternUnits="userSpaceOnUse" `;
  if(pat === "dots") return head + `width="12" height="12"><rect width="12" height="12" fill="${color}"/><circle cx="3" cy="3" r="1.9" fill="${lt}"/><circle cx="9" cy="9" r="1.9" fill="${lt}"/></pattern>`;
  if(pat === "stripes") return head + `width="10" height="10"><rect width="10" height="10" fill="${color}"/><rect width="4" height="10" fill="${dk}" opacity=".55"/></pattern>`;
  if(pat === "check") return head + `width="14" height="14"><rect width="14" height="14" fill="${color}"/><rect width="7" height="14" fill="${dk}" opacity=".35"/><rect width="14" height="7" fill="${dk}" opacity=".35"/></pattern>`;
  if(pat === "flower") return head + `width="16" height="16"><rect width="16" height="16" fill="${color}"/><g fill="${lt}"><circle cx="4" cy="2.6" r="1.5"/><circle cx="5.6" cy="4" r="1.5"/><circle cx="4" cy="5.4" r="1.5"/><circle cx="2.4" cy="4" r="1.5"/></g><circle cx="4" cy="4" r="1" fill="#F6D65A"/><g fill="${lt}"><circle cx="12" cy="10.6" r="1.5"/><circle cx="13.6" cy="12" r="1.5"/><circle cx="12" cy="13.4" r="1.5"/><circle cx="10.4" cy="12" r="1.5"/></g><circle cx="12" cy="12" r="1" fill="#F6D65A"/></pattern>`;
  return "";
}

// ---------- 身體的位置 ----------
const ARM = "M119 222 C108 240 102 280 100 312";          // 左手臂（右手臂用鏡射）
const SLEEVE_L = "M119 221 C108 240 102 278 100.5 304";   // 長袖
const SLEEVE_S = "M119 220 Q113 232 110 246";             // 短袖
const LEG = "M137 316 L135 428";
// 身體輪廓：脖子順著斜斜的肩線接到身體；手臂從肩膀往手腕變細；腿從大腿往腳踝變細（左邊，右邊用鏡射）
const BODY = "M141 176 L141 203 C141 209 133 211 124 213 C115 216 112 221 113 230 L116 304 Q118 320 122 322 L178 322 Q182 320 184 304 L187 230 C188 221 185 216 176 213 C167 211 159 209 159 203 L159 176 Z";
const ARM_SHAPE = "M114 220 C104 244 97 274 95 312 L107 312 C109 284 116 256 126 234 Z";
const LEG_SHAPE = "M122 314 C123 350 127 392 128 431 L142 431 C142 394 146 352 150 318 Z";
// 手：手掌加大拇指（大拇指朝身體）；外框不畫上緣，跟手臂或袖口接起來沒有線
const HAND = "M94 304 C91 314 92 323 99 327 C105 330 110 326 110 320 C113 319 115 315 113 312 C111 310 109 311 109 307 L108.4 302";
// 袖子：跟著手臂的形狀，上寬下窄（w 越大越寬鬆）；長袖有袖口線
// 動作：down 自然站立、behind 雙手背在後面（手臂往下再轉到身體後面，手藏起來）
const POSES = {down:{name:"自然站立"}, behind:{name:"雙手背在後面"}, wave:{name:"揮手"}, peace:{name:"比 YA"}};
// 沿著骨架（幾個點）的粗線轉成一個形狀：手肘轉彎的地方用斜接、兩頭圓圓的（彎起來的手臂和袖子用）
function tube(pts, w){
  const h = w / 2, L = [], R = [], nrm = (x, y) => { const l = Math.hypot(x, y) || 1; return [x / l, y / l]; };
  pts.forEach((p, i) => {
    const d1 = i ? nrm(p[0] - pts[i - 1][0], p[1] - pts[i - 1][1]) : null, d2 = i < pts.length - 1 ? nrm(pts[i + 1][0] - p[0], pts[i + 1][1] - p[1]) : null;
    const t = d1 && d2 ? nrm(d1[0] + d2[0], d1[1] + d2[1]) : (d1 || d2);
    const nx = -t[1], ny = t[0], m = d1 && d2 ? Math.min(2.2, 1 / Math.max(.25, nx * -d1[1] + ny * d1[0])) : 1;
    L.push([p[0] + nx * h * m, p[1] + ny * h * m]); R.push([p[0] - nx * h * m, p[1] - ny * h * m]);
  });
  const q = a => `${a[0].toFixed(1)} ${a[1].toFixed(1)}`;
  return `M${q(L[0])} ${L.slice(1).map(a => "L" + q(a)).join(" ")} A${h} ${h} 0 0 0 ${q(R[R.length - 1])} ${R.slice(0, -1).reverse().map(a => "L" + q(a)).join(" ")} A${h} ${h} 0 0 0 ${q(L[0])} Z`;
}
// 比 YA：畫面左邊那隻手，手肘往下彎、前臂往上，手停在臉頰旁邊
const PEACE_ARM = [[117, 226], [80, 260], [108, 226]];
// 彎起來的手：上臂和前臂各是一段圓頭的粗線，合在一起手肘就是圓的
const bent = (pts, w) => [tube([pts[0], pts[1]], w), tube([pts[1], pts[2]], w)];
let POSE = "down";   // 畫的時候的動作（袖子跟著手臂的位置）
const ARM_BEHIND = "M114 220 C104 244 101 270 109 296 L123 293 C118 270 120 246 126 234 Z";
// 揮手：畫面左邊那隻手往外、往上舉，手掌張開在臉的斜上方（拿東西的是另一隻手）
const ARM_WAVE = "M113 238 C109 228 105 222 100 217 C90 209 81 201 76 192 C70 182 67 170 66 158 L80 158 C80 168 83 176 88 184 C93 192 100 198 110 204 C116 207 121 210 126 212 Z";
const HAND_WAVE = "M80 160 C84 156 88 152 87 148 C85 145 81 147 80 149 L80 140 Q80 133 77 133 Q75 133 75 138 L74 132 Q73 128 71 128 Q68 128 69 133 L68 134 Q66 130 64 131 Q62 132 63 137 L62 140 Q60 137 58 138 Q56 140 58 145 C60 152 62 156 66 160";
// 袖子的形狀（回傳路徑清單，衣服把袖子和衣身合成一塊描邊，中間不會有一條線）；長袖的袖口線另外畫
const sleevesL = (w = 26) => { const k = (w - 24) / 2;
  const down = `M${113 - k} 218 C${101 - k} 242 ${93 - k} 272 ${91 - k} 305 L${111 + k * .4} 305 C${113 + k * .4} 282 119 258 129 234 Z`;
  if(POSE === "peace") return [...bent([[117, 223], [80, 260], [106, 232]], 19 + 2 * k), MX(down)];
  if(POSE === "wave") return [`M111 ${244 + k} C104 ${232 + k} 98 ${224 + k} 96 ${220 + k} C${86 - k} ${212 + k} ${78 - k} ${203 + k} ${72 - k} 193 C${66 - k} 183 ${63 - k} 171 ${62 - k} 160 L${84 + k} 160 C${84 + k} 168 ${87 + k} 175 ${92 + k} ${182 - k} C97 ${189 - k} 104 ${195 - k} 114 ${200 - k} C120 ${203 - k} 125 ${206 - k} 131 ${208 - k} Z`, MX(down)];
  if(POSE === "behind") { const d = `M${113 - k} 218 C${101 - k} 244 ${98 - k} 270 ${106 - k} 298 L${125 + k * .4} 295 C119 270 121 248 129 234 Z`; return [d, MX(d)]; }
  return [down, MX(down)];
};
const cuffs = (w = 26) => { const k = (w - 24) / 2;
  if(POSE === "behind") return "";
  const down = `M${91.5 - k} 298 L${111 + k * .4} 298`;
  if(POSE === "peace") return LN(`M${95 - k} ${229 - k * .5} L${111 + k} ${245 + k * .5}`, 1.6) + LN(MX(down), 1.6);
  return POSE === "wave" ? LN(`M${62.5 - k} 166 L${84 + k} 166`, 1.6) + LN(MX(down), 1.6) : LN(down, 1.6) + LN(MX(down), 1.6);
};
const sleevesS = (w = 26) => { const k = (w - 26) / 2;
  const down = `M${113 - k} 216 C${105 - k} 228 ${99 - k} 242 ${98 - k} 254 L121 258 C122 248 125 238 130 230 Z`;
  if(POSE === "peace") return [tube([[118, 223], [97, 237]], 22 + 2 * k), MX(down)];
  if(POSE === "wave") return [`M111 ${246 + k} C105 ${236 + k} 99 ${228 + k} 94 ${224 + k} L${103 + k} ${196 - k} C110 200 118 205 132 ${208 - k} Z`, MX(down)];
  return [down, MX(down)];
};
// 合成一塊描邊：先畫粗的墨線，再蓋上顏色（只留最外圈的輪廓）
const U = (ds, f) => ds.map(d => `<path d="${d}" fill="${f}" stroke="${INK}" stroke-width="5.2" stroke-linejoin="round"/>`).join("") + ds.map(d => `<path d="${d}" fill="${f}"/>`).join("");
const SLV_L = (f, w = 26) => U(sleevesL(w), f) + cuffs(w);
const SLV_S = (f, w = 26) => U(sleevesS(w), f);
const PANTLEG = "M112 300 L120 425 Q135 431 149.5 425 L151.5 300 Z";
const PANTHIP = "M112.5 290 L187.5 290 L188 312 L112 312 Z";
// 長褲：褲頭和兩條褲管合成一塊描邊（只描最外圈），中間一條縫線分出兩條腿
const PANTS = f => [PANTHIP, PANTLEG, MX(PANTLEG)].map(d => `<path d="${d}" fill="${f}" stroke="${INK}" stroke-width="5.2" stroke-linejoin="round"/>`).join("") + [PANTHIP, PANTLEG, MX(PANTLEG)].map(d => `<path d="${d}" fill="${f}"/>`).join("") + LN("M150 300 L150 426", 2.2);   // 長褲的左褲管
const TORSO = "M111 231 C110 221 113 215 123 212 C131 210 139 209 140 203 Q150 210 160 203 C161 209 169 210 177 212 C187 215 190 221 189 231 L186.5 302 Q150 308 113.5 302 Z";

// ---------- 上衣 ----------
const TOPS = {
  tee:     {name:"T 恤", tags:["casual", "summer", "sport", "snack"], color:"#FFFFFF",
    draw:(f, c) => U([...sleevesS(26), TORSO], f) + LN("M137 211 Q150 222 163 211")},
  shirt:   {name:"襯衫", long:true, tags:["school", "neat", "casual"], color:"#FFFFFF",
    draw:(f, c) => U([...sleevesL(24), TORSO], f) + cuffs(24) + LN("M150 216 L150 302", 1.8) + [232, 254, 276].map(y => C(153, y, 2, shade(c, -.3), 0)).join("") + PB("M150 217 L134 206 L128 222 Z", f)},
  hoodie:  {name:"帽 T", long:true, tags:["casual", "warm", "sport"], color:"#B9A3E8",
    draw:(f, c) => P("M118 216 Q150 194 182 216 Q150 232 118 216 Z", shade(c, -.15)) + U([...sleevesL(27), TORSO], f) + cuffs(27) + P("M128 266 L172 266 L177 294 L123 294 Z", f, 2.2) + LN("M142 220 L140 248", 1.8) + LN("M158 220 L160 248", 1.8) + C(140, 250, 2.2, "#fff", 1.4) + C(160, 250, 2.2, "#fff", 1.4)},
  cami:    {name:"細肩帶背心", tags:["summer", "beach", "party"], color:"#F7A8C4",
    draw:(f, c) => LN("M126 234 L128 210", 2.6) + LN("M174 234 L172 210", 2.6) + P("M113 234 Q150 244 187 234 L186.5 302 Q150 308 113.5 302 Z", f)},
  sweater: {name:"毛衣", long:true, tags:["warm", "winter", "casual"], color:"#F6D65A",
    draw:(f, c) => U([...sleevesL(28), TORSO], f) + cuffs(28) + P("M116 290 Q150 296 184 290 L184 302 Q150 308 116 302 Z", shade(c, -.1), 2.2) + LN("M136 209 Q150 222 164 209", 3, shade(c, -.25)) + [126, 138, 150, 162, 174].map(x => LN(`M${x} 292 L${x} 302`, 1.4, shade(c, -.3))).join("")},
  sailor:  {name:"水手服", long:true, tags:["school", "neat"], color:"#FFFFFF",
    draw:(f, c) => U([...sleevesL(24), TORSO], f) + cuffs(24) + P("M126 211 L150 248 L174 211 L187 224 L185 236 L150 256 L115 236 L113 224 Z", "#2C3E70") + LN("M118 230 L150 249 L182 230", 1.6, "#fff") + P("M150 252 L136 244 L136 262 Z M150 252 L164 244 L164 262 Z", "#D9414E", 2) + P("M150 252 L142 280 L150 274 L158 280 Z", "#D9414E", 2)},
  jersey:  {name:"運動服", tags:["sport"], color:"#4C8FE0",
    draw:(f, c) => U([...sleevesS(26), TORSO], f) + P("M138 209 L150 226 L162 209", "none", 2.6) + `<text x="150" y="276" text-anchor="middle" font-size="30" font-weight="900" fill="#fff" stroke="${INK}" stroke-width="1.6" font-family="system-ui,sans-serif">7</text>` + LN("M117 236 L116 298", 4, "#fff") + LN("M183 236 L184 298", 4, "#fff")},
  crop:    {name:"短版上衣", tags:["summer", "casual", "party"], color:"#9ADBC0",
    draw:(f, c) => U([...sleevesS(26), "M111 231 C110 221 113 215 123 212 C131 210 139 209 140 203 Q150 210 160 203 C161 209 169 210 177 212 C187 215 190 221 189 231 L187.5 266 Q150 274 112.5 266 Z"], f) + LN("M138 211 Q150 220 162 211")},
};
// ---------- 下身 ----------
const BOTTOMS = {
  pleat:  {name:"百褶裙", tags:["school", "neat"], color:"#2C3E70",
    draw:(f, c) => P("M112.5 290 L187.5 290 L199 348 L101 348 Z", f) + [[128, 118], [139, 134], [150, 150], [161, 166], [172, 182]].map(([a, b]) => LN(`M${a} 292 L${b} 346`, 1.6, shade(c, -.35))).join("")},
  mini:   {name:"A 字短裙", tags:["casual", "school", "summer"], color:"#F7A8C4",
    draw:(f, c) => P("M112.5 290 L187.5 290 L195 336 Q150 342 105 336 Z", f) + LN("M113 297 L187 297", 1.6)},
  jeans:  {name:"牛仔褲", tags:["casual", "snack"], color:"#4C8FE0",
    draw:(f, c) => PANTS(f) + LN("M150 300 L150 332", 1.6) + LN("M125 298 Q132 306 140 300", 1.4, shade(c, -.35))},
  shorts: {name:"短褲", tags:["summer", "beach", "sport", "snack"], color:"#D9B99B",
    draw:(f, c) => P("M112.5 290 L187.5 290 L191 344 L154 344 L150 326 L146 344 L109 344 Z", f) + LN("M113 297 L187 297", 1.6)},
  track:  {name:"運動褲", long:true, tags:["sport"], color:"#2C3E70",
    draw:(f, c) => PANTS(f) + LN("M124 300 L122 424", 3.4, "#fff") + LN("M176 300 L178 424", 3.4, "#fff")},
  maxi:   {name:"長裙", tags:["neat", "casual"], color:"#9ADBC0",
    draw:(f, c) => P("M112.5 290 L187.5 290 L205 412 Q150 420 95 412 Z", f) + LN("M113 300 L187 300", 1.6)},
};
// ---------- 洋裝（穿了會蓋過上衣和下身；overTop：吊帶裙要露出裡面的上衣） ----------
const DRESSES = {
  sundress: {name:"夏日洋裝", tags:["summer", "beach", "casual"], color:"#F6D65A",
    draw:(f, c) => LN("M126 234 L128 210", 2.6) + LN("M174 234 L172 210", 2.6) + P("M113 234 Q150 244 187 234 L187.5 290 L203 358 Q150 366 97 358 L112.5 290 Z", f) + LN("M113 290 Q150 296 187 290", 2.4, shade(c, -.3))},
  gown:     {name:"舞會禮服", tags:["party", "formal", "fancy"], color:"#B9A3E8",
    draw:(f, c) => C(116, 222, 13, f) + C(184, 222, 13, f) + P("M113 230 Q150 240 187 230 L187.5 288 Q230 380 240 440 Q215 452 195 444 Q172 456 150 446 Q128 456 105 444 Q85 452 60 440 Q70 380 112.5 288 Z", f) + LN("M113 288 Q150 296 187 288", 2.4) + [[150, 320], [124, 380], [176, 380], [100, 420], [200, 420]].map(([x, y]) => star(x, y, 5, "#fff", 1.2)).join("")},
  yukata:   {name:"浴衣", long:true, tags:["festival", "summer"], color:"#9BD0F5",
    draw:(f, c) => (POSE === "peace" ? P("M72 252 Q64 276 68 298 L96 298 Q98 274 90 258 Z", f) + U(bent([[117, 222], [80, 260], [105, 234]], 22), f) + P(MX("M120 218 L98 230 L86 302 L112 302 L124 240 Z"), f) :
      POSE === "wave" ? P("M74 176 Q66 200 68 232 L96 234 Q98 206 92 182 Z", f) + P("M110 250 C95 237 80 218 72 200 C65 186 61 172 61 160 L86 160 C86 168 90 175 96 182 C104 192 116 200 132 206 Z", f) + P(MX("M120 218 L98 230 L86 302 L112 302 L124 240 Z"), f)
      : PB(POSE === "behind" ? "M120 218 L100 232 L96 298 L120 298 L124 240 Z" : "M120 218 L98 230 L86 302 L112 302 L124 240 Z", f)) + P("M114 222 Q150 206 186 222 L190 422 L110 422 Z", f) + P("M140 208 L160 268", "none", 2.4) + P("M160 208 L150 232", "none", 2.4) + P("M114 268 L186 268 L186 296 L114 296 Z", "#F2C14E") + P("M150 282 L136 302 L150 296 L164 302 Z", "#E8679A", 2)},
  qipao:    {name:"旗袍", tags:["party", "formal", "fancy"], color:"#D9414E",
    draw:(f, c) => U([...sleevesS(25), "M111 231 C110 221 113 215 123 212 C131 210 139 209 140 203 Q150 210 160 203 C161 209 169 210 177 212 C187 215 190 221 189 231 L187 300 Q192 360 188 404 L162 404 L160 370 L156 404 L112 404 Q108 360 113 300 Z"], f) + P("M138 208 L138 200 L162 200 L162 208", f, 2.2) + LN("M150 212 Q170 222 182 238", 2, "#F6D65A") + [226, 244].map(y => LN(`M172 ${y} L182 ${y}`, 2.4, "#F6D65A")).join("")},
  pinafore: {name:"吊帶裙", tags:["school", "casual", "neat"], color:"#8A5A3C", overTop:true,
    draw:(f, c) => LN("M130 210 L134 250", 4) + LN("M170 210 L166 250", 4) + LN("M130 210 L134 250", 2.4, c) + LN("M170 210 L166 250", 2.4, c) + P("M132 246 L168 246 L170 286 L187.5 290 L197 350 L103 350 L112.5 290 L130 286 Z", f) + C(134, 252, 2.6, "#F6D65A", 1.4) + C(166, 252, 2.6, "#F6D65A", 1.4)},
};
// ---------- 外套 ----------
const OUTER_PANEL = "M111 231 C110 221 113 215 123 212 C131 210 139 209 140 203 L144 304 L114 304 Z";
const OUTERS = {
  jacket:   {name:"夾克", long:true, tags:["casual", "warm"], color:"#4FA36B",
    draw:(f, c) => U([...sleevesL(29), OUTER_PANEL, MX(OUTER_PANEL)], f) + cuffs(29) + PB("M140 208 L132 230 L144 238", "none", 2.2) + PB("M118 296 L142 296", "none", 2)},
  coat:     {name:"長大衣", long:true, tags:["winter", "warm", "neat"], color:"#D9B99B",
    draw:(f, c) => U([...sleevesL(30), "M111 231 C110 221 113 215 123 212 C131 210 139 209 140 203 L146 382 L104 382 Z", MX("M111 231 C110 221 113 215 123 212 C131 210 139 209 140 203 L146 382 L104 382 Z")], f) + cuffs(30) + PB("M140 208 L130 236 L145 246", f, 2.2) + [270, 300, 330].map(y => C(140, y, 3, shade(c, -.35), 1.4) + C(160, y, 3, shade(c, -.35), 1.4)).join("") + P("M112 296 L188 296 L188 306 L112 306 Z", shade(c, -.15), 2)},
  cardigan: {name:"開襟衫", long:true, tags:["school", "neat", "warm"], color:"#F6E7C8",
    draw:(f, c) => U([...sleevesL(27), "M111 231 C110 221 113 215 123 212 C131 210 139 209 139 203 L146 302 L114 302 Z", MX("M111 231 C110 221 113 215 123 212 C131 210 139 209 139 203 L146 302 L114 302 Z")], f) + cuffs(27) + [240, 262, 284].map(y => C(141, y, 2.6, shade(c, -.35), 1.2)).join("") + PB("M116 292 L144 294", "none", 1.6)},
  blazer:   {name:"西裝外套", long:true, tags:["school", "formal", "neat"], color:"#2C3E70",
    draw:(f, c) => U([...sleevesL(28), "M111 231 C110 221 113 215 123 212 C131 210 139 209 140 203 L146 308 L114 308 Z", MX("M111 231 C110 221 113 215 123 212 C131 210 139 209 140 203 L146 308 L114 308 Z")], f) + cuffs(28) + PB("M140 208 L128 238 L146 262", f, 2.2) + P("M122 276 L136 276", "none", 2) + star(176, 248, 6, "#F6D65A", 1.4)},
  raincoat: {name:"雨衣", long:true, tags:["rain"], color:"#F6D65A",
    draw:(f, c) => P("M118 216 Q150 194 182 216 Q150 230 118 216 Z", shade(c, -.12)) + U([...sleevesL(30), "M111 231 C110 221 113 215 123 212 C131 210 139 209 140 203 Q150 210 160 203 C161 209 169 210 177 212 C187 215 190 221 189 231 L196 364 Q150 372 104 364 Z"], f) + cuffs(30) + LN("M150 214 L150 366", 1.8) + [240, 276, 312].map(y => C(156, y, 3, "#fff", 1.4)).join("")},
};
// ---------- 襪子、鞋子 ----------
const SOCKS = {
  short:   {name:"短襪", tags:["casual", "sport"], color:"#FFFFFF", draw:(f) => TUBES("M135.5 410 L135 428", 23, f)},
  knee:    {name:"及膝襪", tags:["school", "neat"], color:"#2E2B2B", draw:(f) => TUBES("M136.6 352 L135 428", 23, f)},
  striped: {name:"條紋長襪", tags:["casual", "winter"], color:"#E8679A", stripe:true, draw:(f) => TUBES("M136.6 352 L135 428", 23, f)},
};
const SHOE = "M120 438 Q120 424 134 424 Q148 424 148 438 Q148 447 134 447 Q120 447 120 438 Z";
const SHOES = {
  sneaker:  {name:"運動鞋", tags:["sport", "casual", "snack"], color:"#FFFFFF",
    draw:(f, c) => PB(SHOE, f) + PB("M121 441 Q134 447 147 441", "none", 2) + PB("M129 430 L139 432 M129 435 L139 436", "none", 1.6)},
  maryjane: {name:"娃娃鞋", tags:["school", "neat", "party", "formal"], color:"#2E2B2B",
    draw:(f, c) => PB(SHOE, f) + PB("M123 430 L145 430", "none", 2.6) + [140, 160].map(x => C(x, 430, 2, "#F6D65A", 1)).join("")},
  canvas:   {name:"帆布鞋", tags:["casual", "school", "snack"], color:"#D9414E",
    draw:(f, c) => PB(SHOE, f) + PB("M121 440 Q134 446 147 440 L148 438 Q148 447 134 447 Q120 447 120 438 Z", "#fff", 2) + PB("M126 440 Q126 434 134 434 Q142 434 142 440", "#fff", 1.8)},
  boots:    {name:"長靴", tags:["winter", "warm"], color:"#8A5A3C",
    draw:(f, c) => PB("M122 376 L148 376 L148 438 Q148 447 134 447 Q120 447 120 438 Z", f) + PB("M121 384 L149 384", "none", 2)},
  sandals:  {name:"涼鞋", tags:["summer", "beach"], color:"#F59A4A",
    draw:(f, c) => PB("M122 442 L146 442", "none", 4.5) + PB("M124 431 L144 431", "none", 4.5) + `<g>${LN("M122 442 L146 442", 2.6, c) + LN(MX("M122 442 L146 442"), 2.6, c) + LN("M124 431 L144 431", 2.6, c) + LN(MX("M124 431 L144 431"), 2.6, c)}</g>`, bare:true},
  geta:     {name:"木屐", tags:["festival"], color:"#D9414E",
    draw:(f, c) => PB("M121 444 L147 444 L147 450 L121 450 Z", "#C99A6A", 2) + PB("M126 436 L134 430 L142 436", "none", 2.8) + LN("M126 436 L134 430 L142 436", 1.8, c) + LN(MX("M126 436 L134 430 L142 436"), 1.8, c), bare:true},
  rainboots:{name:"雨鞋", tags:["rain"], color:"#F6D65A",
    draw:(f, c) => PB("M122 392 L148 392 L148 438 Q148 447 134 447 Q120 447 120 438 Z", f) + PB("M127 400 L127 428", "none", 2.4, `stroke="#fff" opacity=".7"`)},
};

// ---------- 頭髮 ----------
const TAIL = "M100 84 C80 84 62 104 58 140 C54 180 62 214 58 250 C56 274 50 292 54 308 Q60 298 64 302 Q66 288 72 296 Q74 282 80 290 C84 262 80 232 84 200 C88 170 96 146 92 124 C90 108 96 96 106 92 Z";
const TAIL_LINES = "M88 98 C72 112 66 150 70 190 C74 230 66 270 62 298 M96 112 C84 140 84 180 80 222";
const PONY = "M198 70 C232 66 252 100 250 150 C248 200 238 230 244 270 Q236 262 232 272 Q228 258 222 266 Q220 250 214 256 C220 220 224 180 220 140 C218 110 206 92 192 86 Z";
const strand = h => shade(h, lum(h) < .25 ? .25 : -.22);
const TIE = (x, y, rot) => `<g transform="translate(${x} ${y}) rotate(${rot})">${E(0, 0, 5.5, 9, "#F2668B", 2.2)}${LN("M-3 -5 L3 -5 M-3 5 L3 5", 1.2, "#fff", 'opacity=".7"')}</g>`;
// 後面的頭髮（畫在身體後面）；side：臉兩邊要不要有垂下來的髮絲
const HAIRB = {
  long:  {name:"長直髮", side:true, draw:h => P("M88 120 C80 52 220 52 212 120 C214 180 222 240 230 292 Q224 300 218 294 Q216 310 206 302 Q198 316 190 304 Q178 312 170 304 L130 304 Q122 312 110 304 Q102 316 94 302 Q84 310 82 294 Q76 300 70 292 C78 240 86 180 88 120 Z", h) + LN("M84 170 Q82 230 90 290 M216 170 Q218 230 210 290 M96 200 Q96 250 102 296 M204 200 Q204 250 198 296", 1.6, shade(h, lum(h) < .25 ? .25 : -.22), `opacity=".7"`)},
  wavy:  {name:"大波浪", side:true, draw:h => P("M88 120 C82 52 218 52 212 120 C226 170 210 220 228 260 Q222 300 196 296 Q174 308 150 300 Q126 308 104 296 Q78 300 72 260 C90 220 74 170 88 120 Z", h)},
  // 雙馬尾：從綁髮的地方細細的出來，往外蓬再順順垂下，髮尾一束一束；髮圈畫在瀏海前面（front）
  twin:  {name:"雙馬尾", side:true, draw:h => P("M90 124 C86 60 214 60 210 124 Z", h) + PB(TAIL, h) + LN(TAIL_LINES + " " + MX(TAIL_LINES), 1.6, strand(h), `opacity=".75"`),
    front:() => TIE(97, 90, -35) + TIE(203, 90, 35)},
  pony:  {name:"馬尾", draw:h => P("M90 124 C86 60 214 60 210 124 Z", h) + P(PONY, h) + LN("M210 84 C238 104 244 170 234 250 M204 96 C226 130 228 200 220 268", 1.6, strand(h), `opacity=".75"`),
    front:() => TIE(200, 74, 40)},
  bob:   {name:"鮑伯頭", draw:h => P("M86 126 C80 56 220 56 214 126 C216 160 218 178 226 194 Q214 202 204 194 Q200 200 190 196 L110 196 Q100 200 96 194 Q86 202 74 194 C82 178 84 160 86 126 Z", h)},
  short: {name:"短髮", draw:h => P("M88 126 C84 60 216 60 212 126 L213 166 Q208 176 198 170 L102 170 Q92 176 87 166 Z", h)},
  bun:   {name:"丸子頭", draw:(h, hat) => (hat ? "" : C(150, 50, 24, h) + LN("M134 64 Q150 72 166 64", 4, "#F2668B")) + P("M88 126 C84 60 216 60 212 126 L208 150 Q150 158 92 150 Z", h)},
};
// 瀏海（畫在臉的前面）：頭頂到額頭的形狀
const CROWN = "M89 152 C82 80 114 52 150 52 C186 52 218 80 211 152";
const HAIRF = {
  blunt: {name:"齊瀏海", d:" C209 128 204 112 192 106 Q171 111 150 110 Q129 111 108 106 C96 112 91 128 89 152 Z", cl:[108, 106], cr:[108, 106], lines:"M122 72 Q116 90 116 106 M150 62 Q147 86 148 108 M178 72 Q184 90 184 106"},
  wispy: {name:"空氣瀏海", d:" C209 126 203 108 192 104 Q186 110 180 116 Q176 106 168 104 Q163 112 158 118 Q154 108 146 106 Q141 113 136 118 Q132 108 124 105 Q118 111 114 116 Q112 108 108 104 C96 110 91 126 89 152 Z", cl:[108, 104], cr:[108, 104], lines:"M136 70 Q130 92 136 116 M166 70 Q172 92 166 116"},
  side:  {name:"旁分", d:" C208 116 196 92 172 84 C156 98 134 110 112 116 C100 120 93 132 89 152 Z", cl:[112, 116], cr:[104, 92], lines:"M172 60 Q170 72 172 84 M150 70 Q132 92 112 112 M196 80 Q204 98 206 120"},
  center:{name:"中分", d:" C209 112 194 84 150 76 C106 84 91 112 89 152 Z", cl:[98, 116], cr:[98, 116], lines:"M150 54 L150 76 M136 66 Q112 80 100 116 M164 66 Q188 80 200 116"},
  spiky: {name:"刺刺短髮", d:" C209 122 200 104 188 100 L182 112 L172 98 L164 112 L152 96 L142 112 L132 98 L124 112 L114 100 C100 104 91 122 89 152 Z", cl:[114, 100], cr:[114, 100], lines:"M130 66 Q128 84 132 98 M170 66 Q172 84 168 98"},
};
// 從瀏海的轉角 (x, y) 順著往下垂到下巴旁邊
// 沒有長髮絲的髮型：太陽穴一小撮圓圓的短髮，讓瀏海自然收尾（不會尖尖的刺出來）
const shortLock = ([x, y]) => `M${x} ${y} C${x - 3} ${y + 22} ${x - 4} 148 106 164 Q98 172 91 164 C86 150 86 132 ${Math.max(x - 14, 92)} ${y + 16} Z`;
// 男生的短髮：鬢角短短的，露出耳朵
const tinyLock = ([x, y]) => `M${x} ${y} C${x - 2} ${y + 14} 104 134 102 146 Q97 151 92 146 C89 136 88 126 ${Math.max(x - 14, 92)} ${y + 14} Z`;
const sideLock = ([x, y]) => `M${x} ${y} C${x - 5} ${y + 10} 100 124 99 144 C98 162 103 180 111 194 Q109 205 101 213 Q99 202 93 194 C88 180 86 162 86 146 C86 128 ${Math.max(x - 16, 90)} ${y + 6} ${Math.max(x - 10, 92)} ${y - 2} Z`;

// ---------- 臉 ----------
const EYE_X = [128, 172], EYE_Y = 138;
const EYES = {
  round:   {name:"圓圓眼"},
  sparkle: {name:"閃亮眼"},
  lashes:  {name:"長睫毛"},
  droopy:  {name:"下垂眼"},
  upturn:  {name:"上挑眼"},
  almond:  {name:"杏眼"},
  teary:   {name:"淚汪汪"},
  heart:   {name:"愛心眼"},
  bean:    {name:"豆豆眼"},
  smile:   {name:"笑眼"},
  squint:  {name:"用力閉眼"},
  cross:   {name:"鬥雞眼"},
  deadfish:{name:"死魚眼"},
  spiral:  {name:"轉圈圈眼"},
  cat:     {name:"貓咪眼"},
  wink:    {name:"眨眼"},
  sleepy:  {name:"睏睏眼"},
  star:    {name:"星星眼", lock:"school"},
};
// 虹膜：上方偏深（眼皮的陰影）、下方有一點亮色反光；瞳孔用深咖啡
function iris(cx, cy, rx, ry, ec, hl = 3){
  const dark = mix(ec, "#2B1D16", .6), light = shade(ec, .4);
  return E(cx, cy, rx, ry, ec, 2.4) +
    `<path d="M${cx - rx + 1} ${cy - 1} A${rx - 1} ${ry - 1} 0 0 1 ${cx + rx - 1} ${cy - 1} Q${cx} ${cy - ry * .35} ${cx - rx + 1} ${cy - 1} Z" fill="${dark}" opacity=".5"/>` +
    E(cx, cy + ry * .5, rx * .62, ry * .3, light, 0, `opacity=".7"`) +
    E(cx, cy + 1.5, rx * .45, ry * .55, dark, 0) + C(cx + rx * .37, cy - ry * .42, hl, "#fff", 0) + C(cx - rx * .37, cy + ry * .42, hl * .53, "#fff", 0);
}
function drawEye(type, cx, ec, right, skin = "#FFE6D6"){
  const cy = EYE_Y, o = right ? 1 : -1;   // o：往眼尾（臉的外側）的方向
  if(type === "cross") return E(cx, cy, 9.5, 11, "#fff", 2.4) + C(cx - 4 * o, cy + 1, 4.2, mix(ec, "#2B1D16", .55), 0) + C(cx - 3 * o, cy - 1, 1.3, "#fff", 0);   // 黑眼珠都往鼻子靠
  if(type === "deadfish") return E(cx, cy, 9.5, 10, "#fff", 2.4) + C(cx, cy + 3, 1.8, INK, 0) + `<path d="M${cx - 9.5} ${cy + 1} A9.5 10 0 0 1 ${cx + 9.5} ${cy + 1} Z" fill="${skin}" stroke="${INK}" stroke-width="2.4" stroke-linejoin="round"/>`;
  if(type === "spiral") return `<path d="M${cx} ${cy} m-1 0 a1.5 1.5 0 1 1 3 0 a3.5 3.5 0 1 1 -6.5 0 a5.5 5.5 0 1 1 10.5 0 a7.5 7.5 0 1 1 -14.5 0" fill="none" stroke="${INK}" stroke-width="2" stroke-linecap="round"/>`;
  if(type === "smile" || (type === "wink" && right)) return LN(`M${cx - 10} ${cy + 3} Q${cx} ${cy - 9} ${cx + 10} ${cy + 3}`, 3);
  if(type === "sleepy") return LN(`M${cx - 10} ${cy} Q${cx} ${cy + 7} ${cx + 10} ${cy}`, 3) + LN(`M${cx - 10} ${cy} L${cx - 13} ${cy - 3}`, 2);
  if(type === "squint") return LN(`M${cx + 7 * o} ${cy - 7} L${cx - 7 * o} ${cy} L${cx + 7 * o} ${cy + 7}`, 3.2);   // 左眼 >、右眼 <
  if(type === "star") return star(cx, cy, 13, ec, 2.2) + C(cx - 3, cy - 4, 2.4, "#fff", 0);
  if(type === "heart") return P(heartD(cx, cy - 1, 8.5), ec, 2.4) + E(cx - 3.5, cy - 5, 2.6, 2, "#fff", 0) + C(cx + 3, cy + 1, 1.2, "#fff", 0);
  if(type === "bean") return E(cx, cy + 1, 4.8, 6.8, INK, 0) + C(cx + 1.6, cy - 1.6, 1.6, "#fff", 0);
  if(type === "cat") return P(`M${cx - 12} ${cy} Q${cx} ${cy - 14} ${cx + 12} ${cy - 2} Q${cx} ${cy + 12} ${cx - 12} ${cy} Z`, ec, 2.4) + E(cx, cy - 1, 2.4, 7.5, INK, 0) + C(cx + 4, cy - 4, 2, "#fff", 0);
  if(type === "almond")   // 杏眼：看得到眼白，眼尾微微拉長
    return P(`M${cx - 13} ${cy + 1} Q${cx} ${cy - 13} ${cx + 13} ${cy + 1} Q${cx} ${cy + 11} ${cx - 13} ${cy + 1} Z`, "#fff", 2.2) + iris(cx, cy, 6.6, 7.6, ec, 2.2) + LN(`M${cx - 13} ${cy + 1} Q${cx} ${cy - 13} ${cx + 13} ${cy + 1}`, 3.4) + LN(`M${cx + 12 * o} ${cy + 1} L${cx + 16 * o} ${cy - 2}`, 2.4);
  if(type === "droopy")   // 下垂眼：眼皮線往眼尾垂下，看起來溫柔
    return iris(cx, cy + 1, 9.5, 11, ec) + LN(`M${cx - 11 * o} ${cy - 10} Q${cx + 2 * o} ${cy - 15} ${cx + 13 * o} ${cy - 2}`, 3.2);
  if(type === "upturn")   // 上挑眼：眼皮線往眼尾上揚，帶一點小勾
    return iris(cx, cy + 1, 9.5, 11, ec) + LN(`M${cx - 11 * o} ${cy - 6} Q${cx} ${cy - 14} ${cx + 12 * o} ${cy - 12}`, 3.2) + LN(`M${cx + 12 * o} ${cy - 12} L${cx + 16 * o} ${cy - 16}`, 2.4);
  if(type === "lashes")   // 長睫毛：上面粗睫毛加三根翹睫毛，下面細細的下睫毛
    return iris(cx, cy, 9.5, 12, ec) + LN(`M${cx - 12} ${cy - 8} Q${cx} ${cy - 18} ${cx + 12} ${cy - 8}`, 3.6) +
      [0, 1, 2].map(i => LN(`M${cx + (6 + i * 3) * o} ${cy - 12 + i * 2} l${(3 + i) * o} ${-4 + i}`, 2)).join("") +
      LN(`M${cx - 4} ${cy + 13} l-1 3 M${cx + 1} ${cy + 13.5} l0 3 M${cx + 6 * o} ${cy + 12.5} l${1.5 * o} 3`, 1.4);
  if(type === "teary")    // 淚汪汪：大大的、很多亮點，眼尾一滴眼淚
    return iris(cx, cy, 10.5, 13, ec, 3.8) + C(cx - 4, cy - 2, 1.6, "#fff", 0) + C(cx + 4, cy + 6, 1.3, "#fff", 0) + LN(`M${cx - 12} ${cy - 9} Q${cx} ${cy - 18} ${cx + 12} ${cy - 9}`, 3) +
      P(`M${cx + 10 * o} ${cy + 10} Q${cx + 13 * o} ${cy + 16} ${cx + 10 * o} ${cy + 19} Q${cx + 7 * o} ${cy + 16} ${cx + 10 * o} ${cy + 10} Z`, "#9BD0F5", 1.4);
  const big = type === "sparkle";
  const ry = big ? 13.5 : 12, rx = big ? 10.5 : 9.5;
  return iris(cx, cy, rx, ry, ec, big ? 3.6 : 3) +
    (big ? LN(`M${cx - 12} ${cy - 8} Q${cx} ${cy - 19} ${cx + 12} ${cy - 8}`, 3.2) + LN(`M${right ? cx + 11 : cx - 11} ${cy - 9} L${right ? cx + 16 : cx - 16} ${cy - 13}`, 2.4) + star(cx - 4, cy - 4, 2.6, "#fff", 0) : "");
}
const BROWS = {
  soft:     {name:"彎彎眉", d:cx => `M${cx - 10} 118 Q${cx} 112 ${cx + 10} 117`},
  straight: {name:"平眉", d:cx => `M${cx - 10} 116 L${cx + 10} 116`},
  worried:  {name:"八字眉", d:(cx, r) => r ? `M${cx - 10} 113 L${cx + 10} 119` : `M${cx - 10} 119 L${cx + 10} 113`},
  angry:    {name:"生氣眉", d:(cx, r) => r ? `M${cx - 10} 119 L${cx + 10} 113` : `M${cx - 10} 113 L${cx + 10} 119`},
};
const MOUTHS = {
  smile:  {name:"微笑"},
  grin:   {name:"開心笑"},
  cat:    {name:"貓咪嘴"},
  tongue: {name:"吐舌頭"},
  pout:   {name:"嘟嘴"},
  wow:    {name:"驚訝"},
  drool:  {name:"流口水"},
  buck:   {name:"暴牙"},
  smirk:  {name:"歪嘴笑"},
  wail:   {name:"大哭"},
};
function drawMouth(type, lip){
  const line = lip || INK, lw = lip ? 3.2 : 2.4;
  if(type === "grin") return P("M140 162 Q150 163 160 162 Q158 176 150 176 Q142 176 140 162 Z", lip || "#C2475E", 2.2) + P("M144 171 Q150 167 156 171 Q154 176 150 176 Q146 176 144 171 Z", "#F7A8B8", 0);
  if(type === "cat") return LN("M140 163 Q145 170 150 163 Q155 170 160 163", lw, line);
  if(type === "tongue") return LN("M141 164 Q150 171 159 164", lw, line) + P("M146 168 Q147 176 151 176 Q155 176 155 168", "#F28AA0", 1.8);
  if(type === "pout") return E(150, 167, 4.2, 3.6, lip || "#E8667A", 2);
  if(type === "wow") return E(150, 168, 5.5, 6.5, lip || "#C2475E", 2.2);
  if(type === "drool") return LN("M141 164 Q150 171 159 164", lw, line) + P("M156 167 Q158 176 156 180 Q152 180 153 174 Q154 170 156 167 Z", "#BFE6FA", 1.6);
  if(type === "buck") return LN("M140 163 Q150 169 160 163", lw, line) + P("M145.5 166 L150 166.6 L150 173 L145.5 172.4 Z M150 166.6 L154.5 166 L154.5 172.4 L150 173 Z", "#fff", 1.6);
  if(type === "smirk") return LN("M141 168 Q151 169 159 160", lw, line);
  if(type === "wail") return P("M137 160 Q150 155 163 160 L159 178 Q150 182 141 178 Z", lip || "#8E3A4A", 2.2) + P("M144 174 Q150 169 156 174 Q154 179 150 179 Q146 179 144 174 Z", "#F28AA0", 0);
  return LN("M141 164 Q150 172 159 164", lw, line);
}
const STICKERS = {heart:{name:"愛心"}, star:{name:"星星"}, tear:{name:"淚痣"}, moon:{name:"月亮"}, flower:{name:"小花"}, rainbow:{name:"彩虹"}, bolt:{name:"閃電"},
  strawberry:{name:"草莓"}, paw:{name:"貓掌"}, bow:{name:"蝴蝶結"}, note:{name:"音符"}, snow:{name:"雪花"}, clover:{name:"幸運草"}, cat:{name:"貓咪"}, sparkle:{name:"閃閃"}};

// ---------- 配件 ----------
const HATS = {
  beret:    {name:"貝雷帽", tags:["neat", "casual"], color:"#D9414E",
    draw:(f, c) => P("M92 104 C84 70 108 42 152 38 C200 34 230 52 224 74 C220 88 208 94 202 94 Q150 84 92 104 Z", f) + LN("M96 100 Q150 82 202 94", 2, shade(c, -.25)) + LN("M152 38 L155 28", 3.4) + LN("M120 56 Q140 46 166 46", 3, "rgba(255,255,255,.35)")},
  straw:    {name:"草帽", tags:["summer", "beach"], color:"#E8679A",
    draw:(f, c) => E(150, 92, 104, 24, "#F2D48A", 2.6) + P("M94 94 C92 56 120 40 150 40 C180 40 208 56 206 94 Q150 84 94 94 Z", "#F2D48A") + P("M95 78 Q150 68 205 78 L206 90 Q150 80 94 90 Z", f, 2.2)},
  beanie:   {name:"毛帽", tags:["winter", "warm"], color:"#7E5BC2",
    draw:(f, c) => P("M88 110 Q86 44 150 42 Q214 44 212 110 Z", f) + P("M86 96 Q150 84 214 96 L214 116 Q150 104 86 116 Z", shade(c, -.15)) + C(150, 38, 12, shade(c, .5))},
  cap:      {name:"棒球帽", tags:["sport", "casual"], color:"#4C8FE0",
    draw:(f, c) => P("M90 104 Q86 44 150 40 Q214 44 210 104 Z", f) + LN("M150 41 L150 98 M120 48 Q112 70 112 100 M180 48 Q188 70 188 100", 1.6, shade(c, -.25)) + C(150, 41, 4.5, shade(c, -.2), 1.8) +
      P("M84 100 Q150 86 216 100 Q222 114 208 120 Q150 106 92 120 Q78 114 84 100 Z", shade(c, -.15))},
  crown:    {name:"皇冠", tags:["party", "fancy"], color:"#F6D65A", lock:"party",
    draw:(f, c) => P("M112 72 L116 40 L134 58 L150 32 L166 58 L184 40 L188 72 Z", f) + C(150, 62, 4.5, "#D9414E", 1.6) + C(128, 66, 3.2, "#4C8FE0", 1.4) + C(172, 66, 3.2, "#4FA36B", 1.4)},
  catears:  {name:"貓耳髮箍", tags:["snack", "casual", "party", "animal"], color:"#2E2B2B", lock:"market",
    draw:(f, c) => LN("M94 104 Q150 46 206 104", 6) + LN("M94 104 Q150 46 206 104", 3.4, c) + PB("M106 76 L100 36 L132 58 Z", f) + PB("M110 68 L107 46 L124 59 Z", "#F7A8C4", 0)},
  earmuffs: {name:"毛毛耳罩", tags:["winter", "warm"], color:"#F7A8C4", lock:"winter",
    draw:(f, c) => LN("M92 132 Q88 38 150 36 Q212 38 208 132", 7) + LN("M92 132 Q88 38 150 36 Q212 38 208 132", 4, c) + C(90, 140, 18, f) + C(210, 140, 18, f) + C(90, 140, 10, shade(c, .5), 0) + C(210, 140, 10, shade(c, .5), 0)},
  foxmask:  {name:"狐狸面具", tags:["festival", "animal"], color:"#D9414E", lock:"festival",
    draw:(f, c) => `<g transform="translate(196 84) rotate(22)">${P("M-22 -6 L-20 -26 L-8 -14 L8 -14 L20 -26 L22 -6 Q20 18 0 24 Q-20 18 -22 -6 Z", "#fff")}${LN("M-12 -2 Q-7 -6 -3 -1", 2.4, f)}${LN("M3 -1 Q7 -6 12 -2", 2.4, f)}${C(0, 14, 2.6, f, 0)}${LN("M-16 -18 L-13 -10", 2.4, f)}${LN("M16 -18 L13 -10", 2.4, f)}</g>`},
};
const GLASSES = {
  groucho: {name:"大鼻子眼鏡", tags:["funny", "party"], color:"#2E2B2B",
    draw:(f, c) => C(128, 138, 14, "rgba(255,255,255,.15)", 3, `stroke="${c}"`) + C(172, 138, 14, "rgba(255,255,255,.15)", 3, `stroke="${c}"`) + LN("M142 136 Q150 132 158 136", 2.6, c) +
      LN("M118 124 Q128 116 138 122 M162 122 Q172 116 182 124", 4.5, c) + P("M144 140 Q150 128 156 140 Q162 154 150 158 Q138 154 144 140 Z", "#FFC9B5", 2.2) + P("M132 162 Q141 156 150 161 Q159 156 168 162 Q159 168 150 164 Q141 168 132 162 Z", c, 1.6)},
  round: {name:"圓框眼鏡", tags:["school", "neat"], color:"#8A5A3C",
    draw:(f, c) => C(128, 138, 16, "rgba(255,255,255,.18)", 3, `stroke="${c}"`) + C(172, 138, 16, "rgba(255,255,255,.18)", 3, `stroke="${c}"`) + LN("M144 136 Q150 132 156 136", 2.6, c)},
  sun:   {name:"墨鏡", tags:["summer", "beach"], color:"#2E2B2B",
    draw:(f, c) => P("M110 128 Q128 124 146 128 Q146 150 128 150 Q110 150 110 128 Z", "#2B2A2E", 2.6, `stroke="${c}"`) + P(MX("M110 128 Q128 124 146 128 Q146 150 128 150 Q110 150 110 128 Z"), "#2B2A2E", 2.6, `stroke="${c}"`) + LN("M146 131 Q150 128 154 131", 2.6, c) + LN("M116 133 L124 131", 2, "rgba(255,255,255,.6)")},
  heart: {name:"愛心墨鏡", tags:["beach", "party"], color:"#E8679A", lock:"beach",
    draw:(f, c) => P(heartD(128, 138, 13), "rgba(232,103,154,.75)", 2.6, `stroke="${c}"`) + P(heartD(172, 138, 13), "rgba(232,103,154,.75)", 2.6, `stroke="${c}"`) + LN("M142 134 Q150 130 158 134", 2.6, c)},
};
const HAIRPINS = {
  poop:   {name:"便便髮夾", tags:["funny"], color:"#8A5A3C",
    draw:(f) => P("M180 100 Q178 92 186 92 Q182 86 190 84 Q188 76 196 74 Q200 80 198 84 Q206 84 202 92 Q210 92 208 100 Z", f, 2) + C(188, 94, 1.4, INK, 0) + C(196, 94, 1.4, INK, 0) + LN("M189 97 Q192 99 195 97", 1.2)},
  bow:    {name:"蝴蝶結", tags:["party", "school"], color:"#E8679A",
    draw:(f) => P("M196 92 L180 80 L180 104 Z", f, 2.2) + P("M196 92 L212 80 L212 104 Z", f, 2.2) + C(196, 92, 4.5, f, 2.2)},
  star:   {name:"星星髮夾", tags:["casual", "party"], color:"#F6D65A", draw:(f) => star(192, 92, 11, f, 2)},
  bat:    {name:"蝙蝠髮夾", tags:["halloween", "party"], color:"#7E5BC2",
    draw:(f) => P("M192 92 Q186 80 172 82 Q178 88 176 96 Q182 92 186 98 Q189 94 192 98 Q195 94 198 98 Q202 92 208 96 Q206 88 212 82 Q198 80 192 92 Z", f, 2) + C(188.5, 89, 1.1, "#F6D65A", 0) + C(195.5, 89, 1.1, "#F6D65A", 0)},
  flower: {name:"小花", tags:["festival", "summer", "beach"], color:"#F7A8C4",
    draw:(f) => [0, 1, 2, 3, 4].map(i => { const a = i * Math.PI * 2 / 5 - Math.PI / 2; return C(+(192 + Math.cos(a) * 8).toFixed(1), +(92 + Math.sin(a) * 8).toFixed(1), 6, f, 2); }).join("") + C(192, 92, 4.5, "#F6D65A", 1.8)},
};
const NECKS = {
  pearl:  {name:"珍珠項鍊", tags:["party", "formal", "fancy"], color:"#FFFFFF",
    draw:(f) => Array.from({length:9}, (_, i) => { const t = i / 8, x = 130 + 40 * t, y = 212 + Math.sin(t * Math.PI) * 14; return C(+x.toFixed(1), +y.toFixed(1), 3.6, f, 1.4); }).join("")},
  heart:  {name:"愛心項鍊", tags:["casual", "party"], color:"#E8679A",
    draw:(f) => LN("M134 212 Q150 232 166 212", 1.6, "#C9A640") + P(heartD(150, 230, 6), f, 1.8)},
  bowtie: {name:"領結", tags:["school", "formal"], color:"#D9414E",
    draw:(f) => P("M150 216 L136 208 L136 224 Z", f, 2) + P("M150 216 L164 208 L164 224 Z", f, 2) + C(150, 216, 3.5, f, 2)},
  medal:  {name:"金牌", tags:["sport"], color:"#F6D65A", lock:"sport",
    draw:(f) => P("M136 208 L146 244 L154 244 L164 208 L156 208 L150 232 L144 208 Z", "#4C8FE0", 2) + C(150, 254, 11, f) + star(150, 254, 6, shade("#F6D65A", -.2), 1)},
};
const SCARVES = {
  knit: {name:"圍巾", tags:["winter", "warm"], color:"#D9414E",
    draw:(f, c) => P("M160 220 C166 240 168 262 164 286 L178 284 C182 262 178 238 170 218 Z", f) + P("M150 222 C152 244 150 266 144 288 L158 290 C162 266 162 242 160 220 Z", f) +
      [[146, 288], [151, 289], [156, 290], [167, 285], [172, 285], [177, 284]].map(([x, y]) => LN(`M${x} ${y} L${x - 1} ${y + 8}`, 2.2, shade(c, -.25))).join("") +
      P("M122 206 C134 220 166 220 178 206 C184 210 186 220 180 228 C164 242 136 242 120 228 C114 220 116 210 122 206 Z", f) +
      LN("M128 214 L127 228 M138 218 L137 234 M150 219 L150 236 M162 218 L163 234 M172 214 L173 228", 1.4, shade(c, -.2), `opacity=".7"`) +
      LN("M154 236 L156 284 M165 234 L171 282", 1.2, shade(c, -.2), `opacity=".6"`)},
};
const BAGS = {
  cross:    {name:"斜背包", tags:["casual", "snack"], color:"#F59A4A",
    draw:(f, c) => LN("M178 212 L122 294", 4.5) + LN("M178 212 L122 294", 2.6, shade(c, -.2)) + P("M100 288 L136 288 L136 316 Q136 320 132 320 L104 320 Q100 320 100 316 Z", f) + P("M100 288 L136 288 L134 302 L102 302 Z", shade(c, -.12), 2.2) + C(118, 302, 2.6, "#F6D65A", 1.4)},
  handbag:  {name:"手提包", tags:["party", "formal", "fancy"], color:"#E8679A",
    draw:(f, c) => LN("M90 330 Q100 304 110 330", 2.8) + P("M82 328 L118 328 L114 358 L86 358 Z", f) + LN("M86 338 L114 338", 1.6)},
  // 書包：袋子在背後（back，畫在身體後面、只露出兩側和上面），前面只看得到順著肩膀彎下去的背帶
  backpack: {name:"書包", tags:["school"], color:"#4C8FE0",
    back:(f, c) => LN("M136 204 Q150 184 164 204", 5) + LN("M136 204 Q150 184 164 204", 2.6, shade(c, -.25)) + P("M102 216 Q102 200 116 200 L184 200 Q198 200 198 216 L200 300 Q198 310 188 310 L112 310 Q102 310 102 300 Z", f),
    draw:(f, c) => ["M126 212 C122 230 119 248 117 268", "M174 212 C178 230 181 248 183 268"].map(d => LN(d, 8.5) + LN(d, 5, shade(c, -.1))).join("") + P("M117 244 L125 244 L124 251 L116 251 Z", "#C9CED6", 1.4) + P("M175 244 L183 244 L184 251 L176 251 Z", "#C9CED6", 1.4)},
};
const HANDS = {
  umbrella: {name:"雨傘", tags:["rain"], grip:true, color:"#4C8FE0",
    draw:(f, c) => LN("M200 318 L234 112", 3) + P("M168 116 Q234 40 298 116 Q290 108 282 116 Q274 108 266 116 Q258 108 250 116 Q242 108 234 116 Q226 108 218 116 Q210 108 202 116 Q194 108 186 116 Q178 108 168 116 Z", f) + LN("M200 318 Q194 330 202 334", 3)},
  rainbow:  {name:"彩虹雨傘", tags:["rain", "casual"], grip:true, color:"#F6D65A", lock:"rain",
    draw:(f, c) => LN("M200 318 L234 112", 3) + ["#FF6B6B", "#FFB347", "#FFE066", "#7BD88F", "#6FB8FF", "#B68CFF"].map((col, i) => { const a0 = Math.PI + i * Math.PI / 6, a1 = a0 + Math.PI / 6, r = 66, cx = 234, cy = 116; return `<path d="M${cx} ${cy} L${(cx + Math.cos(a0) * r).toFixed(1)} ${(cy + Math.sin(a0) * r * .9).toFixed(1)} L${(cx + Math.cos(a1) * r).toFixed(1)} ${(cy + Math.sin(a1) * r * .9).toFixed(1)} Z" fill="${col}" stroke="${INK}" stroke-width="2"/>`; }).join("") + LN("M200 318 Q194 330 202 334", 3)},
  balloon:  {name:"氣球", tags:["party", "snack", "festival"], grip:true, color:"#D9414E",
    draw:(f, c) => LN("M201 312 Q222 240 234 152", 1.6) + P(heartD(236, 124, 26), f) + LN("M222 112 Q226 104 234 102", 3, "rgba(255,255,255,.7)")},
  boba:     {name:"珍珠奶茶", tags:["snack", "casual"], grip:true, color:"#D9B99B",
    // 杯子在手腕下面、偏外側，手從側邊握住杯身內側；吸管往外斜，不會跟手臂重疊
    draw:(f, c) => LN("M219 309 L229 280", 3.4, "#E8679A") + P("M199 308 L227 308 L223 350 L203 350 Z", f) + E(213, 308, 14, 3.5, "#fff", 2) + [[207, 344], [213, 346], [219, 344], [210, 338], [216, 338]].map(([x, y]) => C(x, y, 2.4, "#3A2A20", 0)).join("")},
  book:     {name:"書", tags:["school"], grip:true, color:"#4FA36B",
    draw:(f, c) => `<g transform="rotate(6 203 316)">${P("M189 306 L217 306 L217 352 L189 352 Z", f)}${P("M193 306 L193 352", "none", 2)}${LN("M199 334 L212 334 M199 341 L212 341", 1.6, "#fff")}${P("M217 308 L219 309 L219 352 L217 352", "#fff", 1.4)}</g>`},
  bouquet:  {name:"花束", tags:["party", "formal", "fancy"], grip:true, color:"#F7A8C4",
    draw:(f, c) => P("M200 330 L214 290 L232 300 Z", "#F6E7C8") + [[212, 286, "#E8679A"], [224, 282, f], [232, 292, "#F6D65A"], [218, 276, "#D9414E"], [206, 280, f]].map(([x, y, col]) => C(x, y, 8, col, 2)).join("") + LN("M210 300 L214 310", 2, "#4FA36B")},
  uchiwa:   {name:"扇子", tags:["festival", "summer"], grip:true, color:"#9BD0F5",
    draw:(f, c) => LN("M201 318 L214 296", 3.4, "#C99A6A") + C(222, 276, 22, f) + [0, 1, 2].map(i => C(222 + (i - 1) * 9, 276 + (i === 1 ? -6 : 4), 4, "#fff", 0)).join("")},
};
const PETS = {
  catO: {name:"橘貓", color:"#F6A64A"},
  catB: {name:"黑貓", color:"#2E2B2B"},
  catW: {name:"白貓", color:"#FFFFFF"},
  dog:  {name:"小狗", color:"#E2B57E", dog:true},
  bunny:{name:"兔子", color:"#FFFFFF", bunny:true},
};
function drawPet(id){
  const p = PETS[id], col = p.color, face = lum(col) < .3 ? "#FFF6E8" : INK;
  const x = 246, y = 418, tail = `M${x + 18} ${y + 22} Q${x + 40} ${y + 10} ${x + 32} ${y - 10}`;
  let s = p.bunny ? C(x + 21, y + 26, 7, col) : LN(tail, 9) + LN(tail, 5, col);
  s += E(x, y + 18, 22, 18, col);
  if(p.bunny) s += P(`M${x - 10} ${y - 18} Q${x - 16} ${y - 58} ${x - 6} ${y - 56} Q${x + 2} ${y - 40} ${x - 2} ${y - 18} Z`, col) + P(`M${x + 10} ${y - 18} Q${x + 16} ${y - 58} ${x + 6} ${y - 56} Q${x - 2} ${y - 40} ${x + 2} ${y - 18} Z`, col);
  else if(!p.dog) s += P(`M${x - 20} ${y - 6} L${x - 18} ${y - 32} L${x - 4} ${y - 18} Z`, col) + P(`M${x + 20} ${y - 6} L${x + 18} ${y - 32} L${x + 4} ${y - 18} Z`, col);
  s += C(x, y - 6, 19, col);
  if(p.dog) s += P(`M${x - 14} ${y - 22} Q${x - 30} ${y - 18} ${x - 24} ${y + 4} Q${x - 16} ${y + 2} ${x - 12} ${y - 12} Z`, shade(col, -.25)) + P(`M${x + 14} ${y - 22} Q${x + 30} ${y - 18} ${x + 24} ${y + 4} Q${x + 16} ${y + 2} ${x + 12} ${y - 12} Z`, shade(col, -.25));
  s += C(x - 7, y - 8, 2.6, face, 0) + C(x + 7, y - 8, 2.6, face, 0) + LN(`M${x - 4} ${y + 1} Q${x - 2} ${y + 5} ${x} ${y + 1} Q${x + 2} ${y + 5} ${x + 4} ${y + 1}`, 1.6, face);
  s += p.dog ? E(x, y - 1, 3.2, 2.4, INK, 0) : E(x, y - 1, 2, 1.5, "#F07F98", 0);
  return s;
}

// ---------- 背景 ----------
const BGS = {
  room:      {name:"房間", tags:["casual"], draw:() => `<rect width="300" height="470" fill="#FDEFE3"/>` + Array.from({length:20}, (_, i) => C(20 + (i % 5) * 64 + (Math.floor(i / 5) % 2) * 32, 30 + Math.floor(i / 5) * 80, 3, "#F7D3C0", 0)).join("") + `<rect y="380" width="300" height="90" fill="#E9C9A5"/>` + LN("M0 380 L300 380", 2.4) + P("M24 70 L112 70 L112 170 L24 170 Z", "#BFE6FA") + LN("M68 70 L68 170 M24 120 L112 120", 2.4) + P("M18 62 Q40 120 30 180 L18 180 Z", "#F7A8C4") + P("M250 360 L282 360 L276 392 L256 392 Z", "#E58B5B") + [[-10, -30], [0, -40], [10, -28]].map(([dx, dy]) => P(`M266 360 Q${266 + dx} ${360 + dy / 2} ${266 + dx} ${360 + dy} Q${266 + dx + 6} ${360 + dy / 2} 266 360 Z`, "#4FAE5E", 2)).join("")},
  classroom: {name:"教室", tags:["school"], draw:() => `<rect width="300" height="470" fill="#F3EBD9"/><rect y="388" width="300" height="82" fill="#C99E6E"/>` + LN("M0 388 L300 388", 2.4) + P("M16 40 L284 40 L284 176 L16 176 Z", "#3E6B52", 4, `stroke="#8A5A3C"`) + `<text x="150" y="116" text-anchor="middle" font-size="34" font-weight="900" fill="#fff" opacity=".85" font-family="system-ui,'Noto Sans TC',sans-serif">開學囉！</text>` + LN("M40 150 L90 150 M200 92 L252 98", 2, "rgba(255,255,255,.6)") + P("M30 176 L270 176 L270 184 L30 184 Z", "#8A5A3C", 2) + C(240, 140, 5, "#F6D65A", 0)},
  beach:     {name:"海邊", tags:["beach", "summer"], draw:() => `<defs><linearGradient id="skyB" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7FD0F5"/><stop offset="1" stop-color="#DFF5FF"/></linearGradient></defs><rect width="300" height="470" fill="url(#skyB)"/>` + C(240, 70, 30, "#FFD447", 2.4) + `<rect y="290" width="300" height="80" fill="#3FA8DD"/>` + LN("M0 300 Q20 294 40 300 T80 300 T120 300 T160 300 T200 300 T240 300 T280 300 T320 300", 2, "#fff") + P("M-4 360 Q150 340 304 360 L304 474 L-4 474 Z", "#F5DDA8") + P("M40 410 Q48 398 56 410 Z", "#F7A8C4", 2) + E(70, 80, 30, 10, "#fff", 0) + E(96, 72, 20, 10, "#fff", 0)},
  snow:      {name:"雪地", tags:["winter"], draw:() => `<defs><linearGradient id="skyS" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2B3C6E"/><stop offset="1" stop-color="#7E8FC4"/></linearGradient></defs><rect width="300" height="470" fill="url(#skyS)"/>` + [[40, 330], [262, 320], [20, 360]].map(([x, y]) => P(`M${x} ${y - 90} L${x + 30} ${y} L${x - 30} ${y} Z`, "#3E7A5A", 2.4) + P(`M${x} ${y - 90} L${x + 12} ${y - 56} L${x - 12} ${y - 56} Z`, "#fff", 2)).join("") + P("M-4 370 Q150 344 304 370 L304 474 L-4 474 Z", "#F4F8FF") + Array.from({length:26}, (_, i) => C((i * 73) % 300, (i * 47) % 330 + 10, i % 3 + 1.6, "#fff", 0)).join("")},
  market:    {name:"夜市", tags:["snack"], draw:() => `<rect width="300" height="470" fill="#2A2142"/>` + Array.from({length:14}, (_, i) => C((i * 61) % 300, (i * 37) % 120 + 10, 1.4, "#FFF4C2", 0)).join("") + P("M0 230 L300 230 L300 400 L0 400 Z", "#4A3A5E", 0) + [0, 100, 200].map((x, i) => P(`M${x + 4} 220 L${x + 96} 220 L${x + 100} 250 L${x} 250 Z`, ["#D9414E", "#F59A4A", "#4C8FE0"][i], 2.2) + [0, 1, 2, 3, 4].map(k => `<rect x="${x + 4 + k * 19}" y="221" width="9" height="28" fill="#fff" opacity=".55"/>`).join("") + P(`M${x + 10} 250 L${x + 90} 250 L${x + 90} 330 L${x + 10} 330 Z`, "#F6E7C8", 2)).join("") + `<text x="50" y="296" text-anchor="middle" font-size="22" font-weight="900" fill="#D9414E" font-family="system-ui,'Noto Sans TC',sans-serif">雞排</text><text x="150" y="296" text-anchor="middle" font-size="22" font-weight="900" fill="#F59A4A" font-family="system-ui,'Noto Sans TC',sans-serif">珍奶</text><text x="250" y="296" text-anchor="middle" font-size="20" font-weight="900" fill="#4C8FE0" font-family="system-ui,'Noto Sans TC',sans-serif">撈金魚</text>` + LN("M0 70 Q150 120 300 70", 1.6, "#FFF4C2") + [30, 80, 130, 180, 230, 270].map((x, i) => { const y = 70 + Math.sin(x / 300 * Math.PI) * 32; return E(x, y + 12, 9, 12, i % 2 ? "#FFD447" : "#FF7A5C", 2); }).join("") + `<rect y="400" width="300" height="70" fill="#5A4A5E"/>`},
  park:      {name:"公園", tags:["casual", "sport"], draw:() => `<rect width="300" height="470" fill="#CDEFFF"/>` + E(70, 70, 34, 13, "#fff", 0) + E(220, 100, 40, 14, "#fff", 0) + P("M-4 330 Q150 300 304 330 L304 474 L-4 474 Z", "#9BD77E") + P("M246 336 L256 336 L256 250 L246 250 Z", "#8A5A3C", 2.2) + C(251, 220, 42, "#4FAE5E", 2.4) + C(226, 240, 22, "#4FAE5E", 2.4) + C(276, 240, 22, "#4FAE5E", 2.4) + [[30, 400, "#F7A8C4"], [60, 430, "#F6D65A"], [90, 404, "#B9A3E8"], [200, 440, "#F7A8C4"], [270, 410, "#F6D65A"]].map(([x, y, col]) => LN(`M${x} ${y} L${x} ${y + 14}`, 2, "#4F8F45") + C(x, y, 5, col, 1.6)).join("")},
  stage:     {name:"舞台", tags:["party"], draw:() => `<rect width="300" height="470" fill="#2B1A33"/><defs><radialGradient id="spot" cx=".5" cy=".55" r=".5"><stop offset="0" stop-color="#FFF6D0" stop-opacity=".85"/><stop offset="1" stop-color="#FFF6D0" stop-opacity="0"/></radialGradient></defs><ellipse cx="150" cy="250" rx="150" ry="230" fill="url(#spot)"/>` + P("M0 0 L70 0 Q50 200 74 470 L0 470 Z", "#B8323F") + P(MX("M0 0 L70 0 Q50 200 74 470 L0 470 Z"), "#B8323F") + P("M0 0 L300 0 L300 36 Q150 56 0 36 Z", "#D9414E") + `<rect y="410" width="300" height="60" fill="#8A5A3C"/>` + LN("M0 410 L300 410", 2.4) + [[90, 80], [210, 70], [120, 150], [190, 170]].map(([x, y]) => star(x, y, 6, "#FFE98A", 0)).join("")},
  rain:      {name:"雨天街道", tags:["rain"], draw:() => `<rect width="300" height="470" fill="#9AA6B8"/>` + [[0, 160, 70], [74, 120, 60], [140, 180, 80], [226, 140, 74]].map(([x, y, w]) => `<rect x="${x}" y="${y}" width="${w}" height="${380 - y}" fill="#7A879C" stroke="${INK}" stroke-width="2"/>` + [0, 1, 2].map(k => `<rect x="${x + 10 + k * (w - 20) / 3}" y="${y + 16}" width="${(w - 20) / 3 - 6}" height="14" fill="#FFE9A8" opacity=".75"/>`).join("")).join("") + `<rect y="380" width="300" height="90" fill="#6B7487"/>` + LN("M0 380 L300 380", 2.4) + E(60, 440, 34, 8, "#9DB8D6", 0) + E(240, 420, 26, 6, "#9DB8D6", 0) + Array.from({length:36}, (_, i) => { const x = (i * 53) % 300, y = (i * 89) % 440; return LN(`M${x} ${y} L${x - 5} ${y + 16}`, 1.6, "rgba(255,255,255,.7)"); }).join("")},
  festival:  {name:"夏日祭典", tags:["festival", "summer"], draw:() => `<defs><linearGradient id="skyF" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2E2459"/><stop offset="1" stop-color="#E5806B"/></linearGradient></defs><rect width="300" height="470" fill="url(#skyF)"/>` + [[70, 80, "#FFD447"], [230, 60, "#F7A8C4"], [160, 120, "#9BD0F5"]].map(([x, y, col]) => Array.from({length:12}, (_, k) => { const a = k * Math.PI / 6; return LN(`M${x + Math.cos(a) * 10} ${y + Math.sin(a) * 10} L${(x + Math.cos(a) * 28).toFixed(1)} ${(y + Math.sin(a) * 28).toFixed(1)}`, 2.4, col); }).join("")).join("") + LN("M0 200 Q150 240 300 200", 1.6, INK) + [20, 70, 120, 170, 220, 270].map(x => { const y = 200 + Math.sin(x / 300 * Math.PI) * 28; return P(`M${x - 10} ${y + 4} Q${x - 14} ${y + 20} ${x - 8} ${y + 34} L${x + 8} ${y + 34} Q${x + 14} ${y + 20} ${x + 10} ${y + 4} Z`, "#F6E7C8", 2) + LN(`M${x - 11} ${y + 19} L${x + 11} ${y + 19}`, 4, "#D9414E"); }).join("") + `<rect y="380" width="300" height="90" fill="#5A3A3A"/>` + LN("M0 380 L300 380", 2.4)},
  plain:     {name:"純色", tags:[], color:true, draw:c => `<rect width="300" height="470" fill="${c}"/>` + Array.from({length:12}, (_, i) => star(25 + (i % 4) * 85 + (Math.floor(i / 4) % 2) * 40, 40 + Math.floor(i / 4) * 150, 5, "#fff", 0).replace("<path", `<path opacity=".5"`)).join("")},
};

// ---------- 第二批單品：男生／中性風格、節慶（萬聖節、聖誕節、新年） ----------
Object.assign(TOPS, {
  polo:     {name:"Polo 衫", tags:["casual", "sport", "neat"], color:"#4FA36B",
    draw:(f, c) => U([...sleevesS(26), TORSO], f) + LN("M150 214 L150 240", 1.8) + C(153, 224, 1.8, shade(c, -.35), 0) + C(153, 234, 1.8, shade(c, -.35), 0) + PB("M150 216 L136 206 L132 220 Z", shade(c, .25), 2.2)},
  tieshirt: {name:"制服襯衫領帶", tags:["school", "neat", "formal"], color:"#FFFFFF",
    draw:(f, c) => U([...sleevesS(26), TORSO], f) + PB("M150 217 L134 206 L128 222 Z", f) + P("M150 218 L144 226 L147 272 L150 280 L153 272 L156 226 Z", "#2C3E70", 2) + LN("M146 238 L154 232 M146 252 L154 246", 1.6, "#D9414E")},
  tank:     {name:"背心", tags:["summer", "sport", "beach"], color:"#F6D65A",
    draw:(f, c) => P("M128 208 Q150 226 172 208 L180 222 Q189 236 186.5 302 Q150 308 113.5 302 Q111 236 120 222 Z", f)},
});
Object.assign(BOTTOMS, {
  slacks: {name:"西裝長褲", tags:["school", "neat", "formal"], color:"#2E2B2B",
    draw:(f, c) => PANTS(f) + LN("M136 334 L135 424", 1.4, shade(c, .3)) + LN("M164 334 L165 424", 1.4, shade(c, .3)) + P("M112.5 290 L187.5 290 L187.5 298 L112.5 298 Z", shade(c, -.2), 2)},
  wide:   {name:"寬褲", tags:["casual", "summer"], color:"#F6E7C8",
    draw:(f, c) => P("M112.5 290 L187.5 290 L196 426 L155 426 L150 330 L145 426 L104 426 Z", f) + LN("M117 298 L183 298", 1.6)},
  cargo:  {name:"工作短褲", tags:["casual", "sport", "snack"], color:"#8A9A5B",
    draw:(f, c) => P("M112.5 290 L187.5 290 L191 348 L154 348 L150 326 L146 348 L109 348 Z", f) + PB("M113 316 L127 316 L128 336 L114 336 Z", shade(c, -.12), 2) + LN("M113 297 L187 297", 1.6)},
});
Object.assign(OUTERS, {
  track: {name:"運動外套", tags:["sport", "casual"], color:"#D9414E",
    draw:(f, c) => U([...sleevesL(29), "M111 231 C110 221 113 215 123 212 C131 210 139 209 140 203 L148 304 L114 304 Z", MX("M111 231 C110 221 113 215 123 212 C131 210 139 209 140 203 L148 304 L114 304 Z")], f) + cuffs(29) + (POSE === "peace" ? TUBE("M113 230 L82 258 L102 238", 2.5, "#fff") + TUBE(MX("M116 226 C106 248 101 280 99.5 302"), 2.5, "#fff") : POSE === "wave" ? TUBE("M116 226 C100 216 86 204 78 191 C71 180 67 171 67 165", 2.5, "#fff") + TUBE(MX("M116 226 C106 248 101 280 99.5 302"), 2.5, "#fff") : TUBES(POSE === "behind" ? "M116 226 C107 250 104 272 109 292" : "M116 226 C106 248 101 280 99.5 302", 2.5, "#fff")) + LN("M150 214 L150 304", 2.2, "#fff") + LN("M150 214 L150 304", .8) + PB("M138 208 L134 222 L148 222", "none", 2)},
  cape:  {name:"斗篷", tags:["halloween", "party"], color:"#2E2B2B",
    draw:(f, c) => PB("M124 210 Q102 270 82 392 Q100 400 116 392 Q120 300 140 214 Z", f) + PB("M128 208 Q150 222 172 208 L176 214 Q150 230 124 214 Z", "#D9414E", 2.2) + C(150, 218, 4, "#F6D65A", 1.6)},
});
Object.assign(SHOES, {
  loafers: {name:"皮鞋", tags:["school", "neat", "formal"], color:"#5A3A2A",
    draw:(f, c) => PB(SHOE, f) + PB("M124 432 Q134 428 144 432", "none", 2.6) + PB("M121 441 Q134 446 147 441", "none", 1.6)},
  hightop: {name:"籃球鞋", tags:["sport", "casual"], color:"#D9414E",
    draw:(f, c) => PB("M122 404 L146 404 L148 438 Q148 447 134 447 Q120 447 120 438 Z", f) + PB("M120 438 Q134 445 148 438 L148 440 Q148 447 134 447 Q120 447 120 440 Z", "#fff", 2) + PB("M128 412 L140 414 M128 420 L140 422 M128 428 L140 430", "none", 1.6) + PB("M122 404 L146 404 L146 410 L122 410 Z", "#fff", 1.8)},
});
Object.assign(HAIRB, {
  buzz: {name:"平頭", crop:true, draw:h => P("M92 126 C88 66 212 66 208 126 L206 140 Q150 146 94 140 Z", h)},
  // ---- 第二批髮型 ----
  sidepony: {name:"側馬尾", draw:h => P("M90 124 C86 60 214 60 210 124 Z", h) + P("M200 92 C236 104 244 170 232 246 Q226 238 222 246 Q218 232 212 240 Q214 214 210 190 C206 156 200 126 190 108 Z", h) + LN("M206 104 C228 130 230 190 222 236", 1.6, strand(h), `opacity=".75"`),
    front:() => TIE(200, 98, 50)},
  // 雙麻花辮：辮子從耳朵下面垂到胸前（畫在身體前面，front）
  braids:   {name:"雙麻花辮", side:true, draw:h => P("M90 124 C86 60 214 60 210 124 L212 168 Q150 176 88 168 Z", h),
    front:h => [-1, 1].map(sx => {
      const seg = Array.from({length:6}, (_, i) => { const y = 176 + i * 17, x = 150 + sx * (48 - i * 2.2);
        return E(x, y, 10 - i * .5, 10.5, h, 2.4) + LN(`M${x - 6} ${y - 3} Q${x} ${y + 3} ${x + 6} ${y - 3}`, 1.4, strand(h), `opacity=".8"`); }).reverse().join("");
      const tx = 150 + sx * 36;
      return seg + C(tx, 272, 5, "#F2668B", 2) + P(`M${tx - 6} 276 Q${tx} 296 ${tx + 6} 276 Z`, h, 2);
    }).join("")},
  curly:    {name:"大捲髮", side:true, draw:h => P("M88 120 C80 52 220 52 212 120 Q226 140 218 162 Q232 184 222 206 Q236 230 224 252 Q236 276 218 292 Q206 304 194 296 Q180 308 166 300 L134 300 Q120 308 106 296 Q94 304 82 292 Q64 276 76 252 Q64 230 78 206 Q68 184 82 162 Q74 140 88 120 Z", h) +
      LN("M84 170 Q76 186 86 200 M88 222 Q78 240 90 254 M216 170 Q224 186 214 200 M212 222 Q222 240 210 254", 1.6, strand(h), `opacity=".7"`)},
  halfup:   {name:"公主頭", side:true, draw:(h, hat) => (hat ? "" : C(150, 50, 14, h) + LN("M140 58 Q150 64 160 58", 3.4, "#F2668B")) + P("M88 120 C80 52 220 52 212 120 C214 180 222 240 230 292 Q224 300 218 294 Q216 310 206 302 Q198 316 190 304 Q178 312 170 304 L130 304 Q122 312 110 304 Q102 316 94 302 Q84 310 82 294 Q76 300 70 292 C78 240 86 180 88 120 Z", h)},
  odango:   {name:"雙丸子頭", draw:(h, hat) => (hat ? "" : C(106, 60, 20, h) + C(194, 60, 20, h) + LN("M96 74 Q106 80 116 74 M184 74 Q194 80 204 74", 3.4, "#F2668B")) + P("M88 126 C84 60 216 60 212 126 L208 150 Q150 158 92 150 Z", h)},
});
Object.assign(HAIRF, {
  curtain: {name:"八字瀏海", d:" C209 114 198 92 166 84 Q154 92 150 98 Q146 92 134 84 C102 92 91 114 89 152 Z", cl:[100, 116], cr:[100, 116], lines:"M150 56 L150 96 M166 86 Q188 96 200 122 M134 86 Q112 96 100 122"},
  short:   {name:"眉上短瀏海", d:" C209 120 204 102 192 98 Q171 102 150 101 Q129 102 108 98 C96 102 91 120 89 152 Z", cl:[108, 98], cr:[108, 98], lines:"M124 70 Q120 84 120 98 M150 62 Q148 80 150 100 M176 70 Q180 84 180 98"},
  quiff: {name:"往上梳", d:" C210 116 202 94 186 88 C172 72 140 68 120 82 C104 92 93 114 89 152 Z", cl:[100, 100], cr:[100, 100], lines:"M128 70 Q144 62 164 70 M120 80 Q140 70 168 78"},
});
Object.assign(HATS, {
  witch:   {name:"女巫帽", tags:["halloween"], color:"#7E5BC2",
    draw:(f, c) => E(150, 92, 100, 20, f, 2.6) + P("M90 94 C88 64 108 50 128 44 Q138 24 146 12 Q154 2 170 12 Q160 18 160 32 L162 46 C196 54 212 70 210 94 Q150 84 90 94 Z", f) + P("M92 82 Q150 70 208 82 L209 92 Q150 82 91 92 Z", "#F6D65A", 2.2) + star(152, 60, 5, "#F6D65A", 1.2)},
  santa:   {name:"聖誕帽", tags:["xmas", "winter", "party"], color:"#D9414E",
    draw:(f, c) => P("M94 100 Q98 48 152 44 Q196 46 214 84 Q226 106 230 126 L212 120 Q204 96 190 82 L206 100 Z", f) + C(228, 128, 10, "#fff", 2.2) + P("M88 94 Q150 80 212 94 L214 112 Q150 98 86 112 Z", "#fff", 2.4)},
  antlers: {name:"麋鹿角", tags:["xmas", "party", "animal"], color:"#8A5A3C", lock:"christmas",
    draw:(f, c) => LN("M94 104 Q150 56 206 104", 6) + LN("M94 104 Q150 56 206 104", 3.4, "#D9414E") + ["M116 76 L104 30 M108 52 L92 44 M106 40 L114 26", "M184 76 L196 30 M192 52 L208 44 M194 40 L186 26"].map(d => LN(d, 8) + LN(d, 4.6, c)).join("")},
});
Object.assign(HANDS, {
  candy:   {name:"糖果桶", tags:["halloween", "party", "snack"], grip:true, color:"#F59A4A",
    draw:(f, c) => LN("M193 318 Q202 296 213 318", 2.6) + P("M188 318 L218 318 L214 348 Q203 354 192 348 Z", f) + P("M197 328 L200 324 L203 328 Z M203 328 L206 324 L209 328 Z", INK, 0) + LN("M198 337 Q203 341 208 337", 2) + [[194, 314, "#E8679A"], [204, 312, "#9ADBC0"], [212, 315, "#F6D65A"]].map(([x, y, col]) => C(x, y, 4, col, 1.6)).join("")},
  pumpkin: {name:"南瓜燈", tags:["halloween", "party"], grip:true, color:"#F59A4A",
    draw:(f, c) => LN("M200 318 Q212 312 218 326", 2.4) + E(218, 344, 20, 17, f) + LN("M210 330 Q206 344 210 358 M226 330 Q230 344 226 358", 1.6, shade(c, -.3)) + P("M216 326 L218 318 L222 320 L220 327 Z", "#4FA36B", 1.6) + P("M208 338 L213 342 L208 345 Z M228 338 L223 342 L228 345 Z", "#3A2A20", 0) + LN("M209 351 Q218 356 227 351", 2.2)},
  gift:    {name:"禮物", tags:["xmas", "party"], grip:true, color:"#4FA36B",
    draw:(f, c) => LN("M196 336 C194 318 199 308 203 308 C207 308 212 318 210 336", 5.4) + LN("M196 336 C194 318 199 308 203 308 C207 308 212 318 210 336", 2.8, "#D9414E") +
      P("M186 334 L220 334 L220 366 L186 366 Z", f) + P("M200 334 L206 334 L206 366 L200 366 Z", "#D9414E", 1.6) + P("M186 346 L220 346 L220 351 L186 351 Z", "#D9414E", 1.6) +
      P("M203 336 Q193 326 191 332 Q191 338 203 336 Z M203 336 Q213 326 215 332 Q215 338 203 336 Z", "#D9414E", 1.6)},
  redpack: {name:"紅包", tags:["newyear", "festival"], grip:true, color:"#D9414E",
    draw:(f, c) => `<g transform="rotate(5 203 316)">${P("M192 306 L214 306 L214 346 L192 346 Z", f)}${C(203, 333, 7, "#F6D65A", 1.6)}<text x="203" y="336.5" text-anchor="middle" font-size="9" font-weight="900" fill="#D9414E" font-family="system-ui,'Noto Sans TC',sans-serif">福</text></g>`},
  wand:    {name:"魔法棒", tags:["halloween", "party"], grip:true, color:"#F6D65A", lock:"halloween",
    draw:(f, c) => LN("M200 318 L230 250", 4.5) + LN("M200 318 L230 250", 2.4, "#fff") + star(232, 244, 13, f, 2) + [[250, 232], [246, 262], [220, 228]].map(([x, y]) => star(x, y, 3.5, "#fff", 1)).join("")},
});
Object.assign(BGS, {
  halloween: {name:"萬聖夜", tags:["halloween", "party"], draw:() => `<rect width="300" height="470" fill="#2B1F45"/>` + C(220, 80, 42, "#FFE9A8", 2.4) + C(236, 70, 8, "#F2D88A", 0) + [[70, 70], [110, 110], [180, 150]].map(([x, y]) => P(`M${x} ${y} Q${x - 8} ${y - 8} ${x - 18} ${y - 4} Q${x - 12} ${y + 2} ${x - 14} ${y + 8} Q${x - 6} ${y + 2} ${x} ${y + 6} Q${x + 6} ${y + 2} ${x + 14} ${y + 8} Q${x + 12} ${y + 2} ${x + 18} ${y - 4} Q${x + 8} ${y - 8} ${x} ${y} Z`, "#1B1430", 1.4)).join("") + P("M10 300 L10 220 L40 190 L70 220 L70 300 Z", "#1B1430", 2) + `<rect x="30" y="236" width="14" height="16" fill="#FFD447"/>` + `<rect y="380" width="300" height="90" fill="#3A2E55"/>` + LN("M0 380 L300 380", 2.4) + [[44, 404], [266, 420]].map(([x, y]) => E(x, y, 18, 14, "#F59A4A") + P(`M${x - 8} ${y - 4} L${x - 3} ${y} L${x - 8} ${y + 2} Z M${x + 8} ${y - 4} L${x + 3} ${y} L${x + 8} ${y + 2} Z`, INK, 0) + LN(`M${x - 7} ${y + 7} Q${x} ${y + 11} ${x + 7} ${y + 7}`, 1.8)).join("")},
  xmas:      {name:"聖誕夜", tags:["xmas", "winter"], draw:() => `<rect width="300" height="470" fill="#FBE9DA"/><rect y="384" width="300" height="86" fill="#B98A5E"/>` + LN("M0 384 L300 384", 2.4) + P("M20 60 L100 60 L100 170 L20 170 Z", "#2B3C6E") + LN("M60 60 L60 170 M20 115 L100 115", 2.4) + Array.from({length:8}, (_, i) => C(30 + (i * 23) % 66, 70 + (i * 37) % 92, 2, "#fff", 0)).join("") + [[250, 230, 46], [250, 280, 56], [250, 330, 66]].map(([x, y, w]) => P(`M${x} ${y - 50} L${x + w} ${y + 20} L${x - w} ${y + 20} Z`, "#3E8A5A", 2.4)).join("") + P("M242 350 L258 350 L258 384 L242 384 Z", "#8A5A3C", 2) + star(250, 176, 12, "#FFD447", 2) + [[230, 250, "#D9414E"], [270, 270, "#F6D65A"], [236, 300, "#4C8FE0"], [266, 320, "#D9414E"], [222, 340, "#F6D65A"]].map(([x, y, col]) => C(x, y, 5, col, 1.6)).join("") + P("M188 362 L214 362 L214 386 L188 386 Z", "#D9414E", 2) + LN("M201 362 L201 386", 3, "#F6D65A")},
});

// ---------- 第三批：衣服 ----------
const CIRC = (cx, cy, r) => `M${cx - r} ${cy} a${r} ${r} 0 1 0 ${r * 2} 0 a${r} ${r} 0 1 0 ${-r * 2} 0`;   // 圓形的路徑（合成描邊用）
Object.assign(TOPS, {
  blouse: {name:"泡泡袖上衣", tags:["neat", "party", "casual"], color:"#F7A8C4",
    draw:(f, c) => U([CIRC(115, 226, 15), CIRC(185, 226, 15), TORSO], f) + PB("M150 208 Q138 205 129 213 Q135 227 150 222 Z", "#fff", 2) + P("M150 224 L142 219 L142 230 Z M150 224 L158 219 L158 230 Z", shade(c, -.25), 1.6) + C(150, 224, 2.4, shade(c, -.25), 1.4)},
});
Object.assign(BOTTOMS, {
  denimskirt: {name:"牛仔裙", tags:["casual", "summer", "snack"], color:"#5B84C4",
    draw:(f, c) => P("M112.5 290 L187.5 290 L194 340 Q150 346 106 340 Z", f) + LN("M113 298 L187 298", 1.6) + LN("M150 298 L150 343", 1.6) + LN("M120 300 Q128 314 140 302 M160 302 Q172 314 180 300", 1.4) +
      LN("M108 334 Q150 340 192 334 M114 294 L186 294", 1.2, "#F2C14E", `stroke-dasharray="3 3"`) + C(150, 294, 2.2, "#C9CED6", 1.2)},
  tutu: {name:"蓬蓬紗裙", tags:["party"], color:"#F7A8C4",
    draw:(f, c) => P("M112 290 L188 290 Q214 320 212 336 Q200 346 188 338 Q176 348 164 340 Q150 350 136 340 Q124 348 112 338 Q100 346 88 336 Q86 320 112 290 Z", shade(c, .35)) +
      P("M112.5 290 L187.5 290 Q206 312 204 326 Q194 334 184 328 Q172 336 160 330 Q150 338 140 330 Q128 336 116 328 Q106 334 96 326 Q94 312 112.5 290 Z", f) + LN("M113 296 L187 296", 2.4, shade(c, -.2))},
});
Object.assign(DRESSES, {
  lolita: {name:"蓬蓬裙洋裝", tags:["party", "fancy"], color:"#F7A8C4",
    draw:(f, c) => P("M76 362 Q86 394 102 384 Q116 400 132 388 Q150 402 168 388 Q184 400 198 384 Q214 394 224 362 Z", "#fff", 2.2) +
      U([CIRC(115, 226, 14), CIRC(185, 226, 14), "M113 230 Q150 240 187 230 L187.5 288 Q214 318 222 368 Q206 380 192 372 Q178 384 164 374 Q150 386 136 374 Q122 384 108 372 Q94 380 78 368 Q86 318 112.5 288 Z"], f) +
      LN("M113 288 Q150 296 187 288", 2.4, shade(c, -.25)) + P("M150 290 L138 282 L138 298 Z M150 290 L162 282 L162 298 Z", "#fff", 1.8) + C(150, 290, 3, "#fff", 1.8) +
      LN("M84 352 Q150 366 216 352", 2, "#fff", `stroke-dasharray="1 5"`) + PB("M150 230 Q140 228 132 234 Q138 244 150 240 Z", "#fff", 1.8)},
  overalls: {name:"吊帶褲", tags:["casual", "snack"], color:"#5B84C4", overTop:true,
    draw:(f, c) => LN("M130 210 L134 250", 4) + LN("M170 210 L166 250", 4) + LN("M130 210 L134 250", 2.4, c) + LN("M170 210 L166 250", 2.4, c) +
      U(["M130 246 L170 246 L174 292 L126 292 Z", PANTHIP, PANTLEG, MX(PANTLEG)], f) + LN("M150 300 L150 426", 2.2) + P("M138 258 L162 258 L161 274 L139 274 Z", f, 1.8) + C(134, 252, 2.6, "#F6D65A", 1.4) + C(166, 252, 2.6, "#F6D65A", 1.4)},
});
Object.assign(OUTERS, {
  apron:    {name:"圍裙", tags:["casual", "snack"], color:"#FFFFFF",
    draw:(f, c) => LN("M132 212 Q150 236 168 212", 2.4) + U(["M128 238 L172 238 L174 286 L126 286 Z", "M118 284 L182 284 L190 362 Q150 370 110 362 Z"], f) + P("M136 300 L164 300 L163 320 L137 320 Z", f, 1.8) +
      LN("M110 360 Q150 368 190 360", 1.6, "#F7A8C4", `stroke-dasharray="4 3"`) + LN("M126 286 Q114 290 104 298 M174 286 Q186 290 196 298", 2)},
  knitvest: {name:"毛線背心", tags:["school", "neat", "warm"], color:"#8A9A5B",
    draw:(f, c) => P("M111 231 C110 221 113 215 123 212 C129 210 134 209 138 208 L150 248 L162 208 C166 209 171 210 177 212 C187 215 190 221 189 231 L186.5 302 Q150 308 113.5 302 Z", f) +
      LN("M138 208 L150 248 L162 208", 3, shade(c, -.25)) + [124, 134, 144, 156, 166, 176].map(x => LN(`M${x} 292 L${x} 302`, 1.2, shade(c, -.3))).join("") + LN("M114 290 Q150 296 186 290", 1.6, shade(c, -.3))},
});
Object.assign(SHOES, {
  heels:    {name:"尖頭高跟鞋", tags:["party", "formal", "fancy"], color:"#D9414E",
    draw:(f, c) => PB("M122 446 L127 446 L126 454 L123 454 Z", shade(c, -.3), 1.6) + PB("M119 440 Q121 427 134 426 Q146 427 152 444 L148 446 L120 446 Z", f) + PB("M126 431 Q134 428 142 431", "none", 1.4, `stroke="#fff" opacity=".6"`)},
  slippers: {name:"藍白拖", tags:["casual", "snack", "summer", "funny"], color:"#3B6FE0", bare:true,
    draw:(f, c) => PB("M118 444 Q134 452 150 444 L150 449 Q134 456 118 449 Z", "#fff", 2) + PB("M121 432 Q134 424 147 432 L147 437 Q134 431 121 437 Z", f, 2)},
});
Object.assign(SOCKS, {
  lace:   {name:"蕾絲短襪", tags:["school", "neat", "party"], color:"#FFFFFF",
    draw:(f) => TUBES("M135.5 412 L135 428", 23, f) + PB("M123 412 Q126 406 129 412 Q132 406 135 412 Q138 406 141 412 Q144 406 147 412", "#fff", 1.4)},
  tights: {name:"褲襪", tags:["winter", "warm", "neat", "school"], color:"#2E2B2B",
    draw:(f) => U(["M114 296 L186 296 L186 318 L114 318 Z", "M120 300 C121 350 125.5 392 126.5 433 L143.5 433 C143.5 394 148 352 151 300 Z", MX("M120 300 C121 350 125.5 392 126.5 433 L143.5 433 C143.5 394 148 352 151 300 Z")], f)},
});

// ---------- 第三批：配件 ----------
Object.assign(HATS, {
  bucket:    {name:"漁夫帽", tags:["casual", "summer", "snack"], color:"#F6E7C8",
    draw:(f, c) => P("M97 102 C95 58 120 44 150 44 C180 44 205 58 203 102 Q150 92 97 102 Z", f) + P("M78 106 Q150 84 222 106 Q226 118 214 120 Q150 102 86 120 Q74 118 78 106 Z", shade(c, -.08)) + LN("M98 92 Q150 82 202 92", 1.6, shade(c, -.3))},
  bunny:     {name:"兔耳髮箍", tags:["party", "animal", "casual"], color:"#FFFFFF",
    draw:(f, c) => LN("M94 104 Q150 46 206 104", 6) + LN("M94 104 Q150 46 206 104", 3.4, "#F7A8C4") + PB("M122 72 Q108 22 122 12 Q138 18 136 68 Z", f) + PB("M124 62 Q116 30 123 22 Q131 28 130 62 Z", "#F7A8C4", 0)},
  headband:  {name:"布髮箍", tags:["casual", "school", "neat"], color:"#D9414E",
    draw:(f, c) => LN("M92 106 Q150 44 208 106", 10) + LN("M92 106 Q150 44 208 106", 6.5, f) + P("M178 62 L166 52 L166 70 Z M178 62 L190 52 L190 70 Z", f, 2) + C(178, 62, 3.6, shade(c, -.2), 1.8)},
  headphones:{name:"耳機", tags:["casual", "snack", "sport"], color:"#2E2B2B",
    draw:(f, c) => LN("M86 132 Q84 36 150 34 Q216 36 214 132", 8) + LN("M86 132 Q84 36 150 34 Q216 36 214 132", 4.6, f) + P("M74 124 Q74 112 86 112 L96 112 L96 160 L86 160 Q74 160 74 148 Z", f) + P(MX("M74 124 Q74 112 86 112 L96 112 L96 160 L86 160 Q74 160 74 148 Z"), f) + C(84, 136, 4, shade(c, .4), 0) + C(216, 136, 4, shade(c, .4), 0)},
});
Object.assign(GLASSES, {
  starg: {name:"星星眼鏡", tags:["party", "funny"], color:"#F6D65A",
    draw:(f, c) => star(128, 138, 18, "rgba(255,255,255,.2)", 3).replace(`stroke="${INK}"`, `stroke="${c}"`) + star(172, 138, 18, "rgba(255,255,255,.2)", 3).replace(`stroke="${INK}"`, `stroke="${c}"`) + LN("M144 136 Q150 132 156 136", 2.6, c)},
  catg:  {name:"貓眼眼鏡", tags:["neat", "party"], color:"#E8679A",
    draw:(f, c) => P("M108 130 L113 124 Q128 126 146 130 Q146 148 128 149 Q112 148 108 130 Z", "rgba(255,255,255,.15)", 2.8, `stroke="${c}"`) + P(MX("M108 130 L113 124 Q128 126 146 130 Q146 148 128 149 Q112 148 108 130 Z"), "rgba(255,255,255,.15)", 2.8, `stroke="${c}"`) + LN("M146 134 Q150 131 154 134", 2.6, c)},
});
Object.assign(HAIRPINS, {
  pearls: {name:"珍珠髮夾", tags:["party", "neat", "formal"], color:"#FFFFFF", draw:(f) => [[180, 96], [189, 93], [198, 92], [207, 94]].map(([x, y]) => C(x, y, 4, f, 1.6) + C(x - 1.2, y - 1.2, 1.1, "#fff", 0)).join("")},
  cherry: {name:"櫻桃髮圈", tags:["casual", "summer"], color:"#D9414E", draw:(f) => LN("M190 80 Q194 88 186 98 M190 80 Q198 86 200 96", 1.8, "#4F8F45") + C(186, 100, 5.5, f, 1.8) + C(200, 98, 5.5, f, 1.8) + C(184, 98, 1.4, "#fff", 0) + C(198, 96, 1.4, "#fff", 0)},
});
Object.assign(NECKS, {
  choker: {name:"頸鍊", tags:["party", "casual"], color:"#2E2B2B", draw:(f) => LN("M141 204 Q150 209 159 204", 5.5) + LN("M141 204 Q150 209 159 204", 3, f) + P(heartD(150, 212, 3.5), "#E8679A", 1.2)},
});
Object.assign(BAGS, {
  tote:   {name:"帆布袋", tags:["casual", "school", "snack"], color:"#F6E7C8",
    draw:(f, c) => LN("M122 214 L108 290 M130 214 L124 290", 4) + LN("M122 214 L108 290 M130 214 L124 290", 2, shade(c, -.2)) + P("M96 288 L136 288 L138 330 L94 330 Z", f) + P(heartD(116, 308, 6), "#E8679A", 1.4)},
  catbag: {name:"貓咪包", tags:["casual", "snack", "animal"], color:"#2E2B2B",
    draw:(f, c) => LN("M178 212 L122 294", 4.5) + LN("M178 212 L122 294", 2.6, "#F7A8C4") + P("M102 294 L106 280 L112 290 L124 290 L130 280 L134 294 Q138 318 118 320 Q98 318 102 294 Z", f) + C(112, 302, 2, "#F6D65A", 0) + C(124, 302, 2, "#F6D65A", 0) + E(118, 307, 1.8, 1.3, "#F7A8C4", 0)},
});
Object.assign(HANDS, {
  phone:    {name:"手機", tags:["casual", "snack"], grip:true, color:"#B9A3E8",
    draw:(f, c) => P("M194 286 Q194 282 198 282 L214 282 Q218 282 218 286 L218 324 Q218 328 214 328 L198 328 Q194 328 194 324 Z", f) + P("M197 287 L215 287 L215 318 L197 318 Z", "#2B3C6E", 1.2) + star(206, 300, 4, "#FFE98A", 0)},
  icecream: {name:"冰淇淋", tags:["summer", "snack"], grip:true, color:"#F7A8C4",
    draw:(f, c) => P("M196 300 L216 300 L206 330 Z", "#E8B57A") + LN("M199 306 L213 306 M202 314 L210 314", 1.2, "#B8864E") + C(206, 292, 11, f) + C(198, 298, 5, f, 0) + C(214, 298, 5, f, 0) + C(203, 288, 2.4, "#fff", 0) + C(206, 280, 3.5, "#D9414E", 1.4)},
  teddy:    {name:"小熊玩偶", tags:["casual", "party"], grip:true, color:"#C98A4B",
    draw:(f, c) => `<g transform="translate(-5 0)">` + C(212, 312, 6, f) + C(226, 312, 6, f) + E(216, 342, 13, 14, f) + C(219, 320, 12, f) + C(214, 318, 1.6, INK, 0) + C(224, 318, 1.6, INK, 0) + E(219, 324, 4, 3, shade(c, .4), 0) + E(219, 323, 1.4, 1, INK, 0) + LN("M216 352 Q219 354 222 352", 1.4) + `</g>`},
  lollipop: {name:"棒棒糖", tags:["snack", "party"], grip:true, color:"#E8679A",
    draw:(f, c) => LN("M203 322 L208 276", 3.6) + LN("M203 322 L208 276", 2, "#fff") + C(209, 268, 13, f) + `<path d="M209 268 m-9 0 a9 9 0 0 1 9 -9 a6 6 0 0 1 6 6 a4 4 0 0 1 -4 4 a2 2 0 0 1 -2 -2" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round"/>`},
  camera:   {name:"相機", tags:["casual", "summer"], grip:true, color:"#2E2B2B",
    draw:(f, c) => `<g transform="translate(6 14)">` + P("M190 300 L222 300 L222 324 L190 324 Z", f) + P("M196 296 L206 296 L208 300 L194 300 Z", f, 1.6) + C(208, 312, 8, "#9BD0F5", 2) + C(206, 310, 2, "#fff", 0) + C(216, 304, 1.6, "#F6D65A", 0) + `</g>`},
});

// ---------- 第四批：背景 ----------
const TXT = (x, y, t, size, col) => `<text x="${x}" y="${y}" text-anchor="middle" font-size="${size}" font-weight="900" fill="${col}" font-family="system-ui,'Noto Sans TC',sans-serif">${t}</text>`;
Object.assign(BGS, {
  library: {name:"圖書館", tags:["school", "neat"], draw:() => `<rect width="300" height="470" fill="#F1E4CC"/><rect y="390" width="300" height="80" fill="#9C6B45"/>` + LN("M0 390 L300 390", 2.4) +
    [[8, 40], [8, 140], [8, 240], [204, 40], [204, 140], [204, 240]].map(([x, y], i) => P(`M${x} ${y} L${x + 88} ${y} L${x + 88} ${y + 96} L${x} ${y + 96} Z`, "#B9835A", 2.4) +
      Array.from({length:7}, (_, k) => { const w = 9 + (k * 7 + i * 3) % 5, h = 62 + (k * 13 + i * 5) % 22, bx = x + 6 + k * 11.4;
        return `<rect x="${bx.toFixed(1)}" y="${y + 92 - h}" width="${w}" height="${h}" fill="${["#D9414E", "#4C8FE0", "#F6D65A", "#4FA36B", "#B9A3E8", "#F59A4A", "#F7A8C4"][(k + i) % 7]}" stroke="${INK}" stroke-width="1.4"/>`; }).join("")).join("") +
    P("M110 60 L190 60 L190 160 L110 160 Z", "#CDEBFA", 2.4) + LN("M150 60 L150 160 M110 110 L190 110", 2.2) + TXT(150, 192, "安靜看書", 15, "#9C6B45")},
  cafe:    {name:"咖啡廳", tags:["casual", "snack", "neat"], draw:() => `<rect width="300" height="470" fill="#F6E2CF"/>` + Array.from({length:12}, (_, i) => `<rect x="${i * 25}" y="0" width="12.5" height="380" fill="#EFD3BA"/>`).join("") + `<rect y="380" width="300" height="90" fill="#7A4E36"/>` + LN("M0 380 L300 380", 2.4) +
    P("M18 40 L120 40 L120 120 L18 120 Z", "#3A2A20", 3, `stroke="#8A5A3C"`) + TXT(69, 70, "MENU", 16, "#fff") + LN("M34 84 L100 84 M34 96 L90 96 M34 108 L96 108", 1.6, "rgba(255,255,255,.7)") +
    [[200, 70], [260, 70]].map(([x, y]) => LN(`M${x} 0 L${x} ${y}`, 1.6) + P(`M${x - 16} ${y + 18} Q${x - 16} ${y} ${x} ${y} Q${x + 16} ${y} ${x + 16} ${y + 18} Z`, "#F6D65A", 2) + C(x, y + 22, 4, "#FFF4C2", 1.4)).join("") +
    P("M226 310 L290 310 L286 322 L230 322 Z", "#C98A4B", 2) + LN("M258 322 L258 380", 4) + P("M244 290 L262 290 L260 310 L246 310 Z", "#fff", 2) + LN("M262 296 Q270 298 261 304", 2) + LN("M250 282 Q246 276 251 270 M256 282 Q252 276 257 270", 1.4, "#B9A39A")},
  sakura:  {name:"櫻花樹下", tags:["casual", "formal", "festival"], draw:() => `<defs><linearGradient id="skyK" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#BFE3FA"/><stop offset="1" stop-color="#FCE8F0"/></linearGradient></defs><rect width="300" height="470" fill="url(#skyK)"/>` +
    P("M-4 350 Q150 326 304 350 L304 474 L-4 474 Z", "#A9DB8C") + P("M30 352 L42 352 Q40 290 52 240 L40 236 Q30 290 30 352 Z", "#8A5A3C", 2.2) + P("M258 352 L270 352 Q272 290 262 240 L250 244 Q258 290 258 352 Z", "#8A5A3C", 2.2) +
    [[46, 200, 52], [10, 230, 32], [86, 228, 30], [262, 196, 54], [296, 232, 34], [222, 230, 30]].map(([x, y, r]) => C(x, y, r, "#F8C6D8", 2.4)).join("") +
    Array.from({length:26}, (_, i) => { const x = (i * 67 + 13) % 300, y = (i * 41 + 30) % 420; return `<g transform="rotate(${i * 37} ${x} ${y})">${E(x, y, 4, 2.6, i % 2 ? "#F7A8C4" : "#FBD3E2", 0)}</g>`; }).join("")},
  space:   {name:"太空", tags:["party", "fancy"], draw:() => `<defs><radialGradient id="neb" cx=".3" cy=".3" r=".8"><stop offset="0" stop-color="#5B3E9E"/><stop offset="1" stop-color="#140F2E"/></radialGradient></defs><rect width="300" height="470" fill="url(#neb)"/>` +
    Array.from({length:40}, (_, i) => C((i * 71 + 7) % 300, (i * 53 + 11) % 470, (i % 3) * .6 + .8, "#fff", 0)).join("") + [[40, 60], [250, 140], [70, 300], [270, 380]].map(([x, y]) => star(x, y, 5, "#FFE98A", 0)).join("") +
    C(236, 74, 30, "#F59A4A", 2.4) + E(236, 74, 50, 10, "none", 2.4, `transform="rotate(-18 236 74)"`) + LN("M214 66 Q236 60 258 70 M212 82 Q236 78 258 88", 1.6, "#D9763A") +
    C(46, 400, 24, "#9BD0F5", 2.4) + C(40, 394, 5, "#7AB8E6", 0) + C(54, 408, 4, "#7AB8E6", 0)},
  amusement: {name:"遊樂園", tags:["casual", "snack", "party"], draw:() => `<rect width="300" height="470" fill="#CDEFFF"/>` + E(60, 50, 30, 11, "#fff", 0) + E(250, 90, 32, 11, "#fff", 0) +
    C(220, 210, 74, "none", 4) + C(220, 210, 74, "none", 2, `stroke="#F7A8C4"`) + Array.from({length:8}, (_, i) => { const a = i * Math.PI / 4, x = 220 + Math.cos(a) * 74, y = 210 + Math.sin(a) * 74;
      return LN(`M220 210 L${x.toFixed(1)} ${y.toFixed(1)}`, 1.6) + P(`M${(x - 9).toFixed(1)} ${(y - 2).toFixed(1)} L${(x + 9).toFixed(1)} ${(y - 2).toFixed(1)} L${(x + 7).toFixed(1)} ${(y + 12).toFixed(1)} L${(x - 7).toFixed(1)} ${(y + 12).toFixed(1)} Z`, ["#D9414E", "#F6D65A", "#4C8FE0", "#4FA36B"][i % 4], 2); }).join("") +
    C(220, 210, 8, "#F6D65A", 2) + LN("M220 210 L188 370 M220 210 L252 370", 3) +
    P("M10 230 L70 230 L80 250 L0 250 Z", "#D9414E", 2.2) + [0, 1, 2, 3].map(k => `<rect x="${4 + k * 19}" y="231" width="9" height="18" fill="#fff" opacity=".6"/>`).join("") + P("M8 250 L72 250 L72 330 L8 330 Z", "#FFF4E0", 2) + TXT(40, 296, "爆米花", 14, "#D9414E") +
    P("M-4 370 L304 370 L304 474 L-4 474 Z", "#E7D3B4") + LN("M0 370 L300 370", 2.4) + [[106, 96, "#F7A8C4"], [124, 84, "#9BD0F5"], [140, 100, "#F6D65A"]].map(([x, y, col]) => LN(`M${x} ${y + 14} Q${x + 4} ${y + 60} 120 170`, 1.2) + E(x, y, 10, 12, col, 2)).join("")},
});

// ---------- 男生角色 ----------
const ROLES = {girl:{name:"女生"}, boy:{name:"男生"}};
Object.assign(HAIRB, {
  boycut:    {name:"男生短髮", crop:true, draw:h => P("M88 126 C84 60 216 60 212 126 L211 150 Q205 160 197 154 L103 154 Q95 160 89 150 Z", h)},
  mushroom:  {name:"香菇頭", draw:h => P("M84 128 C78 54 222 54 216 128 Q219 150 211 162 Q150 170 89 162 Q81 150 84 128 Z", h)},
  wolf:      {name:"狼尾頭", crop:true, draw:h => P("M88 126 C84 60 216 60 212 126 L210 156 Q204 168 198 176 Q202 196 194 210 Q188 200 184 206 Q178 196 172 202 L128 202 Q122 196 116 206 Q112 200 106 210 Q98 196 102 176 Q96 168 90 156 Z", h) + LN("M108 182 Q110 196 110 204 M192 182 Q190 196 190 204", 1.6, strand(h), `opacity=".7"`)},
  curlyboy:  {name:"捲捲短髮", crop:true, draw:h => P("M90 128 Q78 116 86 100 Q80 82 96 74 Q98 56 118 56 Q130 42 150 48 Q170 42 182 56 Q202 56 204 74 Q220 82 214 100 Q222 116 210 128 Q216 146 206 156 Q196 162 190 156 L110 156 Q104 162 94 156 Q84 146 90 128 Z", h)},
});
Object.assign(HAIRF, {
  boyfringe: {name:"自然短瀏海", d:" C209 118 203 102 192 98 Q186 108 178 112 Q178 100 170 96 Q162 108 152 112 Q152 98 144 96 Q136 108 126 110 Q128 98 120 96 Q114 104 108 104 C96 110 91 126 89 152 Z", cl:[108, 104], cr:[108, 104], lines:"M128 70 Q124 86 126 100 M160 66 Q158 84 160 100"},
  sweep:     {name:"斜瀏海", d:" C209 118 201 98 188 92 Q172 104 142 108 Q120 110 106 114 C96 120 91 132 89 152 Z", cl:[106, 114], cr:[100, 96], lines:"M186 70 Q170 92 146 104 M160 62 Q140 88 116 108"},
  bowl:      {name:"西瓜皮瀏海", d:" C210 130 206 116 196 112 Q150 118 104 112 C94 116 90 130 89 152 Z", cl:[104, 112], cr:[104, 112], lines:"M124 70 Q120 92 122 112 M150 62 Q150 90 150 114 M176 70 Q180 92 178 112"},
});
Object.assign(BROWS, {
  bold:  {name:"粗眉", d:cx => `M${cx - 11} 118 Q${cx} 111 ${cx + 11} 116 Q${cx} 114.5 ${cx - 11} 118 Z`},
  sharp: {name:"劍眉", d:(cx, r) => r ? `M${cx - 10} 117 L${cx + 11} 112 L${cx - 10} 119 Z` : `M${cx + 10} 117 L${cx - 11} 112 L${cx + 10} 119 Z`},
});
Object.assign(TOPS, {
  hoodboy:  {name:"棒球T", tags:["casual", "sport", "school"], color:"#2C3E70",
    draw:(f, c) => U([...sleevesS(26), TORSO], "#fff") + U([...sleevesS(27)], f) + P("M140 210 Q150 220 160 210", "none", 2.2) + `<text x="150" y="262" text-anchor="middle" font-size="22" font-weight="900" fill="${c}" font-family="system-ui,sans-serif">23</text>`},
  openshirt:{name:"開襟襯衫", long:true, tags:["casual", "summer"], color:"#4C8FE0",
    draw:(f, c) => P(TORSO, "#fff") + U([...sleevesL(27), "M111 231 C110 221 113 215 123 212 C131 210 139 209 140 203 L144 304 L114 304 Z", MX("M111 231 C110 221 113 215 123 212 C131 210 139 209 140 203 L144 304 L114 304 Z")], f) + cuffs(27) + PB("M140 204 L132 212 L141 226", "none", 2)},
});
Object.assign(BOTTOMS, {
  khaki:  {name:"卡其長褲", tags:["casual", "school", "neat"], color:"#C9A877",
    draw:(f, c) => PANTS(f) + LN("M113 297 L187 297", 1.6) + PB("M118 300 Q124 312 134 304", "none", 1.4)},
  bshorts: {name:"運動短褲", tags:["sport", "summer", "casual"], color:"#2C3E70",
    draw:(f, c) => P("M112.5 290 L187.5 290 L192 352 L154 352 L150 330 L146 352 L108 352 Z", f) + PB("M110 340 L110 350 M114 290 L110 352", "none", 3.2, `stroke="#fff"`) + LN("M113 297 L187 297", 1.6)},
});
Object.assign(NECKS, {
  necktie: {name:"領帶", tags:["formal", "neat", "school"], color:"#2C3E70", draw:(f) => P("M150 214 L144 222 L147 266 L150 274 L153 266 L156 222 Z", f, 2) + P("M145 212 L155 212 L153 222 L147 222 Z", f, 1.8)},
});

// ---------- 男生第二批：上衣、外套、帽子、手上拿的 ----------
Object.assign(TOPS, {
  dino:       {name:"恐龍 T 恤", tags:["casual", "snack", "funny"], color:"#F6E7C8",
    draw:(f, c) => U([...sleevesS(26), TORSO], f) + LN("M137 211 Q150 222 163 211") +
      P("M128 280 Q126 262 140 258 Q150 256 154 248 Q156 240 164 240 Q174 240 174 250 Q174 258 166 260 Q166 270 172 278 L168 282 L162 272 Q158 284 150 286 L150 292 L144 292 L144 286 L136 286 L136 292 L130 292 Z", "#5FB36B", 1.8) +
      C(166, 247, 1.6, INK, 0) + P("M140 258 L144 250 L148 257 M132 266 L134 258 L140 262", "#F6D65A", 1.4)},
  turtleneck: {name:"高領毛衣", long:true, tags:["warm", "winter", "neat"], color:"#2E2B2B",
    draw:(f, c) => U([...sleevesL(27), TORSO, "M136 192 Q150 196 164 192 L165 214 Q150 220 135 214 Z"], f) + cuffs(27) + LN("M136 200 Q150 204 164 200 M136 207 Q150 211 164 207", 1.4, shade(c, lum(c) < .25 ? .3 : -.25))},
});
Object.assign(OUTERS, {
  varsity: {name:"棒球外套", long:true, tags:["casual", "school", "sport"], color:"#2C3E70",
    draw:(f, c) => U(sleevesL(29), "#F6E7C8") + cuffs(29) + U([OUTER_PANEL, MX(OUTER_PANEL)], f) + PB("M140 208 L132 228 L144 236", "none", 2.2) +
      PB("M114 292 L143 292 L143 302 L114 302 Z", shade(c, -.2), 1.6) + [232, 252, 272].map(y => C(146, y, 2.2, "#F6E7C8", 1.2)).join("") +
      `<text x="128" y="262" text-anchor="middle" font-size="20" font-weight="900" fill="#F6E7C8" stroke="${INK}" stroke-width="1.2" font-family="system-ui,sans-serif">B</text>`},
  denimjk: {name:"牛仔外套", long:true, tags:["casual", "snack"], color:"#5B84C4",
    draw:(f, c) => U([...sleevesL(29), OUTER_PANEL, MX(OUTER_PANEL)], f) + cuffs(29) + PB("M140 208 L130 226 L143 236", "none", 2.2) +
      PB("M118 240 L138 240 L138 254 L128 258 L118 254 Z", f, 1.6) + PB("M116 244 L140 244 M115 288 L143 288", "none", 1.2, `stroke="#F2C14E" stroke-dasharray="3 3"`) + [232, 260, 288].map(y => C(144, y, 2, "#C9CED6", 1.2)).join("")},
  puffer:  {name:"羽絨外套", long:true, tags:["winter", "warm"], color:"#D9414E",
    draw:(f, c) => P("M124 206 Q150 196 176 206 L176 218 Q150 210 124 218 Z", f, 2.2) + U([...sleevesL(32), "M108 231 C107 219 112 212 123 210 L148 206 L148 312 L110 312 Z", MX("M108 231 C107 219 112 212 123 210 L148 206 L148 312 L110 312 Z")], f) + cuffs(32) +
      [236, 262, 288].map(y => LN(`M110 ${y} Q129 ${y + 4} 147 ${y} M153 ${y} Q171 ${y + 4} 190 ${y}`, 1.6, shade(c, -.3))).join("") + LN("M150 210 L150 312", 2)},
});
Object.assign(HATS, {
  backcap: {name:"反戴棒球帽", tags:["sport", "casual", "funny"], color:"#D9414E",
    draw:(f, c) => P("M90 104 Q86 44 150 40 Q214 44 210 104 Z", f) + LN("M120 48 Q112 70 112 100 M180 48 Q188 70 188 100", 1.6, shade(c, -.25)) + C(150, 41, 4.5, shade(c, -.2), 1.8) +
      P("M132 104 Q132 86 150 86 Q168 86 168 104 Z", shade(c, -.45), 2) + LN("M136 92 L164 92", 3, "#F6E7C8")},
  fedora:  {name:"紳士帽", tags:["formal", "neat", "party"], color:"#5A4A42",
    draw:(f, c) => P("M106 96 Q102 52 126 44 Q150 54 174 44 Q198 52 194 96 Z", f) + P("M106 82 Q150 90 194 82 L194 94 Q150 102 106 94 Z", INK, 1.6) +
      P("M70 100 Q150 80 230 100 Q238 112 224 114 Q150 96 76 114 Q62 112 70 100 Z", f) + LN("M136 52 Q150 60 164 52", 1.6, shade(c, -.35))},
});
Object.assign(HANDS, {
  basketball: {name:"籃球", tags:["sport", "casual"], grip:true, color:"#F08A3C",
    draw:(f, c) => C(212, 318, 19, f) + LN("M193 318 L231 318 M212 299 L212 337", 1.6) + LN("M199 303 Q208 318 199 333 M225 303 Q216 318 225 333", 1.6)},
  skateboard: {name:"滑板", tags:["sport", "casual", "summer"], grip:true, color:"#4FA36B",
    draw:(f, c) => [[220, 262], [220, 372]].map(([x, y]) => LN(`M${x - 6} ${y} L${x + 4} ${y}`, 3) + C(x + 8, y - 6, 4.5, "#F6D65A", 1.6) + C(x + 8, y + 6, 4.5, "#F6D65A", 1.6)).join("") +
      P("M212 244 Q222 244 222 258 L222 376 Q222 390 212 390 Q202 390 202 376 L202 258 Q202 244 212 244 Z", f) + LN("M207 262 L217 280 M207 290 L217 308 M207 340 L217 358", 1.4, shade(c, .4))},
  gamepad:    {name:"遊戲機", tags:["casual", "snack", "funny"], grip:true, color:"#B9A3E8",
    draw:(f, c) => P("M188 306 Q188 296 198 296 L226 296 Q236 296 236 306 L236 324 Q236 334 226 334 L198 334 Q188 334 188 324 Z", f) + P("M204 302 L220 302 L220 318 L204 318 Z", "#9BD0F5", 1.4) +
      P("M196 322 L196 330 M192 326 L200 326", "none", 2) + C(226, 324, 2.6, "#D9414E", 1.2) + C(220, 329, 2.6, "#F6D65A", 1.2)},
});

// ---------- 男生第三批：上衣、褲子、鞋子、包包、小配件 ----------
Object.assign(TOPS, {
  bball: {name:"籃球背心", tags:["sport", "summer"], color:"#D9414E",
    draw:(f, c) => P("M126 206 Q150 230 174 206 L182 222 Q190 236 187 302 Q150 308 113 302 Q110 236 118 222 Z", f) + LN("M126 208 Q150 232 174 208", 3, "#fff") + PB("M119 224 Q114 260 114 300", "none", 3, `stroke="#fff"`) +
      `<text x="150" y="276" text-anchor="middle" font-size="28" font-weight="900" fill="#fff" stroke="${INK}" stroke-width="1.2" font-family="system-ui,sans-serif">7</text>`},
});
Object.assign(OUTERS, {
  vest: {name:"鋪棉背心", tags:["warm", "winter", "casual"], color:"#4FA36B",
    draw:(f, c) => P("M124 206 Q150 198 176 206 L176 216 Q150 210 124 216 Z", f, 2.2) + U(["M114 231 C113 220 116 214 124 211 L148 207 L148 306 L114 306 Z", MX("M114 231 C113 220 116 214 124 211 L148 207 L148 306 L114 306 Z")], f) +
      [232, 256, 280].map(y => LN(`M115 ${y} Q131 ${y + 4} 147 ${y} M153 ${y} Q169 ${y + 4} 185 ${y}`, 1.6, shade(c, -.3))).join("") + LN("M150 210 L150 306", 2)},
});
Object.assign(BOTTOMS, {
  joggers: {name:"縮口褲", long:true, tags:["sport", "casual", "snack"], color:"#9AA0A8",
    draw:(f, c) => PANTS(f) + PB("M120 414 L149.5 414 L149.5 426 Q135 431 120 426 Z", shade(c, -.15), 2) + LN("M113 297 L187 297", 1.6) + LN("M146 298 Q144 308 140 312 M154 298 Q156 308 160 312", 1.4, "#fff")},
  ripped:  {name:"破洞牛仔褲", long:true, tags:["casual", "snack"], color:"#7FA7D6",
    draw:(f, c) => PANTS(f) + LN("M150 300 L150 332", 1.6) + PB("M126 358 Q134 354 142 358 Q134 364 126 358 Z", "#F3E3D6", 1.4) + PB("M126 356 L142 356 M127 361 L141 361", "none", 1.2, `stroke="#fff"`) + LN("M125 298 Q132 306 140 300", 1.4, shade(c, -.35))},
});
Object.assign(SHOES, {
  slipon:   {name:"格紋懶人鞋", tags:["casual", "snack", "school"], color:"#FFFFFF",
    draw:(f, c) => PB(SHOE, f) + PB("M120 440 Q134 446 148 440 L148 438 Q148 447 134 447 Q120 447 120 438 Z", "#fff", 2) +
      [[124, 428], [132, 428], [128, 432], [136, 432], [124, 436], [132, 436], [140, 436]].map(([x, y]) => PB(`M${x} ${y} L${x + 4} ${y} L${x + 4} ${y + 4} L${x} ${y + 4} Z`, INK, 0)).join("")},
  workboots:{name:"短靴", tags:["winter", "casual", "warm"], color:"#C98A4B",
    draw:(f, c) => PB("M122 410 L146 410 L148 438 Q148 447 134 447 Q120 447 120 438 Z", f) + PB("M120 440 Q134 446 148 440 L148 440 Q148 447 134 447 Q120 447 120 440 Z", shade(c, -.45), 2) +
      PB("M128 416 L140 418 M128 422 L140 424 M128 428 L140 430", "none", 1.6) + PB("M122 410 L146 410 L146 415 L122 415 Z", shade(c, -.2), 1.8)},
  slides:   {name:"運動拖鞋", tags:["summer", "sport", "casual", "beach"], color:"#2E2B2B", bare:true,
    draw:(f, c) => PB("M118 444 Q134 452 150 444 L150 449 Q134 456 118 449 Z", "#fff", 2) + PB("M120 428 Q134 420 148 428 L148 438 Q134 432 120 438 Z", f, 2) + PB("M126 430 L142 430", "none", 2, `stroke="#fff"`)},
});
Object.assign(BAGS, {
  sling:  {name:"胸前小包", tags:["casual", "snack", "sport"], color:"#2E2B2B",
    draw:(f, c) => LN("M126 210 L186 290", 4.5) + LN("M126 210 L186 290", 2.6, shade(c, .3)) + P("M140 232 Q140 222 150 222 L178 222 Q188 222 188 232 L188 248 Q188 258 178 258 L150 258 Q140 258 140 248 Z", f) + LN("M142 236 L186 236", 1.6, "#F6D65A")},
  duffel: {name:"運動包", tags:["sport", "casual"], color:"#4C8FE0",
    draw:(f, c) => LN("M90 312 Q100 290 112 312", 4.5) + LN("M90 312 Q100 290 112 312", 2.6, shade(c, -.2)) + P("M74 318 Q74 310 82 310 L120 310 Q128 310 128 318 L128 342 Q128 348 122 348 L80 348 Q74 348 74 342 Z", f) +
      LN("M74 322 L128 322", 2) + LN("M82 335 L120 335", 3, "#fff")},
});
Object.assign(NECKS, {
  dogtag: {name:"軍牌項鍊", tags:["casual", "sport"], color:"#C9CED6", draw:(f) => LN("M138 206 Q150 238 162 206", 1.4, "#9AA0A8") + P("M145 236 Q145 232 149 232 L151 232 Q155 232 155 236 L155 246 Q155 250 151 250 L149 250 Q145 250 145 246 Z", f, 1.6)},
});
Object.assign(GLASSES, {
  square: {name:"方框眼鏡", tags:["school", "neat"], color:"#2E2B2B",
    draw:(f, c) => ["M110 128 Q110 124 114 124 L142 124 Q146 124 146 128 L146 146 Q146 150 142 150 L114 150 Q110 150 110 146 Z"].map(d => P(d, "rgba(255,255,255,.18)", 3.4, `stroke="${c}"`) + P(MX(d), "rgba(255,255,255,.18)", 3.4, `stroke="${c}"`)).join("") + LN("M146 134 Q150 131 154 134", 3, c)},
});
Object.assign(HATS, {
  sweatband: {name:"運動頭帶", tags:["sport", "casual"], color:"#FFFFFF",
    draw:(f, c) => LN("M89 112 Q150 94 211 112", 13) + LN("M89 112 Q150 94 211 112", 9.5, f) + LN("M91 110 Q150 92 209 110", 2, "#D9414E") + LN("M91 116 Q150 98 209 116", 2, "#4C8FE0")},
});

// ---------- 男生髮型第二批 ----------
Object.assign(HAIRB, {
  twoblock: {name:"兩側推", crop:true, draw:h => P("M92 130 C90 120 90 112 92 104 L208 104 C210 112 210 120 208 130 L207 148 Q203 154 198 150 L102 150 Q97 154 93 148 Z", mix(h, "#F3D2BC", .45), 2.4) + P("M90 112 C84 54 216 54 210 112 Q150 100 90 112 Z", h),
    // 兩邊鬢角推短：蓋在前面的小鬢角上，顏色淡淡的
    front:h => PB("M89 122 C88 134 89 144 92 149 Q97 153 102 148 C103 138 104 128 106 118 Q96 116 89 122 Z", mix(h, "#F3D2BC", .5), 2.2) + PB("M93 128 L93 130 M98 126 L98 128 M95 138 L95 140 M100 134 L100 136 M97 145 L97 147", "none", 1.4, `stroke="${shade(h, .1)}" opacity=".6"`)},
  longboy:  {name:"男生中長髮", draw:h => P("M86 126 C80 56 220 56 214 126 C216 156 218 178 214 196 Q206 200 200 194 Q196 202 188 198 L112 198 Q104 202 100 194 Q94 200 86 196 C82 178 84 156 86 126 Z", h) + LN("M94 160 Q92 178 96 192 M206 160 Q208 178 204 192", 1.6, strand(h), `opacity=".7"`)},
  afro:     {name:"爆炸頭", draw:h => P("M150 18 Q172 14 186 28 Q206 24 216 42 Q236 48 236 70 Q252 84 244 104 Q254 124 240 140 Q246 162 228 172 Q222 186 204 182 L96 182 Q78 186 72 172 Q54 162 60 140 Q46 124 56 104 Q48 84 64 70 Q64 48 84 42 Q94 24 114 28 Q128 14 150 18 Z", h) +
    LN("M84 70 Q78 84 84 96 M216 70 Q222 84 216 96 M70 124 Q64 138 72 150 M230 124 Q236 138 228 150 M130 30 Q122 40 128 50 M170 30 Q178 40 172 50", 1.6, strand(h), `opacity=".7"`)},
});
Object.assign(HAIRF, {
  messy: {name:"亂翹瀏海", d:" C209 120 205 104 196 100 L198 114 Q186 104 176 110 L180 96 Q166 104 156 106 L160 92 Q146 102 136 106 L134 94 Q124 102 116 108 L112 98 Q104 104 100 110 C94 118 90 132 89 152 Z", cl:[104, 106], cr:[104, 100], lines:"M128 68 Q124 84 130 98 M168 66 Q170 82 164 98"},
  comma: {name:"逗號瀏海", d:" C209 120 204 100 190 94 Q182 106 172 112 Q164 118 172 122 Q156 122 146 114 Q134 104 122 98 Q108 104 104 116 Q102 124 108 126 Q98 128 94 136 C91 142 90 146 89 152 Z", cl:[104, 118], cr:[102, 104], lines:"M178 68 Q182 86 174 108 M140 66 Q132 84 128 100"},
});
// ---------- 女生衣服第四批 ----------
Object.assign(TOPS, {
  offshoulder: {name:"一字領上衣", tags:["summer", "party", "beach"], color:"#FFFFFF",
    draw:(f, c) => U([CIRC(112, 238, 12), CIRC(188, 238, 12), "M110 228 Q150 238 190 228 L186.5 302 Q150 308 113.5 302 Z"], f) + LN("M100 232 q6 8 12 0 q6 8 12 0 q6 8 12 0 q6 8 12 0 q6 8 12 0 q6 8 12 0 q6 8 12 0 q6 8 12 0", 1.6, shade(c, -.3))},
  ruffle:      {name:"荷葉邊上衣", tags:["neat", "party", "school"], color:"#F7A8C4",
    draw:(f, c) => U([...sleevesS(26), TORSO], f) + P("M124 214 Q150 226 176 214 L180 246 Q172 254 164 246 Q157 254 150 246 Q143 254 136 246 Q128 254 120 246 Z", shade(c, .3)) + LN("M137 211 Q150 222 163 211") + LN("M150 222 L150 244", 1.4, shade(c, -.2))},
});
Object.assign(OUTERS, {
  trench: {name:"風衣", long:true, tags:["neat", "rain", "warm"], color:"#C9A877",
    draw:(f, c) => U([...sleevesL(30), "M111 231 C110 221 113 215 123 212 C131 210 139 209 140 203 L148 380 L102 380 Z", MX("M111 231 C110 221 113 215 123 212 C131 210 139 209 140 203 L148 380 L102 380 Z")], f) + cuffs(30) +
      PB("M140 208 L126 236 L144 250", f, 2.2) + [258, 284].map(y => C(140, y, 3, shade(c, -.35), 1.4) + C(160, y, 3, shade(c, -.35), 1.4)).join("") + P("M108 296 L192 296 L192 308 L108 308 Z", f, 2) + P("M144 294 L156 294 L156 310 L144 310 Z", "none", 2) + LN("M156 308 Q164 330 158 346", 3)},
});
Object.assign(DRESSES, {
  shirtdress: {name:"襯衫洋裝", tags:["neat", "casual", "school"], color:"#9BD0F5",
    draw:(f, c) => U([...sleevesS(26), TORSO, "M113.5 290 L186.5 290 L196 362 Q150 370 104 362 Z"], f) + PB("M150 217 L134 206 L128 222 Z", "#fff") + LN("M150 218 L150 364", 1.6) + [234, 256, 316, 338].map(y => C(154, y, 2, shade(c, -.35), 0)).join("") +
      P("M112 288 L188 288 L188 298 L112 298 Z", shade(c, -.3), 1.8)},
  slipdress:  {name:"細肩帶長洋裝", tags:["summer", "party", "beach"], color:"#B9A3E8",
    draw:(f, c) => LN("M126 234 L128 210", 2.4) + LN("M174 234 L172 210", 2.4) + P("M113 234 Q150 244 187 234 L188 290 Q200 360 204 414 Q150 424 96 414 Q100 360 112 290 Z", f) + LN("M116 238 Q150 248 184 238", 1.4, shade(c, .35))},
});
Object.assign(BOTTOMS, {
  culottes: {name:"寬褲裙", tags:["casual", "summer", "neat"], color:"#F6E7C8",
    draw:(f, c) => P("M112.5 290 L187.5 290 L200 370 L154 370 L150 332 L146 370 L100 370 Z", f) + LN("M113 297 L187 297", 1.6) + LN("M128 300 L120 366 M172 300 L180 366", 1.2, shade(c, -.2))},
  mermaid:  {name:"魚尾裙", tags:["party", "formal", "fancy"], color:"#2C3E70",
    draw:(f, c) => P("M112.5 290 L187.5 290 L182 384 Q200 408 212 432 Q150 444 88 432 Q100 408 118 384 Z", f) + LN("M118 384 Q150 392 182 384", 1.6, shade(c, .3)) + LN("M113 297 L187 297", 1.6)},
});

// ---------- 背景第三批 ----------
Object.assign(BGS, {
  aquarium: {name:"水族館", tags:["summer", "casual", "animal"], draw:() => `<rect width="300" height="470" fill="#2B5C96"/><rect width="300" height="200" fill="#3B78B8"/><rect y="400" width="300" height="70" fill="#E8D3A2"/>` + LN("M0 400 L300 400", 2.4) +
    [[24, 400], [40, 400], [262, 400], [278, 400]].map(([x, y], i) => LN(`M${x} ${y} Q${x - 10} ${y - 40} ${x} ${y - 80} Q${x + 10} ${y - 120} ${x} ${y - 150 + i * 10}`, 7, "#4FA36B")).join("") +
    [[46, 110, "#F59A4A"], [252, 190, "#F6D65A"], [60, 290, "#F7A8C4"], [244, 70, "#9BD0F5"]].map(([x, y, c], i) => { const d = i % 2 ? -1 : 1;
      return P(`M${x - 16 * d} ${y} Q${x} ${y - 12} ${x + 14 * d} ${y} Q${x} ${y + 12} ${x - 16 * d} ${y} Z M${x + 14 * d} ${y} L${x + 26 * d} ${y - 9} L${x + 26 * d} ${y + 9} Z`, c, 2) + C(x - 8 * d, y - 2, 1.8, INK, 0); }).join("") +
    [[30, 60, 5], [36, 40, 3], [270, 140, 6], [262, 116, 3.5], [276, 250, 4]].map(([x, y, r]) => C(x, y, r, "rgba(255,255,255,.35)", 1.4, `stroke="#fff"`)).join("")},
  garden:   {name:"花園", tags:["casual", "summer", "animal"], draw:() => `<rect width="300" height="470" fill="#CDEBFA"/><rect y="330" width="300" height="140" fill="#9ED37A"/>` + LN("M0 330 L300 330", 2.4) +
    Array.from({length:11}, (_, i) => P(`M${i * 28 + 2} 330 L${i * 28 + 2} 268 L${i * 28 + 12} 256 L${i * 28 + 22} 268 L${i * 28 + 22} 330 Z`, "#FFFFFF", 2)).join("") + `<rect x="0" y="282" width="300" height="10" fill="#fff" stroke="${INK}" stroke-width="2"/>` +
    [[22, 360, "#E8679A"], [58, 400, "#F6D65A"], [36, 440, "#B9A3E8"], [262, 370, "#F59A4A"], [240, 420, "#E8679A"], [278, 446, "#F6D65A"]].map(([x, y, c]) =>
      LN(`M${x} ${y} L${x} ${y + 22}`, 2, "#4F8F45") + [0, 72, 144, 216, 288].map(a => C(x + Math.cos(a * Math.PI / 180) * 6, y + Math.sin(a * Math.PI / 180) * 6, 5, c, 1.4)).join("") + C(x, y, 3.5, "#F6D65A", 1.2)).join("") +
    C(254, 56, 22, "#FFE98A", 2.4)},
  camping:  {name:"星空露營", tags:["winter", "casual", "warm"], draw:() => `<rect width="300" height="470" fill="#23305A"/><rect y="350" width="300" height="120" fill="#3E6B4A"/>` + LN("M0 350 L300 350", 2.4) +
    [[30, 40], [80, 90], [120, 30], [200, 60], [270, 30], [250, 120], [40, 170], [280, 200], [160, 20]].map(([x, y], i) => star(x, y, i % 3 ? 3 : 5, "#FFE98A", 0)).join("") +
    `<path d="M248 70 a24 24 0 1 0 22 30 a19 19 0 1 1 -22 -30 Z" fill="#FFE98A"/>` +
    P("M196 350 L248 262 L300 350 Z", "#F59A4A", 2.4) + P("M248 262 L236 350 L260 350 Z", "#B8643A", 2) +
    P("M20 350 L44 350 L32 330 Z", "#C98A4B", 2) + P("M26 340 Q32 316 38 340 Z", "#F6D65A", 1.6) + P("M28 340 Q32 326 36 340 Z", "#F59A4A", 0)},
  birthday: {name:"生日派對", tags:["party", "fancy"], draw:() => `<rect width="300" height="470" fill="#FBE3EC"/><rect y="390" width="300" height="80" fill="#E7C9A8"/>` + LN("M0 390 L300 390", 2.4) +
    LN("M0 30 Q75 70 150 40 Q225 70 300 30", 1.6) + [[16, 40], [44, 52], [72, 58], [100, 56], [128, 48], [172, 48], [200, 56], [228, 58], [256, 52], [284, 40]].map(([x, y], i) => P(`M${x - 10} ${y - 4} L${x + 10} ${y - 4} L${x} ${y + 16} Z`, ["#E8679A", "#F6D65A", "#4C8FE0", "#4FA36B", "#B9A3E8"][i % 5], 1.6)).join("") +
    P("M216 330 L290 330 L290 390 L216 390 Z", "#fff", 2.4) + P("M226 300 L280 300 L280 330 L226 330 Z", "#F7A8C4", 2.4) + LN("M226 312 Q240 318 253 312 Q266 318 280 312", 2, "#fff") +
    [238, 253, 268].map(x => `<rect x="${x - 2}" y="284" width="4" height="16" fill="#9BD0F5" stroke="${INK}" stroke-width="1.2"/>` + P(`M${x} 274 Q${x + 4} 280 ${x} 284 Q${x - 4} 280 ${x} 274 Z`, "#F59A4A", 0)).join("") +
    [[30, 150, "#E8679A"], [56, 120, "#F6D65A"], [40, 196, "#4C8FE0"]].map(([x, y, c]) => LN(`M${x} ${y + 26} Q${x + 6} ${y + 80} ${x + 10} ${y + 160}`, 1.4) + E(x, y, 20, 24, c) + E(x - 6, y - 8, 4, 7, "rgba(255,255,255,.6)", 0)).join("") +
    TXT(150, 108, "HAPPY BIRTHDAY", 18, "#E8679A")},
});

// ---------- 萬聖節、聖誕節小物 ----------
Object.assign(TOPS, {
  skeleton: {name:"骷髏 T 恤", tags:["halloween", "funny", "party"], color:"#2E2B2B",
    draw:(f, c) => U([...sleevesS(26), TORSO], f) + LN("M137 211 Q150 222 163 211", 2, "#fff") + LN("M150 222 L150 296", 4, "#fff") +
      [236, 250, 264, 278].map((y, i) => LN(`M${128 + i * 2} ${y} Q150 ${y - 6} ${172 - i * 2} ${y}`, 3, "#fff")).join("") + E(150, 296, 10, 5, "#fff", 0)},
});
Object.assign(HATS, {
  horns: {name:"小惡魔角", tags:["halloween", "party", "funny"], color:"#D9414E",
    draw:(f, c) => LN("M94 104 Q150 48 206 104", 6) + LN("M94 104 Q150 48 206 104", 3.4, "#2E2B2B") + PB("M112 76 Q102 52 112 34 Q114 54 130 66 Z", f)},
  reindeer: {name:"麋鹿髮箍", tags:["xmas", "party", "funny"], color:"#8A5A3C",
    draw:(f, c) => LN("M94 104 Q150 48 206 104", 6) + LN("M94 104 Q150 48 206 104", 3.4, "#D9414E") + PB("M114 74 Q104 50 96 38 M106 58 Q96 56 90 50 M110 52 Q116 40 112 30", "none", 6) + PB("M114 74 Q104 50 96 38 M106 58 Q96 56 90 50 M110 52 Q116 40 112 30", "none", 3.4, `stroke="${c}"`) + C(180, 62, 6, "#D9414E", 2) + C(178, 60, 1.8, "#fff", 0)},
});
// 寵物的嘴巴（貓咪、狗狗、兔子、小熊、貓熊、狐狸用；倉鼠、小豬、企鵝、小鴨、無尾熊是自己的嘴）
const PET_MOUTHS = {w:{name:"ω 嘴"}, open:{name:"開心張嘴"}, tongue:{name:"吐舌頭"}, oh:{name:"驚訝"}, pout:{name:"嘟嘴"}, fang:{name:"小虎牙"}};
const petMouth = id => {
  const stem = LN("M150 161 L150 165", 2), w = LN("M150 161 L150 166 M141 166 Q145.5 171 150 166 Q154.5 171 159 166", 2);
  if(id === "open") return stem + P("M140 166 Q150 163 160 166 Q158 182 150 182 Q142 182 140 166 Z", "#C94A5E", 2) + E(150, 177, 5, 3, "#F07F98", 0);
  if(id === "tongue") return P("M145 168 Q145 181 150 181 Q155 181 155 168 Z", "#F07F98", 1.8) + LN("M150 170 L150 177", 1, "#C94A5E") + w;
  if(id === "oh") return stem + E(150, 172, 4.5, 5.5, "#C94A5E", 2);
  if(id === "pout") return stem + LN("M147 166 Q154 168 149 171 Q155 174 148 177", 2);
  if(id === "fang") return w + P("M142 167.5 L144.5 173 L147 168.5 Z", "#fff", 1.2);
  return w;
};

// ---------- 奇幻小物：翅膀（背在背後）、光環、花冠 ----------
const WING = (cx, cy, rx, ry, a, f, extra = "") => `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" transform="rotate(${a} ${cx} ${cy})" fill="${f}" stroke="${INK}" stroke-width="2.4" ${extra}/>`;
Object.assign(BAGS, {
  fairy: {name:"精靈翅膀", tags:["party", "fancy", "summer"], color:"#B9E4F5",
    back:(f, c) => [1, -1].map(o => WING(150 - o * 44, 214, 40, 22, o * 30, f, `opacity=".85"`) + WING(150 - o * 36, 262, 26, 14, o * -28, f, `opacity=".85"`)).join("") +
      [1, -1].map(o => LN(`M${150 - o * 20} 230 Q${150 - o * 50} 214 ${150 - o * 74} 200 M${150 - o * 20} 246 Q${150 - o * 38} 258 ${150 - o * 54} 268`, 1.4, "#fff")).join(""),
    draw:() => ""},
  angel: {name:"天使翅膀", tags:["party", "fancy", "xmas"], color:"#FFFFFF",
    back:(f, c) => [1, -1].map(o => { const d = "M134 232 Q100 190 64 196 Q48 200 56 214 Q44 222 56 232 Q46 244 62 250 Q56 262 74 264 Q92 268 132 252 Z";
      return P(o > 0 ? d : MX(d), f) + LN(o > 0 ? "M62 214 Q90 214 118 228 M62 232 Q92 234 122 240 M74 250 Q98 252 124 248" : MX("M62 214 Q90 214 118 228 M62 232 Q92 234 122 240 M74 250 Q98 252 124 248"), 1.4, shade(c, -.2)); }).join(""),
    draw:() => ""},
  batwing: {name:"蝙蝠翅膀", tags:["halloween", "party"], color:"#2E2B2B",
    back:(f, c) => [1, -1].map(o => { const d = "M132 236 Q96 196 52 206 Q62 216 58 230 Q72 228 76 242 Q90 236 96 252 Q110 242 132 252 Z"; return P(o > 0 ? d : MX(d), f); }).join(""),
    draw:() => ""},
});
Object.assign(HATS, {
  halo:   {name:"天使光環", tags:["party", "fancy", "xmas"], color:"#F6D65A",
    draw:(f, c) => `<ellipse cx="150" cy="36" rx="38" ry="10" fill="none" stroke="${INK}" stroke-width="9"/><ellipse cx="150" cy="36" rx="38" ry="10" fill="none" stroke="${c}" stroke-width="5.5"/>` + LN("M124 32 Q134 29 144 28", 1.6, "#fff")},
  flowers:{name:"花冠", tags:["summer", "fancy", "party", "festival"], color:"#F7A8C4",
    draw:(f, c) => LN("M92 100 Q150 64 208 100", 4, "#4F8F45") + [[96, 96], [112, 84], [130, 76], [150, 73], [170, 76], [188, 84], [204, 96]].map(([x, y], i) => { const col = i % 2 ? "#FFFFFF" : c;
      return [0, 72, 144, 216, 288].map(a => C(x + Math.cos(a * Math.PI / 180) * 5.5, y + Math.sin(a * Math.PI / 180) * 5.5, 5, col, 1.6)).join("") + C(x, y, 3, "#F6D65A", 1.2); }).join("") +
      [[104, 92], [178, 80]].map(([x, y]) => E(x, y, 6, 3, "#5FB36B", 1.4, `transform="rotate(-30 ${x} ${y})"`)).join("")},
});

// ---------- 寵物角色：頭的位置和人一樣，帽子、眼鏡、項鍊都能直接戴 ----------
ROLES.pet = {name:"寵物"};
const SPECIES = {
  cat:     {name:"貓咪", fur:"#F6A64A"},
  dog:     {name:"狗狗", fur:"#C98A4B", pats:["plain", "spots", "tuxedo"]},
  bunny:   {name:"兔子", fur:"#FFFFFF", pats:["plain", "spots", "tuxedo"]},
  bear:    {name:"小熊", fur:"#C98A4B", pats:["plain", "tuxedo"]},
  fox:     {name:"狐狸", fur:"#F6A64A", pats:["plain"]},
  panda:   {name:"貓熊", fur:"#FFFFFF", pats:["plain"]},
  hamster: {name:"倉鼠", fur:"#E8B57A", pats:["plain", "spots", "tuxedo"]},
  pig:     {name:"小豬", fur:"#F7A8C4", pats:["plain", "spots"]},
  penguin: {name:"企鵝", fur:"#2E2B2B", pats:["plain"]},
  koala:   {name:"無尾熊", fur:"#9AA0A8", pats:["plain"]},
  duck:    {name:"小鴨", fur:"#F6D65A", pats:["plain"]},
  frog:    {name:"青蛙", fur:"#7BC86C", pats:["plain", "spots"]},
};
const FUR_PAL = ["#F6A64A", "#FFFFFF", "#2E2B2B", "#C98A4B", "#9AA0A8", "#F6E7C8", "#E8B57A", "#B9A3E8", "#F7A8C4"];
const FUR_PATS = {plain:{name:"素色"}, tabby:{name:"虎斑"}, spots:{name:"斑點"}, tuxedo:{name:"白肚子"}, calico:{name:"三花"}};
const petPats = L => (SPECIES[L.species] || SPECIES.cat).pats || Object.keys(FUR_PATS);   // 這個種類會有的花色（虎斑、三花只有貓咪）
const PET_BODY = "M120 180 C100 204 88 246 90 280 C92 308 118 320 150 320 C182 320 208 308 210 280 C212 246 200 204 180 180 Z";
const PET_FIT = "translate(150 434) scale(1.1) translate(-150 -322)";   // 整隻寵物（含帽子、眼鏡）往下移到地上、放大一點
const petWearFit = shp => `translate(150 186) scale(${shp.wx || 1.3} .8) translate(-150 -204)`;   // 衣服原本照長身體畫的，縮到圓身體上（胖的種類放寬一點，邊邊再裁到身體裡）
const PET_HEAD = "M82 134 C82 92 112 72 150 72 C188 72 218 92 218 134 C218 172 190 196 150 196 C110 196 82 172 82 134 Z";
// 寵物的衣服（穿在身體上）
const PETWEAR = {
  sweater:  {name:"毛衣", tags:["warm", "winter", "casual"], sleeves:true, color:"#D9414E",
    draw:(f, c) => P("M106 206 C98 246 96 292 98 336 Q150 352 202 336 C204 292 202 246 194 206 Q150 220 106 206 Z", f) + LN("M100 326 Q150 342 200 326", 3, shade(c, -.2)) + LN("M110 214 Q150 228 190 214", 4, shade(c, -.2)) + [250, 280].map(y => LN(`M112 ${y} Q150 ${y + 8} 188 ${y}`, 1.6, shade(c, .35), `stroke-dasharray="4 4"`)).join("")},
  hoodie:   {name:"帽 T", tags:["casual", "warm", "sport"], sleeves:true, color:"#B9A3E8",
    draw:(f, c) => P("M104 204 C96 246 94 292 97 340 Q150 356 203 340 C206 292 204 246 196 204 Q150 222 104 204 Z", f) + P("M124 290 L176 290 L180 324 L120 324 Z", shade(c, -.1), 2) + LN("M140 216 L138 250 M160 216 L162 250", 2) + C(138, 252, 2.4, "#fff", 1.4) + C(162, 252, 2.4, "#fff", 1.4)},
  tutu:     {name:"蓬蓬裙", tags:["party", "fancy"], color:"#F7A8C4",
    // 上半身貼著身體；紗裙在腰上蓬出去（over：不裁），前腳從裙子下面伸出來
    draw:(f, c) => P("M40 200 L260 200 L260 286 Q150 298 40 286 Z", f) + P("M150 228 L138 220 L138 236 Z M150 228 L162 220 L162 236 Z", "#fff", 1.8) + C(150, 228, 3, "#fff", 1.6),
    over:(f, c) => P("M84 286 Q82 264 108 256 L192 256 Q218 264 216 286 Q202 298 188 290 Q174 302 160 292 Q150 302 140 292 Q126 302 112 290 Q98 298 84 286 Z", shade(c, .35)) + LN("M110 258 Q150 266 190 258", 2.2, shade(c, -.15))},
  raincoat: {name:"雨衣", tags:["rain"], sleeves:true, color:"#F6D65A",
    draw:(f, c) => P("M104 202 C94 250 90 310 92 372 Q150 386 208 372 C210 310 206 250 196 202 Q150 218 104 202 Z", f) + LN("M150 214 L150 376", 2) + [244, 284, 324].map(y => C(158, y, 3, shade(c, -.3), 1.4)).join("")},
  bandana:  {name:"領巾", tags:["casual", "summer", "snack"], color:"#4C8FE0",
    draw:(f, c) => P("M104 200 Q150 216 196 200 L150 262 Z", f) + [[130, 214], [168, 214], [150, 236]].map(([x, y]) => C(x, y, 3, "#fff", 0)).join("")},
  hero:     {name:"超人披風", tags:["party", "sport"], color:"#D9414E",
    back:(f, c) => P("M110 196 Q72 300 70 380 Q150 394 230 380 Q228 300 190 196 Z", f),
    draw:(f, c) => P("M112 198 Q150 214 188 198 L184 210 Q150 226 116 210 Z", f, 2) + C(150, 214, 6, "#F6D65A", 1.8)},
  bell:     {name:"鈴鐺項圈", tags:["casual", "festival", "party"], color:"#D9414E",
    draw:(f, c) => LN("M108 200 Q150 218 192 200", 9) + LN("M108 200 Q150 218 192 200", 6, f) + E(150, 222, 7, 8, "#F6D65A", 1.8) + LN("M145 224 L155 224", 1.4) + C(150, 227, 1.4, INK, 0)},
  bee:      {name:"蜜蜂裝", tags:["party", "funny", "summer"], sleeves:true, color:"#F6D65A",
    back:(f, c) => [[-1, 1], [1, 1]].map(([o]) => `<ellipse cx="${150 + o * 44}" cy="250" rx="28" ry="17" transform="rotate(${o * -30} ${150 + o * 44} 250)" fill="rgba(200,235,255,.85)" stroke="${INK}" stroke-width="2"/>`).join(""),
    draw:(f, c) => P("M106 206 C98 246 96 292 98 336 Q150 352 202 336 C204 292 202 246 194 206 Q150 220 106 206 Z", f) + [252, 298].map(y => LN(`M106 ${y} Q150 ${y + 12} 194 ${y}`, 14, "#2E2B2B", `stroke-linecap="butt"`)).join("") + LN("M100 326 Q150 342 200 326", 3, shade(c, -.25))},
  sailor:   {name:"水手服", tags:["school", "neat", "summer"], sleeves:true, color:"#FFFFFF",
    draw:(f, c) => P("M106 206 C98 246 96 292 98 336 Q150 352 202 336 C204 292 202 246 194 206 Q150 220 106 206 Z", f) + P("M108 204 Q150 220 192 204 L196 230 L150 262 L104 230 Z", "#2C3E70") + LN("M110 226 L150 254 L190 226", 1.6, "#fff") +
      P("M150 260 L136 276 L144 280 L150 268 L156 280 L164 276 Z", "#D9414E", 1.8)},
  pajama:   {name:"睡衣", tags:["casual", "warm"], sleeves:true, color:"#9BD0F5",
    draw:(f, c) => P("M104 204 C96 246 94 292 97 340 Q150 356 203 340 C206 292 204 246 196 204 Q150 222 104 204 Z", f) + PB("M108 206 Q128 220 150 226 L136 236 Z", "#fff", 1.8) + LN("M150 226 L150 346", 1.8) +
      [250, 282, 314].map(y => C(150, y, 2.6, "#fff", 1.2)).join("") + [[124, 262], [178, 300], [126, 322], [176, 250]].map(([x, y]) => star(x, y, 5, "#FFE98A", 1)).join("")},
  dino:     {name:"恐龍裝", tags:["funny", "party", "casual"], sleeves:true, color:"#5FB36B",
    back:(f, c) => PB("M120 224 L100 238 L120 252 Z M110 266 L88 281 L110 296 Z M108 308 L88 322 L108 336 Z", f, 2.2),
    draw:(f, c) => P("M104 204 C96 246 94 292 97 340 Q150 356 203 340 C206 292 204 246 196 204 Q150 222 104 204 Z", f) + E(150, 290, 34, 48, mix(c, "#FFFFFF", .55), 0) +
      [262, 286, 310].map(y => LN(`M124 ${y} Q150 ${y + 6} 176 ${y}`, 1.6, shade(c, -.25))).join("") + LN("M100 330 Q150 346 200 330", 2.4, shade(c, -.25))},
  overalls: {name:"吊帶褲", tags:["casual", "school", "snack"], color:"#5B84C4",
    draw:(f, c) => LN("M126 206 L130 262 M174 206 L170 262", 7) + LN("M126 206 L130 262 M174 206 L170 262", 4.4, f) + P("M120 256 L180 256 L182 284 L118 284 Z", f) +
      P("M98 280 L202 280 C205 300 205 320 203 340 Q150 356 97 340 C95 320 95 300 98 280 Z", f) + C(130, 262, 3, "#F6D65A", 1.4) + C(170, 262, 3, "#F6D65A", 1.4) + P("M138 262 L162 262 L161 276 L139 276 Z", f, 1.6) +
      LN("M100 288 L200 288", 1.4, "#F2C14E", `stroke-dasharray="4 3"`)},
  lei:      {name:"夏威夷花圈", tags:["summer", "beach", "party"], color:"#F7A8C4", free:true,
    draw:(f, c) => Array.from({length:7}, (_, i) => { const t = i / 6, x = 106 + t * 88, y = 204 + Math.sin(t * Math.PI) * 30, col = ["#F7A8C4", "#F6D65A", "#FFFFFF"][i % 3] === "#F7A8C4" ? c : ["#F7A8C4", "#F6D65A", "#FFFFFF"][i % 3];
      return [0, 72, 144, 216, 288].map(a => C(x + Math.cos(a * Math.PI / 180) * 8, y + Math.sin(a * Math.PI / 180) * 8, 7, col, 1.8)).join("") + C(x, y, 4, "#F6A64A", 1.4); }).join("")},
  pumpkin:  {name:"南瓜裝", tags:["halloween", "party", "funny"], color:"#F59A4A",
    draw:(f, c) => P("M96 206 C86 246 86 300 98 340 Q150 356 202 340 C214 300 214 246 204 206 Q150 220 96 206 Z", f) + LN("M124 214 Q112 280 124 346 M176 214 Q188 280 176 346 M150 220 L150 350", 1.6, shade(c, -.25)) +
      P("M122 254 L134 238 L142 256 Z M178 254 L166 238 L158 256 Z", "#3A2A20", 0) + P("M116 286 L128 298 L139 288 L150 300 L161 288 L172 298 L184 286 Q150 322 116 286 Z", "#3A2A20", 0)},
  devil:    {name:"小惡魔", tags:["halloween", "party"], color:"#D9414E",
    back:(f, c) => [1, -1].map(o => P(o > 0 ? "M110 230 Q70 196 48 224 Q64 228 62 244 Q78 240 80 258 Q94 246 110 256 Z" : MX("M110 230 Q70 196 48 224 Q64 228 62 244 Q78 240 80 258 Q94 246 110 256 Z"), "#2E2B2B", 2.2)).join(""),
    draw:(f, c) => P("M104 204 C96 246 94 292 97 340 Q150 356 203 340 C206 292 204 246 196 204 Q150 222 104 204 Z", f) + P("M108 204 Q150 222 192 204 L188 222 Q170 232 160 222 Q150 234 140 222 Q130 232 112 222 Z", "#2E2B2B", 2) +
      LN("M190 320 Q222 330 214 296", 2.6) + P("M214 296 L206 286 L222 284 Z", "#2E2B2B", 1.6)},
  ghost:    {name:"小幽靈", tags:["halloween", "funny"], color:"#FFFFFF",
    draw:(f, c) => P("M100 204 C90 260 88 320 92 352 Q104 342 116 354 Q128 342 140 354 Q152 342 164 354 Q176 342 188 354 Q200 342 208 352 C212 320 210 260 200 204 Q150 222 100 204 Z", f) +
      E(134, 262, 6, 9, INK, 0) + E(166, 262, 6, 9, INK, 0) + E(150, 292, 6, 8, INK, 0) + C(132, 258, 2, "#fff", 0) + C(164, 258, 2, "#fff", 0)},
  xmasknit: {name:"聖誕毛衣", tags:["xmas", "winter", "warm"], color:"#D9414E",
    draw:(f, c) => P("M106 206 C98 246 96 292 98 336 Q150 352 202 336 C204 292 202 246 194 206 Q150 220 106 206 Z", f) + P("M100 262 L200 262 L200 290 L100 290 Z", "#fff", 0) +
      LN("M100 276 l8 -8 l8 8 l8 -8 l8 8 l8 -8 l8 8 l8 -8 l8 8 l8 -8 l8 8 l8 -8 l8 8", 2, "#4FA36B") + [[130, 236], [170, 236], [150, 316]].map(([x, y]) => P(`M${x} ${y - 12} L${x + 9} ${y + 6} L${x - 9} ${y + 6} Z`, "#4FA36B", 1.4) + star(x, y - 13, 3.5, "#F6D65A", 0)).join("")},
  kimono:   {name:"浴衣", tags:["festival", "summer"], sleeves:true, color:"#9BD0F5",
    draw:(f, c) => P("M104 204 C96 250 94 300 97 352 Q150 366 203 352 C206 300 204 250 196 204 Q150 220 104 204 Z", f) + LN("M120 210 L160 300 M180 210 L150 260", 2.2) + P("M98 290 L202 290 L202 310 L98 310 Z", "#D9414E", 2.2) + [[124, 250], [176, 330], [130, 340]].map(([x, y]) => C(x, y, 4, "#fff", 0)).join("")},
};
// 寵物抱在前腳的小玩具
const PETTOYS = {
  fish:   {name:"小魚乾", tags:["snack", "casual"], color:"#6E9BD1",
    draw:(f, c) => P("M126 300 Q140 286 158 296 L172 286 L170 306 L158 302 Q140 314 126 300 Z", f) + LN("M146 292 L146 308", 1.4, shade(c, -.3)) + C(134, 298, 1.8, INK, 0)},
  bone:   {name:"骨頭", tags:["snack", "casual"], color:"#F6E7C8",
    draw:(f, c) => U(["M130 294 L170 294 L170 306 L130 306 Z", CIRC(129, 292, 6.5), CIRC(129, 308, 6.5), CIRC(171, 292, 6.5), CIRC(171, 308, 6.5)], f)},
  yarn:   {name:"毛線球", tags:["casual", "warm"], color:"#E8679A",
    draw:(f, c) => LN("M162 306 Q186 314 180 330", 2.2, f) + C(150, 296, 16, f) + LN("M138 286 Q150 300 140 310 M146 282 Q162 296 152 312 M156 282 Q168 292 164 306", 1.4, shade(c, -.3))},
  carrot: {name:"紅蘿蔔", tags:["snack", "casual"], color:"#F59A4A",
    draw:(f, c) => P("M146 288 L140 270 L150 280 L156 268 L155 288 Z", "#5FB36B", 1.8) + P("M138 290 Q150 284 162 290 L153 324 Q150 330 147 324 Z", f) + LN("M143 300 L149 300 M152 310 L157 310", 1.4, shade(c, -.3))},
  seed:   {name:"葵花籽", tags:["snack", "casual"], color:"#2E2B2B",
    draw:(f, c) => P("M150 278 Q166 292 162 308 Q150 320 138 308 Q134 292 150 278 Z", f) + LN("M150 284 L150 312 M143 290 Q141 300 144 310 M157 290 Q159 300 156 310", 1.6, "#fff")},
  ball:   {name:"小皮球", tags:["sport", "casual", "summer"], color:"#D9414E",
    draw:(f, c) => C(150, 296, 16, f) + `<path d="M134.5 292 Q150 300 165.5 292 L165 302 Q150 310 135 302 Z" fill="#fff"/>` + C(150, 296, 16, "none") + C(144, 288, 3, "rgba(255,255,255,.7)", 0)},
};
const petTail = (sp, fur) => {
  if(sp === "bunny" || sp === "bear" || sp === "panda") return "";
  if(sp === "hamster" || sp === "koala" || sp === "frog") return "";
  if(sp === "duck") return P("M200 290 L226 270 L212 302 Z", fur);
  if(sp === "penguin") return P("M198 304 L224 318 L196 320 Z", fur);
  if(sp === "pig") return LN("M214 258 q16 -2 16 -14 q0 -10 -9 -8 q-7 2 -2 9 q7 7 18 -3", 3.4);
  if(sp === "bear" || sp === "panda") return C(214, 306, 10, sp === "panda" ? "#2E2B2B" : fur);
  if(sp === "dog") return LN("M198 292 Q228 282 232 252", 13) + LN("M198 292 Q228 282 232 252", 8, fur);
  if(sp === "fox") return P("M190 312 Q250 314 252 240 Q250 214 236 204 Q240 252 214 270 Q200 280 190 286 Z", fur) + P("M236 204 Q252 214 252 240 Q244 230 236 204 Z", "#fff", 2);
  return LN("M196 312 Q244 310 238 254 Q236 236 224 230", 14) + LN("M196 312 Q244 310 238 254 Q236 236 224 230", 9, fur);
};
const petEars = (sp, fur) => {
  const pink = "#F7B6C8";
  if(sp === "dog" || sp === "penguin" || sp === "duck") return "";
  if(sp === "frog") return C(116, 92, 24, fur) + C(184, 92, 24, fur);   // 頭頂兩顆鼓鼓的眼泡（眼睛畫在下面）
  if(sp === "koala") return C(88, 100, 28, fur) + C(212, 100, 28, fur) + C(90, 102, 16, "#F3EDEA", 0) + C(210, 102, 16, "#F3EDEA", 0) + LN("M70 92 L78 96 M72 108 L80 108 M228 92 L222 96 M228 108 L220 108", 1.6, "#F3EDEA");   // 狗狗的耳朵垂在臉旁邊，畫在頭上面；企鵝沒有耳朵
  if(sp === "hamster") return C(100, 88, 17, fur) + C(200, 88, 17, fur) + C(101, 89, 9, pink, 0) + C(199, 89, 9, pink, 0);
  if(sp === "pig") return "";   // 小豬的耳朵往前垂，畫在頭上面
  if(sp === "bunny") return PB("M116 86 Q98 8 120 2 Q142 8 138 84 Z", fur) + PB("M120 76 Q110 22 121 14 Q132 22 131 76 Z", pink, 0);
  if(sp === "bear" || sp === "panda") { const e = sp === "panda" ? "#2E2B2B" : fur, inner = sp === "panda" ? "#555" : shade(fur, -.15); return C(98, 84, 20, e) + C(202, 84, 20, e) + C(98, 86, 10, inner, 0) + C(202, 86, 10, inner, 0); }
  if(sp === "fox") return PB("M90 104 L90 34 L140 78 Z", fur) + PB("M98 92 L98 52 L126 78 Z", "#fff", 0) + PB("M90 34 L102 46 L92 58 Z", "#3A2C28", 0);
  return PB("M94 100 L96 42 L138 78 Z", fur) + PB("M102 88 L104 58 L126 78 Z", pink, 0);
};
// 每個種類自己的身形：倉鼠圓滾滾、沒脖子、臉頰鼓鼓；小熊、貓熊壯壯的；小豬圓肚子、小蹄子
const PET_SHAPES = {
  hamster: {body:"M100 182 C66 208 62 290 84 314 C104 330 196 330 216 314 C238 290 234 208 200 182 Z",
            head:"M84 128 C84 92 114 76 150 76 C186 76 216 92 216 128 C230 144 232 178 210 192 C190 204 110 204 90 192 C68 178 70 144 84 128 Z", legs:"tiny", wx:1.75},
  bear:    {body:"M110 182 C84 206 76 262 80 294 C84 318 116 324 150 324 C184 324 216 318 220 294 C224 262 216 206 190 182 Z",
            head:"M80 136 C80 90 112 72 150 72 C188 72 220 90 220 136 C220 176 190 198 150 198 C110 198 80 176 80 136 Z", legs:"thick", wx:1.5},
  panda:   {body:"M110 182 C84 206 76 262 80 294 C84 318 116 324 150 324 C184 324 216 318 220 294 C224 262 216 206 190 182 Z",
            head:"M80 136 C80 90 112 72 150 72 C188 72 220 90 220 136 C220 176 190 198 150 198 C110 198 80 176 80 136 Z", legs:"thick", wx:1.5},
  pig:     {body:"M112 182 C80 204 72 266 80 298 C88 322 120 326 150 326 C180 326 212 322 220 298 C228 266 220 204 188 182 Z",
            head:"M80 138 C80 94 112 74 150 74 C188 74 220 94 220 138 C220 178 190 198 150 198 C110 198 80 178 80 138 Z", legs:"hoof", wx:1.5},
};
PET_SHAPES.penguin = {legs:"none"};   // 企鵝只有兩邊的翅膀，中間不畫前腳
PET_SHAPES.duck = {legs:"none", head:"M84 132 C84 92 114 74 150 74 C186 74 216 92 216 132 C216 172 188 194 150 194 C112 194 84 172 84 132 Z"};
PET_SHAPES.koala = Object.assign({}, PET_SHAPES.bear);
const petShape = L => Object.assign({body:PET_BODY, head:PET_HEAD, legs:"std"}, PET_SHAPES[L.species]);
// 畫寵物角色（drawLook 裡呼叫；衣服的填色、明暗用 drawLook 傳進來的 it）
function drawPetStar(L, it){
  const sp = SPECIES[L.species] ? L.species : "cat", fur = L.fur || "#F6A64A", pat = petPats({species:sp}).includes(L.furPat) ? L.furPat : "plain";
  const light = mix(fur, "#FFFFFF", .6), dark = shade(fur, lum(fur) < .25 ? .3 : -.28), pink = "#F7B6C8";
  const body = sp === "panda" ? "#fff" : fur, headC = sp === "panda" ? "#fff" : fur;
  const shp = petShape({species:sp}), legs = shp.legs;
  let s = "";
  s += it.back();
  s += petTail(sp, body);
  s += petEars(sp, fur);
  // 身體：圓圓的坐姿，花紋都裁在身體裡面
  const feetC = sp === "penguin" || sp === "duck" ? "#F59A4A" : sp === "panda" ? "#2E2B2B" : pat === "tuxedo" ? "#fff" : body;
  const legC = sp === "panda" ? "#2E2B2B" : pat === "tuxedo" ? "#fff" : body;
  // 後腳掌：坐著時從身體後面兩邊露出來（兔子的大腳、倉鼠的小粉紅腳另外畫在前面）
  if(legs !== "tiny") s += sp === "bunny" ? E(102, 316, 30, 11, feetC, 2.6) + E(198, 316, 30, 11, feetC, 2.6) : E(106, 316, 24, 11, feetC, 2.6) + E(194, 316, 24, 11, feetC, 2.6);
  s += P(shp.body, body, 2.8);
  let pt = "";
  if(sp === "panda") pt += `<path d="M60 170 L240 170 L240 232 Q150 246 60 232 Z" fill="#2E2B2B"/>`;
  else if(sp === "penguin") pt += E(150, 266, 46, 62, "#fff", 0);
  else if(sp === "hamster") pt += E(150, 272, 46, 56, mix(fur, "#FFFFFF", .75), 0);
  else if(sp === "koala") pt += E(150, 266, 36, 50, "#F3EDEA", 0);
  else if(sp === "frog") pt += E(150, 268, 40, 50, mix(fur, "#FFF6C8", .65), 0);
  else if(pat === "tuxedo" || sp === "dog" || sp === "fox") pt += E(150, 262, 32, 50, pat === "tuxedo" || sp === "fox" ? "#fff" : light, 0);
  if(pat === "tabby") pt += [232, 256, 280].map(y => LN(`M88 ${y} Q100 ${y + 4} 110 ${y} M212 ${y} Q200 ${y + 4} 190 ${y}`, 3, dark)).join("");
  if(pat === "spots") pt += [[118, 236, 11], [182, 262, 9], [122, 292, 8], [176, 300, 7]].map(([x, y, r]) => E(x, y, r, r * .8, dark, 0)).join("");
  if(pat === "calico") pt += E(114, 250, 18, 22, "#F6A64A", 0) + E(186, 286, 16, 18, "#2E2B2B", 0);
  // 前腳：短短的，從肚子下面（或衣服下襬）冒出來，上面淡淡接進身體；腳掌併在一起
  const LW = {std:26, thick:32, hoof:24}[legs], lh = LW / 2;
  const legPts = LW ? [1, -1].map(o => { const ex = 150 - o * lh; return [[ex - o * 3, 280], [ex, 310]]; }) : [];
  // 腳的顏色塊清楚畫出來，外框線從上面淡淡浮出來；衣服會蓋住上面一點，腳掌畫在衣服前面
  if(LW) pt += legPts.map(pts => `<path d="${tube(pts, LW)}" fill="${legC}"/>`).join("") +
    it.fade(legPts.map(([a, e], r) => { const o = r ? -1 : 1; return LN(`M${a[0] - o * lh} ${a[1]} L${e[0] - o * lh} 312`, 2.4, INK); }).join("") + LN("M150 284 L150 312", 2.4, INK), 280, 298);
  s += it.inBody(pt) + it.bodyShade();
  s += it.wear() + it.toy(legs === "tiny" ? 238 : 290, legs === "tiny" ? .9 : 1.35);
  if(sp === "penguin") s += PB("M108 202 Q80 236 78 282 Q94 286 108 256 Z", body);
  else if(sp === "duck") s += PB("M110 224 Q78 240 82 280 Q96 290 112 268 Q106 254 110 224 Z", body) + PB("M88 262 Q94 270 100 266 M90 272 Q96 278 104 272", "none", 1.6, `stroke="${shade(fur, -.3)}"`);
  else if(legs === "tiny"){
    // 倉鼠：小小的粉紅手手捧在胸前，小腳丫露在前面
    s += [136, 164].map(x => E(x, 240, 9, 7, pink, 2) + LN(`M${x - 3} 235 L${x - 3} 239 M${x + 3} 235 L${x + 3} 239`, 1.2, INK)).join("");
    s += [120, 180].map(x => E(x, 322, 14, 7, pink, 2.2) + LN(`M${x - 5} 318 L${x - 5} 322 M${x} 317 L${x} 322 M${x + 5} 318 L${x + 5} 322`, 1.2, INK)).join("");
  }else{
    s += legPts.map(pts => {
      const x = pts[1][0], cap = `M${x - lh} 308 Q${x - lh} 323 ${x} 323 Q${x + lh} 323 ${x + lh} 308`;
      if(legs === "hoof") return `<path d="${cap} Z" fill="${legC}"/>` + `<path d="M${x - lh + .5} 314 Q${x - lh} 323 ${x} 323 Q${x + lh} 323 ${x + lh - .5} 314 Z" fill="${shade(fur, -.4)}"/>` + LN(cap, 2.4, INK) + LN(`M${x} 315 L${x} 323`, 1.8, INK);
      return `<path d="${cap} Z" fill="${legC}"/>` + LN(cap, 2.4, INK) +
        (legs === "thick" ? E(x, 315, 7, 4, sp === "panda" ? "#555" : mix(fur, "#5A3A2A", .45), 0) : LN(`M${x - 4.5} 316 L${x - 4.5} 321 M${x + 4.5} 316 L${x + 4.5} 321`, 1.6, sp === "panda" ? "#888" : INK));
    }).join("");
  }
  // 頭
  s += P(shp.head, headC, 2.8);
  if(pat === "tuxedo") s += it.inHead(`<path d="M150 120 Q120 150 116 186 Q150 200 184 186 Q180 150 150 120 Z" fill="#fff"/>`);
  if(pat === "tabby") s += LN("M140 82 L142 100 M150 78 L150 100 M160 82 L158 100", 3, dark) + LN("M86 130 L100 133 M86 144 L100 143 M214 130 L200 133 M214 144 L200 143", 3, dark);
  if(pat === "calico") s += `<path d="M150 74 C120 74 96 86 88 110 Q110 112 128 96 Q140 86 150 74 Z" fill="#F6A64A"/><path d="M150 74 C178 74 204 86 212 112 Q190 110 176 96 Q164 84 150 74 Z" fill="#2E2B2B"/>`;
  if(pat === "spots") s += E(110, 104, 12, 9, dark, 0) + E(194, 166, 8, 6, dark, 0);
  // 倉鼠：下半張臉和鼓鼓的臉頰是白色的，額頭中間一條淡淡的深色
  if(sp === "hamster") s += it.inHead(`<path d="M60 150 C84 134 120 132 150 146 C180 132 216 134 240 150 L240 220 L60 220 Z" fill="${mix(fur, "#FFFFFF", .78)}"/>` + `<path d="M144 78 Q150 104 156 78 Z" fill="${dark}" opacity=".5"/>`);
  if(sp === "penguin") s += `<path d="M150 112 C132 92 94 100 96 144 C98 178 122 192 150 192 C178 192 202 178 204 144 C206 100 168 92 150 112 Z" fill="#fff"/>`;
  if(sp === "fox") s += `<path d="M84 146 Q118 138 150 168 Q182 138 216 146 Q206 186 150 195 Q94 186 84 146 Z" fill="#fff"/>`;
  if(sp === "panda") s += [-1, 1].map(o => `<ellipse cx="${150 + o * 22}" cy="140" rx="15" ry="19" transform="rotate(${o * -25} ${150 + o * 22} 140)" fill="#2E2B2B"/>`).join("");
  s += it.headShade();
  if(sp === "dog") s += PB("M90 96 Q62 100 68 164 Q82 176 96 154 Q102 124 108 100 Z", dark);
  if(sp === "duck") s += P("M146 78 Q140 58 150 52 Q148 64 152 76 Q158 60 168 58 Q160 68 156 80 Z", fur, 2.2);
  // 小豬：耳朵尖尖往前垂下來，蓋在額頭兩邊
  if(sp === "pig") s += PB("M100 66 Q124 62 134 84 Q122 106 98 112 Q90 90 100 66 Z", fur, 2.4) + PB("M106 76 Q122 76 126 88 Q116 100 104 102 Q100 88 106 76 Z", shade(fur, -.12), 0);
  if(L.blush) s += (sp === "hamster" ? [106, 194] : [114, 186]).map(x => E(x, 168, 14, 9, L.blush, 0, `opacity=".5"`)).join("");
  // 眼睛（跟人共用）；貓熊的黑眼圈上眼睛要亮一點
  s += EYE_X.map((x, i) => drawEye(L.eyes, x, EYE_OLD[L.eyeC] || L.eyeC, i === 1, sp === "panda" ? "#2E2B2B" : fur)).join("");
  // 鼻子和嘴巴
  if(sp === "dog" || sp === "bear" || sp === "panda") s += E(150, 164, 22, 16, sp === "bear" ? light : "#fff", 0);
  if(sp === "pig") s += E(150, 162, 19, 13, shade(fur, -.12), 2.2) + E(144, 162, 2.6, 4, INK, 0) + E(156, 162, 2.6, 4, INK, 0) + LN("M142 180 Q150 186 158 180", 2);
  else if(sp === "penguin") s += P("M138 152 Q150 145 162 152 L150 170 Z", "#F59A4A", 2) + LN("M141 155 Q150 159 159 155", 1.4);
  else if(sp === "duck") s += P("M128 160 Q128 150 150 150 Q172 150 172 160 Q172 172 150 172 Q128 172 128 160 Z", "#F59A4A", 2.2) + LN("M130 161 Q150 166 170 161", 1.6) + E(142, 155, 1.6, 1.2, INK, 0) + E(158, 155, 1.6, 1.2, INK, 0);
  else if(sp === "frog") s += E(145, 156, 1.8, 1.4, INK, 0) + E(155, 156, 1.8, 1.4, INK, 0) + LN("M122 166 Q150 186 178 166", 2.4);
  else if(sp === "koala") s += P("M140 146 Q140 138 150 138 Q160 138 160 146 L160 164 Q160 174 150 174 Q140 174 140 164 Z", "#3A2C28", 2) + E(146, 146, 3, 5, "rgba(255,255,255,.35)", 0) + LN("M142 182 Q150 187 158 182", 2);
  else if(sp === "hamster") s += E(150, 157, 4, 3, "#F07F98", 1.2) + LN("M150 160 L150 164 M143 163 Q146.5 168 150 164 Q153.5 168 157 163", 1.8) + P("M147 166 L153 166 L153 172 L147 172 Z", "#fff", 1.4) + LN("M150 166 L150 172", 1);
  else {
    s += sp === "cat" || sp === "bunny" ? P("M145 156 L155 156 L150 162 Z", "#F07F98", 1.4) : E(150, 156, 6.5, 4.5, INK, 0) + E(148, 154.5, 2, 1.2, "#fff", 0);
    s += petMouth(L.petMouth);
  }
  if(sp === "cat" || sp === "fox") s += LN("M96 154 L124 158 M96 166 L124 164 M204 154 L176 158 M204 166 L176 164", 1.6, mix(fur, INK, .55), `opacity=".7"`);
  if(sp === "hamster") s += LN("M112 156 L132 159 M112 164 L132 163 M188 156 L168 159 M188 164 L168 163", 1.2, mix(fur, INK, .5), `opacity=".6"`);
  if(L.sticker === "heart") s += P(heartD(186, 178, 5), "#E8679A", 1.4);
  else if(L.sticker === "star") s += star(186, 178, 6, "#F6D65A", 1.4);
  return s;
}

// ---------- 橫式背景（合照用，600 寬）：底色、地板拉滿整片，中間放原本的背景，兩邊再補上各自的佈置 ----------
let W2 = 600;   // 現在要畫多寬（bgWide 會暫時改掉）
const wall = (col, floorY, floorCol) => `<rect width="${W2}" height="470" fill="${col}"/>` + (floorY ? `<rect y="${floorY}" width="${W2}" height="${470 - floorY}" fill="${floorCol}"/>` + LN(`M0 ${floorY} L${W2} ${floorY}`, 2.4) : "");
const vgrad = (id, a, b) => `<defs><linearGradient id="${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${a}"/><stop offset="1" stop-color="${b}"/></linearGradient></defs><rect width="${W2}" height="470" fill="url(#${id})"/>`;
const winBox = (x, y, w, h, glass = "#BFE6FA") => P(`M${x} ${y} L${x + w} ${y} L${x + w} ${y + h} L${x} ${y + h} Z`, glass, 2.4) + LN(`M${x + w / 2} ${y} L${x + w / 2} ${y + h} M${x} ${y + h / 2} L${x + w} ${y + h / 2}`, 2.2);
const tree = (x, y, r, col = "#4FAE5E") => P(`M${x - 5} ${y + r * 2.2} L${x + 5} ${y + r * 2.2} L${x + 5} ${y + r * .6} L${x - 5} ${y + r * .6} Z`, "#8A5A3C", 2.2) + C(x, y, r, col, 2.4) + C(x - r * .6, y + r * .45, r * .55, col, 2.4) + C(x + r * .6, y + r * .45, r * .55, col, 2.4);
const pine = (x, y, h, col = "#3E7A5A", snow = true) => P(`M${x} ${y - h} L${x + h / 3} ${y} L${x - h / 3} ${y} Z`, col, 2.4) + (snow ? P(`M${x} ${y - h} L${x + h * .13} ${y - h * .62} L${x - h * .13} ${y - h * .62} Z`, "#fff", 2) : "");
const flower = (x, y, col) => LN(`M${x} ${y} L${x} ${y + 14}`, 2, "#4F8F45") + C(x, y, 5, col, 1.6);
const lantern = (x, y) => P(`M${x - 10} ${y + 4} Q${x - 14} ${y + 20} ${x - 8} ${y + 34} L${x + 8} ${y + 34} Q${x + 14} ${y + 20} ${x + 10} ${y + 4} Z`, "#F6E7C8", 2) + LN(`M${x - 11} ${y + 19} L${x + 11} ${y + 19}`, 4, "#D9414E");
const shelf = (x, y, i) => P(`M${x} ${y} L${x + 88} ${y} L${x + 88} ${y + 96} L${x} ${y + 96} Z`, "#B9835A", 2.4) +
  Array.from({length:7}, (_, k) => { const w = 9 + (k * 7 + i * 3) % 5, h = 62 + (k * 13 + i * 5) % 22, bx = x + 6 + k * 11.4;
    return `<rect x="${bx.toFixed(1)}" y="${y + 92 - h}" width="${w}" height="${h}" fill="${["#D9414E", "#4C8FE0", "#F6D65A", "#4FA36B", "#B9A3E8", "#F59A4A", "#F7A8C4"][(k + i) % 7]}" stroke="${INK}" stroke-width="1.4"/>`; }).join("");
const building = (x, y, w) => `<rect x="${x}" y="${y}" width="${w}" height="${380 - y}" fill="#7A879C" stroke="${INK}" stroke-width="2"/>` + [0, 1, 2].map(k => `<rect x="${x + 10 + k * (w - 20) / 3}" y="${y + 16}" width="${(w - 20) / 3 - 6}" height="14" fill="#FFE9A8" opacity=".75"/>`).join("") +
  `<rect x="${x + 10}" y="${y + 46}" width="${w - 20}" height="14" fill="#FFE9A8" opacity=".45"/>`;
const stall = (x, col, txt, tcol) => P(`M${x + 4} 220 L${x + 96} 220 L${x + 100} 250 L${x} 250 Z`, col, 2.2) + [0, 1, 2, 3, 4].map(k => `<rect x="${x + 4 + k * 19}" y="221" width="9" height="28" fill="#fff" opacity=".55"/>`).join("") +
  P(`M${x + 10} 250 L${x + 90} 250 L${x + 90} 330 L${x + 10} 330 Z`, "#F6E7C8", 2) + TXT(x + 50, 296, txt, 20, tcol);
const dots = (n, w, h, y0, r, col) => Array.from({length:n}, (_, i) => C((i * 73 + 19) % w, (i * 47 + 11) % h + y0, typeof r === "number" ? r : r(i), col, 0)).join("");
const BG_WIDE = {
  room:      {base:() => wall("#FDEFE3", 380, "#E9C9A5") + Array.from({length:Math.ceil(W2 / 64) * 4}, (_, i) => C(20 + (i % Math.ceil(W2 / 64)) * 64 + (Math.floor(i / Math.ceil(W2 / 64)) % 2) * 32, 30 + Math.floor(i / Math.ceil(W2 / 64)) * 80, 3, "#F7D3C0", 0)).join(""),
              side:() => P("M486 80 L566 80 L566 150 L486 150 Z", "#fff", 3, `stroke="#C98A4B"`) + P("M496 140 L516 110 L530 126 L542 100 L556 140 Z", "#9ED37A", 0) + C(540, 98, 6, "#F6D65A", 0) +
                P("M30 300 L120 300 L120 380 L30 380 Z", "#C98A4B", 2.4) + LN("M30 340 L120 340", 2) + C(75, 320, 3, "#F6D65A", 1) + C(75, 360, 3, "#F6D65A", 1) + P("M44 300 L50 270 L66 270 L72 300 Z", "#F7A8C4", 2) + LN("M58 270 L58 252", 2) + P("M46 252 L70 252 L64 236 L52 236 Z", "#FFF4C2", 2)},
  classroom: {base:() => wall("#F3EBD9", 388, "#C99E6E"),
              side:() => winBox(26, 60, 96, 120) + winBox(478, 60, 96, 120) +
                [[40, 300], [500, 300]].map(([x, y]) => P(`M${x} ${y} L${x + 70} ${y} L${x + 70} ${y + 10} L${x} ${y + 10} Z`, "#C98A4B", 2) + LN(`M${x + 8} ${y + 10} L${x + 8} 388 M${x + 62} ${y + 10} L${x + 62} 388`, 3)).join("")},
  beach:     {hill:[360, "#F5DDA8"], base:() => vgrad("skyBW", "#7FD0F5", "#DFF5FF") + `<rect y="290" width="${W2}" height="80" fill="#3FA8DD"/>` + LN("M0 300" + Array.from({length:15}, () => " q20 -6 40 0").join(""), 2, "#fff") + `<rect y="360" width="${W2}" height="110" fill="#F5DDA8"/>`,
              side:() => E(520, 70, 30, 10, "#fff", 0) + E(546, 62, 20, 10, "#fff", 0) +
                P("M62 360 Q56 300 70 230 L80 232 Q68 300 74 360 Z", "#B8864E", 2.2) + [[-50, 10], [-40, -20], [0, -30], [40, -20], [50, 10]].map(([dx, dy]) => P(`M74 228 Q${74 + dx / 2} ${228 + dy - 14} ${74 + dx} ${232 + dy} Q${74 + dx / 2} ${228 + dy / 2} 74 232 Z`, "#4FAE5E", 2)).join("") +
                P("M500 300 Q540 260 580 300 Z", "#D9414E", 2.4) + P("M520 300 Q540 270 560 300 Z", "#fff", 0) + LN("M540 300 L540 380", 3) + P("M500 420 L560 420 L556 436 L504 436 Z", "#F6D65A", 2) + C(110, 420, 10, "#fff", 2) + LN("M102 414 L118 426", 2, "#D9414E")},
  snow:      {hill:[370, "#F4F8FF"], base:() => vgrad("skySW", "#2B3C6E", "#7E8FC4") + `<rect y="370" width="${W2}" height="100" fill="#F4F8FF"/>` + dots(52, W2, 330, 10, i => i % 3 + 1.6, "#fff"),
              side:() => pine(60, 340, 100) + pine(110, 360, 80) + pine(500, 345, 95) + pine(560, 365, 75) +
                C(80, 420, 18, "#fff", 2.4) + C(80, 392, 13, "#fff", 2.4) + C(76, 389, 1.6, INK, 0) + C(84, 389, 1.6, INK, 0) + P("M80 393 L90 396 L80 397 Z", "#F59A4A", 0)},
  market:    {base:() => wall("#2A2142", 400, "#5A4A5E") + dots(28, W2, 120, 10, 1.4, "#FFF4C2") + `<rect y="230" width="${W2}" height="170" fill="#4A3A5E"/>`,
              side:() => stall(46, "#B9A3E8", "香腸", "#8A5A3C") + stall(454, "#4FA36B", "棉花糖", "#E8679A") +
                LN("M0 70 Q75 92 150 70 M450 70 Q525 92 600 70", 1.6, "#FFF4C2") + [[40, 0], [100, 1], [490, 0], [560, 1]].map(([x, i]) => E(x, 70 + Math.sin(((x % 150) / 150) * Math.PI) * 18 + 12, 9, 12, i ? "#FFD447" : "#FF7A5C", 2)).join("")},
  park:      {hill:[330, "#9BD77E"], base:() => wall("#CDEFFF") + `<rect y="330" width="${W2}" height="140" fill="#9BD77E"/>`,
              side:() => E(80, 60, 30, 11, "#fff", 0) + E(520, 70, 34, 12, "#fff", 0) + tree(70, 240, 36) +
                P("M480 360 L570 360 L570 370 L480 370 Z", "#C98A4B", 2) + P("M480 340 L570 340 L570 350 L480 350 Z", "#C98A4B", 2) + LN("M488 370 L488 392 M562 370 L562 392 M488 350 L488 360 M562 350 L562 360", 3) +
                [[30, 420, "#F7A8C4"], [110, 440, "#B9A3E8"], [470, 430, "#F6D65A"], [580, 410, "#F7A8C4"]].map(([x, y, c]) => flower(x, y, c)).join("")},
  stage:     {full:() => `<rect width="${W2}" height="470" fill="#2B1A33"/><defs><radialGradient id="spotW" cx=".5" cy=".55" r=".5"><stop offset="0" stop-color="#FFF6D0" stop-opacity=".85"/><stop offset="1" stop-color="#FFF6D0" stop-opacity="0"/></radialGradient></defs><ellipse cx="300" cy="250" rx="280" ry="230" fill="url(#spotW)"/>` +
                P("M0 0 L80 0 Q56 200 84 470 L0 470 Z", "#B8323F") + P("M600 0 L520 0 Q544 200 516 470 L600 470 Z", "#B8323F") + P(`M0 0 L${W2} 0 L${W2} 36 Q450 58 300 40 Q150 58 0 36 Z`, "#D9414E") +
                `<rect y="410" width="${W2}" height="60" fill="#8A5A3C"/>` + LN(`M0 410 L${W2} 410`, 2.4) + [[150, 80], [300, 64], [450, 80], [200, 160], [400, 150], [110, 220], [490, 230]].map(([x, y]) => star(x, y, 6, "#FFE98A", 0)).join("")},
  rain:      {base:() => wall("#9AA6B8", 380, "#6B7487"),
              side:() => building(0, 150, 70) + building(74, 196, 72) + building(452, 176, 72) + building(528, 130, 72) + LN(`M0 380 L${W2} 380`, 2.4) +
                E(90, 440, 30, 7, "#9DB8D6", 0) + E(520, 430, 30, 7, "#9DB8D6", 0) + Array.from({length:30}, (_, i) => { const x = i % 2 ? (i * 53) % 150 : 450 + (i * 37) % 150, y = (i * 89) % 440; return LN(`M${x} ${y} L${x - 5} ${y + 16}`, 1.6, "rgba(255,255,255,.7)"); }).join("")},
  festival:  {base:() => vgrad("skyFW", "#2E2459", "#E5806B") + `<rect y="380" width="${W2}" height="90" fill="#5A3A3A"/>` + LN(`M0 380 L${W2} 380`, 2.4),
              side:() => [[60, 90, "#9BD0F5"], [110, 150, "#FFD447"], [500, 100, "#F7A8C4"], [560, 160, "#9BD0F5"]].map(([x, y, col]) => Array.from({length:12}, (_, k) => { const a = k * Math.PI / 6; return LN(`M${(x + Math.cos(a) * 8).toFixed(1)} ${(y + Math.sin(a) * 8).toFixed(1)} L${(x + Math.cos(a) * 22).toFixed(1)} ${(y + Math.sin(a) * 22).toFixed(1)}`, 2.2, col); }).join("")).join("") +
                LN("M0 200 Q75 222 150 200 M450 200 Q525 222 600 200", 1.6) + [40, 105, 495, 560].map(x => lantern(x, 200 + Math.sin(((x % 150) / 150) * Math.PI) * 18)).join("")},
  plain:     {full:c => `<rect width="${W2}" height="470" fill="${c}"/>` + Array.from({length:24}, (_, i) => star(25 + (i % 8) * 75 + (Math.floor(i / 8) % 2) * 36, 40 + Math.floor(i / 8) * 150, 5, "#fff", 0).replace("<path", `<path opacity=".5"`)).join("")},
  halloween: {base:() => wall("#2B1F45", 380, "#3A2E55"),
              side:() => [[60, 120], [520, 90], [560, 150]].map(([x, y]) => P(`M${x} ${y} Q${x - 8} ${y - 8} ${x - 18} ${y - 4} Q${x - 12} ${y + 2} ${x - 14} ${y + 8} Q${x - 6} ${y + 2} ${x} ${y + 6} Q${x + 6} ${y + 2} ${x + 14} ${y + 8} Q${x + 12} ${y + 2} ${x + 18} ${y - 4} Q${x + 8} ${y - 8} ${x} ${y} Z`, "#1B1430", 1.4)).join("") +
                P("M70 380 L74 300 Q60 280 40 276 M74 310 Q90 290 108 290 M72 330 Q50 320 36 326", "none", 6, `stroke="#1B1430"`) + LN("M74 380 L74 300", 10, "#1B1430") +
                [[480, 380], [530, 380]].map(([x, y]) => P(`M${x - 14} ${y} L${x - 14} ${y - 30} Q${x} ${y - 46} ${x + 14} ${y - 30} L${x + 14} ${y} Z`, "#7A7090", 2) + LN(`M${x - 6} ${y - 26} L${x + 6} ${y - 26} M${x} ${y - 32} L${x} ${y - 16}`, 1.6, "#3A2E55")).join("") +
                [[120, 420], [560, 430]].map(([x, y]) => E(x, y, 18, 14, "#F59A4A") + P(`M${x - 8} ${y - 4} L${x - 3} ${y} L${x - 8} ${y + 2} Z M${x + 8} ${y - 4} L${x + 3} ${y} L${x + 8} ${y + 2} Z`, INK, 0) + LN(`M${x - 7} ${y + 7} Q${x} ${y + 11} ${x + 7} ${y + 7}`, 1.8)).join("")},
  xmas:      {base:() => wall("#FBE9DA", 384, "#B98A5E"),
              side:() => P("M20 250 L132 250 L132 384 L20 384 Z", "#C9634A", 2.4) + P("M12 238 L140 238 L140 252 L12 252 Z", "#F6E7C8", 2.2) + P("M46 300 L106 300 L106 384 L46 384 Z", "#3A2A20", 2) + P("M56 384 Q66 344 76 364 Q86 334 96 384 Z", "#F59A4A", 0) +
                [44, 76, 108].map((x, i) => P(`M${x - 8} 252 L${x + 6} 252 L${x + 6} 276 Q${x + 6} 286 ${x - 4} 286 L${x - 14} 286 Q${x - 18} 278 ${x - 8} 276 Z`, ["#D9414E", "#4FA36B", "#4C8FE0"][i], 1.8)).join("") +
                P("M490 60 L570 60 L570 170 L490 170 Z", "#2B3C6E") + LN("M530 60 L530 170 M490 115 L570 115", 2.4) + [[500, 76], [522, 100], [548, 72], [512, 140], [556, 132], [536, 156]].map(([x, y]) => C(x, y, 2, "#fff", 0)).join("") +
                [[480, 358, "#4C8FE0"], [520, 350, "#F6D65A"], [556, 362, "#4FA36B"]].map(([x, y, col]) => P(`M${x - 14} ${y} L${x + 14} ${y} L${x + 14} 386 L${x - 14} 386 Z`, col, 2) + LN(`M${x} ${y} L${x} 386`, 3, "#D9414E")).join("")},
  library:   {base:() => wall("#F1E4CC", 390, "#9C6B45"),
              side:() => [[30, 40], [30, 140], [30, 240], [482, 40], [482, 140], [482, 240]].map(([x, y], i) => shelf(x, y, i + 2)).join("")},
  cafe:      {base:() => wall("#F6E2CF", 380, "#7A4E36") + Array.from({length:Math.ceil(W2 / 25)}, (_, i) => `<rect x="${i * 25}" y="0" width="12.5" height="380" fill="#EFD3BA"/>`).join(""),
              side:() => winBox(30, 70, 96, 110, "#CDEBFA") + P("M24 180 L132 180 L132 188 L24 188 Z", "#C98A4B", 2) + [50, 80, 110].map((x, i) => P(`M${x - 9} 160 L${x + 9} 160 L${x + 7} 180 L${x - 7} 180 Z`, "#E58B5B", 1.8) + C(x, 152, 10, "#4FAE5E", 1.8)).join("") +
                [[500, 70], [560, 70]].map(([x, y]) => LN(`M${x} 0 L${x} ${y}`, 1.6) + P(`M${x - 16} ${y + 18} Q${x - 16} ${y} ${x} ${y} Q${x + 16} ${y} ${x + 16} ${y + 18} Z`, "#F6D65A", 2) + C(x, y + 22, 4, "#FFF4C2", 1.4)).join("") +
                P("M494 310 L570 310 L566 322 L498 322 Z", "#C98A4B", 2) + LN("M532 322 L532 380", 4) + P("M512 292 L530 292 L528 310 L514 310 Z", "#F7A8C4", 2) + C(552, 302, 8, "#D9B99B", 2)},
  sakura:    {hill:[350, "#A9DB8C"], base:() => vgrad("skyKW", "#BFE3FA", "#FCE8F0") + `<rect y="350" width="${W2}" height="120" fill="#A9DB8C"/>`,
              side:() => [[60, 352], [540, 352]].map(([x, y]) => P(`M${x - 6} ${y} L${x + 6} ${y} Q${x + 4} ${y - 60} ${x + 14} ${y - 110} L${x + 2} ${y - 114} Q${x - 6} ${y - 60} ${x - 6} ${y} Z`, "#8A5A3C", 2.2)).join("") +
                [[70, 214, 50], [30, 244, 30], [112, 240, 30], [548, 210, 52], [510, 242, 30], [588, 240, 32]].map(([x, y, r]) => C(x, y, r, "#F8C6D8", 2.4)).join("") +
                Array.from({length:24}, (_, i) => { const x = i % 2 ? (i * 67 + 13) % 150 : 450 + (i * 41) % 150, y = (i * 41 + 30) % 420; return `<g transform="rotate(${i * 37} ${x} ${y})">${E(x, y, 4, 2.6, i % 3 ? "#F7A8C4" : "#FBD3E2", 0)}</g>`; }).join("")},
  space:     {noCenter:true, base:() => `<defs><radialGradient id="nebW" cx=".5" cy=".35" r=".75"><stop offset="0" stop-color="#5B3E9E"/><stop offset="1" stop-color="#140F2E"/></radialGradient></defs><rect width="${W2}" height="470" fill="url(#nebW)"/>` + dots(Math.round(W2 * .15), W2, 470, 0, i => (i % 3) * .6 + .8, "#fff"),
              side:() => [[60, 200], [540, 260], [100, 420], [500, 60], [190, 60], [400, 140], [220, 300], [430, 380]].map(([x, y]) => star(x, y, 5, "#FFE98A", 0)).join("") +
                C(430, 84, 30, "#F59A4A", 2.4) + E(430, 84, 50, 10, "none", 2.4, `transform="rotate(-18 430 84)"`) + LN("M408 76 Q430 70 452 80 M406 92 Q430 88 452 98", 1.6, "#D9763A") +
                C(170, 410, 24, "#9BD0F5", 2.4) + C(164, 404, 5, "#7AB8E6", 0) + C(178, 418, 4, "#7AB8E6", 0) + C(70, 90, 22, "#E8679A", 2.4) + C(64, 84, 5, "#C94A7E", 0) + C(78, 98, 4, "#C94A7E", 0) +
                P("M520 380 Q540 330 560 380 Z", "#D9414E", 2.2) + P("M524 380 L556 380 L556 420 L524 420 Z", "#E6E8EE", 2.2) + C(540, 396, 6, "#9BD0F5", 1.8) + P("M528 420 L552 420 L540 444 Z", "#F59A4A", 0)},
  amusement: {hill:[370, "#E7D3B4"], base:() => wall("#CDEFFF") + `<rect y="370" width="${W2}" height="100" fill="#E7D3B4"/>` + LN(`M0 370 L${W2} 370`, 2.4),
              side:() => E(70, 60, 30, 11, "#fff", 0) + E(540, 50, 34, 12, "#fff", 0) +
                P("M456 300 Q480 220 510 260 Q530 180 560 230 Q580 200 600 220", "none", 5) + P("M456 300 Q480 220 510 260 Q530 180 560 230 Q580 200 600 220", "none", 2.6, `stroke="#D9414E"`) + LN("M480 250 L480 370 M520 230 L520 370 M560 230 L560 370", 2.4) +
                P("M20 260 L130 260 L120 230 Q75 196 30 230 Z", "#F7A8C4", 2.4) + LN("M75 196 L75 182", 2) + P("M75 182 L90 188 L75 194 Z", "#F6D65A", 1.4) + P("M24 260 L126 260 L126 340 L24 340 Z", "#FFF4E0", 2.2) + LN("M50 260 L50 340 M100 260 L100 340", 2) + TXT(75, 306, "旋轉木馬", 13, "#E8679A")},
};
Object.assign(BG_WIDE, {
  aquarium:  {base:() => wall("#2B5C96") + `<rect width="${W2}" height="200" fill="#3B78B8"/><rect y="400" width="${W2}" height="70" fill="#E8D3A2"/>` + LN(`M0 400 L${W2} 400`, 2.4),
              side:() => [[34, 400, 0], [56, 400, 1], [548, 400, 2], [572, 400, 0]].map(([x, y, i]) => LN(`M${x} ${y} Q${x - 10} ${y - 40} ${x} ${y - 80} Q${x + 10} ${y - 120} ${x} ${y - 160 + i * 20}`, 7, "#4FA36B")).join("") +
                [[100, 140, "#F7A8C4", 1], [500, 230, "#F59A4A", -1], [120, 330, "#9BD0F5", -1]].map(([x, y, c, d]) => P(`M${x - 16 * d} ${y} Q${x} ${y - 12} ${x + 14 * d} ${y} Q${x} ${y + 12} ${x - 16 * d} ${y} Z M${x + 14 * d} ${y} L${x + 26 * d} ${y - 9} L${x + 26 * d} ${y + 9} Z`, c, 2) + C(x - 8 * d, y - 2, 1.8, INK, 0)).join("") +
                [[80, 60, 5], [86, 40, 3], [520, 120, 6], [528, 96, 3.5]].map(([x, y, r]) => C(x, y, r, "rgba(255,255,255,.35)", 1.4, `stroke="#fff"`)).join("") +
                P("M488 404 L540 404 L540 440 L488 440 Z", "#B8864E", 2.2) + P("M484 404 Q514 380 544 404 Z", "#C99A3A", 2.2) + C(514, 418, 4, "#F6D65A", 1.4) + P("M90 440 Q100 420 110 440 Q120 420 130 440 Z", "#F7A8C4", 2)},
  garden:    {base:() => wall("#CDEBFA") + `<rect y="330" width="${W2}" height="140" fill="#9ED37A"/>` +
                Array.from({length:Math.ceil(W2 / 28)}, (_, i) => P(`M${i * 28 + 12} 330 L${i * 28 + 12} 268 L${i * 28 + 22} 256 L${i * 28 + 32} 268 L${i * 28 + 32} 330 Z`, "#FFFFFF", 2)).join("") + `<rect x="0" y="282" width="${W2}" height="10" fill="#fff" stroke="${INK}" stroke-width="2"/>` + LN(`M0 330 L${W2} 330`, 2.4),
              side:() => [[60, 380, "#F59A4A"], [100, 430, "#E8679A"], [30, 450, "#B9A3E8"], [500, 400, "#F6D65A"], [560, 380, "#E8679A"], [540, 440, "#B9A3E8"]].map(([x, y, c]) =>
                  LN(`M${x} ${y} L${x} ${y + 22}`, 2, "#4F8F45") + [0, 72, 144, 216, 288].map(a => C(x + Math.cos(a * Math.PI / 180) * 6, y + Math.sin(a * Math.PI / 180) * 6, 5, c, 1.4)).join("") + C(x, y, 3.5, "#F6D65A", 1.2)).join("") +
                P("M520 200 L560 200 L560 236 L520 236 Z", "#C98A4B", 2) + P("M514 202 L540 180 L566 202 Z", "#D9414E", 2) + C(540, 218, 6, "#3A2A20", 0) + LN("M540 236 L540 282", 4) + E(80, 70, 30, 11, "#fff", 0)},
  camping:   {base:() => wall("#23305A") + `<rect y="350" width="${W2}" height="120" fill="#3E6B4A"/>` + LN(`M0 350 L${W2} 350`, 2.4) +
                [[30, 40], [90, 120], [130, 30], [470, 50], [520, 140], [580, 30], [40, 220], [560, 230]].map(([x, y], i) => star(x, y, i % 3 ? 3 : 5, "#FFE98A", 0)).join(""),
              side:() => pine(40, 352, 120, "#264A36", false) + pine(96, 352, 90, "#2E5A40", false) + pine(520, 352, 110, "#264A36", false) + pine(572, 352, 130, "#2E5A40", false) +
                P("M60 400 L130 400 L130 414 L60 414 Z", "#8A5A3C", 2) + P("M470 410 L486 410 L486 440 L470 440 Z", "#3A2A20", 1.6) + P("M466 410 L490 410 L478 396 Z", "#3A2A20", 1.6) + C(478, 425, 5, "#FFE98A", 0)},
  birthday:  {base:() => wall("#FBE3EC", 390, "#E7C9A8"),
              side:() => LN("M0 30 Q75 66 150 30 M450 30 Q525 66 600 30", 1.6) + [[18, 40], [50, 50], [82, 52], [114, 46], [486, 46], [518, 52], [550, 50], [582, 40]].map(([x, y], i) => P(`M${x - 10} ${y - 4} L${x + 10} ${y - 4} L${x} ${y + 16} Z`, ["#4FA36B", "#B9A3E8", "#E8679A", "#F6D65A"][i % 4], 1.6)).join("") +
                [[520, 150, "#B9A3E8"], [550, 120, "#4FA36B"], [566, 180, "#E8679A"]].map(([x, y, c]) => LN(`M${x} ${y + 26} Q${x - 6} ${y + 80} ${x - 10} ${y + 160}`, 1.4) + E(x, y, 20, 24, c) + E(x - 6, y - 8, 4, 7, "rgba(255,255,255,.6)", 0)).join("") +
                [[50, 360, "#4C8FE0", 40], [100, 368, "#F6D65A", 32]].map(([x, y, c, w]) => P(`M${x - w / 2} ${y} L${x + w / 2} ${y} L${x + w / 2} 392 L${x - w / 2} 392 Z`, c, 2) + LN(`M${x} ${y} L${x} 392`, 3, "#D9414E") + P(`M${x} ${y} Q${x - 10} ${y - 12} ${x - 4} ${y - 2} M${x} ${y} Q${x + 10} ${y - 12} ${x + 4} ${y - 2}`, "none", 2.4, `stroke="#D9414E"`)).join("")},
});
function bgWide(k, c, W = 600){
  const w = BG_WIDE[k], b = BGS[k] || BGS.park;
  if(!w) return `<g transform="scale(${(W / 600).toFixed(4)} 1)"><g transform="translate(150.8 0) scale(-1 1)">${b.draw(c)}</g><g transform="translate(749.2 0) scale(-1 1)">${b.draw(c)}</g><g transform="translate(150 0)">${b.draw(c)}</g></g>`;
  if(w.full) return W > 600.5 ? `<g transform="scale(${(W / 600).toFixed(4)} 1)">${w.full(c)}</g>` : w.full(c);   // 舞台、純色：整張拉寬
  W2 = W; const base = w.base(c); W2 = 600;
  const off = (W - 300) / 2, side = w.side ? w.side(c) : "", y = w.hill && w.hill[0];
  // 原本背景的地面兩頭有直直的外框線，蓋掉再補上兩邊的地面線
  const seam = w.hill ? `<rect x="${off - 7}" y="${y + 1.6}" width="10" height="${470 - y}" fill="${w.hill[1]}"/><rect x="${off + 297}" y="${y + 1.6}" width="10" height="${470 - y}" fill="${w.hill[1]}"/>` + LN(`M0 ${y} L${off} ${y} M${off + 300} ${y} L${W} ${y}`, 2.4) : "";
  const center = w.noCenter ? "" : `<g transform="translate(${off} 0)">${b.draw(c)}</g>`;
  const sides = W > 600.5 ? `<svg x="0" y="0" width="300" height="470" viewBox="0 0 300 470">${side}</svg><svg x="${W - 300}" y="0" width="300" height="470" viewBox="300 0 300 470">${side}</svg>` : side;
  return base + center + seam + sides;
}
// ---------- 合照小物：房子、家具、花草樹木、橋、河……（錨點在底部中間 (0,0)，大小跟角色同一個比例：角色大約 400 高） ----------
// w、h：大概的寬高（做小圖用）；back：畫在最後面（河、地毯、天上的東西）；sky：一放進來就在天上
const PROPS = {
  house:    {name:"房子", w:360, h:380, draw:() => P("M-150 0 L150 0 L150 -220 L-150 -220 Z", "#F6E7C8", 3) + P("M-176 -214 L0 -370 L176 -214 Z", "#D9414E", 3) + P("M90 -300 L90 -350 L120 -350 L120 -274 Z", "#8A5A3C", 2.6) +
    P("M-34 0 L-34 -120 Q0 -142 34 -120 L34 0 Z", "#B8864E", 2.6) + C(22, -60, 5, "#F6D65A", 1.6) + [-1, 1].map(o => P(`M${o * 70 - 34} -170 L${o * 70 + 34} -170 L${o * 70 + 34} -110 L${o * 70 - 34} -110 Z`, "#BFE6FA", 2.6) + LN(`M${o * 70} -170 L${o * 70} -110 M${o * 70 - 34} -140 L${o * 70 + 34} -140`, 2)).join("") + C(0, -262, 18, "#BFE6FA", 2.6)},
  table:    {name:"桌子", w:200, h:130, draw:() => LN("M-74 -104 L-80 0 M74 -104 L80 0", 10) + LN("M-74 -104 L-80 0 M74 -104 L80 0", 6, "#B8864E") + P("M-100 -120 L100 -120 L100 -102 L-100 -102 Z", "#C98A4B", 3)},
  chair:    {name:"椅子", w:90, h:210, draw:() => LN("M-30 -90 L-34 0 M30 -90 L34 0 M-30 -96 L-30 -200 M30 -96 L30 -200", 9) + LN("M-30 -90 L-34 0 M30 -90 L34 0 M-30 -96 L-30 -200 M30 -96 L30 -200", 5, "#B8864E") +
    P("M-36 -190 L36 -190 L36 -150 L-36 -150 Z", "#C98A4B", 2.6) + P("M-42 -100 L42 -100 L42 -86 L-42 -86 Z", "#C98A4B", 2.6)},
  bed:      {name:"床", w:320, h:190, draw:() => P("M-160 0 L-160 -180 Q-160 -190 -150 -190 L-130 -190 Q-120 -190 -120 -180 L-120 0 Z", "#B8864E", 3) + P("M-124 -60 L150 -60 L150 0 L-124 0 Z", "#C98A4B", 3) +
    P("M-124 -100 L150 -100 L150 -60 L-124 -60 Z", "#fff", 2.6) + P("M-112 -126 Q-80 -138 -50 -126 Q-44 -112 -50 -100 L-112 -100 Q-118 -112 -112 -126 Z", "#fff", 2.6) + P("M-30 -104 L156 -104 L160 -40 L-26 -40 Z", "#9BD0F5", 2.6) + LN("M10 -96 L10 -46 M60 -96 L62 -46 M110 -96 L112 -46", 1.6, "#fff")},
  sofa:     {name:"沙發", w:300, h:160, draw:() => P("M-130 -150 Q-130 -160 -120 -160 L120 -160 Q130 -160 130 -150 L130 -70 L-130 -70 Z", "#E8679A", 3) + P("M-150 -110 Q-150 -120 -138 -120 L-118 -120 L-118 -30 L-150 -30 Z M150 -110 Q150 -120 138 -120 L118 -120 L118 -30 L150 -30 Z", "#E8679A", 3) +
    P("M-120 -80 L120 -80 L120 -30 L-120 -30 Z", "#F29BBE", 3) + LN("M0 -150 L0 -82 M0 -78 L0 -32", 2) + LN("M-130 -30 L-130 0 M130 -30 L130 0", 6)},
  shelf:    {name:"書櫃", w:180, h:300, draw:() => P("M-90 0 L90 0 L90 -300 L-90 -300 Z", "#B9835A", 3) + [-210, -120].map(y => LN(`M-90 ${y} L90 ${y}`, 3)).join("") +
    [[-290, 0], [-200, 1], [-110, 2]].map(([y, i]) => Array.from({length:9}, (_, k) => { const w = 12 + (k * 7 + i * 3) % 6, h = 60 + (k * 13 + i * 5) % 20; return `<rect x="${-82 + k * 18.5}" y="${y + 80 - h}" width="${w}" height="${h}" fill="${["#D9414E", "#4C8FE0", "#F6D65A", "#4FA36B", "#B9A3E8", "#F59A4A", "#F7A8C4"][(k + i) % 7]}" stroke="${INK}" stroke-width="1.6"/>`; }).join("")).join("")},
  tv:       {name:"電視", w:220, h:200, draw:() => P("M-80 0 L80 0 L80 -60 L-80 -60 Z", "#8A5A3C", 3) + P("M-100 -66 L100 -66 L100 -196 L-100 -196 Z", "#3A2A20", 3) + P("M-90 -76 L90 -76 L90 -186 L-90 -186 Z", "#6FB7E8", 0) + P("M-60 -100 L-20 -150 L20 -110 L50 -140 L80 -100 Z", "#4FAE5E", 0) + C(50, -160, 10, "#F6D65A", 0)},
  pot:      {name:"盆栽", w:90, h:170, draw:() => [[-30, -40], [0, -60], [30, -40], [-14, -30], [16, -32]].map(([dx, dy]) => P(`M0 -60 Q${dx} ${-60 + dy / 2} ${dx} ${-60 + dy} Q${dx + 10} ${-60 + dy / 2} 0 -60 Z`, "#4FAE5E", 2.4)).join("") + P("M-36 -64 L36 -64 L28 0 L-28 0 Z", "#E58B5B", 3) + LN("M-38 -56 L38 -56", 3)},
  flowers:  {name:"花叢", w:160, h:80, draw:() => P("M-80 0 Q-80 -40 -40 -44 Q0 -60 40 -44 Q80 -40 80 0 Z", "#5FB36B", 2.6) +
    [[-50, -40, "#E8679A"], [-16, -56, "#F6D65A"], [20, -48, "#B9A3E8"], [52, -34, "#F7A8C4"], [-30, -20, "#FFFFFF"], [34, -16, "#F59A4A"]].map(([x, y, c]) => [0, 72, 144, 216, 288].map(a => C(x + Math.cos(a * Math.PI / 180) * 7, y + Math.sin(a * Math.PI / 180) * 7, 6.5, c, 1.6)).join("") + C(x, y, 4, "#F6D65A", 1.2)).join("")},
  tree:     {name:"大樹", w:300, h:440, draw:() => P("M-22 0 Q-14 -120 -18 -200 L18 -200 Q14 -120 22 0 Z", "#8A5A3C", 3) + C(0, -300, 110, "#4FAE5E", 3) + C(-90, -230, 70, "#4FAE5E", 3) + C(90, -230, 70, "#4FAE5E", 3) + C(-40, -340, 6, "#D9414E", 1.6) + C(50, -280, 6, "#D9414E", 1.6) + C(-70, -250, 6, "#D9414E", 1.6)},
  pine:     {name:"松樹", w:220, h:400, draw:() => P("M-16 0 L16 0 L16 -60 L-16 -60 Z", "#8A5A3C", 3) + [[-60, 110], [-160, 90], [-250, 66]].map(([y, w]) => P(`M0 ${y - 150} L${w} ${y} L${-w} ${y} Z`, "#3E8A5A", 3)).join("")},
  bush:     {name:"草叢", w:200, h:90, draw:() => P("M-100 0 Q-110 -50 -60 -60 Q-40 -96 0 -80 Q40 -100 64 -62 Q110 -54 100 0 Z", "#5FB36B", 3) + LN("M-50 -30 Q-40 -44 -30 -34 M20 -50 Q30 -62 40 -52", 2, "#3E8A5A")},
  mushroom: {name:"蘑菇", w:120, h:110, draw:() => P("M-20 0 L-16 -60 L16 -60 L20 0 Z", "#F6E7C8", 2.6) + P("M-60 -54 Q-60 -110 0 -110 Q60 -110 60 -54 Z", "#D9414E", 3) + C(-28, -78, 8, "#fff", 0) + C(14, -92, 7, "#fff", 0) + C(34, -66, 6, "#fff", 0)},
  rock:     {name:"石頭", w:160, h:80, draw:() => P("M-80 0 Q-86 -40 -50 -60 Q-10 -84 40 -64 Q86 -48 80 0 Z", "#A8AEB8", 3) + LN("M-30 -44 Q-10 -56 14 -50", 2, "#8A909A")},
  bridge:   {name:"拱橋", w:440, h:150, draw:() => P("M-220 0 L-220 -40 Q0 -150 220 -40 L220 0 L180 0 Q0 -84 -180 0 Z", "#D9414E", 3) + LN("M-200 -60 Q0 -170 200 -60", 4) + LN("M-200 -60 Q0 -170 200 -60", 2, "#F6D65A") +
    [-160, -100, -40, 20, 80, 140].map(x => { const y = -60 - (1 - (x / 200) ** 2) * 90; return LN(`M${x} ${(y + 24).toFixed(0)} L${x} ${y.toFixed(0)}`, 3); }).join("")},
  river:    {name:"小河", w:640, h:110, back:true, draw:() => P("M-330 -10 Q-220 -110 -80 -70 Q60 -30 170 -90 Q260 -130 330 -100 L330 -40 Q260 -70 170 -30 Q60 30 -80 -10 Q-220 -50 -330 50 Z", "#6FB7E8", 3) + LN("M-200 -60 Q-160 -70 -120 -60 M40 -40 Q80 -52 120 -48 M200 -84 Q240 -96 280 -90", 2.4, "#fff")},
  pond:     {name:"池塘", w:300, h:110, back:true, draw:() => E(0, -50, 150, 50, "#6FB7E8", 3) + LN("M-80 -60 Q-50 -70 -20 -60 M30 -40 Q60 -50 90 -42", 2.4, "#fff") + E(70, -64, 22, 8, "#5FB36B", 2) + C(70, -70, 6, "#F7A8C4", 1.6)},
  rug:      {name:"地毯", w:300, h:80, back:true, draw:() => E(0, -40, 150, 40, "#F7A8C4", 3) + E(0, -40, 120, 28, "#FBD3E2", 2) + E(0, -40, 60, 14, "#F7A8C4", 2)},
  fence:    {name:"籬笆", w:300, h:120, draw:() => P("M-150 -80 L150 -80 L150 -64 L-150 -64 Z M-150 -40 L150 -40 L150 -24 L-150 -24 Z", "#fff", 2.6) + Array.from({length:6}, (_, i) => P(`M${-140 + i * 54} 0 L${-140 + i * 54} -100 L${-128 + i * 54} -116 L${-116 + i * 54} -100 L${-116 + i * 54} 0 Z`, "#fff", 2.6)).join("")},
  bench:    {name:"長椅", w:240, h:130, draw:() => LN("M-90 -50 L-96 0 M90 -50 L96 0", 8) + P("M-120 -60 L120 -60 L120 -46 L-120 -46 Z", "#C98A4B", 2.6) + P("M-120 -120 L120 -120 L120 -104 L-120 -104 Z M-120 -96 L120 -96 L120 -80 L-120 -80 Z", "#C98A4B", 2.6) + LN("M-100 -60 L-100 -120 M100 -60 L100 -120", 6)},
  lamp:     {name:"路燈", w:100, h:400, draw:() => P("M-24 0 L24 0 L16 -20 L-16 -20 Z", "#3A2A20", 2.6) + LN("M0 -20 L0 -340", 10) + LN("M0 -20 L0 -340", 5, "#4A4A55") + P("M-30 -330 L30 -330 L20 -380 L-20 -380 Z", "#FFE98A", 3) + P("M-36 -380 L36 -380 L0 -400 Z", "#3A2A20", 2.6)},
  car:      {name:"小汽車", w:300, h:160, draw:() => P("M-140 -40 Q-140 -90 -100 -90 L-60 -90 L-30 -140 L60 -140 L100 -90 Q140 -88 140 -40 L140 -24 L-140 -24 Z", "#4C8FE0", 3) + P("M-20 -128 L52 -128 L80 -92 L-42 -92 Z", "#BFE6FA", 2.4) + LN("M14 -128 L14 -92", 2.4) +
    [-80, 80].map(x => C(x, -24, 26, "#3A2A20", 3) + C(x, -24, 11, "#C9CED6", 2)).join("") + C(124, -70, 8, "#FFE98A", 2)},
  tent:     {name:"帳篷", w:320, h:220, draw:() => P("M-160 0 L0 -220 L160 0 Z", "#F59A4A", 3) + P("M0 -220 L-40 0 L40 0 Z", "#B8643A", 2.6) + LN("M0 -220 L0 -250", 3) + P("M0 -250 L26 -242 L0 -234 Z", "#D9414E", 2)},
  picnic:   {name:"野餐墊", w:300, h:70, back:true, draw:() => P("M-150 0 L-110 -60 L150 -60 L110 0 Z", "#fff", 3) + [-90, -30, 30, 90].map(x => LN(`M${x - 20} 0 L${x + 20} -60`, 8, "#E8679A", `opacity=".6"`)).join("") + LN("M-130 -30 L130 -30", 8, "#E8679A", `opacity=".6"`) + P("M-150 0 L-110 -60 L150 -60 L110 0 Z", "none", 3)},
  basket:   {name:"野餐籃", w:120, h:110, draw:() => P("M-40 -56 Q-40 -112 0 -112 Q40 -112 40 -56", "none", 6) + P("M-56 -56 L56 -56 L48 0 L-48 0 Z", "#C99A3A", 3) + LN("M-52 -38 L52 -38 M-50 -20 L50 -20", 2, "#8A6420") + P("M-56 -56 L56 -56 L50 -66 L-50 -66 Z", "#E8679A", 2.4)},
  cake:     {name:"蛋糕", w:140, h:150, draw:() => P("M-60 0 L60 0 L60 -60 L-60 -60 Z", "#F7A8C4", 3) + P("M-44 -60 L44 -60 L44 -100 L-44 -100 Z", "#fff", 3) + LN("M-60 -40 Q-30 -30 0 -40 Q30 -30 60 -40", 3, "#fff") +
    [-24, 0, 24].map(x => `<rect x="${x - 3}" y="-124" width="6" height="24" fill="#9BD0F5" stroke="${INK}" stroke-width="2"/>` + P(`M${x} -138 Q${x + 6} -130 ${x} -124 Q${x - 6} -130 ${x} -138 Z`, "#F59A4A", 0)).join("")},
  gift:     {name:"禮物盒", w:110, h:120, draw:() => P("M-46 0 L46 0 L46 -76 L-46 -76 Z", "#4C8FE0", 3) + P("M-52 -76 L52 -76 L52 -96 L-52 -96 Z", "#4C8FE0", 3) + LN("M0 0 L0 -96", 8, "#F6D65A") + P("M0 -96 Q-30 -124 -26 -100 Z M0 -96 Q30 -124 26 -100 Z", "#F6D65A", 2.4)},
  balloons: {name:"氣球", w:140, h:360, draw:() => [[-40, -300, "#E8679A"], [0, -330, "#F6D65A"], [40, -296, "#4C8FE0"]].map(([x, y, c]) => LN(`M${x} ${y + 34} Q${x / 2} ${y / 2} 0 0`, 1.6) + E(x, y, 30, 36, c, 3) + E(x - 10, y - 12, 6, 10, "rgba(255,255,255,.6)", 0)).join("")},
  sun:      {name:"太陽", w:160, h:160, back:true, sky:true, draw:() => Array.from({length:12}, (_, i) => { const a = i * Math.PI / 6; return LN(`M${(Math.cos(a) * 58).toFixed(1)} ${(-80 + Math.sin(a) * 58).toFixed(1)} L${(Math.cos(a) * 78).toFixed(1)} ${(-80 + Math.sin(a) * 78).toFixed(1)}`, 5, "#F59A4A"); }).join("") + C(0, -80, 46, "#FFD447", 3)},
  cloud:    {name:"雲朵", w:220, h:100, back:true, sky:true, draw:() => P("M-100 0 Q-120 -40 -80 -50 Q-70 -96 -20 -84 Q10 -110 50 -84 Q100 -90 100 -44 Q124 -20 100 0 Z", "#fff", 3)},
  rainbow:  {name:"彩虹", w:420, h:220, back:true, sky:true, draw:() => ["#D9414E", "#F59A4A", "#F6D65A", "#5FB36B", "#4C8FE0", "#B9A3E8"].map((c, i) => `<path d="M${-200 + i * 14} 0 A${200 - i * 14} ${200 - i * 14} 0 0 1 ${200 - i * 14} 0" fill="none" stroke="${c}" stroke-width="15"/>`).join("")},
};

// ---------- 合照小物第二批 ----------
Object.assign(PROPS, {
  closet:   {name:"衣櫃", w:200, h:320, draw:() => P("M-96 0 L96 0 L96 -310 L-96 -310 Z", "#C98A4B", 3) + LN("M0 -300 L0 -10", 2.4) + P("M-86 -300 L-6 -300 L-6 -10 L-86 -10 Z M6 -300 L86 -300 L86 -10 L6 -10 Z", "#D9A06A", 2.4) +
    C(-14, -160, 5, "#F6D65A", 1.8) + C(14, -160, 5, "#F6D65A", 1.8) + LN("M-80 0 L-80 8 M80 0 L80 8", 6)},
  desk:     {name:"書桌", w:240, h:220, draw:() => P("M-110 -100 L110 -100 L110 -86 L-110 -86 Z", "#C98A4B", 3) + P("M40 -86 L104 -86 L104 0 L40 0 Z", "#C98A4B", 3) + LN("M48 -56 L96 -56", 2.4) + C(72, -40, 3, "#F6D65A", 1.2) + LN("M-100 -86 L-100 0", 7) +
    P("M-70 -196 L10 -196 L10 -130 L-70 -130 Z", "#3A2A20", 3) + P("M-64 -190 L4 -190 L4 -136 L-64 -136 Z", "#9BD0F5", 0) + LN("M-30 -130 L-30 -104 M-50 -102 L-10 -102", 4) + P("M30 -104 L60 -104 L56 -128 L34 -128 Z", "#E8679A", 2)},
  floorlamp:{name:"立燈", w:120, h:330, draw:() => P("M-30 0 L30 0 L22 -12 L-22 -12 Z", "#3A2A20", 2.6) + LN("M0 -12 L0 -250", 6) + P("M-50 -240 L50 -240 L30 -320 L-30 -320 Z", "#F6E7C8", 3) + E(0, -240, 50, 6, "#FFE98A", 2)},
  fridge:   {name:"冰箱", w:150, h:300, draw:() => P("M-70 0 L70 0 L70 -290 Q70 -300 60 -300 L-60 -300 Q-70 -300 -70 -290 Z", "#E6F2F8", 3) + LN("M-70 -190 L70 -190", 3) + LN("M-50 -230 L-50 -260 M-50 -150 L-50 -100", 6) + C(30, -250, 8, "#E8679A", 1.6) + C(40, -140, 7, "#F6D65A", 1.6)},
  bathtub:  {name:"浴缸", w:300, h:190, draw:() => LN("M-100 -10 L-110 0 M100 -10 L110 0", 6) + P("M-140 -110 L140 -110 Q140 -10 100 -10 L-100 -10 Q-140 -10 -140 -110 Z", "#fff", 3) +
    [-90, -50, 0, 50, 90, -70, 20, 70].map((x, i) => C(x, -120 - (i % 3) * 14, 16 - (i % 3) * 3, "#EAF6FF", 2)).join("") + LN("M110 -110 L110 -170 Q110 -186 126 -186", 5) + E(150, -170, 10, 5, "#4FA36B", 2)},
  piano:    {name:"鋼琴", w:260, h:250, draw:() => P("M-120 -240 L120 -240 L120 -90 L-120 -90 Z", "#2E2B2B", 3) + P("M-124 -96 L124 -96 L124 -70 L-124 -70 Z", "#fff", 2.6) + Array.from({length:11}, (_, i) => LN(`M${-104 + i * 21} -96 L${-104 + i * 21} -70`, 1.4)).join("") +
    Array.from({length:10}, (_, i) => i % 7 === 2 || i % 7 === 6 ? "" : `<rect x="${-100 + i * 21}" y="-96" width="10" height="15" fill="${INK}"/>`).join("") + LN("M-110 -70 L-110 0 M110 -70 L110 0", 8) + P("M-60 -200 L60 -200 L60 -150 L-60 -150 Z", "#F6E7C8", 2)},
  swing:    {name:"盪鞦韆", w:300, h:330, draw:() => LN("M-130 0 L-110 -320 L110 -320 L130 0", 10) + LN("M-130 0 L-110 -320 L110 -320 L130 0", 5, "#D9414E") + LN("M-50 -320 L-50 -110 M50 -320 L50 -110", 2.4) + P("M-60 -112 L60 -112 L60 -98 L-60 -98 Z", "#F6D65A", 2.6)},
  slide:    {name:"溜滑梯", w:360, h:300, draw:() => LN("M-150 0 L-150 -230 M-100 0 L-100 -230", 6) + Array.from({length:6}, (_, i) => LN(`M-150 ${-30 - i * 38} L-100 ${-30 - i * 38}`, 4)).join("") +
    P("M-160 -236 L-90 -236 L-90 -220 L-160 -220 Z", "#4C8FE0", 2.6) + P("M-96 -236 Q20 -150 170 -10 L170 10 L150 10 Q20 -110 -96 -210 Z", "#F59A4A", 3)},
  fountain: {name:"噴水池", w:300, h:240, draw:() => E(0, -30, 140, 34, "#C9CED6", 3) + E(0, -40, 120, 22, "#6FB7E8", 2) + P("M-14 -40 L14 -40 L10 -130 L-10 -130 Z", "#C9CED6", 2.6) + E(0, -130, 46, 12, "#C9CED6", 2.6) +
    LN("M0 -140 Q-40 -220 -70 -140 M0 -140 Q40 -220 70 -140 M0 -140 L0 -230", 3, "#6FB7E8") + C(-70, -130, 4, "#9BD0F5", 0) + C(70, -130, 4, "#9BD0F5", 0)},
  bicycle:  {name:"腳踏車", w:280, h:170, draw:() => [-80, 80].map(x => C(x, -50, 46, "none", 6) + C(x, -50, 46, "none", 3, `stroke="#4A4A55"`) + C(x, -50, 5, INK, 0)).join("") +
    LN("M-80 -50 L-20 -50 L30 -110 L-50 -110 Z M-20 -50 L-50 -120 M30 -110 L80 -50 M30 -110 L40 -140 L60 -140", 5, "#D9414E") + P("M-66 -126 L-34 -126 L-38 -118 L-62 -118 Z", "#3A2A20", 2)},
  boat:     {name:"小船", w:300, h:230, draw:() => P("M-140 -60 L140 -60 L100 0 L-100 0 Z", "#C98A4B", 3) + LN("M-120 -36 L120 -36", 2, "#8A5A3C") + LN("M0 -60 L0 -230", 5) + P("M6 -224 L110 -80 L6 -80 Z", "#fff", 3) + P("M-6 -200 L-80 -80 L-6 -80 Z", "#F7A8C4", 3)},
  sandcastle:{name:"沙堡", w:220, h:180, draw:() => P("M-100 0 L100 0 L100 -70 L-100 -70 Z", "#F2D58C", 3) + [-70, 0, 70].map(x => P(`M${x - 22} -70 L${x + 22} -70 L${x + 22} ${x ? -120 : -150} L${x - 22} ${x ? -120 : -150} Z`, "#F2D58C", 3) + P(`M${x - 22} ${x ? -120 : -150} L${x} ${x ? -140 : -172} L${x + 22} ${x ? -120 : -150} Z`, "#E8B85C", 2.6)).join("") +
    P("M-14 0 L-14 -36 Q0 -50 14 -36 L14 0 Z", "#B8864E", 2.4) + LN("M0 -172 L0 -196", 2) + P("M0 -196 L18 -190 L0 -184 Z", "#D9414E", 1.6)},
  mailbox:  {name:"信箱", w:110, h:200, draw:() => LN("M0 0 L0 -120", 10) + LN("M0 0 L0 -120", 6, "#8A5A3C") + P("M-50 -120 L50 -120 L50 -170 Q50 -196 24 -196 L-24 -196 Q-50 -196 -50 -170 Z", "#D9414E", 3) + LN("M50 -160 L66 -160 L66 -186", 4, "#F6D65A")},
  sign:     {name:"指示牌", w:200, h:260, draw:() => LN("M0 0 L0 -250", 10) + LN("M0 0 L0 -250", 6, "#8A5A3C") + P("M-90 -230 L70 -230 L94 -206 L70 -182 L-90 -182 Z", "#F6E7C8", 3) + P("M90 -160 L-70 -160 L-94 -136 L-70 -112 L90 -112 Z", "#F6E7C8", 3) +
    TXT(-6, -197, "公園 →", 22, "#8A5A3C") + TXT(6, -127, "← 家", 22, "#8A5A3C")},
  snowman:  {name:"雪人", w:180, h:300, draw:() => C(0, -70, 70, "#fff", 3) + C(0, -190, 50, "#fff", 3) + C(-16, -200, 5, INK, 0) + C(16, -200, 5, INK, 0) + P("M0 -188 L40 -180 L0 -176 Z", "#F59A4A", 1.6) + LN("M-16 -170 Q0 -160 16 -170", 2.4) +
    P("M-40 -232 L40 -232 L32 -290 L-32 -290 Z", "#2E2B2B", 3) + LN("M-50 -232 L50 -232", 6) + P("M-50 -146 Q0 -126 50 -146 L50 -132 Q0 -112 -50 -132 Z", "#D9414E", 2.4) + [-100, -60].map(y => C(0, y, 5, INK, 0)).join("")},
  xmastree: {name:"聖誕樹", w:260, h:400, draw:() => P("M-18 0 L18 0 L18 -50 L-18 -50 Z", "#8A5A3C", 3) + [[-50, 120], [-150, 96], [-240, 70]].map(([y, w]) => P(`M0 ${y - 130} L${w} ${y} L${-w} ${y} Z`, "#3E8A5A", 3)).join("") +
    [[-60, -80, "#D9414E"], [50, -100, "#F6D65A"], [-30, -170, "#4C8FE0"], [40, -200, "#D9414E"], [-80, -60, "#F6D65A"], [0, -260, "#E8679A"]].map(([x, y, c]) => C(x, y, 9, c, 2)).join("") + star(0, -380, 22, "#FFD447", 2.4)},
  jacko:    {name:"南瓜燈", w:170, h:150, draw:() => E(0, -64, 80, 62, "#F59A4A", 3) + LN("M-36 -122 Q-46 -64 -36 -6 M36 -122 Q46 -64 36 -6", 2, "#D9763A") + P("M-8 -124 L8 -124 L12 -146 L-4 -150 Z", "#4F8F45", 2.4) +
    P("M-46 -80 L-26 -100 L-18 -76 Z M46 -80 L26 -100 L18 -76 Z", "#3A2A20", 0) + P("M-50 -46 L-34 -32 L-18 -44 L0 -30 L18 -44 L34 -32 L50 -46 Q0 -4 -50 -46 Z", "#3A2A20", 0)},
  lantern:  {name:"燈籠", w:110, h:200, draw:() => LN("M0 -200 L0 -170", 2) + P("M-36 -164 Q-56 -100 -36 -36 L36 -36 Q56 -100 36 -164 Z", "#D9414E", 3) + P("M-30 -172 L30 -172 L30 -160 L-30 -160 Z M-30 -40 L30 -40 L30 -28 L-30 -28 Z", "#3A2A20", 2) +
    LN("M-44 -100 L44 -100", 2, "#F6D65A") + LN("M0 -28 L0 0 M-8 -8 L0 0 L8 -8", 2.4, "#F6D65A")},
  butterfly:{name:"蝴蝶", w:90, h:80, sky:true, draw:() => E(-20, -48, 20, 16, "#B9A3E8", 2.4) + E(20, -48, 20, 16, "#B9A3E8", 2.4) + E(-16, -22, 13, 11, "#F7A8C4", 2.4) + E(16, -22, 13, 11, "#F7A8C4", 2.4) + LN("M0 -60 L0 -12", 5) + LN("M0 -60 Q-8 -76 -16 -78 M0 -60 Q8 -76 16 -78", 2)},
  bird:     {name:"小鳥", w:100, h:80, sky:true, draw:() => E(0, -36, 34, 26, "#9BD0F5", 3) + P("M-10 -42 Q10 -70 30 -44 Q10 -40 -10 -42 Z", "#6FB7E8", 2.4) + C(-18, -46, 3.5, INK, 0) + P("M-32 -40 L-48 -36 L-32 -32 Z", "#F59A4A", 1.6) + LN("M-4 -10 L-6 0 M8 -10 L10 0", 2.4, "#F59A4A")},
  moon:     {name:"月亮", w:120, h:120, back:true, sky:true, draw:() => `<path d="M10 -110 a52 52 0 1 0 40 84 a42 42 0 1 1 -40 -84 Z" fill="#FFE98A" stroke="${INK}" stroke-width="3"/>` + C(-18, -54, 6, "#F2D88A", 0)},
  stars:    {name:"星星", w:160, h:110, back:true, sky:true, draw:() => [[-50, -70, 14], [10, -40, 10], [50, -86, 18], [-10, -96, 7], [60, -24, 7]].map(([x, y, r]) => star(x, y, r, "#FFE98A", 2)).join("")},
});
// 小物分類（右邊選單分開列，比較好找）
const PROP_CATS = [
  {name:"室內", keys:["house", "table", "chair", "bed", "sofa", "shelf", "tv", "closet", "desk", "floorlamp", "fridge", "bathtub", "piano", "rug", "pot"]},
  {name:"戶外", keys:["tree", "pine", "bush", "flowers", "mushroom", "rock", "river", "pond", "bridge", "fence", "bench", "lamp", "mailbox", "sign", "fountain", "car", "bicycle", "boat", "tent", "sandcastle"]},
  {name:"遊樂、野餐、派對、節日", keys:["swing", "slide", "picnic", "basket", "cake", "gift", "balloons", "snowman", "xmastree", "jacko", "lantern"]},
  {name:"天上、小動物", keys:["sun", "moon", "cloud", "rainbow", "stars", "bird", "butterfly"]},
];

// ---------- 合照小物第三批：可以自己打字的對話框、標題，還有表情貼圖 ----------
// text:true 的小物，選到時右邊會出現輸入框；字數多的時候框會跟著變寬
const textW = (t, size) => Math.max(size * 2.6, [...t].reduce((n, ch) => n + (ch.charCodeAt(0) > 255 ? 1 : .58), 0) * size + size * 1.4);
const TXTB = (x, y, t, size, col) => `<text x="${x}" y="${y}" text-anchor="middle" dominant-baseline="central" font-size="${size}" font-weight="900" fill="${col}" font-family="system-ui,'Noto Sans TC',sans-serif">${String(t).replace(/[&<>"]/g, c => ({"&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;"})[c])}</text>`;
Object.assign(PROPS, {
  speech:   {name:"對話框", w:240, h:150, text:"你好呀！", draw:pr => { const t = (pr && pr.text) || "你好呀！", w = textW(t, 30);
    return P(`M${-w / 2} -150 Q${-w / 2} -164 ${-w / 2 + 16} -164 L${w / 2 - 16} -164 Q${w / 2} -164 ${w / 2} -150 L${w / 2} -66 Q${w / 2} -52 ${w / 2 - 16} -52 L24 -52 L0 0 L-6 -52 L${-w / 2 + 16} -52 Q${-w / 2} -52 ${-w / 2} -66 Z`, "#fff", 3.4) + TXTB(0, -108, t, 30, INK); }},
  think:    {name:"想法泡泡", w:260, h:200, text:"好想吃蛋糕…", draw:pr => { const t = (pr && pr.text) || "好想吃蛋糕…", w = textW(t, 28) + 20;
    // 雲朵：先畫一層有外框的，再蓋一層沒外框的，裡面的接縫線就不見了
    const parts = sw => E(0, -130, w / 2, 62, "#fff", sw) + [-1, 1].map(o => C(o * w * .34, -172, 28, "#fff", sw) + C(o * w * .44, -100, 24, "#fff", sw)).join("") + C(0, -184, 30, "#fff", sw);
    return C(-6, -14, 8, "#fff", 3) + C(14, -40, 13, "#fff", 3) + parts(3.4) + parts(0) + TXTB(0, -130, t, 28, INK); }},
  banner:   {name:"標題布條", w:420, h:120, text:"我們的合照", draw:pr => { const t = (pr && pr.text) || "我們的合照", w = textW(t, 36) + 30;
    return P(`M${-w / 2 - 50} -40 L${-w / 2 + 10} -40 L${-w / 2 + 10} -100 L${-w / 2 - 50} -100 L${-w / 2 - 30} -70 Z M${w / 2 + 50} -40 L${w / 2 - 10} -40 L${w / 2 - 10} -100 L${w / 2 + 50} -100 L${w / 2 + 30} -70 Z`, "#C2386F", 3) +
      P(`M${-w / 2} -30 L${w / 2} -30 L${w / 2} -110 L${-w / 2} -110 Z`, "#E8679A", 3.4) + TXTB(0, -70, t, 36, "#fff"); }},
  heart:    {name:"愛心", w:110, h:100, draw:() => P(heartD(0, -50, 38), "#E8679A", 3) + E(-22, -66, 7, 11, "rgba(255,255,255,.6)", 0, `transform="rotate(-30 -22 -66)"`)},
  sparkle:  {name:"亮晶晶", w:140, h:130, draw:() => [[0, -64, 40], [-48, -96, 18], [46, -30, 16]].map(([x, y, r]) => P(`M${x} ${y - r} Q${x + r * .18} ${y - r * .18} ${x + r} ${y} Q${x + r * .18} ${y + r * .18} ${x} ${y + r} Q${x - r * .18} ${y + r * .18} ${x - r} ${y} Q${x - r * .18} ${y - r * .18} ${x} ${y - r} Z`, "#FFE98A", 2.6)).join("")},
  notes:    {name:"音符", w:140, h:140, draw:() => E(-34, -30, 17, 12, INK, 0, `transform="rotate(-20 -34 -30)"`) + E(24, -46, 17, 12, INK, 0, `transform="rotate(-20 24 -46)"`) + LN("M-19 -34 L-19 -112 L39 -126 L39 -50", 6) + LN("M-19 -100 L39 -114", 10)},
  zzz:      {name:"ZZZ", w:140, h:150, draw:() => TXTB(-34, -30, "Z", 40, "#6FB7E8") + TXTB(4, -76, "Z", 52, "#6FB7E8") + TXTB(44, -128, "Z", 64, "#6FB7E8")},
  exclaim:  {name:"驚嘆號", w:70, h:140, draw:() => P("M-14 -134 L14 -134 L8 -46 L-8 -46 Z", "#D9414E", 3) + C(0, -16, 12, "#D9414E", 3)},
  question: {name:"問號", w:100, h:140, draw:() => P("M-34 -96 Q-34 -140 0 -140 Q36 -140 36 -104 Q36 -80 12 -70 Q4 -66 4 -50 L-12 -50 Q-14 -76 6 -88 Q18 -96 16 -106 Q14 -120 0 -120 Q-14 -120 -16 -100 Z", "#4C8FE0", 3) + C(-4, -18, 12, "#4C8FE0", 3)},
  sweat:    {name:"汗滴", w:70, h:100, draw:() => P("M0 -96 Q32 -50 26 -24 Q20 0 0 0 Q-20 0 -26 -24 Q-32 -50 0 -96 Z", "#9BD0F5", 3) + E(-8, -30, 5, 9, "#fff", 0)},
  angry:    {name:"生氣符號", w:100, h:100, draw:() => ["M-12 -60 Q-12 -84 -36 -84", "M12 -60 Q12 -84 36 -84", "M-12 -40 Q-12 -16 -36 -16", "M12 -40 Q12 -16 36 -16"].map(d => LN(d, 13, "#fff") + LN(d, 8, "#E0303E")).join("")},
});
PROP_CATS.push({name:"文字和貼圖（文字可以自己改）", keys:["speech", "think", "banner", "heart", "sparkle", "notes", "zzz", "exclaim", "question", "sweat", "angry"]});

// ---------- 靜物角色：蛋糕（選蛋糕的樣子、顏色，再自由加裝飾；牌子上的字可以自己改） ----------
ROLES.cake = {name:"蛋糕"};
const CAKE_BASES = {
  round1: {name:"一層圓蛋糕", tiers:[{rx:110, top:300, bot:420}]},
  round2: {name:"兩層圓蛋糕", tiers:[{rx:112, top:336, bot:420}, {rx:76, top:262, bot:336}]},
  round3: {name:"三層圓蛋糕", tiers:[{rx:112, top:358, bot:420}, {rx:84, top:298, bot:358}, {rx:58, top:242, bot:298}]},
  square: {name:"方形蛋糕", square:true},
  cupcake:{name:"杯子蛋糕", cup:true},
};
const SPONGE_PAL = ["#F6E7C8", "#E8C48E", "#8A5A3C", "#F7B6C8", "#B9D98C", "#C9B3E8", "#FFFFFF"];
const FROST_PAL = ["#FFFFFF", "#F7A8C4", "#6B4530", "#9ADBC0", "#FFE98A", "#9BD0F5", "#C9B3E8", "#F59A4A"];
const PLATE_PAL = ["#FFFFFF", "#F6D65A", "#9BD0F5", "#F7A8C4", "#C9CED6"];
// 裝飾（可以選好幾個）；tags 給主題挑戰計分用
const CAKE_DECO = {
  strawberry:{name:"草莓", tags:["party", "snack", "summer"]},
  candles:   {name:"蠟燭", tags:["party"]},
  cream:     {name:"擠花奶油", tags:["party", "fancy"]},
  cherry:    {name:"櫻桃", tags:["party", "snack"]},
  blueberry: {name:"藍莓", tags:["snack", "summer"]},
  macaron:   {name:"馬卡龍", tags:["fancy", "party"]},
  sprinkles: {name:"彩色糖粒", tags:["party", "funny"]},
  drip:      {name:"巧克力淋醬", tags:["snack", "fancy"]},
  flowers:   {name:"糖霜小花", tags:["fancy", "summer"]},
  ribbon:    {name:"緞帶", tags:["fancy", "formal"]},
  plaque:    {name:"文字牌", tags:["party"]},
  startop:   {name:"星星插牌", tags:["party", "funny"]},
  hearttop:  {name:"愛心插牌", tags:["party", "fancy"]},
  bear:      {name:"小熊公仔", tags:["party", "funny", "animal"]},
};
// 圓蛋糕側面上緣的弧線：從左到右，y 照著前面那半圈橢圓
const arcPts = (t, dy = 0, n = 16) => Array.from({length:n + 1}, (_, i) => { const x = -t.rx + 2 * t.rx * i / n; return [150 + x, t.top + dy + t.rx * .24 * Math.sqrt(Math.max(0, 1 - (x / t.rx) ** 2))]; });
function cakeShape(L){
  const b = CAKE_BASES[L.cakeBase] || CAKE_BASES.round2;
  if(b.square) return {tiers:[], top:{cx:150, cy:296, rx:96, ry:12}, sq:true};
  if(b.cup) return {tiers:[], top:{cx:150, cy:244, rx:46, ry:10}, cup:true};
  const t = b.tiers[b.tiers.length - 1];
  return {tiers:b.tiers, top:{cx:150, cy:t.top, rx:t.rx, ry:t.rx * .24}};
}
function drawCake(L){
  const sp = L.sponge || "#F6E7C8", fr = L.frost || "#FFFFFF", deco = L.deco || [], has = k => deco.includes(k), sh = cakeShape(L), T = sh.top;
  const dark = shade(sp, lum(sp) < .3 ? .25 : -.18), frD = shade(fr, lum(fr) < .3 ? .3 : -.12);
  let s = E(150, 428, 140, 26, L.plate || "#FFFFFF", 3) + E(150, 424, 120, 18, shade(L.plate || "#FFFFFF", -.06), 0);
  // 蛋糕本體
  if(sh.sq){
    s += P("M48 300 L252 300 L252 418 L48 418 Z", sp, 3) + LN("M48 360 L252 360", 3, dark) + P("M48 300 L64 282 L236 282 L252 300 Z", fr, 3) +
      P("M48 300 L252 300 L252 314 " + Array.from({length:10}, (_, i) => `Q${242 - i * 20.4} 326 ${231.6 - i * 20.4} 314`).join(" ") + " L48 300 Z", fr, 2.6);
  }else if(sh.cup){
    s += P("M92 330 L208 330 L194 420 L106 420 Z", sp, 3) + [112, 132, 150, 168, 188].map(x => LN(`M${x} 334 L${x + (150 - x) * .14} 416`, 2, dark)).join("") +
      P("M82 334 Q80 300 112 296 Q104 262 138 258 Q132 230 150 222 Q168 230 162 258 Q196 262 188 296 Q220 300 218 334 Q150 350 82 334 Z", fr, 3) +
      LN("M100 316 Q150 330 200 316 M118 280 Q150 290 182 280", 2, frD);
  }else{
    sh.tiers.forEach((t, i) => {
      const ry = t.rx * .24, top = arcPts(t), band = arcPts(t, 14);
      s += P(`M${150 - t.rx} ${t.top} L${150 - t.rx} ${t.bot} A${t.rx} ${ry} 0 0 0 ${150 + t.rx} ${t.bot} L${150 + t.rx} ${t.top} Z`, sp, 3);
      s += LN(`M${150 - t.rx + 4} ${(t.top + t.bot) / 2 + 8} A${t.rx} ${ry} 0 0 0 ${150 + t.rx - 4} ${(t.top + t.bot) / 2 + 8}`, 2.4, dark);
      // 上面的糖霜：頂面＋側面上緣一圈波浪
      s += P(`M${top.map(p => p.map(n => n.toFixed(1)).join(" ")).join(" L")} L${band.reverse().map((p, k) => `${p[0].toFixed(1)} ${(p[1] + (k % 2 ? 7 : 0)).toFixed(1)}`).join(" L")} Z`, fr, 2.4);
      s += E(150, t.top, t.rx, ry, fr, 3);
    });
  }
  // 側面的裝飾（每一層）
  const sideRows = sh.sq ? [{l:48, r:252, y:340}] : sh.cup ? [] : sh.tiers.map(t => ({l:150 - t.rx, r:150 + t.rx, y:(t.top + t.bot) / 2 + 12, t}));
  if(has("drip")) s += sh.sq ? Array.from({length:9}, (_, i) => { const x = 58 + i * 23, h = 18 + (i * 7) % 20; return P(`M${x - 8} 300 L${x - 8} ${300 + h} Q${x} ${310 + h} ${x + 8} ${300 + h} L${x + 8} 300 Z`, "#6B4530", 0); }).join("") + LN("M48 300 L252 300", 3)
    : sh.tiers.map(t => arcPts(t, 0, 10).slice(1, -1).map(([x, y], i) => { const h = 14 + (i * 9) % 18; return P(`M${x - 7} ${y - 2} L${x - 7} ${y + h} Q${x} ${y + h + 9} ${x + 7} ${y + h} L${x + 7} ${y - 2} Z`, "#6B4530", 0); }).join("")).join("");
  if(has("ribbon")){ const r = sideRows[0]; if(r) s += P(`M${r.l} ${r.y + 10} L${r.r} ${r.y + 10} L${r.r} ${r.y + 26} L${r.l} ${r.y + 26} Z`, "#E8679A", 2.4) + P(`M150 ${r.y + 18} Q128 ${r.y} 124 ${r.y + 18} Q128 ${r.y + 36} 150 ${r.y + 18} Q172 ${r.y} 176 ${r.y + 18} Q172 ${r.y + 36} 150 ${r.y + 18} Z`, "#E8679A", 2.4) + C(150, r.y + 18, 6, "#C2386F", 2); }
  if(has("flowers")) s += sideRows.map((r, j) => [.2, .5, .8].map((f, i) => { const x = r.l + (r.r - r.l) * f, y = r.y - 4 + (i % 2) * 6, c = ["#F7A8C4", "#FFE98A", "#C9B3E8"][(i + j) % 3];
    return [0, 72, 144, 216, 288].map(a => C(x + Math.cos(a * Math.PI / 180) * 5.5, y + Math.sin(a * Math.PI / 180) * 5.5, 5, c, 1.4)).join("") + C(x, y, 3, "#F59A4A", 1); }).join("")).join("");
  if(has("sprinkles")) s += [...sideRows.map(r => [r.l + 10, r.r - 10, r.y - 16, r.y + 18]), [T.cx - T.rx * .7, T.cx + T.rx * .7, T.cy - T.ry * .6, T.cy + T.ry * .6]].map(([l, r, t, b], j) =>
    Array.from({length:16}, (_, i) => { const x = l + ((i * 37 + j * 11) % 100) / 100 * (r - l), y = t + ((i * 53 + j * 7) % 100) / 100 * (b - t), a = (i * 47) % 180;
      return `<rect x="${(x - 4).toFixed(1)}" y="${(y - 1.5).toFixed(1)}" width="8" height="3" rx="1.5" fill="${["#E8679A", "#4C8FE0", "#F6D65A", "#5FB36B", "#F59A4A"][i % 5]}" transform="rotate(${a} ${x.toFixed(1)} ${y.toFixed(1)})"/>`; }).join("")).join("");
  // 頂面的裝飾：照前後排（後面的先畫）
  const onTop = [];
  const ring = (n, f, a0 = 0) => Array.from({length:n}, (_, i) => { const a = a0 + i * 2 * Math.PI / n; return [T.cx + Math.cos(a) * T.rx * f, T.cy + Math.sin(a) * T.ry * f]; });
  if(has("cream")) ring(10, .86, .3).forEach(([x, y]) => onTop.push([y, P(`M${x - 9} ${y} Q${x - 10} ${y - 12} ${x} ${y - 18} Q${x + 10} ${y - 12} ${x + 9} ${y} Z`, mix(fr, "#FFFFFF", .5), 2) + LN(`M${x - 4} ${y - 4} Q${x} ${y - 12} ${x + 4} ${y - 4}`, 1.2, frD)]));
  if(has("strawberry")) ring(5, .6, -.4).forEach(([x, y]) => onTop.push([y + .1, P(`M${x} ${y + 4} Q${x - 13} ${y - 8} ${x - 9} ${y - 18} Q${x} ${y - 22} ${x + 9} ${y - 18} Q${x + 13} ${y - 8} ${x} ${y + 4} Z`, "#E0303E", 2.2) +
    P(`M${x - 8} ${y - 18} L${x - 3} ${y - 24} L${x} ${y - 19} L${x + 3} ${y - 24} L${x + 8} ${y - 18} Z`, "#4FA36B", 1.6) + [[-4, -10], [4, -10], [0, -4]].map(([dx, dy]) => E(x + dx, y + dy, 1, 1.6, "#FFE98A", 0)).join("")]));
  if(has("blueberry")) ring(7, .4, .9).forEach(([x, y]) => onTop.push([y + .2, C(x, y - 5, 6.5, "#4A5FA8", 1.8) + C(x - 2, y - 7, 1.6, "rgba(255,255,255,.6)", 0)]));
  if(has("macaron")) [[-.5, -.3], [.5, -.3], [0, .45]].forEach(([fx, fy], i) => { const x = T.cx + fx * T.rx * .7, y = T.cy + fy * T.ry, c = ["#F7A8C4", "#9ADBC0", "#C9B3E8"][i];
    onTop.push([y + .3, P(`M${x - 14} ${y - 6} Q${x} ${y - 20} ${x + 14} ${y - 6} Z`, c, 2) + P(`M${x - 14} ${y - 4} L${x + 14} ${y - 4}`, "none", 3, `stroke="#fff"`) + P(`M${x - 14} ${y - 2} Q${x} ${y + 8} ${x + 14} ${y - 2} Z`, c, 2)]); });
  // 有文字牌時，蠟燭移到兩邊，不要擋住字
  if(has("candles")) (has("plaque") ? [-T.rx * .62, T.rx * .62] : [-26, 0, 26]).forEach((dx, i) => { const x = T.cx + dx, y = T.cy - 2 + (has("plaque") ? 4 : i === 1 ? -4 : 2), c = ["#9BD0F5", "#F7A8C4", "#FFE98A"][i];
    onTop.push([y + .4, `<rect x="${x - 5}" y="${y - 52}" width="10" height="52" rx="2" fill="${c}" stroke="${INK}" stroke-width="2"/>` + [-40, -26, -12].map(d => LN(`M${x - 5} ${y + d} L${x + 5} ${y + d - 6}`, 1.6, "#fff")).join("") +
      LN(`M${x} ${y - 52} L${x} ${y - 58}`, 1.6) + P(`M${x} ${y - 78} Q${x + 8} ${y - 66} ${x} ${y - 58} Q${x - 8} ${y - 66} ${x} ${y - 78} Z`, "#F59A4A", 1.6) + P(`M${x} ${y - 72} Q${x + 3} ${y - 65} ${x} ${y - 61} Q${x - 3} ${y - 65} ${x} ${y - 72} Z`, "#FFE98A", 0)]); });
  if(has("cherry")) onTop.push([T.cy + .5, LN(`M${T.cx} ${T.cy - 20} Q${T.cx + 4} ${T.cy - 40} ${T.cx + 14} ${T.cy - 44}`, 2.4, "#4F8F45") + C(T.cx, T.cy - 12, 11, "#D9414E", 2.4) + C(T.cx - 4, T.cy - 16, 3, "rgba(255,255,255,.7)", 0)]);
  if(has("bear")){ const x = T.cx + T.rx * .3, y = T.cy + 2; onTop.push([y + .6, C(x - 12, y - 46, 6, "#C98A4B", 2) + C(x + 12, y - 46, 6, "#C98A4B", 2) + E(x, y - 12, 16, 14, "#C98A4B", 2.4) + C(x, y - 36, 15, "#C98A4B", 2.4) + E(x, y - 32, 6, 4.5, "#F3D9B8", 0) + C(x - 5, y - 39, 1.8, INK, 0) + C(x + 5, y - 39, 1.8, INK, 0) + E(x, y - 33, 2, 1.4, INK, 0)]); }
  if(has("plaque")){ const t = L.cakeText || "生日快樂", w = Math.max(80, textW(t, 15) + 6), x = T.cx - (has("bear") ? 16 : 0), y = T.cy - T.ry * .3;
    onTop.push([y - 50, LN(`M${x - w / 4} ${y} L${x - w / 4} ${y - 30} M${x + w / 4} ${y} L${x + w / 4} ${y - 30}`, 3, "#C9A877") + P(`M${x - w / 2} ${y - 58} Q${x - w / 2} ${y - 70} ${x - w / 2 + 12} ${y - 70} L${x + w / 2 - 12} ${y - 70} Q${x + w / 2} ${y - 70} ${x + w / 2} ${y - 58} L${x + w / 2} ${y - 40} Q${x + w / 2} ${y - 28} ${x + w / 2 - 12} ${y - 28} L${x - w / 2 + 12} ${y - 28} Q${x - w / 2} ${y - 28} ${x - w / 2} ${y - 40} Z`, "#FFF8E6", 2.4) + TXTB(x, y - 49, t, 15, "#C2386F")]); }
  if(has("startop")) onTop.push([T.cy + .7, LN(`M${T.cx - 30} ${T.cy} L${T.cx - 30} ${T.cy - 90}`, 3, "#C9A877") + star(T.cx - 30, T.cy - 100, 18, "#FFD447", 2.4)]);
  if(has("hearttop")) onTop.push([T.cy + .7, LN(`M${T.cx + 32} ${T.cy} L${T.cx + 32} ${T.cy - 84}`, 3, "#C9A877") + P(heartD(T.cx + 32, T.cy - 96, 16), "#E8679A", 2.4)]);
  s += onTop.sort((a, b) => a[0] - b[0]).map(x => x[1]).join("");
  return s;
}

// ---------- 靜物角色：禮物盒 ----------
ROLES.gift = {name:"禮物盒"};
const GIFT_BASES = {square:{name:"方形盒"}, tall:{name:"高高的盒子"}, wide:{name:"扁扁的盒子"}, round:{name:"圓形帽盒"}, heart:{name:"愛心盒"}, bag:{name:"禮物袋"}};
const GIFT_PATS = {none:{name:"素色"}, dots:{name:"點點"}, stripes:{name:"條紋"}, stars:{name:"星星"}, hearts:{name:"愛心"}};
const GIFT_BOWS = {bow:{name:"大蝴蝶結"}, flower:{name:"花朵結"}, curly:{name:"捲捲緞帶"}, none:{name:"不綁"}};
const GIFT_DECO = {
  tag:     {name:"小卡片吊牌", tags:["party", "neat"]},
  balloon: {name:"綁氣球", tags:["party", "funny"]},
  flower:  {name:"插一朵花", tags:["fancy", "summer"]},
  sticker: {name:"貼紙", tags:["funny", "casual"]},
  sparkle: {name:"亮晶晶", tags:["party", "fancy"]},
  candy:   {name:"棒棒糖", tags:["snack", "funny"]},
  teddy:   {name:"小熊探頭", tags:["animal", "funny"]},
  confetti:{name:"彩帶紙花", tags:["party"]},
};
// 盒子的樣子：front 正面（包裝紙、花紋畫在這裡）、lid 蓋子、top 蝴蝶結綁的位置
function giftShape(L){
  const b = L.giftBase;
  if(b === "tall") return {front:[96, 204, 204, 420], lid:[86, 176, 214, 210], top:[150, 176]};
  if(b === "wide") return {front:[50, 314, 250, 420], lid:[40, 286, 260, 320], top:[150, 286]};
  if(b === "round") return {round:true, front:[54, 300, 246, 420], lid:[48, 270, 252, 304], top:[150, 252]};
  if(b === "heart") return {heart:true, front:[56, 236, 244, 424], top:[150, 268]};
  if(b === "bag") return {bag:true, front:[74, 230, 226, 420], top:[150, 222]};
  return {front:[70, 268, 230, 420], lid:[60, 240, 240, 276], top:[150, 240]};
}
const giftPattern = (pat, [l, t, r, b], col, inside = () => true) => {
  if(!pat || pat === "none") return "";
  if(pat === "stripes") return Array.from({length:Math.ceil((r - l) / 26)}, (_, i) => { const x = l + 8 + i * 26; return inside(x, (t + b) / 2) ? `<rect x="${x}" y="${t + 2}" width="9" height="${b - t - 4}" fill="${col}" opacity=".55"/>` : ""; }).join("");
  const pts = []; for(let y = t + 18, j = 0; y < b - 8; y += 30, j++) for(let x = l + 16 + (j % 2) * 15; x < r - 8; x += 30) if(inside(x, y)) pts.push([x, y]);
  return pts.map(([x, y]) => pat === "dots" ? C(x, y, 5, col, 0) : pat === "stars" ? star(x, y, 7, col, 0) : P(heartD(x, y, 6), col, 0)).join("");
};
function drawGift(L){
  const g = giftShape(L), bc = L.boxC || "#E8679A", rc = L.ribC || "#F6D65A", deco = L.giftDeco || [], has = k => deco.includes(k);
  const pc = lum(bc) > .6 ? shade(bc, -.25) : mix(bc, "#FFFFFF", .55), [l, t, r, b] = g.front;
  let s = E(150, 428, 120, 16, "rgba(0,0,0,.12)", 0);
  if(has("balloon")) s += [[-34, 60, "#E8679A"], [8, 30, "#4C8FE0"], [44, 70, "#F6D65A"]].map(([dx, y, c]) => LN(`M${150 + dx * .3} ${g.top[1]} Q${150 + dx} ${y + 110} ${150 + dx} ${y + 36}`, 1.4) + E(150 + dx, y, 26, 31, c, 2.6) + E(144 + dx, y - 10, 5, 9, "rgba(255,255,255,.6)", 0)).join("");
  if(has("teddy")){ const x = (l + r) / 2 + 30, y = (g.lid ? g.lid[1] : t) + 4; s += C(x - 18, y - 46, 9, "#C98A4B", 2.4) + C(x + 18, y - 46, 9, "#C98A4B", 2.4) + C(x, y - 26, 26, "#C98A4B", 2.6) + E(x, y - 18, 10, 7, "#F3D9B8", 0) + C(x - 9, y - 30, 2.4, INK, 0) + C(x + 9, y - 30, 2.4, INK, 0) + E(x, y - 20, 3, 2, INK, 0); }
  if(has("flower")) s += LN(`M${l + 30} ${(g.lid ? g.lid[1] : t) + 10} L${l + 18} ${(g.lid ? g.lid[1] : t) - 60}`, 3, "#4F8F45") + [0, 72, 144, 216, 288].map(a => C(l + 18 + Math.cos(a * Math.PI / 180) * 11, (g.lid ? g.lid[1] : t) - 70 + Math.sin(a * Math.PI / 180) * 11, 10, "#F7A8C4", 2)).join("") + C(l + 18, (g.lid ? g.lid[1] : t) - 70, 7, "#F6D65A", 1.8);
  if(has("candy")) s += LN(`M${r - 34} ${(g.lid ? g.lid[1] : t) + 10} L${r - 20} ${(g.lid ? g.lid[1] : t) - 56}`, 4, "#fff") + C(r - 18, (g.lid ? g.lid[1] : t) - 68, 16, "#E8679A", 2.4) + `<path d="M${r - 18} ${(g.lid ? g.lid[1] : t) - 68} m-10 0 a10 10 0 0 1 10 -10 a7 7 0 0 1 7 7 a4 4 0 0 1 -4 4" fill="none" stroke="#fff" stroke-width="2.6"/>`;
  // 盒子本體、包裝紙花紋、緞帶
  if(g.round){
    const body = `M${l} ${t} L${l} ${b} A${(r - l) / 2} 22 0 0 0 ${r} ${b} L${r} ${t} Z`;
    s += P(body, bc, 3) + giftPattern(L.giftPat, g.front, pc) + `<rect x="${(l + r) / 2 - 11}" y="${t}" width="22" height="${b - t + 20}" fill="${rc}"/>` + P(body, "none", 3);
    s += P(`M${g.lid[0]} ${g.lid[1] + 12} L${g.lid[0]} ${g.lid[3]} A${(g.lid[2] - g.lid[0]) / 2} 22 0 0 0 ${g.lid[2]} ${g.lid[3]} L${g.lid[2]} ${g.lid[1] + 12} Z`, shade(bc, -.08), 3) + `<rect x="139" y="${g.lid[1] + 12}" width="22" height="${g.lid[3] - g.lid[1] + 10}" fill="${rc}"/>` + E(150, g.lid[1] + 12, (g.lid[2] - g.lid[0]) / 2, 22, shade(bc, -.04), 3) + P(`M139 ${g.lid[1] - 9} L161 ${g.lid[1] - 9} L161 ${g.lid[1] + 34} L139 ${g.lid[1] + 34} Z`, rc, 0);
  }else if(g.heart){
    const hd = heartD(150, 312, 88), inside = (x, y) => { const u = (x - 150) / 88, v = -(y - 330) / 88; return (u * u + v * v - 1) ** 3 - u * u * v * v * v < 0; };
    s += P(hd, bc, 3) + giftPattern(L.giftPat, [l, t, r, b], pc, inside) + `<rect x="139" y="248" width="22" height="168" fill="${rc}"/><rect x="80" y="296" width="140" height="20" fill="${rc}"/>` + P(hd, "none", 3);
  }else if(g.bag){
    s += P(`M${l + 30} ${t} Q${l + 30} ${t - 60} 150 ${t - 60} Q${r - 30} ${t - 60} ${r - 30} ${t}`, "none", 7) + P(`M${l + 30} ${t} Q${l + 30} ${t - 60} 150 ${t - 60} Q${r - 30} ${t - 60} ${r - 30} ${t}`, "none", 3.6, `stroke="${rc}"`);
    s += P(`M${l + 20} ${t + 6} L${l + 40} ${t - 34} L${l + 70} ${t + 2} L${l + 100} ${t - 40} L${r - 30} ${t + 4} L${r - 10} ${t - 26} L${r - 8} ${t + 8} Z`, "#FFF4E0", 2.4);
    s += P(`M${l} ${t} L${r} ${t} L${r + 8} ${b} L${l - 8} ${b} Z`, bc, 3) + giftPattern(L.giftPat, g.front, pc) + P(`M${l} ${t} L${r} ${t} L${r + 8} ${b} L${l - 8} ${b} Z`, "none", 3) + LN(`M${l} ${t + 14} L${r} ${t + 14}`, 2, shade(bc, -.2));
  }else{
    s += P(`M${l} ${t} L${r} ${t} L${r} ${b} L${l} ${b} Z`, bc, 3) + giftPattern(L.giftPat, g.front, pc) + `<rect x="139" y="${t}" width="22" height="${b - t}" fill="${rc}"/>` + P(`M${l} ${t} L${r} ${t} L${r} ${b} L${l} ${b} Z`, "none", 3);
    s += P(`M${g.lid[0]} ${g.lid[1]} L${g.lid[2]} ${g.lid[1]} L${g.lid[2]} ${g.lid[3]} L${g.lid[0]} ${g.lid[3]} Z`, shade(bc, -.06), 3) + `<rect x="139" y="${g.lid[1]}" width="22" height="${g.lid[3] - g.lid[1]}" fill="${rc}"/>` + P(`M${g.lid[0]} ${g.lid[1]} L${g.lid[2]} ${g.lid[1]} L${g.lid[2]} ${g.lid[3]} L${g.lid[0]} ${g.lid[3]} Z`, "none", 3);
  }
  // 蝴蝶結
  const [bx, by] = g.top, bow = L.giftBow || "bow";
  if(bow === "bow") s += P(`M${bx} ${by} Q${bx - 50} ${by - 52} ${bx - 58} ${by - 14} Q${bx - 50} ${by + 10} ${bx} ${by} Z M${bx} ${by} Q${bx + 50} ${by - 52} ${bx + 58} ${by - 14} Q${bx + 50} ${by + 10} ${bx} ${by} Z`, rc, 3) +
    P(`M${bx - 6} ${by + 2} L${bx - 22} ${by + 40} L${bx - 10} ${by + 36} L${bx - 4} ${by + 46} Z M${bx + 6} ${by + 2} L${bx + 22} ${by + 40} L${bx + 10} ${by + 36} L${bx + 4} ${by + 46} Z`, rc, 2.6) + E(bx, by - 2, 11, 9, shade(rc, -.12), 2.6);
  else if(bow === "flower") s += Array.from({length:8}, (_, i) => { const a = i * Math.PI / 4; return E(bx + Math.cos(a) * 20, by - 18 + Math.sin(a) * 14, 16, 9, rc, 2.4, `transform="rotate(${i * 45} ${bx + Math.cos(a) * 20} ${by - 18 + Math.sin(a) * 14})"`); }).join("") + C(bx, by - 18, 10, shade(rc, -.12), 2.4);
  else if(bow === "curly") s += [-1, 1].map(o => LN(`M${bx} ${by} q${o * 20} -30 ${o * 6} -40 q${o * -14} -8 ${o * -4} 8 q${o * 16} 22 ${o * 34} 4 q${o * 12} -14 ${o * 2} -18`, 6) + LN(`M${bx} ${by} q${o * 20} -30 ${o * 6} -40 q${o * -14} -8 ${o * -4} 8 q${o * 16} 22 ${o * 34} 4 q${o * 12} -14 ${o * 2} -18`, 3.4, rc)).join("") + C(bx, by, 7, shade(rc, -.12), 2.2);
  if(has("tag")){ const t2 = L.giftText || "送給你", w = Math.max(70, textW(t2, 14)), x = r - 6, y = (g.lid ? g.lid[3] : t) + 34;
    s += LN(`M${bx + 4} ${by + 4} Q${x - 10} ${y - 30} ${x - w / 2 + 10} ${y - 2}`, 1.6) + P(`M${x - w / 2} ${y} L${x + w / 2} ${y} L${x + w / 2} ${y + 34} L${x - w / 2} ${y + 34} L${x - w / 2 - 12} ${y + 17} Z`, "#FFF8E6", 2.4) + C(x - w / 2 + 2, y + 17, 3, "none", 1.6) + TXTB(x + 4, y + 17, t2, 14, "#C2386F"); }
  if(has("sticker")) s += P(heartD(l + 30, b - 40, 12), "#fff", 2.4) + P(heartD(l + 30, b - 40, 8), "#E8679A", 0) + star(r - 30, b - 36, 12, "#FFE98A", 2.2);
  if(has("sparkle")) s += [[l - 14, t + 10, 14], [r + 16, t + 40, 10], [r + 6, b - 20, 12]].map(([x, y, rr]) => P(`M${x} ${y - rr} Q${x + rr * .18} ${y - rr * .18} ${x + rr} ${y} Q${x + rr * .18} ${y + rr * .18} ${x} ${y + rr} Q${x - rr * .18} ${y + rr * .18} ${x - rr} ${y} Q${x - rr * .18} ${y - rr * .18} ${x} ${y - rr} Z`, "#FFE98A", 2)).join("");
  if(has("confetti")) s += Array.from({length:22}, (_, i) => { const x = 30 + (i * 67) % 240, y = 120 + (i * 43) % 300, c = ["#E8679A", "#4C8FE0", "#F6D65A", "#5FB36B", "#F59A4A"][i % 5];
    return i % 3 ? `<rect x="${x}" y="${y}" width="9" height="4" rx="2" fill="${c}" transform="rotate(${(i * 53) % 180} ${x} ${y})"/>` : C(x, y, 3.4, c, 0); }).join("");
  return s;
}

// ---------- 靜物角色：卡片 ----------
ROLES.card = {name:"卡片"};
const CARD_SHAPES = {rect:{name:"直式卡片"}, round:{name:"圓角卡片"}, heart:{name:"愛心卡片"}, scallop:{name:"花邊卡片"}};
const CARD_DECO = {
  hearts:  {name:"愛心", tags:["party", "fancy"]},
  stars:   {name:"星星", tags:["party", "funny"]},
  flowers: {name:"小花", tags:["summer", "fancy"]},
  balloons:{name:"氣球", tags:["party"]},
  cake:    {name:"小蛋糕", tags:["party", "snack"]},
  bear:    {name:"小熊", tags:["animal", "funny"]},
  rainbow: {name:"彩虹", tags:["summer", "funny"]},
  confetti:{name:"彩色紙花", tags:["party"]},
  ribbon:  {name:"角落緞帶", tags:["fancy", "formal"]},
  stamp:   {name:"郵票", tags:["neat"]},
};
// 長的祝福文字照寬度自動換行（最多四行）
const wrapText = (t, n) => { const out = []; let cur = "", w = 0; for(const ch of [...t]){ const cw = ch.charCodeAt(0) > 255 ? 1 : .55; if(w + cw > n){ out.push(cur); cur = ""; w = 0; } cur += ch; w += cw; } if(cur) out.push(cur); return out.slice(0, 4); };
function drawCard(L){
  const pc = L.cardC || "#FFF4E6", ic = L.inkC || "#C2386F", deco = L.cardDeco || [], has = k => deco.includes(k), sh = L.cardShape || "rect";
  const l = 48, t = 130, r = 252, b = 418;
  const outline = sh === "heart" ? heartD(150, 270, 132) : sh === "round" ? `M${l + 30} ${t} L${r - 30} ${t} Q${r} ${t} ${r} ${t + 30} L${r} ${b - 30} Q${r} ${b} ${r - 30} ${b} L${l + 30} ${b} Q${l} ${b} ${l} ${b - 30} L${l} ${t + 30} Q${l} ${t} ${l + 30} ${t} Z`
    : sh === "scallop" ? `M${l} ${t}` + Array.from({length:8}, (_, i) => ` q12.75 -12 25.5 0`).join("") + Array.from({length:11}, () => ` q12 12.6 0 26.2`).join("") + Array.from({length:8}, () => ` q-12.75 12 -25.5 0`).join("") + Array.from({length:11}, () => ` q-12 -12.6 0 -26.2`).join("") + " Z"
    : `M${l} ${t} L${r} ${t} L${r} ${b} L${l} ${b} Z`;
  // 立起來的卡片：後面有一片打開的內頁，下面一個淡淡的影子
  let s = E(150, 430, 130, 12, "rgba(0,0,0,.12)", 0) + `<g transform="translate(18 -10) skewY(-4)">${P(outline, shade(pc, -.08), 3)}</g>` + P(outline, pc, 3.2);
  const inHeart = sh === "heart";
  s += inHeart ? P(heartD(150, 270, 114), "none", 2, `stroke="${ic}" stroke-dasharray="6 5" opacity=".7"`) : P(`M${l + 14} ${t + 14} L${r - 14} ${t + 14} L${r - 14} ${b - 14} L${l + 14} ${b - 14} Z`, "none", 2, `stroke="${ic}" stroke-dasharray="6 5" opacity=".7"`);
  if(has("rainbow")) s += ["#D9414E", "#F59A4A", "#F6D65A", "#5FB36B", "#4C8FE0"].map((c, i) => `<path d="M${96 + i * 8} ${inHeart ? 232 : 216} A${54 - i * 8} ${54 - i * 8} 0 0 1 ${204 - i * 8} ${inHeart ? 232 : 216}" fill="none" stroke="${c}" stroke-width="7"/>`).join("");
  if(has("ribbon") && !inHeart) s += [[l, t, 1, 1], [r, t, -1, 1]].map(([x, y, sx, sy]) => P(`M${x} ${y + 44 * sy} L${x + 44 * sx} ${y} L${x + 60 * sx} ${y} L${x} ${y + 60 * sy} Z`, "#E8679A", 2.4)).join("");
  if(has("stamp") && !inHeart) s += P(`M${r - 58} ${t + 22} L${r - 22} ${t + 22} L${r - 22} ${t + 64} L${r - 58} ${t + 64} Z`, "#fff", 2, `stroke-dasharray="3 2"`) + P(heartD(r - 40, t + 44, 8), "#E8679A", 0);
  // 標題和祝福文字
  const title = L.cardText || "生日快樂", msg = wrapText(L.cardMsg || "祝你天天開心！", inHeart ? 8 : 10);
  const ty = inHeart ? 268 : 250;
  s += TXTB(150, ty, title, title.length > 6 ? 22 : 30, ic) + msg.map((ln, i) => TXTB(150, ty + 40 + i * 24, ln, 17, shade(ic, -.2))).join("");
  if(has("hearts")) s += [[l + 34, b - 34], [r - 34, b - 40], [l + 40, inHeart ? 220 : t + 60]].map(([x, y], i) => P(heartD(x, y, 9 + i * 2), ["#E8679A", "#F7A8C4", "#D9414E"][i], 2)).join("");
  if(has("stars")) s += [[l + 30, t + 40, 9], [r - 30, t + 100, 7], [150, b - 26, 8], [r - 50, b - 70, 6]].map(([x, y, rr]) => star(x, y, rr, "#FFD447", 1.8)).join("");
  if(has("flowers")) s += [70, 110, 190, 230].filter(x => !inHeart || (x > 90 && x < 210)).map((x, i) => { const y = inHeart ? 360 : b - 30, c = ["#F7A8C4", "#C9B3E8", "#FFE98A", "#9BD0F5"][i];
    return LN(`M${x} ${y} L${x} ${y + 14}`, 2, "#4F8F45") + [0, 72, 144, 216, 288].map(a => C(x + Math.cos(a * Math.PI / 180) * 6, y + Math.sin(a * Math.PI / 180) * 6, 5.5, c, 1.4)).join("") + C(x, y, 3.4, "#F59A4A", 1); }).join("");
  if(has("balloons")) s += [[l + 22, t + 70, "#E8679A"], [l + 46, t + 50, "#4C8FE0"]].map(([x, y, c]) => LN(`M${x} ${y + 20} Q${x + 6} ${y + 50} ${x} ${y + 76}`, 1.2) + E(x, y, 14, 17, c, 2)).join("");
  if(has("cake")){ const x = inHeart ? 150 : r - 52, y = inHeart ? 196 : b - 30; s += P(`M${x - 22} ${y} L${x + 22} ${y} L${x + 22} ${y - 22} L${x - 22} ${y - 22} Z`, "#F7A8C4", 2) + P(`M${x - 22} ${y - 22} Q${x - 11} ${y - 14} ${x} ${y - 22} Q${x + 11} ${y - 14} ${x + 22} ${y - 22}`, "none", 2, `stroke="#fff"`) + `<rect x="${x - 2}" y="${y - 36}" width="4" height="14" fill="#9BD0F5" stroke="${INK}" stroke-width="1.2"/>` + P(`M${x} ${y - 44} Q${x + 4} ${y - 39} ${x} ${y - 36} Q${x - 4} ${y - 39} ${x} ${y - 44} Z`, "#F59A4A", 0); }
  if(has("bear")){ const x = inHeart ? 150 : l + 50, y = inHeart ? 352 : b - 46; s += C(x - 12, y - 18, 6, "#C98A4B", 1.8) + C(x + 12, y - 18, 6, "#C98A4B", 1.8) + C(x, y, 17, "#C98A4B", 2) + E(x, y + 5, 7, 5, "#F3D9B8", 0) + C(x - 6, y - 3, 1.8, INK, 0) + C(x + 6, y - 3, 1.8, INK, 0) + E(x, y + 3, 2, 1.4, INK, 0); }
  if(has("confetti")) s += Array.from({length:18}, (_, i) => { const x = l + 16 + (i * 61) % (r - l - 32), y = t + 16 + (i * 37) % 70, c = ["#E8679A", "#4C8FE0", "#F6D65A", "#5FB36B", "#F59A4A"][i % 5];
    return `<rect x="${x}" y="${y}" width="8" height="3.4" rx="1.7" fill="${c}" transform="rotate(${(i * 53) % 180} ${x} ${y})"/>`; }).join("");
  return s;
}

// ---------- 組合成一個角色 ----------
let UID = 0;
// opt：bg 要不要畫背景、vb 只看某一塊（小圖用）
function drawLook(L, opt = {}){
  POSE = POSES[L.pose] ? L.pose : "down";
  const handsFree = POSE !== "behind";   // 手背在後面時，手上的東西和手提包先收起來（揮手時手提包也收起來）
  const uid = "u" + (UID++), defs = [];
  // 衣服的填色：素色就是顏色，有花紋就是 pattern
  const fill = (slot, v) => {
    if(!v) return "#fff";
    if(!v.pat || v.pat === "none") return v.color;
    const id = `${uid}-${slot}`; defs.push(patDef(id, v.pat, v.color)); return `url(#${id})`;
  };
  const fillOf = {};
  const item = (cat, slot) => { const v = L[slot]; if(!v || !cat[v.id]) return ""; const it = cat[v.id];
    let f = fill(slot, v); fillOf[slot] = f;
    if(it.stripe){ const id = `${uid}-${slot}s`; defs.push(patDef(id, "stripes", v.color).replace('width="10" height="10"', 'width="10" height="10" patternTransform="rotate(90)"')); f = `url(#${id})`; }
    return it.draw(f, v.color); };
  const itemS = (cat, slot) => shaded(item(cat, slot));   // 加上明暗的單品
  const skin = SKIN[L.skin] || SKIN[0];
  const sh = (id, a, b) => `<linearGradient id="${uid}-${id}" gradientUnits="userSpaceOnUse" x1="96" y1="0" x2="206" y2="0"><stop offset="0" stop-color="#fff" stop-opacity="${a}"/><stop offset=".38" stop-color="#fff" stop-opacity="0"/><stop offset=".6" stop-color="#2B1D16" stop-opacity="0"/><stop offset="1" stop-color="#2B1D16" stop-opacity="${b}"/></linearGradient>`;
  defs.push(sh("sh", .26, .22), sh("sk", .14, .13), sh("hf", .06, .18), `<radialGradient id="${uid}-gl"><stop offset="0" stop-color="#fff" stop-opacity=".32"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></radialGradient>`,
    `<linearGradient id="${uid}-hv" gradientUnits="userSpaceOnUse" x1="0" y1="120" x2="0" y2="310"><stop offset="0" stop-color="#2B1D16" stop-opacity="0"/><stop offset="1" stop-color="#2B1D16" stop-opacity=".3"/></linearGradient>`);
  let nClip = 0;
  const clip = svg => { const id = `${uid}-k${nClip++}`; defs.push(`<clipPath id="${id}">${svg}</clipPath>`); return id; };
  const overlay = (svg, grad) => `<rect width="${W}" height="${H}" fill="url(#${uid}-${grad})" clip-path="url(#${clip(svg)})"/>`;
  const shaded = (svg, grad = "sh") => svg ? svg + overlay(svg, grad) : "";
  let s = "";
  if(opt.bg !== false){ const b = BGS[L.bg] || BGS.room; s += b.draw(L.bgC || "#F7D3E0"); }
  s += E(150, 448, 62, 9, "rgba(58,42,32,.18)", 0);
  const vb = opt.vb || `0 0 ${W} ${H}`;
  const out = () => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${vb}"${opt.size ? ` width="${opt.size[0]}" height="${opt.size[1]}"` : ""}><defs>${defs.join("")}</defs>${s}</svg>`;
  // 寵物角色：身體和臉另外畫，脖子以上的配件和人共用
  // 靜物角色：蛋糕、禮物盒、卡片
  const STILL = {cake:drawCake, gift:drawGift, card:drawCard};
  if(STILL[L.role]){ s += STILL[L.role](L); if(L.pet && PETS[L.pet]) s += drawPet(L.pet); return out(); }
  if(L.role === "pet"){
    const wear = L.petwear && PETWEAR[L.petwear.id], wf = wear ? fill("petwear", L.petwear) : "";
    const shp = petShape(L), fit = svg => `<g transform="${petWearFit(shp)}">${svg}</g>`;
    const clipTo = d => svg => svg ? `<g clip-path="url(#${clip(`<path d="${d}"/>`)})">${svg}</g>` : "", inBody = clipTo(shp.body);
    const free = wear && wear.free;   // 蓬蓬裙、花圈要蓬出身體外面，不裁
    const toy = L.pettoy && PETTOYS[L.pettoy.id];
    s += `<g transform="${PET_FIT}">`;
    defs.push(`<linearGradient id="${uid}-fd" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity="0"/><stop offset="1" stop-color="#fff"/></linearGradient>`);
    // 淡入遮罩：y0 以上看不到、y1 以下完整
    const fade = (svg, y0 = 270, y1 = 296) => { const id = `${uid}-fm${nClip++}`;
      defs.push(`<mask id="${id}" maskUnits="userSpaceOnUse" x="0" y="0" width="${W}" height="${H}"><rect x="0" y="${y0}" width="${W}" height="${y1 - y0}" fill="url(#${uid}-fd)"/><rect x="0" y="${y1 - .5}" width="${W}" height="${H}" fill="#fff"/></mask>`);
      return `<g mask="url(#${id})">${svg}</g>`; };
    s += drawPetStar(L, {
      inBody, fade, clipTo,
      back:() => wear && wear.back ? fit(shaded(wear.back(wf, L.petwear.color))) : "",
      inHead:clipTo(shp.head),
      toy:(y, k) => toy ? `<g transform="translate(150 ${y}) scale(${k}) translate(-150 -296)">${shaded(toy.draw(fill("pettoy", L.pettoy), L.pettoy.color))}</g>` : "",   // 玩具放大一點，下半部讓前腳抱著
      wear:() => wear ? (free ? fit(shaded(wear.draw(wf, L.petwear.color))) : inBody(fit(shaded(wear.draw(wf, L.petwear.color)))) + P(shp.body, "none", 2.8)) + (wear.over ? fit(shaded(wear.over(wf, L.petwear.color))) : "") : "",
      bodyShade:() => overlay(`<path d="${shp.body}"/>`, "sk"),
      headShade:() => overlay(`<path d="${shp.head}"/>`, "sk"),
    });
    s += item(NECKS, "neck") + itemS(SCARVES, "scarf") + item(GLASSES, "glasses") + item(HAIRPINS, "hairpin") + itemS(HATS, "hat") + "</g>";
    if(L.pet && PETS[L.pet]) s += drawPet(L.pet);
    return out();
  }
  // 後面的頭髮
  // 戴了整個包住頭頂的帽子，丸子頭的髮髻就藏在帽子裡
  const fullHat = L.hat && ["beret", "straw", "beanie", "cap", "witch", "santa", "bucket", "backcap", "fedora"].includes(L.hat.id);
  const backHair = (HAIRB[L.hairB] || HAIRB.long).draw(L.hairC, fullHat);
  s += shaded(backHair, "hv");
  if(L.hairTip){
    defs.push(`<linearGradient id="${uid}-tip" gradientUnits="userSpaceOnUse" x1="0" y1="160" x2="0" y2="300"><stop offset="0" stop-color="${L.hairTip}" stop-opacity="0"/><stop offset=".5" stop-color="${L.hairTip}" stop-opacity=".75"/><stop offset="1" stop-color="${L.hairTip}" stop-opacity=".95"/></linearGradient>`);
    s += overlay(backHair, "tip");
  }
  // 背在背上的東西（書包的袋子）：在頭髮前面、身體後面
  if(L.bag && BAGS[L.bag.id] && BAGS[L.bag.id].back) s += shaded(BAGS[L.bag.id].back(fill("bagback", L.bag), L.bag.color));
  // 身體：全部合成一塊描邊（先畫粗的墨線，再蓋上膚色），接縫不會有線
  const arm = POSE === "behind" ? ARM_BEHIND : ARM_SHAPE;
  const leftArm = POSE === "wave" ? [ARM_WAVE] : POSE === "peace" ? bent(PEACE_ARM, 13) : [arm];
  const parts = [BODY, ...leftArm, MX(arm), LEG_SHAPE, MX(LEG_SHAPE)];
  s += parts.map(d => `<path d="${d}" fill="${skin}" stroke="${INK}" stroke-width="5.4" stroke-linejoin="round"/>`).join("") + parts.map(d => `<path d="${d}" fill="${skin}"/>`).join("");
  const bodyClip = clip(parts.map(d => `<path d="${d}"/>`).join(""));
  s += `<rect width="${W}" height="${H}" fill="url(#${uid}-sk)" clip-path="url(#${bodyClip})"/>` + `<ellipse cx="150" cy="197" rx="20" ry="9" fill="#2B1D16" opacity=".1" clip-path="url(#${bodyClip})"/>`;
  const chin = (FACES[L.faceShape] || FACES.round).chin;
  s += LN(`M143 ${chin + 4} Q150 ${chin + 8} 157 ${chin + 4}`, 2, shade(skin, -.14));   // 下巴下面淡淡的影子
  // 襪子、鞋子
  s += item(SOCKS, "socks");
  const shoe = L.shoes && SHOES[L.shoes.id];
  if(!shoe || shoe.bare) s += E(133, 437, 11, 8, skin) + E(167, 437, 11, 8, skin);
  s += itemS(SHOES, "shoes");
  // 打底的小背心和短褲（不會露出不雅的地方）
  s += P("M113 234 Q150 244 187 234 L186.5 302 Q150 308 113.5 302 Z", "#F6F2EA", 2.2) + P("M117 292 L183 292 L185 326 L153 326 L150 318 L147 326 L115 326 Z", "#F6F2EA", 2.2);
  const dress = L.dress && DRESSES[L.dress.id];
  if(!dress) s += itemS(BOTTOMS, "bottom");
  if(!dress || dress.overTop) s += itemS(TOPS, "top");   // 吊帶裙露出裡面的上衣，下身被裙子蓋住
  if(dress) s += itemS(DRESSES, "dress");
  s += itemS(OUTERS, "outer");
  s += item(NECKS, "neck");
  s += itemS(SCARVES, "scarf");
  if(L.bag && L.bag.id !== "handbag") s += itemS(BAGS, "bag");
  // 比 YA：前臂擋在衣服和背帶前面（長袖就是袖子、短袖或無袖就是手臂）
  if(POSE === "peace"){
    const dressOn = L.dress && DRESSES[L.dress.id];
    const cover = [["outer", OUTERS], ["dress", DRESSES], ["top", TOPS]].find(([k, cat]) => L[k] && cat[L[k].id] && cat[L[k].id].long && (k !== "top" || !dressOn || dressOn.overTop));
    const fore = [PEACE_ARM[1], PEACE_ARM[2]];
    if(cover) s += U([tube(fore, cover[0] === "top" ? 19 : 22)], fillOf[cover[0]]) + overlay(`<path d="${tube(fore, 22)}"/>`, "sh") + LN("M98 230 L112 244", 1.6);
    else s += U([tube(fore, 13)], skin) + overlay(`<path d="${tube(fore, 13)}"/>`, "sk");
  }

  // 手（跟手臂一樣有明暗）；手提包先畫，手再握在提把上
  if(POSE === "down" && L.bag && L.bag.id === "handbag") s += itemS(BAGS, "bag");
  const hand = d => `<path d="${d} Z" fill="${skin}"/>` + overlay(`<path d="${d} Z"/>`, "sk") + LN(d, 2.6);
  if(POSE === "peace") s += hand(MX(HAND));
  else if(POSE === "wave") s += hand(HAND_WAVE) + LN("M50 138 Q46 146 50 154 M56 124 Q52 128 52 134", 1.8, INK, `opacity=".6"`) + hand(MX(HAND));
  else if(handsFree) s += hand(HAND) + hand(MX(HAND));
  // 頭
  s += C(93, 142, 10, skin) + C(207, 142, 10, skin);
  const face = FACES[L.faceShape] || FACES.round;
  s += P(face.d, skin, 2.8);
  const hb = HAIRB[L.hairB] || HAIRB.long;
  const hf = HAIRF[L.hairF] || HAIRF.blunt, // 揮手時，揮手那一側臉旁的髮絲改短，舉起來的手臂才不會被頭髮蓋住
  front = [CROWN + hf.d, ...(hb.side ? [POSE === "wave" || POSE === "peace" ? shortLock(hf.cl) : sideLock(hf.cl), MX(sideLock(hf.cr))] : hb.crop ? [tinyLock(hf.cl), MX(tinyLock(hf.cr))] : [shortLock(hf.cl), MX(shortLock(hf.cr))])];
  const faceClip = clip(`<path d="${face.d}"/>`);
  s += `<rect width="${W}" height="${H}" fill="url(#${uid}-sk)" clip-path="url(#${faceClip})"/>`;
  s += `<g clip-path="url(#${faceClip})"><path d="${front[0]}" transform="translate(0 6)" fill="#2B1D16" opacity=".13"/></g>`;
  // 妝容和五官
  // 腮紅：中間濃、往外暈開，加三條斜斜的害羞線
  if(L.blush){
    defs.push(`<radialGradient id="${uid}-bl"><stop offset="0" stop-color="${L.blush}" stop-opacity=".75"/><stop offset=".55" stop-color="${L.blush}" stop-opacity=".4"/><stop offset="1" stop-color="${L.blush}" stop-opacity="0"/></radialGradient>`);
    s += [117, 183].map(x => E(x, 160, 17, 11, `url(#${uid}-bl)`, 0) + LN(`M${x - 6} 163 L${x - 3} 157 M${x - 1} 163 L${x + 2} 157 M${x + 4} 163 L${x + 7} 157`, 1.2, shade(L.blush, -.25), `opacity=".55"`)).join("");
  }
  if(L.freckles) s += [[112, 154], [118, 158], [114, 162], [186, 154], [182, 158], [188, 162]].map(([x, y]) => C(x, y, 1.4, shade(skin, -.4), 0)).join("");
  // 眼影：貼著上眼線的月牙形，靠近睫毛最濃，往眉毛慢慢變淡（眼睛畫在上面）
  if(L.shadow){
    defs.push(`<radialGradient id="${uid}-es" cx=".5" cy=".95" r=".8"><stop offset=".3" stop-color="${L.shadow}" stop-opacity="1"/><stop offset=".7" stop-color="${L.shadow}" stop-opacity=".55"/><stop offset="1" stop-color="${L.shadow}" stop-opacity="0"/></radialGradient>`);
    const lid = (x, right) => {
      const y = EYE_Y, closed = L.eyes === "smile" || L.eyes === "squint" || (L.eyes === "wink" && right);
      if(closed) return `M${x - 13} ${y + 4} Q${x} ${y - 25} ${x + 13} ${y + 4} Q${x} ${y - 9} ${x - 13} ${y + 4} Z`;
      if(L.eyes === "sleepy") return `M${x - 12} ${y + 1} Q${x} ${y - 15} ${x + 12} ${y + 1} Q${x} ${y + 7} ${x - 12} ${y + 1} Z`;
      return `M${x - 15} ${y + 3} Q${x - 15} ${y - 19} ${x} ${y - 19} Q${x + 15} ${y - 19} ${x + 15} ${y + 3} Q${x} ${y - 9} ${x - 15} ${y + 3} Z`;
    };
    s += EYE_X.map((x, i) => `<path d="${lid(x, i === 1)}" fill="url(#${uid}-es)"/>`).join("");
  }
  const fun = Array.isArray(L.fun) ? L.fun : [];
  if(fun.includes("eyebags")) s += EYE_X.map(x => E(x, 153, 11, 4.5, "#6E5A80", 0, `opacity=".3"`)).join("");
  s += EYE_X.map((x, i) => drawEye(L.eyes, x, EYE_OLD[L.eyeC] || L.eyeC, i === 1, skin)).join("");
  if(L.eyeliner && LINERS[L.eyeliner] && OPEN_EYES.includes(L.eyes)) s += EYE_X.map((x, i) => drawLiner(L.eyeliner, x, i === 1)).join("");
  if(L.glitter) s += EYE_X.map((x, i) => { const o = i ? 1 : -1; return star(x + 7 * o, 153, 2.6, "#FFF3A8", .8) + star(x + 12 * o, 149, 1.8, "#FFFFFF", .6) + star(x + 2 * o, 156, 1.6, "#FFD6F0", .6); }).join("");
  s += EYE_X.map((x, i) => LN((BROWS[L.brows] || BROWS.soft).d(x, i === 1), 2.8, shade(L.hairC, -.25))).join("");
  if(fun.includes("unibrow")) s += LN("M116 116 Q133 109 150 113 Q167 109 184 116", 5.5, shade(L.hairC, -.25));
  s += fun.includes("pig") ? E(150, 153, 7, 5, "#F7A8B8", 2) + E(147.5, 153, 1.4, 2.2, "#B85C6E", 0) + E(152.5, 153, 1.4, 2.2, "#B85C6E", 0) : drawNose(L.nose, skin);
  s += drawMouth(L.mouth, L.lip);
  // 唇蜜：嘴巴上一點亮光
  if(L.gloss) s += ["grin", "pout", "wow", "wail"].includes(L.mouth) ? E(146, 166, 2.2, 1.2, "#fff", 0, `opacity=".85"`) : E(147, 166.5, 2, .9, "#fff", 0, `opacity=".9"`);
  if(fun.includes("mustache")) s += P("M150 160 Q142 154 134 158 Q128 163 132 166 Q136 160 142 162 Q147 164 150 162 Q153 164 158 162 Q164 160 168 166 Q172 163 166 158 Q158 154 150 160 Z", "#3A2C28", 1.4);
  if(fun.includes("snot")) s += LN("M152 157 L153 162", 2.2, "#BFE6FA") + C(155, 162, 6, "rgba(191,230,250,.65)", 1.6) + C(153, 160, 1.6, "#fff", 0);
  if(fun.includes("dirt")) s += [[116, 170, 7, 4], [182, 142, 5, 3], [124, 150, 3, 2]].map(([x, y, rx, ry]) => E(x, y, rx, ry, "#8A6A4A", 0, `opacity=".45"`)).join("");
  if(fun.includes("bandaid")) s += `<g transform="rotate(-25 120 170)">${P("M108 166 L132 166 Q136 170 132 174 L108 174 Q104 170 108 166 Z", "#F2C49A", 1.6)}${P("M115 166 L125 166 L125 174 L115 174 Z", "#FBE3C8", 1)}${[[117.5, 168.5], [122.5, 168.5], [117.5, 171.5], [122.5, 171.5]].map(([x, y]) => C(x, y, .6, "#C89A70", 0)).join("")}</g>`;
  if(L.sticker === "heart") s += P(heartD(179, 167, 5), "#E8679A", 1.4);
  else if(L.sticker === "star") s += star(179, 167, 6, "#F6D65A", 1.4);
  else if(L.sticker === "tear") s += C(178, 150, 1.8, INK, 0);
  else if(L.sticker === "moon") s += P("M181 159 A8 8 0 1 0 181 175 A10 10 0 0 1 181 159 Z", "#F6D65A", 1.4);
  else if(L.sticker === "strawberry") s += P("M173 163 Q179 160 185 163 Q185 172 179 176 Q173 172 173 163 Z", "#E8414E", 1.3) + P("M174 163 L177 159 L179 162 L181 159 L184 163 Z", "#4FA36B", 1) + [[176, 166], [181, 166], [178.5, 170], [176.5, 171]].map(([x, y]) => C(x, y, .6, "#FFE98A", 0)).join("");
  else if(L.sticker === "paw") s += E(179, 170, 4.2, 3.4, "#F7A8C4", 1) + [[174.5, 165.5], [177.5, 163.5], [180.5, 163.5], [183.5, 165.5]].map(([x, y]) => C(x, y, 1.6, "#F7A8C4", .8)).join("");
  else if(L.sticker === "bow") s += P("M179 167 L172 162 L172 172 Z M179 167 L186 162 L186 172 Z", "#E8679A", 1.2) + C(179, 167, 2, "#E8679A", 1.2);
  else if(L.sticker === "note") s += LN("M182 160 L182 171 M182 160 L186 162", 1.6) + E(179.5, 171, 2.6, 2, INK, 0);
  else if(L.sticker === "snow") s += [0, 1, 2].map(i => { const a = i * Math.PI / 3; return LN(`M${(179 - Math.cos(a) * 6).toFixed(1)} ${(167 - Math.sin(a) * 6).toFixed(1)} L${(179 + Math.cos(a) * 6).toFixed(1)} ${(167 + Math.sin(a) * 6).toFixed(1)}`, 1.6, "#6FB8FF"); }).join("") + C(179, 167, 1.3, "#fff", 0);
  else if(L.sticker === "clover") s += [[176.5, 164.5], [181.5, 164.5], [176.5, 169.5], [181.5, 169.5]].map(([x, y]) => C(x, y, 2.8, "#4FA36B", .9)).join("") + LN("M180 169 Q182 174 184 175", 1.2, "#3E7A4A");
  else if(L.sticker === "cat") s += P("M173 170 L173 161 L176.5 164 L181.5 164 L185 161 L185 170 Q179 175 173 170 Z", "#F6A64A", 1.2) + C(176.5, 167, .8, INK, 0) + C(181.5, 167, .8, INK, 0);
  else if(L.sticker === "sparkle") s += star(178, 168, 4, "#FFF3A8", .9) + star(184, 162, 2.6, "#FFF3A8", .7) + star(184, 173, 2, "#FFFFFF", .6);
  else if(L.sticker === "flower") s += [0, 1, 2, 3, 4].map(i => { const a = i * Math.PI * 2 / 5; return C(+(179 + Math.cos(a) * 4).toFixed(1), +(167 + Math.sin(a) * 4).toFixed(1), 3, "#F7A8C4", 1); }).join("") + C(179, 167, 2.2, "#F6D65A", .8);
  else if(L.sticker === "rainbow") s += ["#FF6B6B", "#FFD447", "#6FB8FF"].map((col, i) => LN(`M${171 + i * 2} 171 A${8 - i * 2} ${8 - i * 2} 0 0 1 ${187 - i * 2} 171`, 2.4, col)).join("");
  else if(L.sticker === "bolt") s += P("M181 158 L174 168 L179 168 L176 177 L185 165 L180 165 L183 158 Z", "#F6D65A", 1.3);
  // 前面的頭髮
  s += front.map(d => `<path d="${d}" fill="${L.hairC}" stroke="${INK}" stroke-width="5.6" stroke-linejoin="round"/>`).join("");
  s += front.map(d => `<path d="${d}" fill="${L.hairC}"/>`).join("");
  if(hf.lines) s += LN(hf.lines, 1.8, strand(L.hairC), `opacity=".8"`);
  if(hb.front) s += hb.front(L.hairC);
  // 比 YA 的手：畫在頭髮前面（食指和中指比 V，其他手指收在手心）
  if(POSE === "peace"){
    // 手心朝前：兩根手指張開比 V，大拇指壓住收起來的手指；外框用比皮膚深一點的顏色，看起來比較柔和
    const line = shade(skin, -.5), crease = shade(skin, -.3);
    const parts = [
      "M101 211 C100 201 105 196 112 196 C120 196 125 201 124 210 C123 219 118 225 111 225 C104 225 101 219 101 211 Z",
      tube([[107, 200], [98, 176]], 9), tube([[117, 199], [125, 176]], 9)];
    s += parts.map(d => `<path d="${d}" fill="${skin}" stroke="${line}" stroke-width="4.4" stroke-linejoin="round"/>`).join("") + parts.map(d => `<path d="${d}" fill="${skin}"/>`).join("");
    s += overlay(parts.map(d => `<path d="${d}"/>`).join(""), "sk");
    // 大拇指從靠臉的那一側（右邊）橫過來，收起來的無名指、小指在外側（左邊）
    s += LN("M123 208 Q115 203 106 207", 2, line) + LN("M111 213 Q107 216 103 212 M113 219 Q109 221 105 218", 1.4, crease) + LN("M112 199 L112 192", 1.2, crease);
  }
  // 漫畫符號：浮在頭髮上面
  if(fun.includes("anger")) s += `<g transform="translate(196 96)">${["M-7 -3 Q-3 -3 -3 -7", "M3 -7 Q3 -3 7 -3", "M7 3 Q3 3 3 7", "M-3 7 Q-3 3 -7 3"].map(d => LN(d, 5.5, "#fff") + LN(d, 3, "#E0303E")).join("")}</g>`;
  if(fun.includes("sweat")) s += P("M206 98 Q214 112 208 118 Q200 120 200 112 Q201 106 206 98 Z", "#9BD0F5", 2) + E(204, 110, 1.5, 2.5, "#fff", 0);
  const hairClip = clip(front.map(d => `<path d="${d}"/>`).join(""));
  s += `<g clip-path="url(#${hairClip})"><rect width="${W}" height="${H}" fill="url(#${uid}-hf)"/>${L.hairTip ? `<rect width="${W}" height="${H}" fill="url(#${uid}-tip)"/>` : ""}<ellipse cx="128" cy="74" rx="34" ry="16" transform="rotate(-14 128 74)" fill="url(#${uid}-gl)"/></g>`;
  // 頭上、臉上的配件
  s += item(GLASSES, "glasses");
  s += item(HAIRPINS, "hairpin");
  s += itemS(HATS, "hat");
  if(handsFree) s += item(HANDS, "hand");
  // 握著握把的東西（雨傘、氣球、扇子⋯⋯）：手要蓋在握把上面
  if(handsFree && L.hand && HANDS[L.hand.id] && HANDS[L.hand.id].grip) s += hand(MX(HAND));
  if(L.pet && PETS[L.pet]) s += drawPet(L.pet);
  return out();
}
