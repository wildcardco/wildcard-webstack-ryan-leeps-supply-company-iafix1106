import { Link } from "react-router-dom";
import { getCategory } from "../data/catalog";
import { useCart } from "../context/CartContext";
import PriceTag from "./PriceTag";

export default function ProductCard({ product }) {
  const { addItem } = useCart();
  const category = getCategory(product.categorySlug);
  const image = product.images[0];

  return (
    <article className="product-card" data-testid="product-card">
      <p className="part-tab">Part {product.partNumber}</p>
      <Link to={`/products/${product.slug}`} className="product-photo">
        <img src={image.src} alt={image.alt} />
      </Link>
      <h2>
        <Link className="product-name" to={`/products/${product.slug}`}>
          {product.name}
        </Link>
      </h2>
      <p className="product-brand">{product.brand}</p>
      <p className="product-copy">{product.shortDescription}</p>
      <PriceTag product={product} />
      <p className="avail-line">Availability: {product.availabilityDisplay}</p>
      {category ? (
        <p className="product-brand">
          <Link className="text-link" to={`/catalog/${category.slug}`}>
            {category.name}
          </Link>
        </p>
      ) : null}
      <div className="product-actions">
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
