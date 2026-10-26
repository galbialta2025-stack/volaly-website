import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight, Play, CheckCircle2, ChevronDown, Sparkles,
  TrendingUp, Zap, Shield, Headphones, Code2, Globe, Users, BarChart3,
  DollarSign, Clapperboard, Bot, Mic2,
  Crown, Star, Lock,
} from "lucide-react";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { AuroraOrbs } from "@/components/Backdrop";
import { Reveal, Stagger, StaggerItem } from "@/components/Motion";
import { SectionHeading } from "@/components/sections/shared";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { JsonLd } from "@/components/JsonLd";
import { openDemo } from "@/lib/demo";

export const Route = createFileRoute("/$lang/pricing")({
  component: PricingPage,
});

/* ─────────────── VISUAL META (non-translatable) ─────────────── */

type PlanId = "partner" | "creator" | "pro" | "elite";

const planMeta: Record<PlanId, {
  badgeIcon: React.ElementType | null;
  ctaVariant: "hero" | "outline";
  highlight: boolean;
  revenueValues: string[];
  gradient: string;
  iconGradient: string;
  ic: string;
}> = {
  partner: {
    badgeIcon: Lock,
    ctaVariant: "outline",
    highlight: false,
    revenueValues: ["30%", "15%", "10%"],
    gradient: "from-border/60 to-border/30",
    iconGradient: "from-brand-purple/20 to-brand-blue/20",
    ic: "text-brand-purple",
  },
  creator: {
    badgeIcon: null,
    ctaVariant: "outline",
    highlight: false,
    revenueValues: ["20%", "12%", "8%"],
    gradient: "from-brand-blue/10 to-brand-purple/10",
    iconGradient: "from-brand-blue/20 to-brand-cyan/20",
    ic: "text-brand-blue",
  },
  pro: {
    badgeIcon: Star,
    ctaVariant: "hero",
    highlight: true,
    revenueValues: ["15%", "10%", "6%"],
    gradient: "from-brand-orange/15 to-brand-pink/15",
    iconGradient: "from-brand-orange/20 to-brand-pink/20",
    ic: "text-brand-orange",
  },
  elite: {
    badgeIcon: Crown,
    ctaVariant: "outline",
    highlight: false,
    revenueValues: ["10%", "8%", "5%"],
    gradient: "from-brand-purple/10 to-brand-pink/10",
    iconGradient: "from-brand-purple/20 to-brand-pink/20",
    ic: "text-brand-purple",
  },
};

const planOrder: PlanId[] = ["partner", "creator", "pro", "elite"];

const journeyGradients = [
  "from-brand-purple to-brand-blue",
  "from-brand-blue to-brand-cyan",
  "from-brand-orange to-brand-pink",
  "from-brand-purple to-brand-pink",
];

const compareRowMeta: { key: string; icon: React.ElementType }[] = [
  { key: "revenueSuite", icon: DollarSign },
  { key: "visibilitySuite", icon: Clapperboard },
  { key: "ai", icon: Bot },
  { key: "smartShorts", icon: Mic2 },
  { key: "automation", icon: Zap },
  { key: "support", icon: Headphones },
  { key: "apiAccess", icon: Code2 },
  { key: "whiteLabel", icon: Shield },
  { key: "teams", icon: Users },
  { key: "analytics", icon: BarChart3 },
  { key: "multilang", icon: Globe },
];

const compareRowData: Record<string, { partner: boolean | "basic" | "standard"; creator: boolean | "basic" | "full" | "standard"; pro: boolean | "advanced" | "upTo5"; elite: boolean | "custom" | "unlimited" }> = {
  revenueSuite: { partner: true, creator: true, pro: true, elite: true },
  visibilitySuite: { partner: false, creator: true, pro: true, elite: true },
  ai: { partner: true, creator: true, pro: true, elite: true },
  smartShorts: { partner: false, creator: true, pro: true, elite: true },
  automation: { partner: "basic", creator: "full", pro: "advanced", elite: "custom" },
  support: { partner: "email", creator: "email", pro: "priority", elite: "dedicated" } as unknown as { partner: boolean | "basic" | "standard"; creator: boolean | "basic" | "full" | "standard"; pro: boolean | "advanced" | "upTo5"; elite: boolean | "custom" | "unlimited" },
  apiAccess: { partner: false, creator: false, pro: true, elite: true },
  whiteLabel: { partner: false, creator: false, pro: false, elite: true },
  teams: { partner: false, creator: false, pro: "upTo5", elite: "unlimited" },
  analytics: { partner: "basic", creator: "standard", pro: "advanced", elite: "custom" },
  multilang: { partner: false, creator: false, pro: true, elite: true },
};

type PlanContent = {
  badge?: string;
  name: string;
  price: string;
  priceSub: string;
  desc: string;
  cta: string;
  requirements?: string[];
  revenueLabels: string[];
  features: string[];
};

type CompareDict = { eyebrow: string; titlePre: string; titleHighlight: string; featureHeader: string; rows: Record<string, string>; values: Record<string, string> };

/* ─────────────── PAGE ─────────────── */

function PricingPage() {
  const { lang } = Route.useParams();
  const { t } = useTranslation("pricing");
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeCol, setActiveCol] = useState<string | null>(null);

  const plansContent = t("plans", { returnObjects: true }) as Record<PlanId, PlanContent>;
  const journeySteps = t("journey.steps", { returnObjects: true }) as { sub: string; tag: string; headline: string; desc: string }[];
  const compare = t("compare", { returnObjects: true }) as CompareDict;
  const faqItems = t("faq.items", { returnObjects: true }) as { q: string; a: string }[];

  const plans = planOrder.map((id) => ({
    id,
    ...planMeta[id],
    ...plansContent[id],
  }));

  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Pricing — Volaly",
    url: `https://volaly.com/${lang}/pricing`,
    description: "Choose how you want to grow with Volaly. Three paid plans and one invitation-only Creator Partner plan — focused on value, not features.",
    publisher: { "@id": "https://volaly.com/#organization" },
  };

  return (
    <>
      <SEO
        title={t("seo.title")}
        description={t("seo.description")}
        canonical={`https://volaly.com/${lang}/pricing`}
      />
      <JsonLd schema={pageSchema} />

      {/* ── HERO ── */}
      <section className="bg-aurora noise relative overflow-hidden pt-36 pb-20">
        <AuroraOrbs />
        <div className="bg-grid pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(70%_55%_at_50%_30%,black,transparent)]" />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground shadow-soft backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-brand-orange" /> {t("hero.eyebrow")}
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 text-[clamp(2.8rem,6vw,5.5rem)] font-black leading-[0.94] tracking-tight"
          >
            {t("hero.titleLine1")}
            <span className="block gradient-text-multi">{t("hero.titleLine2")}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18 }}
            className="mx-auto mt-7 max-w-lg text-lg leading-relaxed text-muted-foreground"
          >
            {t("hero.subtitle")}
          </motion.p>
        </div>
      </section>

      {/* ── PRICING CARDS ── */}
      <section className="relative overflow-hidden py-16">
        <div className="relative mx-auto max-w-7xl px-6">
          <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4" gap={0.08}>
            {plans.map((plan) => (
              <StaggerItem key={plan.id}>
                <PricingCard plan={plan} t={t} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ── UPGRADE JOURNEY ── */}
      <section className="relative overflow-hidden bg-[oklch(0.16_0.03_265)] py-32 text-white noise">
        <div className="bg-mesh-soft pointer-events-none absolute inset-0 opacity-60" />
        <div className="relative mx-auto max-w-4xl px-6">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-white/70">
              <TrendingUp className="h-3.5 w-3.5" /> {t("journey.eyebrow")}
            </span>
            <Reveal delay={0.05}>
              <h2 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl">
                {t("journey.titleLine1")}
                <span className="block gradient-text-multi">{t("journey.titleLine2")}</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mx-auto mt-5 max-w-xl text-base text-white/60">
                {t("journey.subtitle")}
              </p>
            </Reveal>
          </div>

          <div className="relative flex flex-col items-center gap-0">
            {/* Vertical line */}
            <div className="pointer-events-none absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-brand-purple/40 via-brand-orange/30 to-brand-pink/20" />

            {journeySteps.map((j, i) => (
              <div key={j.headline} className="w-full">
                <Reveal delay={i * 0.1}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                    className={`relative mx-auto flex max-w-md items-center gap-5 rounded-[24px] border border-white/10 bg-white/[0.05] px-6 py-5 backdrop-blur ${i === 2 ? "border-brand-orange/30 bg-gradient-to-br from-brand-orange/10 to-brand-pink/10" : ""}`}
                  >
                    {/* Plan badge */}
                    <div className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br ${journeyGradients[i]} shadow-soft`}>
                      <TrendingUp className="h-5 w-5 text-white" strokeWidth={1.8} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-extrabold text-white">{plansContent[planOrder[i]].name}</span>
                        <span className={`rounded-full bg-gradient-to-r ${journeyGradients[i]} px-2 py-0.5 text-[10px] font-bold text-white`}>{j.tag}</span>
                      </div>
                      <div className="text-xs text-white/50">{j.sub}</div>
                    </div>
                    <div className="hidden sm:block text-right max-w-[180px]">
                      <div className="text-xs font-bold text-white/80">{j.headline}</div>
                      <div className="mt-0.5 text-xs text-white/40 leading-snug">{j.desc}</div>
                    </div>
                  </motion.div>
                </Reveal>
                {i < journeySteps.length - 1 && (
                  <motion.div
                    initial={{ scaleY: 0, opacity: 0 }}
                    whileInView={{ scaleY: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.1 + 0.12 }}
                    style={{ originY: 0 }}
                    className="mx-auto my-1 h-7 w-px bg-gradient-to-b from-white/25 to-white/10"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURE COMPARISON ── */}
      <section className="relative overflow-hidden py-32">
        <div className="relative mx-auto max-w-5xl px-6">
          <SectionHeading
            eyebrow={t("compare.eyebrow")}
            title={<>{t("compare.titlePre")}<span className="gradient-text-multi">{t("compare.titleHighlight")}</span></>}
          />
          <Reveal delay={0.1}>
            <div className="mt-14 overflow-x-auto rounded-[24px] border border-border/60 bg-background/90 shadow-[0_16px_48px_rgba(0,0,0,0.10)]">
              <table className="w-full min-w-[640px] border-collapse text-sm">
                {/* Header */}
                <thead>
                  <tr className="border-b border-border/60">
                    <th className="px-6 py-5 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground w-[220px]">{compare.featureHeader}</th>
                    {plans.map((p) => (
                      <th
                        key={p.id}
                        onMouseEnter={() => setActiveCol(p.id)}
                        onMouseLeave={() => setActiveCol(null)}
                        className={`px-4 py-5 text-center transition-colors duration-200 cursor-default ${activeCol === p.id ? "bg-muted/40" : ""} ${p.highlight ? "bg-brand-orange/5" : ""}`}
                      >
                        <div className="flex flex-col items-center gap-1.5">
                          <span className={`text-xs font-extrabold ${p.highlight ? "text-brand-orange" : "text-foreground"}`}>{p.name}</span>
                          <span className={`text-[11px] font-semibold ${p.highlight ? "gradient-text-multi" : "text-muted-foreground"}`}>{p.price}{p.priceSub && !p.price.match(/free|kostenlos|gratuit|gratis|miễn phí|ฟรี/i) ? p.priceSub : ""}</span>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {compareRowMeta.map((row, ri) => {
                    const data = compareRowData[row.key];
                    const vals = [data.partner, data.creator, data.pro, data.elite] as Array<boolean | string>;
                    return (
                      <tr key={row.key} className={`border-b border-border/40 transition-colors hover:bg-muted/20 ${ri % 2 === 0 ? "" : "bg-muted/10"}`}>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2.5">
                            <row.icon className="h-4 w-4 shrink-0 text-muted-foreground/60" />
                            <span className="font-medium text-foreground">{compare.rows[row.key]}</span>
                          </div>
                        </td>
                        {vals.map((val, ci) => (
                          <td
                            key={ci}
                            onMouseEnter={() => setActiveCol(plans[ci].id)}
                            onMouseLeave={() => setActiveCol(null)}
                            className={`px-4 py-4 text-center transition-colors duration-200 ${activeCol === plans[ci].id ? "bg-muted/40" : ""} ${plans[ci].highlight ? "bg-brand-orange/5" : ""}`}
                          >
                            {val === true ? (
                              <CheckCircle2 className={`mx-auto h-4.5 w-4.5 ${plans[ci].ic}`} />
                            ) : val === false ? (
                              <span className="block h-px w-5 mx-auto bg-border/60" />
                            ) : (
                              <span className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${plans[ci].highlight ? "bg-brand-orange/10 text-brand-orange" : "bg-muted text-muted-foreground"}`}>
                                {compare.values[val as string]}
                              </span>
                            )}
                          </td>
                        ))}
                      </tr>
                    );
                  })}
                </tbody>
                {/* CTA row */}
                <tfoot>
                  <tr>
                    <td className="px-6 py-5" />
                    {plans.map((p) => (
                      <td key={p.id} className={`px-4 py-5 text-center ${p.highlight ? "bg-brand-orange/5" : ""}`}>
                        <Button
                          size="sm"
                          variant={p.ctaVariant === "hero" ? "hero" : "outline"}
                          className="w-full rounded-full text-xs"
                          onClick={openDemo}
                        >
                          {p.cta}
                        </Button>
                      </td>
                    ))}
                  </tr>
                </tfoot>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-mesh-soft relative overflow-hidden py-28">
        <div className="relative mx-auto max-w-3xl px-6">
          <SectionHeading
            eyebrow={t("faq.eyebrow")}
            title={<>{t("faq.titlePre")}<span className="gradient-text-multi">{t("faq.titleHighlight")}</span></>}
          />
          <div className="mt-12 space-y-3">
            {faqItems.map((f, i) => {
              const isOpen = openFaq === i;
              return (
                <Reveal key={f.q} delay={i * 0.04}>
                  <div className={`overflow-hidden rounded-[20px] border transition-colors ${isOpen ? "gradient-border" : "border-border/70 bg-background/70"} backdrop-blur shadow-soft`}>
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    >
                      <span className="text-base font-semibold text-foreground">{f.q}</span>
                      <ChevronDown className={`h-5 w-5 shrink-0 text-brand-orange transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                    </button>
                    <div className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                      <div className="overflow-hidden">
                        <p className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="px-4 py-28 sm:px-6">
        <Reveal>
          <div className="noise relative mx-auto max-w-6xl overflow-hidden rounded-[36px] bg-[oklch(0.16_0.03_265)] px-8 py-24 text-center">
            <AuroraOrbs />
            <div className="bg-grid pointer-events-none absolute inset-0 opacity-20 [mask-image:radial-gradient(60%_60%_at_50%_50%,black,transparent)]" />
            <div className="relative">
              <h2 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl">
                {t("finalCta.titleLine1")}
                <span className="block gradient-text-multi">{t("finalCta.titleLine2")}</span>
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-lg text-white/70">
                {t("finalCta.subtitle")}
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <Button size="xl" variant="hero" className="rounded-full" onClick={openDemo}>
                  {t("finalCta.startFree")} <ArrowRight className="h-4 w-4" />
                </Button>
                <Button
                  size="xl"
                  className="rounded-full border border-white/30 bg-white/10 text-white backdrop-blur hover:bg-white/20"
                  onClick={openDemo}
                >
                  <Play className="h-4 w-4" /> {t("finalCta.bookDemo")}
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}

/* ─────────────── PRICING CARD ─────────────── */

type RenderedPlan = PlanContent & {
  id: PlanId;
  badgeIcon: React.ElementType | null;
  ctaVariant: "hero" | "outline";
  highlight: boolean;
  revenueValues: string[];
  gradient: string;
  iconGradient: string;
  ic: string;
};

function PricingCard({ plan, t }: { plan: RenderedPlan; t: (key: string) => string }) {
  const isFree = /free|kostenlos|gratuit|gratis|miễn phí|ฟรี/i.test(plan.price);
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={`relative flex h-full flex-col overflow-hidden rounded-[28px] border bg-gradient-to-br ${plan.gradient} p-7 shadow-soft transition-shadow duration-300 hover:shadow-[0_20px_56px_rgba(0,0,0,0.14)] ${plan.highlight ? "border-brand-orange/40 ring-1 ring-brand-orange/20" : "border-border/60 bg-background/80"}`}
    >
      {/* Badge */}
      {plan.badge && (
        <div className={`mb-4 inline-flex w-fit items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-bold ${plan.highlight ? "bg-brand-orange text-white" : "border border-border/70 bg-background/60 text-muted-foreground"}`}>
          {plan.badgeIcon && <plan.badgeIcon className="h-3 w-3" />}
          {plan.badge}
        </div>
      )}

      {/* Plan name + price */}
      <div className="mb-6">
        <h3 className="text-lg font-extrabold text-foreground">{plan.name}</h3>
        <div className="mt-3 flex items-end gap-1">
          <span className={`text-4xl font-black leading-none tracking-tight ${plan.highlight ? "gradient-text-multi" : "text-foreground"}`}>{plan.price}</span>
          {plan.priceSub && !isFree && (
            <span className="mb-0.5 text-sm text-muted-foreground">{plan.priceSub}</span>
          )}
        </div>
        <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{plan.desc}</p>
      </div>

      {/* Requirements (Partner only) */}
      {plan.requirements && (
        <div className="mb-5 rounded-[14px] border border-border/50 bg-background/50 px-4 py-3">
          <p className="mb-2 text-[10px] font-bold uppercase tracking-wider text-muted-foreground/60">{t("plans.requirementsLabel")}</p>
          {plan.requirements.map((r) => (
            <p key={r} className="text-xs font-semibold text-foreground">{r}</p>
          ))}
        </div>
      )}

      {/* Revenue share */}
      <div className="mb-5">
        <p className="mb-2.5 text-[10px] font-bold uppercase tracking-wider text-muted-foreground/60">{t("plans.revenueShareLabel")}</p>
        <div className="space-y-1.5">
          {plan.revenueLabels.map((label, i) => (
            <div key={label} className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground">{label}</span>
              <span className={`text-sm font-extrabold ${plan.highlight ? "text-brand-orange" : "text-foreground"}`}>{plan.revenueValues[i]}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="mb-7 flex-1">
        <p className="mb-2.5 text-[10px] font-bold uppercase tracking-wider text-muted-foreground/60">{t("plans.includedLabel")}</p>
        <ul className="space-y-1.5">
          {plan.features.map((f) => (
            <li key={f} className="flex items-center gap-2 text-xs text-muted-foreground">
              <CheckCircle2 className={`h-3.5 w-3.5 shrink-0 ${plan.ic}`} />
              {f}
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <Button
        size="lg"
        variant={plan.ctaVariant === "hero" ? "hero" : "outline"}
        className="w-full rounded-full"
        onClick={openDemo}
      >
        {plan.cta} <ArrowRight className="h-4 w-4" />
      </Button>
    </motion.div>
  );
}
