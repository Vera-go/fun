import { createClient } from "@supabase/supabase-js";

// 這兩個值本來就會公開在網頁上；真正的保護是資料庫的 RLS 權限規則（supabase/schema.sql）
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || "https://bbydhrcyxxwxtbtemszb.supabase.co";
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY || "sb_publishable_hlbBn6LWqC5oLdCS32lchw_xzZeIph7";

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY, {
  auth: { persistSession: true, autoRefreshToken: true, storageKey: "restaurant-auth" },
});
