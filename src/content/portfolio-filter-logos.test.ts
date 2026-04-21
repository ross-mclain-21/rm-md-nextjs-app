import { describe, expect, it } from "vitest";
import { getPortfolioFilterLogo } from "@/content/portfolio-filter-logos";

describe("portfolio filter logos", () => {
  it("returns local svgl-backed logos for supported tags", () => {
    expect(getPortfolioFilterLogo("React")).toEqual({
      src: "/assets/logos/svgl/react.svg",
      source: "svgl",
      tone: "filtered"
    });
    expect(getPortfolioFilterLogo("TypeScript")?.src).toBe(
      "/assets/logos/svgl/typescript.svg"
    );
    expect(getPortfolioFilterLogo("Tailwind")?.src).toBe(
      "/assets/logos/svgl/tailwindcss.svg"
    );
    expect(getPortfolioFilterLogo("SCSS")?.src).toBe("/assets/logos/svgl/sass.svg");
    expect(getPortfolioFilterLogo("Vite")?.src).toBe("/assets/logos/svgl/vite.svg");
    expect(getPortfolioFilterLogo("Convex")?.src).toBe("/assets/logos/svgl/convex.svg");
  });

  it("uses a dedicated grayscale asset for contentful", () => {
    expect(getPortfolioFilterLogo("Contentful")).toEqual({
      src: "/assets/logos/contentful-greyscale.svg",
      source: "local",
      tone: "asset"
    });
  });

  it("returns null when no logo is configured for the tag", () => {
    expect(getPortfolioFilterLogo("Game Design")).toBeNull();
  });
});
