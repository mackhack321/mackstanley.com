import React from "react";
import logo from "../assets/mackpc.jpg";
import { Link } from "react-router-dom";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
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
    <nav className="grid h-[75px] place-items-center bg-mack-purple">
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
            {pages.map((page) => {
              return (
                <Link to={page.link} className="font-code" key={page.title}>
                  {page.title}
                </Link>
              );
            })}
          </div>
          <div className="ml-auto hidden space-x-2 md:flex">
            <ArrowDownTrayIcon className="h-[24px] stroke-2" />
            <a
              href="/MackStanleyResume.pdf"
              target="_blank"
              rel="noopener"
              className="font-code"
            >
              Download my resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
