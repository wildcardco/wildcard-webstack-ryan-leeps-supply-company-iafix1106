import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { business, counters, showrooms } from "../data/catalog";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.title = "Contact | Leeps Supply Company";
  }, []);

  return (
    <div className="page-wrap grid max-w-3xl gap-6">
      <header>
        <h1 className="mb-2 mt-0 text-3xl">Contact</h1>
        <p className="mt-0">
          Reach Leeps Supply by phone. This page does not send messages.
        </p>
      </header>
      <section className="surface p-4">
        <h2 className="mb-2 mt-0 text-xl">Phone</h2>
        <p className="m-0">
          <a href={business.phoneTel}>{business.phone}</a>
        </p>
        <p className="mb-0 mt-2 text-sm">
          Also observed:{" "}
          <a href={business.phoneObservedTel}>{business.phoneObserved}</a>
        </p>
      </section>
      <section className="surface p-4">
        <h2 className="mb-2 mt-0 text-xl">Place</h2>
        <p className="m-0">
          {business.town}, {business.region}
        </p>
        <p className="mb-0 mt-2 text-sm text-muted">{business.addressNote}</p>
        <p className="mb-1 mt-4 text-sm font-semibold">Counters</p>
        <p className="m-0 text-sm">{counters.join(", ")}</p>
        <p className="mb-1 mt-3 text-sm font-semibold">Showrooms</p>
        <p className="m-0 text-sm">{showrooms.join(", ")}</p>
        <p className="mb-0 mt-3 text-sm">
          <Link to="/locations">Location overview</Link>
        </p>
      </section>
      <section className="surface p-4">
        <h2 className="mb-2 mt-0 text-xl">Static demo form</h2>
        <p className="mt-0 text-sm">
          The form stays in this browser. It has no backend, and it does not
          store or transmit what you type.
        </p>
        <form
          data-testid="contact-form"
          onSubmit={(event) => {
            event.preventDefault();
            setSubmitted(true);
            event.currentTarget.reset();
          }}
        >
          <label className="grid gap-1 text-sm" htmlFor="demo-note">
            Note
            <textarea
              id="demo-note"
              className="min-h-28 border border-line bg-surface p-2"
              name="note"
            />
          </label>
          <button className="btn mt-3" type="submit">
            Preview demo response
          </button>
        </form>
        {submitted ? (
          <p role="status" data-testid="contact-result">
            Nothing was sent. This form is a static mock and has no backend.
          </p>
        ) : null}
      </section>
      <p className="text-sm">
        Contact page on the live site:{" "}
        <a href="https://www.leeps.com/contactus" target="_blank" rel="noreferrer">
          leeps.com/contactus
        </a>
      </p>
    </div>
  );
}
