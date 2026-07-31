import { createFileRoute } from "@tanstack/react-router";
import { IndustryPage } from "@/components/sections/IndustryPage";
import { industryBySlug } from "@/lib/industries-data";

const data = industryBySlug["gym"];

export const Route = createFileRoute("/gym")({
  component: () => <IndustryPage data={data} />,
});
