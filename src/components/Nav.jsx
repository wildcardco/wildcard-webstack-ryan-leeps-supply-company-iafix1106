import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { logo, primaryNav } from "../data/catalog";
import { useCart } from "../context/CartContext";

export default function Nav() {
  const { count } = useCart();
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!open) return undefined;
    function onKeyDown(event) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="bg-header text-white">
      <div className="page-wrap flex items-center gap-3 py-3">
        <Link to="/" className="mr-auto inline-flex shrink-0 items-center">
          <img src={logo.src} alt={logo.alt} className="h-10 w-auto sm:h-12" />
        </Link>
        <Link
          to="/cart"
          data-testid="cart-link"
          className="inline-flex min-h-11 items-center text-white no-underline"
        >
          Cart (<span data-testid="cart-count">{count}</span>)
        </Link>
        <button
          type="button"
          className="btn btn-secondary min-w-11 md:hidden"
          data-testid="menu-button"
          aria-expanded={open}
          aria-controls="primary-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>
      <nav
        id="primary-nav"
        aria-label="Primary"
        data-testid="primary-nav"
        className={`${open ? "block" : "hidden"} border-t border-white/15 md:block`}
      >
        <ul className="page-wrap m-0 flex list-none flex-col gap-1 px-0 py-3 md:flex-row md:flex-wrap md:gap-x-5 md:py-2">
          {primaryNav.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  `inline-flex min-h-11 items-center text-white no-underline ${
                    isActive ? "underline underline-offset-4" : ""
                  }`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
