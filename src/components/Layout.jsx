import { useEffect, useLayoutEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";

export default function Layout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    function sync() {
      document.documentElement.classList.toggle("js-motion", !media.matches);
      if (media.matches) {
        document.querySelectorAll("[data-reveal]").forEach((node) => {
          node.classList.add("is-in");
        });
      }
    }
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  useLayoutEffect(() => {
    const nodes = Array.from(document.querySelectorAll("[data-reveal]"));
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.documentElement.classList.toggle("js-motion", !reduce);
    if (reduce || typeof IntersectionObserver !== "function") {
      nodes.forEach((node) => node.classList.add("is-in"));
      return undefined;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-in");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.18 },
    );
    nodes.forEach((node) => {
      const rect = node.getBoundingClientRect();
      const viewH = window.innerHeight || document.documentElement.clientHeight;
      if (rect.top < viewH * 0.92 && rect.bottom > 0) node.classList.add("is-in");
      else observer.observe(node);
    });
    return () => observer.disconnect();
  }, [location.pathname]);

  return (
    <div className="site-root">
      <a href="#content" className="skip-link">
        Skip to content
      </a>
      <p className="demo-tape" role="note">
        <span className="tape-mark">Sample</span>
        Sample catalog demo. This is not the live Leeps Supply checkout. Prices
        that were not captured stay unverified. Test checkout does not take
        payment or place an order.
      </p>
      <Nav />
      <main id="content" className="site-main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
