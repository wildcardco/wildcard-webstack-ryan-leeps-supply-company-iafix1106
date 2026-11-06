import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import PageMast from "../components/PageMast";
import ProductCard from "../components/ProductCard";
import { getCategory, productsInCategory } from "../data/catalog";
import NotFound from "./NotFound";

export default function Category() {
  const { categorySlug } = useParams();
  const category = getCategory(categorySlug);
  const items = category ? productsInCategory(category.slug) : [];

  useEffect(() => {
    if (category) document.title = `${category.name} | Leeps Supply Company`;
  }, [category]);

  if (!category) return <NotFound />;

  return (
    <div className="page-wrap page-pad">
      <PageMast eyebrow="Sample catalog" title={category.name}>
        <p>
          <Link to="/catalog">All sample products</Link>
        </p>
        <p>{category.summary}</p>
        <p className="source-line">
          Source:{" "}
          <a href={category.sourceUrl} target="_blank" rel="noreferrer">
            {category.sourceUrl}
          </a>
        </p>
      </PageMast>
      {items.length === 0 ? (
        <p>No sample products are assigned to this category.</p>
      ) : (
        <div className="product-stage cols-2">
          {items.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
