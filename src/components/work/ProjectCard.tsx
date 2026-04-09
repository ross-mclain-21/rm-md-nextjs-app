import { Link } from "react-router-dom";
import { ArrowUpRight, Github } from "lucide-react";
import type { CaseStudy } from "@/lib/types";

interface ProjectCardProps {
  project: CaseStudy;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <article className="project-card">
      <Link className="project-card-image-wrap" to={`/work/${project.slug}`}>
        <img
          src={project.heroImage}
          alt={`${project.title} hero`}
          className="project-card-image"
          loading="lazy"
        />
      </Link>
      <div className="project-card-content">
        <p className="project-year">{project.year}</p>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-summary">{project.summary}</p>
        <div className="project-tags">
          {project.tech.slice(0, 5).map((tag) => (
            <span key={`${project.slug}-${tag}`} className="project-tag">
              {tag}
            </span>
          ))}
        </div>
        <div className="project-links">
          <Link className="inline-link" to={`/work/${project.slug}`}>
            Case Study <ArrowUpRight size={14} />
          </Link>
          {project.links.live ? (
            <a
              className="inline-link"
              href={project.links.live}
              target="_blank"
              rel="noreferrer"
            >
              Live <ArrowUpRight size={14} />
            </a>
          ) : null}
          {project.links.repo ? (
            <a
              className="inline-link"
              href={project.links.repo}
              target="_blank"
              rel="noreferrer"
            >
              Repo <Github size={14} />
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
};
