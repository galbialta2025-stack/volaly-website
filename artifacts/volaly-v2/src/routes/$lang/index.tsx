import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { TrustBar } from "@/components/sections/TrustBar";
import { VisibilitySuite } from "@/components/sections/VisibilitySuite";
import { IndustriesGrid } from "@/components/sections/IndustriesGrid";
import { WhoUsesVolaly } from "@/components/sections/WhoUsesVolaly";
import { FeaturesGrid } from "@/components/sections/FeaturesGrid";
import { WhyVolaly } from "@/components/sections/WhyVolaly";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCta } from "@/components/sections/FinalCta";
import { JsonLd } from "@/components/JsonLd";
import { getFaqs } from "@/lib/faq-data";

export const Route = createFileRoute("/$lang/")({
  component: Index,
});

function Index() {
  const { lang } = Route.useParams();
  const faqs = getFaqs(lang);

  const homepageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `https://volaly.com/${lang}/#webpage`,
        url: `https://volaly.com/${lang}/`,
        name: "Volaly — Turn Visibility into Revenue | Business Growth Platform",
        description:
          "Volaly is the AI Business Growth Platform. Create content, attract customers, convert enquiries and grow revenue automatically across Google, LINE, WhatsApp and more.",
        isPartOf: { "@id": "https://volaly.com/#website" },
        publisher: { "@id": "https://volaly.com/#organization" },
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `https://volaly.com/${lang}/` },
          ],
        },
      },
      {
        "@type": "FAQPage",
        "@id": `https://volaly.com/${lang}/#faq`,
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: typeof f.a === "string" ? f.a : String(f.q) },
        })),
      },
    ],
  };

  return (
    <>
      <JsonLd schema={homepageSchema} />
      <Hero />
      <TrustBar />
      <Problem />
      <VisibilitySuite />
      <WhoUsesVolaly />
      <IndustriesGrid />
      <FeaturesGrid />
      <WhyVolaly />
      <FAQ />
      <FinalCta />
    </>
  );
}
