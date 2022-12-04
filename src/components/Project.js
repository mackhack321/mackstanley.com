import React from "react";

export default function Project(props) {
  const { title, url, stack, github, screenshot, children } = props;
  return (
    <div>
      <div className="flex flex-col space-y-5 md:flex-row md:space-y-0 md:space-x-5">
        <div>
          <a href={screenshot}>
            <img
              src={screenshot}
              alt={`Screenshot of ${title}`}
              className="h-40"
            />
          </a>
        </div>
        <div className="flex flex-col space-y-3 md:w-2/3">
          <div className="flex flex-col font-code text-xl font-bold md:flex-row md:space-x-2">
            <h2>{title}</h2>
            <span className="hidden md:block">{"//"}</span>
            <a
              href={`https://${url}`}
              className="text-bold text-base text-mack-blue underline md:text-xl"
            >
              {url}
            </a>
          </div>
          <div>{children}</div>
          <p className="font-code">{stack.join(" · ")}</p>
          <a href={github} className="text-mack-blue underline">
            GitHub repository
          </a>
        </div>
      </div>
    </div>
  );
}
