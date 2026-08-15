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
import { NAV_SECTIONS } from "@/data/tires";

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [location]);
  return null;
}

// DEV SHORTCUTS — temporary, strip before production: delete this component,
// TIRE_ORDER, the NAV_SECTIONS import, and the <KeyboardShortcuts /> line in
// Router() below. Nothing else references any of them.
//   Ctrl+Shift+F11 / F12  → the two demo template pages
//   Ctrl+Shift+← / →      → previous / next tire, wrapping at both ends
//
// Order is the Navbar dropdown's own order (left column top-to-bottom, then
// right), derived from NAV_SECTIONS so it can't drift out of sync with the menu.
const TIRE_ORDER: string[] = NAV_SECTIONS.flatMap(s => s.tires.map(t => t.slug));

function KeyboardShortcuts() {
  const [location, navigate] = useLocation();

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (!e.ctrlKey || !e.shiftKey) return;
      // Ctrl+Shift+Arrow is select-a-word-at-a-time in a text field — don't
      // steal it from the finder's search box.
      const el = e.target;
      if (
        el instanceof HTMLInputElement ||
        el instanceof HTMLTextAreaElement ||
        (el instanceof HTMLElement && el.isContentEditable)
      ) return;

      if (e.key === "F11" || e.key === "F12") {
        e.preventDefault();
        navigate(e.key === "F11" ? "/tires/demo-x1" : "/tires/demo-x2");
        return;
      }

      if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
      e.preventDefault();

      const step = e.key === "ArrowRight" ? 1 : -1;
      const here = TIRE_ORDER.indexOf(location.replace(/^\/tires\//, ""));
      // Anywhere other than a catalog tire page (landing, finder, a demo page):
      // → enters at the first tire, ← at the last.
      const next =
        here === -1
          ? step === 1 ? 0 : TIRE_ORDER.length - 1
          : (here + step + TIRE_ORDER.length) % TIRE_ORDER.length;

      navigate(`/tires/${TIRE_ORDER[next]}`);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [navigate, location]);

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
