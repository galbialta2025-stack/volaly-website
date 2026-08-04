import {
  Martini,
  type LucideIcon,
} from "lucide-react";

export type IndustryPageData = {
  slug: string;
  name: string;
  icon: LucideIcon;
  eyebrow: string;
  headline: string;
  highlight: string;
  subtitle: string;
  metaTitle: string;
  metaDescription: string;
  videoUrl: string;
  videoTitle: string;
  stats: { value: string; label: string }[];
  pains: string[];
  solutions: { title: string; desc: string }[];
};

const yt = (id: string) => `https://www.youtube-nocookie.com/embed/${id}?rel=0&modestbranding=1`;

export const industryPages: IndustryPageData[] = [
  {
    slug: "bar",
    name: "Bars & Nightlife",
    icon: Martini,
    eyebrow: "Bars & Nightlife",
    headline: "Pack the venue",
    highlight: "every single night",
    subtitle:
      "Event promos, table reservations and instant replies — Volaly keeps your bar visible and your tables booked.",
    metaTitle: "AI Marketing & Reservations for Bars and Nightlife — Volaly",
    metaDescription:
      "Volaly promotes your events, replies to guests instantly and fills tables with automated reservations for bars and nightlife venues.",
    videoUrl: yt("qY4AafC9JS4"),
    videoTitle: "Volaly for bars — 2 minute demo",
    stats: [
      { value: "+2.4x", label: "Table reservations" },
      { value: "Daily", label: "Event content" },
      { value: "24/7", label: "Guest replies" },
    ],
    pains: [
      "Every event needs new promo content",
      "Table requests come in via DM at peak hours",
      "Walk-in traffic depends on being found online",
    ],
    solutions: [
      { title: "Event promos", desc: "Flyers, reels and posts for every night, generated automatically." },
      { title: "Table booking", desc: "Reservations confirmed in chat without staff involvement." },
      { title: "Guest list & VIP", desc: "Capture and organise regulars and VIP guests in your CRM." },
      { title: "Local discovery", desc: "Show up on Google and social when people search nightlife nearby." },
    ],
  },
];

export const industryBySlug = Object.fromEntries(
  industryPages.map((i) => [i.slug, i]),
) as Record<string, IndustryPageData>;
