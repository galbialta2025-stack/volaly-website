import { createFileRoute, redirect } from "@tanstack/react-router";
import {
  detectBrowserLocale,
  getStoredLocale,
} from "@/lib/i18n-config";

// Bare "/" has no language of its own — it only decides which /$lang/ to
// send the visitor to: their previously chosen language (localStorage),
// else their browser's preferred language if we support it, else English.
export const Route = createFileRoute("/")({
  beforeLoad: () => {
    const locale = getStoredLocale() ?? detectBrowserLocale();
    throw redirect({ to: "/$lang", params: { lang: locale }, replace: true });
  },
  component: () => null,
});
