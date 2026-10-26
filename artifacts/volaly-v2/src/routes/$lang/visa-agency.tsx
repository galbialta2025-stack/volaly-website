import { createFileRoute } from "@tanstack/react-router";
import { IndustryPage } from "@/components/sections/IndustryPage";

export const Route = createFileRoute("/$lang/visa-agency")({
  component: () => <IndustryPage slug="visa-agency" />,
});
