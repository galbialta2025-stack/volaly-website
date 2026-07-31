import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/sections/PageHeader";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Volaly" },
      { name: "description", content: "How Volaly collects, uses and protects your data." },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: () => (
    <>
      <PageHeader eyebrow="Legal" title="Privacy Policy" subtitle="Your privacy matters to us." />
      <section className="pb-24">
        <div className="mx-auto max-w-3xl space-y-6 px-6 text-muted-foreground">
          <p>
            Volaly is committed to protecting your personal information. We collect only the
            data needed to provide and improve our services, and we never sell your data to third
            parties.
          </p>
          <p>
            Information you share through our contact forms is used solely to respond to your
            enquiry. For questions about this policy, please contact us at hello@thaisolutions.ai.
          </p>
        </div>
      </section>
    </>
  ),
});