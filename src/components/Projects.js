import React from "react";
import Project from "./Project";
import flexibleworker from "../assets/screenshots/flexibleworker.jpg";
import dndj from "../assets/screenshots/dndj.jpg";
import personalwebsite from "../assets/screenshots/personalwebsite.jpg";
import csv2doi from "../assets/screenshots/csv2doi.png";
import { githubURL } from "../constants";

export default function Projects() {
  return (
    <div>
      <h1 className="pb-5 text-center font-code text-3xl font-bold md:text-4xl">
        My Projects
      </h1>
      <div className="flex flex-col space-y-10">
        <Project
          title="FedEx Flexible Worker"
          url="fedex.mackstanley.com"
          stack={["React", "Tailwind CSS"]}
          github="https://github.com/mackhack321/fedex-flexible-worker"
          screenshot={flexibleworker}
        >
          <p>
            FedEx Flexible Worker aims to assist FedEx HR in posting flex work
            opportunities and sourcing qualified workers. Managers can post,
            edit, and delete opportunities. Employees can claim opportunities
            and opt-in to SMS or email report-to-work reminders. This was a
            group project assigned to me by FedEx for CSE 4663 Human Computer
            Interaction during the Fall 2022 semester. Note that database
            operations (add, edit, delete) do not function because this project
            was only for the frontend. The data shown is mock data.
          </p>
        </Project>
        <Project
          title="DNDJ"
          url="dndj.mackstanley.com"
          stack={["React", "Tailwind CSS"]}
          github="https://github.com/mackhack321/dndj"
          screenshot={dndj}
        >
          <p>
            I play Dungeons and Dragons (DnD), and I am often the one in charge
            of managing the background music. I am the Dn-DJ, if you will. I
            built this to help manage my favorite tracks and give me quick
            access to their links that I can input into whatever Discord music
            bot we're using. You can add and delete tracks, and tracks can be
            filtered by their category (i.e. battle, travel, etc.). Tracks are
            stored in local storage.
          </p>
        </Project>
        <Project
          title="CSV2DOI"
          url="csv2doi.mackstanley.com"
          stack={["React", "Tailwind CSS", "Flask"]}
          github="https://github.com/mackhack321/csv2doi"
          screenshot={csv2doi}
        >
          <p>
            CSV2DOI is a part of my work as a web development student assitant
            for Mississippi State University Libraries. CSV2DOI is a tool that
            was used by the Office of Thesis and Dissertation Format Review for
            batch-registering DOIs (Digital Object Identifier) for graduate and
            honors theses and dissertations. Bulk DOI information was uploaded
            into CSV2DOI in a CSV file, and the file was passed to the Flask
            backend which parsed the CSV file and generated an XML file that met
            the formatting requirements of Crossref, a DOI registration agency.
            This XML file could then be uploaded ito Crossref's web portal and
            the new DOIs would be created. The project has since been sunset,
            but I have preserved it for demonstration purposes.
          </p>
        </Project>
        <Project
          title="My website"
          url="mackstanley.com"
          stack={["React", "Tailwind CSS"]}
          github="https://github.com/mackhack321/mackstanley.com"
          screenshot={personalwebsite}
        >
          <p>
            I wanted a corner of the Internet all to myself that I could use to
            attract potential employers and do whatever else I wanted. There is
            no telling what else I will do with this domain in the future but
            whatever it is will probably be cool.
          </p>
        </Project>
        <a href={githubURL} className="text-mack-blue underline">
          ...and more on my GitHub profile!
        </a>
      </div>
    </div>
  );
}
