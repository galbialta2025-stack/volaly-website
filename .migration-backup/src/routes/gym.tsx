import { createFileRoute } from "@tanstack/react-router";
import { IndustryPage } from "@/components/sections/IndustryPage";
import { industryBySlug } from "@/lib/industries-data";

const data = industryBySlug["gym"];

export const Route = createFileRoute("/gym")({
  head: () => ({
    meta: [
      { title: "AI Marketing & Automation for Gyms — Volaly" },
      { name: "description", content: "Volaly helps gyms and fitness studios get found online, reply to every lead instantly and convert trials into paying members." },
      { property: "og:title", content: "AI Marketing & Automation for Gyms — Volaly" },
      { property: "og:description", content: "Volaly helps gyms and fitness studios get found online, reply to every lead instantly and convert trials into paying members." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/gym" }],
  }),
  component: () => <IndustryPage data={data} />,
});
