import { createFileRoute } from "@tanstack/react-router";
import { IndustryPage } from "@/components/sections/IndustryPage";
import { industryBySlug } from "@/lib/industries-data";

const data = industryBySlug["car-rental"];

export const Route = createFileRoute("/car-rental")({
  head: () => ({
    meta: [
      { title: "AI Booking Automation for Car Rental Companies — Volaly" },
      { name: "description", content: "Volaly quotes rates, checks availability and confirms car rental bookings automatically, 24/7, in any language." },
      { property: "og:title", content: "AI Booking Automation for Car Rental Companies — Volaly" },
      { property: "og:description", content: "Volaly quotes rates, checks availability and confirms car rental bookings automatically, 24/7, in any language." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/car-rental" }],
  }),
  component: () => <IndustryPage data={data} />,
});
