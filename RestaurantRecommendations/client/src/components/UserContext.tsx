import { createContext, useState, useContext, ReactNode, useEffect } from "react";
import { User } from "@/types";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

interface UserContextType {
  currentUser: User | null;
  isAdmin: boolean;
  login: (username: string, isAdmin: boolean) => Promise<void>;
  logout: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const { toast } = useToast();

  // 從 localStorage 恢復用戶登錄狀態
  useEffect(() => {
    const savedUserString = localStorage.getItem('currentUser');
    if (savedUserString) {
      try {
        const savedUser = JSON.parse(savedUserString);
        setCurrentUser(savedUser);
      } catch (error) {
        console.error("Failed to parse saved user:", error);
        localStorage.removeItem('currentUser');
      }
    }
  }, []);

  // 登入函數
  const login = async (username: string, isAdmin: boolean) => {
    try {
      if (!username.trim()) {
        throw new Error("用戶名不能為空");
      }

      console.log(`正在登入: 用戶名=${username}, 管理員=${isAdmin ? 'Yes' : 'No'}`);

      // 創建用戶或獲取已存在的用戶
      const user = await apiRequest("POST", "/api/users", {
        name: username,
        isAdmin: isAdmin ? 1 : 0
      }).then(res => res.json());

      console.log("登入返回用戶數據:", user);
      
      // 確保用戶有管理員標識
      if (isAdmin && user.isAdmin !== 1) {
        user.isAdmin = 1;
        console.log("強制設置用戶為管理員");
      }

      setCurrentUser(user);
      localStorage.setItem('currentUser', JSON.stringify(user));

      toast({
        title: "登入成功",
        description: `歡迎 ${user.name}${isAdmin ? ' (管理員)' : ''}`,
      });
    } catch (error) {
      console.error("登入失敗:", error);
      toast({
        title: "登入失敗",
        description: "無法創建或獲取用戶資訊",
        variant: "destructive",
      });
      throw error;
    }
  };

  // 登出函數
  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem('currentUser');
    toast({
      title: "已登出",
      description: "你已成功登出",
    });
  };

  // 使用計算屬性來確定是否為管理員
  const isAdmin = currentUser?.isAdmin === 1;
  console.log("User Context:", currentUser, "isAdmin:", isAdmin);
  
  return (
    <UserContext.Provider
      value={{
        currentUser,
        isAdmin,
        login,
        logout
      }}
    >
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