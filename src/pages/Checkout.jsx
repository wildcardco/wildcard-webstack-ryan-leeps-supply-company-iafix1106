import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import PriceTag from "../components/PriceTag";
import { useCart } from "../context/CartContext";
import { getProduct } from "../data/catalog";

export const TEST_CHECKOUT_KEY = "leeps-sample-test-checkout";

export default function Checkout() {
  const { lines, clear } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Test checkout | Leeps Supply Company";
  }, []);

  function confirmTestReview() {
    const items = lines
      .map((line) => {
        const product = getProduct(line.slug);
        if (!product) return null;
        return {
          slug: product.slug,
          name: product.name,
          partNumber: product.partNumber,
          quantity: line.quantity,
          price: null,
          priceDisplay: product.priceDisplay,
        };
      })
      .filter(Boolean);

    if (items.length === 0) return;

    const review = {
      id: `TEST-${Date.now()}`,
      createdAt: new Date().toISOString(),
      mode: "TEST_NO_PAYMENT_NO_ORDER",
      items,
    };
    sessionStorage.setItem(TEST_CHECKOUT_KEY, JSON.stringify(review));
    clear();
    navigate("/checkout/confirmation");
  }

  return (
    <div className="page-wrap grid max-w-3xl gap-6">
      <header>
        <h1 className="mb-2 mt-0 text-3xl">Test checkout</h1>
        <p
          className="m-0 border border-notice bg-notice p-4 text-notice-ink"
          data-testid="checkout-mode"
          role="status"
        >
          TEST / NO PAYMENT / NO REAL ORDER. This page only reviews the sample
          cart in this browser. It does not collect payment, customer details,
          or send an order to Leeps Supply.
        </p>
      </header>
      {lines.length === 0 ? (
        <p>
          The cart is empty, so there is nothing to review.{" "}
          <Link to="/catalog">Browse the sample catalog</Link>
        </p>
      ) : (
        <>
          <ul className="m-0 grid list-none gap-3 p-0">
            {lines.map((line) => {
              const product = getProduct(line.slug);
              if (!product) return null;
              return (
                <li key={line.slug} className="surface p-4">
                  <h2 className="mb-1 mt-0 text-lg">{product.name}</h2>
                  <p className="m-0 text-sm">Part {product.partNumber}</p>
                  <p className="m-0 text-sm">Quantity {line.quantity}</p>
                  <PriceTag product={product} />
                </li>
              );
            })}
          </ul>
          <p className="m-0 text-sm" data-testid="no-total">
            No order total, tax, discount, or shipping amount is shown. Sampled
            prices are not verified dollar amounts.
          </p>
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              className="btn"
              data-testid="confirm-test-checkout"
              onClick={confirmTestReview}
            >
              Confirm test review
            </button>
            <Link className="btn btn-secondary" to="/cart">
              Back to cart
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
