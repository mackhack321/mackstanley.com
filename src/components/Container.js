import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Container({ children }) {
  return (
    <div>
      <Navbar />
      <main className="grid place-items-center">
        <div className="w-full px-10 2xl:w-2/3 2xl:px-0 3xl:w-1/3">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}
