import { useEffect } from "react";
import { Link } from "react-router-dom";
import PageMast from "../components/PageMast";
import { mediaById } from "../data/catalog";

export default function Offers() {
  useEffect(() => {
    document.title = "Offers | Leeps Supply Company";
  }, []);

  const photo = mediaById("crown");

  return (
    <div className="page-wrap page-pad">
      <div className="offer-layout">
        {photo?.localSrc ? (
          <figure className="offer-photo">
            <img src={photo.localSrc} alt={photo.alt} />
          </figure>
        ) : null}
        <PageMast eyebrow="No prices copied" title="Offers">
          <p>
            Leeps publishes offers at{" "}
            <a href="https://www.leeps.com/offers" target="_blank" rel="noreferrer">
              leeps.com/offers
            </a>
            . This sample does not copy promotion prices or terms. No offer
            price was verified in the supplied discovery.
          </p>
          <p>
            <Link className="btn" to="/catalog">
              View the sample catalog
            </Link>
          </p>
        </PageMast>
      </div>
    </div>
  );
}
