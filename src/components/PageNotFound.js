import React from "react";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div>
      <h1 className="pb-5 text-center font-code text-3xl font-bold text-mack-white md:text-4xl">
        404
        <br />
        Page Not Found
      </h1>
      <Link to="/" className="flex justify-center text-mack-white underline">
        Go home
      </Link>
    </div>
  );
}
