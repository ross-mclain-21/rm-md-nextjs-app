import { useEffect } from "react";

interface PageMetaInput {
  title: string;
  description?: string;
  path?: string;
}

const SITE_URL = import.meta.env.VITE_SITE_URL ?? "https://rossmclain.dev";

const ensureMetaTag = (name: string, type: "name" | "property") => {
  const selector = `meta[${type}="${name}"]`;
  let tag = document.querySelector(selector) as HTMLMetaElement | null;

  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(type, name);
    document.head.appendChild(tag);
  }

  return tag;
};

const ensureCanonicalTag = () => {
  let tag = document.querySelector('link[rel="canonical"]') as
    | HTMLLinkElement
    | null;

  if (!tag) {
    tag = document.createElement("link");
    tag.rel = "canonical";
    document.head.appendChild(tag);
  }

  return tag;
};

export const usePageMeta = ({ title, description, path = "/" }: PageMetaInput) => {
  useEffect(() => {
    document.title = title;

    const canonicalHref = new URL(path, SITE_URL).toString();
    ensureCanonicalTag().href = canonicalHref;

    if (description) {
      ensureMetaTag("description", "name").content = description;
      ensureMetaTag("og:description", "property").content = description;
      ensureMetaTag("twitter:description", "name").content = description;
    }

    ensureMetaTag("og:title", "property").content = title;
    ensureMetaTag("twitter:title", "name").content = title;
    ensureMetaTag("og:url", "property").content = canonicalHref;
    ensureMetaTag("twitter:card", "name").content = "summary_large_image";
  }, [description, path, title]);
};
