import type { CaseStudy } from "@/lib/types";

const FEATURED_WEIGHT = 1000;

const scoreProject = (project: CaseStudy): number => {
  return project.year + (project.featured ? FEATURED_WEIGHT : 0);
};

export const sortProjects = (projects: CaseStudy[]): CaseStudy[] => {
  return [...projects].sort((a, b) => scoreProject(b) - scoreProject(a));
};

export const getFeaturedProjects = (projects: CaseStudy[]): CaseStudy[] => {
  return sortProjects(projects.filter((project) => project.featured));
};

export const getArchiveProjects = (projects: CaseStudy[]): CaseStudy[] => {
  return sortProjects(
    projects.filter((project) => !project.featured && project.type !== "lab")
  );
};

export const filterProjectsByTags = (
  projects: CaseStudy[],
  selectedTags: string[]
): CaseStudy[] => {
  if (selectedTags.length === 0) {
    return projects;
  }

  const selected = new Set(selectedTags);
  return projects.filter((project) =>
    project.tech.some((tag) => selected.has(tag))
  );
};

export const getAllTags = (projects: CaseStudy[]): string[] => {
  const tags = new Set<string>();

  for (const project of projects) {
    for (const tag of project.tech) {
      tags.add(tag);
    }
  }

  return [...tags].sort((a, b) => a.localeCompare(b));
};

export const getRelatedProjects = (
  projects: CaseStudy[],
  current: CaseStudy,
  limit = 3
): CaseStudy[] => {
  const tags = new Set(current.tech);

  return sortProjects(
    projects
      .filter((project) => project.slug !== current.slug)
      .map((project) => {
        const overlap = project.tech.filter((tag) => tags.has(tag)).length;
        return { project, overlap };
      })
      .filter((entry) => entry.overlap > 0)
      .sort((a, b) => b.overlap - a.overlap)
      .slice(0, limit)
      .map((entry) => entry.project)
  );
};
