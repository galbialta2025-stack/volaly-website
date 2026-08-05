import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/social-media-influencer")({
  beforeLoad: () => {
    throw redirect({ to: "/", replace: true });
  },
  component: () => null,
});
