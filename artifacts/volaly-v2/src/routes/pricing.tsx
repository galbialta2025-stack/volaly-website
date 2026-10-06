import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight, Play, CheckCircle2, ChevronDown, Sparkles,
  TrendingUp, Zap, Shield, Headphones, Code2, Globe, Users, BarChart3,
  DollarSign, Clapperboard, Bot, Mic2, ShoppingBag,
  Crown, Star, Lock,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { AuroraOrbs } from "@/components/Backdrop";
import { Reveal, Stagger, StaggerItem } from "@/components/Motion";
import { SectionHeading } from "@/components/sections/shared";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { JsonLd } from "@/components/JsonLd";
import { openDemo } from "@/lib/demo";

export const Route = createFileRoute("/pricing")({
  component: PricingPage,
});

/* ─────────────── DATA ─────────────── */

const plans = [
  {
    id: "partner",
    badge: "Invitation Only",
    badgeIcon: Lock,
    name: "Creator Partner",
    price: "Free",
    priceSub: "Revenue share only",
    desc: "Grow with Volaly at zero cost. We earn when you earn.",
    cta: "Apply Now",
    ctaVariant: "outline" as const,
    highlight: false,
    requirements: ["5,000+ Followers", "OR Approved Application"],
    revenue: [
      { label: "Digital Products", value: "30%" },
      { label: "Merch", value: "15%" },
      { label: "Memberships", value: "10%" },
    ],
    features: ["Revenue Suite", "Creator Page", "AI FAQ", "Voice AI", "Smart Shop"],
    gradient: "from-border/60 to-border/30",
    iconGradient: "from-brand-purple/20 to-brand-blue/20",
    ic: "text-brand-purple",
  },
  {
    id: "creator",
    badge: null,
    badgeIcon: null,
    name: "Creator",
    price: "$199",
    priceSub: "/ month",
    desc: "Everything you need to monetise and grow your content.",
    cta: "Start Free Trial",
    ctaVariant: "outline" as const,
    highlight: false,
    requirements: null,
    revenue: [
      { label: "Digital Products", value: "20%" },
      { label: "Merch", value: "12%" },
      { label: "Memberships", value: "8%" },
    ],
    features: ["Revenue Suite", "Visibility Suite", "Smart Shorts", "Auto Publishing", "AI Blog Writer", "Newsletter"],
    gradient: "from-brand-blue/10 to-brand-purple/10",
    iconGradient: "from-brand-blue/20 to-brand-cyan/20",
    ic: "text-brand-blue",
  },
  {
    id: "pro",
    badge: "Most Popular",
    badgeIcon: Star,
    name: "Creator Pro",
    price: "$499",
    priceSub: "/ month",
    desc: "Lower revenue share. More automation. Built for serious growth.",
    cta: "Upgrade",
    ctaVariant: "hero" as const,
    highlight: true,
    requirements: null,
    revenue: [
      { label: "Digital Products", value: "15%" },
      { label: "Merch", value: "10%" },
      { label: "Memberships", value: "6%" },
    ],
    features: ["Everything in Creator", "Multi-language Publishing", "Advanced Analytics", "Priority Support", "API Access", "Teams"],
    gradient: "from-brand-orange/15 to-brand-pink/15",
    iconGradient: "from-brand-orange/20 to-brand-pink/20",
    ic: "text-brand-orange",
  },
  {
    id: "elite",
    badge: "Enterprise",
    badgeIcon: Crown,
    name: "Creator Elite",
    price: "$999",
    priceSub: "/ month",
    desc: "Maximum automation, minimum revenue share. For top creators and agencies.",
    cta: "Contact Sales",
    ctaVariant: "outline" as const,
    highlight: false,
    requirements: null,
    revenue: [
      { label: "Digital Products", value: "10%" },
      { label: "Merch", value: "8%" },
      { label: "Memberships", value: "5%" },
    ],
    features: ["Everything in Creator Pro", "White Label", "Dedicated Account Manager", "Custom Integrations", "SLA", "Unlimited Teams"],
    gradient: "from-brand-purple/10 to-brand-pink/10",
    iconGradient: "from-brand-purple/20 to-brand-pink/20",
    ic: "text-brand-purple",
  },
];

const journey = [
  {
    plan: "Creator Partner",
    sub: "Invitation Only",
    tag: "Free",
    gradient: "from-brand-purple to-brand-blue",
    headline: "Zero cost to start.",
    desc: "We grow together. Higher revenue share while you build your audience — no monthly fees.",
  },
  {
    plan: "Creator",
    sub: "$199 / month",
    tag: "20% share",
    gradient: "from-brand-blue to-brand-cyan",
    headline: "Lower share. More automation.",
    desc: "Pay a fixed monthly fee and keep more of every sale. Full Revenue + Visibility Suites included.",
  },
  {
    plan: "Creator Pro",
    sub: "$499 / month",
    tag: "15% share",
    gradient: "from-brand-orange to-brand-pink",
    headline: "Built for serious scale.",
    desc: "Advanced AI features, multi-language publishing, teams and priority support.",
  },
  {
    plan: "Creator Elite",
    sub: "$999 / month",
    tag: "10% share",
    gradient: "from-brand-purple to-brand-pink",
    headline: "Maximum power. Minimum share.",
    desc: "White-label, custom integrations, dedicated manager and the lowest revenue share on the platform.",
  },
];

type CompareRow = { label: string; icon: React.ElementType; partner: boolean | string; creator: boolean | string; pro: boolean | string; elite: boolean | string };

const compareRows: CompareRow[] = [
  { label: "Revenue Suite",     icon: DollarSign,  partner: true,      creator: true,      pro: true,            elite: true },
  { label: "Visibility Suite",  icon: Clapperboard,partner: false,     creator: true,      pro: true,            elite: true },
  { label: "AI (FAQ + Voice)",  icon: Bot,          partner: true,      creator: true,      pro: true,            elite: true },
  { label: "Smart Shorts",      icon: Mic2,         partner: false,     creator: true,      pro: true,            elite: true },
  { label: "Automation",        icon: Zap,          partner: "Basic",   creator: "Full",    pro: "Advanced",      elite: "Custom" },
  { label: "Support",           icon: Headphones,   partner: "Email",   creator: "Email",   pro: "Priority",      elite: "Dedicated" },
  { label: "API Access",        icon: Code2,        partner: false,     creator: false,     pro: true,            elite: true },
  { label: "White Label",       icon: Shield,       partner: false,     creator: false,     pro: false,           elite: true },
  { label: "Teams",             icon: Users,        partner: false,     creator: false,     pro: "Up to 5",       elite: "Unlimited" },
  { label: "Analytics",         icon: BarChart3,    partner: "Basic",   creator: "Standard", pro: "Advanced",    elite: "Custom" },
  { label: "Multi-language",    icon: Globe,        partner: false,     creator: false,     pro: true,            elite: true },
];

const faqs = [
  {
    q: "Why revenue sharing?",
    a: "Revenue sharing aligns our success with yours. We only earn when you earn — so Volaly is always motivated to maximise your revenue. As you grow and upgrade to paid plans, the revenue share decreases and you keep more of every sale.",
  },
  {
    q: "Can I upgrade anytime?",
    a: "Yes. You can upgrade or downgrade your plan at any time from your dashboard. Upgrades take effect immediately; downgrades apply at the start of your next billing cycle.",
  },
  {
    q: "Do I own my content?",
    a: "100%. Your content is always yours. Volaly never claims ownership of anything you create or upload. We process it to generate additional content formats — all of which belong to you.",
  },
  {
    q: "Why is Creator Partner invitation only?",
    a: "Creator Partner is our highest-touch plan. We work closely with each partner to train their AI persona, set up their shop and optimise their growth strategy. Keeping it invitation-only ensures we can deliver a premium experience to every creator we onboard.",
  },
  {
    q: "What happens if I grow beyond my current plan?",
    a: "Great problem to have. You can upgrade at any time — and the higher you go, the lower your revenue share. Growth on Volaly always rewards you with better economics.",
  },
];

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Pricing — Volaly",
  url: "https://volaly.com/pricing",
  description: "Choose how you want to grow with Volaly. Three paid plans and one invitation-only Creator Partner plan — focused on value, not features.",
  publisher: { "@id": "https://volaly.com/#organization" },
};

/* ─────────────── PAGE ─────────────── */

function PricingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeCol, setActiveCol] = useState<string | null>(null);

  return (
    <>
      <SEO
        title="Pricing — Choose How You Want To Grow | Volaly"
        description="Three plans built around your growth. Creator Partner (free), Creator ($199), Creator Pro ($499), Creator Elite ($999). Revenue share decreases as you scale."
        canonical="https://volaly.com/pricing"
      />
      <JsonLd schema={pageSchema} />

      {/* ── HERO ── */}
      <section className="bg-aurora noise relative overflow-hidden pt-36 pb-20">
        <AuroraOrbs />
        <div className="bg-grid pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(70%_55%_at_50%_30%,black,transparent)]" />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground shadow-soft backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-brand-orange" /> Pricing
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 text-[clamp(2.8rem,6vw,5.5rem)] font-black leading-[0.94] tracking-tight"
          >
            Choose How You
            <span className="block gradient-text-multi">Want To Grow.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18 }}
            className="mx-auto mt-7 max-w-lg text-lg leading-relaxed text-muted-foreground"
          >
            Start with the plan that fits today.
            Upgrade whenever your business grows.
          </motion.p>
        </div>
      </section>

      {/* ── PRICING CARDS ── */}
      <section className="relative overflow-hidden py-16">
        <div className="relative mx-auto max-w-7xl px-6">
          <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4" gap={0.08}>
            {plans.map((plan) => (
              <StaggerItem key={plan.id}>
                <PricingCard plan={plan} />
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
              <TrendingUp className="h-3.5 w-3.5" /> Upgrade Journey
            </span>
            <Reveal delay={0.05}>
              <h2 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl">
                The More You Grow,
                <span className="block gradient-text-multi">The Less You Pay.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mx-auto mt-5 max-w-xl text-base text-white/60">
                Revenue share decreases at every level while automation, AI capabilities and scaling features increase. Growth always rewards you.
              </p>
            </Reveal>
          </div>

          <div className="relative flex flex-col items-center gap-0">
            {/* Vertical line */}
            <div className="pointer-events-none absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-brand-purple/40 via-brand-orange/30 to-brand-pink/20" />

            {journey.map((j, i) => (
              <div key={j.plan} className="w-full">
                <Reveal delay={i * 0.1}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                    className={`relative mx-auto flex max-w-md items-center gap-5 rounded-[24px] border border-white/10 bg-white/[0.05] px-6 py-5 backdrop-blur ${i === 2 ? "border-brand-orange/30 bg-gradient-to-br from-brand-orange/10 to-brand-pink/10" : ""}`}
                  >
                    {/* Plan badge */}
                    <div className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br ${j.gradient} shadow-soft`}>
                      <TrendingUp className="h-5 w-5 text-white" strokeWidth={1.8} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-extrabold text-white">{j.plan}</span>
                        <span className={`rounded-full bg-gradient-to-r ${j.gradient} px-2 py-0.5 text-[10px] font-bold text-white`}>{j.tag}</span>
                      </div>
                      <div className="text-xs text-white/50">{j.sub}</div>
                    </div>
                    <div className="hidden sm:block text-right max-w-[180px]">
                      <div className="text-xs font-bold text-white/80">{j.headline}</div>
                      <div className="mt-0.5 text-xs text-white/40 leading-snug">{j.desc}</div>
                    </div>
                  </motion.div>
                </Reveal>
                {i < journey.length - 1 && (
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
            eyebrow="Compare Plans"
            title={<>Everything side <span className="gradient-text-multi">by side.</span></>}
          />
          <Reveal delay={0.1}>
            <div className="mt-14 overflow-x-auto rounded-[24px] border border-border/60 bg-background/90 shadow-[0_16px_48px_rgba(0,0,0,0.10)]">
              <table className="w-full min-w-[640px] border-collapse text-sm">
                {/* Header */}
                <thead>
                  <tr className="border-b border-border/60">
                    <th className="px-6 py-5 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground w-[220px]">Feature</th>
                    {plans.map((p) => (
                      <th
                        key={p.id}
                        onMouseEnter={() => setActiveCol(p.id)}
                        onMouseLeave={() => setActiveCol(null)}
                        className={`px-4 py-5 text-center transition-colors duration-200 cursor-default ${activeCol === p.id ? "bg-muted/40" : ""} ${p.highlight ? "bg-brand-orange/5" : ""}`}
                      >
                        <div className="flex flex-col items-center gap-1.5">
                          <span className={`text-xs font-extrabold ${p.highlight ? "text-brand-orange" : "text-foreground"}`}>{p.name}</span>
                          <span className={`text-[11px] font-semibold ${p.highlight ? "gradient-text-multi" : "text-muted-foreground"}`}>{p.price}{p.priceSub && p.price !== "Free" ? p.priceSub : ""}</span>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {compareRows.map((row, ri) => (
                    <tr key={row.label} className={`border-b border-border/40 transition-colors hover:bg-muted/20 ${ri % 2 === 0 ? "" : "bg-muted/10"}`}>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2.5">
                          <row.icon className="h-4 w-4 shrink-0 text-muted-foreground/60" />
                          <span className="font-medium text-foreground">{row.label}</span>
                        </div>
                      </td>
                      {([row.partner, row.creator, row.pro, row.elite] as Array<boolean | string>).map((val, ci) => (
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
                              {val}
                            </span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
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
            eyebrow="FAQ"
            title={<>Pricing <span className="gradient-text-multi">questions answered.</span></>}
          />
          <div className="mt-12 space-y-3">
            {faqs.map((f, i) => {
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
                Ready To Let Volaly
                <span className="block gradient-text-multi">Do The Rest?</span>
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-lg text-white/70">
                Start free. No credit card required. Upgrade when you're ready to grow faster.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <Button size="xl" variant="hero" className="rounded-full" onClick={openDemo}>
                  Start Free <ArrowRight className="h-4 w-4" />
                </Button>
                <Button
                  size="xl"
                  className="rounded-full border border-white/30 bg-white/10 text-white backdrop-blur hover:bg-white/20"
                  onClick={openDemo}
                >
                  <Play className="h-4 w-4" /> Book Demo
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

function PricingCard({ plan }: { plan: typeof plans[0] }) {
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
          {plan.priceSub && plan.price !== "Free" && (
            <span className="mb-0.5 text-sm text-muted-foreground">{plan.priceSub}</span>
          )}
        </div>
        <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{plan.desc}</p>
      </div>

      {/* Requirements (Partner only) */}
      {plan.requirements && (
        <div className="mb-5 rounded-[14px] border border-border/50 bg-background/50 px-4 py-3">
          <p className="mb-2 text-[10px] font-bold uppercase tracking-wider text-muted-foreground/60">Requirements</p>
          {plan.requirements.map((r) => (
            <p key={r} className="text-xs font-semibold text-foreground">{r}</p>
          ))}
        </div>
      )}

      {/* Revenue share */}
      <div className="mb-5">
        <p className="mb-2.5 text-[10px] font-bold uppercase tracking-wider text-muted-foreground/60">Revenue Share</p>
        <div className="space-y-1.5">
          {plan.revenue.map((r) => (
            <div key={r.label} className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground">{r.label}</span>
              <span className={`text-sm font-extrabold ${plan.highlight ? "text-brand-orange" : "text-foreground"}`}>{r.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="mb-7 flex-1">
        <p className="mb-2.5 text-[10px] font-bold uppercase tracking-wider text-muted-foreground/60">Included</p>
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
