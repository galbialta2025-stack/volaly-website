import {
  Upload,
  TrendingUp,
  Plug,
  BrainCircuit,
  ArrowRight,
  ArrowDown,
  Plus,
  XCircle,
  CheckCircle2,
  Sparkles,
  DollarSign,
  Rocket,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "./shared";
import { Stagger, StaggerItem, Reveal } from "@/components/Motion";
import { openDemo } from "@/lib/demo";

/* ── Four reason cards ── */
const cards = [
  {
    icon: Upload,
    title: "One Upload",
    desc: "Upload once or connect your social accounts. Volaly automatically handles everything else.",
    gradient: "from-brand-orange/15 to-brand-pink/15",
    iconGradient: "from-brand-orange to-brand-pink",
  },
  {
    icon: TrendingUp,
    title: "Revenue First",
    desc: "Every upload becomes new opportunities to generate revenue automatically.",
    gradient: "from-brand-green/15 to-brand-cyan/15",
    iconGradient: "from-brand-green to-brand-cyan",
  },
  {
    icon: Plug,
    title: "Works With Your Existing Tools",
    desc: "No need to replace YouTube, Instagram or TikTok. Volaly builds on top of them.",
    gradient: "from-brand-blue/15 to-brand-purple/15",
    iconGradient: "from-brand-blue to-brand-purple",
  },
  {
    icon: BrainCircuit,
    title: "Always Learning",
    desc: "Every new upload expands your AI knowledge, improves customer conversations and strengthens your business.",
    gradient: "from-brand-purple/15 to-brand-pink/15",
    iconGradient: "from-brand-purple to-brand-pink",
  },
];

/* ── Workflow steps ── */
const traditional = [
  { label: "Upload", icon: Upload },
  { label: "One Platform", icon: XCircle },
  { label: "Manual Work", icon: XCircle },
  { label: "Repeat", icon: XCircle },
];

const volalyFlow = [
  { label: "Upload", icon: Upload, split: false },
  { label: "Volaly AI", icon: Sparkles, split: false },
  { label: "split", icon: Sparkles, split: true },
  { label: "Automatic Growth", icon: CheckCircle2, split: false, highlight: true },
];

export function WhyVolaly() {
  const reduce = useReducedMotion();

  return (
    <section id="why" className="bg-dots relative scroll-mt-24 overflow-hidden py-32">
      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}
        <SectionHeading
          eyebrow="Why Volaly"
          title={<>Your Content Already Works.<br /><span className="gradient-text-multi">Volaly Makes It Work Harder.</span></>}
          subtitle="Keep using YouTube, Instagram, TikTok, Facebook and your existing tools. Volaly connects everything and automatically turns every upload into revenue, visibility and AI-powered customer experiences."
        />

        {/* Four cards */}
        <Stagger className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" gap={0.08}>
          {cards.map((c) => (
            <StaggerItem key={c.title}>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
                className={`glass-card group h-full rounded-[22px] bg-gradient-to-br ${c.gradient} p-7 transition-shadow duration-300 hover:shadow-[0_16px_48px_rgba(0,0,0,0.10)]`}
              >
                <div className={`mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br ${c.iconGradient} text-white shadow-soft transition-transform duration-300 group-hover:scale-110`}>
                  <c.icon className="h-5 w-5" strokeWidth={1.8} />
                </div>
                <h3 className="text-base font-extrabold text-foreground">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Workflow comparison panels */}
        <Reveal delay={0.1}>
          <div className="mt-20 grid gap-5 sm:grid-cols-2">

            {/* Traditional */}
            <div className="rounded-[24px] border border-border/60 bg-muted/30 p-8">
              <div className="mb-6 flex items-center gap-3">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-muted">
                  <XCircle className="h-4 w-4 text-muted-foreground/60" />
                </span>
                <span className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
                  Traditional Workflow
                </span>
              </div>
              <div className="flex flex-col items-start gap-0">
                {traditional.map((step, i) => (
                  <div key={step.label} className="flex w-full flex-col">
                    <div className="flex items-center gap-3 rounded-xl border border-border/50 bg-background/50 px-4 py-3">
                      <step.icon className="h-4 w-4 shrink-0 text-muted-foreground/50" />
                      <span className="text-sm text-muted-foreground">{step.label}</span>
                    </div>
                    {i < traditional.length - 1 && (
                      <div className="ml-5 flex h-6 items-center">
                        <div className="h-full w-px bg-border/50" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Volaly */}
            <div className="rounded-[24px] border border-brand-orange/25 bg-gradient-to-br from-brand-orange/6 to-brand-blue/6 p-8">
              <div className="mb-6 flex items-center gap-3">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-brand-green/15">
                  <CheckCircle2 className="h-4 w-4 text-brand-green" />
                </span>
                <span className="text-sm font-bold uppercase tracking-wider text-foreground/70">
                  Volaly Workflow
                </span>
              </div>

              {/* Upload */}
              <FlowRow
                icon={Upload}
                label="Upload"
                gradient="from-brand-orange to-brand-pink"
                reduce={reduce}
                delay={0}
              />
              <FlowDot />

              {/* Volaly AI */}
              <FlowRow
                icon={Sparkles}
                label="Volaly AI"
                gradient="from-brand-purple to-brand-blue"
                reduce={reduce}
                delay={0.08}
              />
              <FlowDot />

              {/* Split */}
              <motion.div
                initial={reduce ? undefined : { opacity: 0, y: 8 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: 0.16 }}
                className="grid grid-cols-[1fr_auto_1fr] items-center gap-2"
              >
                <div className="flex flex-col items-center gap-1.5 rounded-xl border border-border/50 bg-background/60 px-3 py-2.5 text-center">
                  <DollarSign className="h-4 w-4 text-brand-orange" />
                  <span className="text-xs font-bold text-foreground/80">Revenue Suite</span>
                </div>
                <Plus className="h-4 w-4 shrink-0 text-muted-foreground/40" />
                <div className="flex flex-col items-center gap-1.5 rounded-xl border border-border/50 bg-background/60 px-3 py-2.5 text-center">
                  <Rocket className="h-4 w-4 text-brand-blue" />
                  <span className="text-xs font-bold text-foreground/80">Visibility Suite</span>
                </div>
              </motion.div>
              <FlowDot />

              {/* Automatic Growth */}
              <motion.div
                initial={reduce ? undefined : { opacity: 0, y: 8 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: 0.24 }}
                className="flex items-center gap-3 rounded-xl bg-gradient-to-r from-brand-green to-brand-cyan px-4 py-3 shadow-[0_4px_20px_oklch(0.68_0.2_140/0.30)]"
              >
                <CheckCircle2 className="h-4 w-4 shrink-0 text-white" />
                <span className="text-sm font-extrabold text-white">Automatic Growth</span>
              </motion.div>
            </div>
          </div>
        </Reveal>

        {/* Bottom statement + CTA */}
        <Reveal delay={0.1}>
          <div className="mt-16 flex flex-col items-center gap-6 text-center">
            <p className="text-2xl font-black tracking-tight text-foreground sm:text-3xl">
              You already create content.{" "}
              <span className="gradient-text-multi">Volaly makes every upload work harder.</span>
            </p>
            <Button size="xl" variant="hero" onClick={openDemo}>
              See Volaly in Action <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </Reveal>

      </div>
    </section>
  );
}

/* ── Helpers ── */

function FlowRow({
  icon: Icon,
  label,
  gradient,
  reduce,
  delay,
}: {
  icon: React.ElementType;
  label: string;
  gradient: string;
  reduce: boolean | null;
  delay: number;
}) {
  return (
    <motion.div
      initial={reduce ? undefined : { opacity: 0, x: -10 }}
      whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay }}
      className="flex items-center gap-3 rounded-xl border border-border/50 bg-background/60 px-4 py-3"
    >
      <span className={`grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-gradient-to-br ${gradient}`}>
        <Icon className="h-3.5 w-3.5 text-white" strokeWidth={2} />
      </span>
      <span className="text-sm font-bold text-foreground">{label}</span>
    </motion.div>
  );
}

function FlowDot() {
  return (
    <div className="ml-4 flex h-5 items-center">
      <div className="h-full w-px bg-gradient-to-b from-brand-orange/40 to-brand-blue/40" />
    </div>
  );
}
