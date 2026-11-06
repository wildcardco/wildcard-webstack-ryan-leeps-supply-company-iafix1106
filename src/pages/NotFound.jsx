import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  useEffect(() => {
    document.title = "Page not found | Leeps Supply Company";
  }, []);

  return (
    <div className="page-wrap">
      <h1 className="mt-0 text-3xl">Page not found</h1>
      <p>
        That page is not part of this sample catalog.{" "}
        <Link to="/">Return home</Link>
      </p>
    </div>
  );
}
