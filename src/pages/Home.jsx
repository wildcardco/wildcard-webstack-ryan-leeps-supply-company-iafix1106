import { useEffect } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import Swoosh from "../components/Swoosh";
import {
  business,
  heroMedia,
  locationPhotos,
  mediaById,
  products,
} from "../data/catalog";

const railIds = ["merville", "highland", "crown", "joel"];

function railCaption(id) {
  const place = locationPhotos.find((item) => item.mediaId === id);
  if (place) return `${place.town} · ${place.kind}. ${place.note}`;
  return "Homepage photo joel.png. A matching branch name was not in the captured location list, so it is not assigned to a town.";
}

export default function Home() {
  useEffect(() => {
    document.title = "Home | Leeps Supply Company";
  }, []);

  const arrow = mediaById("more-products");
  const merrillville = mediaById("merville");

  return (
    <div className="home">
      <section className="hero-shell" aria-label="Introduction">
        {heroMedia?.localSrc ? (
          <div className="hero-photo">
            <img
              className="hero-main"
              src={heroMedia.localSrc}
              alt={heroMedia.alt}
              data-testid="hero-media"
            />
            {merrillville?.localSrc ? (
              <figure className="hero-inset">
                <img src={merrillville.localSrc} alt={merrillville.alt} />
                <figcaption>
                  Merrillville counter. Street address was not captured.
                </figcaption>
              </figure>
            ) : null}
          </div>
        ) : null}
        <div className="page-wrap hero-copy">
          <div className="hero-card-wrap">
            <div className="hero-card is-in">
              <p className="eyebrow">Sample catalog</p>
              <h1>
                Leeps
                <span>Supply Company</span>
              </h1>
              <Swoosh />
              <p className="hero-lead">
                Three verified products from{" "}
                <a href={business.website} target="_blank" rel="noreferrer">
                  leeps.com
                </a>
                . This demo is not the live store.
              </p>
              <p className="hero-phone">
                <a href={business.phoneTel}>{business.phone}</a>
              </p>
              <p className="hero-note">{business.addressNote}</p>
              <div className="hero-actions">
                <Link className="btn" to="/catalog">
                  Browse the sample catalog
                </Link>
                <Link className="btn btn-ghost" to="/locations">
                  Counters and showrooms
                </Link>
              </div>
            </div>
          </div>
          {arrow?.localSrc ? (
            <Link to="/catalog" className="hero-arrow">
              <img src={arrow.localSrc} alt={arrow.alt} />
            </Link>
          ) : null}
        </div>
      </section>

      <div className="page-wrap photo-rail-wrap">
        <ul className="photo-rail">
          {railIds.map((id) => {
            const media = mediaById(id);
            if (!media?.localSrc) return null;
            return (
              <li key={id} className={id === "merville" ? "is-mobile-only" : undefined}>
                <article className="rail-card">
                  <img src={media.localSrc} alt={media.alt} />
                  <p>{railCaption(id)}</p>
                </article>
              </li>
            );
          })}
        </ul>
        <p className="rail-note">
          Location photos from the Leeps homepage. October 2026 banner files
          could not be downloaded: the live host returned HTTP 403 and no
          archive copy was available. Source URLs remain in the catalog data.
        </p>
      </div>

      <section className="sample-board" aria-labelledby="sample-products">
        <div className="page-wrap">
          <div className="sample-head" data-reveal>
            <p className="eyebrow">Verified sample</p>
            <h2 id="sample-products">Sample products</h2>
            <Swoosh />
            <p>
              Three products from the supplied Leeps pages. Prices that were
              blank or still loading stay unverified. ZADRO LURV410 keeps the
              observed Call for Price label. Availability stays unverified.
            </p>
          </div>
          <div className="product-stage featured">
            {products.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
