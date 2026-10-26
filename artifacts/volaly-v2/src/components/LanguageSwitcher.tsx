import { useState } from "react";
import { useRouter } from "@tanstack/react-router";
import { Globe } from "lucide-react";
import {
  LOCALE_LABELS,
  SUPPORTED_LOCALES,
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
        aria-label="Change language"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-white/50 hover:text-foreground"
      >
        <Globe className="h-4 w-4" />
        <span className="uppercase">{currentLocale}</span>
      </button>

      {open && (
        <div
          role="menu"
          className="glass-nav absolute right-0 top-full mt-2 min-w-[140px] rounded-2xl border border-white/80 p-1.5 shadow-soft"
        >
          {SUPPORTED_LOCALES.map((locale) => (
            <button
              key={locale}
              type="button"
              role="menuitem"
              onClick={() => selectLocale(locale)}
              className={`block w-full rounded-xl px-3 py-2 text-left text-sm font-medium transition-colors hover:bg-white/70 ${
                locale === currentLocale
                  ? "text-foreground"
                  : "text-muted-foreground"
              }`}
            >
              {LOCALE_LABELS[locale]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
