import { useTranslation } from "react-i18next";
import { platforms } from "@/lib/site-data";

export function TrustBar() {
  const { t } = useTranslation("home");
  const row = [...platforms, ...platforms];
  return (
    <section className="relative overflow-hidden border-y border-border/60 bg-background/60 py-12">
      <p className="mb-8 text-center text-sm font-medium text-muted-foreground">
        {t("trustBar.text")}
      </p>
      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <div className="flex w-max animate-marquee items-center gap-16 pr-16">
          {row.map((p, i) => (
            <span
              key={`${p}-${i}`}
              className="whitespace-nowrap text-2xl font-bold tracking-tight text-foreground/45 transition-colors hover:text-foreground"
            >
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
