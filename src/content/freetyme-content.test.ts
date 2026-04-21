import { readFileSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

const freetymeContentPath = path.resolve(
  __dirname,
  "../../content/projects/freetyme.mdx"
);

describe("freetyme project content", () => {
  const content = readFileSync(freetymeContentPath, "utf8");

  it("keeps the card summary free of alpha wording", () => {
    expect(content).toContain(
      "summary: Scheduling app where groups find overlapping free time, propose plans in chat, and vote together."
    );
    expect(content).not.toContain(
      "summary: Alpha scheduling app where groups find overlapping free time, propose plans in chat, and vote together."
    );
  });

  it("lists the current frontend and backend stack", () => {
    expect(content).toContain("  - Vite");
    expect(content).toContain("  - Convex");
    expect(content).not.toContain("  - Next.js");
    expect(content).not.toContain("  - PostgreSQL");
  });
});
