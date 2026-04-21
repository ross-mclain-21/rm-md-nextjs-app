import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  archiveProjects,
  featuredProjects,
  labProjects
} from "@/content/projects";
import {
  filterProjectsByTags,
  getAllTags,
  sortProjects
} from "@/lib/project-utils";
import { getPortfolioFilterLogo } from "@/content/portfolio-filter-logos";
import { ProjectCard } from "@/components/work/ProjectCard";
import { usePageMeta } from "@/lib/usePageMeta";

export const WorkPage = () => {
  usePageMeta({
    title: "Portfolio | Ross McLain",
    description: "Featured and archived projects from Ross McLain's portfolio.",
    path: "/work"
  });

  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const allWorkProjects = useMemo(
    () => sortProjects([...featuredProjects, ...archiveProjects]),
    []
  );

  const filtered = useMemo(
    () => filterProjectsByTags(allWorkProjects, selectedTags),
    [allWorkProjects, selectedTags]
  );

  const featured = filtered.filter((project) => project.featured);
  const archive = filtered.filter((project) => !project.featured);
  const tags = useMemo(() => getAllTags(allWorkProjects), [allWorkProjects]);

  const toggleTag = (tag: string) => {
    setSelectedTags((current) =>
      current.includes(tag)
        ? current.filter((item) => item !== tag)
        : [...current, tag]
    );
  };

  return (
    <>
      <section className="section-spacing">
        <header className="section-header">
          <p className="section-label">PORTFOLIO</p>
        </header>
        <div className="filter-row">
          {tags.map((tag) => {
            const selected = selectedTags.includes(tag);
            const logo = getPortfolioFilterLogo(tag);
            return (
              <button
                key={tag}
                className={`tag-toggle ${selected ? "selected" : ""}`}
                onClick={() => toggleTag(tag)}
                type="button"
              >
                {logo ? (
                  <img
                    src={logo.src}
                    alt=""
                    aria-hidden="true"
                    className={`tag-toggle-icon ${
                      logo.tone === "filtered" ? "tag-toggle-icon--filtered" : ""
                    }`}
                    loading="lazy"
                  />
                ) : null}
                <span>{tag}</span>
              </button>
            );
          })}
        </div>
        {selectedTags.length > 0 ? (
          <button
            type="button"
            className="clear-filter"
            onClick={() => setSelectedTags([])}
          >
            Clear filters
          </button>
        ) : null}
      </section>

      <section className="section-spacing">
        <header className="section-header">
          <p className="section-label">FEATURED</p>
        </header>
        <div className="project-grid featured-project-grid">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="section-spacing">
        <header className="section-header">
          <p className="section-label">ARCHIVE</p>
        </header>
        <div className="project-grid archive-project-grid">
          {archive.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="section-spacing callout-panel">
        <p className="section-label">LABS</p>
        <h2>Labs is where I share interactive projects.</h2>
        <p>Interactive projects are available in the labs area.</p>
        <Link className="primary-button" to="/labs">
          Open Labs
        </Link>
      </section>
    </>
  );
};
