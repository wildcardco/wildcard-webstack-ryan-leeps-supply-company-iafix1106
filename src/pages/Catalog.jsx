import { useEffect } from "react";
import { Link } from "react-router-dom";
import PageMast from "../components/PageMast";
import ProductCard from "../components/ProductCard";
import { catalogSurfaces, categories, products } from "../data/catalog";

export default function Catalog() {
  useEffect(() => {
    document.title = "Sample catalog | Leeps Supply Company";
  }, []);

  return (
    <div className="page-wrap page-pad">
      <PageMast eyebrow="Three verified products" title="Sample catalog">
        <p>
          This demo does not import the full Leeps catalog. Prices that were
          blank or still loading stay unverified. ZADRO LURV410 keeps the
          observed Call for Price label.
        </p>
        <ul className="chip-row">
          {categories.map((category) => (
            <li key={category.slug}>
              <Link className="btn btn-secondary" to={`/catalog/${category.slug}`}>
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </PageMast>
      <div className="product-stage featured">
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
      <section className="catalog-foot">
        <h2 className="section-title">On leeps.com</h2>
        <div>
          <p className="section-lead">
            Observed catalog URLs. Plumbing and Mirrors have sample products in
            this demo. The other destinations stay on the live site.
          </p>
          <ul className="surface-list">
            {catalogSurfaces.map((surface) => (
              <li key={surface.href}>
                <a href={surface.href} target="_blank" rel="noreferrer">
                  {surface.label}
                </a>
                {surface.sampleSlug ? (
                  <p>
                    <Link to={`/catalog/${surface.sampleSlug}`}>
                      Open the sample in this demo
                    </Link>
                  </p>
                ) : (
                  <p>No sample product from this destination was included.</p>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
