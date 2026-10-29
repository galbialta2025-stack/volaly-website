import { createFileRoute } from "@tanstack/react-router";
import { SalesDemo } from "@/components/demo/SalesDemo";

export const Route = createFileRoute("/$lang/demo/")({
  component: DemoPage,
});

function DemoPage() {
  const { lang } = Route.useParams();
  return <SalesDemo lang={lang} />;
}
