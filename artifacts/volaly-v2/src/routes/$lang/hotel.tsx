import { createFileRoute } from "@tanstack/react-router";
import { IndustryPage } from "@/components/sections/IndustryPage";
import { industryBySlug } from "@/lib/industries-data";

const data = industryBySlug["hotel"];

export const Route = createFileRoute("/$lang/hotel")({
  component: () => <IndustryPage data={data} />,
});
