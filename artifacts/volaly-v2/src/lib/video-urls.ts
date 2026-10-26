import type { Locale } from '@/lib/i18n-config';

// The demo video exists (or will exist) per language. Until real IDs for
// de/th/fr/es/vi are supplied, every locale falls back to the English video
// rather than guessing a placeholder ID.
const DEFAULT_VIDEO_ID = 'RNKP-v0RxsM';

const DEMO_VIDEO_IDS: Partial<Record<Locale, string>> = {
  en: DEFAULT_VIDEO_ID,
  // de: "<pending>",
  // th: "<pending>",
  // fr: "<pending>",
  // es: "<pending>",
  // vi: "<pending>",
};

export function getDemoVideoId(locale: Locale): string {
  return DEMO_VIDEO_IDS[locale] ?? DEFAULT_VIDEO_ID;
}

interface EmbedOptions {
  autoplay?: boolean;
  modestbranding?: boolean;
}

export function getDemoVideoEmbedUrl(
  locale: Locale,
  options: EmbedOptions = {},
): string {
  const id = getDemoVideoId(locale);
  const params = new URLSearchParams({ rel: '0' });
  if (options.autoplay) params.set('autoplay', '1');
  if (options.modestbranding) params.set('modestbranding', '1');
  return `https://www.youtube-nocookie.com/embed/${id}?${params.toString()}`;
}

export function getDemoVideoPosterUrl(locale: Locale): string {
  const id = getDemoVideoId(locale);
  return `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;
}
