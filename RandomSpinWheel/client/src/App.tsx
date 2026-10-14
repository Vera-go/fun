import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";

// 轉盤只有一頁：放在 GitHub Pages 的子路徑（例如 /fun/wheel/）時網址不是 "/"，所以任何網址都顯示轉盤
function Router() {
  return (
    <Switch>
      <Route component={Home} />
    </Switch>
  );
}

function App() {
  return (
    <TooltipProvider>
      <Toaster />
      <Router />
    </TooltipProvider>
  );
}

export default App;
