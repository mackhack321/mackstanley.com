import React from "react";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div className="grid place-items-center">
      <div className="py-5 font-code text-3xl font-bold text-mack-white md:text-4xl">
        404 Page Not Found
      </div>
      <Link to="/" className="text-mack-white underline">
        Go home
      </Link>
    </div>
  );
}
