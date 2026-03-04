import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"
import { initGA } from "./analytics";
import { useEffect } from "react";
import AppRoutes from "./AppRoutes";

const queryClient = new QueryClient();

const App = () => {

  useEffect(() => {
    initGA();
  }, []);

  return (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <div className="dark">
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
        <Analytics />
        <SpeedInsights />
      </div>
    </TooltipProvider>
  </QueryClientProvider>
  );
};

export default App;
