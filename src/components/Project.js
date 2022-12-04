import React from "react";

export default function Project(props) {
  const { title, url, stack, github, screenshot, children } = props;
  return (
    <div>
      <div className="flex flex-col space-y-5 md:flex-row md:space-y-0 md:space-x-5">
        <div>
          <img
            src={screenshot}
            alt={`Screenshot of ${title}`}
            className="h-40"
          />
        </div>
        <div>
          <div className="flex flex-col font-code text-xl font-bold md:flex-row md:space-x-2">
            <h2>{title}</h2>
            <p className="hidden md:block">{"//"}</p>
            <a
              href={`https://${url}`}
              className="text-bold text-base text-mack-blue underline md:text-xl"
            >
              {url}
            </a>
          </div>
          <div className="mb-3 w-full">{children}</div>
          <p className="mb-3">{stack.join(" · ")}</p>
          <a href={github} className="text-mack-blue underline">
            GitHub repository
          </a>
        </div>
      </div>
    </div>
  );
}
