import { createFileRoute } from "@tanstack/react-router";
import { IndustryPage } from "@/components/sections/IndustryPage";
import { industryBySlug } from "@/lib/industries-data";

const data = industryBySlug["social-media-influencer"];

export const Route = createFileRoute("/social-media-influencer")({
  component: () => <IndustryPage data={data} />,
});
