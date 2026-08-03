import {
  Upload,
  BrainCircuit,
  DollarSign,
  Rocket,
  BarChart3,
  ArrowRight,
  ArrowDown,
  Plus,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "./shared";
import { Stagger, StaggerItem, Reveal } from "@/components/Motion";
import { openDemo } from "@/lib/demo";

/* ── Steps ── */
const steps = [
  {
    number: "01",
    icon: Upload,
    title: "Upload",
    desc: "Upload a video, image or connect your social accounts.",
    gradient: "from-brand-orange to-brand-pink",
    glow: "shadow-[0_8px_32px_oklch(0.72_0.2_48/0.35)]",
  },
  {
    number: "02",
    icon: BrainCircuit,
    title: "AI Processing",
    desc: "Volaly understands your content and builds AI knowledge automatically.",
    gradient: "from-brand-purple to-brand-blue",
    glow: "shadow-[0_8px_32px_oklch(0.55_0.28_305/0.35)]",
  },
  {
    number: "03",
    icon: DollarSign,
    title: "Revenue Suite",
    desc: "Create AI FAQs, Voice AI, Shops, Memberships and Digital Products.",
    gradient: "from-brand-orange to-brand-yellow",
    glow: "shadow-[0_8px_32px_oklch(0.72_0.2_48/0.35)]",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Visibility Suite",
    desc: "Generate Smart Shorts, social posts, blogs, newsletters and SEO content automatically.",
    gradient: "from-brand-blue to-brand-cyan",
    glow: "shadow-[0_8px_32px_oklch(0.55_0.25_258/0.35)]",
  },
  {
    number: "05",
    icon: BarChart3,
    title: "Grow",
    desc: "Reach more people, answer more customers and generate more revenue.",
    gradient: "from-brand-green to-brand-blue",
    glow: "shadow-[0_8px_32px_oklch(0.68_0.2_140/0.35)]",
  },
];

/* ── Animated flow nodes ── */
const flowNodes = [
  { label: "Content", sub: "One upload" },
  { label: "Volaly AI", sub: "Processing" },
  null, // split node — rendered separately
  { label: "More Customers", sub: "Engaged 24/7" },
  { label: "More Revenue", sub: "Automatically" },
];

export function Workflow() {
  const reduce = useReducedMotion();

  return (
    <section id="how-it-works" className="bg-dots relative scroll-mt-24 overflow-hidden py-32">
      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}
        <SectionHeading
          eyebrow="How It Works"
          title={<>From One Upload to <span className="gradient-text-multi">Complete Automation.</span></>}
          subtitle="Connect your content once. Volaly automatically transforms it into revenue, visibility and AI-powered customer experiences."
        />

        {/* Horizontal step cards */}
        <div className="mt-20 hidden lg:block">
          <Stagger className="relative grid grid-cols-5 gap-4" gap={0.09}>
            {/* Connecting line behind cards */}
            <div className="pointer-events-none absolute top-11 left-[10%] right-[10%] h-px bg-gradient-to-r from-brand-orange via-brand-purple to-brand-green opacity-30" />

            {steps.map((step) => (
              <StaggerItem key={step.title}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                  className="group flex flex-col items-center text-center"
                >
                  {/* Icon circle */}
                  <div className={`relative z-10 grid h-[88px] w-[88px] place-items-center rounded-[26px] bg-gradient-to-br ${step.gradient} ${step.glow} text-white transition-transform duration-300 group-hover:scale-105`}>
                    <step.icon className="h-9 w-9" strokeWidth={1.7} />
                    <span className="absolute -right-1.5 -top-1.5 grid h-5 w-5 place-items-center rounded-full bg-background text-[10px] font-black text-foreground shadow-soft border border-border/60">
                      {step.number}
                    </span>
                  </div>
                  {/* Card */}
                  <div className="glass-card mt-5 w-full rounded-[20px] p-5 transition-shadow duration-300 group-hover:shadow-[0_12px_36px_rgba(0,0,0,0.10)]">
                    <h3 className="text-base font-extrabold text-foreground">{step.title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{step.desc}</p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        {/* Mobile: vertical steps */}
        <div className="mt-14 lg:hidden">
          <Stagger className="relative space-y-4" gap={0.08}>
            <div className="absolute left-[27px] top-0 h-full w-px bg-gradient-to-b from-brand-orange via-brand-purple to-brand-green opacity-30" />
            {steps.map((step) => (
              <StaggerItem key={step.title}>
                <div className="relative flex items-start gap-5">
                  <div className={`relative z-10 grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br ${step.gradient} text-white`}>
                    <step.icon className="h-6 w-6" strokeWidth={1.8} />
                    <span className="absolute -right-1 -top-1 grid h-5 w-5 place-items-center rounded-full bg-background text-[10px] font-black text-foreground shadow-soft border border-border/60">
                      {step.number}
                    </span>
                  </div>
                  <div className="glass-card flex-1 rounded-[18px] p-4">
                    <h3 className="text-sm font-extrabold text-foreground">{step.title}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{step.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        {/* Animated flow diagram */}
        <Reveal delay={0.1}>
          <div className="mt-24">
            <p className="mb-10 text-center text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              The full automation flow
            </p>

            <div className="mx-auto flex max-w-xl flex-col items-center gap-0">

              {/* Content */}
              <FlowNode label="Content" sub="One upload" gradient="from-brand-orange to-brand-pink" reduce={reduce} delay={0} />
              <FlowConnector reduce={reduce} delay={0.15} />

              {/* Volaly AI */}
              <FlowNode label="Volaly AI" sub="Processing" gradient="from-brand-purple to-brand-blue" reduce={reduce} delay={0.2} />
              <FlowConnector reduce={reduce} delay={0.35} />

              {/* Split: Revenue + Visibility */}
              <motion.div
                initial={reduce ? undefined : { opacity: 0, y: 16 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
                className="w-full"
              >
                <div className="relative flex items-start justify-center gap-4">
                  {/* left branch line */}
                  <div className="pointer-events-none absolute top-0 left-[calc(50%-1px)] -z-10 h-4 w-px bg-gradient-to-b from-brand-blue/60 to-transparent" />

                  <div className="glass-card flex flex-1 flex-col items-center rounded-[20px] p-5 text-center">
                    <div className="mb-2 grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-brand-orange to-brand-yellow text-white">
                      <DollarSign className="h-5 w-5" strokeWidth={1.8} />
                    </div>
                    <span className="text-sm font-extrabold text-foreground">Revenue Suite</span>
                    <span className="mt-1 text-xs text-muted-foreground">AI FAQ · Voice AI · Shop</span>
                  </div>

                  <div className="flex flex-col items-center self-center pt-2">
                    <Plus className="h-5 w-5 text-muted-foreground/50" />
                  </div>

                  <div className="glass-card flex flex-1 flex-col items-center rounded-[20px] p-5 text-center">
                    <div className="mb-2 grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-brand-blue to-brand-cyan text-white">
                      <Rocket className="h-5 w-5" strokeWidth={1.8} />
                    </div>
                    <span className="text-sm font-extrabold text-foreground">Visibility Suite</span>
                    <span className="mt-1 text-xs text-muted-foreground">Shorts · Posts · SEO</span>
                  </div>
                </div>
              </motion.div>

              <FlowConnector reduce={reduce} delay={0.55} />

              {/* More Customers */}
              <FlowNode label="More Customers" sub="Engaged 24/7" gradient="from-brand-green to-brand-cyan" reduce={reduce} delay={0.6} />
              <FlowConnector reduce={reduce} delay={0.75} />

              {/* More Revenue */}
              <FlowNode label="More Revenue" sub="Automatically" gradient="from-brand-orange to-brand-purple" reduce={reduce} delay={0.8} highlight />
            </div>
          </div>
        </Reveal>

        {/* Bottom CTA */}
        <Reveal delay={0.1}>
          <div className="mt-20 flex flex-col items-center gap-6 text-center">
            <h3 className="text-3xl font-black tracking-tight text-foreground sm:text-4xl">
              One Upload.{" "}
              <span className="gradient-text-multi">Everything Else Happens Automatically.</span>
            </h3>
            <Button size="xl" variant="hero" onClick={openDemo}>
              See How Volaly Works <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </Reveal>

      </div>
    </section>
  );
}

/* ── Sub-components ── */

function FlowNode({
  label,
  sub,
  gradient,
  reduce,
  delay,
  highlight = false,
}: {
  label: string;
  sub: string;
  gradient: string;
  reduce: boolean | null;
  delay: number;
  highlight?: boolean;
}) {
  return (
    <motion.div
      initial={reduce ? undefined : { opacity: 0, y: 16 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
      className={`w-full rounded-[20px] px-6 py-4 text-center ${
        highlight
          ? `bg-gradient-to-br ${gradient} shadow-[0_12px_40px_rgba(0,0,0,0.18)]`
          : "glass-card"
      }`}
    >
      <div className={`text-base font-extrabold ${highlight ? "text-white" : "text-foreground"}`}>
        {label}
      </div>
      <div className={`mt-0.5 text-xs ${highlight ? "text-white/70" : "text-muted-foreground"}`}>
        {sub}
      </div>
    </motion.div>
  );
}

function FlowConnector({ reduce, delay }: { reduce: boolean | null; delay: number }) {
  return (
    <motion.div
      initial={reduce ? undefined : { opacity: 0, scaleY: 0 }}
      whileInView={reduce ? undefined : { opacity: 1, scaleY: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, ease: "easeOut", delay }}
      style={{ originY: 0 }}
      className="flex h-8 w-px flex-col items-center bg-gradient-to-b from-brand-orange/50 to-brand-blue/50"
    >
      <ArrowDown className="relative -bottom-6 h-4 w-4 -translate-x-1/2 text-muted-foreground/40" />
    </motion.div>
  );
}
