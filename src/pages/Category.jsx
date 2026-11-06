import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
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
    <div className="page-wrap grid gap-6">
      <header>
        <p className="mb-1 mt-0 text-sm">
          <Link to="/catalog">Sample catalog</Link>
        </p>
        <h1 className="mb-2 mt-0 text-3xl">{category.name}</h1>
        <p className="mt-0">{category.summary}</p>
        <p className="text-sm">
          Source:{" "}
          <a href={category.sourceUrl} target="_blank" rel="noreferrer">
            {category.sourceUrl}
          </a>
        </p>
      </header>
      {items.length === 0 ? (
        <p>No sample products are assigned to this category.</p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {items.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
