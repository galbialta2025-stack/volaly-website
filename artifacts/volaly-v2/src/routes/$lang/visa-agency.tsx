import { createFileRoute } from "@tanstack/react-router";
import { IndustryPage } from "@/components/sections/IndustryPage";
import { industryBySlug } from "@/lib/industries-data";

const data = industryBySlug["visa-agency"];

export const Route = createFileRoute("/$lang/visa-agency")({
  component: () => <IndustryPage data={data} />,
});
