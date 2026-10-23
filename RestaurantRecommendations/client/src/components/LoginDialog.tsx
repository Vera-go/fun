import { useState } from "react";
import { useUser } from "./UserContext";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Key, Info } from "lucide-react";

interface LoginDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

/* 一般使用者只要輸入名字（身分綁在這台裝置，名字給主辦人看）。
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
          {/* 身分是綁在這台裝置（匿名登入），名字只是給主辦人看的；所以提醒用認得出來的名字、同一台裝置 */}
          <div className="flex gap-2 bg-amber-50 p-3 rounded-md border border-amber-200 text-sm text-amber-800">
            <Info className="h-4 w-4 mt-0.5 flex-shrink-0 text-amber-600" />
            <ul className="m-0 pl-4 list-disc space-y-1">
              <li>請用<b>主辦人認得出來的名字</b>（例如本名或大家都知道的綽號），主辦人才知道是誰推薦、誰投票。</li>
              <li>每次都用<b>同一個名字</b>，並盡量用<b>同一支手機或電腦</b>：換了裝置會被當成另一個人，之前投的票不會跟過去。</li>
            </ul>
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
