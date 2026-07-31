import { createFileRoute } from "@tanstack/react-router";
import { IndustryPage } from "@/components/sections/IndustryPage";
import { industryBySlug } from "@/lib/industries-data";

const data = industryBySlug["dentist"];

export const Route = createFileRoute("/dentist")({
  head: () => ({
    meta: [
      { title: "AI Patient Booking & Marketing for Dentists — Volaly" },
      { name: "description", content: "Volaly helps dental clinics rank higher on Google, answer patient enquiries instantly and fill the appointment calendar automatically." },
      { property: "og:title", content: "AI Patient Booking & Marketing for Dentists — Volaly" },
      { property: "og:description", content: "Volaly helps dental clinics rank higher on Google, answer patient enquiries instantly and fill the appointment calendar automatically." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/dentist" }],
  }),
  component: () => <IndustryPage data={data} />,
});
