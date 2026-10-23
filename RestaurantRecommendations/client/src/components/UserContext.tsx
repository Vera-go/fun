import { createContext, useState, useContext, ReactNode, useEffect } from "react";
import { User } from "@/types";
import { supabase } from "@/lib/supabase";
import { queryClient } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { useEvent, reloadEvent, ensureSession } from "@/lib/event";

interface UserContextType {
  currentUser: User | null;
  isAdmin: boolean;
  // 只要名字（匿名登入，綁定這台裝置）。網站管理員是在許願池的管理中心用 email 登入，這裡自動認得
  login: (username: string) => Promise<void>;
  logout: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);
const SAVED = "currentUser";

// 目前的登入身分是不是網站管理員（在許願池管理中心用 email 登入的；和這裡共用同一個登入）
async function sessionIsSiteAdmin(): Promise<string | null> {
  const { data } = await supabase.auth.getSession();
  const u = data.session?.user;
  if (!u || u.is_anonymous) return null;
  const { data: ok } = await supabase.rpc("is_admin");
  return ok ? u.id : null;
}

export function UserProvider({ children }: { children: ReactNode }) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const { toast } = useToast();

  // 恢復登入狀態：Supabase 的登入還在，才沿用上次的名字
  useEffect(() => {
    (async () => {
      try {
        const saved = JSON.parse(localStorage.getItem(SAVED) || "null");
        const { data } = await supabase.auth.getSession();
        const { data: u, error } = data.session ? await supabase.auth.getUser() : { data: { user: null }, error: null };
        // 在管理中心登入過：直接當網站管理員（最大權限），名字沿用上次的或資料庫裡的
        const adminId = !error && u.user ? await sessionIsSiteAdmin() : null;
        if (adminId) {
          let name = saved?.id === adminId ? saved.name : "";
          if (!name) {
            const { data: p } = await supabase.from("profiles").select("name").eq("id", adminId).maybeSingle();
            name = p?.name || "網站管理員";
          }
          const user: User = { id: adminId as any, name, isAdmin: 1, createdAt: new Date().toISOString() };
          setCurrentUser(user);
          localStorage.setItem(SAVED, JSON.stringify(user));
          await reloadEvent();
          return;
        }
        if (saved && !error && u.user && u.user.id === saved.id) setCurrentUser({ ...saved, isAdmin: 0 });
        else localStorage.removeItem(SAVED);
      } catch {
        localStorage.removeItem(SAVED);
      }
    })();
  }, []);

  const login = async (username: string) => {
    try {
      const name = username.trim();
      if (!name) throw new Error("用戶名不能為空");

      // 網站管理員（在管理中心登入過）沿用管理員身分；其他人沿用這台裝置的匿名身分，投過的票才不會不見
      const admin = !!(await sessionIsSiteAdmin());
      if (!admin) await ensureSession({ anonymousOnly: true });

      const { data: s } = await supabase.auth.getSession();
      const uid = s.session!.user.id;
      const { error: pe } = await supabase.from("profiles").upsert({ id: uid, name });
      if (pe) throw new Error("無法儲存名字");

      const user: User = { id: uid as any, name, isAdmin: admin ? 1 : 0, createdAt: new Date().toISOString() };
      setCurrentUser(user);
      localStorage.setItem(SAVED, JSON.stringify(user));
      await reloadEvent();          // 換了身分，重新確認是不是這個活動的主辦人
      queryClient.invalidateQueries();
      toast({ title: "登入成功", description: `歡迎 ${name}${admin ? "（網站管理員）" : ""}` });
    } catch (error: any) {
      toast({ title: "登入失敗", description: error?.message || "無法登入", variant: "destructive" });
      throw error;
    }
  };

  const logout = async () => {
    // 網站管理員真的登出（許願池的管理中心也會一起登出）；一般使用者保留這台裝置的匿名身分，下次登入投過的票還在
    if (await sessionIsSiteAdmin()) await supabase.auth.signOut();
    setCurrentUser(null);
    localStorage.removeItem(SAVED);
    await reloadEvent();
    queryClient.invalidateQueries();
    toast({ title: "已登出", description: "你已成功登出" });
  };

  // 管理權限 = 你這個超級管理員，或目前這個活動的主辦人；畫面元件都看 currentUser.isAdmin
  const { event } = useEvent();
  const isAdmin = currentUser?.isAdmin === 1 || (!!currentUser && !!event?.isAdmin);
  const effectiveUser = currentUser ? { ...currentUser, isAdmin: isAdmin ? 1 : 0 } : null;

  return (
    <UserContext.Provider value={{ currentUser: effectiveUser, isAdmin, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}
