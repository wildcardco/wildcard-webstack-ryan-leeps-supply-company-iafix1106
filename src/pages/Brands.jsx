import { useEffect } from "react";
import { Link } from "react-router-dom";
import { brands, productsByBrand } from "../data/catalog";

export default function Brands() {
  useEffect(() => {
    document.title = "Brands | Leeps Supply Company";
  }, []);

  return (
    <div className="page-wrap grid gap-6">
      <header>
        <h1 className="mb-2 mt-0 text-3xl">Brands in this sample</h1>
        <p className="mt-0">
          Brands below are the ones on the three verified products. The full
          featured brand list stays on{" "}
          <a href="https://www.leeps.com/brands" target="_blank" rel="noreferrer">
            leeps.com/brands
          </a>
          .
        </p>
      </header>
      <ul className="m-0 grid list-none gap-4 p-0">
        {brands.map((brand) => {
          const items = productsByBrand(brand.slug);
          return (
            <li key={brand.slug} className="surface p-4" id={brand.slug}>
              <h2 className="mb-2 mt-0 text-xl">{brand.name}</h2>
              <ul className="m-0 list-none space-y-2 p-0">
                {items.map((product) => (
                  <li key={product.slug}>
                    <Link to={`/products/${product.slug}`}>{product.title}</Link>
                    <span className="text-sm text-muted">
                      {" "}
                      · Part {product.partNumber}
                    </span>
                  </li>
                ))}
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
