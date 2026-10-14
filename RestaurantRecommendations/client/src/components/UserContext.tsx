import { createContext, useState, useContext, ReactNode, useEffect } from "react";
import { User } from "@/types";
import { supabase } from "@/lib/supabase";
import { queryClient } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { useEvent, reloadEvent, ensureSession } from "@/lib/event";

interface UserContextType {
  currentUser: User | null;
  isAdmin: boolean;
  // 一般使用者只要名字（匿名登入，綁定這台裝置）；管理員要 email 和密碼
  login: (username: string, isAdmin: boolean, email?: string, password?: string) => Promise<void>;
  logout: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);
const SAVED = "currentUser";

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
        if (saved && !error && u.user && u.user.id === saved.id) setCurrentUser(saved);
        else localStorage.removeItem(SAVED);
      } catch {
        localStorage.removeItem(SAVED);
      }
    })();
  }, []);

  const login = async (username: string, asAdmin: boolean, email?: string, password?: string) => {
    try {
      const name = username.trim();
      if (!name) throw new Error("用戶名不能為空");

      if (asAdmin) {
        const { error } = await supabase.auth.signInWithPassword({ email: email || "", password: password || "" });
        if (error) throw new Error("email 或密碼不正確");
      } else {
        // 已經有這台裝置的匿名身分就沿用，投過的票才不會不見；之前是管理員登入、或身分已失效就換新的匿名身分
        await ensureSession({ anonymousOnly: true });
      }

      const { data: s } = await supabase.auth.getSession();
      const uid = s.session!.user.id;
      const { error: pe } = await supabase.from("profiles").upsert({ id: uid, name });
      if (pe) throw new Error("無法儲存名字");

      let admin = false;
      if (asAdmin) {
        const { data: isAdm } = await supabase.rpc("is_admin");
        admin = !!isAdm;
        if (!admin) {
          await supabase.auth.signOut();
          throw new Error("這個帳號不是管理員");
        }
      }

      const user: User = { id: uid as any, name, isAdmin: admin ? 1 : 0, createdAt: new Date().toISOString() };
      setCurrentUser(user);
      localStorage.setItem(SAVED, JSON.stringify(user));
      await reloadEvent();          // 換了身分，重新確認是不是這個活動的主辦人
      queryClient.invalidateQueries();
      toast({ title: "登入成功", description: `歡迎 ${name}${admin ? "（管理員）" : ""}` });
    } catch (error: any) {
      toast({ title: "登入失敗", description: error?.message || "無法登入", variant: "destructive" });
      throw error;
    }
  };

  const logout = async () => {
    // 管理員真的登出；一般使用者保留這台裝置的匿名身分，下次登入投過的票還在
    if (currentUser?.isAdmin === 1) await supabase.auth.signOut();
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
