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
const EYE_PAL = ["#5A3A2A", "#2B2523", "#4C8FE0", "#4FA36B", "#7E5BC2", "#D9414E", "#C99A3A", "#E8679A"];
const SKIN = ["#FFE6D6", "#F8D2B8", "#EBBB97", "#C98E68", "#9A6646"];
const BLUSH = ["#FF9AAE", "#FFB38A", "#F27BA0", "#E8A0D6"];
const LIPS = ["#E8667A", "#D9414E", "#F59A8A", "#C2475E", "#E8679A"];
const SHADOW = ["#F7A8C4", "#B9A3E8", "#9BD0F5", "#F6C27A", "#9ADBC0"];
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
const SLV_L = (f, w = 26) => { const k = (w - 24) / 2; return PB(`M${113 - k} 218 C${101 - k} 242 ${93 - k} 272 ${91 - k} 305 L${111 + k * .4} 305 C${113 + k * .4} 282 119 258 129 234 Z`, f) + PB(`M${91.5 - k} 298 L${111 + k * .4} 298`, "none", 1.6); };
const SLV_S = (f, w = 26) => { const k = (w - 26) / 2; return PB(`M${113 - k} 216 C${105 - k} 228 ${99 - k} 242 ${98 - k} 254 L121 258 C122 248 125 238 130 230 Z`, f); };
const TORSO = "M114 224 Q117 210 150 207 Q183 210 186 224 L184 300 Q150 306 116 300 Z";

// ---------- 上衣 ----------
const TOPS = {
  tee:     {name:"T 恤", tags:["casual", "summer", "sport", "snack"], color:"#FFFFFF",
    draw:(f, c) => SLV_S(f, 26) + P(TORSO, f) + LN("M137 211 Q150 222 163 211")},
  shirt:   {name:"襯衫", tags:["school", "neat", "formal"], color:"#FFFFFF",
    draw:(f, c) => SLV_L(f, 24) + P(TORSO, f) + LN("M150 216 L150 302", 1.8) + [232, 254, 276].map(y => C(153, y, 2, shade(c, -.3), 0)).join("") + PB("M150 217 L134 206 L128 222 Z", f)},
  hoodie:  {name:"帽 T", tags:["casual", "warm", "sport"], color:"#B9A3E8",
    draw:(f, c) => SLV_L(f, 27) + P("M118 216 Q150 194 182 216 Q150 232 118 216 Z", shade(c, -.15)) + P(TORSO, f) + P("M128 266 L172 266 L177 294 L123 294 Z", f, 2.2) + LN("M142 220 L140 248", 1.8) + LN("M158 220 L160 248", 1.8) + C(140, 250, 2.2, "#fff", 1.4) + C(160, 250, 2.2, "#fff", 1.4)},
  cami:    {name:"細肩帶背心", tags:["summer", "beach", "party"], color:"#F7A8C4",
    draw:(f, c) => LN("M127 228 L129 208", 2.6) + LN("M173 228 L171 208", 2.6) + P("M120 230 Q150 240 180 230 L184 300 Q150 306 116 300 Z", f)},
  sweater: {name:"毛衣", tags:["warm", "winter", "casual"], color:"#F6D65A",
    draw:(f, c) => SLV_L(f, 28) + P(TORSO, f) + P("M116 290 Q150 296 184 290 L184 302 Q150 308 116 302 Z", shade(c, -.1), 2.2) + LN("M136 209 Q150 222 164 209", 3, shade(c, -.25)) + [126, 138, 150, 162, 174].map(x => LN(`M${x} 292 L${x} 302`, 1.4, shade(c, -.3))).join("")},
  sailor:  {name:"水手服", tags:["school", "neat"], color:"#FFFFFF",
    draw:(f, c) => SLV_L(f, 24) + P(TORSO, f) + P("M126 211 L150 248 L174 211 L187 224 L185 236 L150 256 L115 236 L113 224 Z", "#2C3E70") + LN("M118 230 L150 249 L182 230", 1.6, "#fff") + P("M150 252 L136 244 L136 262 Z M150 252 L164 244 L164 262 Z", "#D9414E", 2) + P("M150 252 L142 280 L150 274 L158 280 Z", "#D9414E", 2)},
  jersey:  {name:"運動服", tags:["sport"], color:"#4C8FE0",
    draw:(f, c) => SLV_S(f, 26) + P(TORSO, f) + P("M138 209 L150 226 L162 209", "none", 2.6) + `<text x="150" y="276" text-anchor="middle" font-size="30" font-weight="900" fill="#fff" stroke="${INK}" stroke-width="1.6" font-family="system-ui,sans-serif">7</text>` + LN("M117 236 L116 298", 4, "#fff") + LN("M183 236 L184 298", 4, "#fff")},
  crop:    {name:"短版上衣", tags:["summer", "casual", "party"], color:"#9ADBC0",
    draw:(f, c) => SLV_S(f, 26) + P("M114 224 Q117 210 150 207 Q183 210 186 224 L185 266 Q150 274 115 266 Z", f) + LN("M138 211 Q150 220 162 211")},
};
// ---------- 下身 ----------
const BOTTOMS = {
  pleat:  {name:"百褶裙", tags:["school", "neat"], color:"#2C3E70",
    draw:(f, c) => P("M118 290 L182 290 L196 348 L104 348 Z", f) + [[134, 126], [142, 138], [150, 150], [158, 162], [166, 174]].map(([a, b]) => LN(`M${a} 292 L${b} 346`, 1.6, shade(c, -.35))).join("")},
  mini:   {name:"A 字短裙", tags:["casual", "party", "summer"], color:"#F7A8C4",
    draw:(f, c) => P("M118 290 L182 290 L192 336 Q150 342 108 336 Z", f) + LN("M118 297 L182 297", 1.6)},
  jeans:  {name:"牛仔褲", tags:["casual", "snack"], color:"#4C8FE0",
    draw:(f, c) => TUBES("M137 312 L135.2 424", 27, f) + P("M117 290 L183 290 L185 330 Q150 336 115 330 Z", f) + LN("M150 300 L150 332", 1.6) + LN("M125 298 Q132 306 140 300", 1.4, shade(c, -.35))},
  shorts: {name:"短褲", tags:["summer", "beach", "sport", "snack"], color:"#D9B99B",
    draw:(f, c) => P("M117 290 L183 290 L187 344 L154 344 L150 324 L146 344 L113 344 Z", f) + LN("M117 297 L183 297", 1.6)},
  track:  {name:"運動褲", tags:["sport"], color:"#2C3E70",
    draw:(f, c) => TUBES("M137 312 L135.2 424", 27, f) + P("M117 290 L183 290 L185 330 Q150 336 115 330 Z", f) + LN("M124 300 L122 424", 3.4, "#fff") + LN("M176 300 L178 424", 3.4, "#fff")},
  maxi:   {name:"長裙", tags:["summer", "neat"], color:"#9ADBC0",
    draw:(f, c) => P("M118 290 L182 290 L202 412 Q150 420 98 412 Z", f) + LN("M120 300 L180 300", 1.6)},
};
// ---------- 洋裝（穿了會蓋過上衣和下身；overTop：吊帶裙要露出裡面的上衣） ----------
const DRESSES = {
  sundress: {name:"夏日洋裝", tags:["summer", "beach", "casual"], color:"#F6D65A",
    draw:(f, c) => LN("M128 230 L130 208", 2.6) + LN("M172 230 L170 208", 2.6) + P("M120 230 Q150 240 180 230 L182 290 L200 358 Q150 366 100 358 L118 290 Z", f) + LN("M118 290 Q150 296 182 290", 2.4, shade(c, -.3))},
  gown:     {name:"舞會禮服", tags:["party", "formal"], color:"#B9A3E8",
    draw:(f, c) => C(118, 222, 13, f) + C(182, 222, 13, f) + P("M118 226 Q150 236 182 226 L182 288 Q228 380 240 440 Q215 452 195 444 Q172 456 150 446 Q128 456 105 444 Q85 452 60 440 Q72 380 118 288 Z", f) + LN("M118 288 Q150 296 182 288", 2.4) + [[150, 320], [124, 380], [176, 380], [100, 420], [200, 420]].map(([x, y]) => star(x, y, 5, "#fff", 1.2)).join("")},
  yukata:   {name:"浴衣", tags:["festival", "summer"], color:"#9BD0F5",
    draw:(f, c) => PB("M120 218 L98 230 L86 302 L112 302 L124 240 Z", f) + P("M114 222 Q150 206 186 222 L190 422 L110 422 Z", f) + P("M140 208 L160 268", "none", 2.4) + P("M160 208 L150 232", "none", 2.4) + P("M114 268 L186 268 L186 296 L114 296 Z", "#F2C14E") + P("M150 282 L136 302 L150 296 L164 302 Z", "#E8679A", 2)},
  qipao:    {name:"旗袍", tags:["party", "formal"], color:"#D9414E",
    draw:(f, c) => SLV_S(f, 25) + P("M114 224 Q117 210 150 207 Q183 210 186 224 L184 300 Q190 360 186 404 L162 404 L160 370 L156 404 L114 404 Q110 360 116 300 Z", f) + P("M138 208 L138 200 L162 200 L162 208", f, 2.2) + LN("M150 212 Q170 222 182 238", 2, "#F6D65A") + [226, 244].map(y => LN(`M172 ${y} L182 ${y}`, 2.4, "#F6D65A")).join("")},
  pinafore: {name:"吊帶裙", tags:["school", "casual", "neat"], color:"#8A5A3C", overTop:true,
    draw:(f, c) => LN("M130 210 L134 250", 4) + LN("M170 210 L166 250", 4) + LN("M130 210 L134 250", 2.4, c) + LN("M170 210 L166 250", 2.4, c) + P("M132 246 L168 246 L170 290 L194 350 L106 350 L130 290 Z", f) + C(134, 252, 2.6, "#F6D65A", 1.4) + C(166, 252, 2.6, "#F6D65A", 1.4)},
};
// ---------- 外套 ----------
const OUTER_PANEL = "M114 224 Q117 210 140 208 L144 304 L114 304 Z";
const OUTERS = {
  jacket:   {name:"夾克", tags:["casual", "warm"], color:"#4FA36B",
    draw:(f, c) => SLV_L(f, 29) + PB(OUTER_PANEL, f) + PB("M140 208 L132 230 L144 238", "none", 2.2) + PB("M118 296 L142 296", "none", 2)},
  coat:     {name:"長大衣", tags:["winter", "warm", "neat"], color:"#D9B99B",
    draw:(f, c) => SLV_L(f, 30) + PB("M114 224 Q117 210 140 208 L146 382 L104 382 Z", f) + PB("M140 208 L130 236 L145 246", f, 2.2) + [270, 300, 330].map(y => C(140, y, 3, shade(c, -.35), 1.4) + C(160, y, 3, shade(c, -.35), 1.4)).join("") + P("M112 296 L188 296 L188 306 L112 306 Z", shade(c, -.15), 2)},
  cardigan: {name:"開襟衫", tags:["school", "neat", "warm"], color:"#F6E7C8",
    draw:(f, c) => SLV_L(f, 27) + PB("M114 224 Q117 210 138 208 L146 302 L114 302 Z", f) + [240, 262, 284].map(y => C(141, y, 2.6, shade(c, -.35), 1.2)).join("") + PB("M116 292 L144 294", "none", 1.6)},
  blazer:   {name:"西裝外套", tags:["school", "formal", "neat"], color:"#2C3E70",
    draw:(f, c) => SLV_L(f, 28) + PB("M114 224 Q117 210 140 208 L146 308 L114 308 Z", f) + PB("M140 208 L128 238 L146 262", f, 2.2) + P("M122 276 L136 276", "none", 2) + star(176, 248, 6, "#F6D65A", 1.4)},
  raincoat: {name:"雨衣", tags:["rain"], color:"#F6D65A",
    draw:(f, c) => SLV_L(f, 30) + P("M118 216 Q150 194 182 216 Q150 230 118 216 Z", shade(c, -.12)) + P("M114 224 Q117 210 150 207 Q183 210 186 224 L196 364 Q150 372 104 364 Z", f) + LN("M150 214 L150 366", 1.8) + [240, 276, 312].map(y => C(156, y, 3, "#fff", 1.4)).join("")},
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
  bun:   {name:"丸子頭", draw:h => C(150, 50, 24, h) + LN("M134 64 Q150 72 166 64", 4, "#F2668B") + P("M88 126 C84 60 216 60 212 126 L208 150 Q150 158 92 150 Z", h)},
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
const sideLock = ([x, y]) => `M${x} ${y} C${x - 4} ${y + 40} ${x - 3} ${y + 72} 113 194 Q112 206 100 216 Q101 206 95 198 C84 178 86 150 ${Math.max(x - 14, 92)} ${y + 16} Z`;

// ---------- 臉 ----------
const EYE_X = [128, 172], EYE_Y = 138;
const EYES = {
  round:   {name:"圓圓眼"},
  sparkle: {name:"閃亮眼"},
  smile:   {name:"笑眼"},
  cat:     {name:"貓咪眼"},
  wink:    {name:"眨眼"},
  sleepy:  {name:"睏睏眼"},
  star:    {name:"星星眼", lock:"school"},
};
function drawEye(type, cx, ec, right){
  const cy = EYE_Y;
  if(type === "smile" || (type === "wink" && right)) return LN(`M${cx - 10} ${cy + 3} Q${cx} ${cy - 9} ${cx + 10} ${cy + 3}`, 3);
  if(type === "sleepy") return LN(`M${cx - 10} ${cy} Q${cx} ${cy + 7} ${cx + 10} ${cy}`, 3) + LN(`M${cx - 10} ${cy} L${cx - 13} ${cy - 3}`, 2);
  if(type === "star") return star(cx, cy, 13, ec, 2.2) + C(cx - 3, cy - 4, 2.4, "#fff", 0);
  if(type === "cat") return P(`M${cx - 12} ${cy} Q${cx} ${cy - 14} ${cx + 12} ${cy - 2} Q${cx} ${cy + 12} ${cx - 12} ${cy} Z`, ec, 2.4) + E(cx, cy - 1, 2.4, 7.5, INK, 0) + C(cx + 4, cy - 4, 2, "#fff", 0);
  const big = type === "sparkle";
  const ry = big ? 13.5 : 12, rx = big ? 10.5 : 9.5;
  return E(cx, cy, rx, ry, ec, 2.4) + E(cx, cy + 2, rx * .52, ry * .6, shade(ec, -.55), 0) + C(cx + 3.5, cy - 5, big ? 3.6 : 3, "#fff", 0) + C(cx - 3.5, cy + 5, 1.6, "#fff", 0) +
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
};
function drawMouth(type, lip){
  const line = lip || INK, lw = lip ? 3.2 : 2.4;
  if(type === "grin") return P("M140 162 Q150 163 160 162 Q158 176 150 176 Q142 176 140 162 Z", lip || "#C2475E", 2.2) + P("M144 171 Q150 167 156 171 Q154 176 150 176 Q146 176 144 171 Z", "#F7A8B8", 0);
  if(type === "cat") return LN("M140 163 Q145 170 150 163 Q155 170 160 163", lw, line);
  if(type === "tongue") return LN("M141 164 Q150 171 159 164", lw, line) + P("M146 168 Q147 176 151 176 Q155 176 155 168", "#F28AA0", 1.8);
  if(type === "pout") return E(150, 167, 4.2, 3.6, lip || "#E8667A", 2);
  if(type === "wow") return E(150, 168, 5.5, 6.5, lip || "#C2475E", 2.2);
  return LN("M141 164 Q150 172 159 164", lw, line);
}
const STICKERS = {heart:{name:"愛心"}, star:{name:"星星"}, tear:{name:"淚痣"}};

// ---------- 配件 ----------
const HATS = {
  beret:    {name:"貝雷帽", tags:["neat", "casual"], color:"#D9414E",
    draw:(f, c) => `<ellipse cx="158" cy="72" rx="62" ry="22" transform="rotate(-10 158 72)" fill="${f}" stroke="${INK}" stroke-width="2.6"/>` + LN("M150 50 L152 42", 3.4)},
  straw:    {name:"草帽", tags:["summer", "beach"], color:"#E8679A",
    draw:(f, c) => E(150, 90, 98, 22, "#F2D48A", 2.6) + P("M108 90 Q108 44 150 42 Q192 44 192 90 Z", "#F2D48A") + P("M109 78 Q150 86 191 78 L192 88 Q150 96 108 88 Z", f, 2.2)},
  beanie:   {name:"毛帽", tags:["winter", "warm"], color:"#7E5BC2",
    draw:(f, c) => P("M88 110 Q86 44 150 42 Q214 44 212 110 Z", f) + P("M86 96 Q150 84 214 96 L214 116 Q150 104 86 116 Z", shade(c, -.15)) + C(150, 38, 12, shade(c, .5))},
  cap:      {name:"棒球帽", tags:["sport", "casual"], color:"#4C8FE0",
    draw:(f, c) => P("M92 100 Q92 46 150 44 Q208 46 208 100 Z", f) + P("M92 100 Q62 102 50 116 Q96 118 140 104 Z", shade(c, -.2)) + C(150, 46, 4, shade(c, -.2), 1.6)},
  crown:    {name:"皇冠", tags:["party"], color:"#F6D65A", lock:"party",
    draw:(f, c) => P("M112 72 L116 40 L134 58 L150 32 L166 58 L184 40 L188 72 Z", f) + C(150, 62, 4.5, "#D9414E", 1.6) + C(128, 66, 3.2, "#4C8FE0", 1.4) + C(172, 66, 3.2, "#4FA36B", 1.4)},
  catears:  {name:"貓耳髮箍", tags:["snack", "casual", "party"], color:"#2E2B2B", lock:"market",
    draw:(f, c) => LN("M94 104 Q150 46 206 104", 6) + LN("M94 104 Q150 46 206 104", 3.4, c) + PB("M106 76 L100 36 L132 58 Z", f) + PB("M110 68 L107 46 L124 59 Z", "#F7A8C4", 0)},
  earmuffs: {name:"毛毛耳罩", tags:["winter", "warm"], color:"#F7A8C4", lock:"winter",
    draw:(f, c) => LN("M92 132 Q88 38 150 36 Q212 38 208 132", 7) + LN("M92 132 Q88 38 150 36 Q212 38 208 132", 4, c) + C(90, 140, 18, f) + C(210, 140, 18, f) + C(90, 140, 10, shade(c, .5), 0) + C(210, 140, 10, shade(c, .5), 0)},
  foxmask:  {name:"狐狸面具", tags:["festival"], color:"#D9414E", lock:"festival",
    draw:(f, c) => `<g transform="translate(196 84) rotate(22)">${P("M-22 -6 L-20 -26 L-8 -14 L8 -14 L20 -26 L22 -6 Q20 18 0 24 Q-20 18 -22 -6 Z", "#fff")}${LN("M-12 -2 Q-7 -6 -3 -1", 2.4, f)}${LN("M3 -1 Q7 -6 12 -2", 2.4, f)}${C(0, 14, 2.6, f, 0)}${LN("M-16 -18 L-13 -10", 2.4, f)}${LN("M16 -18 L13 -10", 2.4, f)}</g>`},
};
const GLASSES = {
  round: {name:"圓框眼鏡", tags:["school", "neat"], color:"#8A5A3C",
    draw:(f, c) => C(128, 138, 16, "rgba(255,255,255,.18)", 3, `stroke="${c}"`) + C(172, 138, 16, "rgba(255,255,255,.18)", 3, `stroke="${c}"`) + LN("M144 136 Q150 132 156 136", 2.6, c)},
  sun:   {name:"墨鏡", tags:["summer", "beach"], color:"#2E2B2B",
    draw:(f, c) => P("M110 128 Q128 124 146 128 Q146 150 128 150 Q110 150 110 128 Z", "#2B2A2E", 2.6, `stroke="${c}"`) + P(MX("M110 128 Q128 124 146 128 Q146 150 128 150 Q110 150 110 128 Z"), "#2B2A2E", 2.6, `stroke="${c}"`) + LN("M146 131 Q150 128 154 131", 2.6, c) + LN("M116 133 L124 131", 2, "rgba(255,255,255,.6)")},
  heart: {name:"愛心墨鏡", tags:["beach", "party"], color:"#E8679A", lock:"beach",
    draw:(f, c) => P(heartD(128, 138, 13), "rgba(232,103,154,.75)", 2.6, `stroke="${c}"`) + P(heartD(172, 138, 13), "rgba(232,103,154,.75)", 2.6, `stroke="${c}"`) + LN("M142 134 Q150 130 158 134", 2.6, c)},
};
const HAIRPINS = {
  bow:    {name:"蝴蝶結", tags:["party", "school"], color:"#E8679A",
    draw:(f) => P("M196 92 L180 80 L180 104 Z", f, 2.2) + P("M196 92 L212 80 L212 104 Z", f, 2.2) + C(196, 92, 4.5, f, 2.2)},
  star:   {name:"星星髮夾", tags:["casual", "party"], color:"#F6D65A", draw:(f) => star(192, 92, 11, f, 2)},
  flower: {name:"小花", tags:["festival", "summer", "beach"], color:"#F7A8C4",
    draw:(f) => [0, 1, 2, 3, 4].map(i => { const a = i * Math.PI * 2 / 5 - Math.PI / 2; return C(+(192 + Math.cos(a) * 8).toFixed(1), +(92 + Math.sin(a) * 8).toFixed(1), 6, f, 2); }).join("") + C(192, 92, 4.5, "#F6D65A", 1.8)},
};
const NECKS = {
  pearl:  {name:"珍珠項鍊", tags:["party", "formal"], color:"#FFFFFF",
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
    draw:(f, c) => P("M124 206 Q150 224 176 206 L178 220 Q150 240 122 220 Z", f) + P("M160 224 L166 272 L180 268 L172 222 Z", f, 2.4) + [168, 172, 176].map(x => LN(`M${x} 270 L${x + 1} 278`, 2, c)).join("")},
};
const BAGS = {
  cross:    {name:"斜背包", tags:["casual", "snack"], color:"#F59A4A",
    draw:(f, c) => LN("M178 212 L122 294", 4.5) + LN("M178 212 L122 294", 2.6, shade(c, -.2)) + P("M100 288 L136 288 L136 316 Q136 320 132 320 L104 320 Q100 320 100 316 Z", f) + P("M100 288 L136 288 L134 302 L102 302 Z", shade(c, -.12), 2.2) + C(118, 302, 2.6, "#F6D65A", 1.4)},
  handbag:  {name:"手提包", tags:["party", "formal"], color:"#E8679A",
    draw:(f, c) => LN("M90 330 Q100 304 110 330", 2.8) + P("M82 328 L118 328 L114 358 L86 358 Z", f) + LN("M86 338 L114 338", 1.6)},
  backpack: {name:"書包", tags:["school"], color:"#4C8FE0",
    draw:(f, c) => LN("M128 210 L128 290", 7) + LN("M172 210 L172 290", 7) + LN("M128 210 L128 290", 4.5, f) + LN("M172 210 L172 290", 4.5, f)},
};
const HANDS = {
  umbrella: {name:"雨傘", tags:["rain"], color:"#4C8FE0",
    draw:(f, c) => LN("M200 318 L234 112", 3) + P("M168 116 Q234 40 298 116 Q290 108 282 116 Q274 108 266 116 Q258 108 250 116 Q242 108 234 116 Q226 108 218 116 Q210 108 202 116 Q194 108 186 116 Q178 108 168 116 Z", f) + LN("M200 318 Q194 330 202 334", 3)},
  rainbow:  {name:"彩虹雨傘", tags:["rain", "party"], color:"#F6D65A", lock:"rain",
    draw:(f, c) => LN("M200 318 L234 112", 3) + ["#FF6B6B", "#FFB347", "#FFE066", "#7BD88F", "#6FB8FF", "#B68CFF"].map((col, i) => { const a0 = Math.PI + i * Math.PI / 6, a1 = a0 + Math.PI / 6, r = 66, cx = 234, cy = 116; return `<path d="M${cx} ${cy} L${(cx + Math.cos(a0) * r).toFixed(1)} ${(cy + Math.sin(a0) * r * .9).toFixed(1)} L${(cx + Math.cos(a1) * r).toFixed(1)} ${(cy + Math.sin(a1) * r * .9).toFixed(1)} Z" fill="${col}" stroke="${INK}" stroke-width="2"/>`; }).join("") + LN("M200 318 Q194 330 202 334", 3)},
  balloon:  {name:"氣球", tags:["party", "snack", "festival"], color:"#D9414E",
    draw:(f, c) => LN("M201 312 Q222 240 234 152", 1.6) + P(heartD(236, 124, 26), f) + LN("M222 112 Q226 104 234 102", 3, "rgba(255,255,255,.7)")},
  boba:     {name:"珍珠奶茶", tags:["snack", "casual", "summer"], color:"#D9B99B",
    draw:(f, c) => LN("M214 270 L208 300", 3.4, "#E8679A") + P("M196 298 L224 298 L220 340 L200 340 Z", f) + E(210, 298, 14, 3.5, "#fff", 2) + [[204, 332], [210, 334], [216, 332], [207, 326], [213, 326]].map(([x, y]) => C(x, y, 2.4, "#3A2A20", 0)).join("")},
  book:     {name:"書", tags:["school"], color:"#4FA36B",
    draw:(f, c) => `<g transform="rotate(-12 214 306)">${P("M200 288 L230 288 L230 326 L200 326 Z", f)}${P("M203 288 L203 326", "none", 2)}${LN("M210 300 L224 300 M210 308 L224 308", 1.6, "#fff")}</g>`},
  bouquet:  {name:"花束", tags:["party", "formal"], color:"#F7A8C4",
    draw:(f, c) => P("M200 330 L214 290 L232 300 Z", "#F6E7C8") + [[212, 286, "#E8679A"], [224, 282, f], [232, 292, "#F6D65A"], [218, 276, "#D9414E"], [206, 280, f]].map(([x, y, col]) => C(x, y, 8, col, 2)).join("") + LN("M210 300 L214 310", 2, "#4FA36B")},
  uchiwa:   {name:"扇子", tags:["festival", "summer"], color:"#9BD0F5",
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
    draw:(f, c) => SLV_S(f, 26) + P(TORSO, f) + LN("M150 214 L150 240", 1.8) + C(153, 224, 1.8, shade(c, -.35), 0) + C(153, 234, 1.8, shade(c, -.35), 0) + PB("M150 216 L136 206 L132 220 Z", shade(c, .25), 2.2)},
  tieshirt: {name:"制服襯衫領帶", tags:["school", "neat", "formal"], color:"#FFFFFF",
    draw:(f, c) => SLV_S(f, 26) + P(TORSO, f) + PB("M150 217 L134 206 L128 222 Z", f) + P("M150 218 L144 226 L147 272 L150 280 L153 272 L156 226 Z", "#2C3E70", 2) + LN("M146 238 L154 232 M146 252 L154 246", 1.6, "#D9414E")},
  tank:     {name:"背心", tags:["summer", "sport", "beach"], color:"#F6D65A",
    draw:(f, c) => P("M128 208 Q150 226 172 208 L180 224 Q184 240 184 300 Q150 306 116 300 Q116 240 120 224 Z", f)},
});
Object.assign(BOTTOMS, {
  slacks: {name:"西裝長褲", tags:["school", "neat", "formal"], color:"#2E2B2B",
    draw:(f, c) => TUBES("M137 312 L135.2 424", 27, f) + P("M117 290 L183 290 L185 330 Q150 336 115 330 Z", f) + LN("M136 334 L135 424", 1.4, shade(c, .3)) + LN("M164 334 L165 424", 1.4, shade(c, .3)) + P("M117 290 L183 290 L183 298 L117 298 Z", shade(c, -.2), 2)},
  wide:   {name:"寬褲", tags:["casual", "summer"], color:"#F6E7C8",
    draw:(f, c) => P("M117 290 L183 290 L194 426 L155 426 L150 330 L145 426 L106 426 Z", f) + LN("M117 298 L183 298", 1.6)},
  cargo:  {name:"工作短褲", tags:["casual", "sport", "snack"], color:"#8A9A5B",
    draw:(f, c) => P("M117 290 L183 290 L187 348 L154 348 L150 326 L146 348 L113 348 Z", f) + PB("M113 316 L127 316 L128 336 L114 336 Z", shade(c, -.12), 2) + LN("M117 297 L183 297", 1.6)},
});
Object.assign(OUTERS, {
  track: {name:"運動外套", tags:["sport", "casual"], color:"#D9414E",
    draw:(f, c) => SLV_L(f, 29) + TUBE("M116 226 C106 248 101 280 99.5 302", 2.5, "#fff") + TUBE(MX("M116 226 C106 248 101 280 99.5 302"), 2.5, "#fff") + PB("M114 224 Q117 210 140 208 L148 304 L114 304 Z", f) + LN("M150 214 L150 304", 2.2, "#fff") + LN("M150 214 L150 304", .8) + PB("M138 208 L134 222 L148 222", "none", 2)},
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
  buzz: {name:"平頭", draw:h => P("M92 126 C88 66 212 66 208 126 L206 140 Q150 146 94 140 Z", h)},
});
Object.assign(HAIRF, {
  quiff: {name:"往上梳", d:" C210 116 202 94 186 88 C172 72 140 68 120 82 C104 92 93 114 89 152 Z", cl:[100, 100], cr:[100, 100], lines:"M128 70 Q144 62 164 70 M120 80 Q140 70 168 78"},
});
Object.assign(HATS, {
  witch:   {name:"女巫帽", tags:["halloween"], color:"#7E5BC2",
    draw:(f, c) => E(150, 90, 94, 18, f, 2.6) + P("M110 88 Q126 62 140 22 Q146 8 164 18 Q156 24 160 40 L188 88 Z", f) + P("M112 80 Q150 90 186 80 L188 88 Q150 98 110 88 Z", "#F6D65A", 2.2) + star(156, 58, 5, "#F6D65A", 1.2)},
  santa:   {name:"聖誕帽", tags:["xmas", "winter", "party"], color:"#D9414E",
    draw:(f, c) => P("M94 100 Q98 48 152 44 Q196 46 214 84 Q226 106 230 126 L212 120 Q204 96 190 82 L206 100 Z", f) + C(228, 128, 10, "#fff", 2.2) + P("M88 94 Q150 80 212 94 L214 112 Q150 98 86 112 Z", "#fff", 2.4)},
  antlers: {name:"麋鹿角", tags:["xmas", "party"], color:"#8A5A3C", lock:"christmas",
    draw:(f, c) => LN("M94 104 Q150 56 206 104", 6) + LN("M94 104 Q150 56 206 104", 3.4, "#D9414E") + ["M116 76 L104 30 M108 52 L92 44 M106 40 L114 26", "M184 76 L196 30 M192 52 L208 44 M194 40 L186 26"].map(d => LN(d, 8) + LN(d, 4.6, c)).join("")},
});
Object.assign(HANDS, {
  pumpkin: {name:"南瓜燈", tags:["halloween", "party"], color:"#F59A4A",
    draw:(f, c) => LN("M200 318 Q212 312 218 326", 2.4) + E(218, 344, 20, 17, f) + LN("M210 330 Q206 344 210 358 M226 330 Q230 344 226 358", 1.6, shade(c, -.3)) + P("M216 326 L218 318 L222 320 L220 327 Z", "#4FA36B", 1.6) + P("M208 338 L213 342 L208 345 Z M228 338 L223 342 L228 345 Z", "#3A2A20", 0) + LN("M209 351 Q218 356 227 351", 2.2)},
  gift:    {name:"禮物", tags:["xmas", "party"], color:"#4FA36B",
    draw:(f, c) => P("M198 300 L230 300 L230 332 L198 332 Z", f) + P("M210 300 L218 300 L218 332 L210 332 Z", "#D9414E", 1.6) + P("M214 300 Q204 286 200 294 Q200 300 214 300 Z M214 300 Q224 286 228 294 Q228 300 214 300 Z", "#D9414E", 1.8)},
  redpack: {name:"紅包", tags:["newyear", "festival"], color:"#D9414E",
    draw:(f, c) => `<g transform="rotate(-10 214 308)">${P("M202 290 L226 290 L226 326 L202 326 Z", f)}${C(214, 302, 7, "#F6D65A", 1.6)}<text x="214" y="305.5" text-anchor="middle" font-size="9" font-weight="900" fill="#D9414E" font-family="system-ui,'Noto Sans TC',sans-serif">福</text></g>`},
  wand:    {name:"魔法棒", tags:["halloween", "party"], color:"#F6D65A", lock:"halloween",
    draw:(f, c) => LN("M200 318 L230 250", 4.5) + LN("M200 318 L230 250", 2.4, "#fff") + star(232, 244, 13, f, 2) + [[250, 232], [246, 262], [220, 228]].map(([x, y]) => star(x, y, 3.5, "#fff", 1)).join("")},
});
Object.assign(BGS, {
  halloween: {name:"萬聖夜", tags:["halloween", "party"], draw:() => `<rect width="300" height="470" fill="#2B1F45"/>` + C(220, 80, 42, "#FFE9A8", 2.4) + C(236, 70, 8, "#F2D88A", 0) + [[70, 70], [110, 110], [180, 150]].map(([x, y]) => P(`M${x} ${y} Q${x - 8} ${y - 8} ${x - 18} ${y - 4} Q${x - 12} ${y + 2} ${x - 14} ${y + 8} Q${x - 6} ${y + 2} ${x} ${y + 6} Q${x + 6} ${y + 2} ${x + 14} ${y + 8} Q${x + 12} ${y + 2} ${x + 18} ${y - 4} Q${x + 8} ${y - 8} ${x} ${y} Z`, "#1B1430", 1.4)).join("") + P("M10 300 L10 220 L40 190 L70 220 L70 300 Z", "#1B1430", 2) + `<rect x="30" y="236" width="14" height="16" fill="#FFD447"/>` + `<rect y="380" width="300" height="90" fill="#3A2E55"/>` + LN("M0 380 L300 380", 2.4) + [[44, 404], [266, 420]].map(([x, y]) => E(x, y, 18, 14, "#F59A4A") + P(`M${x - 8} ${y - 4} L${x - 3} ${y} L${x - 8} ${y + 2} Z M${x + 8} ${y - 4} L${x + 3} ${y} L${x + 8} ${y + 2} Z`, INK, 0) + LN(`M${x - 7} ${y + 7} Q${x} ${y + 11} ${x + 7} ${y + 7}`, 1.8)).join("")},
  xmas:      {name:"聖誕夜", tags:["xmas", "winter"], draw:() => `<rect width="300" height="470" fill="#FBE9DA"/><rect y="384" width="300" height="86" fill="#B98A5E"/>` + LN("M0 384 L300 384", 2.4) + P("M20 60 L100 60 L100 170 L20 170 Z", "#2B3C6E") + LN("M60 60 L60 170 M20 115 L100 115", 2.4) + Array.from({length:8}, (_, i) => C(30 + (i * 23) % 66, 70 + (i * 37) % 92, 2, "#fff", 0)).join("") + [[250, 230, 46], [250, 280, 56], [250, 330, 66]].map(([x, y, w]) => P(`M${x} ${y - 50} L${x + w} ${y + 20} L${x - w} ${y + 20} Z`, "#3E8A5A", 2.4)).join("") + P("M242 350 L258 350 L258 384 L242 384 Z", "#8A5A3C", 2) + star(250, 176, 12, "#FFD447", 2) + [[230, 250, "#D9414E"], [270, 270, "#F6D65A"], [236, 300, "#4C8FE0"], [266, 320, "#D9414E"], [222, 340, "#F6D65A"]].map(([x, y, col]) => C(x, y, 5, col, 1.6)).join("") + P("M188 362 L214 362 L214 386 L188 386 Z", "#D9414E", 2) + LN("M201 362 L201 386", 3, "#F6D65A")},
});

// ---------- 組合成一個角色 ----------
let UID = 0;
// opt：bg 要不要畫背景、vb 只看某一塊（小圖用）
function drawLook(L, opt = {}){
  const uid = "u" + (UID++), defs = [];
  // 衣服的填色：素色就是顏色，有花紋就是 pattern
  const fill = (slot, v) => {
    if(!v) return "#fff";
    if(!v.pat || v.pat === "none") return v.color;
    const id = `${uid}-${slot}`; defs.push(patDef(id, v.pat, v.color)); return `url(#${id})`;
  };
  const item = (cat, slot) => { const v = L[slot]; if(!v || !cat[v.id]) return ""; const it = cat[v.id];
    let f = fill(slot, v);
    if(it.stripe){ const id = `${uid}-${slot}s`; defs.push(patDef(id, "stripes", v.color).replace('width="10" height="10"', 'width="10" height="10" patternTransform="rotate(90)"')); f = `url(#${id})`; }
    return it.draw(f, v.color); };
  const skin = SKIN[L.skin] || SKIN[0];
  let s = "";
  if(opt.bg !== false){ const b = BGS[L.bg] || BGS.room; s += b.draw(L.bgC || "#F7D3E0"); }
  s += E(150, 448, 62, 9, "rgba(58,42,32,.18)", 0);
  // 後面的頭髮
  s += (HAIRB[L.hairB] || HAIRB.long).draw(L.hairC);
  // 身體：全部合成一塊描邊（先畫粗的墨線，再蓋上膚色），接縫不會有線
  const parts = [BODY, ARM_SHAPE, MX(ARM_SHAPE), LEG_SHAPE, MX(LEG_SHAPE)];
  s += parts.map(d => `<path d="${d}" fill="${skin}" stroke="${INK}" stroke-width="5.4" stroke-linejoin="round"/>`).join("") + parts.map(d => `<path d="${d}" fill="${skin}"/>`).join("");
  s += LN("M142 184 Q150 190 158 184", 2, shade(skin, -.14));   // 下巴下面淡淡的影子
  // 襪子、鞋子
  s += item(SOCKS, "socks");
  const shoe = L.shoes && SHOES[L.shoes.id];
  if(!shoe || shoe.bare) s += E(133, 437, 11, 8, skin) + E(167, 437, 11, 8, skin);
  s += item(SHOES, "shoes");
  // 打底的小背心和短褲（不會露出不雅的地方）
  s += P("M120 230 Q150 240 180 230 L184 300 Q150 306 116 300 Z", "#F6F2EA", 2.2) + P("M117 292 L183 292 L185 326 L153 326 L150 318 L147 326 L115 326 Z", "#F6F2EA", 2.2);
  const dress = L.dress && DRESSES[L.dress.id];
  if(!dress) s += item(BOTTOMS, "bottom");
  if(!dress || dress.overTop) s += item(TOPS, "top");   // 吊帶裙露出裡面的上衣，下身被裙子蓋住
  if(dress) s += item(DRESSES, "dress");
  s += item(OUTERS, "outer");
  s += item(NECKS, "neck");
  s += item(SCARVES, "scarf");
  if(L.bag && L.bag.id !== "handbag") s += item(BAGS, "bag");
  // 手
  s += [HAND, MX(HAND)].map(d => `<path d="${d} Z" fill="${skin}"/>` + LN(d, 2.6)).join("");
  if(L.bag && L.bag.id === "handbag") s += item(BAGS, "bag");
  // 頭
  s += C(93, 142, 10, skin) + C(207, 142, 10, skin);
  s += E(150, 128, 58, 60, skin, 2.8);
  // 妝容和五官
  if(L.blush) s += E(116, 160, 12, 7, L.blush, 0, `opacity=".55"`) + E(184, 160, 12, 7, L.blush, 0, `opacity=".55"`);
  if(L.freckles) s += [[112, 154], [118, 158], [114, 162], [186, 154], [182, 158], [188, 162]].map(([x, y]) => C(x, y, 1.4, shade(skin, -.4), 0)).join("");
  if(L.shadow) s += E(128, 128, 14, 7, L.shadow, 0, `opacity=".6"`) + E(172, 128, 14, 7, L.shadow, 0, `opacity=".6"`);
  s += EYE_X.map((x, i) => drawEye(L.eyes, x, L.eyeC, i === 1)).join("");
  s += EYE_X.map((x, i) => LN((BROWS[L.brows] || BROWS.soft).d(x, i === 1), 2.8, shade(L.hairC, -.25))).join("");
  s += LN("M148 153 Q150 155 152 153", 2, shade(skin, -.35));
  s += drawMouth(L.mouth, L.lip);
  if(L.sticker === "heart") s += P(heartD(186, 170, 5), "#E8679A", 1.4);
  else if(L.sticker === "star") s += star(186, 170, 6, "#F6D65A", 1.4);
  else if(L.sticker === "tear") s += C(182, 150, 1.8, INK, 0);
  // 前面的頭髮
  const hb = HAIRB[L.hairB] || HAIRB.long;
  const hf = HAIRF[L.hairF] || HAIRF.blunt, front = [CROWN + hf.d, ...(hb.side ? [sideLock(hf.cl), MX(sideLock(hf.cr))] : [shortLock(hf.cl), MX(shortLock(hf.cr))])];
  s += front.map(d => `<path d="${d}" fill="${L.hairC}" stroke="${INK}" stroke-width="5.6" stroke-linejoin="round"/>`).join("");
  s += front.map(d => `<path d="${d}" fill="${L.hairC}"/>`).join("");
  if(hf.lines) s += LN(hf.lines, 1.8, strand(L.hairC), `opacity=".8"`);
  if(hb.front) s += hb.front(L.hairC);
  s += LN("M116 74 Q128 64 142 61", 4, "rgba(255,255,255,.45)");
  // 頭上、臉上的配件
  s += item(GLASSES, "glasses");
  s += item(HAIRPINS, "hairpin");
  s += item(HATS, "hat");
  s += item(HANDS, "hand");
  if(L.pet && PETS[L.pet]) s += drawPet(L.pet);
  const vb = opt.vb || `0 0 ${W} ${H}`;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${vb}"${opt.size ? ` width="${opt.size[0]}" height="${opt.size[1]}"` : ""}><defs>${defs.join("")}</defs>${s}</svg>`;
}
