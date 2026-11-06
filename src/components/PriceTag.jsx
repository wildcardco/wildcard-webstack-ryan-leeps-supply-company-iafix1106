export default function PriceTag({ product }) {
  if (product.callForPrice) {
    return (
      <p className="price-tag" data-testid="price-label">
        <strong>Call for Price</strong>
        <span>No dollar amount was captured.</span>
      </p>
    );
  }

  return (
    <p className="price-tag" data-testid="price-label">
      <strong>Not verified</strong>
      <span>Contact for quote</span>
    </p>
  );
}
