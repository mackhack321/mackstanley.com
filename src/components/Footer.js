import React from "react";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import linkedinLogo from "../assets/linkedin.png";
import githubLogo from "../assets/github.png";
import { linkedinURL, githubURL, emailURL } from "../constants";

export default function Footer() {
  return (
    <footer className="mt-10 flex justify-center space-x-3 text-center font-code font-bold text-mack-white">
      <div>Get in Touch</div>
      <div>{"//"}</div>
      <div className="flex justify-center space-x-5">
        <a href={emailURL}>
          <EnvelopeIcon className="h-[24px] stroke-2" />
        </a>
        <a href={linkedinURL}>
          <img src={linkedinLogo} alt="LinkedIn" className="h-[24px]" />
        </a>
        <a href={githubURL}>
          <img src={githubLogo} alt="GitHub" className="h-[24px] invert" />
        </a>
      </div>
    </footer>
  );
}
