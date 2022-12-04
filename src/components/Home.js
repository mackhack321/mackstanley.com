import React from "react";
import { skills, favorites } from "../data";
import resume from "../files/MackStanleyResume.pdf";
import { Link } from "react-router-dom";
import me from "../assets/me.jpg";

export default function Home() {
  return (
    <div>
      <h1 className="pb-5 text-center font-code text-3xl font-bold md:text-4xl">
        Welcome to Mack's Webpage
      </h1>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-0">
        <div className="flex flex-col space-y-5">
          <div>
            <img
              src={me}
              alt="A very handsome portrait of Mack"
              className="mx-auto w-1/3 md:mx-0"
              title="It's me, Mack Stanley"
            />
          </div>
          <div>
            <h2 className="pb-3 font-code text-xl font-bold">About Me</h2>
            <p className="lg:w-2/3">
              My name is Mack and I enjoy web development, writing software,
              tinkering with computers, playing video games, and eating good
              food. I am current studying Computer Science at Mississippi State
              University and am excited to start my career as a software
              engineer.
            </p>
          </div>
        </div>
        <div className="flex flex-col space-y-5">
          <div>
            <h2 className="pb-3 font-code text-xl font-bold">My Favorites</h2>
            <table className="border-separate border-spacing-2">
              <tbody>
                {favorites.map(({ category, items }) => {
                  return (
                    <tr key={category}>
                      <td className="pr-5 font-code font-bold">{category}</td>
                      <td>{items.join(", ")}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div>
            <h2 className="pb-3 font-code text-xl font-bold">My Skills</h2>
            <p>{skills.join(" · ")}</p>
          </div>
          <div>
            <h2 className="pb-3 font-code text-xl font-bold">Things to See</h2>
            <div className="flex flex-col space-y-2">
              <Link to="projects" className="w-fit text-mack-blue underline">
                My Projects
              </Link>
              <Link to="experience" className="w-fit text-mack-blue underline">
                My Work Experience
              </Link>
              <a
                href={resume}
                className="w-fit text-mack-blue underline"
                target="_blank"
                rel="noreferrer"
              >
                My Résumé
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
