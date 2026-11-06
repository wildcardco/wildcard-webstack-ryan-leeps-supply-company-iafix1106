import { Link } from "react-router-dom";
import { getCategory } from "../data/catalog";
import { useCart } from "../context/CartContext";
import PriceTag from "./PriceTag";

export default function ProductCard({ product }) {
  const { addItem } = useCart();
  const category = getCategory(product.categorySlug);
  const image = product.images[0];

  return (
    <article className="surface flex flex-col gap-3 p-4" data-testid="product-card">
      <Link to={`/products/${product.slug}`} className="text-ink no-underline">
        <img
          src={image.src}
          alt={image.alt}
          className="aspect-square w-full object-contain bg-bg"
        />
        <h2 className="mb-1 mt-3 text-lg leading-snug">{product.name}</h2>
      </Link>
      <p className="m-0 text-sm text-muted">
        {product.brand} · Part {product.partNumber}
      </p>
      <p className="m-0 text-sm">{product.shortDescription}</p>
      <PriceTag product={product} />
      <p className="m-0 text-sm text-muted">
        Availability: {product.availabilityDisplay}
      </p>
      {category ? (
        <p className="m-0 text-sm">
          <Link to={`/catalog/${category.slug}`}>{category.name}</Link>
        </p>
      ) : null}
      <div className="mt-auto flex flex-wrap gap-2">
        <Link className="btn" to={`/products/${product.slug}`}>
          View details
        </Link>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => addItem(product.slug, 1)}
        >
          Add to cart
        </button>
      </div>
    </article>
  );
}
