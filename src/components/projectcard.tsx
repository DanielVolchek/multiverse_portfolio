import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import type { Project } from "./projects";

type Prop = {
  project: Project;
};

const ProjectCard = ({ project }: Prop) => {
  const { title, shortdesc, img, longdesc, stack } = project;

  return (
    <div className="">
      <Link href={`/projects/${title}`}>
        <Image src={img} alt={title} />
      </Link>
    </div>
  );
};

export default ProjectCard;
