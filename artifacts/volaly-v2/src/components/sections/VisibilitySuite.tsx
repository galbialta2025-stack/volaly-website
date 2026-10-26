import {
  Clapperboard,
  Send,
  Share2,
  Search,
  Mail,
  BarChart3,
  Upload,
  Sparkles,
  ArrowRight,
  ArrowDown,
  X,
  Check,
  Globe,
  Users,
  TrendingUp,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "./shared";
import { Stagger, StaggerItem, Reveal } from "@/components/Motion";
import { openDemo } from "@/lib/demo";

/* ── Visual metadata kept in code; copy comes from i18n ── */
const cardMeta = [
  { icon: Clapperboard, accent: "from-brand-purple/20 to-brand-blue/20", iconColor: "text-brand-purple" },
  { icon: Send, accent: "from-brand-blue/20 to-brand-cyan/20", iconColor: "text-brand-blue" },
  { icon: Share2, accent: "from-brand-pink/20 to-brand-purple/20", iconColor: "text-brand-pink" },
  { icon: Search, accent: "from-brand-green/20 to-brand-cyan/20", iconColor: "text-brand-green" },
  { icon: Mail, accent: "from-brand-orange/20 to-brand-yellow/20", iconColor: "text-brand-orange" },
  { icon: BarChart3, accent: "from-brand-blue/20 to-brand-purple/20", iconColor: "text-brand-blue" },
];

const flowStepMeta = [
  { key: "upload", icon: Upload, gradient: "from-brand-orange to-brand-pink" },
  { key: "ai", icon: Sparkles, gradient: "from-brand-purple to-brand-blue" },
  { key: "shorts", icon: Clapperboard, gradient: "from-brand-blue to-brand-cyan" },
  { key: "social", icon: Share2, gradient: "from-brand-pink to-brand-purple" },
  { key: "blog", icon: Search, gradient: "from-brand-green to-brand-cyan" },
  { key: "newsletter", icon: Mail, gradient: "from-brand-orange to-brand-yellow" },
  { key: "platforms", icon: Globe, gradient: "from-brand-blue to-brand-purple" },
  { key: "growth", icon: Users, gradient: "from-brand-green to-brand-blue", highlight: true },
];

interface VisCard {
  title: string;
  desc: string;
}

export function VisibilitySuite() {
  const { t } = useTranslation("home");
  const reduce = useReducedMotion();

  const cards = t("visibility.cards", { returnObjects: true }) as VisCard[];
  const flowSteps = t("visibility.flowSteps", { returnObjects: true }) as Record<string, string>;
  const withoutVolaly = t("visibility.comparison.without", { returnObjects: true }) as string[];
  const withVolaly = t("visibility.comparison.with", { returnObjects: true }) as string[];

  return (
    <section id="visibility" className="relative scroll-mt-24 overflow-hidden py-32">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background via-brand-blue/[0.03] to-background" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}
        <SectionHeading
          eyebrow={t("visibility.eyebrow")}
          title={<>{t("visibility.titlePre")}<span className="gradient-text-multi">{t("visibility.titleHighlight")}</span></>}
          subtitle={t("visibility.subtitle")}
        />

        {/* Feature cards */}
        <Stagger className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" gap={0.07}>
          {cards.map((c, i) => {
            const meta = cardMeta[i];
            return (
              <StaggerItem key={c.title}>
                <motion.div
                  whileHover={{ y: -4, scale: 1.01 }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                  className={`glass-card group h-full rounded-[22px] bg-gradient-to-br ${meta.accent} p-7 transition-shadow duration-300 hover:shadow-[0_16px_48px_rgba(0,0,0,0.12)]`}
                >
                  <div className={`mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-background/70 ${meta.iconColor} shadow-soft transition-transform duration-300 group-hover:scale-110`}>
                    <meta.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
                </motion.div>
              </StaggerItem>
            );
          })}
        </Stagger>

        {/* Transformation animation */}
        <Reveal delay={0.1}>
          <div className="mt-24">
            <p className="mb-10 text-center text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              {t("visibility.flowCaption")}
            </p>
            <div className="mx-auto flex max-w-xs flex-col items-center">
              {flowStepMeta.map((step, i) => (
                <div key={step.key} className="flex w-full flex-col items-center">
                  <motion.div
                    initial={reduce ? undefined : { opacity: 0, x: i % 2 === 0 ? -16 : 16 }}
                    whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: i * 0.06 }}
                    className={`w-full rounded-[18px] px-5 py-3.5 flex items-center gap-4 ${
                      step.highlight
                        ? `bg-gradient-to-r ${step.gradient} shadow-[0_8px_32px_rgba(0,0,0,0.18)]`
                        : "glass-card"
                    }`}
                  >
                    <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br ${step.gradient} ${step.highlight ? "bg-white/20" : ""}`}>
                      <step.icon className="h-4 w-4 text-white" strokeWidth={1.8} />
                    </span>
                    <span className={`text-sm font-bold ${step.highlight ? "text-white" : "text-foreground"}`}>
                      {flowSteps[step.key]}
                    </span>
                  </motion.div>

                  {i < flowStepMeta.length - 1 && (
                    <motion.div
                      initial={reduce ? undefined : { opacity: 0, scaleY: 0 }}
                      whileInView={reduce ? undefined : { opacity: 1, scaleY: 1 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.3, ease: "easeOut", delay: i * 0.06 + 0.1 }}
                      style={{ originY: 0 }}
                      className="flex h-6 w-px items-end justify-center bg-gradient-to-b from-brand-blue/40 to-brand-purple/40"
                    >
                      <ArrowDown className="relative -bottom-0 h-3 w-3 -translate-x-1/2 text-muted-foreground/30" />
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Highlight + comparison */}
        <Reveal delay={0.1}>
          <div className="mt-24 overflow-hidden rounded-[32px] border border-border/60 bg-gradient-to-br from-brand-blue/6 to-brand-purple/6">
            <div className="px-8 py-12 text-center lg:px-16">
              <div className="flex justify-center mb-5">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-brand-blue to-brand-purple shadow-[0_8px_32px_oklch(0.55_0.25_258/0.35)]">
                  <TrendingUp className="h-6 w-6 text-white" strokeWidth={1.8} />
                </span>
              </div>
              <h3 className="text-3xl font-black tracking-tight text-foreground sm:text-4xl">
                {t("visibility.highlight.titlePre")}
                <span className="gradient-text-multi">{t("visibility.highlight.titleHighlight")}</span>
              </h3>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
                {t("visibility.highlight.subtitle")}
              </p>
            </div>

            {/* Comparison */}
            <div className="grid gap-px border-t border-border/60 sm:grid-cols-2">
              {/* Without */}
              <div className="bg-muted/30 px-8 py-8">
                <div className="mb-5 flex items-center gap-3">
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-destructive/10">
                    <X className="h-3.5 w-3.5 text-destructive" />
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{t("visibility.comparison.withoutLabel")}</span>
                </div>
                <ul className="space-y-3">
                  {withoutVolaly.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-muted-foreground">
                      <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-muted">
                        <X className="h-3 w-3 text-muted-foreground/50" />
                      </span>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* With */}
              <div className="bg-gradient-to-br from-brand-blue/8 to-brand-purple/8 px-8 py-8">
                <div className="mb-5 flex items-center gap-3">
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-brand-green/15">
                    <Check className="h-3.5 w-3.5 text-brand-green" />
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-foreground/70">{t("visibility.comparison.withLabel")}</span>
                </div>
                <ul className="space-y-3">
                  {withVolaly.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-green/15">
                        <Check className="h-3 w-3 text-brand-green" />
                      </span>
                      <span className="text-sm font-semibold text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>

        {/* CTA */}
        <Reveal delay={0.1}>
          <div className="mt-16 flex flex-col items-center gap-6 text-center">
            <h3 className="text-3xl font-black tracking-tight text-foreground sm:text-4xl">
              {t("visibility.cta.title")}
            </h3>
            <Button size="xl" variant="hero" onClick={openDemo}>
              {t("visibility.cta.button")} <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
