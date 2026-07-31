import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { TrustBar } from "@/components/sections/TrustBar";
import { VisibilityEngine, RevenueEngine } from "@/components/sections/Engines";
import { Workflow } from "@/components/sections/Workflow";
import { IndustriesGrid } from "@/components/sections/IndustriesGrid";
import { FeaturesGrid } from "@/components/sections/FeaturesGrid";
import { WhyVolaly } from "@/components/sections/WhyVolaly";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCta } from "@/components/sections/FinalCta";
import { faqs } from "@/lib/faq-data";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export const Route = createFileRoute("/")({
  head: () => ({
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd) },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Problem />
      <VisibilityEngine />
      <RevenueEngine />
      <Workflow />
      <IndustriesGrid />
      <FeaturesGrid />
      <WhyVolaly />
      <FAQ />
      <FinalCta />
    </>
  );
}
