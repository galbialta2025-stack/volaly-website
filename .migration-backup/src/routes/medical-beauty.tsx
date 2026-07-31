import { createFileRoute } from "@tanstack/react-router";
import { IndustryPage } from "@/components/sections/IndustryPage";
import { industryBySlug } from "@/lib/industries-data";

const data = industryBySlug["medical-beauty"];

export const Route = createFileRoute("/medical-beauty")({
  head: () => ({
    meta: [
      { title: "AI Marketing for Medical Beauty & Aesthetic Clinics — Volaly" },
      { name: "description", content: "Volaly generates on-brand content, replies to every enquiry instantly and books consultations for medical beauty and aesthetic clinics." },
      { property: "og:title", content: "AI Marketing for Medical Beauty & Aesthetic Clinics — Volaly" },
      { property: "og:description", content: "Volaly generates on-brand content, replies to every enquiry instantly and books consultations for medical beauty and aesthetic clinics." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/medical-beauty" }],
  }),
  component: () => <IndustryPage data={data} />,
});
