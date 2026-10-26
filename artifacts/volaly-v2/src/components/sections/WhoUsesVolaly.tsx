import { User, Building2, Check, ArrowRight, Layers } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "./shared";
import { Reveal } from "@/components/Motion";
import { openDemo } from "@/lib/demo";

const audienceMeta = [
  {
    icon: User,
    gradient: "from-brand-purple/10 to-brand-blue/10",
    iconGradient: "from-brand-purple to-brand-blue",
    iconGlow: "shadow-[0_8px_28px_oklch(0.55_0.28_305/0.30)]",
    border: "hover:border-brand-purple/40",
  },
  {
    icon: Building2,
    gradient: "from-brand-orange/10 to-brand-pink/10",
    iconGradient: "from-brand-orange to-brand-pink",
    iconGlow: "shadow-[0_8px_28px_oklch(0.72_0.2_48/0.30)]",
    border: "hover:border-brand-orange/40",
  },
];

interface Audience {
  eyebrow: string;
  desc: string;
  features: string[];
  cta: string;
}

export function WhoUsesVolaly() {
  const { t } = useTranslation("home");
  const reduce = useReducedMotion();
  const audiences = t("whoUses.audiences", { returnObjects: true }) as Audience[];

  return (
    <>
      <section className="relative scroll-mt-24 overflow-hidden py-32">
        <div className="relative mx-auto max-w-7xl px-6">

          {/* Heading */}
          <SectionHeading
            eyebrow={t("whoUses.eyebrow")}
            title={t("whoUses.title")}
            subtitle={t("whoUses.subtitle")}
          />

          {/* Two audience cards */}
          <div className="mt-16 grid gap-6 sm:grid-cols-2">
            {audiences.map((a, i) => {
              const meta = audienceMeta[i];
              return (
                <Reveal key={a.eyebrow} delay={i * 0.1}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.22, ease: "easeOut" }}
                    className={`group flex h-full flex-col rounded-[28px] border border-border/60 bg-gradient-to-br ${meta.gradient} p-8 transition-all duration-300 ${meta.border} hover:shadow-[0_20px_60px_rgba(0,0,0,0.10)]`}
                  >
                    {/* Icon */}
                    <div className={`grid h-14 w-14 place-items-center rounded-[18px] bg-gradient-to-br ${meta.iconGradient} ${meta.iconGlow} text-white transition-transform duration-300 group-hover:scale-105`}>
                      <meta.icon className="h-7 w-7" strokeWidth={1.6} />
                    </div>

                    {/* Copy */}
                    <h3 className="mt-6 text-2xl font-extrabold tracking-tight text-foreground">
                      {a.eyebrow}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                      {a.desc}
                    </p>

                    {/* Feature tags */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {a.features.map((f) => (
                        <span
                          key={f}
                          className="inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-background/60 px-3 py-1 text-xs font-semibold text-foreground/80 backdrop-blur"
                        >
                          <Check className="h-3 w-3 text-brand-green" />
                          {f}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="mt-8">
                      <Button variant="heroOutline" size="lg" onClick={openDemo} className="w-full sm:w-auto">
                        {a.cta} <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                      </Button>
                    </div>
                  </motion.div>
                </Reveal>
              );
            })}
          </div>

          {/* Connecting statement */}
          <Reveal delay={0.15}>
            <div className="mt-16 flex flex-col items-center gap-5 rounded-[24px] border border-border/50 bg-muted/30 px-8 py-10 text-center">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-brand-orange/20 to-brand-purple/20">
                <Layers className="h-5 w-5 text-foreground/60" />
              </div>
              <h3 className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
                {t("whoUses.connecting.titlePre")}
                <span className="gradient-text-multi">{t("whoUses.connecting.titleHighlight")}</span>
              </h3>
              <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
                {t("whoUses.connecting.subtitle")}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Animated divider into Industries */}
      <Reveal delay={0}>
        <div className="relative mx-auto max-w-7xl px-6 pb-4">
          <div className="relative flex items-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
            <motion.div
              animate={reduce ? {} : { opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="flex items-center gap-2 rounded-full border border-border/60 bg-background px-4 py-1.5"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-brand-orange to-brand-purple" />
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                {t("whoUses.dividerLabel")}
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-brand-purple to-brand-blue" />
            </motion.div>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
          </div>
        </div>
      </Reveal>
    </>
  );
}
