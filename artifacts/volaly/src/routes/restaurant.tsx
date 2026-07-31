import { createFileRoute } from "@tanstack/react-router";
import { IndustryPage } from "@/components/sections/IndustryPage";
import { industryBySlug } from "@/lib/industries-data";

const data = industryBySlug["restaurant"];

export const Route = createFileRoute("/restaurant")({
  component: () => <IndustryPage data={data} />,
});
