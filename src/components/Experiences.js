import React from "react";
import Experience from "./Experience";
import msu from "../assets/companylogos/msu.png";
import optum from "../assets/companylogos/optum.png";
import optumreview from "../files/OptumEval.pdf";
import vitality from "../assets/companylogos/vitality.png";
import geodis from "../assets/companylogos/geodis.png";
import kroger from "../assets/companylogos/kroger.png";
import hsof from "../assets/companylogos/hsof.png";
import ellucian from "../assets/companylogos/ellucian.png";

export default function Experiences() {
  return (
    <div>
      <h1 className="pb-5 text-center font-code text-3xl font-bold md:text-4xl">
        My Work Experience
      </h1>
      <div className="flex flex-col space-y-10">
        <Experience
          company="Ellucian"
          position="Software Engineering Intern"
          logo={ellucian}
          startDate="May 2023"
          endDate="August 2023"
        >
          <ul className="list-inside list-disc">
            <li>
              Utilize 10+ AWS services to orchestrate the ingestion and
              transformation of terabytes of data.
            </li>
            <li>
              Maintain and improve data lake services providing data analytics
              to 45+ universities.
            </li>
            <li>
              Create automated monitoring pipelines with Jenkins for 65+
              production tenants.
            </li>
            <li>
              Improve unit testing in JavaScript with Jest and C# with xUnit and
              Moq.
            </li>
          </ul>
        </Experience>
        <Experience
          company="Mississippi State University Libraries"
          position="Web Development Student Assistant"
          logo={msu}
          startDate="August 2021"
          endDate="Present"
        >
          <ul className="list-inside list-disc">
            <li>
              Develop React web apps for both the library and the university.
            </li>
            <li>Address user requests using LibAnswers ticketing system.</li>
            <li>Create automation scripts.</li>
            <li>Maintain university webpages with Drupal.</li>
          </ul>
        </Experience>
        <Experience
          company="Optum"
          position="Backend Software Engineering Intern"
          logo={optum}
          startDate="June 2022"
          endDate="August 2022"
        >
          <ul className="mb-3 list-inside list-disc">
            <li>
              Improve an application facing over 5,000 providers worldwide.
            </li>
            <li>Utilize agile development practices.</li>
            <li>Lead a team as scrum master during standups and sprints.</li>
            <li>Organize development with a Kanban board.</li>
            <li>
              Communicate with business owners on product requirements and
              issues.
            </li>
            <li>
              Participate in a hackathon with around 500 teams companywide.
            </li>
          </ul>
          <a href={optumreview} className="text-mack-blue underline">
            Read the review written for me by my supervisor (PDF)
          </a>
        </Experience>
        <Experience
          company="Traditions of Spring Hill"
          position="Kitchen Assistant and Cook"
          logo={vitality}
          startDate="June 2021"
          endDate="August 2021"
        >
          <p>
            This was a small character-building sidequest unrelated to software
            engineering. One of the assisted living communities managed by the
            companies one my family members works for was in need of kitchen
            helpers and I answered the call of duty. I served food and drinks to
            residents during lunch and dinner and prepared the occasional
            grilled cheese sandwich. It was fun.
          </p>
        </Experience>
        <Experience
          company="GEODIS Logistics"
          position="Information Technology Support Desk Extern"
          logo={geodis}
          startDate="June 2018"
          endDate="June 2018"
          logoNeedsWhiteBg
        >
          <p className="mb-3">This was a two-week externship.</p>
          <ul className="list-inside list-disc">
            <li>
              Develop React web apps for both the library and the university.
            </li>
            <li>Address user requests using LibAnswers ticketing system.</li>
            <li>Create automation scripts.</li>
            <li>Maintain university webpages with Drupal.</li>
          </ul>
        </Experience>
        <Experience
          company="The Kroger Company"
          position="Cashier and Courtesy Clerk"
          logo={kroger}
          startDate="May 2017"
          endDate="April 2018"
          logoNeedsWhiteBg
        >
          <p>
            This was my first "official" job. I was started as a bagger and was
            promoted to cashier not long after. My other duties included
            bringing in carts from outside, building positive relationships with
            customers, and maintaining store cleanliness.
          </p>
        </Experience>
        <Experience
          company="Hearing Services of Franklin"
          position="Data Migration Intern"
          logo={hsof}
          startDate="June 2015"
          endDate="August 2015"
          logoNeedsWhiteBg
        >
          <p>
            I was brought on to migrate paper patient records to the new digital
            patient record software.
          </p>
        </Experience>
      </div>
    </div>
  );
}
