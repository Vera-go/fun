import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Utensils, Plane, Vote, LogIn, LogOut, User, ImageIcon, Shield } from "lucide-react";
import { useUser } from "./UserContext";
import { LoginDialog } from "./LoginDialog";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Link } from "wouter";
import { useEvent } from "@/lib/event";
import { termsFor, HOME_TITLE } from "@/lib/terms";

export function Header() {
  const { currentUser, isAdmin, logout } = useUser();
  const { event } = useEvent();
  const T = termsFor(event?.kind);
  // 標題列：進入活動後依活動類型顯示；首頁等還沒進入活動的頁面用通用標題
  const title = event ? { app: T.app, slogan: T.slogan } : HOME_TITLE;
  const AppIcon = !event ? Vote : event.kind === "trip" ? Plane : Utensils;
  useEffect(() => { document.title = `${title.app} - ${title.slogan}`; }, [title.app, title.slogan]);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isFixingImages, setIsFixingImages] = useState(false);
  const { toast } = useToast();
  const queryClient = useQueryClient();
  
  // 修復所有餐廳圖片的mutation
  const fixRestaurantImagesMutation = useMutation({
    mutationFn: async () => {
      setIsFixingImages(true);
      return apiRequest("POST", `/api/fix-restaurant-images?isAdmin=1`).then(res => res.json());
    },
    onSuccess: (result) => {
      // 成功後刷新餐廳數據
      queryClient.invalidateQueries({ queryKey: ['/api/restaurants'] });
      queryClient.invalidateQueries({ queryKey: ['/api/votes/restaurants'] });
      
      toast({
        title: "圖片修復成功",
        description: result.message,
        variant: "default",
      });
      setIsFixingImages(false);
    },
    onError: (error: Error) => {
      toast({
        title: "圖片修復失敗",
        description: error.message || "發生錯誤，請稍後再試",
        variant: "destructive",
      });
      setIsFixingImages(false);
    }
  });

  return (
    <header className="bg-gradient-to-r from-gray-900 via-primary to-gray-900 sticky top-0 z-10 shadow-md border-b border-amber-500/20">
      <div className="container mx-auto px-6 py-5 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-4" title="回首頁">
          <div className="p-2 rounded-full bg-gradient-to-br from-amber-300/20 to-amber-500/10 backdrop-blur-sm border border-amber-500/30 shadow-[0_0_10px_rgba(217,119,6,0.2)]">
            <AppIcon className="h-6 w-6 text-amber-300" />
          </div>
          <div>
            <h1 className="text-xl md:text-2xl font-medium tracking-wider flex items-center flex-wrap">
              <span className="font-serif mr-2 font-semibold text-amber-100">{title.app}</span>
              <span className="hidden sm:inline text-lg md:text-xl font-serif text-amber-100/90">{title.slogan}</span>
            </h1>
            <div className="h-[1px] w-[60%] mx-auto bg-gradient-to-r from-amber-500/0 via-amber-500/40 to-amber-500/0 mt-2"></div>
          </div>
        </Link>
        
        <div className="flex items-center space-x-3">
          {currentUser ? (
            <>
              <div className="hidden md:flex items-center mr-3">
                <div className="flex items-center backdrop-blur-sm rounded-full px-3 py-1 border border-amber-500/30 bg-gradient-to-b from-amber-900/50 to-amber-900/20 shadow-[0_0_10px_rgba(217,119,6,0.15)]">
                  <div className="bg-gradient-to-br from-amber-400 to-amber-600 rounded-full p-1 mr-2 shadow-inner">
                    <User className="h-3.5 w-3.5 text-white" />
                  </div>
                  <span className="font-medium text-sm text-amber-100">{currentUser.name}</span>
                </div>
                {isAdmin && (
                  <div className="ml-2 flex items-center space-x-2">
                    <div className="relative">
                      <div className="flex items-center px-2 py-0.5 rounded-md bg-gradient-to-r from-amber-900/80 to-amber-800/80 border border-amber-500/30 shadow-[0_0_10px_rgba(217,119,6,0.15)]">
                        <span className="text-xs text-amber-300 font-medium tracking-wide">
                          <Shield className="h-3 w-3 inline mr-1 text-amber-300" />
                          {currentUser.isAdmin === 1 && event?.isAdmin ? "主辦人" : "管理員"}
                        </span>
                      </div>
                    </div>
                    
                    {event && <Button
                      variant="ghost" 
                      size="sm"
                      className="h-6 px-1.5 py-0.5 rounded-md bg-gradient-to-r from-blue-900/80 to-blue-800/80 border border-blue-500/30 text-xs text-blue-300 font-medium tracking-wide hover:bg-blue-800/50"
                      onClick={() => fixRestaurantImagesMutation.mutate()}
                      disabled={isFixingImages}
                      title={`修復所有${T.item}圖片`}
                    >
                      <ImageIcon className="h-3 w-3 inline mr-1 text-blue-300" />
                      {isFixingImages ? "修復中..." : `修復${T.item}圖片`}
                    </Button>}
                  </div>
                )}
              </div>
              <Button 
                variant="ghost" 
                size="sm"
                className="relative overflow-hidden text-amber-100/80 hover:text-amber-100 hover:bg-white/5 rounded-full px-3 font-medium transition-all duration-200"
                onClick={logout}
              >
                <span className="relative flex items-center">
                  <LogOut className="h-3.5 w-3.5 mr-1.5 opacity-80" />
                  登出
                </span>
              </Button>
            </>
          ) : (
            <Button 
              variant="outline" 
              size="sm"
              className="relative overflow-hidden bg-gradient-to-r from-indigo-700 to-blue-700 text-white border border-indigo-300/30 hover:shadow-[0_0_15px_rgba(99,102,241,0.5)] rounded-full px-4 font-medium shadow-sm transition-all duration-300 group"
              onClick={() => setIsLoginOpen(true)}
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-tr from-indigo-500/20 to-blue-500/20 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300"></span>
              <span className="absolute -inset-[1px] rounded-full bg-gradient-to-r from-indigo-300 to-blue-300 opacity-20 blur-[2px] -z-10"></span>
              <span className="relative flex items-center">
                <LogIn className="h-3.5 w-3.5 mr-1.5" />
                登入
              </span>
            </Button>
          )}
        </div>
      </div>
      
      {/* 裝飾分隔線 */}
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-amber-500/30 to-transparent shadow-[0_2px_6px_rgba(217,119,6,0.2)]"></div>
      
      <LoginDialog 
        isOpen={isLoginOpen} 
        onClose={() => setIsLoginOpen(false)} 
      />
    </header>
  );
}

export default Header;
