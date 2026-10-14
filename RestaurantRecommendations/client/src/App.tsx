import { Switch, Route, Router as WouterRouter } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { UserProvider } from "@/components/UserContext";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import UserManual from "@/pages/UserManual";

// 用網址的 # 切換頁面（#/manual），放在 GitHub Pages 的子資料夾也不會 404
function Router() {
  return (
    <WouterRouter hook={useHashLocation}>
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/manual" component={UserManual} />
      <Route component={NotFound} />
    </Switch>
    </WouterRouter>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <UserProvider>
          <Toaster />
          <Router />
        </UserProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
