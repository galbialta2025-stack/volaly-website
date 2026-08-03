import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { TrustBar } from "@/components/sections/TrustBar";
import { VisibilityEngine } from "@/components/sections/Engines";
import { RevenueSuite } from "@/components/sections/RevenueSuite";
import { Workflow } from "@/components/sections/Workflow";
import { IndustriesGrid } from "@/components/sections/IndustriesGrid";
import { FeaturesGrid } from "@/components/sections/FeaturesGrid";
import { WhyVolaly } from "@/components/sections/WhyVolaly";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCta } from "@/components/sections/FinalCta";
import { JsonLd } from "@/components/JsonLd";
import { faqs } from "@/lib/faq-data";

export const Route = createFileRoute("/")({
  component: Index,
});

const homepageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://volaly.com/#webpage",
      url: "https://volaly.com/",
      name: "Volaly — Turn Visibility into Revenue | Business Growth Platform",
      description:
        "Volaly is the AI Business Growth Platform. Create content, attract customers, convert enquiries and grow revenue automatically across Google, LINE, WhatsApp and more.",
      isPartOf: { "@id": "https://volaly.com/#website" },
      publisher: { "@id": "https://volaly.com/#organization" },
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://volaly.com/" },
        ],
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://volaly.com/#faq",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

function Index() {
  return (
    <>
      <JsonLd schema={homepageSchema} />
      <Hero />
      <TrustBar />
      <Problem />
      <VisibilityEngine />
      <RevenueSuite />
      <Workflow />
      <IndustriesGrid />
      <FeaturesGrid />
      <WhyVolaly />
      <FAQ />
      <FinalCta />
    </>
  );
}
