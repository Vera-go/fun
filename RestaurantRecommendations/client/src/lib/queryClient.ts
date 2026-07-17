import { QueryClient, QueryFunction } from "@tanstack/react-query";

async function throwIfResNotOk(res: Response) {
  if (!res.ok) {
    // 先嘗試解析為JSON，如果不是有效的JSON，則使用純文本
    try {
      const contentType = res.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        // 返回Response的克隆，這樣可以在錯誤處理過程中再次解析
        const clonedRes = res.clone();
        // 構造一個帶有 response 屬性的錯誤對象，讓後續處理更方便
        const error = new Error('API請求失敗');
        (error as any).response = clonedRes;
        throw error;
      } else {
        // 非JSON響應，直接使用普通文本
        const text = await res.text();
        throw new Error(text || '發生未知錯誤');
      }
    } catch (err) {
      // 如果已經是我們構造的錯誤，直接傳遞
      if ((err as any).response) {
        throw err;
      }
      // 無法解析的錯誤
      throw new Error('發生未知錯誤');
    }
  }
}

export async function apiRequest(
  method: string,
  url: string,
  data?: unknown | undefined,
): Promise<Response> {
  const res = await fetch(url, {
    method,
    headers: data ? { "Content-Type": "application/json" } : {},
    body: data ? JSON.stringify(data) : undefined,
    credentials: "include",
  });

  await throwIfResNotOk(res);
  return res;
}

type UnauthorizedBehavior = "returnNull" | "throw";
export const getQueryFn: <T>(options: {
  on401: UnauthorizedBehavior;
}) => QueryFunction<T> =
  ({ on401: unauthorizedBehavior }) =>
  async ({ queryKey }) => {
    const res = await fetch(queryKey[0] as string, {
      credentials: "include",
    });

    if (unauthorizedBehavior === "returnNull" && res.status === 401) {
      return null;
    }

    await throwIfResNotOk(res);
    return await res.json();
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
