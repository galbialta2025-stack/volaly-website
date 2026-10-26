import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { useIndustryPages } from "@/lib/industries-data";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "./shared";
import { Stagger, StaggerItem, Reveal } from "@/components/Motion";
import { openDemo } from "@/lib/demo";
import { useCurrentLocale } from "@/hooks/use-locale";

export function IndustriesGrid() {
  const { t } = useTranslation("home");
  const locale = useCurrentLocale();
  const outcomes = t("industries.outcomes", { returnObjects: true }) as Record<string, string>;
  const industryPages = useIndustryPages();

  return (
    <section id="industries" className="relative scroll-mt-24 overflow-hidden bg-muted/20 py-28">
      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}
        <SectionHeading
          eyebrow={t("industries.eyebrow")}
          title={t("industries.title")}
          subtitle={t("industries.subtitle")}
        />

        {/* Industry cards — 4-col desktop, 2-col tablet, 1-col mobile */}
        <Stagger
          className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
          gap={0.05}
        >
          {industryPages.map((ind) => (
            <StaggerItem key={ind.slug}>
              <Link to={`/$lang/${ind.slug}` as "/$lang/bar"} params={{ lang: locale }} className="group block h-full">
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="relative flex h-full flex-col overflow-hidden rounded-[22px] border border-border/60 bg-background/80 p-6 backdrop-blur transition-all duration-300 hover:border-brand-orange/35 hover:shadow-[0_12px_40px_rgba(0,0,0,0.10)]"
                >
                  {/* Hover glow blob */}
                  <div className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full bg-gradient-to-br from-brand-orange/20 to-brand-blue/20 opacity-0 blur-2xl transition-opacity duration-400 group-hover:opacity-100" />

                  {/* Icon */}
                  <div className="relative z-10 grid h-11 w-11 place-items-center rounded-[14px] bg-gradient-to-br from-brand-orange/15 to-brand-blue/15 text-brand-orange transition-transform duration-300 group-hover:scale-110">
                    <ind.icon className="h-5 w-5" />
                  </div>

                  {/* Text */}
                  <div className="relative z-10 mt-5 flex-1">
                    <h3 className="text-sm font-extrabold text-foreground">{ind.name}</h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                      {outcomes[ind.slug] ?? ind.subtitle}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="relative z-10 mt-4 inline-flex items-center gap-1 text-xs font-semibold text-brand-orange/70 transition-colors duration-200 group-hover:text-brand-orange">
                    {t("industries.learnMore")}
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </div>
                </motion.div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Bottom statement */}
        <Reveal delay={0.1}>
          <div className="mt-16 flex flex-col items-center gap-1 text-center">
            <p className="text-2xl font-black tracking-tight text-foreground sm:text-3xl">
              {t("industries.bottomPre")}
              <span className="gradient-text-multi">{t("industries.bottomHighlight")}</span>
              <span className="block">{t("industries.bottomLine2")}</span>
            </p>
          </div>
        </Reveal>

        {/* CTA */}
        <Reveal delay={0.15}>
          <div className="mt-8 flex justify-center">
            <Button variant="heroOutline" size="lg" onClick={openDemo}>
              {t("industries.cta")} <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
