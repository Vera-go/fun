/* 全網最聽勸：網站徽章（圓形，內容和配色照各網站內頁）和功能小圖示（粗黑邊貼紙風）。
   全部是向量圖，不同手機看起來一樣。用法：SiteIcons.badge("wheel", 32)、SiteIcons.icon("news", 24) */
(function () {
  const K = "#111";
  const S = `stroke="${K}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"`;
  let uid = 0;
  const star = (cx, cy, R, r) => { let d = ""; for (let i = 0; i < 10; i++) { const a = -Math.PI / 2 + i * Math.PI / 5, rad = i % 2 ? r : R; d += (i ? "L" : "M") + (cx + rad * Math.cos(a)).toFixed(2) + " " + (cy + rad * Math.sin(a)).toFixed(2); } return d + "Z"; };
  const heart = (x, y, s) => `<path d="M0 3 C-4 -1 -3 -5 0 -3 C3 -5 4 -1 0 3 Z" fill="#E6325F" stroke="${K}" stroke-width="${(1.4 / s).toFixed(2)}" stroke-linejoin="round" transform="translate(${x},${y}) scale(${s})"/>`;

  // 功能小圖示（viewBox 0 0 32 32）
  const ICONS = {
    wish: `<path d="M2 28 L10 20 M2 22 L7 17 M8 29 L13 24" fill="none" stroke="${K}" stroke-width="1.8" stroke-linecap="round" stroke-dasharray="1 3.2"/><path d="${star(18, 14, 13, 6.4)}" fill="#FFD60A" ${S}/><path d="M7 4 l1 2.6 2.6 1 -2.6 1 -1 2.6 -1 -2.6 -2.6 -1 2.6 -1 Z" fill="#FFF" stroke="${K}" stroke-width="1.3" stroke-linejoin="round"/>`,
    sprout: `<path d="M16 19 V10" fill="none" ${S}/><path d="M16 11 C10 11 6 8 6 4 C11 4 15 6 16 11 Z" fill="#8FE3A0" ${S}/><path d="M16 11 C22 11 26 8 26 4 C21 4 17 6 16 11 Z" fill="#8FE3A0" ${S}/><rect x="4.5" y="17" width="23" height="4.5" rx="1.5" fill="#E8A87C" ${S}/><path d="M7 21.5 L9.5 29 H22.5 L25 21.5 Z" fill="#E8A87C" ${S}/>`,
    flower: `<g fill="#FF9CC6" ${S}><ellipse cx="16" cy="7" rx="5" ry="5.6"/><ellipse cx="25" cy="14" rx="5.6" ry="5"/><ellipse cx="22" cy="24" rx="5" ry="5.6"/><ellipse cx="10" cy="24" rx="5" ry="5.6"/><ellipse cx="7" cy="14" rx="5.6" ry="5"/></g><circle cx="16" cy="16" r="5" fill="#FFD60A" ${S}/>`,
    moon: `<path d="M14.29 7 A11 11 0 1 0 24.5 21.29 A9 9 0 0 1 14.29 7 Z" fill="#FFF3A3" ${S}/><path d="M8 17 q2.4 2.4 4.8 0" fill="none" stroke="${K}" stroke-width="1.9" stroke-linecap="round"/><text x="22" y="10" font-size="8.5" font-weight="900" fill="${K}" font-family="Georgia,serif">z</text><text x="26" y="5.5" font-size="6" font-weight="900" fill="${K}" font-family="Georgia,serif">z</text>`,
    chat: `<path d="M5 4 H27 Q30 4 30 7 V19 Q30 22 27 22 H17 L10 29 V22 H5 Q2 22 2 19 V7 Q2 4 5 4 Z" fill="#FFF3A3" ${S}/>${heart(16, 12.5, 1.7)}`,
    news: `<rect x="3.5" y="7" width="25" height="19" rx="3" fill="#FFF3A3" ${S}/><path d="M4 9 L16 18.5 L28 9" fill="none" ${S}/>${heart(16, 21.5, 1.5)}`,
    done: `<path d="M6 30 V3" fill="none" ${S}/><path d="M6 5 H28 L23.5 11.5 L28 18 H6 Z" fill="#FFC2DA" ${S}/><path d="M10.5 11.5 L13.5 14.5 L19 8.5" fill="none" stroke="${K}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>`,
    book: `<path d="M2.5 14 Q9 12 16 15 V30 Q9 27 2.5 29 Z" fill="#FFFFFF" stroke="#111" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/><path d="M29.5 14 Q23 12 16 15 V30 Q23 27 29.5 29 Z" fill="#FFF3A3" stroke="#111" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/><path d="M6 20 H12 M6 23.5 H12 M20 20 H26 M20 23.5 H26" fill="none" stroke="#111" stroke-width="1.5" stroke-linecap="round"/><path d="M16.00 1.10L17.18 3.88L20.18 4.14L17.90 6.12L18.59 9.06L16.00 7.50L13.41 9.06L14.10 6.12L11.82 4.14L14.82 3.88Z" fill="#FFD60A" stroke="#111" stroke-width="1.5" stroke-linejoin="round"/><path d="M7 8 l.9 2.3 2.3 .9 -2.3 .9 -.9 2.3 -.9 -2.3 -2.3 -.9 2.3 -.9 Z M25 7 l.8 2 2 .8 -2 .8 -.8 2 -.8 -2 -2 -.8 2 -.8 Z" fill="#FF9CC6" stroke="#111" stroke-width="1.2" stroke-linejoin="round"/>`,
    // 揪團投票的活動類型：聚餐（碗和筷子）、旅遊（行李箱和吊牌）
    bowl: `<path d="M17 2.5 L24 13 M21.5 2 L27 12" fill="none" ${S}/><path d="M3.5 15 H28.5 A12.5 11 0 0 1 3.5 15 Z" fill="#FFC9A3" ${S}/><path d="M11 29 H21" fill="none" ${S}/><path d="M8 19 Q10 22.5 14 23.5" fill="none" stroke="#FFF" stroke-width="1.8" stroke-linecap="round"/>`,
    suitcase: `<rect x="3.5" y="9" width="21" height="18" rx="3" fill="#8FD3FF" ${S}/><path d="M10 9 V6.5 Q10 4.5 12 4.5 H16 Q18 4.5 18 6.5 V9" fill="none" ${S}/><path d="M9.5 9 V27 M18.5 9 V27" fill="none" ${S}/><path d="M24.5 13 L29 15.5 V21 H24.5" fill="#FFD60A" ${S}/><path d="M7 27 V29 M21 27 V29" fill="none" ${S}/>`,
    toolbox: `<path d="M10 11 V8 Q10 5 13 5 H19 Q22 5 22 8 V11" fill="none" ${S}/><rect x="3" y="11" width="26" height="16" rx="3" fill="#E6325F" ${S}/><path d="M3 18 H29" fill="none" ${S}/><rect x="12.5" y="15.5" width="7" height="5.5" rx="1.5" fill="#FFD60A" ${S}/>`,
  };

  // 安安老師（和英文教室內頁同一個頭像，只留開心的表情）
  const ANAN = `<circle cx="60" cy="60" r="58" fill="#ffe4f1"></circle> <path d="M31 38 C10 44 5 72 12 97 C16 109 27 112 29 104 C22 86 26 62 39 50 Z" fill="#ff8cc6"></path> <path d="M89 38 C110 44 115 72 108 97 C104 109 93 112 91 104 C98 86 94 62 81 50 Z" fill="#ff8cc6"></path> <path d="M19 66 C15 80 17 94 22 104" stroke="#f06aa9" stroke-width="2" fill="none" stroke-linecap="round"></path> <path d="M101 66 C105 80 103 94 98 104" stroke="#f06aa9" stroke-width="2" fill="none" stroke-linecap="round"></path> <path d="M33 120 C33 104 44 96 60 96 C76 96 87 104 87 120 Z" fill="#fff" stroke="#ead6e3" stroke-width="1.5"></path><rect x="55" y="85" width="10" height="12" rx="4" fill="#fbd9c6"></rect><path d="M50 97 L60 106 L70 97" fill="none" stroke="#ead6e3" stroke-width="2"></path><path d="M60 105 L51 100 L51 110 Z M60 105 L69 100 L69 110 Z" fill="#4f7cf0"></path><circle cx="60" cy="105" r="2.6" fill="#3a63d4"></circle> <ellipse cx="60" cy="62" rx="27" ry="28" fill="#ffeadf"></ellipse> <path d="M31 62 C27 34 42 20 60 20 C78 20 93 34 89 62 C86 52 83 46 80 43 C77 51 71 50 68 41 C64 50 56 50 53 41 C50 50 43 51 40 43 C36 47 33 53 31 62 Z" fill="#ff9ccd"></path> <path d="M33 56 C31 70 33 80 37 87 C37 76 36 66 39 58 Z" fill="#ff9ccd"></path> <path d="M87 56 C89 70 87 80 83 87 C83 76 84 66 81 58 Z" fill="#ff9ccd"></path> <path d="M60 21 C57 12 64 7 69 10 C63 12 62 16 60 21 Z" fill="#ff9ccd"></path> <path d="M44 30 C50 26 58 25 65 26" stroke="#ffd3ea" stroke-width="3" fill="none" stroke-linecap="round"></path> <polygon points="33.0,33.5 34.7,37.6 39.2,38.0 35.8,40.9 36.8,45.3 33.0,42.9 29.2,45.3 30.2,40.9 26.8,38.0 31.3,37.6" fill="#ffd23f" stroke="#f0a500" stroke-width="1"></polygon> <polygon points="87.0,33.5 88.7,37.6 93.2,38.0 89.8,40.9 90.8,45.3 87.0,42.9 83.2,45.3 84.2,40.9 80.8,38.0 85.3,37.6" fill="#ffd23f" stroke="#f0a500" stroke-width="1"></polygon> <ellipse cx="42.5" cy="73" rx="5" ry="3" fill="#ff9fb5" opacity=".6"></ellipse><ellipse cx="77.5" cy="73" rx="5" ry="3" fill="#ff9fb5" opacity=".6"></ellipse> <g stroke="#3b2340" stroke-width="2.6" fill="none" stroke-linecap="round"><path d="M41 66 Q47 58 53 66"></path><path d="M67 66 Q73 58 79 66"></path></g> <g><path d="M52.5 76 Q60 89 67.5 76 Z" fill="#c0485f"></path><path d="M55.5 81.5 Q60 86 64.5 81.5 Q60 84 55.5 81.5 Z" fill="#ff8fa3"></path></g> <g><polygon points="103.0,20.0 104.6,23.8 108.7,24.1 105.6,26.8 106.5,30.9 103.0,28.7 99.5,30.9 100.4,26.8 97.3,24.1 101.4,23.8" fill="#ffd23f"></polygon><polygon points="16.0,19.5 17.2,22.4 20.3,22.6 17.9,24.6 18.6,27.6 16.0,26.0 13.4,27.6 14.1,24.6 11.7,22.6 14.8,22.4" fill="#ffd23f"></polygon><polygon points="108.0,42.5 108.9,44.7 111.3,44.9 109.5,46.5 110.1,48.8 108.0,47.6 105.9,48.8 106.5,46.5 104.7,44.9 107.1,44.7" fill="#ff8cc6"></polygon></g> `;
  const GOLD = "#E8B34A";
  const g = inner => `<g transform="translate(8 8) scale(.75)">${inner}</g>`;
  const ring = (fill, extra = "", edge = K) => `<circle cx="20" cy="20" r="18" fill="${fill}" stroke="${edge}" stroke-width="2.6"/>${extra}`;

  // 網站徽章（viewBox 0 0 40 40）：形狀統一，內容照各網站內頁
  const BADGES = {
    restaurant: () => ring("#1B1208", `<circle cx="20" cy="20" r="14.6" fill="none" stroke="${GOLD}" stroke-width=".9" opacity=".7"/>`) + g(`<g fill="none" stroke="${GOLD}" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M7.5 4 V11 Q7.5 14.5 10.5 14.5 Q13.5 14.5 13.5 11 V4 M10.5 4 V28"/><path d="M22 4 Q28 9 26 17.5 H22 Z M22 17.5 V28"/></g>`),
    // 推薦及投票（揪團）：投票箱，選票上打勾；配色和原本的餐廳徽章一樣（深底金線）
    vote: () => ring("#1B1208", `<circle cx="20" cy="20" r="14.6" fill="none" stroke="${GOLD}" stroke-width=".9" opacity=".7"/>`) + g(`<g fill="none" stroke="${GOLD}" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M10 4 H22 V15 H10 Z"/><path d="M13 9.5 L15.5 12 L19.5 6.8"/><path d="M4 15 H28 V28 H4 Z"/><path d="M9 15 V17.5 H23 V15"/></g>`),
    wheel: () => ring("#FFC2DA") + g(`<path d="M5 10 L5 3 L12 7 M27 10 L27 3 L20 7" fill="#FF9CC6" stroke="${K}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="16" cy="18" r="12" fill="#FFB6D9" stroke="${K}" stroke-width="2"/><path d="M9 14 m0 0 a.8 .8 0 1 1 1.6 0 a2 2 0 1 1 -3.4 0 a3.4 3.4 0 1 1 5.6 0" fill="none" stroke="${K}" stroke-width="1.6" stroke-linecap="round"/><path d="M23 14 m0 0 a.8 .8 0 1 0 -1.6 0 a2 2 0 1 0 3.4 0 a3.4 3.4 0 1 0 -5.6 0" fill="none" stroke="${K}" stroke-width="1.6" stroke-linecap="round"/><ellipse cx="16" cy="22" rx="5" ry="3.6" fill="#FF86B8" stroke="${K}" stroke-width="2"/><ellipse cx="14.1" cy="22" rx="1.1" ry="1.7" fill="${K}"/><ellipse cx="17.9" cy="22" rx="1.1" ry="1.7" fill="${K}"/>`),
    english: () => { const id = "ac" + (uid++); return `<defs><clipPath id="${id}"><circle cx="20" cy="20" r="16.8"/></clipPath></defs><circle cx="20" cy="20" r="18" fill="#FFE4F1" stroke="${K}" stroke-width="2.6"/><g clip-path="url(#${id})"><svg x="3.2" y="3.2" width="33.6" height="33.6" viewBox="0 0 120 120">${ANAN}</svg></g>`; },
    nostrings: () => ring("#0A0A0A", "", "#00FF66") + g(`<g fill="none" stroke="#00FF66" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="8" width="14" height="16"/><path d="M9 13 L23 15 M9 17 L23 19"/><rect x="6" y="4" width="20" height="4.5" rx="2"/><rect x="6" y="23.5" width="20" height="4.5" rx="2"/><path d="M23 14 Q29 12 28 18 Q27 22 30 24"/></g><path d="M27 26 l4 3 M31 26 l-4 3" fill="none" stroke="#FF4D6D" stroke-width="2.2" stroke-linecap="round"/>`),
    lighthouse: () => ring("#1C3049", "", "#F3EAD8") + `<path d="M22 14 L36 8 L36 20 Z" fill="#FFE9B8" opacity=".5"/><path d="M15 33 L17 17 H23 L25 33 Z" fill="#F3EAD8"/><path d="M16.5 24 H23.5 L24 27 H16 Z" fill="#D8694F"/><rect x="16.5" y="12" width="7" height="6" rx="1" fill="#FFD877" stroke="#F3EAD8" stroke-width="1"/><path d="M15.5 12 L20 6.5 L24.5 12 Z" fill="#D8694F"/>`,
    // 喵喵列車長：戴列車長帽子的橘貓
    meowtrain: () => ring("#FFE7C7") + `<path d="M10.5 18 L11.5 9.5 L17 14.5 Z M29.5 18 L28.5 9.5 L23 14.5 Z" fill="#F6A64A" stroke="${K}" stroke-width="1.6" stroke-linejoin="round"/><ellipse cx="20" cy="23" rx="10.5" ry="9" fill="#F6A64A" stroke="${K}" stroke-width="1.6"/><path d="M17 15.5 V18 M20 15 V18 M23 15.5 V18" stroke="#D97A26" stroke-width="1.3" stroke-linecap="round"/><path d="M14.5 21.5 q1.5 -1.6 3 0 M22.5 21.5 q1.5 -1.6 3 0" fill="none" stroke="${K}" stroke-width="1.4" stroke-linecap="round"/><path d="M19.2 24.2 h1.6 l-.8 .9 Z" fill="#F07F98"/><path d="M18 26 q1 1 2 0 q1 1 2 0" fill="none" stroke="${K}" stroke-width="1.1" stroke-linecap="round"/><path d="M12.5 13.5 L12 9.5 Q20 6 28 9.5 L27.5 13.5 Z" fill="#2F57A3" stroke="${K}" stroke-width="1.5" stroke-linejoin="round"/><ellipse cx="20" cy="13.6" rx="9.2" ry="1.8" fill="#24407A" stroke="${K}" stroke-width="1.4"/><circle cx="20" cy="10.6" r="1.5" fill="#FFD447"/>`,
    portal: () => ring("#FFD60A") + g(`<path d="M16 2 L19.6 11 L29 11.6 L21.8 17.8 L24.2 27 L16 22 L7.8 27 L10.2 17.8 L3 11.6 L12.4 11 Z" fill="#FFFFFF" stroke="${K}" stroke-width="2" stroke-linejoin="round"/>`),
    idea: () => ring("#FFFDF5") + g(`<path d="M11 24 Q6 19 6 14 Q6 6 16 6 Q26 6 26 14 Q26 19 21 24 Z" fill="#FFF3A3" stroke="${K}" stroke-width="2" stroke-linejoin="round"/><rect x="11" y="24" width="10" height="5" rx="1.5" fill="#D9D9D9" stroke="${K}" stroke-width="2"/><path d="M16 1.5 V3.5 M4.5 8 L6.5 9.5 M27.5 8 L25.5 9.5" stroke="${K}" stroke-width="1.8" stroke-linecap="round"/>`),
  };


  // 線條小圖示（viewBox 0 0 24 24，顏色跟著文字 currentColor）：給 NOSTRINGS（螢光線條）和 Lighthouse（奶油、琥珀細線）用
  const LINE = {
    calc: '<circle cx="11" cy="13" r="8"/><path d="M11 8.5 v9 M8.3 11.3 c0 -2 5.4 -2 5.4 .2 c0 2.2 -5.4 1.2 -5.4 3.4 c0 2 5.4 1.8 5.4 -.2"/><path d="M20.5 2.5 v3.5 M18.7 4.2 h3.6"/>',
    bubbles: '<circle cx="9" cy="14" r="6"/><circle cx="18" cy="7.5" r="3.2"/><circle cx="17" cy="18.5" r="2.2"/><path d="M6.2 12 a3.4 3.4 0 0 1 2.4 -1.6"/>',
    lock: '<rect x="5" y="10.5" width="14" height="10" rx="2.2"/><path d="M8 10.5 V8 a4 4 0 0 1 8 0 V10.5"/><circle cx="12" cy="15.5" r="1.4"/>',
    unlock: '<rect x="5" y="10.5" width="14" height="10" rx="2.2"/><path d="M8 10.5 V8 a4 4 0 0 1 7.6 -1.7"/><circle cx="12" cy="15.5" r="1.4"/>',
    moon: '<path d="M20 14.5 A8.5 8.5 0 1 1 9.5 4 a7 7 0 0 0 10.5 10.5 Z"/>',
    volume: '<path d="M4 9.5 H8 L13 5 V19 L8 14.5 H4 Z"/><path d="M16 9 a4.5 4.5 0 0 1 0 6 M18.5 6.5 a8 8 0 0 1 0 11"/>',
    mute: '<path d="M4 9.5 H8 L13 5 V19 L8 14.5 H4 Z"/><path d="M16.5 9.5 L21.5 14.5 M21.5 9.5 L16.5 14.5"/>',
    trophy: '<path d="M7 4 H17 V10 a5 5 0 0 1 -10 0 Z"/><path d="M7 6 H4 a3 3 0 0 0 3 4 M17 6 H20 a3 3 0 0 1 -3 4"/><path d="M12 15 V20 M8.5 20.5 H15.5"/>',
    headset: '<path d="M4 14 V12 a8 8 0 0 1 16 0 V14"/><rect x="3" y="13" width="4.5" height="7" rx="2"/><rect x="16.5" y="13" width="4.5" height="7" rx="2"/><path d="M19 20 a4 3 0 0 1 -4 2 h-2"/>',
    anchor: '<circle cx="12" cy="5.5" r="2.3"/><path d="M12 8 V20 M7.5 11 H16.5 M5 13.5 a7 7 0 0 0 14 0 M5 13.5 l-1.8 -2.2 M19 13.5 l1.8 -2.2"/>',
    star: '<path d="M12 3.5 l2.6 5.4 5.9 .8 -4.3 4.1 1 5.9 -5.2 -2.8 -5.2 2.8 1 -5.9 -4.3 -4.1 5.9 -.8 Z"/>',
  };

  const wrap = (box, body, size, cls) => `<svg class="${cls}" viewBox="0 0 ${box} ${box}" width="${size}" height="${size}" aria-hidden="true" focusable="false">${body}</svg>`;
  window.SiteIcons = {
    /** 功能小圖示：wish、sprout、flower、moon、chat、news、done、book、toolbox */
    icon: (name, size = 24) => wrap(32, ICONS[name] || "", size, "wicon"),
    /** 網站徽章：restaurant、wheel、english、nostrings、lighthouse、meowtrain、portal、idea */
    badge: (name, size = 32) => wrap(40, (BADGES[name] || (() => ""))(), size, "wbadge"),
    /** 線條圖示：calc、bubbles、lock、unlock、moon、volume、mute、trophy、headset、anchor、star（fill 填 "currentColor" 就是實心） */
    line: (name, size = 18, fill = "none") => `<svg class="wline" viewBox="0 0 24 24" width="${size}" height="${size}" fill="${fill}" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${LINE[name] || ""}</svg>`,
    /** 純 SVG 字串（給不載入這個檔案的靜態頁面複製貼上用） */
    _raw: ICONS,
  };
})();
