import { ArrowRight, Play, Upload, Zap, DollarSign, Rocket } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { Button } from "@/components/ui/button";
import { AuroraOrbs } from "@/components/Backdrop";
import { openDemo } from "@/lib/demo";

const revenueSuite = ["AI FAQ", "Voice AI", "Creator Shop", "Memberships"];
const visibilitySuite = ["Smart Shorts", "Auto Posting", "Blog", "SEO"];

const trustBadges = [
  { icon: Zap, label: "One Upload", color: "text-brand-orange" },
  { icon: DollarSign, label: "Multiple Revenue Streams", color: "text-brand-purple" },
  { icon: Rocket, label: "Grow Everywhere", color: "text-brand-blue" },
];

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="bg-aurora noise relative overflow-hidden pt-36 pb-20">
      <AuroraOrbs />
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(70%_60%_at_50%_35%,black,transparent)]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-[1.1fr_0.9fr]">
        {/* LEFT — copy */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="text-6xl font-black leading-[0.95] tracking-tight text-foreground sm:text-7xl md:text-8xl"
          >
            One Upload.
            <span className="block gradient-text-multi">Volaly Does the Rest.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-8 max-w-lg space-y-3 text-lg leading-relaxed text-muted-foreground"
          >
            <p>
              Transform every piece of content into revenue, visibility and AI-powered customer conversations.
            </p>
            <p>
              Connect your social accounts once. Volaly automatically creates revenue streams, AI knowledge, FAQs, voice conversations, smart shorts and multi-platform content.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.26 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Button size="xl" variant="hero" onClick={openDemo}>
              Start Free <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="xl" variant="heroOutline" onClick={openDemo}>
              <Play className="h-4 w-4" /> Watch Demo
            </Button>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.42 }}
            className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3"
          >
            {trustBadges.map(({ icon: Icon, label, color }) => (
              <span key={label} className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                <Icon className={`h-4 w-4 ${color}`} />
                {label}
              </span>
            ))}
          </motion.div>
        </div>

        {/* RIGHT — animated workflow card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.93, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="glass-card rounded-[28px] p-7 shadow-2xl">
            {/* Step: Upload */}
            <FlowStep
              icon={<Upload className="h-4 w-4 text-white" />}
              label="Upload"
              accent="from-brand-orange to-brand-pink"
              delay={0.35}
              reduce={reduce}
            />

            <Connector delay={0.45} reduce={reduce} />

            {/* Step: Volaly AI */}
            <FlowStep
              icon={<span className="text-xs font-black text-white">AI</span>}
              label="Volaly AI"
              accent="from-brand-blue to-brand-purple"
              delay={0.5}
              reduce={reduce}
            />

            <Connector delay={0.6} reduce={reduce} />

            {/* Split suites */}
            <motion.div
              initial={reduce ? undefined : { opacity: 0, y: 10 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.5 }}
              className="grid grid-cols-2 gap-3"
            >
              <SuiteCard title="Revenue Suite" items={revenueSuite} gradient="from-brand-orange/15 to-brand-pink/15" />
              <SuiteCard title="Visibility Suite" items={visibilitySuite} gradient="from-brand-blue/15 to-brand-purple/15" />
            </motion.div>

            <Connector delay={0.8} reduce={reduce} />

            {/* Revenue result */}
            <motion.div
              initial={reduce ? undefined : { opacity: 0, y: 10 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.5 }}
              className="flex items-center justify-between rounded-2xl bg-gradient-to-r from-brand-orange/12 to-brand-blue/12 px-4 py-3"
            >
              <span className="text-sm font-semibold text-muted-foreground">Revenue</span>
              <span className="text-xl font-black gradient-text-multi">+38%</span>
            </motion.div>
          </div>

          {/* Floating accent blob */}
          <motion.div
            animate={reduce ? {} : { y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br from-brand-orange/30 to-brand-pink/30 blur-2xl"
          />
          <motion.div
            animate={reduce ? {} : { y: [0, 12, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="pointer-events-none absolute -bottom-8 -left-8 h-28 w-28 rounded-full bg-gradient-to-br from-brand-blue/25 to-brand-purple/25 blur-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}

/* ── helpers ── */

function FlowStep({
  icon,
  label,
  accent,
  delay,
  reduce,
}: {
  icon: React.ReactNode;
  label: string;
  accent: string;
  delay: number;
  reduce: boolean | null;
}) {
  return (
    <motion.div
      initial={reduce ? undefined : { opacity: 0, x: -12 }}
      animate={reduce ? undefined : { opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.5 }}
      className="flex items-center gap-3"
    >
      <span
        className={`grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br ${accent}`}
      >
        {icon}
      </span>
      <div className="flex-1 rounded-xl border border-border/60 bg-background/60 px-4 py-2.5 text-sm font-bold text-foreground">
        {label}
      </div>
    </motion.div>
  );
}

function Connector({ delay, reduce }: { delay: number; reduce: boolean | null }) {
  return (
    <motion.div
      initial={reduce ? undefined : { opacity: 0 }}
      animate={reduce ? undefined : { opacity: 1 }}
      transition={{ delay, duration: 0.3 }}
      className="ml-4 my-2 flex flex-col items-center gap-0.5"
    >
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="h-1.5 w-1.5 rounded-full bg-gradient-to-b from-brand-orange/70 to-brand-blue/70"
        />
      ))}
    </motion.div>
  );
}

function SuiteCard({
  title,
  items,
  gradient,
}: {
  title: string;
  items: string[];
  gradient: string;
}) {
  return (
    <div className={`rounded-2xl bg-gradient-to-br ${gradient} border border-border/40 p-3`}>
      <div className="mb-2 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
        {title}
      </div>
      <ul className="space-y-1">
        {items.map((item) => (
          <li key={item} className="text-xs font-medium text-foreground/80">
            • {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
