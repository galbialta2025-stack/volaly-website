import { createFileRoute, notFound, Outlet, redirect } from "@tanstack/react-router";
import { DEFAULT_LOCALE, isKnownLocale, isSupportedLocale, storeLocale } from "@/lib/i18n-config";
import i18next from "@/lib/i18n";

export const Route = createFileRoute("/$lang")({
  beforeLoad: ({ params, location }) => {
    if (!isSupportedLocale(params.lang)) {
      // Translated but currently inactive language (e.g. /de/...): send the
      // visitor to the same page in the default language instead of a 404.
      if (isKnownLocale(params.lang)) {
        const rest = location.href.slice(params.lang.length + 1);
        throw redirect({ href: `/${DEFAULT_LOCALE}${rest || "/"}`, replace: true });
      }
      throw notFound();
    }
    storeLocale(params.lang);
    if (i18next.language !== params.lang) {
      void i18next.changeLanguage(params.lang);
    }
  },
  component: () => <Outlet />,
});
