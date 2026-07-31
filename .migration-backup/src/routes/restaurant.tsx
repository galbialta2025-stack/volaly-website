import { createFileRoute } from "@tanstack/react-router";
import { IndustryPage } from "@/components/sections/IndustryPage";
import { industryBySlug } from "@/lib/industries-data";

const data = industryBySlug["restaurant"];

export const Route = createFileRoute("/restaurant")({
  head: () => ({
    meta: [
      { title: "AI Reservations & Marketing for Restaurants — Volaly" },
      { name: "description", content: "Volaly takes reservations, answers menu questions and promotes your restaurant automatically across Google, LINE, WhatsApp and social." },
      { property: "og:title", content: "AI Reservations & Marketing for Restaurants — Volaly" },
      { property: "og:description", content: "Volaly takes reservations, answers menu questions and promotes your restaurant automatically across Google, LINE, WhatsApp and social." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/restaurant" }],
  }),
  component: () => <IndustryPage data={data} />,
});
