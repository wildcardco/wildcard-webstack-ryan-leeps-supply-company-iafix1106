import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PageMast from "../components/PageMast";
import { business, counters, mediaById, showrooms } from "../data/catalog";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const photo = mediaById("account-left");

  useEffect(() => {
    document.title = "Contact | Leeps Supply Company";
  }, []);

  return (
    <div className="page-wrap page-pad">
      <PageMast
        eyebrow="Phone, not a form backend"
        title="Contact"
        aside={
          photo?.localSrc ? (
            <figure className="mast-photo">
              <img src={photo.localSrc} alt={photo.alt} />
            </figure>
          ) : null
        }
      >
        <p>Reach Leeps Supply by phone. This page does not send messages.</p>
      </PageMast>
      <div className="contact-grid">
        <section className="panel">
          <h2>Phone</h2>
          <p>
            <a className="text-link" href={business.phoneTel}>
              {business.phone}
            </a>
          </p>
          <p>
            Also observed:{" "}
            <a className="text-link" href={business.phoneObservedTel}>
              {business.phoneObserved}
            </a>
          </p>
          <h2>Place</h2>
          <p>
            {business.town}, {business.region}
          </p>
          <p className="product-brand">{business.addressNote}</p>
          <p>
            <strong>Counters. </strong>
            {counters.join(", ")}
          </p>
          <p>
            <strong>Showrooms. </strong>
            {showrooms.join(", ")}
          </p>
          <p>
            <Link className="text-link" to="/locations">
              Location overview
            </Link>
          </p>
          <p>
            Contact page on the live site:{" "}
            <a href="https://www.leeps.com/contactus" target="_blank" rel="noreferrer">
              leeps.com/contactus
            </a>
          </p>
        </section>
        <section className="panel">
          <h2>Static demo form</h2>
          <p>
            The form stays in this browser. It has no backend, and it does not
            store or transmit what you type.
          </p>
          <form
            className="contact-form"
            data-testid="contact-form"
            onSubmit={(event) => {
              event.preventDefault();
              setSubmitted(true);
              event.currentTarget.reset();
            }}
          >
            <label htmlFor="demo-note">
              Note
              <textarea id="demo-note" name="note" />
            </label>
            <button className="btn" type="submit">
              Preview demo response
            </button>
          </form>
          {submitted ? (
            <p role="status" data-testid="contact-result">
              Nothing was sent. This form is a static mock and has no backend.
            </p>
          ) : null}
        </section>
      </div>
    </div>
  );
}
