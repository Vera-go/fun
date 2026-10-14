import { useState } from "react";
import { useUser } from "./UserContext";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";
import { Key, Lock } from "lucide-react";

interface LoginDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export function LoginDialog({ isOpen, onClose }: LoginDialogProps) {
  const [username, setUsername] = useState("");
  const [adminEmail, setAdminEmail] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useUser();
  const { toast } = useToast();

  // 管理員改用 Supabase 帳號（email + 密碼）登入，密碼不再寫在程式裡
  const handleLogin = async () => {
    if (!username.trim()) return;
    if (isAdmin && (!adminEmail.trim() || !adminPassword)) {
      toast({ title: "請輸入管理員 email 和密碼", variant: "destructive" });
      return;
    }

    setIsLoading(true);
    try {
      console.log(`Attempting login for ${username}, isAdmin=${isAdmin}`);
      await login(username, isAdmin, adminEmail.trim(), adminPassword);
      onClose();
    } catch (error) {
      console.error("Login failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">使用者登入</DialogTitle>
          <DialogDescription className="text-center">
            請輸入你的名字以便投票和追蹤
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="username" className="flex items-center">
              <Key className="h-4 w-4 mr-1 text-blue-500" />
              <span>用戶名稱</span>
            </Label>
            <Input
              id="username"
              placeholder="請輸入你的名字"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="flex items-center space-x-2 bg-gray-50 p-2 rounded-md border border-gray-200">
            <Switch
              id="admin-mode"
              checked={isAdmin}
              onCheckedChange={setIsAdmin}
            />
            <Label htmlFor="admin-mode" className="flex items-center">
              <span>管理者模式</span>
              {isAdmin ? (
                <span className="ml-2 text-xs font-medium bg-green-100 text-green-800 py-0.5 px-2 rounded-full">已啟用</span>
              ) : (
                <span className="ml-2 text-xs font-medium bg-gray-100 text-gray-600 py-0.5 px-2 rounded-full">未啟用</span>
              )}
            </Label>
          </div>
          
          {isAdmin && (
            <>
              <div className="grid gap-2">
                <Label htmlFor="admin-email" className="flex items-center">
                  <Lock className="h-4 w-4 mr-1 text-amber-500" />
                  <span>管理員 email</span>
                </Label>
                <Input
                  id="admin-email"
                  type="email"
                  autoComplete="username"
                  placeholder="請輸入管理員 email"
                  value={adminEmail}
                  onChange={(e) => setAdminEmail(e.target.value)}
                  className="col-span-3"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="admin-password" className="flex items-center">
                  <Lock className="h-4 w-4 mr-1 text-amber-500" />
                  <span>管理員密碼</span>
                </Label>
                <Input
                  id="admin-password"
                  type="password"
                  autoComplete="current-password"
                  placeholder="請輸入管理員密碼"
                  value={adminPassword}
                  onChange={(e) => setAdminPassword(e.target.value)}
                  className="col-span-3"
                />
              </div>
              <div className="bg-amber-50 p-3 rounded-md border border-amber-200">
                <p className="text-amber-700 text-sm">
                  管理者模式已啟用。管理者可以查看每個餐廳的投票詳情，包括所有投票者的名單。需要用管理員的 email 和密碼登入。
                </p>
              </div>
            </>
          )}
        </div>
        <div className="flex justify-end">
          <Button 
            onClick={handleLogin} 
            disabled={!username.trim() || isLoading || (isAdmin && (!adminEmail.trim() || !adminPassword))}
            className="bg-gradient-to-r from-primary to-secondary text-white"
          >
            {isLoading ? "登入中..." : "登入"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}