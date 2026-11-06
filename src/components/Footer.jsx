import { Link } from "react-router-dom";
import { business, counters, footerGroups, logo, showrooms } from "../data/catalog";
import Swoosh from "./Swoosh";

function FooterAnchor({ link }) {
  if (link.href) {
    return (
      <a href={link.href} target="_blank" rel="noreferrer">
        {link.label}
      </a>
    );
  }
  return <Link to={link.to}>{link.label}</Link>;
}

export default function Footer() {
  const groups = footerGroups.filter((group) => group.title !== "Account on leeps.com");
  const account = footerGroups.find((group) => group.title === "Account on leeps.com");

  return (
    <footer className="site-footer">
      <div className="page-wrap footer-brand" data-reveal>
        <Link to="/" className="logo-link">
          <img src={logo.src} alt="" />
        </Link>
        <div>
          <Swoosh />
          <p>
            {business.name}. {business.town}, {business.region}. {business.addressNote}
          </p>
          <p>
            <a href={business.phoneTel}>{business.phone}</a>
            {" · "}
            <a href={business.phoneObservedTel}>{business.phoneObserved}</a>
            {" · "}
            <a href={business.website} target="_blank" rel="noreferrer">
              leeps.com
            </a>
          </p>
          <p>Counters: {counters.join(", ")}</p>
          <p>Showrooms: {showrooms.join(", ")}</p>
        </div>
      </div>
      <div className="page-wrap footer-groups">
        {groups.map((group) => (
          <section key={group.title}>
            <h2>{group.title}</h2>
            {group.note ? <p>{group.note}</p> : null}
            <ul>
              {group.links.map((link) => (
                <li key={link.label}>
                  <FooterAnchor link={link} />
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
      {account ? (
        <div className="page-wrap footer-account">
          <h2>{account.title}</h2>
          {account.note ? <p>{account.note}</p> : null}
          <ul>
            {account.links.map((link) => (
              <li key={link.label}>
                <FooterAnchor link={link} />
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      <p className="footer-fine">
        Sample catalog demo. Product facts come from the supplied Leeps pages.
        This site does not place orders or take payment.
      </p>
    </footer>
  );
}
