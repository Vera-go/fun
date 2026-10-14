import { createContext, useState, useContext, ReactNode, useEffect } from "react";
import { User } from "@/types";
import { supabase } from "@/lib/supabase";
import { queryClient } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

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
        if (saved && data.session && data.session.user.id === saved.id) setCurrentUser(saved);
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
        const { data } = await supabase.auth.getSession();
        // 已經有這台裝置的匿名身分就沿用，投過的票才不會不見；之前是管理員登入就換回匿名
        if (!data.session || !data.session.user.is_anonymous) {
          if (data.session) await supabase.auth.signOut();
          const { error } = await supabase.auth.signInAnonymously();
          if (error) throw new Error("無法登入，請稍後再試");
        }
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
    queryClient.invalidateQueries();
    toast({ title: "已登出", description: "你已成功登出" });
  };

  const isAdmin = currentUser?.isAdmin === 1;

  return (
    <UserContext.Provider value={{ currentUser, isAdmin, login, logout }}>
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
