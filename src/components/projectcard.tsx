import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import type { Project } from "./projects";

type Prop = {
  project: Project;
};

const ProjectCard = ({ project }: Prop) => {
  const { title, shortdesc, img, longdesc, stack } = project;

  return (
    <div className="w-1/2 px-4 items-center mb-3 ">
      <h3 className="text-center text-4xl pb-1">{title}</h3>
      <Link href={`/projects/${title}`}>
        <Image
          src={img}
          alt={title}
          className="border-[3px] border-thulianpink rounded-lg"
        />
      </Link>
      <span className="text-2xl text-center text-charcoal">{shortdesc}</span>
    </div>
  );
};

export default ProjectCard;
