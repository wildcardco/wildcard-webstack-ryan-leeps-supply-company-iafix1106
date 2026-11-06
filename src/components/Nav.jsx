import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { logo, primaryNav } from "../data/catalog";
import { useCart } from "../context/CartContext";

const DESKTOP_NAV = "(min-width: 960px)";

export default function Nav() {
  const { count } = useCart();
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const buttonRef = useRef(null);
  const panelRef = useRef(null);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!open) return undefined;
    const media = window.matchMedia(DESKTOP_NAV);

    function syncScrollLock() {
      document.body.style.overflow = media.matches ? "" : "hidden";
    }

    syncScrollLock();
    media.addEventListener("change", syncScrollLock);

    const button = buttonRef.current;
    const panel = panelRef.current;

    function focusableItems() {
      const links = panel ? Array.from(panel.querySelectorAll("a, button")) : [];
      return button ? [button, ...links] : links;
    }

    if (!media.matches) {
      panel?.querySelector("a")?.focus();
    }

    function onKeyDown(event) {
      if (media.matches) return;
      if (event.key !== "Escape") return;
      event.preventDefault();
      setOpen(false);
      button?.focus();
    }

    function onFocusIn(event) {
      if (media.matches) return;
      const items = focusableItems();
      if (items.length === 0 || items.includes(event.target)) return;
      (panel?.querySelector("a") ?? button)?.focus();
    }

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("focusin", onFocusIn);
    return () => {
      media.removeEventListener("change", syncScrollLock);
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("focusin", onFocusIn);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="site-header">
      {open ? (
        <button
          type="button"
          className="nav-backdrop"
          tabIndex={-1}
          aria-label="Close menu"
          onClick={() => {
            setOpen(false);
            buttonRef.current?.focus();
          }}
        />
      ) : null}
      <div className="page-wrap header-bar">
        <Link to="/" className="logo-link">
          <img src={logo.src} alt={logo.alt} />
        </Link>
        <nav
          id="primary-nav"
          ref={panelRef}
          aria-label="Primary"
          data-testid="primary-nav"
          className={`nav-panel ${open ? "is-open" : ""}`}
        >
          <ul className="nav-list">
            {primaryNav.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === "/"}
                  className="nav-link"
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <Link to="/cart" data-testid="cart-link" className="cart-link">
          Cart <span className="cart-count" data-testid="cart-count">{count}</span>
        </Link>
        <button
          type="button"
          ref={buttonRef}
          className="btn menu-button"
          data-testid="menu-button"
          aria-expanded={open}
          aria-controls="primary-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>
    </header>
  );
}
