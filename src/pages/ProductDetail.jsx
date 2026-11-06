import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import PriceTag from "../components/PriceTag";
import { useCart } from "../context/CartContext";
import { getCategory, getProduct } from "../data/catalog";
import NotFound from "./NotFound";

export default function ProductDetail() {
  const { slug } = useParams();
  const product = getProduct(slug);
  const { addItem } = useCart();
  const [active, setActive] = useState(0);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    setActive(0);
    setAdded(false);
  }, [slug]);

  useEffect(() => {
    if (product) document.title = `${product.title} | Leeps Supply Company`;
  }, [product]);

  if (!product) return <NotFound />;

  const category = getCategory(product.categorySlug);
  const image = product.images[Math.min(active, product.images.length - 1)];

  return (
    <div className="page-wrap grid gap-6 md:grid-cols-2">
      <div>
        <img
          src={image.src}
          alt={image.alt}
          className="w-full border border-line bg-surface object-contain"
        />
        {product.images.length > 1 ? (
          <div className="mt-3 flex gap-2">
            {product.images.map((item, index) => (
              <button
                key={item.src}
                type="button"
                className="surface w-20 p-1"
                aria-pressed={index === active}
                onClick={() => setActive(index)}
              >
                <img src={item.src} alt="" />
              </button>
            ))}
          </div>
        ) : null}
      </div>
      <div>
        <p className="mb-1 mt-0 text-sm">
          <Link to="/catalog">Sample catalog</Link>
          {category ? (
            <>
              {" / "}
              <Link to={`/catalog/${category.slug}`}>{category.name}</Link>
            </>
          ) : null}
        </p>
        <h1 className="mb-2 mt-0 text-3xl leading-tight">{product.title}</h1>
        <p>{product.shortDescription}</p>
        <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 text-sm">
          <dt className="font-semibold">Brand</dt>
          <dd className="m-0">{product.brand}</dd>
          <dt className="font-semibold">Part number</dt>
          <dd className="m-0">{product.partNumber}</dd>
          <dt className="font-semibold">Model</dt>
          <dd className="m-0">{product.modelNumber}</dd>
          <dt className="font-semibold">Price</dt>
          <dd className="m-0">
            <PriceTag product={product} />
            <span className="mt-1 block text-muted">
              Captured note: {product.priceObservation}
            </span>
          </dd>
          <dt className="font-semibold">Availability</dt>
          <dd className="m-0">
            {product.availabilityDisplay}
            <span className="mt-1 block text-muted">
              Captured note: {product.availabilityObservation}
            </span>
          </dd>
        </dl>
        <p className="break-all text-sm">
          Source page:{" "}
          <a href={product.sourceUrl} target="_blank" rel="noreferrer">
            {product.sourceUrl}
          </a>
        </p>
        <button
          type="button"
          className="btn"
          data-testid="add-to-cart"
          onClick={() => {
            addItem(product.slug, 1);
            setAdded(true);
          }}
        >
          Add to cart
        </button>
        {added ? (
          <p role="status" className="text-sm">
            Added to the sample cart.{" "}
            <Link to="/cart">Review cart</Link>
          </p>
        ) : null}
      </div>
    </div>
  );
}
