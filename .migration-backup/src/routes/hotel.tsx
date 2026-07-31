import { createFileRoute } from "@tanstack/react-router";
import { IndustryPage } from "@/components/sections/IndustryPage";
import { industryBySlug } from "@/lib/industries-data";

const data = industryBySlug["hotel"];

export const Route = createFileRoute("/hotel")({
  head: () => ({
    meta: [
      { title: "AI Guest Communication & Direct Bookings for Hotels — Volaly" },
      { name: "description", content: "Volaly answers guest questions 24/7, drives direct hotel bookings and grows 5-star reviews — reducing OTA commission." },
      { property: "og:title", content: "AI Guest Communication & Direct Bookings for Hotels — Volaly" },
      { property: "og:description", content: "Volaly answers guest questions 24/7, drives direct hotel bookings and grows 5-star reviews — reducing OTA commission." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/hotel" }],
  }),
  component: () => <IndustryPage data={data} />,
});
