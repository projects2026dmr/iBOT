import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalPath?: string; // örn: "/powiat/kartuski"
  ogType?: string; // "website" | "article"
}

export default function SEOHead({
  title,
  description,
  canonicalPath = "",
  ogType = "website"
}: SEOHeadProps) {
  useEffect(() => {
    // Remove old tags to avoid duplicates
    const removeIfExists = (selector: string) => {
      document.querySelectorAll(selector).forEach((el) => el.remove());
    };

    removeIfExists("meta[name='description']");
    removeIfExists("link[rel='canonical']");
    removeIfExists("meta[property^='og:']");
    removeIfExists("meta[name^='twitter:']");

    // Title
    document.title = title;

    // Description
    const metaDesc = document.createElement("meta");
    metaDesc.name = "description";
    metaDesc.content = description;
    document.head.appendChild(metaDesc);

    // Canonical
    const canonical = document.createElement("link");
    canonical.rel = "canonical";

    const origin = window.location.origin;
    canonical.href = origin + canonicalPath;
    document.head.appendChild(canonical);

    // OG tags
    const ogTitle = document.createElement("meta");
    ogTitle.setAttribute("property", "og:title");
    ogTitle.content = title;
    document.head.appendChild(ogTitle);

    const ogDesc = document.createElement("meta");
    ogDesc.setAttribute("property", "og:description");
    ogDesc.content = description;
    document.head.appendChild(ogDesc);

    const ogUrl = document.createElement("meta");
    ogUrl.setAttribute("property", "og:url");
    ogUrl.content = origin + canonicalPath;
    document.head.appendChild(ogUrl);

    const ogTypeTag = document.createElement("meta");
    ogTypeTag.setAttribute("property", "og:type");
    ogTypeTag.content = ogType;
    document.head.appendChild(ogTypeTag);

    const ogSite = document.createElement("meta");
    ogSite.setAttribute("property", "og:site_name");
    ogSite.content = "iBOT Agencja SEO";
    document.head.appendChild(ogSite);

    // Twitter tags
    const twCard = document.createElement("meta");
    twCard.name = "twitter:card";
    twCard.content = "summary_large_image";
    document.head.appendChild(twCard);

    const twTitle = document.createElement("meta");
    twTitle.name = "twitter:title";
    twTitle.content = title;
    document.head.appendChild(twTitle);

    const twDesc = document.createElement("meta");
    twDesc.name = "twitter:description";
    twDesc.content = description;
    document.head.appendChild(twDesc);

    return () => {
      removeIfExists("meta[name='description']");
      removeIfExists("link[rel='canonical']");
      removeIfExists("meta[property^='og:']");
      removeIfExists("meta[name^='twitter:']");
    };
  }, [title, description, canonicalPath, ogType]);

  return null;
}
