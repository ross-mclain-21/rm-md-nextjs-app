import { parse as parseYaml } from "yaml";
import type { CaseStudy, ProjectEntry } from "@/lib/types";
import { sortProjects } from "@/lib/project-utils";

type RawFileMap = Record<string, string>;

const rawProjectModules = import.meta.glob("/content/projects/*.mdx", {
  eager: true,
  query: "?raw",
  import: "default"
}) as RawFileMap;

const splitFrontmatter = (raw: string) => {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);

  if (!match) {
    throw new Error("Invalid project file format. Missing YAML frontmatter.");
  }

  return {
    frontmatter: match[1],
    content: match[2]
  };
};

const parsedProjects: CaseStudy[] = Object.entries(rawProjectModules).map(
  ([filePath, raw]) => {
    const parsed = splitFrontmatter(raw);
    const data = parseYaml(parsed.frontmatter) as ProjectEntry;
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
