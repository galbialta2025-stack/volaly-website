import { createFileRoute } from "@tanstack/react-router";
import { IndustryPage } from "@/components/sections/IndustryPage";

export const Route = createFileRoute("/$lang/car-rental")({
  component: () => <IndustryPage slug="car-rental" />,
});
