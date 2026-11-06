import { useEffect } from "react";
import { business, counters, locationPhotos, mediaById, showrooms } from "../data/catalog";

export default function Locations() {
  useEffect(() => {
    document.title = "Locations | Leeps Supply Company";
  }, []);

  const joel = mediaById("joel");

  return (
    <div className="page-wrap grid gap-8">
      <header>
        <h1 className="mb-2 mt-0 text-3xl">Locations</h1>
        <p className="mt-0">
          Counter and showroom towns captured from Leeps. Street addresses
          were not included in the supplied discovery. {business.addressNote}
        </p>
        <p>
          Phone <a href={business.phoneTel}>{business.phone}</a>
          {" · "}
          Also observed:{" "}
          <a href={business.phoneObservedTel}>{business.phoneObserved}</a>
        </p>
        <p className="text-sm">
          <a href="http://www.leepscounters.com/" target="_blank" rel="noreferrer">
            Leeps Counters
          </a>
          {" · "}
          <a
            href="http://www.waterplaceshowrooms.com"
            target="_blank"
            rel="noreferrer"
          >
            Waterplace Showrooms
          </a>
        </p>
      </header>
      <section className="grid gap-4 md:grid-cols-2">
        <div className="surface p-4">
          <h2 className="mt-0 text-xl">Counters</h2>
          <ul>
            {counters.map((town) => (
              <li key={town}>{town}</li>
            ))}
          </ul>
        </div>
        <div className="surface p-4">
          <h2 className="mt-0 text-xl">Showrooms</h2>
          <ul>
            {showrooms.map((town) => (
              <li key={town}>{town}</li>
            ))}
          </ul>
        </div>
      </section>
      <section>
        <h2 className="mt-0 text-2xl">Homepage location photos</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {locationPhotos.map((place) => {
            const media = mediaById(place.mediaId);
            if (!media?.localSrc) return null;
            return (
              <article key={place.mediaId} className="surface p-3">
                <img src={media.localSrc} alt={media.alt} className="w-full" />
                <h3 className="mb-1 mt-3 text-lg">
                  {place.town} · {place.kind}
                </h3>
                <p className="mb-0 mt-0 text-sm text-muted">{place.note}</p>
              </article>
            );
          })}
          {joel?.localSrc ? (
            <article className="surface p-3">
              <img src={joel.localSrc} alt={joel.alt} className="w-full" />
              <h3 className="mb-1 mt-3 text-lg">Homepage photo</h3>
              <p className="mb-0 mt-0 text-sm text-muted">
                File joel.png. A matching branch name was not in the captured
                location list, so it is not assigned to a town.
              </p>
            </article>
          ) : null}
        </div>
      </section>
    </div>
  );
}
