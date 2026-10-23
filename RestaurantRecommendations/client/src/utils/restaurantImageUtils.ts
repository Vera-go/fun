import { getEvent } from "@/lib/event";
import { tripImage } from "@/components/Cover";

// 用來記錄每個類型已使用的圖片，避免同類型餐廳使用重複圖片
const usedImagesMap = new Map<string, Set<string>>();

// 根據餐廳類型對應的照片（確保不同類型有不同照片）
export const typeBasedImages: Record<string, string[]> = {
  // 日式料理
  "日式": [
    "https://images.unsplash.com/photo-1617196035154-1e7e6e28b0db?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500"
  ],
  "日式料理": [
    "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1553621042-f6e147245754?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500"
  ],
  "日式無菜單": [
    "https://images.unsplash.com/photo-1611143669185-af224c5e3252?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500"
  ],
  "居酒屋": [
    "https://images.unsplash.com/photo-1554502078-ef0fc409efce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500"
  ],

  
  // 中式料理
  "中式": [
    "https://images.unsplash.com/photo-1563245372-f21724e3856d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500"
  ],

  
  // 西式料理
  "西式": [
    "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1596649299486-4cdea56fd59d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500"
  ],
  "西式料理": [
    "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1484980972926-edee96e0960d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500"
  ],
  "義式料理": [
    "https://images.unsplash.com/photo-1498579150354-977475b7ea0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1579684947550-22e945225d9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500"
  ],
  "牛排": [
    "https://images.unsplash.com/photo-1546964124-0cce460f38ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1615937722923-67f6deaf2cc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500"
  ],
  "法式料理": [
    "https://images.unsplash.com/photo-1608855238293-a8853e7f7c98?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500" 
  ],
  
  // 韓式料理
  "韓式": [
    "https://images.unsplash.com/photo-1590301157890-4810ed352733?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500"
  ],
  "韓式料理": [
    "https://images.unsplash.com/photo-1580651315530-69c8e0026377?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1562565652-a0d8f0c59eb4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500"
  ],

  
  // 燒肉
  "燒肉": [
    "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1525164286253-04e68b9d94c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500"
  ],
  
  // 鐵板燒
  "鐵板燒": [
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500"
  ],
  
  // 燒烤
  "燒烤": [
    "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500"
  ],
  
  // 自助餐
  "Buffet": [
    "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500"
  ],
  "自助餐": [
    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500"
  ],
  
  // 默認圖片（類型無法辨識時使用）
  // 港式：港點蒸籠（和中式同一張）
  "港式": [
    "https://images.unsplash.com/photo-1563245372-f21724e3856d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500"
  ],

  // 台灣聚餐常見類型（2026/10 從 Unsplash 免費圖庫逐張確認過內容）
  "火鍋": [
    "https://images.unsplash.com/photo-1614104030967-5ca61a54247b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1784429611794-aecb6ebaef48?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1703945530505-2f06e3e1cf97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500"
  ],
  "熱炒": [
    "https://images.unsplash.com/photo-1566749006386-4cfc0d44f733?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1603246993190-638a8354b557?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1464500542410-1396074bf230?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500"
  ],
  "合菜": [
    "https://images.unsplash.com/photo-1755742319537-449f661a3190?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1791724099322-c59f7ff53cdc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1755742319437-ddb3e0c1497b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500"
  ],

  "default": [
    "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1579684947550-22e945225d9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500"
  ]
};

/**
 * 根據餐廳類型選擇合適的照片
 * @param type 餐廳類型
 * @returns 該類型對應的照片URL
 */
// 聚餐類型快捷鍵裡沒有自己照片的，對應到相近的照片類型
const TYPE_ALIASES: Record<string, string> = {
  "吃到飽": "自助餐", "飲茶": "港式", "台菜": "合菜", "麻辣鍋": "火鍋", "涮涮鍋": "火鍋", "鍋物": "火鍋", "快炒": "熱炒",
  "美式": "西式", "漢堡": "西式", "義大利": "義式料理", "烤肉": "燒烤",
};

export function getImageByType(type: string): string {
  // 旅遊地點活動：不用美食照片，改用類型對應的圖示封面
  if (getEvent()?.kind === "trip") return tripImage(type);
  // 沒有自己照片的類型，借用相近類型的照片
  for (const [k, v] of Object.entries(TYPE_ALIASES)) if (type.includes(k)) { type = v; break; }
  // 記錄最佳匹配的類型關鍵字和其長度（優先使用最長匹配，更精確）
  let bestMatchKey = "";
  let bestMatchLength = 0;
  
  // 找到與餐廳類型最匹配的圖片集
  for (const key of Object.keys(typeBasedImages)) {
    if (type.includes(key) && key.length > bestMatchLength) {
      bestMatchKey = key;
      bestMatchLength = key.length;
    }
  }
  
  // 如果找不到匹配的類型，使用默認圖片集
  const targetKey = bestMatchLength > 0 ? bestMatchKey : "default";
  const availableImages = typeBasedImages[targetKey];
  
  // 獲取該類型已使用的圖片集合
  if (!usedImagesMap.has(targetKey)) {
    usedImagesMap.set(targetKey, new Set<string>());
  }
  const usedImages = usedImagesMap.get(targetKey)!;
  
  // 檢查是否所有圖片都已使用，如果是則清空已使用記錄
  if (usedImages.size >= availableImages.length) {
    usedImages.clear();
  }
  
  // 找出未使用的圖片
  const unusedImages = availableImages.filter((img: string) => !usedImages.has(img));
  
  // 如果所有圖片都已使用過一次，清空記錄並重新開始
  if (unusedImages.length === 0) {
    usedImages.clear();
    return getImageByType(type); // 遞歸調用，此時應該有可用的圖片
  }
  
  // 從未使用圖片中隨機選一張
  const selectedImage = unusedImages[Math.floor(Math.random() * unusedImages.length)];
  
  // 記錄此圖片已被使用
  usedImages.add(selectedImage);
  
  return selectedImage;
}