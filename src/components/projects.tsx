import hchat from "@/images/hchat.png";
import soap from "@/images/soap.png";
import gentax from "@/images/gentax.png";
import tailiscope from "@/images/tailiscope.png";
import { StaticImageData } from "next/image";
import ProjectCard from "./projectcard";

export type Project = {
  title: string;
  shortdesc: string;
  img: StaticImageData;
  longdesc: string;
  stack: string[];
};

export const projectList: Project[] = [
  {
    title: "hChat",
    shortdesc:
      "A largescale chat app for CUNY students, encompassing over 80k rooms for each class within the school system.",
    img: hchat,
    longdesc: "",
    stack: ["javascript", "react", "go", "css", "postgresql"],
  },
  {
    title: "SOAP",
    shortdesc:
      "A functional tool for automating the boring task of modifying files for SEO purposes towards the end of a projects development cycle",
    img: soap,
    longdesc: "",
    stack: ["typescript", "react", "electron", "nodejs", "sass"],
  },
  {
    title: "GenTaX",
    shortdesc:
      "A handy tool for comparing different code formatting styles in a markdown block",
    img: gentax,
    longdesc: "",
    stack: ["typescript", "react", "tailwind", "nextjs", "postgresql"],
  },
  {
    title: "Tailiscope",
    shortdesc:
      "A neovim plugin utilizing Telescope.nvim to provide quick access to TailwindCSS properties and documentation",
    img: tailiscope,
    longdesc: "",
    stack: ["lua"],
  },
];

const Projects = () => {
  return (
    <div className="flex flex-wrap justify-center space-evenly">
      {projectList.map((project) => {
        return <ProjectCard project={project} key={project.title} />;
      })}
    </div>
  );
};

export default Projects;
