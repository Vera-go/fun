/* 揪團投票自己畫的小圖示（不用 emoji）：細線金色風格，和標題列的餐具圖示一致。
   顏色跟著文字色（currentColor），用 className 調整大小和顏色。 */

const line = { fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

/** 聚餐：碗和筷子 */
export function BowlIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" focusable="false">
      <g {...line}>
        <path d="M13.5 2.5 L18.5 10" /><path d="M16.8 2 L20.6 9" />
        <path d="M3 11.5 H21" />
        <path d="M4 11.5 a8 7.5 0 0 0 16 0" />
        <path d="M9 20.5 H15" />
      </g>
    </svg>
  );
}

/** 旅遊：行李箱和吊牌 */
export function SuitcaseIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" focusable="false">
      <g {...line}>
        <rect x="3.5" y="7" width="15" height="13" rx="2.2" />
        <path d="M8 7 V5 a1.2 1.2 0 0 1 1.2 -1.2 h3.6 A1.2 1.2 0 0 1 14 5 V7" />
        <path d="M7.5 7 V20 M14.5 7 V20" />
        <path d="M18.5 10 l2.2 1.3 v3.4 h-2.2" />
        <path d="M6 20 v1.3 M16 20 v1.3" />
      </g>
    </svg>
  );
}

// 印章外圈：16 個圓角的花邊
const ROSETTE = (() => {
  let d = "";
  for (let i = 0; i < 32; i++) {
    const a = -Math.PI / 2 + (i * Math.PI) / 16, r = i % 2 ? 15.6 : 18;
    d += (i ? "L" : "M") + (20 + r * Math.cos(a)).toFixed(2) + " " + (20 + r * Math.sin(a)).toFixed(2);
  }
  return d + "Z";
})();

/** 活動建立好了：金色花邊印章，中間打勾，旁邊兩顆小星 */
export function CreatedSeal({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 44" className={className} aria-hidden="true" focusable="false">
      <g transform="translate(2 2)">
        <path d={ROSETTE} fill="#FDF3DC" stroke="#B7832F" strokeWidth="1.6" strokeLinejoin="round" />
        <circle cx="20" cy="20" r="11.5" fill="none" stroke="#B7832F" strokeWidth="1" strokeDasharray="1.2 2.2" />
        <path d="M14.5 20.5 L18.6 24.5 L26 15.8" fill="none" stroke="#8A5A1C" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <path d="M42 4 l.9 2.3 2.3 .9 -2.3 .9 -.9 2.3 -.9 -2.3 -2.3 -.9 2.3 -.9 Z" fill="#E8B34A" />
      <path d="M44.5 15 l.6 1.4 1.4 .6 -1.4 .6 -.6 1.4 -.6 -1.4 -1.4 -.6 1.4 -.6 Z" fill="#E8B34A" opacity=".75" />
    </svg>
  );
}

/** 依活動類型的小圖示 */
export function KindIcon({ kind, className }: { kind?: string; className?: string }) {
  return kind === "trip" ? <SuitcaseIcon className={className} /> : <BowlIcon className={className} />;
}
