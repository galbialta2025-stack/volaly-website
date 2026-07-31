import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/sections/PageHeader";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — Volaly" },
      { name: "description", content: "The terms and conditions for using Volaly services." },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: () => (
    <>
      <PageHeader eyebrow="Legal" title="Terms of Service" subtitle="Please read these terms carefully." />
      <section className="pb-24">
        <div className="mx-auto max-w-3xl space-y-6 px-6 text-muted-foreground">
          <p>
            By using Volaly services you agree to these terms. Our services are provided on a
            subscription basis and may be cancelled at any time.
          </p>
          <p>
            We strive to keep our services available and secure, but we do not guarantee
            uninterrupted operation. For any questions, contact hello@thaisolutions.ai.
          </p>
        </div>
      </section>
    </>
  ),
});