import Swoosh from "./Swoosh";

export default function PageMast({ eyebrow, title, children, aside = null }) {
  return (
    <header className={`page-mast ${aside ? "page-mast-split" : ""}`}>
      <div className="page-mast-card" data-reveal>
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h1>{title}</h1>
        <Swoosh />
        <div className="page-mast-copy">{children}</div>
      </div>
      {aside}
    </header>
  );
}
