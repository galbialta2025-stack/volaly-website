import { createFileRoute, notFound, Outlet } from "@tanstack/react-router";
import { isSupportedLocale, storeLocale } from "@/lib/i18n-config";
import i18next from "@/lib/i18n";

export const Route = createFileRoute("/$lang")({
  beforeLoad: ({ params }) => {
    if (!isSupportedLocale(params.lang)) {
      throw notFound();
    }
    storeLocale(params.lang);
    if (i18next.language !== params.lang) {
      void i18next.changeLanguage(params.lang);
    }
  },
  component: () => <Outlet />,
});
