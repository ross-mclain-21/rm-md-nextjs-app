export interface PortfolioFilterLogo {
  src: string;
  source: "svgl" | "local";
  tone: "filtered" | "asset";
}

const portfolioFilterLogos: Record<string, PortfolioFilterLogo> = {
  Contentful: {
    src: "/assets/logos/contentful-greyscale.svg",
    source: "local",
    tone: "asset"
  },
  Convex: {
    src: "/assets/logos/svgl/convex.svg",
    source: "svgl",
    tone: "filtered"
  },
  "Next.js": {
    src: "/assets/logos/svgl/nextjs.svg",
    source: "svgl",
    tone: "asset"
  },
  "Node.js": {
    src: "/assets/logos/svgl/nodejs.svg",
    source: "svgl",
    tone: "asset"
  },
  React: {
    src: "/assets/logos/svgl/react.svg",
    source: "svgl",
    tone: "filtered"
  },
  SCSS: {
    src: "/assets/logos/svgl/sass.svg",
    source: "svgl",
    tone: "filtered"
  },
  Tailwind: {
    src: "/assets/logos/svgl/tailwindcss.svg",
    source: "svgl",
    tone: "filtered"
  },
  TypeScript: {
    src: "/assets/logos/svgl/typescript.svg",
    source: "svgl",
    tone: "asset"
  },
  Unity: {
    src: "/assets/logos/svgl/unity.svg",
    source: "svgl",
    tone: "filtered"
  },
  Vercel: {
    src: "/assets/logos/svgl/vercel.svg",
    source: "svgl",
    tone: "filtered"
  },
  Vite: {
    src: "/assets/logos/svgl/vite.svg",
    source: "svgl",
    tone: "filtered"
  }
};

export const getPortfolioFilterLogo = (
  tag: string
): PortfolioFilterLogo | null => {
  return portfolioFilterLogos[tag] ?? null;
};
