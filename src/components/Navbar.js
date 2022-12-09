import React, { useState } from "react";
import logo from "../assets/mackpc.png";
import resume from "../files/MackStanleyResume.pdf";
import { Link } from "react-router-dom";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import { pages } from "../data";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header>
      <nav className="mb-5 grid place-items-center bg-mack-purple py-2">
        <div className="w-full px-10 xl:w-2/3 xl:px-0 3xl:w-1/3">
          <div className="flex items-center">
            <Link to="/" className="mr-10">
              <img
                src={logo}
                alt="Mack's logo, a pixel-art style drawing of an old PC"
                title="mackstanley.com"
              />
            </Link>
            <div className="hidden space-x-10 md:flex">
              {pages.map(({ link, title }) => {
                return (
                  <Link to={link} className="font-code" key={title}>
                    {title}
                  </Link>
                );
              })}
            </div>
            <a
              href={resume}
              className="ml-auto hidden space-x-2 md:flex"
              target="_blank"
              rel="noreferrer"
            >
              <ArrowDownTrayIcon className="h-[24px] stroke-2" />
              <p className="font-code">Download my résumé (PDF)</p>
            </a>
            <Bars3Icon
              className="ml-auto h-[44px] cursor-pointer stroke-2 md:hidden"
              onClick={() => setShowMenu(!showMenu)}
            />
          </div>
          {/* mobile nav menu */}
          <div
            className={`mt-5 flex flex-col space-y-5 pb-5 ${
              !showMenu ? "hidden" : "md:hidden"
            }`}
          >
            {pages.map(({ link, title }) => {
              return (
                <Link
                  to={link}
                  className="font-code"
                  key={title}
                  onClick={() => setShowMenu(false)}
                >
                  {title}
                </Link>
              );
            })}
            <a
              href={resume}
              className="flex space-x-2"
              target="_blank"
              rel="noreferrer"
              onClick={() => setShowMenu(false)}
            >
              <ArrowDownTrayIcon className="h-[24px] stroke-2" />
              <p className="font-code">Download my résumé (PDF)</p>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
