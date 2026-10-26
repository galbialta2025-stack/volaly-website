import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import { DEFAULT_LOCALE, SUPPORTED_LOCALES } from '@/lib/i18n-config';

import enCommon from '@/locales/en/common.json';

// Only `common` (nav + shared CTA strings) ships in Step 1, as the
// end-to-end proof that routing, detection and switching work. Per-page
// copy (84 section components) is extracted namespace-by-namespace in
// Step 2, alongside the actual translations.
const resources = {
  en: {
    common: enCommon,
  },
};

void i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    supportedLngs: SUPPORTED_LOCALES,
    fallbackLng: DEFAULT_LOCALE,
    defaultNS: 'common',
    ns: ['common'],
    interpolation: {
      escapeValue: false,
    },
    detection: {
      // The $lang route segment is the single source of truth for the
      // active language; the browser detector only seeds the very first
      // choice before a route has set anything.
      order: ['localStorage', 'navigator'],
      lookupLocalStorage: 'volaly-locale',
      caches: ['localStorage'],
    },
  });

export default i18next;
