import React from "react";
import Project from "./Project";
import flexibleworker from "../assets/screenshots/flexibleworker.jpg";

export default function Projects() {
  return (
    <div>
      <h1 className="pb-5 text-center font-code text-3xl font-bold md:text-4xl">
        My Projects
      </h1>
      <div className="flex flex-col items-center">
        <Project
          title="FedEx Flexible Worker"
          url="fedex.mackstanley.com"
          stack={["React", "Tailwind CSS"]}
          github="https://github.com/mackhack321/fedex-flexible-worker"
          screenshot={flexibleworker}
        >
          <p>This is the project description of FedEx Flexible Worker</p>
        </Project>
      </div>
    </div>
  );
}
