import { createFileRoute } from "@tanstack/react-router";
import { IndustryPage } from "@/components/sections/IndustryPage";
import { industryBySlug } from "@/lib/industries-data";

const data = industryBySlug["medical-beauty"];

export const Route = createFileRoute("/medical-beauty")({
  component: () => <IndustryPage data={data} />,
});
