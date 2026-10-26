import { createFileRoute } from "@tanstack/react-router";
import { IndustryPage } from "@/components/sections/IndustryPage";
import { industryBySlug } from "@/lib/industries-data";

const data = industryBySlug["real-estate"];

export const Route = createFileRoute("/$lang/real-estate")({
  component: () => <IndustryPage data={data} />,
});
