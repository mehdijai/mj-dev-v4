import Image from "next/image";
import Link from "next/link";
import "./style.scss";
import TagPill from "../TagPill";

export default function ProjectCard({ project }: { project: IProject }) {
  return (
    <Link className="project-card" href={"/projects/" + project.slug}>
      <Image
        width={100}
        height={100}
        src={project.thumbnail}
        alt={project.title}
      />
      <div className="project-info">
        <span className="title">{project.title}</span>
        <div className="tags-list">
          {project.tags.map((tag) => (
            <TagPill tag={tag} key={tag.id} />
          ))}
        </div>
      </div>
    </Link>
  );
}
