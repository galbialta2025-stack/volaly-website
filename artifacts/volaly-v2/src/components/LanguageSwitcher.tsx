import { useState } from "react";
import { useRouter } from "@tanstack/react-router";
import {
  LOCALE_LABELS,
  SUPPORTED_LOCALES,
  flagUrl,
  isSupportedLocale,
  storeLocale,
  type Locale,
} from "@/lib/i18n-config";

// Swaps the leading /$lang segment of the current path and keeps the rest
// (e.g. /en/hotel -> /de/hotel), so switching language never drops the page.
function pathWithLocale(pathname: string, locale: Locale): string {
  const segments = pathname.split("/");
  const current = segments[1];
  if (isSupportedLocale(current)) {
    segments[1] = locale;
  } else {
    segments.splice(1, 0, locale);
  }
  return segments.join("/") || `/${locale}`;
}

export function LanguageSwitcher({ currentLocale }: { currentLocale: Locale }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  function selectLocale(locale: Locale) {
    setOpen(false);
    if (locale === currentLocale) return;
    storeLocale(locale);
    const target = pathWithLocale(window.location.pathname, locale);
    void router.navigate({ to: target });
  }

  return (
    <div className="relative">
      <button
        type="button"
        aria-label={`Change language (current: ${LOCALE_LABELS[currentLocale]})`}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex items-center justify-center rounded-full p-1.5 transition-colors hover:bg-white/50"
      >
        <img
          src={flagUrl(currentLocale)}
          alt={LOCALE_LABELS[currentLocale]}
          className="h-5 w-7 rounded-[3px] object-cover shadow-sm"
        />
      </button>

      {open && (
        <div
          role="menu"
          className="glass-nav absolute right-0 top-full mt-2 flex items-center gap-1.5 rounded-2xl border border-white/80 p-1.5 shadow-soft"
        >
          {SUPPORTED_LOCALES.map((locale) => (
            <button
              key={locale}
              type="button"
              role="menuitem"
              aria-label={LOCALE_LABELS[locale]}
              onClick={() => selectLocale(locale)}
              className={`flex items-center justify-center rounded-xl p-1.5 transition-colors hover:bg-white/70 ${
                locale === currentLocale ? "ring-2 ring-brand-orange/60" : ""
              }`}
            >
              <img
                src={flagUrl(locale)}
                alt={LOCALE_LABELS[locale]}
                className="h-5 w-7 rounded-[3px] object-cover shadow-sm"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
