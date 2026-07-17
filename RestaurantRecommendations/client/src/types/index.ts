export interface Restaurant {
  id: number;
  name: string;
  type: string;
  price: string;
  address: string;
  distance: string;
  rating: number;
  notes?: string;
  imageUrl: string;
  recommender?: string; // 推薦人欄位
  websiteUrl?: string; // 餐廳網址欄位
}

export interface CreateRestaurantInput {
  name: string;
  type: string;
  price: string;
  address: string;
  distance: string;
  rating: number;
  notes?: string;
  imageUrl: string;
  recommender?: string; // 推薦人欄位
  websiteUrl?: string; // 餐廳網址欄位
}

export interface FilterOptions {
  search: string;
  type: string;
  price: string;
  distance: string;
}

// 用戶相關類型
export interface User {
  id: number;
  name: string;
  isAdmin: number;
  createdAt: string;
}

export interface CreateUserInput {
  name: string;
  isAdmin: number;
}

// 餐廳帶投票數
export interface RestaurantWithVotes extends Restaurant {
  voteCount: number;
}

// 投票相關類型
export interface Vote {
  id: number;
  userId: number;
  restaurantId: number;
  createdAt: string;
}

export interface CreateVoteInput {
  userId: number;
  restaurantId: number;
}

// 餐廳投票詳情
export interface RestaurantVoteDetail {
  restaurantId: number;
  voteCount: number;
  voters?: { id: number; name: string }[];
}
