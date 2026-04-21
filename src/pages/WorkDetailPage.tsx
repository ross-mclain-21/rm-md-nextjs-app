import { Link, Navigate, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";
import { allProjects, getProjectBySlug } from "@/content/projects";
import { getRelatedProjects } from "@/lib/project-utils";
import { usePageMeta } from "@/lib/usePageMeta";

export const WorkDetailPage = () => {
  const { slug } = useParams();

  if (!slug) {
    return <Navigate to="/404" replace />;
  }

  const project = getProjectBySlug(slug);
  if (!project) {
    return <Navigate to="/404" replace />;
  }

  usePageMeta({
    title: `${project.title} | Ross McLain`,
    description: project.summary,
    path: `/work/${project.slug}`
  });

  const related = getRelatedProjects(allProjects, project, 3);

  return (
    <>
      <section className="section-spacing case-study">
        <Link className="inline-link" to="/work">
          <ArrowLeft size={16} /> Back to portfolio
        </Link>
        <p className="section-label">{project.year}</p>
        <h1>{project.title}</h1>
        <p className="section-intro">{project.summary}</p>

        <img
          src={project.heroImage}
          alt={`${project.title} overview`}
          className="case-study-hero"
        />

        <div className="case-study-meta">
          <p>
            <strong>Role:</strong> {project.role}
          </p>
          <p>
            <strong>Status:</strong> {project.status}
          </p>
          <div className="project-tags">
            {project.tech.map((tag) => (
              <span key={`${project.slug}-${tag}`} className="project-tag">
                {tag}
              </span>
            ))}
          </div>
          <div className="project-links">
            {project.links.live ? (
              <a href={project.links.live} target="_blank" rel="noreferrer">
                Live <ArrowUpRight size={15} />
              </a>
            ) : null}
            {project.links.repo ? (
              <a href={project.links.repo} target="_blank" rel="noreferrer">
                Repo <Github size={15} />
              </a>
            ) : null}
            {project.links.demo ? (
              <a href={project.links.demo} target="_blank" rel="noreferrer">
                Demo <ArrowUpRight size={15} />
              </a>
            ) : null}
          </div>
        </div>

        <section className="section-spacing-sm">
          <h2>Outcomes</h2>
          <ul className="outcomes-list">
            {project.outcomes.map((outcome) => (
              <li key={outcome}>{outcome}</li>
            ))}
          </ul>
        </section>

        <section className="section-spacing-sm markdown-content">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {project.body}
          </ReactMarkdown>
        </section>
      </section>

      {related.length > 0 ? (
        <section className="section-spacing">
          <header className="section-header">
            <p className="section-label">RELATED</p>
            <h2>More portfolio work in adjacent stacks</h2>
          </header>
          <div className="related-grid">
            {related.map((item) => (
              <Link key={item.slug} className="related-card" to={`/work/${item.slug}`}>
                <img src={item.heroImage} alt={`${item.title} thumbnail`} />
                <div>
                  <p className="project-year">{item.year}</p>
                  <h3>{item.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </section>
      ) : null}
    </>
  );
};
