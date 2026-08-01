import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import LandingPage from "@/pages/LandingPage";
import TirePage from "@/pages/TirePage";
import TireProductPage from "@/pages/TireProductPage";
import TireFinderPage from "@/pages/TireFinderPage";
import AboutPage from "@/pages/AboutPage";
import ContactPage from "@/pages/ContactPage";
import NotFound from "@/pages/not-found";

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [location]);
  return null;
}

// Dev shortcuts: Ctrl+Shift+F11 → /tires/demo-x1, Ctrl+Shift+F12 → /tires/demo-x2
function KeyboardShortcuts() {
  const [, navigate] = useLocation();

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (!e.ctrlKey || !e.shiftKey || (e.key !== "F11" && e.key !== "F12")) return;
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      e.preventDefault();
      navigate(e.key === "F11" ? "/tires/demo-x1" : "/tires/demo-x2");
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [navigate]);

  return null;
}

function Router() {
  return (
    <>
      <ScrollToTop />
      <KeyboardShortcuts />
      <Switch>
        <Route path="/" component={LandingPage} />
        <Route path="/tires" component={TirePage} />
        <Route path="/tires/:slug" component={TireProductPage} />
        <Route path="/tire-finder" component={TireFinderPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/contact" component={ContactPage} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <>
      <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
        <Router />
      </WouterRouter>
      <Toaster />
    </>
  );
}

export default App;
