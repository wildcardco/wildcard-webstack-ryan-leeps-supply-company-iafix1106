import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
    <div className="page-wrap grid max-w-3xl gap-4">
      <h1 className="mb-0 mt-0 text-3xl">Test review confirmation</h1>
      <p className="m-0 border border-notice bg-notice p-4 text-notice-ink" role="status" data-testid="confirm-banner">
        NO PAYMENT was taken. NO REAL ORDER was placed. Nothing was sent to
        Leeps Supply Company.
      </p>
      {!review ? (
        <p data-testid="confirm-empty">
          No test review is stored in this browser session.{" "}
          <Link to="/cart">Return to the cart</Link>
        </p>
      ) : (
        <div data-testid="confirm-review">
          <p>
            Local demo reference <strong>{review.id}</strong>. This reference
            was generated in the browser. It is not a Leeps Supply order
            number.
          </p>
          <ul className="m-0 list-none space-y-3 p-0">
            {review.items.map((item) => (
              <li key={item.slug} className="surface p-3 text-sm">
                <p className="m-0 font-semibold">{item.name}</p>
                <p className="m-0">Part {item.partNumber}</p>
                <p className="m-0">Quantity {item.quantity}</p>
                <p className="m-0">
                  {item.priceDisplay === "Call for Price"
                    ? "Call for Price"
                    : "Not verified · Contact for quote"}
                </p>
              </li>
            ))}
          </ul>
          <p className="text-sm text-muted">
            Recorded locally at {review.createdAt}. Mode: {review.mode}.
          </p>
        </div>
      )}
      <p>
        <Link to="/catalog">Back to the sample catalog</Link>
      </p>
    </div>
  );
}
