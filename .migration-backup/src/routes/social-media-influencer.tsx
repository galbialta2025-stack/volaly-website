import { createFileRoute } from "@tanstack/react-router";
import { IndustryPage } from "@/components/sections/IndustryPage";
import { industryBySlug } from "@/lib/industries-data";

const data = industryBySlug["social-media-influencer"];

export const Route = createFileRoute("/social-media-influencer")({
  head: () => ({
    meta: [
      { title: "AI Content & DM Automation for Influencers — Volaly" },
      { name: "description", content: "Volaly creates daily content, handles DMs and brand enquiries, and helps social media influencers monetise their audience." },
      { property: "og:title", content: "AI Content & DM Automation for Influencers — Volaly" },
      { property: "og:description", content: "Volaly creates daily content, handles DMs and brand enquiries, and helps social media influencers monetise their audience." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/social-media-influencer" }],
  }),
  component: () => <IndustryPage data={data} />,
});
