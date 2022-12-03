import React from "react";
import Navbar from "./Navbar";

export default function Container({ children }) {
  return (
    <div>
      <Navbar />
      <main className="grid place-items-center">
        <div className="w-full px-10 lg:w-2/3 lg:px-0 3xl:w-1/3">
          {children}
        </div>
      </main>
    </div>
  );
}
