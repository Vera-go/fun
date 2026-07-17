import { pgTable, text, serial, integer, jsonb, real, primaryKey, timestamp, uniqueIndex } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const restaurants = pgTable("restaurants", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  type: text("type").notNull(),
  price: text("price").notNull(),
  address: text("address").notNull(),
  distance: text("distance").notNull(),
  rating: real("rating").notNull(),
  notes: text("notes"),
  imageUrl: text("image_url").notNull(),
  recommender: text("recommender"), // 推薦人欄位
  websiteUrl: text("website_url") // 新增餐廳網址欄位
});

export const createRestaurantSchema = createInsertSchema(restaurants)
  .omit({ id: true })
  .extend({
    name: z.string().min(1, "餐廳名稱不能為空"),
    type: z.string().min(1, "請輸入餐廳類型"),
    price: z.string().min(1, "請輸入價格範圍"),
    address: z.string().min(1, "請輸入餐廳地址"),
    distance: z.string().min(1, "請輸入距離共好的距離"),
    rating: z.number().min(1).max(5).default(4),
    notes: z.string().optional(),
    imageUrl: z.string().min(1),
    recommender: z.string().optional(),
    websiteUrl: z.string().url("請輸入有效的網址").optional()
  });

// 用戶表
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  isAdmin: integer("is_admin").default(0).notNull(), // 0: 一般用戶, 1: 管理者
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// 投票表
export const votes = pgTable("votes", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull().references(() => users.id),
  restaurantId: integer("restaurant_id").notNull().references(() => restaurants.id),
  createdAt: timestamp("created_at").defaultNow().notNull(),
}, (table) => {
  return {
    // 確保每個用戶不能對同一個餐廳投票兩次
    userRestaurantIdx: uniqueIndex('user_restaurant_idx').on(table.userId, table.restaurantId),
  };
});

// 關聯定義
export const restaurantsRelations = relations(restaurants, ({ many }) => ({
  votes: many(votes),
}));

export const usersRelations = relations(users, ({ many }) => ({
  votes: many(votes),
}));

export const votesRelations = relations(votes, ({ one }) => ({
  user: one(users, {
    fields: [votes.userId],
    references: [users.id],
  }),
  restaurant: one(restaurants, {
    fields: [votes.restaurantId],
    references: [restaurants.id],
  }),
}));

// 建立插入結構
export const createUserSchema = createInsertSchema(users)
  .omit({ id: true, createdAt: true })
  .extend({
    name: z.string().min(1, "用戶名不能為空"),
  });

export const createVoteSchema = createInsertSchema(votes)
  .omit({ id: true, createdAt: true });

// 型別定義
export type InsertRestaurant = z.infer<typeof createRestaurantSchema>;
export type Restaurant = typeof restaurants.$inferSelect;
export type InsertUser = z.infer<typeof createUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertVote = z.infer<typeof createVoteSchema>;
export type Vote = typeof votes.$inferSelect;
