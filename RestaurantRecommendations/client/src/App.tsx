import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { UserProvider } from "@/components/UserContext";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import UserManual from "@/pages/UserManual";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/manual" component={UserManual} />
      <Route component={NotFound} />
    </Switch>
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
