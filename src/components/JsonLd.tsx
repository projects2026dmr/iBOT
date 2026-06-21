import { useEffect } from "react";

interface JsonLdProps {
  type: "home" | "local" | "faq";
  canonicalUrl: string;
  name: string;
  description: string;
}

export default function JsonLd({ type, canonicalUrl, name, description }: JsonLdProps) {
  useEffect(() => {
    const id = `jsonld-${type}`;
    let script = document.getElementById(id) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.id = id;
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }

    const data: Record<string, unknown> = {
      "@context": "https://schema.org",
    };

    if (type === "home") {
      Object.assign(data, {
        "@type": "Organization",
        name,
        url: canonicalUrl,
        description,
        logo: `${canonicalUrl}logo.png`,
        sameAs: [],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+48-123-456-789",
          contactType: "customer service",
          availableLanguage: "Polish",
        },
      });
    } else if (type === "local") {
      Object.assign(data, {
        "@type": "LocalBusiness",
        name,
        url: canonicalUrl,
        description,
      });
    }

    script.textContent = JSON.stringify(data);

    return () => {
      script?.remove();
    };
  }, [type, canonicalUrl, name, description]);

  return null;
}
