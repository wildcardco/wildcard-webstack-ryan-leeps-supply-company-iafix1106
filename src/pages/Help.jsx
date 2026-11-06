import { useEffect } from "react";
import { Link } from "react-router-dom";
import PageMast from "../components/PageMast";
import { business, helpLinks } from "../data/catalog";

export default function Help() {
  useEffect(() => {
    document.title = "Help | Leeps Supply Company";
  }, []);

  return (
    <div className="page-wrap page-pad">
      <PageMast eyebrow="Documents and phone" title="Help">
        <p>
          Help documents published by Leeps, plus the phone numbers observed
          for this demo. Quote requests for unverified prices go to the phone
          line.
        </p>
        <p>
          <a href={business.phoneTel}>{business.phone}</a>
          {" · "}
          <a href={business.phoneObservedTel}>{business.phoneObserved}</a>
        </p>
      </PageMast>
      <ul className="doc-list">
        {helpLinks.map((link) => (
          <li key={link.label}>
            {link.href ? (
              <a href={link.href} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            ) : (
              <Link to={link.to}>{link.label}</Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
