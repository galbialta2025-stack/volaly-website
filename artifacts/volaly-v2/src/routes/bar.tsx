import { createFileRoute } from "@tanstack/react-router";
import { IndustryPage } from "@/components/sections/IndustryPage";
import { industryBySlug } from "@/lib/industries-data";

const data = industryBySlug["bar"];

export const Route = createFileRoute("/bar")({
  component: () => <IndustryPage data={data} />,
});
