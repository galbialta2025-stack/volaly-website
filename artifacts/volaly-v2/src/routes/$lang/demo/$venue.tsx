import { createFileRoute } from "@tanstack/react-router";
import { SalesDemo } from "@/components/demo/SalesDemo";

export const Route = createFileRoute("/$lang/demo/$venue")({
  component: VenueDemoPage,
});

function VenueDemoPage() {
  const { lang, venue } = Route.useParams();
  return <SalesDemo lang={lang} venueId={venue} />;
}
