import {
  MessageSquare,
  Mic2,
  ShoppingBag,
  CreditCard,
  Share2,
  BotMessageSquare,
  ArrowRight,
  X,
  Check,
  Upload,
  Sparkles,
  DollarSign,
  TrendingUp,
  RefreshCw,
} from "lucide-react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "./shared";
import { Stagger, StaggerItem, Reveal } from "@/components/Motion";
import { openDemo } from "@/lib/demo";

/* ── Feature cards ── */
const cards = [
  {
    icon: MessageSquare,
    title: "AI FAQ",
    desc: "Automatically answer customer questions 24/7.",
    accent: "from-brand-blue/20 to-brand-purple/20",
    iconColor: "text-brand-blue",
  },
  {
    icon: Mic2,
    title: "Voice AI",
    desc: "Let customers talk naturally with your business or creator profile.",
    accent: "from-brand-purple/20 to-brand-pink/20",
    iconColor: "text-brand-purple",
  },
  {
    icon: ShoppingBag,
    title: "Smart Shop",
    desc: "Sell digital products, memberships and merchandise from one place.",
    accent: "from-brand-orange/20 to-brand-yellow/20",
    iconColor: "text-brand-orange",
  },
  {
    icon: CreditCard,
    title: "Memberships",
    desc: "Build recurring monthly revenue.",
    accent: "from-brand-green/20 to-brand-blue/20",
    iconColor: "text-brand-green",
  },
  {
    icon: Share2,
    title: "Affiliate Revenue",
    desc: "Recommend products and earn automatically.",
    accent: "from-brand-pink/20 to-brand-orange/20",
    iconColor: "text-brand-pink",
  },
  {
    icon: BotMessageSquare,
    title: "AI Sales Assistant",
    desc: "Turn conversations into paying customers automatically.",
    accent: "from-brand-blue/20 to-brand-green/20",
    iconColor: "text-brand-blue",
  },
];

/* ── Horizontal workflow ── */
const workflowSteps = [
  { icon: Upload, label: "Upload Content", color: "from-brand-orange to-brand-pink" },
  { icon: Sparkles, label: "Volaly AI", color: "from-brand-purple to-brand-blue" },
  { icon: ShoppingBag, label: "Revenue Suite", color: "from-brand-blue to-brand-green" },
  { icon: DollarSign, label: "Sales", color: "from-brand-green to-brand-yellow" },
  { icon: RefreshCw, label: "Recurring Revenue", color: "from-brand-orange to-brand-purple" },
];

/* ── Comparison ── */
const withoutVolaly = [
  "Manual replies",
  "One income source",
  "Missed opportunities",
  "Manual selling",
];
const withVolaly = [
  "AI conversations",
  "Multiple revenue streams",
  "Automatic selling",
  "Revenue 24/7",
];

export function RevenueSuite() {
  return (
    <section id="revenue" className="relative scroll-mt-24 overflow-hidden py-32">
      {/* subtle background texture */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background via-brand-orange/[0.03] to-background" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}
        <SectionHeading
          eyebrow="Revenue Suite"
          title={<>Everything you need to turn your content into <span className="gradient-text-multi">revenue</span>.</>}
        />

        {/* Feature cards */}
        <Stagger className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" gap={0.07}>
          {cards.map((c) => (
            <StaggerItem key={c.title}>
              <motion.div
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
                className={`glass-card group h-full rounded-[22px] bg-gradient-to-br ${c.accent} p-7 transition-shadow duration-300 hover:shadow-[0_16px_48px_rgba(0,0,0,0.12)]`}
              >
                <div className={`mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-background/70 ${c.iconColor} shadow-soft transition-transform duration-300 group-hover:scale-110`}>
                  <c.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-foreground">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Horizontal workflow */}
        <Reveal delay={0.1}>
          <div className="mt-20">
            <p className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              How it works
            </p>
            <div className="glass-card rounded-[28px] p-8">
              <div className="flex flex-wrap items-center justify-center gap-3">
                {workflowSteps.map((step, i) => (
                  <div key={step.label} className="flex items-center gap-3">
                    <div className="flex flex-col items-center gap-2.5">
                      <div className={`grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br ${step.color} shadow-soft`}>
                        <step.icon className="h-5 w-5 text-white" />
                      </div>
                      <span className="text-center text-xs font-semibold text-foreground/80 leading-tight max-w-[80px]">
                        {step.label}
                      </span>
                    </div>
                    {i < workflowSteps.length - 1 && (
                      <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground/50 mb-5" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Comparison */}
        <Reveal delay={0.1}>
          <div className="mt-16 grid gap-5 sm:grid-cols-2">
            {/* Without Volaly */}
            <div className="rounded-[22px] border border-border/60 bg-muted/40 p-8">
              <div className="mb-6 flex items-center gap-3">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-destructive/10">
                  <X className="h-4 w-4 text-destructive" />
                </span>
                <span className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
                  Without Volaly
                </span>
              </div>
              <ul className="space-y-3.5">
                {withoutVolaly.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-muted-foreground">
                    <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-muted">
                      <X className="h-3 w-3 text-muted-foreground/60" />
                    </span>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* With Volaly */}
            <div className="rounded-[22px] border border-brand-orange/25 bg-gradient-to-br from-brand-orange/8 to-brand-blue/8 p-8">
              <div className="mb-6 flex items-center gap-3">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-brand-green/15">
                  <Check className="h-4 w-4 text-brand-green" />
                </span>
                <span className="text-sm font-bold uppercase tracking-wider text-foreground/70">
                  With Volaly
                </span>
              </div>
              <ul className="space-y-3.5">
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
        </Reveal>

        {/* CTA */}
        <Reveal delay={0.1}>
          <div className="mt-16 flex flex-col items-center gap-6 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-orange to-brand-pink shadow-[0_8px_32px_rgba(255,107,53,0.3)]">
              <TrendingUp className="h-7 w-7 text-white" />
            </div>
            <h3 className="text-3xl font-black tracking-tight text-foreground sm:text-4xl">
              Start Monetizing Every Upload.
            </h3>
            <Button size="xl" variant="hero" onClick={openDemo}>
              Explore Revenue Suite <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
