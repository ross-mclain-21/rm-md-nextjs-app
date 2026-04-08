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
import { ProjectCard } from "@/components/work/ProjectCard";
import { usePageMeta } from "@/lib/usePageMeta";

export const WorkPage = () => {
  usePageMeta({
    title: "Work | Ross McLain",
    description: "Featured and archived case studies from Ross McLain's portfolio.",
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
          <h1>Featured case studies and archive</h1>
          <p className="section-intro">
            Filter by technology to surface relevant builds quickly.
          </p>
        </header>

        <div className="filter-row">
          {tags.map((tag) => {
            const selected = selectedTags.includes(tag);
            return (
              <button
                key={tag}
                className={`tag-toggle ${selected ? "selected" : ""}`}
                onClick={() => toggleTag(tag)}
                type="button"
              >
                {tag}
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
          <h2>Primary portfolio work</h2>
        </header>
        <div className="project-grid">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="section-spacing">
        <header className="section-header">
          <p className="section-label">ARCHIVE</p>
          <h2>Additional projects and experiments</h2>
        </header>
        <div className="project-grid">
          {archive.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="section-spacing callout-panel">
        <p className="section-label">LABS</p>
        <h2>Playable legacy game projects are still available.</h2>
        <p>
          {labProjects.length} archived interactive projects can be launched in
          the labs area.
        </p>
        <Link className="primary-button" to="/labs">
          Open Labs
        </Link>
      </section>
    </>
  );
};
