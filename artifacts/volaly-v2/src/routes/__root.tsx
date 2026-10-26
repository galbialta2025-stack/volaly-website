import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useLocation,
} from "@tanstack/react-router";
import { useEffect } from "react";

import "../lib/i18n";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { VideoModal } from "../components/VideoModal";
import { JsonLd } from "../components/JsonLd";
import { useCurrentLocale } from "../hooks/use-locale";
import { LOCALE_BCP47, SUPPORTED_LOCALES } from "../lib/i18n-config";

const SITE_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://volaly.com/#organization",
      name: "Volaly",
      url: "https://volaly.com",
      logo: {
        "@type": "ImageObject",
        url: "https://volaly.com/volaly-logo.png",
        width: 512,
        height: 512,
      },
      description:
        "Volaly is the AI Business Growth Platform. Create content, attract customers, convert enquiries and grow revenue automatically across Google, LINE, WhatsApp and more.",
      sameAs: [
        "https://www.facebook.com/profile.php?id=61592148647140",
        "https://www.instagram.com/volal.y/",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://volaly.com/#website",
      name: "Volaly",
      url: "https://volaly.com",
      publisher: { "@id": "https://volaly.com/#organization" },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://volaly.com/?q={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

function NotFoundComponent() {
  const locale = useCurrentLocale();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/$lang"
            params={{ lang: locale }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  const locale = useCurrentLocale();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href={`/${locale}`}
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const locale = useCurrentLocale();
  const { pathname } = useLocation();

  useEffect(() => {
    document.documentElement.lang = LOCALE_BCP47[locale];
  }, [locale]);

  useEffect(() => {
    // hreflang alternates: one per supported locale for the current path,
    // plus x-default pointing at the English version. Basic/generic for
    // Step 1 — refined per-page once full content translation (Step 2) lands.
    const pathWithoutLocale = pathname.replace(/^\/[a-z]{2}(\/|$)/, "/");
    const created: HTMLLinkElement[] = [];

    for (const loc of SUPPORTED_LOCALES) {
      const link = document.createElement("link");
      link.rel = "alternate";
      link.hreflang = LOCALE_BCP47[loc];
      link.href = `https://volaly.com/${loc}${pathWithoutLocale}`;
      document.head.appendChild(link);
      created.push(link);
    }
    const defaultLink = document.createElement("link");
    defaultLink.rel = "alternate";
    defaultLink.hreflang = "x-default";
    defaultLink.href = `https://volaly.com/en${pathWithoutLocale}`;
    document.head.appendChild(defaultLink);
    created.push(defaultLink);

    return () => {
      created.forEach((el) => el.remove());
    };
  }, [pathname]);

  return (
    <QueryClientProvider client={queryClient}>
      <JsonLd schema={SITE_SCHEMA} />
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1" id="main-content">
          <Outlet />
        </main>
        <Footer />
        <VideoModal />
      </div>
    </QueryClientProvider>
  );
}
