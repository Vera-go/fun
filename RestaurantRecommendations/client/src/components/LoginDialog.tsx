import { useState } from "react";
import { useUser } from "./UserContext";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Key, ShieldCheck } from "lucide-react";

interface LoginDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

/* 一般使用者只要輸入名字。
   - 活動主辦人：建立活動時就是主辦人，換裝置時用「管理連結」打開，不用另外登入。
   - 網站管理員（最大權限）：在許願池下方的管理中心用 email 登入，這裡會自動認得（同一個登入身分）。 */
export function LoginDialog({ isOpen, onClose }: LoginDialogProps) {
  const [username, setUsername] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useUser();

  const handleLogin = async () => {
    if (!username.trim()) return;
    setIsLoading(true);
    try {
      await login(username);
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
            請輸入你的名字以便推薦和投票
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
              onKeyDown={(e) => { if (e.key === "Enter" && !e.nativeEvent.isComposing) handleLogin(); }}
              className="col-span-3"
            />
          </div>
          <div className="flex gap-2 bg-amber-50 p-3 rounded-md border border-amber-200 text-sm text-amber-800">
            <ShieldCheck className="h-4 w-4 mt-0.5 flex-shrink-0 text-amber-600" />
            <p className="m-0">建立活動的人不用另外登入管理員：用建立活動時拿到的「管理連結」打開活動，就是主辦人。</p>
          </div>
        </div>
        <div className="flex justify-end">
          <Button
            onClick={handleLogin}
            disabled={!username.trim() || isLoading}
            className="bg-gradient-to-r from-primary to-secondary text-white"
          >
            {isLoading ? "登入中..." : "登入"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
