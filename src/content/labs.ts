export interface LabRuntime {
  slug: string;
  title: string;
  description: string;
  year: number;
  isAvailable: boolean;
  loaderUrl: string;
  dataUrl: string;
  frameworkUrl: string;
  codeUrl: string;
  screenshot: string;
}

export const labRuntimes: LabRuntime[] = [
  {
    slug: "theos-celebration",
    title: "Celebration At Theos",
    description:
      "A 48-hour game jam project about gathering party items while avoiding detection.",
    year: 2020,
    isAvailable: true,
    loaderUrl: "/unity/celebrationAtTheos/build/WEBGLBUILD12.loader.js",
    dataUrl: "/unity/celebrationAtTheos/build/webgl.data",
    frameworkUrl: "/unity/celebrationAtTheos/build/build.framework.js",
    codeUrl: "/unity/celebrationAtTheos/build/build.wasm",
    screenshot:
      "/assets/images/portfolio/CelebrationAtTheos/celebrationattheos.png"
  },
  {
    slug: "king-and-country",
    title: "King and Country",
    description:
      "A medieval resource-management simulation built during CI2 lab internship work.",
    year: 2016,
    isAvailable: true,
    loaderUrl: "/unity/kingCountry/build/Build.loader.js",
    dataUrl: "/unity/kingCountry/build/webgl.data",
    frameworkUrl: "/unity/kingCountry/build/build.framework.js",
    codeUrl: "/unity/kingCountry/build/build.wasm",
    screenshot: "/assets/images/portfolio/Crown And Country/Building.png"
  },
  {
    slug: "ninja-runner",
    title: "Ninja Runner",
    description:
      "A mobile-friendly reflex game where players dodge hazards and collect health.",
    year: 2016,
    isAvailable: false,
    loaderUrl: "/unity/ninjaRunner/build/Builds.loader.js",
    dataUrl: "/unity/ninjaRunner/build/Builds.data",
    frameworkUrl: "/unity/ninjaRunner/build/Builds.framework.js",
    codeUrl: "/unity/ninjaRunner/build/Builds.wasm",
    screenshot: "/assets/images/portfolio/Ballgame/running.png"
  }
];
