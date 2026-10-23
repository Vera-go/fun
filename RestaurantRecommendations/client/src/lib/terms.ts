import { getEvent, useEvent } from "./event";

/* 活動類型：餐廳 / 旅遊地點（例如畢業旅行）。
   兩種活動用同一套推薦和投票，資料欄位也一樣（type / price / address / distance），
   只有畫面上的用詞不同。要改字只改這個檔案。 */
export type EventKind = "restaurant" | "trip";

export interface Terms {
  item: string;              // 被推薦的東西：餐廳 / 地點
  unit: string;              // 量詞：家 / 個
  app: string;               // 網站標題
  slogan: string;
  name: string; namePh: string;
  type: string; typePh: string; typeChips: string[];
  price: string; pricePh: string; priceShort: string;
  address: string; addressPh: string; addressShort: string;
  distance: string; distancePh: string; distanceShort: string; distanceChips: string[];
  rating: string;
  website: string; websitePh: string;
  notesPh: string;
  champion: string;
  emptyTitle: string;
  eventTitlePh: string; eventDescPh: string;
}

const restaurant: Terms = {
  item: "餐廳", unit: "家", app: "餐廳推薦投票", slogan: "一起決定去哪吃",
  name: "餐廳名稱", namePh: "請輸入餐廳名稱",
  type: "餐廳類型", typePh: "例如：海鮮、火鍋、燒肉...",
  // 台灣聚餐常見類型（吃到飽、熱炒、合菜是尾牙春酒和多人聚餐的熱門選擇）
  typeChips: ["吃到飽", "火鍋", "燒肉", "熱炒", "合菜/台菜", "港式飲茶", "日式料理", "韓式料理", "泰式料理", "義式料理",
              "美式/漢堡", "牛排", "鐵板燒", "海鮮", "居酒屋", "素食", "早午餐", "咖啡廳", "甜點下午茶"],
  price: "價格範圍", pricePh: "例如：$1500/人、$2000雙人套...", priceShort: "價格",
  address: "餐廳地址", addressPh: "請輸入完整地址", addressShort: "位置",
  distance: "距離資訊", distancePh: "例如：距離捷運站約500m", distanceShort: "距離", distanceChips: [],
  rating: "評分 (1-5)",
  website: "餐廳網址", websitePh: "例如：https://www.restaurant.com",
  notesPh: "有關餐廳的其他資訊，例如：營業時間、特色菜、停車資訊...",
  champion: "冠軍餐廳",
  emptyTitle: "還沒有人推薦餐廳",
  eventTitlePh: "例如：2026 尾牙聚餐", eventDescPh: "例如：平均預算 2800/人，共 30 人",
};

const trip: Terms = {
  item: "地點", unit: "個", app: "旅遊地點投票", slogan: "一起決定去哪玩",
  name: "地點名稱", namePh: "例如：墾丁、花蓮太魯閣、日本沖繩",
  type: "地點類型", typePh: "例如：海邊、山上、遊樂園...",
  typeChips: ["海邊", "山上", "老街", "遊樂園", "溫泉", "離島", "城市", "農場", "博物館", "出國"],
  price: "每人預算", pricePh: "例如：約 $6000/人（含交通住宿）", priceShort: "預算",
  address: "在哪裡", addressPh: "例如：屏東縣恆春鎮", addressShort: "位置",
  distance: "天數／交通", distancePh: "例如：三天兩夜，遊覽車約 5 小時", distanceShort: "天數",
  distanceChips: ["一日遊", "兩天一夜", "三天兩夜", "四天以上"],
  rating: "推薦程度 (1-5)",
  website: "相關網址", websitePh: "例如：景點官網、遊記、行程介紹",
  notesPh: "例如：推薦的景點、好玩的活動、適合的季節、要注意的地方...",
  champion: "冠軍地點",
  emptyTitle: "還沒有人推薦地點",
  eventTitlePh: "例如：三年二班畢業旅行", eventDescPh: "例如：預計 2027 年 5 月出發，三天兩夜，預算每人 8000 以內",
};

/** 還沒進入活動時（首頁、使用手冊）的網站標題：餐廳和旅遊都適用 */
export const HOME_TITLE = { app: "推薦及投票", slogan: "一起揪團做決定" };

export const termsFor = (kind?: string | null): Terms => (kind === "trip" ? trip : restaurant);
/** 目前活動的用詞（不在 React 元件裡用） */
export const currentTerms = () => termsFor(getEvent()?.kind);
/** 目前活動的用詞（React 元件用，活動載入後會自動更新） */
export function useTerms() {
  const { event } = useEvent();
  return termsFor(event?.kind);
}
