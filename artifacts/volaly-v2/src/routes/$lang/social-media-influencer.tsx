import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/$lang/social-media-influencer")({
  beforeLoad: ({ params }) => {
    throw redirect({ to: "/$lang", params: { lang: params.lang }, replace: true });
  },
  component: () => null,
});
