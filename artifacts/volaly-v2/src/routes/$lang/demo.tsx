import { useState, useEffect, useRef } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  Upload, Sparkles, DollarSign, Rocket, TrendingUp, Plus,
  Mic, MicOff, MessageSquare, Bot, ArrowRight, Play,
  Clapperboard, BarChart3, Users, Eye, MousePointer,
  ShoppingCart, CircleDollarSign, RefreshCw,
  CheckCircle2, Send,
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
   MOCK DATA
═══════════════════════════════════════ */

const chatQuestions = [
  {
    q: "What products do you recommend?",
    a: "Based on your content, I'd suggest starting with the Creator Shop and Memberships. Your audience engages most with educational content — digital products like guides and templates tend to convert at 8–12%. Want me to set up a shop preview?",
  },
  {
    q: "Tell me more about memberships.",
    a: "Memberships let you create recurring monthly revenue from your most loyal audience. You set the price, the perks and the content — Volaly handles billing, access control and reminders automatically. Most creators see their first members within the first week.",
  },
  {
    q: "How does Smart Shorts work?",
    a: "Upload one long video and Volaly's AI identifies the best moments — hooks, highlights, punchlines — and cuts them into scroll-stopping short clips optimised for TikTok, Reels and YouTube Shorts. Each clip gets captions, branding and is scheduled for auto-publishing.",
  },
  {
    q: "Can I connect YouTube?",
    a: "Yes! Connect YouTube in one click from your dashboard. Volaly will automatically pull in your latest uploads, generate Shorts, SEO articles, newsletters and social posts — all without you touching a thing.",
  },
];

const voiceLines = [
  "Hi! I'm your Volaly AI. How can I help you today?",
  "I can answer questions about your products, services or content.",
  "Want to know more about memberships or the creator shop?",
  "Go ahead — I'm listening.",
];

const revenueDashboard = [
  { icon: CircleDollarSign, label: "Revenue",     value: "€ 4,280", change: "+38%",  gradient: "from-brand-orange/20 to-brand-yellow/20", ic: "text-brand-orange" },
  { icon: ShoppingCart,     label: "Orders",      value: "142",     change: "+22%",  gradient: "from-brand-blue/20 to-brand-cyan/20",   ic: "text-brand-blue" },
  { icon: Eye,              label: "Visitors",    value: "12,440",  change: "+67%",  gradient: "from-brand-purple/20 to-brand-pink/20", ic: "text-brand-purple" },
  { icon: Users,            label: "Members",     value: "89",      change: "+14",   gradient: "from-brand-green/20 to-brand-cyan/20",  ic: "text-brand-green" },
  { icon: TrendingUp,       label: "Growth",      value: "+38%",    change: "MoM",   gradient: "from-brand-pink/20 to-brand-orange/20", ic: "text-brand-pink" },
];

const visibilityDashboard = [
  { icon: Send,        label: "Posts",  value: "284",    change: "auto",   gradient: "from-brand-blue/20 to-brand-purple/20", ic: "text-brand-blue" },
  { icon: Eye,         label: "Views",  value: "1.2M",   change: "+124%",  gradient: "from-brand-purple/20 to-brand-blue/20", ic: "text-brand-purple" },
  { icon: MousePointer,label: "Clicks", value: "48K",    change: "+89%",   gradient: "from-brand-orange/20 to-brand-yellow/20", ic: "text-brand-orange" },
  { icon: Users,       label: "Reach",  value: "340K",   change: "+201%",  gradient: "from-brand-green/20 to-brand-cyan/20", ic: "text-brand-green" },
  { icon: Clapperboard,label: "Shorts", value: "96",     change: "auto",   gradient: "from-brand-pink/20 to-brand-purple/20", ic: "text-brand-pink" },
];

const shortsSteps = [
  { icon: Upload,      label: "Long Video",    sub: "Your upload",   gradient: "from-brand-orange to-brand-pink" },
  { icon: Sparkles,    label: "Volaly AI",     sub: "Processing…",   gradient: "from-brand-purple to-brand-blue" },
  { icon: Clapperboard,label: "10 Shorts",     sub: "Auto-generated",gradient: "from-brand-blue to-brand-cyan" },
  { icon: Send,        label: "Auto Publish",  sub: "All platforms", gradient: "from-brand-green to-brand-cyan", highlight: true },
];

/* ═══════════════════════════════════════
   PAGE
═══════════════════════════════════════ */

function DemoPage() {
  const { lang } = Route.useParams();
  return (
    <>
      <SEO
        title="Experience Volaly — Live Demo"
        description="See how one upload becomes revenue, visibility and AI-powered customer conversations. Interactive demo — no signup required."
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
  return (
    <section className="bg-aurora noise relative overflow-hidden pt-36 pb-28">
      <AuroraOrbs />
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(70%_60%_at_50%_35%,black,transparent)]" />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground shadow-soft backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-brand-orange" /> Interactive Demo
          </span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="mt-7 text-[clamp(3rem,7vw,6rem)] font-black leading-[0.93] tracking-tight text-foreground"
        >
          Experience
          <span className="block gradient-text-multi">Volaly.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18 }}
          className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground"
        >
          See how one upload becomes revenue, visibility and AI-powered customer conversations.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.28 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <Button size="xl" variant="hero" onClick={openDemo}>
            Start Free <ArrowRight className="h-4 w-4" />
          </Button>
          <Button size="xl" variant="heroOutline" onClick={openDemo}>
            <Play className="h-4 w-4" /> Book Demo
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   SECTION 2 — INTERACTIVE WORKFLOW
═══════════════════════════════════════ */

const workflowNodes = [
  { icon: Upload,   label: "Upload",           sub: "One piece of content",  gradient: "from-brand-orange to-brand-pink" },
  { icon: Sparkles, label: "Volaly AI",         sub: "Understanding & processing", gradient: "from-brand-purple to-brand-blue" },
  null,
  { icon: TrendingUp, label: "Growth",          sub: "Revenue & audience",   gradient: "from-brand-green to-brand-blue", highlight: true },
];

function WorkflowSection() {
  const reduce = useReducedMotion();
  const [activeNode, setActiveNode] = useState<number | null>(null);

  return (
    <section className="relative overflow-hidden py-32">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background via-brand-purple/[0.03] to-background" />
      <div className="relative mx-auto max-w-3xl px-6">
        <SectionHeading
          eyebrow="How It Works"
          title={<>One Upload. <span className="gradient-text-multi">Everything Else Is Automatic.</span></>}
          subtitle="Hover each step to see what Volaly creates for you."
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
                    <WorkflowCard icon={DollarSign} label="Revenue Suite" sub="AI FAQ · Shop · Voice · Memberships" gradient="from-brand-orange to-brand-yellow" />
                    <div className="flex items-center justify-center">
                      <Plus className="h-5 w-5 text-muted-foreground/40" />
                    </div>
                    <WorkflowCard icon={Rocket} label="Visibility Suite" sub="Shorts · Posts · SEO · Newsletter" gradient="from-brand-blue to-brand-cyan" />
                  </motion.div>
                  <Connector reduce={reduce} delay={0.5} />
                </div>
              );
            }
            return (
              <div key={node.label} className="w-full">
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
                    <div className={`text-base font-extrabold ${node.highlight ? "text-white" : "text-foreground"}`}>{node.label}</div>
                    <div className={`text-xs ${node.highlight ? "text-white/70" : "text-muted-foreground"}`}>{node.sub}</div>
                  </div>
                  {activeNode === i && !node.highlight && (
                    <motion.span
                      initial={{ opacity: 0, x: 8 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="ml-auto rounded-full bg-brand-orange/10 px-3 py-1 text-xs font-semibold text-brand-orange"
                    >
                      Automatic ✓
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

function AIChatSection() {
  const [messages, setMessages] = useState<Message[]>([
    { role: "ai", text: "Hi! I'm your Volaly AI. Click a question below or ask me anything about Volaly." },
  ]);
  const [typing, setTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  const handleQuestion = (q: typeof chatQuestions[0]) => {
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
            <MessageSquare className="h-3.5 w-3.5" /> AI FAQ Demo
          </span>
          <Reveal delay={0.05}>
            <h2 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl">
              Your AI answers <span className="gradient-text-multi">everything.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-base text-white/60">Click a question to see a live AI response.</p>
          </Reveal>
        </div>

        {/* Chat window */}
        <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] backdrop-blur">
          {/* Title bar */}
          <div className="flex items-center gap-2.5 border-b border-white/10 px-5 py-3.5">
            <span className="h-2.5 w-2.5 rounded-full bg-brand-orange/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-brand-yellow/60" />
            <span className="h-2.5 w-2.5 rounded-full bg-brand-green/60" />
            <span className="ml-3 text-xs font-semibold text-white/50">Volaly AI — always on</span>
            <span className="ml-auto flex items-center gap-1.5 text-xs text-brand-green">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-green" />
              Live
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
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-white/40">Try asking:</p>
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
          eyebrow="Voice AI"
          title={<>Talk to your <span className="gradient-text-multi">AI persona.</span></>}
          subtitle="Your audience can have real voice conversations with your AI — 24/7, in any language."
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
              {active ? voiceLines[lineIndex] : "Click the microphone to start a conversation."}
            </motion.div>
          </AnimatePresence>

          <p className="text-xs text-muted-foreground/60">Demo only — no real audio required</p>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   SECTION 5 — SMART SHORTS DEMO
═══════════════════════════════════════ */

function ShortsSection() {
  const [stage, setStage] = useState<"idle" | "processing" | "done">("idle");
  const reduce = useReducedMotion();

  const process = () => {
    if (stage !== "idle") { setStage("idle"); return; }
    setStage("processing");
    setTimeout(() => setStage("done"), 2200);
  };

  return (
    <section className="relative overflow-hidden bg-muted/20 py-32">
      <div className="relative mx-auto max-w-3xl px-6">
        <SectionHeading
          eyebrow="Smart Shorts"
          title={<>One video. <span className="gradient-text-multi">Ten clips. Auto-published.</span></>}
          subtitle="Upload a long video and Volaly instantly creates, captions and schedules short-form content for every platform."
        />

        <Reveal delay={0.1}>
          <div className="mt-16 overflow-hidden rounded-[28px] border border-border/60 bg-background/80 p-8 shadow-[0_16px_48px_rgba(0,0,0,0.10)]">

            {/* Upload zone */}
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
                    <p className="text-base font-bold text-foreground">Drop your long video here</p>
                    <p className="text-sm text-muted-foreground">or click to upload — MP4, MOV, AVI</p>
                    <span className="mt-2 rounded-full bg-brand-orange px-5 py-2 text-sm font-bold text-white shadow-soft">
                      Upload & Generate Shorts
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
                    <p className="text-base font-bold text-foreground">Volaly AI is processing…</p>
                    <p className="text-sm text-muted-foreground">Detecting highlights · Generating captions · Cutting clips</p>
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
                    <p className="text-base font-extrabold gradient-text-multi">10 Shorts Generated!</p>
                    <p className="text-sm text-muted-foreground">Scheduled for TikTok · Reels · YouTube Shorts</p>
                    <span className="mt-1 text-xs text-muted-foreground/60">Click to reset</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>

            {/* Step arrows */}
            {stage === "done" && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-8 flex items-center justify-center gap-2"
              >
                {shortsSteps.map((s, i) => (
                  <div key={s.label} className="flex items-center gap-2">
                    <div className={`flex flex-col items-center gap-1.5 rounded-[16px] bg-gradient-to-br ${s.gradient} px-4 py-3 text-center`}>
                      <s.icon className="h-4 w-4 text-white" strokeWidth={1.8} />
                      <span className="text-xs font-bold text-white">{s.label}</span>
                    </div>
                    {i < shortsSteps.length - 1 && <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground/40" />}
                  </div>
                ))}
              </motion.div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   SECTION 6 — REVENUE DASHBOARD
═══════════════════════════════════════ */

function RevenueDashboardSection() {
  return (
    <section className="relative overflow-hidden py-32">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background via-brand-orange/[0.03] to-background" />
      <div className="relative mx-auto max-w-5xl px-6">
        <SectionHeading
          eyebrow="Revenue Dashboard"
          title={<>Your revenue, <span className="gradient-text-multi">on autopilot.</span></>}
          subtitle="Real-time metrics from your Creator Shop, memberships and affiliate earnings — all in one place."
        />
        <DashboardCard items={revenueDashboard} barGradient="from-brand-orange to-brand-pink" delay={0.1} />
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   SECTION 7 — VISIBILITY DASHBOARD
═══════════════════════════════════════ */

function VisibilityDashboardSection() {
  return (
    <section className="relative overflow-hidden bg-muted/20 py-32">
      <div className="relative mx-auto max-w-5xl px-6">
        <SectionHeading
          eyebrow="Visibility Dashboard"
          title={<>Reach, <span className="gradient-text-multi">everywhere.</span></>}
          subtitle="Posts, views, clicks and Shorts — automatically tracked across every platform from one upload."
        />
        <DashboardCard items={visibilityDashboard} barGradient="from-brand-blue to-brand-purple" delay={0.1} />
      </div>
    </section>
  );
}

function DashboardCard({
  items,
  barGradient,
  delay,
}: {
  items: typeof revenueDashboard;
  barGradient: string;
  delay: number;
}) {
  const barHeights = [55, 72, 48, 88, 65, 79, 95];
  return (
    <Reveal delay={delay}>
      <div className="mt-16 overflow-hidden rounded-[32px] border border-border/60 bg-background/90 shadow-[0_24px_64px_rgba(0,0,0,0.12)]">
        {/* Title bar */}
        <div className="flex items-center gap-2.5 border-b border-border/60 px-6 py-4">
          <span className="h-3 w-3 rounded-full bg-brand-orange/60" />
          <span className="h-3 w-3 rounded-full bg-brand-yellow/60" />
          <span className="h-3 w-3 rounded-full bg-brand-green/60" />
          <span className="ml-4 text-xs font-semibold text-muted-foreground">Volaly Dashboard — Live</span>
          <span className="ml-auto flex items-center gap-1.5 text-xs text-brand-green">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-green" />
            Live
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
            {items.map((d, i) => (
              <motion.div
                key={d.label}
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
                <div className="mt-0.5 text-xs text-muted-foreground">{d.label}</div>
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
  return (
    <section className="px-4 py-28 sm:px-6">
      <Reveal>
        <div className="noise relative mx-auto max-w-6xl overflow-hidden rounded-[36px] bg-[oklch(0.16_0.03_265)] px-8 py-24 text-center">
          <AuroraOrbs />
          <div className="bg-grid pointer-events-none absolute inset-0 opacity-20 [mask-image:radial-gradient(60%_60%_at_50%_50%,black,transparent)]" />
          <div className="relative">
            <h2 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl">
              One Upload.
              <span className="block gradient-text-multi">Volaly Does the Rest.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-white/70">
              Join creators and businesses who upload once and let Volaly handle everything else.
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
                <RefreshCw className="h-4 w-4" /> Restart Demo
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
