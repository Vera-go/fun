/* 轉盤中間的小豬角色（20 個，都是固定在中間、不會跟著轉盤轉）。
   每個角色是一個函式：(dizzy) => SVG 內容（viewBox 0 0 120 120）；轉盤旋轉時 dizzy=true，眼睛會變漩渦。
   內容都是這個檔案寫死的字串，不含使用者輸入。
   每次按「旋轉」換下一個，洗牌用完一輪才重複；進度存在瀏覽器 localStorage。 */

const P = '#4A1942', W = '#FFFFFF';
const defs = `<defs>
<radialGradient id="skin" cx="40%" cy="35%" r="75%"><stop offset="0%" stop-color="#FFD6E8"/><stop offset="100%" stop-color="#FF9CC6"/></radialGradient>
</defs>`;
const swirl = (cx: number, cy: number, dir = 1) =>`<path d="M${cx} ${cy} m0 0 a1.6 1.6 0 1 ${dir>0?1:0} 3.2 0 a4 4 0 1 ${dir>0?1:0} -6.4 0 a6.4 6.4 0 1 ${dir>0?1:0} 10.4 0" fill="none" stroke="${P}" stroke-width="2.2" stroke-linecap="round" transform="translate(${-1.6},0)"/>`;
const snout = (cx: number, cy: number, rx = 14, ry = 10) =>`<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="#FF86B8" stroke="${W}" stroke-width="2.5"/><ellipse cx="${cx-rx*0.38}" cy="${cy}" rx="2.4" ry="3.6" fill="${P}"/><ellipse cx="${cx+rx*0.38}" cy="${cy}" rx="2.4" ry="3.6" fill="${P}"/>`;
const ear = (x: number, y: number, flip = 1, rot = 0) =>`<path d="M${x} ${y} C${x-14*flip} ${y-6} ${x-16*flip} ${y-26} ${x-6*flip} ${y-32} C${x+6*flip} ${y-28} ${x+12*flip} ${y-14} ${x+10*flip} ${y} Z" fill="#FF8DBD" stroke="${W}" stroke-width="3" stroke-linejoin="round" transform="rotate(${rot} ${x} ${y})"/>`;

const chars: Record<string, (d: boolean) => string> = {
// 1 獨眼豬：一顆大眼睛 + 豬鼻
cyclops: (d: boolean) =>`${defs}
${ear(32,56,1,-8)}${ear(88,56,-1,8)}
<circle cx="60" cy="68" r="38" fill="url(#skin)" stroke="${W}" stroke-width="4"/>
<circle cx="60" cy="60" r="19" fill="${W}" stroke="${P}" stroke-width="2"/>
${d?`<circle cx="60" cy="60" r="12" fill="#A5F1E9"/>${swirl(60,60)}`:`<circle cx="60" cy="60" r="12" fill="#7FE0D3"/><circle cx="60" cy="60" r="6" fill="${P}"/><circle cx="64" cy="55.5" r="2.4" fill="${W}"/>`}
<path d="M44 44 l-5 -7 M52 40 l-2 -9 M68 40 l2 -9 M76 44 l5 -7" stroke="${P}" stroke-width="2.6" stroke-linecap="round"/>
<ellipse cx="32" cy="84" rx="7" ry="4.5" fill="#FF7FB0" opacity=".55"/><ellipse cx="88" cy="84" rx="7" ry="4.5" fill="#FF7FB0" opacity=".55"/>
${snout(60,92,13,9)}
${d?`<path d="M50 106 Q60 114 70 106 Z" fill="${P}"/>`:`<rect x="56" y="100" width="8" height="8" rx="2" fill="${W}" stroke="${P}" stroke-width="1.4"/>`}`,

// 2 柴郡豬：只有大笑和半月眼睛，頭上有條紋
cheshire: (d: boolean) =>`${defs}
${ear(34,50,1,-10)}${ear(86,50,-1,10)}
<circle cx="60" cy="66" r="40" fill="#D9A6FF" stroke="${W}" stroke-width="4"/>
<path d="M30 40 Q60 24 90 40" fill="none" stroke="#9B5CFF" stroke-width="5" stroke-linecap="round"/>
<path d="M24 54 Q60 32 96 54" fill="none" stroke="#9B5CFF" stroke-width="5" stroke-linecap="round" opacity=".8"/>
${d?`${swirl(42,62)}${swirl(78,62,-1)}`:`<path d="M34 64 Q42 54 50 64" fill="none" stroke="${P}" stroke-width="3.6" stroke-linecap="round"/><path d="M70 64 Q78 54 86 64" fill="none" stroke="${P}" stroke-width="3.6" stroke-linecap="round"/>`}
<ellipse cx="56" cy="76" rx="2" ry="2.8" fill="${P}"/><ellipse cx="64" cy="76" rx="2" ry="2.8" fill="${P}"/>
<path d="M22 82 Q60 ${d?132:116} 98 82 Q60 ${d?98:96} 22 82 Z" fill="${P}" stroke="${W}" stroke-width="2.5" stroke-linejoin="round"/>
<path d="M30 88 Q60 ${d?108:104} 90 88 L88 94 Q60 ${d?114:110} 32 94 Z" fill="${W}"/>
<path d="M42 90 L41 98 M52 92 L52 101 M60 93 L60 102 M68 92 L68 101 M78 90 L79 98" stroke="${P}" stroke-width="1.4"/>`,

// 3 茶杯豬：從茶杯裡探出頭，豬尾巴是杯耳，頭上冒蒸氣漩渦
teacup: (d: boolean) =>`${defs}
<path d="M44 20 q-8 -8 0 -14 q8 -6 0 -12" transform="translate(0,14)" fill="none" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" opacity=".85"/>
<path d="M76 20 q8 -8 0 -14 q-8 -6 0 -12" transform="translate(0,14)" fill="none" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" opacity=".85"/>
${ear(40,44,1,-12)}${ear(80,44,-1,12)}
<circle cx="60" cy="56" r="28" fill="url(#skin)" stroke="${W}" stroke-width="3.5"/>
${d?`${swirl(50,52)}${swirl(70,52,-1)}`:`<circle cx="50" cy="52" r="4.6" fill="${W}"/><circle cx="70" cy="52" r="4.6" fill="${W}"/><circle cx="51" cy="53" r="2.4" fill="${P}"/><circle cx="69" cy="53" r="2.4" fill="${P}"/>`}
${snout(60,66,10,7)}
<path d="M98 76 q18 -2 14 12 q-4 12 -18 8 q10 -2 8 -8 q-2 -6 -8 -4" fill="none" stroke="#FF8DBD" stroke-width="5" stroke-linecap="round"/>
<path d="M18 74 H102 Q102 112 60 112 Q18 112 18 74 Z" fill="#FFFDF5" stroke="${P}" stroke-width="2.6" stroke-linejoin="round"/>
<ellipse cx="60" cy="74" rx="42" ry="6" fill="#FFB6D9" stroke="${P}" stroke-width="2.6"/>
<circle cx="38" cy="94" r="4" fill="#FF6FB5"/><circle cx="60" cy="100" r="4" fill="#7FE0D3"/><circle cx="82" cy="94" r="4" fill="#FFE27A"/>`,

// 4 兔子洞：催眠漩渦，從洞裡露出兩隻眼睛和豬鼻
hole: (d: boolean) =>`${defs}
<circle cx="60" cy="62" r="42" fill="${P}" stroke="${W}" stroke-width="4"/>
<path d="M60 62 m0 0 a4 4 0 0 1 8 0 a9 9 0 0 1 -18 0 a14 14 0 0 1 28 0 a19 19 0 0 1 -38 0 a24 24 0 0 1 48 0 a29 29 0 0 1 -58 0 a34 34 0 0 1 68 0" fill="none" stroke="#FF9CC6" stroke-width="3.4" stroke-linecap="round" ${d?'transform="rotate(180 60 62)"':''}/>
<path d="M60 62 m0 0 a4 4 0 0 1 8 0 a9 9 0 0 1 -18 0 a14 14 0 0 1 28 0 a19 19 0 0 1 -38 0" fill="none" stroke="#A5F1E9" stroke-width="2" stroke-linecap="round" opacity=".8" transform="rotate(${d?90:0} 60 62)"/>
${ear(34,32,1,-20)}${ear(86,32,-1,20)}
<circle cx="45" cy="52" r="9" fill="${W}" stroke="${P}" stroke-width="2"/><circle cx="75" cy="52" r="9" fill="${W}" stroke="${P}" stroke-width="2"/>
${d?`${swirl(45,52)}${swirl(75,52,-1)}`:`<circle cx="47" cy="53" r="4.4" fill="${P}"/><circle cx="73" cy="53" r="4.4" fill="${P}"/><circle cx="48.6" cy="51.4" r="1.4" fill="${W}"/><circle cx="74.6" cy="51.4" r="1.4" fill="${W}"/>`}
${snout(60,76,12,8.5)}`,

// 5 懷錶豬：錶面是臉，豬鼻當指針軸心，耳朵+錶冠
watch: (d: boolean) =>`${defs}
${ear(36,44,1,-14)}${ear(84,44,-1,14)}
<rect x="52" y="12" width="16" height="12" rx="3" fill="#FFD84D" stroke="${W}" stroke-width="2.5"/>
<circle cx="60" cy="9" r="5" fill="none" stroke="#FFD84D" stroke-width="3"/>
<circle cx="60" cy="68" r="40" fill="#FFD84D" stroke="${W}" stroke-width="4"/>
<circle cx="60" cy="68" r="32" fill="#FFFDF5" stroke="${P}" stroke-width="2"/>
${[...Array(12)].map((_, i) =>{const a=i*Math.PI/6;const r1=i%3?27:24,r2=30;return `<line x1="${60+r1*Math.sin(a)}" y1="${68-r1*Math.cos(a)}" x2="${60+r2*Math.sin(a)}" y2="${68-r2*Math.cos(a)}" stroke="${P}" stroke-width="${i%3?1.4:2.4}" stroke-linecap="round"/>`}).join('')}
${d?`${swirl(46,56)}${swirl(74,56,-1)}`:`<circle cx="46" cy="56" r="4" fill="${P}"/><circle cx="74" cy="56" r="4" fill="${P}"/><circle cx="47.2" cy="54.8" r="1.2" fill="${W}"/><circle cx="75.2" cy="54.8" r="1.2" fill="${W}"/>`}
<line x1="60" y1="76" x2="${d?36:60}" y2="${d?88:50}" stroke="${P}" stroke-width="3" stroke-linecap="round" opacity="0"/>
${snout(60,76,11,8)}
<path d="M44 92 Q60 102 76 92" fill="none" stroke="${P}" stroke-width="2.6" stroke-linecap="round"/>`,

// 6 撲克牌豬：紅心牌長出豬耳朵、豬鼻和小蹄
card: (d: boolean) =>`${defs}
<g transform="rotate(${d?-12:-7} 60 64)">
<path d="M28 34 C18 30 16 14 26 10 C32 14 36 22 36 30 Z" fill="#FF8DBD" stroke="${W}" stroke-width="3" stroke-linejoin="round"/>
<path d="M92 34 C102 30 104 14 94 10 C88 14 84 22 84 30 Z" fill="#FF8DBD" stroke="${W}" stroke-width="3" stroke-linejoin="round"/>
<rect x="30" y="20" width="60" height="80" rx="9" fill="#FFFDF5" stroke="${P}" stroke-width="3"/>
<rect x="36" y="26" width="48" height="68" rx="5" fill="none" stroke="#FFC0D9" stroke-width="1.6" stroke-dasharray="3 3"/>
<text x="40" y="39" font-size="10" font-weight="700" fill="#E6325F" font-family="Georgia,serif">♥</text>
<text x="80" y="92" font-size="10" font-weight="700" fill="#E6325F" font-family="Georgia,serif" transform="rotate(180 80 88)">♥</text>
${d?`${swirl(50,48)}${swirl(70,48,-1)}`:`<circle cx="50" cy="48" r="4.4" fill="${W}" stroke="${P}" stroke-width="1.6"/><circle cx="70" cy="48" r="4.4" fill="${W}" stroke="${P}" stroke-width="1.6"/><circle cx="51" cy="49" r="2.2" fill="${P}"/><circle cx="69" cy="49" r="2.2" fill="${P}"/>`}
<path d="M60 90 C44 78 40 70 40 64 C40 58 45 55 50 55 C55 55 58 58 60 61 C62 58 65 55 70 55 C75 55 80 58 80 64 C80 70 76 78 60 90 Z" fill="#E6325F" stroke="${W}" stroke-width="2"/>
${snout(60,68,9,6.5)}
<ellipse cx="46" cy="106" rx="7" ry="5" fill="#FF8DBD" stroke="${W}" stroke-width="2.5"/><ellipse cx="74" cy="106" rx="7" ry="5" fill="#FF8DBD" stroke="${W}" stroke-width="2.5"/>
</g>`,
};


const eyeN = (d: boolean, x: number, y: number, r = 5, dir = 1) =>d?swirl(x,y,dir):`<circle cx="${x}" cy="${y}" r="${r}" fill="${W}" stroke="${P}" stroke-width="1.6"/><circle cx="${x+r*0.18}" cy="${y+r*0.18}" r="${r*0.52}" fill="${P}"/><circle cx="${x+r*0.4}" cy="${y-r*0.28}" r="${r*0.2}" fill="${W}"/>`;
const blush = (x: number, y: number, rx = 6, ry = 4) =>`<ellipse cx="${x}" cy="${y}" rx="${rx}" ry="${ry}" fill="#FF7FB0" opacity=".55"/>`;
const chars2: Record<string, (d: boolean) => string> = {
// 7 蘑菇豬（吃我）
mushroom: (d: boolean) =>`${defs}
<rect x="42" y="56" width="36" height="52" rx="16" fill="#FFF2E0" stroke="${P}" stroke-width="2.6"/>
${eyeN(d,52,78,4.6)}${eyeN(d,68,78,4.6,-1)}${snout(60,92,9,6.5)}${blush(46,88,4,3)}${blush(74,88,4,3)}
<path d="M10 62 Q10 14 60 14 Q110 14 110 62 Q60 74 10 62 Z" fill="#FF5C8A" stroke="${W}" stroke-width="4" stroke-linejoin="round"/>
<circle cx="34" cy="38" r="8" fill="${W}"/><circle cx="64" cy="28" r="6" fill="${W}"/><circle cx="88" cy="46" r="9" fill="${W}"/><circle cx="50" cy="56" r="4" fill="${W}"/><circle cx="100" cy="30" r="3.4" fill="${W}"/>
<path d="M30 20 L38 4 L48 18 Z" fill="#FF8DBD" stroke="${W}" stroke-width="2.6" stroke-linejoin="round"/><path d="M90 20 L82 4 L72 18 Z" fill="#FF8DBD" stroke="${W}" stroke-width="2.6" stroke-linejoin="round"/>`,

// 8 藥水瓶豬（喝我）
bottle: (d: boolean) =>`${defs}
<circle cx="86" cy="22" r="3" fill="#CFF3FF"/><circle cx="94" cy="14" r="2" fill="#CFF3FF"/><circle cx="26" cy="26" r="2.4" fill="#CFF3FF"/>
<rect x="50" y="8" width="20" height="12" rx="3" fill="#C98B5A" stroke="${P}" stroke-width="2"/>
<path d="M50 20 H70 V38 Q96 46 96 72 V94 Q96 112 78 112 H42 Q24 112 24 94 V72 Q24 46 50 38 Z" fill="#DDF6FF" stroke="${P}" stroke-width="2.8" stroke-linejoin="round"/>
<path d="M25 70 Q42 62 60 70 T95 70 V94 Q95 111 78 111 H42 Q25 111 25 94 Z" fill="#FF9CC6"/>
<path d="M36 52 L40 34 L50 46 Z" fill="#FF8DBD" stroke="${W}" stroke-width="2.4" stroke-linejoin="round"/><path d="M84 52 L80 34 L70 46 Z" fill="#FF8DBD" stroke="${W}" stroke-width="2.4" stroke-linejoin="round"/>
${eyeN(d,46,80,5)}${eyeN(d,74,80,5,-1)}${snout(60,96,10,7)}
<rect x="52" y="40" width="16" height="14" rx="3" fill="#FFFDF5" stroke="${P}" stroke-width="1.6" transform="rotate(-6 60 47)"/><text x="60" y="51" text-anchor="middle" font-size="10" fill="#E6325F" font-family="Georgia,serif" transform="rotate(-6 60 47)">♥</text>`,

// 9 蛋糕豬
cake: (d: boolean) =>`${defs}
<path d="M22 66 H98 V98 Q98 106 90 106 H30 Q22 106 22 98 Z" fill="#FFE2B8" stroke="${P}" stroke-width="2.6" stroke-linejoin="round"/>
<path d="M20 62 Q20 54 30 56 Q34 66 42 58 Q50 68 58 58 Q66 68 74 58 Q82 66 88 56 Q100 54 100 62 V68 H20 Z" fill="#FFFDF5" stroke="${P}" stroke-width="2.6" stroke-linejoin="round"/>
<rect x="38" y="34" width="44" height="26" rx="8" fill="#FFB6D9" stroke="${P}" stroke-width="2.6"/>
<path d="M44 34 L46 20 L56 32 Z" fill="#FF8DBD" stroke="${W}" stroke-width="2.4" stroke-linejoin="round"/><path d="M76 34 L74 20 L64 32 Z" fill="#FF8DBD" stroke="${W}" stroke-width="2.4" stroke-linejoin="round"/>
<circle cx="60" cy="24" r="6.5" fill="#E6325F" stroke="${W}" stroke-width="2"/><path d="M60 18 Q64 8 72 8" fill="none" stroke="#5FBF7A" stroke-width="2.4" stroke-linecap="round"/>
${eyeN(d,48,82,5)}${eyeN(d,72,82,5,-1)}${snout(60,94,10,7)}${blush(36,90,5,3.4)}${blush(84,90,5,3.4)}
<path d="M42 45 q4 -6 8 0 q4 6 8 0" fill="none" stroke="#FFFDF5" stroke-width="2.2" stroke-linecap="round" transform="translate(4,0)"/>`,

// 10 毛毛蟲豬
caterpillar: (d: boolean) =>`${defs}
<circle cx="100" cy="98" r="11" fill="#B9F2B5" stroke="${W}" stroke-width="3"/>
<circle cx="84" cy="86" r="15" fill="#A5EBA0" stroke="${W}" stroke-width="3.4"/>
<circle cx="68" cy="94" r="13" fill="#B9F2B5" stroke="${W}" stroke-width="3"/>
<path d="M40 38 Q34 22 24 22" fill="none" stroke="${P}" stroke-width="2.6" stroke-linecap="round"/><circle cx="24" cy="22" r="4.5" fill="#FF6FB5" stroke="${W}" stroke-width="2"/>
<path d="M62 36 Q66 20 78 18" fill="none" stroke="${P}" stroke-width="2.6" stroke-linecap="round"/><circle cx="78" cy="18" r="4.5" fill="#FF6FB5" stroke="${W}" stroke-width="2"/>
<circle cx="48" cy="62" r="32" fill="url(#skin)" stroke="${W}" stroke-width="4"/>
${eyeN(d,37,54,6)}${eyeN(d,59,54,6,-1)}${blush(26,68,5,3.4)}${blush(70,68,5,3.4)}${snout(48,70,11,8)}
${d?`<path d="M40 86 Q48 94 56 86 Z" fill="${P}"/>`:`<path d="M39 84 Q48 91 57 84" fill="none" stroke="${P}" stroke-width="2.4" stroke-linecap="round"/>`}
<circle cx="88" cy="40" r="3.4" fill="none" stroke="#FFFFFF" stroke-width="2" opacity=".9"/><circle cx="100" cy="30" r="5" fill="none" stroke="#FFFFFF" stroke-width="2" opacity=".9"/><circle cx="108" cy="16" r="6.5" fill="none" stroke="#FFFFFF" stroke-width="2" opacity=".9"/>`,

// 11 紅心皇后豬
queen: (d: boolean) =>`${defs}
${ear(32,64,1,-14)}${ear(88,64,-1,14)}
<circle cx="60" cy="74" r="36" fill="url(#skin)" stroke="${W}" stroke-width="4"/>
<path d="M30 46 L34 22 L46 36 L60 16 L74 36 L86 22 L90 46 Q60 54 30 46 Z" fill="#FFD84D" stroke="${P}" stroke-width="2.6" stroke-linejoin="round"/>
<path d="M60 40 C54 36 52 32 55 30 C57 29 59 30 60 32 C61 30 63 29 65 30 C68 32 66 36 60 40 Z" fill="#E6325F"/>
<circle cx="34" cy="21" r="2.6" fill="#E6325F"/><circle cx="86" cy="21" r="2.6" fill="#E6325F"/>
${eyeN(d,46,70,5)}${eyeN(d,74,70,5,-1)}
<path d="M36 82 C31 78 31 73 35 73 C37 73 38 74 39 75 C40 74 41 73 43 73 C47 73 47 78 42 82 Z" fill="#E6325F" opacity=".85" transform="translate(-4,6)"/>
<path d="M84 82 C79 78 79 73 83 73 C85 73 86 74 87 75 C88 74 89 73 91 73 C95 73 95 78 90 82 Z" fill="#E6325F" opacity=".85" transform="translate(4,6)"/>
${snout(60,86,11,8)}
${d?`<path d="M50 100 Q60 108 70 100 Z" fill="${P}"/>`:`<path d="M52 100 Q60 105 68 100" fill="none" stroke="#E6325F" stroke-width="3.2" stroke-linecap="round"/>`}`,

// 12 月亮豬
moon: (d: boolean) =>`${defs}
<mask id="cres"><rect width="120" height="120" fill="#000"/><circle cx="58" cy="64" r="44" fill="#fff"/><circle cx="82" cy="56" r="36" fill="#000"/></mask>
<rect width="120" height="120" fill="#FFF3A6" mask="url(#cres)"/>
<path d="M58 20 A44 44 0 0 0 58 108" fill="none" stroke="${W}" stroke-width="4" opacity="0"/>
<path d="M36 26 L42 10 L50 24 Z" fill="#FF8DBD" stroke="${W}" stroke-width="2.4" stroke-linejoin="round"/>
${d?swirl(38,56):`<path d="M28 58 Q36 48 44 58" fill="none" stroke="${P}" stroke-width="3.4" stroke-linecap="round"/>`}
${blush(30,70,5,3.4)}
<ellipse cx="52" cy="76" rx="11" ry="8" fill="#FF86B8" stroke="${W}" stroke-width="2.4"/><ellipse cx="49" cy="76" rx="2" ry="3.2" fill="${P}"/><ellipse cx="56" cy="76" rx="2" ry="3.2" fill="${P}"/>
<path d="M36 94 Q46 100 54 94" fill="none" stroke="${P}" stroke-width="2.6" stroke-linecap="round"/>
<path d="M98 24 l3 7 7 3 -7 3 -3 7 -3 -7 -7 -3 7 -3 Z" fill="#FFE27A" stroke="${W}" stroke-width="1.4"/>
<path d="M102 82 l2 5 5 2 -5 2 -2 5 -2 -5 -5 -2 5 -2 Z" fill="${W}"/><circle cx="92" cy="58" r="2" fill="${W}"/>`,

// 13 三眼豬
threeeyes: (d: boolean) =>`${defs}
${ear(32,56,1,-10)}${ear(88,56,-1,10)}
<circle cx="60" cy="68" r="38" fill="url(#skin)" stroke="${W}" stroke-width="4"/>
${d?`${swirl(36,60)}${swirl(60,50,-1)}${swirl(84,60)}`:`<circle cx="36" cy="60" r="8" fill="${W}" stroke="${P}" stroke-width="1.8"/><circle cx="60" cy="52" r="10" fill="${W}" stroke="${P}" stroke-width="1.8"/><circle cx="84" cy="60" r="8" fill="${W}" stroke="${P}" stroke-width="1.8"/><circle cx="38" cy="61" r="4" fill="${P}"/><circle cx="60" cy="53" r="5.4" fill="#7FE0D3" stroke="${P}" stroke-width="1.6"/><circle cx="60" cy="53" r="2.4" fill="${P}"/><circle cx="82" cy="61" r="4" fill="${P}"/><circle cx="40" cy="58.5" r="1.4" fill="${W}"/><circle cx="84" cy="58.5" r="1.4" fill="${W}"/>`}
${blush(30,80,5,3.4)}${blush(90,80,5,3.4)}${snout(60,88,12,8.5)}
<path d="M48 102 Q60 110 72 102" fill="none" stroke="${P}" stroke-width="2.6" stroke-linecap="round"/>`,

// 14 氣球豬
balloon: (d: boolean) =>`${defs}
<path d="M60 100 Q52 110 62 114 Q70 116 64 106" fill="none" stroke="#FFFFFF" stroke-width="2.4" stroke-linecap="round" opacity=".95"/>
<path d="M54 98 L60 90 L66 98 Z" fill="#FF6FB5" stroke="${W}" stroke-width="2.4" stroke-linejoin="round"/>
${ear(38,32,1,-14)}${ear(82,32,-1,14)}
<path d="M60 92 C26 86 18 62 20 48 C22 26 40 14 60 14 C80 14 98 26 100 48 C102 62 94 86 60 92 Z" fill="url(#skin)" stroke="${W}" stroke-width="4"/>
<ellipse cx="38" cy="34" rx="7" ry="12" fill="${W}" opacity=".6" transform="rotate(28 38 34)"/>
${eyeN(d,46,50,5.4)}${eyeN(d,74,50,5.4,-1)}${blush(34,62,6,4)}${blush(86,62,6,4)}${snout(60,66,11,8)}
${d?`<path d="M52 80 Q60 88 68 80 Z" fill="${P}"/>`:`<path d="M52 79 Q60 85 68 79" fill="none" stroke="${P}" stroke-width="2.6" stroke-linecap="round"/>`}`,

// 15 水母豬
jelly: (d: boolean) =>`${defs}
<g fill="none" stroke="#FF9CC6" stroke-width="4.5" stroke-linecap="round">
<path d="M34 76 Q28 88 36 96 Q42 104 34 112"/><path d="M48 80 Q42 92 50 100 Q56 108 48 116"/><path d="M62 80 Q68 92 60 100 Q54 108 62 116"/><path d="M76 80 Q82 92 74 100 Q68 108 76 114"/><path d="M88 76 Q94 88 86 96 Q80 104 88 110"/></g>
<path d="M14 76 Q12 18 60 16 Q108 18 106 76 Q96 70 86 78 Q73 70 60 78 Q47 70 34 78 Q24 70 14 76 Z" fill="#E4B8FF" stroke="${W}" stroke-width="4" stroke-linejoin="round"/>
<path d="M30 34 L36 14 L46 28 Z" fill="#FF8DBD" stroke="${W}" stroke-width="2.4" stroke-linejoin="round"/><path d="M90 34 L84 14 L74 28 Z" fill="#FF8DBD" stroke="${W}" stroke-width="2.4" stroke-linejoin="round"/>
<circle cx="30" cy="52" r="4" fill="${W}" opacity=".6"/><circle cx="92" cy="44" r="3" fill="${W}" opacity=".6"/><circle cx="76" cy="30" r="2.4" fill="${W}" opacity=".6"/>
${eyeN(d,46,52,5.4)}${eyeN(d,74,52,5.4,-1)}${blush(34,64,5,3.4)}${blush(86,64,5,3.4)}${snout(60,64,9,6.4)}`,

// 16 吐司豬
toast: (d: boolean) =>`${defs}
<path d="M24 108 V54 Q6 48 10 30 Q16 12 38 18 Q60 8 82 18 Q104 12 110 30 Q114 48 96 54 V108 Z" fill="#D9A05B" stroke="${P}" stroke-width="2.8" stroke-linejoin="round"/>
<path d="M32 100 V50 Q18 44 20 32 Q24 22 40 26 Q60 18 80 26 Q96 22 100 32 Q102 44 88 50 V100 Z" fill="#FFE9B8"/>
<path d="M38 28 L44 12 L52 26 Z" fill="#FF8DBD" stroke="${W}" stroke-width="2.4" stroke-linejoin="round"/><path d="M82 28 L76 12 L68 26 Z" fill="#FF8DBD" stroke="${W}" stroke-width="2.4" stroke-linejoin="round"/>
<rect x="46" y="34" width="28" height="16" rx="3" fill="#FFE04D" stroke="${P}" stroke-width="2" transform="rotate(-6 60 42)"/>
${eyeN(d,46,70,5)}${eyeN(d,74,70,5,-1)}${blush(36,82,5,3.4)}${blush(84,82,5,3.4)}${snout(60,86,11,8)}
${d?`<path d="M52 100 Q60 108 68 100 Z" fill="${P}"/>`:`<path d="M52 99 Q60 105 68 99" fill="none" stroke="${P}" stroke-width="2.6" stroke-linecap="round"/>`}`,

// 17 幽靈豬
ghost: (d: boolean) =>`${defs}
<path d="M22 108 V58 Q22 14 60 14 Q98 14 98 58 V108 L86 98 L73 108 L60 98 L47 108 L34 98 Z" fill="#F4ECFF" stroke="${P}" stroke-width="2.8" stroke-linejoin="round"/>
<path d="M32 28 L38 10 L48 24 Z" fill="#FF8DBD" stroke="${W}" stroke-width="2.4" stroke-linejoin="round"/><path d="M88 28 L82 10 L72 24 Z" fill="#FF8DBD" stroke="${W}" stroke-width="2.4" stroke-linejoin="round"/>
${d?`${swirl(46,56)}${swirl(74,56,-1)}`:`<ellipse cx="46" cy="56" rx="5.4" ry="8" fill="${P}"/><ellipse cx="74" cy="56" rx="5.4" ry="8" fill="${P}"/><circle cx="48" cy="52" r="2" fill="${W}"/><circle cx="76" cy="52" r="2" fill="${W}"/>`}
${blush(34,74,6,4)}${blush(86,74,6,4)}${snout(60,76,11,8)}
<path d="M54 90 Q60 96 66 90" fill="none" stroke="${P}" stroke-width="2.6" stroke-linecap="round"/>
<path d="M104 34 l2 5 5 2 -5 2 -2 5 -2 -5 -5 -2 5 -2 Z" fill="#FFE27A"/><circle cx="14" cy="40" r="2.4" fill="#C9A6FF"/>`,

// 18 外星豬
alien: (d: boolean) =>`${defs}
<path d="M44 34 Q36 14 24 12" fill="none" stroke="${P}" stroke-width="2.8" stroke-linecap="round"/><circle cx="24" cy="12" r="5" fill="#7FE0D3" stroke="${W}" stroke-width="2.2"/>
<path d="M76 34 Q84 14 96 12" fill="none" stroke="${P}" stroke-width="2.8" stroke-linecap="round"/><circle cx="96" cy="12" r="5" fill="#FFE27A" stroke="${W}" stroke-width="2.2"/>
<path d="M60 108 C26 108 14 84 16 62 C18 42 38 30 60 30 C82 30 102 42 104 62 C106 84 94 108 60 108 Z" fill="#B8F5D8" stroke="${W}" stroke-width="4"/>
${d?`${swirl(40,64)}${swirl(80,64,-1)}`:`<ellipse cx="38" cy="64" rx="12" ry="8" fill="${P}" transform="rotate(-18 38 64)"/><ellipse cx="82" cy="64" rx="12" ry="8" fill="${P}" transform="rotate(18 82 64)"/><circle cx="34" cy="61" r="3" fill="${W}"/><circle cx="78" cy="61" r="3" fill="${W}"/>`}
${snout(60,84,10,7.4)}
<path d="M52 98 Q60 103 68 98" fill="none" stroke="${P}" stroke-width="2.4" stroke-linecap="round"/>
<circle cx="26" cy="86" r="1.6" fill="${W}"/><circle cx="94" cy="88" r="1.6" fill="${W}"/>`,

// 19 骰子豬
dice: (d: boolean) =>`${defs}
<g transform="rotate(${d?-14:-8} 60 66)">
<path d="M34 36 L20 8 L54 26 Z" fill="#FF8DBD" stroke="${W}" stroke-width="2.6" stroke-linejoin="round"/><path d="M86 36 L100 8 L66 26 Z" fill="#FF8DBD" stroke="${W}" stroke-width="2.6" stroke-linejoin="round"/>
<rect x="20" y="24" width="80" height="80" rx="18" fill="#FFFDF5" stroke="${P}" stroke-width="3"/>
<rect x="26" y="30" width="68" height="68" rx="13" fill="none" stroke="#FFC0D9" stroke-width="1.6" stroke-dasharray="3 3"/>
${d?`${swirl(42,52)}${swirl(78,52,-1)}`:`<circle cx="42" cy="52" r="7.4" fill="${P}"/><circle cx="78" cy="52" r="7.4" fill="${P}"/><circle cx="44.4" cy="49.4" r="2.2" fill="${W}"/><circle cx="80.4" cy="49.4" r="2.2" fill="${W}"/>`}
<circle cx="32" cy="92" r="3.2" fill="#E6325F"/><circle cx="88" cy="92" r="3.2" fill="#E6325F"/><circle cx="60" cy="38" r="3" fill="#E6325F" opacity="0"/>
${blush(32,72,6,4)}${blush(88,72,6,4)}${snout(60,78,13,9.4)}
</g>`,

// 20 甜甜圈豬：洞就是豬鼻
donut: (d: boolean) =>`${defs}
${ear(36,34,1,-18)}${ear(84,34,-1,18)}
<circle cx="60" cy="64" r="44" fill="#F2B866" stroke="${W}" stroke-width="4"/>
<path d="M20 60 C18 34 40 20 60 20 C80 20 102 34 100 60 C98 70 92 68 90 76 C86 82 82 76 78 82 C70 90 66 84 60 88 C52 86 48 92 42 84 C36 80 34 82 30 76 C26 70 20 72 20 60 Z" fill="#FF9CC6" stroke="${W}" stroke-width="3" stroke-linejoin="round"/>
<g stroke-width="3" stroke-linecap="round"><line x1="34" y1="42" x2="40" y2="38" stroke="#FFFFFF"/><line x1="84" y1="38" x2="90" y2="44" stroke="#7FE0D3"/><line x1="48" y1="30" x2="56" y2="30" stroke="#FFE27A"/><line x1="72" y1="28" x2="78" y2="32" stroke="#FFFFFF"/><line x1="28" y1="60" x2="33" y2="64" stroke="#7FE0D3"/><line x1="94" y1="62" x2="90" y2="68" stroke="#FFE27A"/></g>
${eyeN(d,44,52,5.4)}${eyeN(d,76,52,5.4,-1)}
<ellipse cx="60" cy="70" rx="17" ry="13" fill="#FF86B8" stroke="${W}" stroke-width="3"/>
<ellipse cx="54" cy="70" rx="3" ry="4.6" fill="${P}"/><ellipse cx="66" cy="70" rx="3" ry="4.6" fill="${P}"/>
${d?`<path d="M50 100 Q60 108 70 100 Z" fill="${P}"/>`:`<path d="M50 99 Q60 106 70 99" fill="none" stroke="${P}" stroke-width="2.8" stroke-linecap="round"/>`}`,
};

const all: Record<string, (d: boolean) => string> = { ...chars, ...chars2 };

/** 角色順序（也就是名單）；要新增角色，在上面加一個函式，再把 id 加進這裡 */
export const FACE_IDS = [
  'cyclops', 'cheshire', 'teacup', 'hole', 'watch', 'card',
  'mushroom', 'bottle', 'cake', 'caterpillar', 'queen', 'moon', 'threeeyes',
  'balloon', 'jelly', 'toast', 'ghost', 'alien', 'dice', 'donut',
] as const;

export function renderFace(index: number, dizzy: boolean): string {
  const id = FACE_IDS[((index % FACE_IDS.length) + FACE_IDS.length) % FACE_IDS.length];
  return all[id](dizzy);
}

const BAG_KEY = 'wheel_face_bag_v1';
const LAST_KEY = 'wheel_face_last_v1';

/** 洗牌取下一個角色：一輪內不重複，換輪時也不會連續兩次相同 */
export function nextFaceIndex(): number {
  const n = FACE_IDS.length;
  let bag: number[] = [];
  try {
    const raw = JSON.parse(localStorage.getItem(BAG_KEY) || '[]');
    if (Array.isArray(raw)) bag = raw.filter((i: unknown): i is number => Number.isInteger(i) && (i as number) >= 0 && (i as number) < n);
  } catch { /* 讀不到就重新洗牌 */ }
  if (bag.length === 0) {
    bag = Array.from({ length: n }, (_, i) => i);
    for (let i = n - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [bag[i], bag[j]] = [bag[j], bag[i]];
    }
    let last = -1;
    try { last = parseInt(localStorage.getItem(LAST_KEY) || '', 10); } catch { /* ignore */ }
    if (bag.length > 1 && bag[bag.length - 1] === last) {
      const t = bag[0]; bag[0] = bag[bag.length - 1]; bag[bag.length - 1] = t;
    }
  }
  const pick = bag.pop() as number;
  try {
    localStorage.setItem(BAG_KEY, JSON.stringify(bag));
    localStorage.setItem(LAST_KEY, String(pick));
  } catch { /* 不能存就算了，這次照樣有角色 */ }
  return pick;
}
