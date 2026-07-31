import { createFileRoute } from "@tanstack/react-router";
import { IndustryPage } from "@/components/sections/IndustryPage";
import { industryBySlug } from "@/lib/industries-data";

const data = industryBySlug["car-rental"];

export const Route = createFileRoute("/car-rental")({
  component: () => <IndustryPage data={data} />,
});
