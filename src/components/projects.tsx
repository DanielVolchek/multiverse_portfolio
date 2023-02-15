import hchat from "@/images/hChat.png";
import soap from "@/images/soap.png";
import gentax from "@/images/gentax.png";
import tailiscope from "@/images/tailiscope.png";
import { StaticImageData } from "next/image";
import ProjectCard from "./projectcard";

export type ProjectType = {
  title: string;
  shortdesc: string;
  img: StaticImageData;
  longdesc: string;
  stack: string[];
  link: string;
};

export const projectList: ProjectType[] = [
  {
    title: "hChat",
    shortdesc:
      "A largescale chat app for CUNY students, encompassing over 80k rooms for each class within the school system.",
    img: hchat,
    longdesc: "",
    stack: ["javascript", "react", "go", "css", "postgresql"],
    link: "https://github.com/danielvolchek/hchat",
  },
  {
    title: "SOAP",
    shortdesc:
      "A functional tool for automating the boring task of modifying files for SEO purposes towards the end of a projects development cycle",
    img: soap,
    longdesc: "",
    stack: ["typescript", "react", "electron", "nodejs", "sass"],
    link: "#",
  },
  {
    title: "GenTaX",
    shortdesc:
      "A handy tool for comparing different code formatting styles in a markdown block",
    img: gentax,
    longdesc: "",
    stack: ["typescript", "react", "tailwind", "nextjs", "postgresql"],
    link: "https://github.com/danielvolchek/gentax",
  },
  {
    title: "Tailiscope",
    shortdesc:
      "A neovim plugin utilizing Telescope.nvim to provide quick access to TailwindCSS properties and documentation",
    img: tailiscope,
    longdesc: "",
    stack: ["lua"],
    link: "https://github.com/danielvolchek/tailiscope.nvim",
  },
];

const Projects = () => {
  return (
    <div className="flex flex-col lg:flex-row flex-wrap justify-center space-evenly">
      {projectList.map((project) => {
        return <ProjectCard project={project} key={project.title} />;
      })}
    </div>
  );
};

export default Projects;
