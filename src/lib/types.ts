export type ProjectType = "featured" | "archive" | "lab";
export type ProjectStatus = "live" | "archived" | "wip";

export interface ProjectLinks {
  live?: string;
  repo?: string;
  demo?: string;
}

export interface ProjectEntry {
  slug: string;
  title: string;
  summary: string;
  role: string;
  year: number;
  type: ProjectType;
  status: ProjectStatus;
  tech: string[];
  links: ProjectLinks;
  heroImage: string;
  outcomes: string[];
  featured: boolean;
  legacyPath?: string;
  labRoute?: string;
}

export interface CaseStudy extends ProjectEntry {
  body: string;
}

export interface TimelineMilestone {
  id: string;
  year: string;
  title: string;
  organization?: string;
  summary: string;
  techHighlights: string[];
}
