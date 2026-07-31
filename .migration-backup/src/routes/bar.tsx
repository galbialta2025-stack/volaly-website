import { createFileRoute } from "@tanstack/react-router";
import { IndustryPage } from "@/components/sections/IndustryPage";
import { industryBySlug } from "@/lib/industries-data";

const data = industryBySlug["bar"];

export const Route = createFileRoute("/bar")({
  head: () => ({
    meta: [
      { title: "AI Marketing & Reservations for Bars and Nightlife — Volaly" },
      { name: "description", content: "Volaly promotes your events, replies to guests instantly and fills tables with automated reservations for bars and nightlife venues." },
      { property: "og:title", content: "AI Marketing & Reservations for Bars and Nightlife — Volaly" },
      { property: "og:description", content: "Volaly promotes your events, replies to guests instantly and fills tables with automated reservations for bars and nightlife venues." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/bar" }],
  }),
  component: () => <IndustryPage data={data} />,
});
