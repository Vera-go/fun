import { db } from "./db";
import { restaurants } from "@shared/schema";
import { eq } from "drizzle-orm";

// 用來記錄每個類型已使用的圖片，避免同類型餐廳使用重複圖片
const usedImagesMap = new Map<string, Set<string>>();

// 根據餐廳類型對應的照片
const typeBasedImages: Record<string, string[]> = {
  // 日式料理
  "日式": [
    "https://images.unsplash.com/photo-1617196035154-1e7e6e28b0db?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1534604973900-c43ab4fdeecc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500"
  ],
  "日式料理": [
    "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1553621042-f6e147245754?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500"
  ],
  "日式無菜單": [
    "https://images.unsplash.com/photo-1611143669185-af224c5e3252?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1556040220-4096d522378d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500"
  ],
  
  // 火鍋類
  "火鍋": [
    "https://images.unsplash.com/photo-1582271929389-5496efa4d6f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1614084354557-c9506ae0a8a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500"
  ],
  
  // 燒肉類
  "燒肉": [
    "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1525164286253-04e68b9d94c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500"
  ],
  
  // 燒烤類
  "燒烤": [
    "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500"
  ],
  
  // 鐵板燒類
  "鐵板燒": [
    "https://images.unsplash.com/photo-1542528180-a1208c5169a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500"
  ],

  // 自助餐
  "Buffet": [
    "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500"
  ],
  
  // 默認
  "default": [
    "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500"
  ]
};

/**
 * 根據餐廳類型選擇合適的照片
 * @param type 餐廳類型
 * @returns 該類型對應的照片URL
 */
function getImageByType(type: string): string {
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
  const unusedImages = availableImages.filter(img => !usedImages.has(img));
  
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

/**
 * 修復所有餐廳的圖片
 */
export async function fixAllRestaurantImages() {
  try {
    const allRestaurants = await db.select().from(restaurants);
    console.log(`開始修復 ${allRestaurants.length} 個餐廳的圖片...`);
    
    for (const restaurant of allRestaurants) {
      const newImageUrl = getImageByType(restaurant.type);
      console.log(`更新餐廳 '${restaurant.name}' (ID: ${restaurant.id}, 類型: ${restaurant.type}):`);
      console.log(`  原圖片: ${restaurant.imageUrl}`);
      console.log(`  新圖片: ${newImageUrl}`);
      
      await db.update(restaurants)
        .set({ imageUrl: newImageUrl })
        .where(eq(restaurants.id, restaurant.id));
    }
    
    console.log('所有餐廳圖片更新完成！');
    return { success: true, message: `已成功更新 ${allRestaurants.length} 個餐廳的圖片。` };
  } catch (error: any) {
    console.error('更新餐廳圖片時發生錯誤:', error);
    return { success: false, message: `更新餐廳圖片時發生錯誤: ${error.message || String(error)}` };
  }
}