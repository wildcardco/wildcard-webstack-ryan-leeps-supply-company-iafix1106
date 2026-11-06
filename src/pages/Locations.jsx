import { useEffect } from "react";
import PageMast from "../components/PageMast";
import {
  business,
  counters,
  locationPhotos,
  mediaById,
  showrooms,
} from "../data/catalog";

export default function Locations() {
  useEffect(() => {
    document.title = "Locations | Leeps Supply Company";
  }, []);

  const joel = mediaById("joel");

  return (
    <div className="page-wrap page-pad">
      <PageMast eyebrow="Counters and showrooms" title="Locations">
        <p>
          Towns captured from Leeps. Street addresses were not included in the
          supplied discovery. {business.addressNote}
        </p>
        <p>
          <a href={business.phoneTel}>{business.phone}</a>
          {" · "}
          <a href={business.phoneObservedTel}>{business.phoneObserved}</a>
        </p>
        <p>
          <a href="http://www.leepscounters.com/" target="_blank" rel="noreferrer">
            Leeps Counters
          </a>
          {" · "}
          <a href="http://www.waterplaceshowrooms.com" target="_blank" rel="noreferrer">
            Waterplace Showrooms
          </a>
        </p>
      </PageMast>
      <section className="place-grid">
        <div className="place-card">
          <h2>Counters</h2>
          <ul>
            {counters.map((town) => (
              <li key={town}>{town}</li>
            ))}
          </ul>
        </div>
        <div className="place-card">
          <h2>Showrooms</h2>
          <ul>
            {showrooms.map((town) => (
              <li key={town}>{town}</li>
            ))}
          </ul>
        </div>
      </section>
      <section className="loc-board" aria-label="Homepage location photos">
        {locationPhotos.map((place) => {
          const media = mediaById(place.mediaId);
          if (!media?.localSrc) return null;
          return (
            <article key={place.mediaId} className="loc-card">
              <img src={media.localSrc} alt={media.alt} />
              <h3>
                {place.town} · {place.kind}
              </h3>
              <p>{place.note}</p>
            </article>
          );
        })}
        {joel?.localSrc ? (
          <article className="loc-card">
            <img src={joel.localSrc} alt={joel.alt} />
            <h3>Homepage photo</h3>
            <p>
              File joel.png. A matching branch name was not in the captured
              location list, so it is not assigned to a town.
            </p>
          </article>
        ) : null}
      </section>
    </div>
  );
}
