import React, { useState } from "react";
import logo from "../assets/mackpc.jpg";
import { Link } from "react-router-dom";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const pages = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Experience",
      link: "experience",
    },
    {
      title: "Projects",
      link: "projects",
    },
  ];

  return (
    <header>
      <nav className="grid min-h-[75px] place-items-center bg-mack-purple">
        <div className="w-full self-center px-10 text-mack-white lg:w-2/3 lg:px-0 3xl:w-1/3">
          <div className="flex items-center">
            <Link to="/" className="mr-10">
              <img
                src={logo}
                alt="Mack's logo, a pixel-art style drawing of an old PC"
                className="w-[50px]"
              />
            </Link>
            <div className="hidden space-x-5 md:flex">
              {pages.map(({ link, title }) => {
                return (
                  <Link to={link} className="font-code" key={title}>
                    {title}
                  </Link>
                );
              })}
            </div>
            <a
              href="/MackStanleyResume.pdf"
              className="ml-auto hidden space-x-2 md:flex"
              target="_blank"
              rel="noopener"
            >
              <ArrowDownTrayIcon className="h-[24px] stroke-2" />
              <div className="font-code">Download my résumé (PDF)</div>
            </a>
            <Bars3Icon
              className="ml-auto h-[44px] stroke-2 md:hidden"
              onClick={() => setShowMenu(!showMenu)}
            />
          </div>
          {/* mobile nav menu */}
          <div
            className={`mt-5 flex flex-col space-y-5 pb-5 md:hidden ${
              !showMenu ? "hidden" : ""
            }`}
          >
            {pages.map(({ link, title }) => {
              return (
                <Link to={link} className="font-code" key={title}>
                  {title}
                </Link>
              );
            })}
            <a
              href="/MackStanleyResume.pdf"
              className="flex space-x-2"
              target="_blank"
              rel="noopener"
            >
              <ArrowDownTrayIcon className="h-[24px] stroke-2" />
              <div className="font-code">Download my résumé (PDF)</div>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
