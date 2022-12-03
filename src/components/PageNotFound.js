import React from "react";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div className="grid place-items-center">
      <div className="font-code text-mack-white text-3xl md:text-4xl font-bold py-5">
        404 Page Not Found
      </div>
      <Link to="/" className="text-mack-white underline">
        Go home
      </Link>
    </div>
  );
}
