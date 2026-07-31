import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { useEffect, useRef } from "react";
import { Toaster } from "@/components/ui/toaster";
import LandingPage from "@/pages/LandingPage";
import TirePage from "@/pages/TirePage";
import TireProductPage from "@/pages/TireProductPage";
import AboutPage from "@/pages/AboutPage";
import ContactPage from "@/pages/ContactPage";
import NotFound from "@/pages/not-found";

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [location]);
  return null;
}

// Dev shortcuts: Ctrl+X then 1 → /tires/demo-x1, Ctrl+X then 2 → /tires/demo-x2
function KeyboardShortcuts() {
  const [, navigate] = useLocation();
  const ctrlXArmed = useRef(false);
  const armTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      // Arm on Ctrl+X (ignore when typing in inputs)
      if (e.ctrlKey && e.key.toLowerCase() === "x" && !(e.target instanceof HTMLInputElement) && !(e.target instanceof HTMLTextAreaElement)) {
        e.preventDefault();
        ctrlXArmed.current = true;
        if (armTimer.current) clearTimeout(armTimer.current);
        armTimer.current = setTimeout(() => { ctrlXArmed.current = false; }, 1500);
        return;
      }
      if (ctrlXArmed.current && (e.key === "1" || e.key === "2")) {
        ctrlXArmed.current = false;
        if (armTimer.current) clearTimeout(armTimer.current);
        navigate(e.key === "1" ? "/tires/demo-x1" : "/tires/demo-x2");
      }
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
