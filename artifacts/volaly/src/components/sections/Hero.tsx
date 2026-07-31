import { ArrowRight, Play, Sparkles, TrendingUp, MessageCircle, Star, CalendarCheck } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "./shared";
import { AuroraOrbs } from "@/components/Backdrop";
import { openDemo } from "@/lib/demo";

const chain = ["Business", "Visibility", "Customers", "Bookings", "Revenue"];

const floatCards = [
  { icon: Star, title: "New 5-star review", sub: "Google Business", accent: "text-brand-orange", pos: "left-0 top-6", delay: 0 },
  { icon: MessageCircle, title: "AI replied in 3s", sub: "WhatsApp · LINE", accent: "text-brand-blue", pos: "right-0 top-28", delay: 0.6 },
  { icon: CalendarCheck, title: "Booking confirmed", sub: "Auto-scheduled", accent: "text-brand-purple", pos: "left-4 bottom-6", delay: 1.2 },
];

export function Hero() {
  const reduce = useReducedMotion();
  return (
    <section className="bg-aurora noise relative overflow-hidden pt-36 pb-24">
      <AuroraOrbs />
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(70%_60%_at_50%_35%,black,transparent)]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Eyebrow>
              <Sparkles className="h-3.5 w-3.5 text-brand-orange" /> The AI Business Growth Platform
            </Eyebrow>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 text-5xl font-extrabold leading-[0.98] tracking-tight text-foreground sm:text-6xl md:text-7xl"
          >
            Turn Visibility
            <span className="block gradient-text-multi">into Revenue.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18 }}
            className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground"
          >
            Create content. Attract customers. Convert enquiries. Grow automatically. Volaly is the
            AI platform that gets your business found and turns attention into revenue.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.28 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Button size="xl" variant="hero" onClick={openDemo}>
              Book Demo <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="xl" variant="heroOutline" onClick={openDemo}>
              <Play className="h-4 w-4" /> Watch 2 Minute Demo
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-muted-foreground"
          >
            <span className="inline-flex items-center gap-2"><TrendingUp className="h-4 w-4 text-brand-green" /> Live in days, not months</span>
            <span className="inline-flex items-center gap-2"><Sparkles className="h-4 w-4 text-brand-purple" /> Works in any language</span>
          </motion.div>
        </div>

        {/* Visual: workflow chain + floating cards */}
        <div className="relative mx-auto h-[460px] w-full max-w-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="glass-card absolute inset-x-6 top-8 rounded-[28px] p-6"
          >
            <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Growth flow</div>
            <div className="mt-5 space-y-3">
              {chain.map((step, i) => (
                <motion.div
                  key={step}
                  initial={reduce ? undefined : { opacity: 0, x: -12 }}
                  animate={reduce ? undefined : { opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.12, duration: 0.5 }}
                  className="relative flex items-center gap-3"
                >
                  <span
                    className="grid h-9 w-9 shrink-0 place-items-center rounded-xl text-sm font-bold text-white"
                    style={{
                      background: `linear-gradient(135deg, var(--brand-orange), var(--brand-blue))`,
                      opacity: 0.55 + i * 0.11,
                    }}
                  >
                    {i + 1}
                  </span>
                  <div className="flex-1 rounded-xl border border-border/60 bg-background/60 px-4 py-2.5 text-sm font-semibold text-foreground">
                    {step}
                  </div>
                  {i < chain.length - 1 && (
                    <span className="absolute left-[17px] top-9 h-3 w-px bg-gradient-to-b from-brand-orange/60 to-brand-blue/60" />
                  )}
                </motion.div>
              ))}
            </div>
            <div className="mt-5 flex items-center justify-between rounded-2xl bg-gradient-to-r from-brand-orange/12 to-brand-blue/12 px-4 py-3">
              <span className="text-xs font-medium text-muted-foreground">Revenue this month</span>
              <span className="text-lg font-extrabold gradient-text-multi">+38%</span>
            </div>
          </motion.div>

          {floatCards.map((c) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 10 }}
              animate={reduce ? { opacity: 1 } : { opacity: 1, y: [0, -12, 0] }}
              transition={{
                opacity: { duration: 0.6, delay: 0.6 + c.delay },
                y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: c.delay },
              }}
              className={`glass-card absolute ${c.pos} flex items-center gap-3 rounded-2xl px-4 py-3`}
            >
              <span className={`grid h-9 w-9 place-items-center rounded-xl bg-background/80 ${c.accent}`}>
                <c.icon className="h-4.5 w-4.5" />
              </span>
              <div>
                <div className="text-sm font-bold text-foreground">{c.title}</div>
                <div className="text-xs text-muted-foreground">{c.sub}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
