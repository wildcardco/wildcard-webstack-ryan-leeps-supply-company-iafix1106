import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Offers() {
  useEffect(() => {
    document.title = "Offers | Leeps Supply Company";
  }, []);

  return (
    <div className="page-wrap grid max-w-3xl gap-4">
      <h1 className="mb-0 mt-0 text-3xl">Offers</h1>
      <p className="mt-0">
        Leeps publishes offers at{" "}
        <a href="https://www.leeps.com/offers" target="_blank" rel="noreferrer">
          leeps.com/offers
        </a>
        . This sample does not copy promotion prices or terms. No offer price
        was verified in the supplied discovery.
      </p>
      <p>
        <Link to="/catalog">View the sample catalog</Link>
      </p>
    </div>
  );
}
