import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { createRestaurantSchema, createUserSchema, createVoteSchema } from "@shared/schema";
import { ZodError } from "zod";
import { z } from 'zod';
import { fixAllRestaurantImages } from "./fixRestaurantImages";

export async function registerRoutes(app: Express): Promise<Server> {
  // GET /api/restaurants - Get all restaurants
  app.get("/api/restaurants", async (_req, res) => {
    try {
      const restaurants = await storage.getRestaurants();
      res.json(restaurants);
    } catch (error) {
      console.error("Error fetching restaurants:", error);
      res.status(500).json({ message: "Failed to fetch restaurants" });
    }
  });

  // GET /api/restaurants/:id - Get restaurant by ID
  app.get("/api/restaurants/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid restaurant ID" });
      }

      const restaurant = await storage.getRestaurantById(id);
      if (!restaurant) {
        return res.status(404).json({ message: "Restaurant not found" });
      }

      res.json(restaurant);
    } catch (error) {
      console.error("Error fetching restaurant:", error);
      res.status(500).json({ message: "Failed to fetch restaurant" });
    }
  });

  // POST /api/restaurants - Create a new restaurant
  app.post("/api/restaurants", async (req, res) => {
    try {
      const validatedData = createRestaurantSchema.parse(req.body);
      const restaurant = await storage.createRestaurant(validatedData);
      res.status(201).json(restaurant);
    } catch (error) {
      console.error("Error creating restaurant:", error);
      
      if (error instanceof ZodError) {
        return res.status(400).json({ 
          message: "Validation error", 
          errors: error.errors 
        });
      }
      
      res.status(500).json({ message: "Failed to create restaurant" });
    }
  });

  // PUT /api/restaurants/:id - Update a restaurant
  app.put("/api/restaurants/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid restaurant ID" });
      }

      const restaurant = await storage.getRestaurantById(id);
      if (!restaurant) {
        return res.status(404).json({ message: "Restaurant not found" });
      }

      const validatedData = createRestaurantSchema.parse(req.body);
      const updatedRestaurant = await storage.updateRestaurant(id, validatedData);
      res.json(updatedRestaurant);
    } catch (error) {
      console.error("Error updating restaurant:", error);
      
      if (error instanceof ZodError) {
        return res.status(400).json({ 
          message: "Validation error", 
          errors: error.errors 
        });
      }
      
      res.status(500).json({ message: "Failed to update restaurant" });
    }
  });

  // DELETE /api/restaurants/:id - Delete a restaurant
  app.delete("/api/restaurants/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid restaurant ID" });
      }

      const restaurant = await storage.getRestaurantById(id);
      if (!restaurant) {
        return res.status(404).json({ message: "Restaurant not found" });
      }

      await storage.deleteRestaurant(id);
      res.status(204).end();
    } catch (error) {
      console.error("Error deleting restaurant:", error);
      res.status(500).json({ message: "Failed to delete restaurant" });
    }
  });

  // ============== 用戶相關 API ==============
  
  // POST /api/users - 創建新用戶或驗證現有用戶
  app.post("/api/users", async (req, res) => {
    try {
      const validatedData = createUserSchema.parse(req.body);
      console.log("創建/登入用戶:", validatedData);
      
      // 檢查是否存在相同名稱的用戶
      const existingUser = await storage.getUserByName(validatedData.name);
      if (existingUser) {
        console.log("找到現有用戶:", existingUser);
        
        // 如果用戶請求以管理員身份登入，則檢查是否提供了正確的管理員密碼
        if (validatedData.isAdmin === 1) {
          console.log(`用戶 ${existingUser.name} 嘗試以管理員身份登入`);
          
          if (existingUser.isAdmin !== 1) {
            // 更新用戶權限為管理員
            const updatedUser = await storage.updateUserToAdmin(existingUser.id);
            console.log(`用戶 ${existingUser.name} 成功升級為管理員`);
            return res.status(200).json(updatedUser);
          }
          
          // 如果已經是管理員，直接返回
          return res.status(200).json(existingUser);
        }
        
        // 如果不再是管理員（例如在另一個會話中以非管理員身份登入）
        if (validatedData.isAdmin === 0 && existingUser.isAdmin === 1) {
          // 更新用戶為非管理員
          const updatedUser = await storage.updateUserToNonAdmin(existingUser.id);
          console.log(`用戶 ${existingUser.name} 降級為普通用戶`);
          return res.status(200).json(updatedUser);
        }
        
        return res.status(200).json(existingUser);
      }
      
      // 創建新用戶
      const user = await storage.createUser(validatedData);
      console.log("創建新用戶:", user);
      res.status(201).json(user);
    } catch (error) {
      console.error("Error creating user:", error);
      
      if (error instanceof ZodError) {
        return res.status(400).json({ 
          message: "Validation error", 
          errors: error.errors 
        });
      }
      
      res.status(500).json({ message: "Failed to create user" });
    }
  });
  
  // GET /api/users - 獲取所有用戶（僅供管理者使用）
  app.get("/api/users", async (req, res) => {
    try {
      // 從查詢參數中獲取當前用戶 ID 和是否為管理者
      const userId = parseInt(req.query.userId as string);
      const isAdmin = parseInt(req.query.isAdmin as string) === 1;
      
      if (isNaN(userId)) {
        return res.status(400).json({ message: "Invalid user ID" });
      }
      
      // 只有管理者可以獲取所有用戶
      if (!isAdmin) {
        return res.status(403).json({ message: "Permission denied" });
      }
      
      const users = await storage.getUsers();
      res.json(users);
    } catch (error) {
      console.error("Error fetching users:", error);
      res.status(500).json({ message: "Failed to fetch users" });
    }
  });
  
  // GET /api/users/:id - 獲取用戶資訊
  app.get("/api/users/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid user ID" });
      }
      
      const user = await storage.getUserById(id);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      
      res.json(user);
    } catch (error) {
      console.error("Error fetching user:", error);
      res.status(500).json({ message: "Failed to fetch user" });
    }
  });
  
  // ============== 投票相關 API ==============
  
  // GET /api/votes/restaurants - 獲取所有餐廳及其投票數
  app.get("/api/votes/restaurants", async (_req, res) => {
    try {
      const restaurantsWithVotes = await storage.getRestaurantsWithVotes();
      res.json(restaurantsWithVotes);
    } catch (error) {
      console.error("Error fetching restaurants with votes:", error);
      res.status(500).json({ message: "Failed to fetch restaurants with votes" });
    }
  });
  
  // GET /api/votes/unique-voters-count - 獲取唯一投票用戶數量
  app.get("/api/votes/unique-voters-count", async (_req, res) => {
    try {
      const count = await storage.getUniqueVotersCount();
      res.json({ count });
    } catch (error) {
      console.error("Error fetching unique voters count:", error);
      res.status(500).json({ message: "Failed to fetch unique voters count" });
    }
  });
  
  // GET /api/votes/restaurants/:id - 獲取特定餐廳的投票詳情
  app.get("/api/votes/restaurants/:id", async (req, res) => {
    try {
      const restaurantId = parseInt(req.params.id);
      if (isNaN(restaurantId)) {
        return res.status(400).json({ message: "Invalid restaurant ID" });
      }
      
      // 從查詢參數中獲取當前用戶是否為管理者
      const isAdmin = req.query.isAdmin === '1';
      
      console.log(`GET /api/votes/restaurants/${restaurantId} - isAdmin=${isAdmin} (param type: ${typeof req.query.isAdmin}, value: '${req.query.isAdmin}')`);
      
      const restaurant = await storage.getRestaurantById(restaurantId);
      if (!restaurant) {
        return res.status(404).json({ message: "Restaurant not found" });
      }
      
      const voteDetail = await storage.getRestaurantVoteDetail(restaurantId);
      console.log("Vote detail:", voteDetail);
      
      if (!voteDetail) {
        return res.json({
          restaurantId,
          voteCount: 0,
          voters: []
        });
      }
      
      // 如果不是管理者，則只返回投票數量而不返回具體投票用戶信息
      if (!isAdmin) {
        console.log("非管理員用戶，返回不含投票者名單的數據");
        return res.json({
          restaurantId: voteDetail.restaurantId,
          voteCount: voteDetail.voteCount,
          voters: [] // 非管理員看不到投票者名單
        });
      }
      
      // 管理者可查看完整投票信息
      console.log("管理員用戶，返回完整投票詳情，包含投票者名單:", voteDetail.voters);
      res.json(voteDetail);
    } catch (error) {
      console.error("Error fetching restaurant vote detail:", error);
      res.status(500).json({ message: "Failed to fetch restaurant vote detail" });
    }
  });
  
  // GET /api/votes/users/:id - 獲取用戶的投票
  app.get("/api/votes/users/:id", async (req, res) => {
    try {
      const userId = parseInt(req.params.id);
      if (isNaN(userId)) {
        return res.status(400).json({ message: "Invalid user ID" });
      }
      
      // 驗證用戶是否存在
      const user = await storage.getUserById(userId);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      
      const votes = await storage.getUserVotes(userId);
      res.json(votes);
    } catch (error) {
      console.error("Error fetching user votes:", error);
      res.status(500).json({ message: "Failed to fetch user votes" });
    }
  });
  
  // POST /api/votes - 用戶投票
  app.post("/api/votes", async (req, res) => {
    try {
      const validatedData = createVoteSchema.parse(req.body);
      const vote = await storage.createVote(validatedData);
      res.status(201).json(vote);
    } catch (error: any) {
      console.error("Error creating vote:", error);
      
      if (error instanceof ZodError) {
        return res.status(400).json({ 
          message: "Validation error", 
          errors: error.errors 
        });
      }
      
      // 將所有錯誤訊息傳遞給前端
      return res.status(400).json({ message: error.message });
    }
  });
  
  // DELETE /api/votes - 取消投票
  app.delete("/api/votes", async (req, res) => {
    try {
      // 定義和驗證請求體結構
      const schema = z.object({
        userId: z.number().int().positive(),
        restaurantId: z.number().int().positive()
      });
      
      const { userId, restaurantId } = schema.parse(req.body);
      
      // 查找用戶
      const user = await storage.getUserById(userId);
      if (!user) {
        return res.status(404).json({ message: "用戶不存在" });
      }
      
      // 查找所有同名用戶的投票中與此餐廳相關的投票
      const userName = user.name;
      const sameNameUsers = await storage.getUsersByName(userName);
      
      // 檢查是否有投票
      let voteFound = false;
      for (const sameNameUser of sameNameUsers) {
        try {
          // 嘗試刪除此用戶對該餐廳的投票
          await storage.deleteVote(sameNameUser.id, restaurantId);
          voteFound = true;
          
          // 找到並刪除了一個投票，退出循環
          break;
        } catch (e) {
          // 這個用戶可能沒有投票，繼續檢查下一個同名用戶
          continue;
        }
      }
      
      if (!voteFound) {
        return res.status(404).json({ message: `帳號 "${userName}" 沒有對此餐廳的投票記錄` });
      }
      
      res.status(204).end();
    } catch (error) {
      console.error("Error deleting vote:", error);
      
      if (error instanceof ZodError) {
        return res.status(400).json({ 
          message: "Validation error", 
          errors: error.errors 
        });
      }
      
      res.status(500).json({ message: "Failed to delete vote" });
    }
  });
  
  // POST /api/fix-restaurant-images - 修復所有餐廳的圖片
  app.post("/api/fix-restaurant-images", async (req, res) => {
    try {
      // 只有管理員可以觸發此操作
      const isAdmin = req.query.isAdmin === '1';
      
      if (!isAdmin) {
        return res.status(403).json({ message: "此操作需要管理員權限" });
      }
      
      // 執行修復功能
      const result = await fixAllRestaurantImages();
      console.log("修復餐廳圖片結果:", result);
      
      // 如果成功，則刷新所有相關查詢
      if (result.success) {
        res.status(200).json(result);
      } else {
        res.status(500).json(result);
      }
    } catch (error: any) {
      console.error("執行修復餐廳圖片時發生錯誤:", error);
      res.status(500).json({ 
        success: false, 
        message: `修復餐廳圖片時發生錯誤: ${error.message || String(error)}`
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
