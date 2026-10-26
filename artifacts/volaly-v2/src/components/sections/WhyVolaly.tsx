import {
  Upload,
  TrendingUp,
  Plug,
  BrainCircuit,
  ArrowRight,
  XCircle,
  CheckCircle2,
  Sparkles,
  Rocket,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "./shared";
import { Stagger, StaggerItem, Reveal } from "@/components/Motion";
import { openDemo } from "@/lib/demo";

/* ── Four reason cards (visual metadata; copy from i18n) ── */
const cardMeta = [
  { icon: Upload, gradient: "from-brand-orange/15 to-brand-pink/15", iconGradient: "from-brand-orange to-brand-pink" },
  { icon: TrendingUp, gradient: "from-brand-green/15 to-brand-cyan/15", iconGradient: "from-brand-green to-brand-cyan" },
  { icon: Plug, gradient: "from-brand-blue/15 to-brand-purple/15", iconGradient: "from-brand-blue to-brand-purple" },
  { icon: BrainCircuit, gradient: "from-brand-purple/15 to-brand-pink/15", iconGradient: "from-brand-purple to-brand-pink" },
];

const traditionalIcons = [Upload, XCircle, XCircle, XCircle];

interface WhyCard {
  title: string;
  desc: string;
}

export function WhyVolaly() {
  const { t } = useTranslation("home");
  const reduce = useReducedMotion();

  const cards = t("why.cards", { returnObjects: true }) as WhyCard[];
  const traditionalSteps = t("why.traditional.steps", { returnObjects: true }) as string[];

  return (
    <section id="why" className="bg-dots relative scroll-mt-24 overflow-hidden py-32">
      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}
        <SectionHeading
          eyebrow={t("why.eyebrow")}
          title={<>{t("why.titleLine1")}<br /><span className="gradient-text-multi">{t("why.titleLine2")}</span></>}
          subtitle={t("why.subtitle")}
        />

        {/* Four cards */}
        <Stagger className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" gap={0.08}>
          {cards.map((c, i) => {
            const meta = cardMeta[i];
            return (
              <StaggerItem key={c.title}>
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                  className={`glass-card group h-full rounded-[22px] bg-gradient-to-br ${meta.gradient} p-7 transition-shadow duration-300 hover:shadow-[0_16px_48px_rgba(0,0,0,0.10)]`}
                >
                  <div className={`mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br ${meta.iconGradient} text-white shadow-soft transition-transform duration-300 group-hover:scale-110`}>
                    <meta.icon className="h-5 w-5" strokeWidth={1.8} />
                  </div>
                  <h3 className="text-base font-extrabold text-foreground">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
                </motion.div>
              </StaggerItem>
            );
          })}
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
                  {t("why.traditional.label")}
                </span>
              </div>
              <div className="flex flex-col items-start gap-0">
                {traditionalSteps.map((label, i) => {
                  const Icon = traditionalIcons[i];
                  return (
                    <div key={label} className="flex w-full flex-col">
                      <div className="flex items-center gap-3 rounded-xl border border-border/50 bg-background/50 px-4 py-3">
                        <Icon className="h-4 w-4 shrink-0 text-muted-foreground/50" />
                        <span className="text-sm text-muted-foreground">{label}</span>
                      </div>
                      {i < traditionalSteps.length - 1 && (
                        <div className="ml-5 flex h-6 items-center">
                          <div className="h-full w-px bg-border/50" />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Volaly */}
            <div className="rounded-[24px] border border-brand-orange/25 bg-gradient-to-br from-brand-orange/6 to-brand-blue/6 p-8">
              <div className="mb-6 flex items-center gap-3">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-brand-green/15">
                  <CheckCircle2 className="h-4 w-4 text-brand-green" />
                </span>
                <span className="text-sm font-bold uppercase tracking-wider text-foreground/70">
                  {t("why.volalyFlow.label")}
                </span>
              </div>

              {/* Upload */}
              <FlowRow
                icon={Upload}
                label={t("why.volalyFlow.upload")}
                gradient="from-brand-orange to-brand-pink"
                reduce={reduce}
                delay={0}
              />
              <FlowDot />

              {/* Volaly AI */}
              <FlowRow
                icon={Sparkles}
                label={t("why.volalyFlow.ai")}
                gradient="from-brand-purple to-brand-blue"
                reduce={reduce}
                delay={0.08}
              />
              <FlowDot />

              {/* Visibility Suite */}
              <motion.div
                initial={reduce ? undefined : { opacity: 0, y: 8 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: 0.16 }}
                className="flex flex-col items-center gap-1.5 rounded-xl border border-border/50 bg-background/60 px-3 py-2.5 text-center"
              >
                <Rocket className="h-4 w-4 text-brand-blue" />
                <span className="text-xs font-bold text-foreground/80">{t("why.volalyFlow.visibilitySuite")}</span>
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
                <span className="text-sm font-extrabold text-white">{t("why.volalyFlow.growth")}</span>
              </motion.div>
            </div>
          </div>
        </Reveal>

        {/* Bottom statement + CTA */}
        <Reveal delay={0.1}>
          <div className="mt-16 flex flex-col items-center gap-6 text-center">
            <p className="text-2xl font-black tracking-tight text-foreground sm:text-3xl">
              {t("why.bottom.textPre")}
              <span className="gradient-text-multi">{t("why.bottom.textHighlight")}</span>
            </p>
            <Button size="xl" variant="hero" onClick={openDemo}>
              {t("why.bottom.cta")} <ArrowRight className="h-4 w-4" />
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
