// Single source of truth for which languages the site supports.
// Adding a language here is what makes the /$lang/ route segment accept it
// and makes it show up in the Navbar language switcher.
export const SUPPORTED_LOCALES = ['en', 'de', 'th', 'fr', 'es', 'vi'] as const;

export type Locale = (typeof SUPPORTED_LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'en';

export const LOCALE_LABELS: Record<Locale, string> = {
  en: 'English',
  de: 'Deutsch',
  th: 'ไทย',
  fr: 'Français',
  es: 'Español',
  vi: 'Tiếng Việt',
};

// ISO 3166-1 alpha-2 country code per locale, used to fetch a flag image
// from flagcdn.com. Unicode flag emoji are avoided — many platforms (e.g.
// Windows, most Linux desktops) have no flag glyphs and fall back to
// showing the raw two-letter code in a box instead of an actual flag.
export const LOCALE_COUNTRY: Record<Locale, string> = {
  en: 'us',
  de: 'de',
  th: 'th',
  fr: 'fr',
  es: 'es',
  vi: 'vn',
};

export function flagUrl(locale: Locale, width: 20 | 40 | 80 = 40): string {
  return `https://flagcdn.com/w${width}/${LOCALE_COUNTRY[locale]}.png`;
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
