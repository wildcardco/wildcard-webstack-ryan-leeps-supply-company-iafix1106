import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";

export default function Layout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:z-10 focus:bg-surface focus:px-3 focus:py-2"
      >
        Skip to content
      </a>
      <p className="m-0 bg-notice px-4 py-2 text-sm text-notice-ink" role="note">
        Sample catalog demo. This is not the live Leeps Supply checkout. Prices
        that were not captured stay unverified. Test checkout does not take
        payment or place an order.
      </p>
      <Nav />
      <main id="content" className="flex-1 py-6">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
