import { createFileRoute } from "@tanstack/react-router";
import { IndustryPage } from "@/components/sections/IndustryPage";
import { industryBySlug } from "@/lib/industries-data";

const data = industryBySlug["real-estate"];

export const Route = createFileRoute("/real-estate")({
  head: () => ({
    meta: [
      { title: "AI Lead Qualification for Real Estate Agencies — Volaly" },
      { name: "description", content: "Volaly replies to every property enquiry instantly, qualifies buyers and books viewings automatically for real estate agencies." },
      { property: "og:title", content: "AI Lead Qualification for Real Estate Agencies — Volaly" },
      { property: "og:description", content: "Volaly replies to every property enquiry instantly, qualifies buyers and books viewings automatically for real estate agencies." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/real-estate" }],
  }),
  component: () => <IndustryPage data={data} />,
});
