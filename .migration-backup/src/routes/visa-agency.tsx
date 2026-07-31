import { createFileRoute } from "@tanstack/react-router";
import { IndustryPage } from "@/components/sections/IndustryPage";
import { industryBySlug } from "@/lib/industries-data";

const data = industryBySlug["visa-agency"];

export const Route = createFileRoute("/visa-agency")({
  head: () => ({
    meta: [
      { title: "AI Automation for Visa Agencies — Volaly" },
      { name: "description", content: "Volaly answers visa questions 24/7 in any language, qualifies applicants and books consultations automatically for visa agencies." },
      { property: "og:title", content: "AI Automation for Visa Agencies — Volaly" },
      { property: "og:description", content: "Volaly answers visa questions 24/7 in any language, qualifies applicants and books consultations automatically for visa agencies." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/visa-agency" }],
  }),
  component: () => <IndustryPage data={data} />,
});
