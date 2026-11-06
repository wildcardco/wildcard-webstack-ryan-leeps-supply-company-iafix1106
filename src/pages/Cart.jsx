import { useEffect } from "react";
import { Link } from "react-router-dom";
import PageMast from "../components/PageMast";
import PriceTag from "../components/PriceTag";
import { useCart } from "../context/CartContext";
import { getProduct } from "../data/catalog";

export default function Cart() {
  const { lines, setQuantity, removeItem } = useCart();

  useEffect(() => {
    document.title = "Cart | Leeps Supply Company";
  }, []);

  return (
    <div className="page-wrap page-pad">
      <PageMast eyebrow="Saved in this browser" title="Cart">
        <p>
          Quantities are saved in this browser. No order total is shown,
          because the sampled prices are not verified dollar amounts.
        </p>
      </PageMast>
      {lines.length === 0 ? (
        <p data-testid="cart-empty">
          Your cart is empty.{" "}
          <Link className="text-link" to="/catalog">
            Browse the sample catalog
          </Link>
        </p>
      ) : (
        <ul className="stack-list">
          {lines.map((line) => {
            const product = getProduct(line.slug);
            if (!product) return null;
            return (
              <li
                key={line.slug}
                className="cart-line"
                data-testid={`cart-line-${line.slug}`}
              >
                <img src={product.images[0].src} alt="" />
                <div>
                  <h2>
                    <Link to={`/products/${product.slug}`}>{product.name}</Link>
                  </h2>
                  <p className="product-brand">Part {product.partNumber}</p>
                  <PriceTag product={product} />
                  <div className="qty-row">
                    <span id={`qty-label-${line.slug}`}>Quantity</span>
                    <button
                      type="button"
                      className="btn btn-secondary icon-btn"
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
                      className="btn btn-secondary icon-btn"
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
