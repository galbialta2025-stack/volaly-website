import { createFileRoute } from "@tanstack/react-router";

// Sitemap is generated server-side in production; this placeholder
// prevents a 404 for the route when running as a SPA.
export const Route = createFileRoute("/sitemap.xml")({
  component: () => null,
});
