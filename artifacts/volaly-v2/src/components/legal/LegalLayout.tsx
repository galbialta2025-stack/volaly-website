import type { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { Languages } from "lucide-react";
import { PageHeader } from "@/components/sections/PageHeader";
import { SEO } from "@/components/SEO";
import { useCurrentLocale } from "@/hooks/use-locale";

// Shared shell for all legal documents. Legal documents are maintained in
// English only; visitors on other language versions see a short notice.
export function LegalLayout({
  slug,
  title,
  description,
  subtitle,
  children,
}: {
  slug: string;
  title: string;
  description: string;
  subtitle: string;
  children: ReactNode;
}) {
  const { t } = useTranslation();
  const locale = useCurrentLocale();

  return (
    <>
      <SEO
        title={`${title} — Volaly`}
        description={description}
        canonical={`https://volaly.com/${locale}/${slug}`}
      />
      <PageHeader eyebrow="Legal" title={title} subtitle={subtitle} />
      <section className="pb-24">
        <div className="mx-auto max-w-3xl space-y-10 px-6 text-muted-foreground" lang="en">
          {locale !== "en" && (
            <p
              lang={locale}
              className="flex items-start gap-2 rounded-2xl border border-border/60 bg-muted/40 px-4 py-3 text-sm"
            >
              <Languages className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange" />
              {t("legal.englishOnly")}
            </p>
          )}
          {children}
        </div>
      </section>
    </>
  );
}

export function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="space-y-3">
      <h2 className="text-lg font-semibold text-foreground">{title}</h2>
      {children}
    </div>
  );
}

export function LegalList({ children }: { children: ReactNode }) {
  return <ul className="ml-4 list-disc space-y-1.5">{children}</ul>;
}

export function LegalTable({ head, rows }: { head: string[]; rows: ReactNode[][] }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-border/60">
      <table className="w-full min-w-[560px] text-left text-sm">
        <thead className="bg-muted/40 text-foreground">
          <tr>
            {head.map((h) => (
              <th key={h} className="px-4 py-2.5 font-semibold">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-t border-border/40 align-top">
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-2.5">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
