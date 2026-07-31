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

export const Route = createFileRoute("/")({
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
