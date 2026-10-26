import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import { DEFAULT_LOCALE, SUPPORTED_LOCALES } from '@/lib/i18n-config';

import enCommon from '@/locales/en/common.json';
import deCommon from '@/locales/de/common.json';
import frCommon from '@/locales/fr/common.json';
import esCommon from '@/locales/es/common.json';
import viCommon from '@/locales/vi/common.json';
import thCommon from '@/locales/th/common.json';

import enHome from '@/locales/en/home.json';
import deHome from '@/locales/de/home.json';
import frHome from '@/locales/fr/home.json';
import esHome from '@/locales/es/home.json';
import viHome from '@/locales/vi/home.json';
import thHome from '@/locales/th/home.json';

import enPricing from '@/locales/en/pricing.json';
import dePricing from '@/locales/de/pricing.json';
import frPricing from '@/locales/fr/pricing.json';
import esPricing from '@/locales/es/pricing.json';
import viPricing from '@/locales/vi/pricing.json';
import thPricing from '@/locales/th/pricing.json';

import enFaq from '@/locales/en/faq.json';
import deFaq from '@/locales/de/faq.json';
import frFaq from '@/locales/fr/faq.json';
import esFaq from '@/locales/es/faq.json';
import viFaq from '@/locales/vi/faq.json';
import thFaq from '@/locales/th/faq.json';

import enIndustries from '@/locales/en/industries.json';
import deIndustries from '@/locales/de/industries.json';
import frIndustries from '@/locales/fr/industries.json';
import esIndustries from '@/locales/es/industries.json';
import viIndustries from '@/locales/vi/industries.json';
import thIndustries from '@/locales/th/industries.json';

import enIndustryFaqs from '@/locales/en/industry-faqs.json';
import deIndustryFaqs from '@/locales/de/industry-faqs.json';
import frIndustryFaqs from '@/locales/fr/industry-faqs.json';
import esIndustryFaqs from '@/locales/es/industry-faqs.json';
import viIndustryFaqs from '@/locales/vi/industry-faqs.json';
import thIndustryFaqs from '@/locales/th/industry-faqs.json';

import enDemo from '@/locales/en/demo.json';
import deDemo from '@/locales/de/demo.json';
import frDemo from '@/locales/fr/demo.json';
import esDemo from '@/locales/es/demo.json';
import viDemo from '@/locales/vi/demo.json';
import thDemo from '@/locales/th/demo.json';

import enContact from '@/locales/en/contact.json';
import deContact from '@/locales/de/contact.json';
import frContact from '@/locales/fr/contact.json';
import esContact from '@/locales/es/contact.json';
import viContact from '@/locales/vi/contact.json';
import thContact from '@/locales/th/contact.json';

import enAuth from '@/locales/en/auth.json';
import deAuth from '@/locales/de/auth.json';
import frAuth from '@/locales/fr/auth.json';
import esAuth from '@/locales/es/auth.json';
import viAuth from '@/locales/vi/auth.json';
import thAuth from '@/locales/th/auth.json';

// `common` (nav + shared strings) and `home` (homepage sections) are live in
// all 6 languages. Remaining per-page namespaces are added incrementally as
// each page's content is translated (Step 2, page by page).
const resources = {
  en: { common: enCommon, home: enHome, pricing: enPricing, faq: enFaq, industries: enIndustries, 'industry-faqs': enIndustryFaqs, demo: enDemo, contact: enContact, auth: enAuth },
  de: { common: deCommon, home: deHome, pricing: dePricing, faq: deFaq, industries: deIndustries, 'industry-faqs': deIndustryFaqs, demo: deDemo, contact: deContact, auth: deAuth },
  fr: { common: frCommon, home: frHome, pricing: frPricing, faq: frFaq, industries: frIndustries, 'industry-faqs': frIndustryFaqs, demo: frDemo, contact: frContact, auth: frAuth },
  es: { common: esCommon, home: esHome, pricing: esPricing, faq: esFaq, industries: esIndustries, 'industry-faqs': esIndustryFaqs, demo: esDemo, contact: esContact, auth: esAuth },
  vi: { common: viCommon, home: viHome, pricing: viPricing, faq: viFaq, industries: viIndustries, 'industry-faqs': viIndustryFaqs, demo: viDemo, contact: viContact, auth: viAuth },
  th: { common: thCommon, home: thHome, pricing: thPricing, faq: thFaq, industries: thIndustries, 'industry-faqs': thIndustryFaqs, demo: thDemo, contact: thContact, auth: thAuth },
};

void i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    supportedLngs: SUPPORTED_LOCALES,
    fallbackLng: DEFAULT_LOCALE,
    defaultNS: 'common',
    ns: ['common', 'home', 'pricing', 'faq', 'industries', 'industry-faqs', 'demo', 'contact', 'auth'],
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
