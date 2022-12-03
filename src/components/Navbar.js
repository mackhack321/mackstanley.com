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
      <div className="w-full self-center px-10 lg:w-2/3 lg:px-0 3xl:w-1/3 text-mack-white">
        <div className="flex items-center">
          <Link to="/" className="mr-10">
            <img
              src={logo}
              alt="Mack's logo, a pixel-art style drawing of an old PC"
              className="w-[50px]"
            />
          </Link>
          <div className="flex space-x-5">
            {pages.map((page) => {
              return <div className="font-code">{page.title}</div>;
            })}
          </div>
          <div className="flex space-x-2 ml-auto">
            <ArrowDownTrayIcon className="stroke-2 h-[24px]" />
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
