import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/sections/PageHeader";
import { SEO } from "@/components/SEO";
import { LEGAL_ENTITY } from "@/lib/legal";

export const Route = createFileRoute("/$lang/imprint")({
  component: ImprintPage,
});

// Legal documents are provided in English only (see Terms / Privacy).
function ImprintPage() {
  const { lang } = Route.useParams();
  return (
    <>
      <SEO
        title="Imprint — Volaly"
        description="Legal notice and provider information for Volaly, a brand of SmartAI Platforms LLC."
        canonical={`https://volaly.com/${lang}/imprint`}
      />
      <PageHeader eyebrow="Legal" title="Imprint" subtitle="Legal notice / provider information" />
      <section className="pb-24">
        <div className="mx-auto max-w-3xl space-y-10 px-6 text-muted-foreground">
          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-foreground">Service provider</h2>
            <p>
              Volaly is a brand of:
              <br />
              <span className="text-foreground">{LEGAL_ENTITY.name}</span>
              <br />
              {LEGAL_ENTITY.street}
              <br />
              {LEGAL_ENTITY.city}
              <br />
              {LEGAL_ENTITY.country}
            </p>
            <p>Limited liability company organized under the laws of the State of Wyoming, USA.</p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-foreground">Contact</h2>
            <p>
              Email:{" "}
              <a
                href={`mailto:${LEGAL_ENTITY.email}`}
                className="text-foreground underline underline-offset-2"
              >
                {LEGAL_ENTITY.email}
              </a>
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-foreground">Business customers only</h2>
            <p>
              Volaly's services are offered exclusively to businesses. We do not enter into
              contracts with consumers.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
