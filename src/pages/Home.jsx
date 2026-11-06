import { useEffect } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import {
  business,
  heroMedia,
  homepageMedia,
  locationPhotos,
  mediaById,
  products,
} from "../data/catalog";

const galleryIds = ["merville", "highland", "crown", "joel"];

export default function Home() {
  useEffect(() => {
    document.title = "Home | Leeps Supply Company";
  }, []);

  const moreProducts = homepageMedia.find((item) => item.id === "more-products");

  return (
    <div className="page-wrap grid gap-10">
      <section className="grid items-center gap-6 md:grid-cols-2">
        {heroMedia?.localSrc ? (
          <img
            src={heroMedia.localSrc}
            alt={heroMedia.alt}
            data-testid="hero-media"
            className="w-full border border-line bg-surface"
          />
        ) : null}
        <div>
          <h1 className="mb-2 mt-0 text-3xl leading-tight">
            Leeps Supply Company
          </h1>
          <p className="mt-0">
            Sample catalog of three verified products from{" "}
            <a href={business.website} target="_blank" rel="noreferrer">
              leeps.com
            </a>
            . {business.town}, {business.region}. {business.addressNote}
          </p>
          <p>
            Phone <a href={business.phoneTel}>{business.phone}</a>
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Link className="btn" to="/catalog">
              Browse the sample catalog
            </Link>
            {moreProducts?.localSrc ? (
              <Link to="/catalog" className="inline-flex items-center">
                <img
                  src={moreProducts.localSrc}
                  alt={moreProducts.alt}
                  className="h-12 w-auto"
                />
              </Link>
            ) : null}
          </div>
        </div>
      </section>

      <section>
        <h2 className="mb-3 mt-0 text-2xl">Homepage photos</h2>
        <p className="mt-0 text-sm text-muted">
          Location photos from the Leeps homepage. October 2026 banner files
          could not be downloaded (the live host returned HTTP 403 and no
          archive copy was available). Source URLs remain in the catalog data.
        </p>
        <ul className="m-0 grid list-none gap-4 p-0 sm:grid-cols-2">
          {galleryIds.map((id) => {
            const media = mediaById(id);
            const place = locationPhotos.find((item) => item.mediaId === id);
            if (!media?.localSrc) return null;
            return (
              <li key={id} className="surface p-3">
                <img src={media.localSrc} alt={media.alt} className="w-full" />
                <p className="mb-0 mt-2 text-sm">
                  {place
                    ? `${place.town} (${place.kind}). ${place.note}`
                    : "Homepage photo joel.png. No matching branch name was in the captured location list."}
                </p>
              </li>
            );
          })}
        </ul>
      </section>

      <section>
        <h2 className="mb-3 mt-0 text-2xl">Sample products</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
