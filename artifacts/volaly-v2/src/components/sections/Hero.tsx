import { ArrowRight, Play, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { AuroraOrbs } from "@/components/Backdrop";
import { openDemo } from "@/lib/demo";

const microBenefits = [
  "One Upload",
  "Visibility Suite",
  "All Platforms",
];

export function Hero() {
  return (
    <section className="bg-aurora noise relative overflow-hidden pt-36 pb-24">
      <AuroraOrbs />
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(70%_60%_at_50%_35%,black,transparent)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              className="text-[clamp(2.6rem,6vw,5.5rem)] font-black leading-[0.95] tracking-tight text-foreground"
            >
              One Upload.
              <span className="block gradient-text-multi">Volaly Does the Rest.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-7 text-lg leading-relaxed text-muted-foreground"
            >
              Turn every piece of content into revenue, visibility and AI-powered customer conversations automatically.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.28 }}
              className="mt-8 flex flex-wrap justify-center gap-4"
            >
              <Button size="xl" variant="hero" onClick={openDemo}>
                Start Free <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="xl" variant="heroOutline" onClick={openDemo}>
                <Play className="h-4 w-4" /> Watch Demo
              </Button>
            </motion.div>

            {/* Micro benefits */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.42 }}
              className="mt-8 flex flex-wrap items-center justify-center gap-x-7 gap-y-2"
            >
              {microBenefits.map((b) => (
                <span key={b} className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-brand-green" />
                  {b}
                </span>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
