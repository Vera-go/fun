/* =========================================================
   分享卡片與角色（新版樣品）
   卡片只負責「想分享」：角色、類型、說的就是我、超能力、拍檔、隱藏結果鉤子。
   卡片上不出現任何跟菸有關的字、不出現分數。
   ========================================================= */
(function(){
const NS = window.NS;
const esc = s => String(s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const FONT = `'Noto Sans TC','Microsoft JhengHei','PingFang TC',sans-serif`;
const HEAVY = `'Arial Black',Impact,sans-serif`;

// 顏色混合：t=0 原色，t=1 目標色
function mix(a, b, t){
  const p = h => [1, 3, 5].map(i => parseInt(h.slice(i, i + 2), 16));
  const [x, y] = [p(a), p(b)];
  return "#" + x.map((v, i) => Math.round(v + (y[i] - v) * t).toString(16).padStart(2, "0")).join("");
}
const famOf = code => code[1] === "N" ? (code[2] === "T" ? "NT" : "NF") : (code[3] === "J" ? "SJ" : "SP");

/* ---------- logo（字形同 brand/make_logo.py） ---------- */
const GLYPHS = {
  N:[72,"M11 100V11L61 89V0"], O:[72,"M30 11H42Q61 11 61 30V70Q61 89 42 89H30Q11 89 11 70V30Q11 11 30 11Z"],
  S:[72,"M61 22Q61 11 50 11H24Q11 11 11 24V37Q11 50 24 50H48Q61 50 61 63V76Q61 89 48 89H22Q11 89 11 78"],
  T:[72,"M0 11H72M36 11V100"], R:[72,"M11 100V11H44Q61 11 61 28V33Q61 50 44 50H11M38 50L66.4 111.5"],
  I:[36,"M18 0V100"], G:[72,"M61 26Q61 11 44 11H28Q11 11 11 28V72Q11 89 28 89H44Q61 89 61 72V54H38"]
};
let seq = 0;
function logo(main, acc){
  const id = "lc" + (++seq), pad = 48, top = 118;
  let x = 0, xs = [], paths = "";
  [..."NOSTRINGS"].forEach((ch, i) => {
    const [w, d] = GLYPHS[ch]; xs.push(x);
    paths += `<g transform="translate(${pad + x} ${top})"><path d="${d}" fill="none" stroke="${i < 2 ? acc : main}" stroke-width="22" clip-path="url(#${id})"/></g>`;
    x += w + 16;
  });
  const cut = (cx, cy) => `<path d="M${cx} 0V${cy - 13}L${cx + 4} ${cy - 5}" fill="none" stroke="${acc}" stroke-width="8"/><path d="M${cx - 4} ${cy + 5}L${cx} ${cy + 13}V${top}" fill="none" stroke="${acc}" stroke-width="8"/>`;
  return `<defs><clipPath id="${id}"><rect x="-20" y="0" width="120" height="100"/></clipPath></defs>${cut(pad + xs[1] + 36, 58)}${cut(pad + xs[5] + 18, 44)}${paths}`;
}

/* ---------- 角色（Q 版潮流風；家族決定帽子與配色，各型可加道具和表情） ---------- */
const FAM_LOOK = {
  NT: {hoodie:"#1E1630", hair:"#2A2238"},
  NF: {hoodie:"#10261A", hair:"#5A3A26"},
  SJ: {hoodie:"#0F1E33", hair:"#23201E"},
  SP: {hoodie:"#151515", hair:"#3B2A20"}
};
function hatSvg(f, c){
  const d = mix(c, "#000000", .3);
  if(f === "SP") return `<path d="M56 94 C56 36 184 36 184 94 Z" fill="${c}"/><rect x="50" y="82" width="140" height="22" rx="10" fill="${d}"/>${[66, 82, 98, 114, 130, 146, 162, 178].map(x => `<path d="M${x} 86V100" stroke="${c}" stroke-width="3" opacity=".5"/>`).join("")}<circle cx="120" cy="36" r="15" fill="${c}"/>`;
  if(f === "SJ") return `<path d="M58 92 C58 40 182 40 182 92 Z" fill="${c}"/><path d="M120 92 H206 Q206 104 192 104 H120 Z" fill="${d}"/><circle cx="120" cy="46" r="5" fill="${d}"/>`;
  if(f === "NF") return `<path d="M54 112 C50 40 190 40 186 112" fill="none" stroke="${c}" stroke-width="10" stroke-linecap="round"/><rect x="40" y="100" width="24" height="40" rx="11" fill="${c}"/><rect x="176" y="100" width="24" height="40" rx="11" fill="${c}"/>`;
  return `<g fill="none" stroke="${c}" stroke-width="5"><circle cx="96" cy="116" r="17"/><circle cx="146" cy="116" r="17"/><path d="M113 114 Q121 108 129 114"/></g>`;   // NT：圓框眼鏡
}
function faceSvg(face){
  const ink = "#2B1B14", skin = "#FFE1CC";
  const eye = x => `<ellipse cx="${x}" cy="116" rx="9" ry="12" fill="${ink}"/><circle cx="${x - 3}" cy="110" r="3.6" fill="#fff"/><circle cx="${x + 3.5}" cy="121" r="1.7" fill="#fff"/>`;
  const shut = x => `<path d="M${x - 9} 118 Q${x} 107 ${x + 9} 118" fill="none" stroke="${ink}" stroke-width="5" stroke-linecap="round"/>`;
  // 半睜眼：上半蓋一塊皮膚色，再畫眼皮
  const lid = x => `${eye(x)}<rect x="${x - 12}" y="100" width="24" height="15" fill="${skin}"/><path d="M${x - 11} 115 H${x + 11}" stroke="${ink}" stroke-width="4" stroke-linecap="round"/>`;
  const eyes = { wink: shut(96) + eye(146), soft: shut(96) + shut(146), cool: lid(96) + lid(146) }[face] || eye(96) + eye(146);
  const openSmile = `<path d="M108 138 Q121 154 134 138 Z" fill="#7A2333"/><path d="M114 145 Q121 151 128 145 Q121 148 114 145 Z" fill="#FF7A8A"/>`;
  const mouth = {
    smirk: `<path d="M110 143 Q124 149 136 136" fill="none" stroke="#7A2333" stroke-width="4.5" stroke-linecap="round"/>`,
    grin: `<path d="M104 136 Q121 160 138 136 Z" fill="#7A2333"/><path d="M106 137 H136 L134 142 H108 Z" fill="#fff"/><path d="M113 149 Q121 155 129 149 Q121 151 113 149 Z" fill="#FF7A8A"/>`,
    soft: `<path d="M112 140 Q121 148 130 140" fill="none" stroke="#7A2333" stroke-width="4.5" stroke-linecap="round"/>`,
    cool: `<path d="M113 142 Q122 146 131 140" fill="none" stroke="#7A2333" stroke-width="4.5" stroke-linecap="round"/>`,
  }[face] || openSmile;
  return `${eyes}
    <ellipse cx="84" cy="134" rx="10" ry="5.5" fill="#FF8FA3" opacity=".6"/><ellipse cx="158" cy="134" rx="10" ry="5.5" fill="#FF8FA3" opacity=".6"/>
    ${mouth}`;
}
// 右手拿的道具：袖子 → 道具 → 手（手蓋在道具下緣，看起來像握著）
function propSvg(prop, c, sleeve){
  const S = `<path d="M178 196 Q196 190 202 206" stroke="${sleeve}" stroke-width="20" stroke-linecap="round" fill="none"/>`;
  const H = `<circle cx="204" cy="200" r="11" fill="#FFE1CC"/>`;
  const items = {
    mic: `<rect x="196" y="160" width="12" height="44" rx="5" fill="#2A2A2A" transform="rotate(14 202 182)"/><circle cx="196" cy="152" r="16" fill="#9AA0A6"/><path d="M184 148 H208 M184 156 H208 M196 138 V166" stroke="#6B7177" stroke-width="2"/>`,
    chess: `<path d="M192 196 L192 186 Q190 170 200 160 Q196 152 204 146 Q216 148 220 162 Q222 176 214 186 L214 196 Z" fill="#F5F5F5" stroke="#222" stroke-width="3" stroke-linejoin="round"/><circle cx="208" cy="158" r="2.5" fill="#222"/><rect x="186" y="193" width="34" height="9" rx="3" fill="#222"/>`,
    magnifier: `<line x1="204" y1="198" x2="214" y2="172" stroke="#6B4A2A" stroke-width="7" stroke-linecap="round"/><circle cx="220" cy="156" r="16" fill="#CFE8FF" opacity=".8" stroke="#333" stroke-width="5"/><path d="M212 150 Q216 145 222 146" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round"/>`,
    megaphone: `<path d="M196 192 L226 166 L234 198 Z" fill="${c}" stroke="#222" stroke-width="3" stroke-linejoin="round"/><path d="M238 170 l8 -6 M240 182 h10 M238 194 l8 6" stroke="#222" stroke-width="3" stroke-linecap="round"/>`,
    bolt: `<path d="M216 124 L198 160 L212 160 L200 194 L232 148 L216 148 L228 124 Z" fill="#FFE600" stroke="#222" stroke-width="3" stroke-linejoin="round"/>`,
    crystal: `<circle cx="206" cy="168" r="21" fill="${c}" opacity=".85" stroke="#222" stroke-width="2.5"/><circle cx="198" cy="160" r="6" fill="#fff" opacity=".8"/><path d="M190 190 h32 l-5 9 h-22 z" fill="#6B4A2A"/>`,
    notebook: `<rect x="188" y="156" width="32" height="42" rx="4" fill="#fff" stroke="#333" stroke-width="3"/><path d="M194 168 h20 M194 176 h20 M194 184 h13" stroke="#999" stroke-width="2"/><path d="M230 146 l-14 38" stroke="${c}" stroke-width="5" stroke-linecap="round"/>`,
    flag: `<line x1="204" y1="208" x2="204" y2="134" stroke="#6B4A2A" stroke-width="5" stroke-linecap="round"/><path d="M206 136 L238 147 L206 160 Z" fill="${c}" stroke="#222" stroke-width="2" stroke-linejoin="round"/>`,
    balloon: `<path d="M204 196 Q198 176 212 160" stroke="#555" stroke-width="2" fill="none"/><ellipse cx="216" cy="136" rx="19" ry="23" fill="${c}" stroke="#222" stroke-width="2"/><path d="M213 158 l3 5 l3 -5 z" fill="${c}"/><ellipse cx="209" cy="127" rx="5" ry="8" fill="#fff" opacity=".5"/>`,
    clipboard: `<rect x="186" y="154" width="36" height="46" rx="4" fill="#C8A26B" stroke="#333" stroke-width="3"/><rect x="192" y="161" width="24" height="33" fill="#fff"/><rect x="197" y="150" width="14" height="8" rx="2" fill="#666"/><path d="M196 172 l3 3 l7 -7 M196 185 l3 3 l7 -7" stroke="${c}" stroke-width="3" fill="none" stroke-linecap="round"/>`,
    heart: `<path d="M206 198 C180 180 184 156 198 156 C203 156 206 160 206 163 C206 160 209 156 214 156 C228 156 232 180 206 198 Z" fill="#FF6B9A" stroke="#222" stroke-width="2.5"/><path d="M198 166 Q200 162 204 162" stroke="#fff" stroke-width="2.5" fill="none" stroke-linecap="round"/>`,
    whistle: `<path d="M194 180 h22 a11 11 0 1 1 -7 18 h-15 z" fill="#C0C6CC" stroke="#333" stroke-width="3" stroke-linejoin="round"/><circle cx="214" cy="190" r="4" fill="#333"/><path d="M226 166 l9 -7 M230 176 l11 -2 M228 186 l10 4" stroke="#333" stroke-width="2.5" stroke-linecap="round"/>`,
    popper: `<path d="M198 200 L212 158 L228 170 Z" fill="${c}" stroke="#222" stroke-width="3" stroke-linejoin="round"/><rect x="214" y="132" width="6" height="10" fill="#FF6B9A" transform="rotate(25 217 137)"/><rect x="232" y="146" width="6" height="10" fill="#3DA5FF" transform="rotate(-20 235 151)"/><circle cx="226" cy="128" r="4" fill="#00FF66"/><circle cx="240" cy="134" r="3" fill="#FFE600"/><circle cx="206" cy="140" r="3" fill="#B026FF"/>`,
    wrench: `<path d="M201 200 L223 158" stroke="#9AA0A6" stroke-width="10" stroke-linecap="round"/><path d="M216 146 a14 14 0 1 0 20 16 l-10 -3 l-3 -10 z" fill="#9AA0A6" stroke="#555" stroke-width="2.5" stroke-linejoin="round"/>`,
    brush: `<line x1="202" y1="204" x2="222" y2="160" stroke="#C8864A" stroke-width="7" stroke-linecap="round"/><path d="M219 162 l-3 -5 l9 -13 l7 4 z" fill="#555"/><path d="M225 144 l7 4 q6 -12 -3 -15 z" fill="${c}" stroke="#222" stroke-width="1.5"/><circle cx="234" cy="166" r="4" fill="${c}"/><circle cx="228" cy="178" r="2.5" fill="${c}"/>`,
    skate: `<rect x="212" y="128" width="20" height="80" rx="10" fill="${c}" stroke="#222" stroke-width="3"/><path d="M216 140 h12 M216 196 h12" stroke="#222" stroke-width="2"/><circle cx="210" cy="141" r="4.5" fill="#333"/><circle cx="234" cy="141" r="4.5" fill="#333"/><circle cx="210" cy="195" r="4.5" fill="#333"/><circle cx="234" cy="195" r="4.5" fill="#333"/>`,
  };
  if(!items[prop]) return "";
  const sparkle = prop === "mic" ? `<path d="M216 120 l4 -10 l4 10 l10 4 l-10 4 l-4 10 l-4 -10 l-10 -4 z" fill="#fff"/>` : "";
  return S + items[prop] + H + sparkle;
}
function character(code, line = "#fff"){
  const t = NS.types[code] || {}, f = famOf(code), c = NS.families[f].color, L = FAM_LOOK[f];
  const skin = "#FFE1CC";
  // 上方被剪斷的線（品牌意象）
  const str = (x, cy, y1) => `<path d="M${x} 0V${cy - 8}" stroke="${line}" stroke-width="3.5"/><path d="M${x} ${cy + 8}V${y1}" stroke="${line}" stroke-width="3.5"/><path d="M${x - 7} ${cy - 2}l14 -4" stroke="${line}" stroke-width="2" opacity=".7"/>`;
  // 沒戴帽子的家族（分析家、外交家）要補上頭頂的頭髮
  const hairTop = (f === "NT" || f === "NF") ? `<path d="M57 108 Q52 46 120 44 Q188 46 183 108 Q170 70 120 66 Q70 70 57 108 Z" fill="${L.hair}"/>` : "";
  // 圖框比角色寬一點，右手的道具才不會被切掉（角色仍置中在 x=120）
  return `<svg viewBox="-6 0 252 260" xmlns="http://www.w3.org/2000/svg">
    ${str(78, 26, 62)}${str(162, 38, 62)}
    <path d="M38 260 C38 200 70 170 120 170 C170 170 202 200 202 260 Z" fill="${L.hoodie}"/>
    <path d="M78 176 Q120 214 162 176" fill="none" stroke="${mix(L.hoodie, "#ffffff", .15)}" stroke-width="9" stroke-linecap="round"/>
    <path d="M106 188 L103 226 M134 188 L137 226" stroke="${c}" stroke-width="4" stroke-linecap="round"/><circle cx="103" cy="228" r="4" fill="${c}"/><circle cx="137" cy="228" r="4" fill="${c}"/>
    <rect x="108" y="156" width="24" height="22" rx="8" fill="${mix(skin, "#C08060", .25)}"/>
    <circle cx="120" cy="110" r="62" fill="${skin}"/>
    ${hairTop}
    <path d="M58 104 Q66 66 120 62 Q174 66 182 104 Q164 90 152 100 Q142 84 128 96 Q116 82 104 96 Q92 84 84 100 Q72 90 58 104 Z" fill="${L.hair}"/>
    ${faceSvg(t.face)}
    ${hatSvg(f, c)}
    ${propSvg(t.prop, c, L.hoodie)}
  </svg>`;
}

/* ---------- 分享卡片 1080×1920 ---------- */
const STYLES = {
  // 鮮豔漸層：家族色當底，黑字
  pop: c => ({bg:`<defs><linearGradient id="bgg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${c}"/><stop offset="1" stop-color="${mix(c, "#FF5A1F", .45)}"/></linearGradient></defs><rect width="1080" height="1920" fill="url(#bgg)"/>`,
    ink:"#0A0A0A", sub:"rgba(10,10,10,.65)", panel:"#0A0A0A", ptext:"#FFFFFF", acc:c, blob:"rgba(255,255,255,.35)", logo:["#0A0A0A", "#0A0A0A"], dash:"#0A0A0A"}),
  // 深色霓虹：黑底，家族色點綴
  neon: c => ({bg:`<rect width="1080" height="1920" fill="#0A0A0A"/><circle cx="540" cy="820" r="420" fill="${c}" opacity=".10"/>`,
    ink:"#FFFFFF", sub:"#9A9A9A", panel:"#1A1A1A", ptext:"#FFFFFF", acc:c, blob:mix(c, "#0A0A0A", .75), logo:["#FFFFFF", "#00FF66"], dash:c})
};
function wrap(s, n){ const out = []; let line = ""; for(const ch of s){ if(line.length >= n && !"，。、！？」）".includes(ch)){ out.push(line); line = ""; } line += ch; } if(line) out.push(line); return out; }

// relay：這一條接力鏈的類型（含自己，最後一個是自己）；toName：交棒對象的暱稱（只印在圖上）
window.shareCard = function(code, style = "pop", site = "nostrings", relay = null, toName = ""){
  const t = NS.types[code], f = famOf(code), c = NS.families[f].color, P = STYLES[style](c);
  const ch = character(code, style === "pop" ? "#0A0A0A" : "#fff").replace(/^<svg[^>]*>/, "").replace(/<\/svg>\s*$/, "");
  const check = (x, y) => `<path d="M${x} ${y} l12 12 l22 -26" fill="none" stroke="${P.acc}" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>`;
  const me = (t.me || []).slice(0, 3);
  const meLines = me.map((s, i) => { const y = 1330 + i * 72; return `${check(140, y - 22)}<text x="196" y="${y}" font-family="${FONT}" font-size="42" font-weight="700" fill="${P.ptext}">${esc(s)}</text>`; }).join("");
  const lock = (x, y) => `<rect x="${x}" y="${y}" width="30" height="24" rx="5" fill="${P.ink}"/><path d="M${x + 6} ${y} V${y - 7} Q${x + 15} ${y - 19} ${x + 24} ${y - 7} V${y}" fill="none" stroke="${P.ink}" stroke-width="5"/>`;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1920" width="1080" height="1920">
  ${P.bg}
  <rect x="370" y="78" width="340" height="66" rx="33" fill="${P.panel}"/>
  <text x="540" y="123" text-anchor="middle" font-family="${FONT}" font-size="34" font-weight="700" fill="${P.ptext}">我的反骨人格</text>
  <text x="540" y="380" text-anchor="middle" font-family="${HEAVY}" font-size="230" font-weight="900" fill="${style === "neon" ? c : P.ink}" letter-spacing="10">${code}</text>
  <text x="540" y="482" text-anchor="middle" font-family="${FONT}" font-size="86" font-weight="900" fill="${P.ink}">${esc(t.name)}</text>
  <circle cx="540" cy="850" r="300" fill="${P.blob}"/>
  <g transform="translate(228 520) scale(2.6)">${ch}</g>
  <rect x="90" y="1200" width="900" height="300" rx="36" fill="${P.panel}"/>
  <text x="140" y="1262" font-family="${FONT}" font-size="34" font-weight="900" fill="${P.acc}">說的就是我</text>
  ${meLines}
  <text x="540" y="1590" text-anchor="middle" font-family="${FONT}" font-size="40" font-weight="900" fill="${P.ink}">反骨超能力｜${esc(t.power || "")}</text>
  ${relayRow(relay && relay.length ? relay : [code], P)}
  <text x="540" y="1772" text-anchor="middle" font-family="${FONT}" font-size="38" font-weight="900" fill="${toName && style === "neon" ? P.acc : P.ink}">${esc(toName ? NS.site.handoffTo.replace("{name}", toName) : NS.site.handoffNone.replace("{partner}", t.partner))}</text>
  ${lock(150, 1810)}
  <text x="200" y="1832" font-family="${FONT}" font-size="32" font-weight="700" fill="${P.sub}">${esc(NS.site.hiddenCard.replace("{code}", code))}</text>
  <g transform="translate(70 1850) scale(0.22)">${logo(P.logo[0], P.logo[1])}</g>
  <text x="1010" y="1896" text-anchor="end" font-family="${FONT}" font-size="28" font-weight="700" fill="${P.sub}">你是哪一型？${esc(site)}</text>
</svg>`;
};
function relayRow(chain, P){
  const n = chain.length, shown = chain.slice(-9), more = n > shown.length;
  let x = more ? 470 : 430, dots = more ? `<text x="430" y="1690" text-anchor="middle" font-family="${FONT}" font-size="36" font-weight="900" fill="${P.ink}">⋯</text>` : "";
  shown.forEach((c, i) => {
    const me = i === shown.length - 1, r = me ? 27 : 21, col = NS.families[famOf(c)].color;
    if(i > 0) dots += `<path d="M${x - 37} 1678 H${x - (me ? 27 : 21)}" stroke="${P.ink}" stroke-width="3" opacity=".5"/>`;
    dots += `<circle cx="${x}" cy="1678" r="${r}" fill="${col}" stroke="${me ? P.ink : "none"}" stroke-width="4"/><text x="${x}" y="${1678 + 4.5}" text-anchor="middle" font-family="${HEAVY}" font-size="${me ? 13 : 11}" font-weight="900" fill="#0A0A0A">${c}</text>`;
    x += 58;
  });
  return `<rect x="90" y="1638" width="300" height="80" rx="40" fill="${P.panel}"/>
  <text x="240" y="1691" text-anchor="middle" font-family="${FONT}" font-size="38" font-weight="900" fill="${P.ptext}">${esc(NS.site.relayCard.replace("{n}", n))}</text>${dots}`;
}
window.characterSvg = character;
})();
