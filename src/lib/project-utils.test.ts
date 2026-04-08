import { describe, expect, it } from "vitest";
import {
  filterProjectsByTags,
  getAllTags,
  getFeaturedProjects,
  sortProjects
} from "@/lib/project-utils";
import type { CaseStudy } from "@/lib/types";

const projects: CaseStudy[] = [
  {
    slug: "a",
    title: "A",
    summary: "",
    role: "",
    year: 2022,
    type: "archive",
    status: "archived",
    tech: ["React", "TypeScript"],
    links: {},
    heroImage: "",
    outcomes: [],
    featured: false,
    body: ""
  },
  {
    slug: "b",
    title: "B",
    summary: "",
    role: "",
    year: 2021,
    type: "featured",
    status: "live",
    tech: ["Node.js", "TypeScript"],
    links: {},
    heroImage: "",
    outcomes: [],
    featured: true,
    body: ""
  },
  {
    slug: "c",
    title: "C",
    summary: "",
    role: "",
    year: 2024,
    type: "archive",
    status: "live",
    tech: ["Unity"],
    links: {},
    heroImage: "",
    outcomes: [],
    featured: false,
    body: ""
  }
];

describe("project-utils", () => {
  it("prioritizes featured projects in sorting", () => {
    const sorted = sortProjects(projects);
    expect(sorted[0].slug).toBe("b");
  });

  it("filters by selected tags", () => {
    const filtered = filterProjectsByTags(projects, ["React"]);
    expect(filtered).toHaveLength(1);
    expect(filtered[0].slug).toBe("a");
  });

  it("returns unique sorted tags", () => {
    expect(getAllTags(projects)).toEqual(["Node.js", "React", "TypeScript", "Unity"]);
  });

  it("returns only featured projects", () => {
    const featured = getFeaturedProjects(projects);
    expect(featured).toHaveLength(1);
    expect(featured[0].slug).toBe("b");
  });
});
