import { restaurants, users, votes, type Restaurant, type InsertRestaurant, type User, type InsertUser, type Vote, type InsertVote } from "@shared/schema";
import { db } from "./db";
import { eq, and, count, sql } from "drizzle-orm";

// 擴展Restaurant類型，添加投票數
export interface RestaurantWithVotes extends Restaurant {
  voteCount: number;
}

// 餐廳投票詳情（包含投票用戶列表，僅管理者可見）
export interface RestaurantVoteDetail {
  restaurantId: number;
  voteCount: number;
  voters: { id: number; name: string }[];
}

export interface IStorage {
  // 餐廳相關操作
  getRestaurants(): Promise<Restaurant[]>;
  getRestaurantById(id: number): Promise<Restaurant | undefined>;
  createRestaurant(restaurant: InsertRestaurant): Promise<Restaurant>;
  updateRestaurant(id: number, restaurant: InsertRestaurant): Promise<Restaurant>;
  deleteRestaurant(id: number): Promise<void>;
  
  // 用戶相關操作
  getUsers(): Promise<User[]>;
  getUserById(id: number): Promise<User | undefined>;
  getUserByName(name: string): Promise<User | undefined>;
  getUsersByName(name: string): Promise<User[]>;
  createUser(user: InsertUser): Promise<User>;
  updateUserToAdmin(userId: number): Promise<User>;
  updateUserToNonAdmin(userId: number): Promise<User>;
  
  // 投票相關操作
  getRestaurantsWithVotes(): Promise<RestaurantWithVotes[]>;
  getRestaurantVoteDetail(restaurantId: number): Promise<RestaurantVoteDetail | undefined>;
  getUserVotes(userId: number): Promise<Vote[]>;
  getVotesByUserName(userName: string): Promise<Vote[]>;
  createVote(vote: InsertVote): Promise<Vote>;
  deleteVote(userId: number, restaurantId: number): Promise<void>;
  getUniqueVotersCount(): Promise<number>; // 獲取唯一投票用戶數量
}

export class DatabaseStorage implements IStorage {
  // =============== 餐廳相關操作 ===============
  
  async getRestaurants(): Promise<Restaurant[]> {
    return await db.select().from(restaurants);
  }

  async getRestaurantById(id: number): Promise<Restaurant | undefined> {
    const [restaurant] = await db.select().from(restaurants).where(eq(restaurants.id, id));
    return restaurant;
  }

  async createRestaurant(insertRestaurant: InsertRestaurant): Promise<Restaurant> {
    // Handle empty fields
    const notes = insertRestaurant.notes || "";
    const recommender = insertRestaurant.recommender || "";
    const websiteUrl = insertRestaurant.websiteUrl || "";
    
    const data = {
      ...insertRestaurant,
      notes,
      recommender,
      websiteUrl
    };

    const [restaurant] = await db.insert(restaurants).values(data).returning();
    return restaurant;
  }

  async updateRestaurant(id: number, insertRestaurant: InsertRestaurant): Promise<Restaurant> {
    // Check if restaurant exists
    const exists = await this.getRestaurantById(id);
    if (!exists) {
      throw new Error(`Restaurant with id ${id} not found`);
    }

    // Handle empty fields
    const notes = insertRestaurant.notes || "";
    const recommender = insertRestaurant.recommender || "";
    const websiteUrl = insertRestaurant.websiteUrl || "";
    
    const data = {
      ...insertRestaurant,
      notes,
      recommender,
      websiteUrl
    };

    const [restaurant] = await db
      .update(restaurants)
      .set(data)
      .where(eq(restaurants.id, id))
      .returning();
    
    return restaurant;
  }

  async deleteRestaurant(id: number): Promise<void> {
    // Check if restaurant exists
    const exists = await this.getRestaurantById(id);
    if (!exists) {
      throw new Error(`Restaurant with id ${id} not found`);
    }

    await db.delete(restaurants).where(eq(restaurants.id, id));
  }
  
  // =============== 用戶相關操作 ===============
  
  async getUsers(): Promise<User[]> {
    return await db.select().from(users);
  }
  
  async getUserById(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }
  
  async getUserByName(name: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.name, name));
    return user;
  }
  
  async getUsersByName(name: string): Promise<User[]> {
    return await db.select().from(users).where(eq(users.name, name));
  }
  
  async createUser(insertUser: InsertUser): Promise<User> {
    // 檢查用戶是否已存在
    const existingUser = await this.getUserByName(insertUser.name);
    if (existingUser) {
      return existingUser; // 如果用戶已存在，直接返回現有用戶
    }
    
    const [user] = await db.insert(users).values(insertUser).returning();
    return user;
  }
  
  async updateUserToAdmin(userId: number): Promise<User> {
    const [updatedUser] = await db
      .update(users)
      .set({ isAdmin: 1 })
      .where(eq(users.id, userId))
      .returning();
      
    if (!updatedUser) {
      throw new Error(`用戶 ID ${userId} 不存在`);
    }
    
    return updatedUser;
  }
  
  async updateUserToNonAdmin(userId: number): Promise<User> {
    const [updatedUser] = await db
      .update(users)
      .set({ isAdmin: 0 })
      .where(eq(users.id, userId))
      .returning();
      
    if (!updatedUser) {
      throw new Error(`用戶 ID ${userId} 不存在`);
    }
    
    return updatedUser;
  }
  
  async getVotesByUserName(userName: string): Promise<Vote[]> {
    // 先根據用戶名查找用戶
    const user = await this.getUserByName(userName);
    if (!user) {
      return []; // 如果用戶不存在，返回空數組
    }
    
    // 使用找到的用戶ID查找投票
    return this.getUserVotes(user.id);
  }
  
  // =============== 投票相關操作 ===============
  
  async getRestaurantsWithVotes(): Promise<RestaurantWithVotes[]> {
    // 查詢所有餐廳並計算每個餐廳的投票數
    const results = await db
      .select({
        id: restaurants.id,
        name: restaurants.name,
        type: restaurants.type,
        price: restaurants.price,
        address: restaurants.address,
        distance: restaurants.distance,
        rating: restaurants.rating,
        notes: restaurants.notes,
        imageUrl: restaurants.imageUrl,
        recommender: restaurants.recommender,
        websiteUrl: restaurants.websiteUrl,
        voteCount: count(votes.id).as('vote_count')
      })
      .from(restaurants)
      .leftJoin(votes, eq(restaurants.id, votes.restaurantId))
      .groupBy(restaurants.id)
      .orderBy(sql`vote_count DESC`);
      
    return results;
  }
  
  async getRestaurantVoteDetail(restaurantId: number): Promise<RestaurantVoteDetail | undefined> {
    // 檢查餐廳是否存在
    const restaurant = await this.getRestaurantById(restaurantId);
    if (!restaurant) {
      return undefined;
    }
    
    // 獲取此餐廳的所有投票和投票用戶
    const voterResults = await db
      .select({
        id: users.id,
        name: users.name
      })
      .from(votes)
      .innerJoin(users, eq(votes.userId, users.id))
      .where(eq(votes.restaurantId, restaurantId));
    
    // 計算總票數
    const voteCount = voterResults.length;
    
    return {
      restaurantId,
      voteCount,
      voters: voterResults
    };
  }
  
  async getUserVotes(userId: number): Promise<Vote[]> {
    return await db
      .select()
      .from(votes)
      .where(eq(votes.userId, userId));
  }
  
  async createVote(insertVote: InsertVote): Promise<Vote> {
    try {
      // 檢查用戶是否存在
      const user = await this.getUserById(insertVote.userId);
      if (!user) {
        throw new Error(`User with id ${insertVote.userId} not found`);
      }
      
      // 檢查餐廳是否存在
      const restaurant = await this.getRestaurantById(insertVote.restaurantId);
      if (!restaurant) {
        throw new Error(`Restaurant with id ${insertVote.restaurantId} not found`);
      }
      
      // 獲取用戶名稱
      const userName = user.name;
      
      // 查找所有同名用戶
      const sameNameUsers = await db
        .select()
        .from(users)
        .where(eq(users.name, userName));
      
      // 收集所有同名用戶的投票
      let allUserVotes: Vote[] = [];
      for (const sameNameUser of sameNameUsers) {
        const userVotes = await this.getUserVotes(sameNameUser.id);
        allUserVotes = [...allUserVotes, ...userVotes];
      }
      
      // 檢查用戶已投票次數（考慮所有同名帳號的投票）
      const MAX_VOTES_PER_USER = 2; // 每個用戶最多可以投2票
      if (allUserVotes.length >= MAX_VOTES_PER_USER) {
        throw new Error(`帳號 "${userName}" 已經使用完所有${MAX_VOTES_PER_USER}次投票機會了！請先取消一個現有投票再重試。`);
      }
      
      // 檢查用戶是否已經給這家餐廳投票（考慮所有同名帳號的投票）
      const existingVote = allUserVotes.find(vote => vote.restaurantId === insertVote.restaurantId);
      if (existingVote) {
        throw new Error(`帳號 "${userName}" 已經投過這家餐廳了！每個帳號對同一餐廳只能投一票。`);
      }
      
      // 創建投票
      const [vote] = await db.insert(votes).values(insertVote).returning();
      return vote;
    } catch (error: any) {
      if (error.message.includes('user_restaurant_idx')) {
        throw new Error(`User has already voted for this restaurant`);
      }
      throw error;
    }
  }
  
  async deleteVote(userId: number, restaurantId: number): Promise<void> {
    await db
      .delete(votes)
      .where(and(
        eq(votes.userId, userId),
        eq(votes.restaurantId, restaurantId)
      ));
  }
  
  async getUniqueVotersCount(): Promise<number> {
    try {
      // 使用DISTINCT查詢獲取唯一的投票用戶ID
      const uniqueVoters = await db
        .selectDistinct({ userId: votes.userId })
        .from(votes);
      
      return uniqueVoters.length;
    } catch (error) {
      console.error("獲取唯一投票用戶數量失敗:", error);
      throw error;
    }
  }
}

export const storage = new DatabaseStorage();
