import { useTranslation } from "react-i18next";
import {
  Dumbbell,
  Smile,
  Sparkles,
  FileCheck2,
  Home,
  Megaphone,
  Car,
  Building2,
  Martini,
  UtensilsCrossed,
  type LucideIcon,
} from "lucide-react";

export type IndustryStat = { value: string; label: string };
export type IndustrySolution = { title: string; desc: string };

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
  stats: IndustryStat[];
  pains: string[];
  solutions: IndustrySolution[];
  disabled?: boolean;
};

/**
 * Visual / non-translatable metadata only (icon, demo video, enabled flag).
 * All text content (name, headline, stats labels, pains, solutions, …)
 * lives in src/locales/<locale>/industries.json under "industries.<slug>"
 * and is merged in at render time via useIndustryPages() / useIndustryData()
 * below, so every industry page is locale-aware.
 */
type IndustryMeta = {
  slug: string;
  icon: LucideIcon;
  videoUrl: string;
  disabled?: boolean;
};

const yt = (id: string) => `https://www.youtube-nocookie.com/embed/${id}?rel=0&modestbranding=1`;

const _allIndustryMeta: IndustryMeta[] = [
  { slug: "gym", icon: Dumbbell, videoUrl: "" },
  { slug: "dentist", icon: Smile, videoUrl: "" },
  { slug: "medical-beauty", icon: Sparkles, videoUrl: "" },
  { slug: "visa-agency", icon: FileCheck2, videoUrl: "" },
  { slug: "real-estate", icon: Home, videoUrl: "" },
  { slug: "social-media-influencer", icon: Megaphone, videoUrl: "", disabled: true },
  { slug: "car-rental", icon: Car, videoUrl: "" },
  { slug: "hotel", icon: Building2, videoUrl: "" },
  { slug: "bar", icon: Martini, videoUrl: yt("qY4AafC9JS4") },
  { slug: "restaurant", icon: UtensilsCrossed, videoUrl: "" },
];

export const industryMetaList = _allIndustryMeta.filter((i) => !i.disabled);

const industryMetaBySlug = Object.fromEntries(
  _allIndustryMeta.map((i) => [i.slug, i]),
) as Record<string, IndustryMeta>;

type IndustryContent = Omit<IndustryPageData, "slug" | "icon" | "videoUrl" | "disabled">;

function buildIndustryData(
  getContent: (slug: string) => IndustryContent,
  meta: IndustryMeta,
): IndustryPageData {
  return {
    ...getContent(meta.slug),
    slug: meta.slug,
    icon: meta.icon,
    videoUrl: meta.videoUrl,
    disabled: meta.disabled,
  };
}

/** All enabled industry pages, with translated content for the active locale. */
export function useIndustryPages(): IndustryPageData[] {
  const { t } = useTranslation("industries");
  const getContent = (slug: string) =>
    t(`industries.${slug}`, { returnObjects: true }) as IndustryContent;
  return industryMetaList.map((meta) => buildIndustryData(getContent, meta));
}

/** Single industry page's data, translated for the active locale. */
export function useIndustryData(slug: string): IndustryPageData {
  const { t } = useTranslation("industries");
  const getContent = (s: string) =>
    t(`industries.${s}`, { returnObjects: true }) as IndustryContent;
  return buildIndustryData(getContent, industryMetaBySlug[slug]);
}
