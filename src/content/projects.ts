import matter from "gray-matter";
import type { CaseStudy, ProjectEntry } from "@/lib/types";
import { sortProjects } from "@/lib/project-utils";

type RawFileMap = Record<string, string>;

const rawProjectModules = import.meta.glob("/content/projects/*.mdx", {
  eager: true,
  query: "?raw",
  import: "default"
}) as RawFileMap;

const parsedProjects: CaseStudy[] = Object.entries(rawProjectModules).map(
  ([filePath, raw]) => {
    const parsed = matter(raw);
    const data = parsed.data as ProjectEntry;
    const fallbackSlug = filePath.split("/").at(-1)?.replace(".mdx", "") ?? "";

    return {
      ...data,
      slug: data.slug || fallbackSlug,
      body: parsed.content.trim()
    };
  }
);

export const allProjects: CaseStudy[] = sortProjects(parsedProjects);

export const getProjectBySlug = (slug: string): CaseStudy | undefined => {
  return allProjects.find((project) => project.slug === slug);
};

export const featuredProjects = allProjects.filter(
  (project) => project.featured && project.type !== "lab"
);

export const archiveProjects = allProjects.filter(
  (project) => !project.featured && project.type !== "lab"
);

export const labProjects = allProjects.filter((project) => project.type === "lab");
