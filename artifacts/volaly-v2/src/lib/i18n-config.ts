// All languages that have translations in /src/locales.
export const ALL_LOCALES = ['en', 'de', 'th', 'fr', 'es', 'vi'] as const;

export type Locale = (typeof ALL_LOCALES)[number];

// Languages currently live on the site (routing, language switcher, hreflang).
// Current market focus is Thailand, so only English and Thai are active.
// To re-enable a language (e.g. for the DACH launch), add it here — its
// translations are already in place. Links to inactive languages are
// redirected to the English version (see routes/$lang/route.tsx).
export const SUPPORTED_LOCALES: readonly Locale[] = ['en', 'th'];

export function isKnownLocale(value: string | undefined): value is Locale {
  return !!value && (ALL_LOCALES as readonly string[]).includes(value);
}

export const DEFAULT_LOCALE: Locale = 'en';

export const LOCALE_LABELS: Record<Locale, string> = {
  en: 'English',
  de: 'Deutsch',
  th: 'ไทย',
  fr: 'Français',
  es: 'Español',
  vi: 'Tiếng Việt',
};

// ISO 3166-1 alpha-2 country code per locale, used to pick a self-hosted flag
// SVG from /public/flags (source: flag-icons, MIT — see public/flags/LICENSE.txt).
// Flags are self-hosted so no third-party request happens on page load.
// Unicode flag emoji are avoided — many platforms (e.g. Windows, most Linux
// desktops) have no flag glyphs and show the raw two-letter code instead.
export const LOCALE_COUNTRY: Record<Locale, string> = {
  en: 'us',
  de: 'de',
  th: 'th',
  fr: 'fr',
  es: 'es',
  vi: 'vn',
};

export function flagUrl(locale: Locale): string {
  return `/flags/${LOCALE_COUNTRY[locale]}.svg`;
}

// BCP 47 tags used for <html lang>, hreflang and og:locale.
export const LOCALE_BCP47: Record<Locale, string> = {
  en: 'en',
  de: 'de',
  th: 'th',
  fr: 'fr',
  es: 'es',
  vi: 'vi',
};

export function isSupportedLocale(value: string | undefined): value is Locale {
  return !!value && (SUPPORTED_LOCALES as readonly string[]).includes(value);
}

const STORAGE_KEY = 'volaly-locale';

export function getStoredLocale(): Locale | null {
  if (typeof window === 'undefined') return null;
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return isSupportedLocale(stored ?? undefined) ? (stored as Locale) : null;
  } catch {
    return null;
  }
}

export function storeLocale(locale: Locale) {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(STORAGE_KEY, locale);
  } catch {
    // Ignore write failures (private browsing, storage disabled, etc.)
  }
}

// Picks the best supported locale for a browser's language preference list,
// falling back to DEFAULT_LOCALE when nothing matches.
export function detectBrowserLocale(
  languages: readonly string[] = typeof navigator !== 'undefined' ? navigator.languages : [],
): Locale {
  for (const lang of languages) {
    const short = lang.slice(0, 2).toLowerCase();
    if (isSupportedLocale(short)) return short;
  }
  return DEFAULT_LOCALE;
}
