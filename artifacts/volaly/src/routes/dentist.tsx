import { createFileRoute } from "@tanstack/react-router";
import { IndustryPage } from "@/components/sections/IndustryPage";
import { industryBySlug } from "@/lib/industries-data";

const data = industryBySlug["dentist"];

export const Route = createFileRoute("/dentist")({
  component: () => <IndustryPage data={data} />,
});
