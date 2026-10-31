import { useState, useEffect, useRef } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import {
  Upload, Sparkles, DollarSign, Rocket, TrendingUp, Plus,
  Mic, MicOff, MessageSquare, Bot, ArrowRight, Play,
  Clapperboard, BarChart3, Users, Eye, MousePointer,
  ShoppingCart, CircleDollarSign, RefreshCw,
  CheckCircle2, Send, Scissors, Pencil, Film, Sliders,
} from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { AuroraOrbs } from "@/components/Backdrop";
import { Reveal, Stagger, StaggerItem } from "@/components/Motion";
import { SectionHeading } from "@/components/sections/shared";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { openDemo } from "@/lib/demo";

export const Route = createFileRoute("/$lang/demo")({
  component: DemoPage,
});

/* ═══════════════════════════════════════
   STATIC VISUAL METADATA (non-translatable)
═══════════════════════════════════════ */

const revenueDashboardMeta = [
  { key: "revenue", icon: CircleDollarSign, value: "€ 4,280", change: "+38%",  gradient: "from-brand-orange/20 to-brand-yellow/20", ic: "text-brand-orange" },
  { key: "orders",  icon: ShoppingCart,     value: "142",     change: "+22%",  gradient: "from-brand-blue/20 to-brand-cyan/20",   ic: "text-brand-blue" },
  { key: "visitors",icon: Eye,              value: "12,440",  change: "+67%",  gradient: "from-brand-purple/20 to-brand-pink/20", ic: "text-brand-purple" },
  { key: "members", icon: Users,            value: "89",      change: "+14",   gradient: "from-brand-green/20 to-brand-cyan/20",  ic: "text-brand-green" },
  { key: "growth",  icon: TrendingUp,       value: "+38%",    change: "MoM",   gradient: "from-brand-pink/20 to-brand-orange/20", ic: "text-brand-pink" },
];

const visibilityDashboardMeta = [
  { key: "posts",  icon: Send,        value: "284",    change: "auto",   gradient: "from-brand-blue/20 to-brand-purple/20", ic: "text-brand-blue" },
  { key: "views",  icon: Eye,         value: "1.2M",   change: "+124%",  gradient: "from-brand-purple/20 to-brand-blue/20", ic: "text-brand-purple" },
  { key: "clicks", icon: MousePointer,value: "48K",    change: "+89%",   gradient: "from-brand-orange/20 to-brand-yellow/20", ic: "text-brand-orange" },
  { key: "reach",  icon: Users,       value: "340K",   change: "+201%",  gradient: "from-brand-green/20 to-brand-cyan/20", ic: "text-brand-green" },
  { key: "shorts", icon: Clapperboard,value: "96",     change: "auto",   gradient: "from-brand-pink/20 to-brand-purple/20", ic: "text-brand-pink" },
];

const shortsStepsMeta = [
  { key: "upload",  icon: Upload,      gradient: "from-brand-orange to-brand-pink" },
  { key: "ai",      icon: Sparkles,    gradient: "from-brand-purple to-brand-blue" },
  { key: "shorts",  icon: Clapperboard,gradient: "from-brand-blue to-brand-cyan" },
  { key: "publish", icon: Send,        gradient: "from-brand-green to-brand-cyan", highlight: true },
];

/* ═══════════════════════════════════════
   PAGE
═══════════════════════════════════════ */

function DemoPage() {
  const { lang } = Route.useParams();
  const { t } = useTranslation("demo");
  return (
    <>
      <SEO
        title={t("seo.title")}
        description={t("seo.description")}
        canonical={`https://volaly.com/${lang}/demo`}
      />

      <HeroSection />
      <WorkflowSection />
      <AIChatSection />
      <VoiceAISection />
      <ShortsSection />
      <RevenueDashboardSection />
      <VisibilityDashboardSection />
      <FinalCtaSection />
    </>
  );
}

/* ═══════════════════════════════════════
   SECTION 1 — HERO
═══════════════════════════════════════ */

function HeroSection() {
  const { t } = useTranslation("demo");
  return (
    <section className="bg-aurora noise relative overflow-hidden pt-36 pb-28">
      <AuroraOrbs />
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(70%_60%_at_50%_35%,black,transparent)]" />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground shadow-soft backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-brand-orange" /> {t("hero.badge")}
          </span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="mt-7 text-[clamp(3rem,7vw,6rem)] font-black leading-[0.93] tracking-tight text-foreground"
        >
          {t("hero.titleLine1")}
          <span className="block gradient-text-multi">{t("hero.titleLine2")}</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18 }}
          className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground"
        >
          {t("hero.subtitle")}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.28 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <Button size="xl" variant="hero" onClick={openDemo}>
            {t("hero.startFree")} <ArrowRight className="h-4 w-4" />
          </Button>
          <Button size="xl" variant="heroOutline" onClick={openDemo}>
            <Play className="h-4 w-4" /> {t("hero.bookDemo")}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   SECTION 2 — INTERACTIVE WORKFLOW
═══════════════════════════════════════ */

function WorkflowSection() {
  const { t } = useTranslation("demo");
  const reduce = useReducedMotion();
  const [activeNode, setActiveNode] = useState<number | null>(null);

  type WorkflowNode = {
    key: "upload" | "ai" | "growth";
    icon: typeof Upload;
    gradient: string;
    highlight?: boolean;
  };

  const workflowNodes: Array<WorkflowNode | null> = [
    { key: "upload", icon: Upload,     gradient: "from-brand-orange to-brand-pink" },
    { key: "ai",     icon: Sparkles,   gradient: "from-brand-purple to-brand-blue" },
    null,
    { key: "growth", icon: TrendingUp, gradient: "from-brand-green to-brand-blue", highlight: true },
  ];

  return (
    <section className="relative overflow-hidden py-32">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background via-brand-purple/[0.03] to-background" />
      <div className="relative mx-auto max-w-3xl px-6">
        <SectionHeading
          eyebrow={t("workflow.eyebrow")}
          title={<>{t("workflow.titlePre")}<span className="gradient-text-multi">{t("workflow.titleHighlight")}</span></>}
          subtitle={t("workflow.subtitle")}
        />
        <div className="mt-16 flex flex-col items-center gap-0">
          {workflowNodes.map((node, i) => {
            if (node === null) {
              // Split node
              return (
                <div key="split" className="w-full">
                  <Connector reduce={reduce} delay={0.3} />
                  <motion.div
                    initial={reduce ? undefined : { opacity: 0, y: 12 }}
                    whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55, delay: 0.35 }}
                    className="grid grid-cols-[1fr_auto_1fr] items-stretch gap-3"
                  >
                    <WorkflowCard icon={DollarSign} label={t("workflow.split.revenueLabel")} sub={t("workflow.split.revenueSub")} gradient="from-brand-orange to-brand-yellow" />
                    <div className="flex items-center justify-center">
                      <Plus className="h-5 w-5 text-muted-foreground/40" />
                    </div>
                    <WorkflowCard icon={Rocket} label={t("workflow.split.visibilityLabel")} sub={t("workflow.split.visibilitySub")} gradient="from-brand-blue to-brand-cyan" />
                  </motion.div>
                  <Connector reduce={reduce} delay={0.5} />
                </div>
              );
            }
            const label = t(`workflow.nodes.${node.key}.label`);
            const sub = t(`workflow.nodes.${node.key}.sub`);
            return (
              <div key={node.key} className="w-full">
                {i > 0 && i !== 2 && <Connector reduce={reduce} delay={i * 0.12} />}
                <motion.div
                  initial={reduce ? undefined : { opacity: 0, y: 12 }}
                  whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: i * 0.1 }}
                  onHoverStart={() => setActiveNode(i)}
                  onHoverEnd={() => setActiveNode(null)}
                  whileHover={{ scale: 1.02 }}
                  className={`flex cursor-default items-center gap-4 rounded-[22px] px-6 py-5 transition-all duration-300 ${
                    node.highlight
                      ? `bg-gradient-to-r ${node.gradient} shadow-[0_8px_32px_rgba(0,0,0,0.18)]`
                      : "glass-card hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)]"
                  }`}
                >
                  <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br ${node.gradient} ${node.highlight ? "bg-white/20" : ""} shadow-soft`}>
                    <node.icon className="h-5 w-5 text-white" strokeWidth={1.8} />
                  </span>
                  <div>
                    <div className={`text-base font-extrabold ${node.highlight ? "text-white" : "text-foreground"}`}>{label}</div>
                    <div className={`text-xs ${node.highlight ? "text-white/70" : "text-muted-foreground"}`}>{sub}</div>
                  </div>
                  {activeNode === i && !node.highlight && (
                    <motion.span
                      initial={{ opacity: 0, x: 8 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="ml-auto rounded-full bg-brand-orange/10 px-3 py-1 text-xs font-semibold text-brand-orange"
                    >
                      {t("workflow.automatic")}
                    </motion.span>
                  )}
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function WorkflowCard({ icon: Icon, label, sub, gradient }: { icon: React.ElementType; label: string; sub: string; gradient: string }) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2 }}
      className="flex flex-col items-center gap-2.5 rounded-[20px] border border-border/60 bg-background/80 px-4 py-5 text-center"
    >
      <span className={`grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br ${gradient} shadow-soft`}>
        <Icon className="h-4.5 w-4.5 text-white" strokeWidth={1.8} />
      </span>
      <span className="text-sm font-extrabold text-foreground">{label}</span>
      <span className="text-xs text-muted-foreground">{sub}</span>
    </motion.div>
  );
}

function Connector({ reduce, delay }: { reduce: boolean | null; delay: number }) {
  return (
    <motion.div
      initial={reduce ? undefined : { scaleY: 0, opacity: 0 }}
      whileInView={reduce ? undefined : { scaleY: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay }}
      style={{ originY: 0 }}
      className="mx-auto h-8 w-px bg-gradient-to-b from-brand-orange/40 to-brand-blue/40"
    />
  );
}

/* ═══════════════════════════════════════
   SECTION 3 — AI CHAT DEMO
═══════════════════════════════════════ */

type Message = { role: "user" | "ai"; text: string };
type ChatQuestion = { q: string; a: string };

function AIChatSection() {
  const { t } = useTranslation("demo");
  const chatQuestions = t("chat.questions", { returnObjects: true }) as ChatQuestion[];
  const [messages, setMessages] = useState<Message[]>([
    { role: "ai", text: t("chat.initialMessage") },
  ]);
  const [typing, setTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  const handleQuestion = (q: ChatQuestion) => {
    if (typing) return;
    setMessages((m) => [...m, { role: "user", text: q.q }]);
    setTyping(true);
    setTimeout(() => {
      setMessages((m) => [...m, { role: "ai", text: q.a }]);
      setTyping(false);
    }, 1100);
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  return (
    <section className="relative overflow-hidden bg-[oklch(0.16_0.03_265)] py-32 text-white noise">
      <div className="bg-mesh-soft pointer-events-none absolute inset-0 opacity-60" />
      <div className="relative mx-auto max-w-3xl px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-white/70">
            <MessageSquare className="h-3.5 w-3.5" /> {t("chat.badge")}
          </span>
          <Reveal delay={0.05}>
            <h2 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl">
              {t("chat.titlePre")}<span className="gradient-text-multi">{t("chat.titleHighlight")}</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-base text-white/60">{t("chat.subtitle")}</p>
          </Reveal>
        </div>

        {/* Chat window */}
        <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] backdrop-blur">
          {/* Title bar */}
          <div className="flex items-center gap-2.5 border-b border-white/10 px-5 py-3.5">
            <span className="h-2.5 w-2.5 rounded-full bg-brand-orange/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-brand-yellow/60" />
            <span className="h-2.5 w-2.5 rounded-full bg-brand-green/60" />
            <span className="ml-3 text-xs font-semibold text-white/50">{t("chat.titleBar")}</span>
            <span className="ml-auto flex items-center gap-1.5 text-xs text-brand-green">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-green" />
              {t("chat.live")}
            </span>
          </div>

          {/* Messages */}
          <div className="flex h-72 flex-col gap-3 overflow-y-auto p-5">
            {messages.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                className={`flex gap-3 ${m.role === "user" ? "flex-row-reverse" : ""}`}
              >
                <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-xl text-white ${m.role === "ai" ? "bg-gradient-to-br from-brand-purple to-brand-blue" : "bg-gradient-to-br from-brand-orange to-brand-pink"}`}>
                  {m.role === "ai" ? <Bot className="h-4 w-4" /> : <MessageSquare className="h-3.5 w-3.5" />}
                </span>
                <div className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${m.role === "ai" ? "bg-white/[0.07] text-white/90" : "bg-gradient-to-br from-brand-orange/30 to-brand-pink/20 text-white"}`}>
                  {m.text}
                </div>
              </motion.div>
            ))}
            {typing && (
              <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="flex gap-3">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand-purple to-brand-blue text-white">
                  <Bot className="h-4 w-4" />
                </span>
                <div className="flex items-center gap-1.5 rounded-2xl bg-white/[0.07] px-4 py-3">
                  {[0, 1, 2].map((d) => (
                    <motion.span
                      key={d}
                      animate={{ y: [0, -4, 0] }}
                      transition={{ duration: 0.6, repeat: Infinity, delay: d * 0.15 }}
                      className="h-2 w-2 rounded-full bg-white/40"
                    />
                  ))}
                </div>
              </motion.div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Suggestion buttons */}
          <div className="border-t border-white/10 p-4">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-white/40">{t("chat.tryAsking")}</p>
            <div className="flex flex-wrap gap-2">
              {chatQuestions.map((q) => (
                <button
                  key={q.q}
                  onClick={() => handleQuestion(q)}
                  disabled={typing}
                  className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-white/80 transition-all hover:border-brand-orange/40 hover:bg-brand-orange/10 hover:text-white disabled:opacity-40"
                >
                  {q.q}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   SECTION 4 — VOICE AI DEMO
═══════════════════════════════════════ */

function VoiceAISection() {
  const { t } = useTranslation("demo");
  const voiceLines = t("voice.lines", { returnObjects: true }) as string[];
  const [active, setActive] = useState(false);
  const [lineIndex, setLineIndex] = useState(0);
  const reduce = useReducedMotion();

  const toggle = () => {
    setActive((a) => !a);
    setLineIndex((i) => (i + 1) % voiceLines.length);
  };

  return (
    <section className="relative overflow-hidden py-32">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background via-brand-purple/[0.04] to-background" />
      <div className="relative mx-auto max-w-2xl px-6 text-center">
        <SectionHeading
          eyebrow={t("voice.eyebrow")}
          title={<>{t("voice.titlePre")}<span className="gradient-text-multi">{t("voice.titleHighlight")}</span></>}
          subtitle={t("voice.subtitle")}
        />

        <div className="mt-16 flex flex-col items-center gap-8">
          {/* Microphone button with rings */}
          <div className="relative flex items-center justify-center">
            {active && !reduce && (
              <>
                {[1, 2, 3].map((i) => (
                  <motion.span
                    key={i}
                    className="absolute rounded-full border border-brand-orange/30"
                    animate={{ scale: [1, 1 + i * 0.35], opacity: [0.5, 0] }}
                    transition={{ duration: 1.8, repeat: Infinity, delay: i * 0.3, ease: "easeOut" }}
                    style={{ width: 80, height: 80 }}
                  />
                ))}
              </>
            )}
            <motion.button
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.94 }}
              onClick={toggle}
              className={`relative z-10 grid h-24 w-24 place-items-center rounded-full shadow-[0_12px_40px_rgba(0,0,0,0.2)] transition-all duration-300 ${
                active
                  ? "bg-gradient-to-br from-brand-orange to-brand-pink shadow-[0_12px_40px_oklch(0.72_0.2_48/0.45)]"
                  : "border-2 border-border bg-background/80 hover:border-brand-orange/40"
              }`}
            >
              {active
                ? <MicOff className="h-9 w-9 text-white" strokeWidth={1.7} />
                : <Mic className="h-9 w-9 text-foreground/70" strokeWidth={1.7} />}
            </motion.button>
          </div>

          {/* Waveform */}
          <div className="flex h-12 items-center gap-1">
            {Array.from({ length: 24 }).map((_, i) => (
              <motion.span
                key={i}
                className={`w-1.5 rounded-full transition-colors duration-300 ${active ? "bg-gradient-to-t from-brand-orange to-brand-pink" : "bg-border"}`}
                animate={active && !reduce ? {
                  height: [8, Math.random() * 36 + 8, 8],
                } : { height: 8 }}
                transition={{
                  duration: 0.6 + Math.random() * 0.4,
                  repeat: Infinity,
                  delay: i * 0.04,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          {/* Status bubble */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active ? lineIndex : "idle"}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35 }}
              className={`rounded-2xl border px-6 py-4 text-center text-sm leading-relaxed ${
                active
                  ? "border-brand-orange/25 bg-brand-orange/8 text-foreground"
                  : "border-border/60 bg-muted/40 text-muted-foreground"
              }`}
            >
              {active ? voiceLines[lineIndex] : t("voice.idleStatus")}
            </motion.div>
          </AnimatePresence>

          <p className="text-xs text-muted-foreground/60">{t("voice.demoOnly")}</p>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   SECTION 5 — SMART SHORTS DEMO
═══════════════════════════════════════ */

type ShortsTab = "generate" | "edit" | "clip";

function ShortsSection() {
  const { t } = useTranslation("demo");
  const [activeTab, setActiveTab] = useState<ShortsTab>("generate");

  const tabs: { key: ShortsTab; icon: React.ElementType }[] = [
    { key: "generate", icon: Upload },
    { key: "edit",     icon: Pencil },
    { key: "clip",     icon: Scissors },
  ];

  return (
    <section className="relative overflow-hidden bg-muted/20 py-32">
      <div className="relative mx-auto max-w-3xl px-6">
        <SectionHeading
          eyebrow={t("shorts.eyebrow")}
          title={<>{t("shorts.titlePre")}<span className="gradient-text-multi">{t("shorts.titleHighlight")}</span></>}
          subtitle={t("shorts.subtitle")}
        />

        <Reveal delay={0.1}>
          <div className="mt-16 overflow-hidden rounded-[28px] border border-border/60 bg-background/80 shadow-[0_16px_48px_rgba(0,0,0,0.10)]">

            {/* Tab bar */}
            <div className="flex border-b border-border/60 bg-muted/30">
              {tabs.map(({ key, icon: Icon }) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`flex flex-1 items-center justify-center gap-2 py-4 text-sm font-semibold transition-colors duration-200 ${
                    activeTab === key
                      ? "border-b-2 border-brand-orange text-brand-orange"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {t(`shorts.tabs.${key}`)}
                </button>
              ))}
            </div>

            {/* Tab panels */}
            <div className="p-8">
              <AnimatePresence mode="wait">
                {activeTab === "generate" && (
                  <motion.div key="generate" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.2 }}>
                    <ShortsGeneratePanel />
                  </motion.div>
                )}
                {activeTab === "edit" && (
                  <motion.div key="edit" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.2 }}>
                    <ShortsEditPanel />
                  </motion.div>
                )}
                {activeTab === "clip" && (
                  <motion.div key="clip" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.2 }}>
                    <ShortsClipPanel />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* — Generate tab (original upload flow) — */
function ShortsGeneratePanel() {
  const { t } = useTranslation("demo");
  const [stage, setStage] = useState<"idle" | "processing" | "done">("idle");
  const reduce = useReducedMotion();

  const process = () => {
    if (stage !== "idle") { setStage("idle"); return; }
    setStage("processing");
    setTimeout(() => setStage("done"), 2200);
  };

  return (
    <div className="flex flex-col gap-6">
      <motion.button
        onClick={process}
        whileHover={stage === "idle" ? { scale: 1.01 } : {}}
        whileTap={stage === "idle" ? { scale: 0.99 } : {}}
        className={`relative flex w-full flex-col items-center gap-4 overflow-hidden rounded-[20px] border-2 border-dashed px-8 py-12 text-center transition-all duration-300 ${
          stage === "idle"
            ? "border-border/60 hover:border-brand-orange/40"
            : stage === "processing"
            ? "border-brand-purple/40 bg-brand-purple/5"
            : "border-brand-green/40 bg-brand-green/5"
        }`}
      >
        <AnimatePresence mode="wait">
          {stage === "idle" && (
            <motion.div key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col items-center gap-3">
              <div className="grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-brand-orange/20 to-brand-pink/20">
                <Upload className="h-7 w-7 text-brand-orange" />
              </div>
              <p className="text-base font-bold text-foreground">{t("shorts.idle.title")}</p>
              <p className="text-sm text-muted-foreground">{t("shorts.idle.sub")}</p>
              <span className="mt-2 rounded-full bg-brand-orange px-5 py-2 text-sm font-bold text-white shadow-soft">
                {t("shorts.idle.cta")}
              </span>
            </motion.div>
          )}
          {stage === "processing" && (
            <motion.div key="processing" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col items-center gap-4">
              <motion.div
                animate={reduce ? {} : { rotate: 360 }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                className="grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-brand-purple to-brand-blue"
              >
                <Sparkles className="h-7 w-7 text-white" />
              </motion.div>
              <p className="text-base font-bold text-foreground">{t("shorts.processing.title")}</p>
              <p className="text-sm text-muted-foreground">{t("shorts.processing.sub")}</p>
              <div className="mt-2 h-1.5 w-48 overflow-hidden rounded-full bg-border">
                <motion.div
                  className="h-full bg-gradient-to-r from-brand-purple to-brand-blue"
                  animate={{ width: ["0%", "100%"] }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                />
              </div>
            </motion.div>
          )}
          {stage === "done" && (
            <motion.div key="done" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="flex flex-col items-center gap-4">
              <div className="grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-brand-green to-brand-cyan">
                <CheckCircle2 className="h-7 w-7 text-white" />
              </div>
              <p className="text-base font-extrabold gradient-text-multi">{t("shorts.done.title")}</p>
              <p className="text-sm text-muted-foreground">{t("shorts.done.sub")}</p>
              <span className="mt-1 text-xs text-muted-foreground/60">{t("shorts.done.resetHint")}</span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {stage === "done" && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center justify-center gap-2"
        >
          {shortsStepsMeta.map((s, i) => (
            <div key={s.key} className="flex items-center gap-2">
              <div className={`flex flex-col items-center gap-1.5 rounded-[16px] bg-gradient-to-br ${s.gradient} px-4 py-3 text-center`}>
                <s.icon className="h-4 w-4 text-white" strokeWidth={1.8} />
                <span className="text-xs font-bold text-white">{t(`shorts.steps.${s.key}.label`)}</span>
              </div>
              {i < shortsStepsMeta.length - 1 && <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground/40" />}
            </div>
          ))}
        </motion.div>
      )}
    </div>
  );
}

/* — Edit tab — */
function ShortsEditPanel() {
  const { t } = useTranslation("demo");
  const [trimValue, setTrimValue] = useState(62);
  const [caption, setCaption] = useState("");
  const [saved, setSaved] = useState(false);
  const [playing, setPlaying] = useState(false);
  const reduce = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setPlaying(true);
    } else {
      videoRef.current.pause();
      setPlaying(false);
    }
  };

  const clips = [
    { label: t("shorts.edit.clip1"), color: "bg-brand-orange", width: "w-[28%]", left: "left-[4%]" },
    { label: t("shorts.edit.clip2"), color: "bg-brand-purple", width: "w-[36%]", left: "left-[34%]" },
    { label: t("shorts.edit.clip3"), color: "bg-brand-cyan",   width: "w-[22%]", left: "left-[74%]" },
  ];

  // trim percent → time label
  const totalSecs = 25;
  const endSec = Math.round((trimValue / 100) * totalSecs);
  const fmt = (s: number) => `0:${String(s).padStart(2, "0")}`;

  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div>
        <p className="text-base font-bold text-foreground">{t("shorts.edit.title")}</p>
        <p className="mt-1 text-sm text-muted-foreground">{t("shorts.edit.sub")}</p>
      </div>

      {/* Video player */}
      <div className="relative overflow-hidden rounded-[16px] border border-border/60 bg-black">
        <video
          ref={videoRef}
          src="/demo/editing-demo.mp4"
          className="mx-auto block max-h-64 w-auto"
          loop
          playsInline
          onEnded={() => setPlaying(false)}
        />
        {/* Play overlay */}
        {!playing && (
          <button
            onClick={togglePlay}
            className="absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity hover:bg-black/40"
          >
            <span className="grid h-14 w-14 place-items-center rounded-full bg-white/20 backdrop-blur-sm">
              <Play className="h-7 w-7 text-white translate-x-0.5" />
            </span>
          </button>
        )}
        {playing && (
          <button
            onClick={togglePlay}
            className="absolute inset-0 opacity-0 hover:opacity-100 flex items-center justify-center bg-black/20 transition-opacity"
          >
            <span className="grid h-14 w-14 place-items-center rounded-full bg-white/20 backdrop-blur-sm">
              <span className="flex gap-1">
                <span className="h-6 w-1.5 rounded-full bg-white" />
                <span className="h-6 w-1.5 rounded-full bg-white" />
              </span>
            </span>
          </button>
        )}
      </div>

      {/* Timeline */}
      <div className="rounded-[16px] border border-border/60 bg-muted/30 p-4">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">{t("shorts.edit.timeline")}</span>
          <span className="rounded-full bg-brand-orange/10 px-2.5 py-0.5 text-[10px] font-bold text-brand-orange">
            {t("shorts.edit.badge")}
          </span>
        </div>
        <div className="relative h-12 w-full rounded-lg bg-muted/60">
          {clips.map((c) => (
            <div
              key={c.label}
              className={`absolute top-2 h-8 ${c.color}/80 ${c.width} ${c.left} flex items-center justify-center rounded-md px-2`}
            >
              <span className="truncate text-[10px] font-bold text-white">{c.label}</span>
            </div>
          ))}
          <motion.div
            className="absolute top-0 h-full w-0.5 bg-brand-orange shadow-[0_0_6px_rgba(251,146,60,0.8)]"
            animate={reduce ? {} : { left: ["8%", "92%"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </div>

      {/* Trim slider */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide flex items-center gap-1.5">
            <Sliders className="h-3 w-3" /> {t("shorts.edit.trimLabel")}
          </span>
          <span className="text-xs text-muted-foreground">
            {fmt(4)} – {fmt(endSec)}
          </span>
        </div>
        <input
          type="range"
          min={10}
          max={100}
          value={trimValue}
          onChange={(e) => setTrimValue(Number(e.target.value))}
          className="h-2 w-full cursor-pointer appearance-none rounded-full bg-border accent-brand-orange"
        />
      </div>

      {/* Caption input */}
      <div className="flex flex-col gap-2">
        <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
          {t("shorts.edit.captionLabel")}
        </span>
        <textarea
          rows={2}
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          placeholder={t("shorts.edit.captionPlaceholder")}
          className="w-full resize-none rounded-[12px] border border-border/60 bg-muted/30 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-brand-orange/40"
        />
      </div>

      {/* Save button */}
      <motion.button
        onClick={handleSave}
        whileTap={{ scale: 0.97 }}
        className={`flex w-full items-center justify-center gap-2 rounded-[14px] py-3 text-sm font-bold text-white shadow-soft transition-colors duration-200 ${
          saved ? "bg-brand-green" : "bg-brand-orange hover:bg-brand-orange/90"
        }`}
      >
        {saved ? <CheckCircle2 className="h-4 w-4" /> : <Film className="h-4 w-4" />}
        {saved ? "Saved!" : t("shorts.edit.publishCta")}
      </motion.button>
    </div>
  );
}

/* — Clip tab — */
function ShortsClipPanel() {
  const { t } = useTranslation("demo");
  const [selectedClip, setSelectedClip] = useState<number | null>(null);
  const [published, setPublished] = useState(false);

  const clipsMeta = [
    { platform: "TikTok",    color: "from-brand-pink to-brand-orange" },
    { platform: "Reels",     color: "from-brand-purple to-brand-blue" },
    { platform: "YT Shorts", color: "from-brand-cyan to-brand-green" },
  ];

  const handlePublish = () => {
    setPublished(true);
    setTimeout(() => setPublished(false), 2200);
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div>
        <p className="text-base font-bold text-foreground">{t("shorts.clip.title")}</p>
        <p className="mt-1 text-sm text-muted-foreground">{t("shorts.clip.sub")}</p>
      </div>

      {/* Video preview with IN/OUT markers */}
      <div className="relative overflow-hidden rounded-[16px] border border-border/60 bg-black">
        <div className="relative">
          <video
            src="/demo/editing-demo.mp4"
            className="mx-auto block max-h-56 w-auto"
            autoPlay
            loop
            muted
            playsInline
          />
          {/* IN marker */}
          <div className="absolute left-[20%] top-0 flex h-full flex-col items-center pointer-events-none">
            <div className="h-full w-0.5 bg-brand-green shadow-[0_0_6px_rgba(34,197,94,0.8)]" />
            <span className="absolute top-2 rounded bg-brand-green px-1.5 py-0.5 text-[10px] font-bold text-white">
              {t("shorts.clip.inLabel")}
            </span>
          </div>
          {/* OUT marker */}
          <div className="absolute left-[75%] top-0 flex h-full flex-col items-center pointer-events-none">
            <div className="h-full w-0.5 bg-brand-orange shadow-[0_0_6px_rgba(251,146,60,0.8)]" />
            <span className="absolute top-2 rounded bg-brand-orange px-1.5 py-0.5 text-[10px] font-bold text-white">
              {t("shorts.clip.outLabel")}
            </span>
          </div>
          {/* Duration badge */}
          <span className="absolute bottom-2 right-3 rounded-full bg-black/70 px-2 py-0.5 text-[10px] font-bold text-white backdrop-blur-sm">
            {t("shorts.clip.duration")}
          </span>
        </div>

        {/* AI detected badge */}
        <div className="flex items-center gap-2 border-t border-white/10 bg-black/40 px-4 py-2.5">
          <Sparkles className="h-3.5 w-3.5 text-brand-purple" />
          <span className="text-xs font-semibold text-brand-purple">{t("shorts.clip.aiDetected")}</span>
        </div>
      </div>

      {/* Clip list */}
      <div className="flex flex-col gap-2">
        {clipsMeta.map((c, i) => {
          const clipData = t(`shorts.clip.clips.${i}.label`, { defaultValue: `Clip ${i + 1}` });
          return (
            <button
              key={i}
              onClick={() => setSelectedClip(selectedClip === i ? null : i)}
              className={`flex items-center gap-3 rounded-[14px] border px-4 py-3 text-left transition-colors duration-150 ${
                selectedClip === i
                  ? "border-brand-orange/40 bg-brand-orange/5"
                  : "border-border/60 hover:border-border"
              }`}
            >
              <div className={`h-8 w-8 flex-shrink-0 rounded-lg bg-gradient-to-br ${c.color} flex items-center justify-center`}>
                <Scissors className="h-3.5 w-3.5 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="truncate text-sm font-semibold text-foreground">{clipData}</p>
                <p className="text-xs text-muted-foreground">{c.platform}</p>
              </div>
              {selectedClip === i && <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-brand-orange" />}
            </button>
          );
        })}
      </div>

      {/* Publish all button */}
      <motion.button
        onClick={handlePublish}
        whileTap={{ scale: 0.97 }}
        className={`flex w-full items-center justify-center gap-2 rounded-[14px] py-3 text-sm font-bold text-white shadow-soft transition-colors duration-200 ${
          published ? "bg-brand-green" : "bg-gradient-to-r from-brand-purple to-brand-blue hover:opacity-90"
        }`}
      >
        {published ? <CheckCircle2 className="h-4 w-4" /> : <Rocket className="h-4 w-4" />}
        {published ? "Published!" : t("shorts.clip.readyCta")}
      </motion.button>
    </div>
  );
}

/* ═══════════════════════════════════════
   SECTION 6 — REVENUE DASHBOARD
═══════════════════════════════════════ */

function RevenueDashboardSection() {
  const { t } = useTranslation("demo");
  return (
    <section className="relative overflow-hidden py-32">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background via-brand-orange/[0.03] to-background" />
      <div className="relative mx-auto max-w-5xl px-6">
        <SectionHeading
          eyebrow={t("revenue.eyebrow")}
          title={<>{t("revenue.titlePre")}<span className="gradient-text-multi">{t("revenue.titleHighlight")}</span></>}
          subtitle={t("revenue.subtitle")}
        />
        <DashboardCard itemsMeta={revenueDashboardMeta} labelNamespace="revenue" titleBar={t("revenue.titleBar")} live={t("revenue.live")} barGradient="from-brand-orange to-brand-pink" delay={0.1} />
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   SECTION 7 — VISIBILITY DASHBOARD
═══════════════════════════════════════ */

function VisibilityDashboardSection() {
  const { t } = useTranslation("demo");
  return (
    <section className="relative overflow-hidden bg-muted/20 py-32">
      <div className="relative mx-auto max-w-5xl px-6">
        <SectionHeading
          eyebrow={t("visibility.eyebrow")}
          title={<>{t("visibility.titlePre")}<span className="gradient-text-multi">{t("visibility.titleHighlight")}</span></>}
          subtitle={t("visibility.subtitle")}
        />
        <DashboardCard itemsMeta={visibilityDashboardMeta} labelNamespace="visibility" titleBar={t("revenue.titleBar")} live={t("revenue.live")} barGradient="from-brand-blue to-brand-purple" delay={0.1} />
      </div>
    </section>
  );
}

function DashboardCard({
  itemsMeta,
  labelNamespace,
  titleBar,
  live,
  barGradient,
  delay,
}: {
  itemsMeta: typeof revenueDashboardMeta;
  labelNamespace: "revenue" | "visibility";
  titleBar: string;
  live: string;
  barGradient: string;
  delay: number;
}) {
  const { t } = useTranslation("demo");
  const barHeights = [55, 72, 48, 88, 65, 79, 95];
  return (
    <Reveal delay={delay}>
      <div className="mt-16 overflow-hidden rounded-[32px] border border-border/60 bg-background/90 shadow-[0_24px_64px_rgba(0,0,0,0.12)]">
        {/* Title bar */}
        <div className="flex items-center gap-2.5 border-b border-border/60 px-6 py-4">
          <span className="h-3 w-3 rounded-full bg-brand-orange/60" />
          <span className="h-3 w-3 rounded-full bg-brand-yellow/60" />
          <span className="h-3 w-3 rounded-full bg-brand-green/60" />
          <span className="ml-4 text-xs font-semibold text-muted-foreground">{titleBar}</span>
          <span className="ml-auto flex items-center gap-1.5 text-xs text-brand-green">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-green" />
            {live}
          </span>
        </div>
        <div className="p-6">
          {/* Mini bar chart */}
          <div className="mb-6 flex h-20 items-end gap-2 rounded-2xl bg-muted/40 px-4 py-3">
            {barHeights.map((h, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                whileInView={{ height: `${h}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className={`flex-1 rounded-t-md bg-gradient-to-t ${barGradient}`}
              />
            ))}
          </div>
          {/* Metric cards */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
            {itemsMeta.map((d, i) => (
              <motion.div
                key={d.key}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                className={`rounded-[18px] bg-gradient-to-br ${d.gradient} p-4`}
              >
                <div className={`mb-2 grid h-9 w-9 place-items-center rounded-xl bg-background/60 ${d.ic}`}>
                  <d.icon className="h-4 w-4" />
                </div>
                <div className="text-xl font-extrabold gradient-text-multi">{d.value}</div>
                <div className="mt-0.5 text-xs text-muted-foreground">{t(`${labelNamespace}.items.${d.key}`)}</div>
                <div className="mt-1 text-xs font-semibold text-brand-green">{d.change}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  );
}

/* ═══════════════════════════════════════
   SECTION 8 — FINAL CTA
═══════════════════════════════════════ */

function FinalCtaSection() {
  const { t } = useTranslation("demo");
  return (
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
                <RefreshCw className="h-4 w-4" /> {t("finalCta.restart")}
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
