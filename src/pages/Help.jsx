import { useEffect } from "react";
import { Link } from "react-router-dom";
import { business, helpLinks } from "../data/catalog";

export default function Help() {
  useEffect(() => {
    document.title = "Help | Leeps Supply Company";
  }, []);

  return (
    <div className="page-wrap grid max-w-3xl gap-4">
      <h1 className="mb-0 mt-0 text-3xl">Help</h1>
      <p className="mt-0">
        Help documents published by Leeps, plus the phone numbers observed for
        this demo. Quote requests for unverified prices go to the phone line.
      </p>
      <p>
        <a href={business.phoneTel}>{business.phone}</a>
        {" · "}
        <a href={business.phoneObservedTel}>{business.phoneObserved}</a>
      </p>
      <ul>
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
