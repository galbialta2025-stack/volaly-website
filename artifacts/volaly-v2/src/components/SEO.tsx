import { useEffect } from "react";

const BASE_URL = "https://volaly.com";

function setMeta(selector: string, content: string) {
  let el = document.querySelector(selector) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    const attr = selector.match(/\[(\w+)="([^"]+)"\]/);
    if (attr) el.setAttribute(attr[1], attr[2]);
    document.head.appendChild(el);
  }
  el.content = content;
}

function setLink(rel: string, href: string) {
  let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link");
    el.rel = rel;
    document.head.appendChild(el);
  }
  el.href = href;
}

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  noIndex?: boolean;
}

/**
 * Dynamically updates document <head> meta tags for each page.
 * Works with client-side routing — tags revert to base on unmount.
 */
export function SEO({ title, description, canonical, ogImage, noIndex }: SEOProps) {
  const defaultTitle = "Volaly — Turn Visibility into Revenue | Business Growth Platform";
  const defaultDesc =
    "Volaly is the AI Business Growth Platform. Create content, attract customers, convert enquiries and grow revenue automatically across Google, LINE, WhatsApp and more.";
  const defaultCanonical = BASE_URL + "/";
  const image = ogImage ?? `${BASE_URL}/og-image.png`;

  useEffect(() => {
    const prevTitle = document.title;
    document.title = title;

    setMeta('meta[name="description"]', description);
    setMeta('meta[property="og:title"]', title);
    setMeta('meta[property="og:description"]', description);
    setMeta('meta[property="og:url"]', canonical ?? defaultCanonical);
    setMeta('meta[property="og:image"]', image);
    setMeta('meta[name="twitter:title"]', title);
    setMeta('meta[name="twitter:description"]', description);
    setMeta('meta[name="twitter:image"]', image);
    if (noIndex) setMeta('meta[name="robots"]', "noindex, nofollow");
    setLink("canonical", canonical ?? defaultCanonical);

    return () => {
      document.title = prevTitle;
      setMeta('meta[name="description"]', defaultDesc);
      setMeta('meta[property="og:title"]', defaultTitle);
      setMeta('meta[property="og:description"]', defaultDesc);
      setMeta('meta[property="og:url"]', defaultCanonical);
      setMeta('meta[property="og:image"]', image);
      setMeta('meta[name="twitter:title"]', defaultTitle);
      setMeta('meta[name="twitter:description"]', defaultDesc);
      setMeta('meta[name="twitter:image"]', image);
      if (noIndex) setMeta('meta[name="robots"]', "index, follow");
      setLink("canonical", defaultCanonical);
    };
  }, [title, description, canonical, ogImage, noIndex]);

  return null;
}
