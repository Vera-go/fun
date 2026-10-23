import { QueryClient, QueryFunction } from "@tanstack/react-query";
import { supabase } from "./supabase";
import { getEvent } from "./event";
import { currentTerms } from "./terms";

/* 原本這些 /api/... 是 Replit 上的伺服器；現在網站是純靜態網頁，
   改成在這裡把同樣的網址轉成 Supabase 查詢，畫面元件不用改。
   回傳的資料格式和原本伺服器一樣。 */

const toRestaurant = (r: any) => ({
  id: r.id, name: r.name, type: r.type, price: r.price, address: r.address, distance: r.distance,
  rating: r.rating, notes: r.notes, imageUrl: r.image_url, recommender: r.recommender, websiteUrl: r.website_url,
  createdBy: r.created_by,
});
const fromRestaurant = (d: any) => ({
  name: d.name, type: d.type, price: d.price, address: d.address, distance: d.distance, rating: d.rating,
  notes: d.notes || "", image_url: d.imageUrl || "", recommender: d.recommender || "", website_url: d.websiteUrl || "",
});

// 錯誤包成原本的格式：error.response.json() 會拿到 { message }
function apiError(message: string, status = 400): Error {
  const err = new Error(message);
  (err as any).response = new Response(JSON.stringify({ message }), { status, headers: { "content-type": "application/json" } });
  return err;
}
function friendly(error: any): Error {
  if (!error) return apiError("發生未知錯誤");
  const T = currentTerms(), it = `這${T.unit}${T.item}`;
  if (error.code === "23505") return apiError(`你已經投過${it}了！同一${T.unit}${T.item}只能投一票。`);
  if (error.code === "P0001") return apiError(error.message);
  if (error.code === "42501") return apiError(`沒有權限：可能已經過了截止日期，或只有推薦${it}的人和主辦人可以修改。`, 403);
  return apiError(error.message || "發生未知錯誤");
}

async function currentUid(): Promise<string> {
  const { data } = await supabase.auth.getSession();
  const uid = data.session?.user.id;
  if (!uid) throw apiError("請先登入", 401);
  return uid;
}

// 每個活動各自的餐廳和票數
const eventId = () => getEvent()?.id ?? null;

async function restaurantsWithVotes() {
  const eid = eventId();
  if (!eid) return [];
  const [{ data: rs, error: e1 }, { data: counts, error: e2 }] = await Promise.all([
    supabase.from("restaurants").select("*").eq("event_id", eid).order("id"),
    supabase.rpc("restaurant_vote_counts", { p_event: eid }),
  ]);
  if (e1 || e2) throw friendly(e1 || e2);
  const map = new Map<number, number>((counts || []).map((c: any) => [Number(c.restaurant_id), Number(c.vote_count)]));
  return (rs || []).map(r => ({ ...toRestaurant(r), voteCount: map.get(Number(r.id)) || 0 }))
    .sort((a, b) => b.voteCount - a.voteCount);
}

async function handle(method: string, url: string, body?: any): Promise<any> {
  const path = url.split("?")[0];
  const query = new URLSearchParams(url.split("?")[1] || "");
  let m: RegExpMatchArray | null;

  if (method === "GET" && path === "/api/restaurants") {
    if (!eventId()) return [];
    const { data, error } = await supabase.from("restaurants").select("*").eq("event_id", eventId()).order("id");
    if (error) throw friendly(error);
    return data.map(toRestaurant);
  }
  if (method === "GET" && path === "/api/votes/restaurants") return restaurantsWithVotes();
  if (method === "GET" && path === "/api/votes/unique-voters-count") {
    if (!eventId()) return { count: 0 };
    const { data, error } = await supabase.rpc("unique_voters_count", { p_event: eventId() });
    if (error) throw friendly(error);
    return { count: Number(data) || 0 };
  }
  if (method === "GET" && (m = path.match(/^\/api\/votes\/users\/(.+)$/))) {
    const { data: s } = await supabase.auth.getSession();
    if (!s.session || s.session.user.id !== m[1]) return [];
    const { data, error } = await supabase.from("votes").select("*").eq("user_id", m[1]);
    if (error) throw friendly(error);
    return data.map(v => ({ id: v.id, userId: v.user_id, restaurantId: v.restaurant_id, createdAt: v.created_at }));
  }
  if (method === "GET" && (m = path.match(/^\/api\/votes\/restaurants\/(\d+)$/))) {
    const rid = Number(m[1]);
    const all = await restaurantsWithVotes();
    const voteCount = all.find(r => r.id === rid)?.voteCount || 0;
    let voters: { id: string; name: string }[] = [];
    if (query.get("isAdmin") === "1") {
      const { data } = await supabase.rpc("restaurant_voters", { rid });   // 不是管理員會拿到空的
      voters = data || [];
    }
    return { restaurantId: rid, voteCount, voters };
  }
  if (method === "POST" && path === "/api/restaurants") {
    await currentUid();
    if (!eventId()) throw apiError("找不到這個活動");
    const { data, error } = await supabase.from("restaurants").insert({ ...fromRestaurant(body), event_id: eventId() }).select().single();
    if (error) throw friendly(error);
    return toRestaurant(data);
  }
  if (method === "PUT" && (m = path.match(/^\/api\/restaurants\/(\d+)$/))) {
    await currentUid();
    const { data, error } = await supabase.from("restaurants").update(fromRestaurant(body)).eq("id", Number(m[1])).select();
    if (error) throw friendly(error);
    if (!data.length) throw apiError(`只有推薦這${currentTerms().unit}${currentTerms().item}的人（或用同樣名字登入）和主辦人可以修改。`, 403);
    return toRestaurant(data[0]);
  }
  if (method === "DELETE" && (m = path.match(/^\/api\/restaurants\/(\d+)$/))) {
    await currentUid();
    const { data, error } = await supabase.from("restaurants").delete().eq("id", Number(m[1])).select();
    if (error) throw friendly(error);
    if (!data.length) throw apiError(`只有推薦這${currentTerms().unit}${currentTerms().item}的人（或用同樣名字登入）和主辦人可以刪除。`, 403);
    return null;
  }
  if (method === "POST" && path === "/api/votes") {
    await currentUid();
    const { data, error } = await supabase.from("votes").insert({ restaurant_id: body.restaurantId }).select().single();
    if (error) throw friendly(error);
    return { id: data.id, userId: data.user_id, restaurantId: data.restaurant_id, createdAt: data.created_at };
  }
  if (method === "DELETE" && path === "/api/votes") {
    const uid = await currentUid();
    const { data, error } = await supabase.from("votes").delete().eq("user_id", uid).eq("restaurant_id", body.restaurantId).select("id");
    if (error) throw friendly(error);
    if (!data.length) throw apiError("投票已經截止，不能再取消。", 403);
    return null;
  }
  throw apiError(`不支援的操作：${method} ${path}`, 404);
}

export async function apiRequest(method: string, url: string, data?: unknown): Promise<Response> {
  const result = await handle(method, url, data);
  return new Response(result === null ? null : JSON.stringify(result), {
    status: result === null ? 204 : 200,
    headers: { "content-type": "application/json" },
  });
}

type UnauthorizedBehavior = "returnNull" | "throw";
export const getQueryFn: <T>(options: { on401: UnauthorizedBehavior }) => QueryFunction<T> =
  ({ on401 }) => async ({ queryKey }) => {
    try {
      return await handle("GET", queryKey[0] as string);
    } catch (err: any) {
      if (on401 === "returnNull" && err?.response?.status === 401) return null;
      throw err;
    }
  };

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: getQueryFn({ on401: "throw" }),
      refetchInterval: false,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      retry: false,
    },
    mutations: {
      retry: false,
    },
  },
});
