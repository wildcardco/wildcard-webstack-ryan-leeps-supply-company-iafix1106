import { useEffect } from "react";
import { Link } from "react-router-dom";
import PriceTag from "../components/PriceTag";
import { useCart } from "../context/CartContext";
import { getProduct } from "../data/catalog";

export default function Cart() {
  const { lines, setQuantity, removeItem } = useCart();

  useEffect(() => {
    document.title = "Cart | Leeps Supply Company";
  }, []);

  return (
    <div className="page-wrap grid gap-6">
      <header>
        <h1 className="mb-2 mt-0 text-3xl">Cart</h1>
        <p className="mt-0">
          Quantities are saved in this browser. No order total is shown,
          because the sampled prices are not verified dollar amounts.
        </p>
      </header>
      {lines.length === 0 ? (
        <p data-testid="cart-empty">
          Your cart is empty.{" "}
          <Link to="/catalog">Browse the sample catalog</Link>
        </p>
      ) : (
        <ul className="m-0 grid list-none gap-4 p-0">
          {lines.map((line) => {
            const product = getProduct(line.slug);
            if (!product) return null;
            return (
              <li
                key={line.slug}
                className="surface grid gap-4 p-4 sm:grid-cols-[6rem_1fr]"
                data-testid={`cart-line-${line.slug}`}
              >
                <img
                  src={product.images[0].src}
                  alt=""
                  className="w-full object-contain"
                />
                <div>
                  <h2 className="mb-1 mt-0 text-lg">
                    <Link to={`/products/${product.slug}`}>{product.name}</Link>
                  </h2>
                  <p className="m-0 text-sm text-muted">
                    Part {product.partNumber}
                  </p>
                  <div className="my-2">
                    <PriceTag product={product} />
                  </div>
                  <div className="my-3 flex flex-wrap items-center gap-2 text-sm">
                    <span id={`qty-label-${line.slug}`}>Quantity</span>
                    <button
                      type="button"
                      className="btn btn-secondary min-w-11"
                      data-testid={`qty-dec-${line.slug}`}
                      aria-label={`Decrease quantity of ${product.name}`}
                      onClick={() =>
                        setQuantity(line.slug, Math.max(1, line.quantity - 1))
                      }
                    >
                      −
                    </button>
                    <input
                      id={`qty-${line.slug}`}
                      aria-labelledby={`qty-label-${line.slug}`}
                      data-testid={`qty-${line.slug}`}
                      className="w-20 border border-line bg-surface px-2 py-2"
                      type="number"
                      min="1"
                      max="99"
                      value={line.quantity}
                      onChange={(event) => {
                        if (event.target.value === "") return;
                        setQuantity(line.slug, event.target.value);
                      }}
                    />
                    <button
                      type="button"
                      className="btn btn-secondary min-w-11"
                      data-testid={`qty-inc-${line.slug}`}
                      aria-label={`Increase quantity of ${product.name}`}
                      onClick={() => setQuantity(line.slug, line.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-testid={`remove-${line.slug}`}
                    onClick={() => removeItem(line.slug)}
                  >
                    Remove
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
      {lines.length > 0 ? (
        <p>
          <Link className="btn" to="/checkout">
            Continue to test checkout
          </Link>
        </p>
      ) : null}
    </div>
  );
}
