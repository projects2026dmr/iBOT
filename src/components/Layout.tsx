import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
  const { pathname, hash } = useLocation();

  // Scroll to top on route change
  // Skip only when navigating to homepage with a section hash (e.g. /#onas)
  useEffect(() => {
    // If on homepage with a hash anchor, let the page handle its own scrolling
    if (pathname === "/" && hash) {
      return;
    }
    // For all other pages (woj, powiat, gmina, kontakt, etc.) — scroll to top
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
