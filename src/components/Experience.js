import React from "react";

export default function Experience(props) {
  const {
    company,
    position,
    startDate,
    endDate,
    logo,
    children,
    logoNeedsWhiteBg,
  } = props;
  return (
    <div>
      <div className="flex flex-col space-y-5 md:flex-row md:space-y-0 md:space-x-5">
        <div>
          <img
            src={logo}
            alt={`Logo of ${company}`}
            className={`w-56 ${logoNeedsWhiteBg ? "bg-mack-white" : ""}`}
          />
        </div>
        <div className="flex flex-col space-y-3 md:w-2/3">
          <div className="flex flex-col space-y-2 font-code text-xl font-bold md:flex-row md:justify-between md:space-y-0">
            <div className="flex flex-col space-y-2 md:space-y-0">
              <h2>{company}</h2>
              <span className="text-lg">{position}</span>
            </div>
            <span className="text-lg">
              {startDate} &mdash; {endDate}
            </span>
          </div>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
}
