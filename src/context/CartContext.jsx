import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { getProduct } from "../data/catalog";

const STORAGE_KEY = "leeps-sample-cart";

const CartContext = createContext(null);

function readStoredLines() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed
      .filter(
        (line) =>
          line &&
          typeof line.slug === "string" &&
          getProduct(line.slug) &&
          Number.isInteger(line.quantity) &&
          line.quantity > 0,
      )
      .map((line) => ({
        slug: line.slug,
        quantity: Math.min(line.quantity, 99),
      }));
  } catch {
    return [];
  }
}

export function CartProvider({ children }) {
  const [lines, setLines] = useState(() => readStoredLines());

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
  }, [lines]);

  const value = useMemo(() => {
    const count = lines.reduce((sum, line) => sum + line.quantity, 0);

    function addItem(slug, quantity = 1) {
      if (!getProduct(slug)) return;
      const qty = Math.max(1, Math.min(99, Math.floor(Number(quantity)) || 1));
      setLines((current) => {
        const existing = current.find((line) => line.slug === slug);
        if (!existing) return [...current, { slug, quantity: qty }];
        return current.map((line) =>
          line.slug === slug
            ? { ...line, quantity: Math.min(99, line.quantity + qty) }
            : line,
        );
      });
    }

    function setQuantity(slug, quantity) {
      const qty = Math.floor(Number(quantity));
      if (!Number.isFinite(qty) || qty < 1) {
        setLines((current) => current.filter((line) => line.slug !== slug));
        return;
      }
      setLines((current) =>
        current.map((line) =>
          line.slug === slug ? { ...line, quantity: Math.min(99, qty) } : line,
        ),
      );
    }

    function removeItem(slug) {
      setLines((current) => current.filter((line) => line.slug !== slug));
    }

    function clear() {
      setLines([]);
    }

    return { lines, count, addItem, setQuantity, removeItem, clear };
  }, [lines]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
}
