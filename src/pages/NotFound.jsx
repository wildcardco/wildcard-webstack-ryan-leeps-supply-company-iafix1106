import { useEffect } from "react";
import { Link } from "react-router-dom";
import PageMast from "../components/PageMast";

export default function NotFound() {
  useEffect(() => {
    document.title = "Page not found | Leeps Supply Company";
  }, []);

  return (
    <div className="page-wrap page-pad">
      <PageMast eyebrow="Sample catalog" title="Page not found">
        <p>That page is not part of this sample catalog.</p>
        <p>
          <Link className="btn" to="/">
            Return home
          </Link>
        </p>
      </PageMast>
    </div>
  );
}
