import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Utensils, Plane, Vote, LogIn, LogOut, User, Shield, ChevronDown } from "lucide-react";
import { useUser } from "./UserContext";
import { LoginDialog } from "./LoginDialog";
import { Link, useLocation } from "wouter";
import { useEvent, myEvents } from "@/lib/event";
import { termsFor, HOME_TITLE } from "@/lib/terms";
import { toggleHostTools, useHostToolsOpen } from "@/lib/hostTools";

export function Header() {
  const { currentUser, isAdmin, logout } = useUser();
  const { event, notFound } = useEvent();
  // 活動頁（#/e/活動代碼）在資料載入前，先用這台裝置記得的活動名稱和類型，避免標題先閃成首頁的「推薦及投票」
  const [loc] = useLocation();
  const routeCode = notFound ? undefined : loc.match(/^\/e\/([^/]+)/)?.[1]?.toLowerCase();
  const cached = !event && routeCode ? myEvents().find(e => e.code === routeCode) : undefined;
  const shown = event ? { title: event.title, kind: event.kind } : cached ? { title: cached.title, kind: cached.kind } : null;
  const pending = !shown && !!routeCode;   // 第一次打開的活動：載入前先放空白佔位
  const T = termsFor(shown?.kind);
  // 標題列：進入活動後大字是活動名稱、小字是網站名稱；首頁等還沒進入活動的頁面用通用標題
  const title = shown ? { app: T.app, slogan: T.slogan } : HOME_TITLE;
  const hostOpen = useHostToolsOpen();
  const AppIcon = pending ? null : !shown ? Vote : shown.kind === "trip" ? Plane : Utensils;
  // 瀏覽器分頁標題：活動頁顯示活動名稱
  const tabTitle = shown ? `${shown.title} - ${T.app}` : pending ? "載入中…" : `${title.app} - ${title.slogan}`;
  useEffect(() => { document.title = tabTitle; }, [tabTitle]);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-gray-900 via-primary to-gray-900 sticky top-0 z-10 shadow-md border-b border-amber-500/20">
      <div className="container mx-auto px-6 py-5 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3 md:gap-4 min-w-0 flex-1 mr-3" title="回首頁">
          <div className="flex-shrink-0 p-2 rounded-full bg-gradient-to-br from-amber-300/20 to-amber-500/10 backdrop-blur-sm border border-amber-500/30 shadow-[0_0_10px_rgba(217,119,6,0.2)]">
            {AppIcon ? <AppIcon className="h-6 w-6 text-amber-300" /> : <span className="block h-6 w-6" />}
          </div>
          <div className="min-w-0">
            {shown ? (
              <h1 className="font-medium tracking-wider min-w-0">
                <span className="block text-xs md:text-sm font-serif text-amber-100/70">{T.app}</span>
                <span className="block text-lg md:text-2xl font-serif font-semibold text-amber-100 truncate" title={shown.title}>{shown.title}</span>
              </h1>
            ) : pending ? (
              <div className="space-y-2 py-0.5" aria-label="載入中">
                <span className="block h-3 w-20 rounded bg-amber-100/15 animate-pulse" />
                <span className="block h-6 w-44 md:w-64 rounded bg-amber-100/15 animate-pulse" />
              </div>
            ) : (
              <h1 className="text-xl md:text-2xl font-medium tracking-wider flex items-center flex-wrap">
                <span className="font-serif mr-2 font-semibold text-amber-100">{title.app}</span>
                <span className="hidden sm:inline text-lg md:text-xl font-serif text-amber-100/90">{title.slogan}</span>
              </h1>
            )}
            <div className="h-[1px] w-[60%] mx-auto bg-gradient-to-r from-amber-500/0 via-amber-500/40 to-amber-500/0 mt-2"></div>
          </div>
        </Link>
        
        <div className="flex items-center space-x-3 flex-shrink-0">
          {event?.isAdmin && (
            <button type="button" onClick={toggleHostTools} aria-expanded={hostOpen}
              className={`flex items-center px-2.5 py-1 rounded-md border text-xs font-medium tracking-wide transition-colors ${hostOpen ? "bg-amber-500 text-gray-900 border-amber-300" : "bg-gradient-to-r from-amber-900/80 to-amber-800/80 text-amber-300 border-amber-500/40 hover:border-amber-300"}`}
              title={hostOpen ? "收起主辦人工具" : "打開主辦人工具"}>
              <Shield className="h-3 w-3 mr-1" />主辦人<ChevronDown className={`h-3 w-3 ml-0.5 transition-transform ${hostOpen ? "rotate-180" : ""}`} />
            </button>
          )}
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
                    {!event && (
                      <div className="flex items-center px-2 py-0.5 rounded-md bg-gradient-to-r from-amber-900/80 to-amber-800/80 border border-amber-500/30">
                        <span className="text-xs text-amber-300 font-medium tracking-wide"><Shield className="h-3 w-3 inline mr-1 text-amber-300" />管理員</span>
                      </div>
                    )}
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
