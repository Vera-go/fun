import { useState } from "react";
import { Waves, Mountain, Landmark, FerrisWheel, Flame, Palmtree, Building2, Tractor, Library, Plane, MapPin, UtensilsCrossed, type LucideIcon } from "lucide-react";

import { tripThemeOfPhoto } from "@/utils/tripPhotos";

/* 旅遊地點的類型（THEMES）：決定用哪一組照片（utils/tripPhotos.ts）。
   照片載入失敗、或舊資料存的是 "trip:mountain" 這種代號時，改用類型對應的圖示和顏色當封面。 */
const THEMES: { keys: string[]; id: string; icon: LucideIcon; bg: string }[] = [
  { id: "beach", keys: ["海", "沙灘", "衝浪", "潛水"], icon: Waves, bg: "from-sky-300 via-cyan-400 to-blue-500" },
  { id: "island", keys: ["離島", "島"], icon: Palmtree, bg: "from-teal-300 via-emerald-400 to-cyan-500" },
  { id: "mountain", keys: ["山", "森林", "步道", "露營", "國家公園", "峽谷", "瀑布"], icon: Mountain, bg: "from-emerald-300 via-green-500 to-teal-700" },
  { id: "park", keys: ["遊樂園", "樂園", "主題", "動物園", "水族館"], icon: FerrisWheel, bg: "from-pink-300 via-fuchsia-400 to-purple-500" },
  { id: "spring", keys: ["溫泉"], icon: Flame, bg: "from-orange-200 via-rose-300 to-red-400" },
  { id: "oldstreet", keys: ["老街", "古蹟", "廟", "古城", "歷史"], icon: Landmark, bg: "from-amber-200 via-orange-300 to-amber-600" },
  { id: "farm", keys: ["農場", "牧場", "果園", "田"], icon: Tractor, bg: "from-lime-200 via-lime-400 to-green-600" },
  { id: "museum", keys: ["博物館", "美術館", "展", "科教", "文化"], icon: Library, bg: "from-indigo-200 via-violet-300 to-indigo-500" },
  { id: "abroad", keys: ["出國", "國外", "日本", "韓國", "泰國", "新加坡", "香港", "越南"], icon: Plane, bg: "from-blue-300 via-indigo-400 to-violet-500" },
  { id: "city", keys: ["城市", "都市", "市區", "夜市", "購物", "逛街"], icon: Building2, bg: "from-slate-300 via-slate-400 to-slate-600" },
];
const FALLBACK = { id: "default", icon: MapPin, bg: "from-amber-200 via-orange-300 to-rose-400" };
// 餐廳照片載入失敗（外部網址失效）時用的封面，不會出現破圖
const FOOD = { icon: UtensilsCrossed, bg: "from-amber-300 via-orange-400 to-red-400" };

/** 依地點類型決定照片組（THEMES 的 id；找不到就是 default） */
export function tripTheme(type: string): string {
  const t = THEMES.find(th => th.keys.some(k => type.includes(k)));
  return t ? t.id : FALLBACK.id;
}

export function Cover({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  const [failed, setFailed] = useState<string | null>(null);   // 載入失敗的照片網址（換了網址就重試）
  if (src.startsWith("trip:") || !src || failed === src) {
    const tripId = src.startsWith("trip:") ? src.slice(5) : tripThemeOfPhoto(src);
    const t = tripId !== null ? (THEMES.find(th => th.id === tripId) || FALLBACK) : FOOD;
    const Icon = t.icon;
    return (
      <div role="img" aria-label={alt} className={`w-full h-full bg-gradient-to-br ${t.bg} flex items-center justify-center relative overflow-hidden ${className}`}>
        <Icon className="w-20 h-20 text-white/90 drop-shadow-md" strokeWidth={1.4} />
        <Icon className="absolute -right-6 -bottom-6 w-36 h-36 text-white/15" strokeWidth={1} />
      </div>
    );
  }
  return <img src={src} alt={alt} className={`w-full h-full object-cover ${className}`} onError={() => setFailed(src)} />;
}
