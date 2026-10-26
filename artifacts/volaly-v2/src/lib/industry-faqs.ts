import { useTranslation } from "react-i18next";

export type Faq = { q: string; a: string };

/** Returns the translated FAQ list for a given industry slug, from the "industry-faqs" namespace. */
export function useIndustryFaqs(slug: string): Faq[] {
  const { t } = useTranslation("industry-faqs");
  return t(slug, { returnObjects: true, defaultValue: [] }) as Faq[];
}

/** Related industry slugs for internal linking */
export const relatedIndustries: Record<string, string[]> = {
  hotel: ["restaurant", "bar", "car-rental"],
  restaurant: ["hotel", "bar", "gym"],
  bar: ["restaurant", "hotel", "social-media-influencer"],
  gym: ["dentist", "medical-beauty"],
  dentist: ["medical-beauty", "gym"],
  "medical-beauty": ["dentist", "gym"],
  "real-estate": ["visa-agency"],
  "visa-agency": ["real-estate", "medical-beauty"],
  "car-rental": ["hotel", "restaurant"],
  "social-media-influencer": ["real-estate", "bar"],
};
