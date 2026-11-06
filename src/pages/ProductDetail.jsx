import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import PriceTag from "../components/PriceTag";
import Swoosh from "../components/Swoosh";
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
    <div className="page-wrap page-pad">
      <div className="detail-layout">
        <div>
          <div className="detail-frame">
            <img className="detail-main" src={image.src} alt={image.alt} />
          </div>
          {product.images.length > 1 ? (
            <div className="thumbs">
              {product.images.map((item, index) => (
                <button
                  key={item.src}
                  type="button"
                  aria-pressed={index === active}
                  aria-label={`Show image ${index + 1} of ${product.name}`}
                  onClick={() => setActive(index)}
                >
                  <img src={item.src} alt="" />
                </button>
              ))}
            </div>
          ) : null}
        </div>
        <div className="page-mast-card detail-sheet" data-reveal>
          <p className="crumb">
            <Link to="/catalog">Sample catalog</Link>
            {category ? (
              <>
                {" / "}
                <Link to={`/catalog/${category.slug}`}>{category.name}</Link>
              </>
            ) : null}
          </p>
          <h1>{product.title}</h1>
          <Swoosh />
          <p>{product.shortDescription}</p>
          <dl className="spec-list">
            <dt>Brand</dt>
            <dd>{product.brand}</dd>
            <dt>Part number</dt>
            <dd>{product.partNumber}</dd>
            <dt>Model</dt>
            <dd>{product.modelNumber}</dd>
            <dt>Price</dt>
            <dd>
              <PriceTag product={product} />
              <span className="spec-note">
                Captured note: {product.priceObservation}
              </span>
            </dd>
            <dt>Availability</dt>
            <dd>
              {product.availabilityDisplay}
              <span className="spec-note">
                Captured note: {product.availabilityObservation}
              </span>
            </dd>
          </dl>
          <p className="source-line">
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
            <p role="status" className="added-note">
              Added to the sample cart. <Link to="/cart">Review cart</Link>
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}
