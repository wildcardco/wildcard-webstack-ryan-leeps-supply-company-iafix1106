import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import PageMast from "../components/PageMast";
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
    <div className="page-wrap page-pad">
      <PageMast eyebrow="Local demo only" title="Test checkout">
        <p
          className="test-stamp"
          data-testid="checkout-mode"
          role="status"
        >
          <strong className="test-kicker">Test / No payment / No real order</strong>
          This page only reviews the sample cart in this browser. It does not
          collect payment, customer details, or send an order to Leeps Supply.
        </p>
      </PageMast>
      {lines.length === 0 ? (
        <p>
          The cart is empty, so there is nothing to review.{" "}
          <Link className="text-link" to="/catalog">
            Browse the sample catalog
          </Link>
        </p>
      ) : (
        <>
          <ul className="stack-list">
            {lines.map((line) => {
              const product = getProduct(line.slug);
              if (!product) return null;
              return (
                <li key={line.slug} className="review-line">
                  <h2 className="product-name">{product.name}</h2>
                  <p className="product-brand">Part {product.partNumber}</p>
                  <p className="product-brand">Quantity {line.quantity}</p>
                  <PriceTag product={product} />
                </li>
              );
            })}
          </ul>
          <p data-testid="no-total">
            No order total, tax, discount, or shipping amount is shown. Sampled
            prices are not verified dollar amounts.
          </p>
          <div className="hero-actions">
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
