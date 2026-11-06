import { useEffect } from "react";
import { Link } from "react-router-dom";
import PageMast from "../components/PageMast";
import { brands, productsByBrand } from "../data/catalog";

export default function Brands() {
  useEffect(() => {
    document.title = "Brands | Leeps Supply Company";
  }, []);

  return (
    <div className="page-wrap page-pad">
      <PageMast eyebrow="From the three verified products" title="Brands">
        <p>
          The full featured brand list stays on{" "}
          <a href="https://www.leeps.com/brands" target="_blank" rel="noreferrer">
            leeps.com/brands
          </a>
          .
        </p>
      </PageMast>
      <ul className="brand-board">
        {brands.map((brand) => {
          const items = productsByBrand(brand.slug);
          const image = items[0]?.images[0];
          return (
            <li key={brand.slug} className="brand-row" id={brand.slug}>
              {image ? <img src={image.src} alt={image.alt} /> : null}
              <div>
                <h2>{brand.name}</h2>
                <ul>
                  {items.map((product) => (
                    <li key={product.slug}>
                      <Link className="text-link" to={`/products/${product.slug}`}>
                        {product.title}
                      </Link>
                      <span className="product-brand">
                        {" "}
                        · Part {product.partNumber}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
