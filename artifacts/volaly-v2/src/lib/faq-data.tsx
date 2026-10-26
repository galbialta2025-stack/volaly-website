import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import type { Locale } from "@/lib/i18n-config";
import i18next from "@/lib/i18n";

export interface FaqItem {
  q: string;
  a: ReactNode;
}

type FaqPart = { text?: string; link?: string };
type RawFaqItem = { q: string; parts: FaqPart[] };

/**
 * Builds the FAQ list for the given locale so internal links keep the
 * /$lang/ prefix. Note: the "Revenue Suite" link below points at
 * /revenue-suite, which has no matching route in this app (pre-existing,
 * unrelated to the i18n routing work) — left as-is rather than invented.
 *
 * Translated copy lives in src/locales/<locale>/faq.json under "items",
 * each with a "parts" array mixing plain text segments and internal-link
 * segments (so the Link components stay typed and locale-prefixed while
 * the surrounding copy is fully translated).
 */
export function getFaqs(locale: Locale): FaqItem[] {
  const to = (slug: string) => ({
    to: `/$lang/${slug}` as "/$lang/bar",
    params: { lang: locale },
  });

  const items = i18next.getFixedT(locale, "faq")("items", {
    returnObjects: true,
  }) as RawFaqItem[];

  return items.map((item) => ({
    q: item.q,
    a: (
      <>
        {item.parts.map((part, i) =>
          part.link ? (
            <Link
              key={i}
              {...to(part.link)}
              className="text-brand-orange underline-offset-2 hover:underline"
            >
              {part.text}
            </Link>
          ) : (
            <span key={i}>{part.text}</span>
          )
        )}
      </>
    ),
  }));
}
