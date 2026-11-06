import { Link } from "react-router-dom";
import { business, counters, footerGroups, showrooms } from "../data/catalog";

function FooterAnchor({ link }) {
  const className = "text-ink underline-offset-2 hover:underline";
  if (link.href) {
    return (
      <a className={className} href={link.href} target="_blank" rel="noreferrer">
        {link.label}
      </a>
    );
  }
  return (
    <Link className={className} to={link.to}>
      {link.label}
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-line bg-surface">
      <div className="page-wrap grid gap-8 py-8 sm:grid-cols-2 lg:grid-cols-3">
        <section>
          <h2 className="mb-2 mt-0 text-base">{business.name}</h2>
          <p className="m-0 text-sm">
            {business.town}, {business.region}
          </p>
          <p className="mb-3 mt-1 text-sm text-muted">{business.addressNote}</p>
          <p className="m-0 text-sm">
            <a href={business.phoneTel}>{business.phone}</a>
          </p>
          <p className="mb-3 mt-1 text-sm">
            Also observed:{" "}
            <a href={business.phoneObservedTel}>{business.phoneObserved}</a>
          </p>
          <p className="m-0 text-sm">
            <a href={business.website} target="_blank" rel="noreferrer">
              leeps.com
            </a>
          </p>
          <p className="mb-1 mt-4 text-sm font-semibold">Counter towns</p>
          <p className="m-0 text-sm text-muted">{counters.join(", ")}</p>
          <p className="mb-1 mt-3 text-sm font-semibold">Showroom towns</p>
          <p className="m-0 text-sm text-muted">{showrooms.join(", ")}</p>
        </section>
        {footerGroups.map((group) => (
          <section key={group.title}>
            <h2 className="mb-2 mt-0 text-base">{group.title}</h2>
            {group.note ? (
              <p className="mb-2 mt-0 text-sm text-muted">{group.note}</p>
            ) : null}
            <ul className="m-0 list-none space-y-2 p-0 text-sm">
              {group.links.map((link) => (
                <li key={link.label}>
                  <FooterAnchor link={link} />
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
      <div className="border-t border-line">
        <p className="page-wrap py-4 text-sm text-muted">
          Sample catalog demo. Product facts come from the supplied Leeps pages.
          This site does not place orders or take payment.
        </p>
      </div>
    </footer>
  );
}
