import { useEffect } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { catalogSurfaces, categories, products } from "../data/catalog";

export default function Catalog() {
  useEffect(() => {
    document.title = "Sample catalog | Leeps Supply Company";
  }, []);

  return (
    <div className="page-wrap grid gap-8">
      <header>
        <h1 className="mb-2 mt-0 text-3xl">Sample catalog</h1>
        <p className="mt-0">
          Three verified products. This demo does not import the full Leeps
          catalog. Prices that were blank or still loading stay unverified.
          ZADRO LURV410 keeps the observed Call for Price label.
        </p>
        <ul className="m-0 flex list-none flex-wrap gap-2 p-0">
          {categories.map((category) => (
            <li key={category.slug}>
              <Link className="btn btn-secondary" to={`/catalog/${category.slug}`}>
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </header>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
      <section>
        <h2 className="mb-2 mt-0 text-2xl">Catalog destinations on leeps.com</h2>
        <p className="mt-0 text-sm text-muted">
          These are observed catalog URLs. Only Plumbing and Mirrors have
          sample products in this demo. The other destinations stay on the
          live site.
        </p>
        <ul className="m-0 grid list-none gap-3 p-0 sm:grid-cols-2">
          {catalogSurfaces.map((surface) => (
            <li key={surface.href} className="surface p-3 text-sm">
              <a href={surface.href} target="_blank" rel="noreferrer">
                {surface.label}
              </a>
              {surface.sampleSlug ? (
                <p className="mb-0 mt-2">
                  <Link to={`/catalog/${surface.sampleSlug}`}>
                    Open the sample in this demo
                  </Link>
                </p>
              ) : (
                <p className="mb-0 mt-2 text-muted">
                  No sample product from this destination was included.
                </p>
              )}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
