export default function PriceTag({ product }) {
  if (product.callForPrice) {
    return (
      <p className="m-0" data-testid="price-label">
        <strong>Call for Price</strong>
        <span className="block text-sm text-muted">
          No dollar amount was captured.
        </span>
      </p>
    );
  }

  return (
    <p className="m-0" data-testid="price-label">
      <strong>Not verified</strong>
      <span className="block text-sm text-muted">Contact for quote</span>
    </p>
  );
}
