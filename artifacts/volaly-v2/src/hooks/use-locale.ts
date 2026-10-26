import { useLocation } from '@tanstack/react-router';
import { DEFAULT_LOCALE, isSupportedLocale, type Locale } from '@/lib/i18n-config';

// Reads the active locale straight from the URL's first path segment.
// Works anywhere in the tree (including __root, which renders above the
// $lang route) without depending on a specific route match.
export function useCurrentLocale(): Locale {
  const location = useLocation();
  const segment = location.pathname.split('/')[1];
  return isSupportedLocale(segment) ? segment : DEFAULT_LOCALE;
}
