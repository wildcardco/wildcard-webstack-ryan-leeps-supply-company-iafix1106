import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PageMast from "../components/PageMast";
import { TEST_CHECKOUT_KEY } from "./Checkout";

export default function CheckoutConfirm() {
  const [review, setReview] = useState(null);

  useEffect(() => {
    document.title = "Test review confirmation | Leeps Supply Company";
    try {
      const raw = sessionStorage.getItem(TEST_CHECKOUT_KEY);
      setReview(raw ? JSON.parse(raw) : null);
    } catch {
      setReview(null);
    }
  }, []);

  return (
    <div className="page-wrap page-pad">
      <PageMast eyebrow="Local demo reference" title="Test review confirmation">
        <p className="test-stamp" role="status" data-testid="confirm-banner">
          <strong className="test-kicker">No payment. No real order.</strong>
          Nothing was sent to Leeps Supply Company.
        </p>
      </PageMast>
      {!review ? (
        <p data-testid="confirm-empty">
          No test review is stored in this browser session.{" "}
          <Link className="text-link" to="/cart">
            Return to the cart
          </Link>
        </p>
      ) : (
        <div data-testid="confirm-review">
          <p>
            Local demo reference <strong>{review.id}</strong>. This reference
            was generated in the browser. It is not a Leeps Supply order
            number.
          </p>
          <ul className="stack-list">
            {review.items.map((item) => (
              <li key={item.slug} className="review-line">
                <p className="product-name">{item.name}</p>
                <p className="product-brand">Part {item.partNumber}</p>
                <p className="product-brand">Quantity {item.quantity}</p>
                <p>
                  {item.priceDisplay === "Call for Price"
                    ? "Call for Price"
                    : "Not verified · Contact for quote"}
                </p>
              </li>
            ))}
          </ul>
          <p className="product-brand">
            Recorded locally at {review.createdAt}. Mode: {review.mode}.
          </p>
        </div>
      )}
      <p>
        <Link className="btn" to="/catalog">
          Back to the sample catalog
        </Link>
      </p>
    </div>
  );
}
