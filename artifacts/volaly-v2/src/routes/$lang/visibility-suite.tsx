import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  Upload, Sparkles, TrendingUp, ArrowRight, Play,
  Clapperboard, Send, RefreshCw, Search, BookOpen, Mail, Globe, BarChart3,
  CheckCircle2, XCircle, Eye, Users, MousePointer, Wifi,
  ChevronDown, Clock, Layers, Repeat,
  Youtube, Instagram, Facebook, Linkedin, X, MessageSquare, Rss,
} from "lucide-react";
import { motion } from "motion/react";
import { AuroraOrbs } from "@/components/Backdrop";
import { Reveal, Stagger, StaggerItem } from "@/components/Motion";
import { SectionHeading, Eyebrow } from "@/components/sections/shared";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { JsonLd } from "@/components/JsonLd";
import { openDemo } from "@/lib/demo";

export const Route = createFileRoute("/$lang/visibility-suite")({
  component: VisibilitySuitePage,
});

/* ─────────────── DATA ─────────────── */

const features = [
  { icon: Clapperboard, title: "Smart Shorts",          desc: "Turn long videos into viral short-form content in seconds.", gradient: "from-brand-purple/20 to-brand-blue/20",   ic: "text-brand-purple" },
  { icon: Send,          title: "Auto Publishing",       desc: "Publish everywhere automatically — no scheduling needed.",   gradient: "from-brand-blue/20 to-brand-cyan/20",     ic: "text-brand-blue" },
  { icon: RefreshCw,     title: "Auto Import",           desc: "Connect your accounts once. Volaly handles everything else.", gradient: "from-brand-orange/20 to-brand-yellow/20", ic: "text-brand-orange" },
  { icon: Search,        title: "SEO Engine",            desc: "Turn every upload into Google traffic automatically.",        gradient: "from-brand-green/20 to-brand-cyan/20",    ic: "text-brand-green" },
  { icon: BookOpen,      title: "AI Blog Writer",        desc: "Every upload becomes a long-form article that ranks.",       gradient: "from-brand-pink/20 to-brand-orange/20",   ic: "text-brand-pink" },
  { icon: Mail,          title: "Newsletter Generator",  desc: "Automatically create email campaigns from your content.",    gradient: "from-brand-purple/20 to-brand-pink/20",   ic: "text-brand-purple" },
  { icon: Globe,         title: "Multi-language",        desc: "Reach global audiences in their native language.",           gradient: "from-brand-blue/20 to-brand-purple/20",   ic: "text-brand-blue" },
  { icon: BarChart3,     title: "Analytics",             desc: "Know exactly what content drives growth and revenue.",       gradient: "from-brand-orange/20 to-brand-pink/20",   ic: "text-brand-orange" },
];

const platforms = [
  { icon: Youtube,      label: "YouTube",    gradient: "from-brand-orange to-brand-pink",   delay: 0 },
  { icon: Instagram,    label: "Instagram",  gradient: "from-brand-pink to-brand-purple",   delay: 0.06 },
  { icon: Facebook,     label: "Facebook",   gradient: "from-brand-blue to-brand-purple",   delay: 0.12 },
  { icon: Linkedin,     label: "LinkedIn",   gradient: "from-brand-blue to-brand-cyan",     delay: 0.18 },
  { icon: X,            label: "X",          gradient: "from-brand-purple to-brand-blue",   delay: 0.24 },
  { icon: MessageSquare,label: "Threads",    gradient: "from-brand-purple to-brand-pink",   delay: 0.30 },
  { icon: Rss,          label: "Blog",       gradient: "from-brand-orange to-brand-yellow", delay: 0.36 },
  { icon: Mail,         label: "Newsletter", gradient: "from-brand-pink to-brand-orange",   delay: 0.42 },
  { icon: Search,       label: "SEO",        gradient: "from-brand-green to-brand-cyan",    delay: 0.48 },
  { icon: Clapperboard, label: "TikTok",     gradient: "from-brand-blue to-brand-purple",   delay: 0.54 },
];

const dashboardMetrics = [
  { icon: Send,         label: "Posts Published", value: "284",   change: "+Auto",  gradient: "from-brand-blue/20 to-brand-purple/20",   ic: "text-brand-blue" },
  { icon: Wifi,         label: "Reach",           value: "340K",  change: "+201%",  gradient: "from-brand-purple/20 to-brand-pink/20",   ic: "text-brand-purple" },
  { icon: Eye,          label: "Views",           value: "1.2M",  change: "+124%",  gradient: "from-brand-orange/20 to-brand-yellow/20", ic: "text-brand-orange" },
  { icon: Users,        label: "New Followers",   value: "+2.8K", change: "MoM",    gradient: "from-brand-green/20 to-brand-cyan/20",    ic: "text-brand-green" },
  { icon: MousePointer, label: "Site Traffic",    value: "48K",   change: "+89%",   gradient: "from-brand-pink/20 to-brand-orange/20",   ic: "text-brand-pink" },
];

const topContent = [
  { title: "How I grew 10K followers in 30 days", views: "128K", platform: "YouTube", trend: "+38%" },
  { title: "5 tools every creator needs in 2025",  views: "84K",  platform: "TikTok", trend: "+61%" },
  { title: "The real cost of manual marketing",    views: "52K",  platform: "Blog",   trend: "+22%" },
];
type TopContentItem = (typeof topContent)[number];

const whyCards = [
  {
    icon: Clock,
    title: "Save Hours Every Week",
    desc: "Stop manually posting, editing and scheduling. Volaly turns one upload into a full content strategy — automatically.",
    gradient: "from-brand-orange/15 to-brand-pink/15",
    ic: "text-brand-orange",
  },
  {
    icon: Layers,
    title: "Reach Every Platform",
    desc: "YouTube, TikTok, Instagram, LinkedIn, X, Blog, Newsletter, SEO — all covered from a single upload without any extra effort.",
    gradient: "from-brand-blue/15 to-brand-purple/15",
    ic: "text-brand-blue",
  },
  {
    icon: Repeat,
    title: "Keep Creating Instead of Posting",
    desc: "Your job is to create great content. Volaly's job is to make sure the whole world sees it. Focus on what you do best.",
    gradient: "from-brand-green/15 to-brand-cyan/15",
    ic: "text-brand-green",
  },
];

const audiences = [
  { label: "Creators",    gradient: "from-brand-orange to-brand-pink",   icon: Clapperboard },
  { label: "Coaches",     gradient: "from-brand-blue to-brand-purple",   icon: Users },
  { label: "Businesses",  gradient: "from-brand-purple to-brand-pink",   icon: Layers },
  { label: "Restaurants", gradient: "from-brand-orange to-brand-yellow", icon: Globe },
  { label: "Hotels",      gradient: "from-brand-blue to-brand-cyan",     icon: Wifi },
  { label: "Real Estate", gradient: "from-brand-green to-brand-cyan",    icon: TrendingUp },
  { label: "Gyms",        gradient: "from-brand-pink to-brand-orange",   icon: TrendingUp },
];

const faqs = [
  { q: "Which platforms does Volaly publish to?",          a: "Volaly publishes to YouTube, TikTok, Instagram, Facebook, LinkedIn, X, Threads, your Blog, Newsletter subscribers and generates SEO pages — all automatically from one upload." },
  { q: "Do I have to post manually after connecting?",     a: "No. Once you connect your accounts, Volaly handles all scheduling, formatting and publishing. You focus on creating, Volaly handles distribution." },
  { q: "How does Smart Shorts work?",                     a: "Volaly's AI watches your long video, detects the strongest hooks and highlights, cuts them into vertical clips, adds captions and branding, then schedules them across every short-form platform." },
  { q: "Will my content look native on each platform?",   a: "Yes. Volaly automatically adapts aspect ratio, caption style, hashtags and copy tone for each platform so your content feels native everywhere." },
  { q: "Can Volaly write blog posts and newsletters?",    a: "Yes. Every upload automatically generates a long-form SEO blog post and a newsletter edition — both written in your brand voice, ready to publish." },
  { q: "How quickly does content go live after I upload?", a: "Most content is processed and scheduled within minutes. Smart Shorts and platform-specific variants are typically ready in under 10 minutes." },
];

/* ─────────────── PAGE ─────────────── */

function VisibilitySuitePage() {
  const { lang } = Route.useParams();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Visibility Suite — Volaly",
    url: `https://volaly.com/${lang}/visibility-suite`,
    description: "One upload automatically becomes social content, shorts, blogs, SEO pages and newsletters. Grow everywhere automatically with Volaly's Visibility Suite.",
    publisher: { "@id": "https://volaly.com/#organization" },
  };

  return (
    <>
      <SEO
        title="Visibility Suite — Grow Everywhere From One Upload | Volaly"
        description="One upload automatically becomes social content, shorts, blogs, SEO pages and newsletters. Grow everywhere automatically with Volaly's Visibility Suite."
        canonical={`https://volaly.com/${lang}/visibility-suite`}
      />
      <JsonLd schema={pageSchema} />

      <HeroSection />
      <ProblemSection />
      <FeaturesSection />
      <WorkflowSection />
      <DashboardSection topContent={topContent} />
      <WhySection />
      <AudienceSection />

      {/* ── FAQ ── */}
      <section className="bg-mesh-soft relative overflow-hidden py-28">
        <div className="relative mx-auto max-w-3xl px-6">
          <SectionHeading
            eyebrow="FAQ"
            title={<>Visibility Suite <span className="gradient-text-multi">questions answered.</span></>}
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
                You Create.
                <span className="block gradient-text-multi">Volaly Grows.</span>
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-lg text-white/70">
                One upload. Every platform. Automatic growth — starting today.
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
                  <Play className="h-4 w-4" /> Watch Demo
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}

/* ─────────────── SECTION 1: HERO ─────────────── */

function HeroSection() {
  return (
    <section className="bg-aurora noise relative overflow-hidden pt-36 pb-24">
      <AuroraOrbs />
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(70%_60%_at_50%_30%,black,transparent)]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-[1fr_1fr]">

        {/* Left */}
        <div>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Eyebrow><Sparkles className="h-3.5 w-3.5 text-brand-blue" /> Visibility Suite</Eyebrow>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.07, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 text-[clamp(2.6rem,5.5vw,5rem)] font-black leading-[0.94] tracking-tight"
          >
            Grow Everywhere.
            <span className="block gradient-text-multi">From One Upload.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.17 }}
            className="mt-7 max-w-lg text-lg leading-relaxed text-muted-foreground"
          >
            One upload automatically becomes social content, shorts, blogs, SEO pages and newsletters — across every platform.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.27 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Button size="xl" variant="hero" onClick={openDemo}>
              Start Free <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="xl" variant="heroOutline" onClick={openDemo}>
              <Play className="h-4 w-4" /> Watch Demo
            </Button>
          </motion.div>
          {/* micro stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.42 }}
            className="mt-10 flex flex-wrap gap-6"
          >
            {[["10+", "Platforms"], ["Auto", "Publishing"], ["0", "Extra Work"]].map(([val, lbl]) => (
              <div key={lbl}>
                <div className="text-2xl font-extrabold gradient-text-multi">{val}</div>
                <div className="text-xs text-muted-foreground">{lbl}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right — distribution illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.85, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="hidden lg:flex items-center justify-center"
        >
          <DistributionIllustration />
        </motion.div>
      </div>
    </section>
  );
}

function DistributionIllustration() {
  const ring = platforms.slice(0, 8);
  const r = 130;
  const cx = 170;
  const cy = 170;

  return (
    <div className="relative" style={{ width: 340, height: 340 }}>
      {/* SVG lines */}
      <svg className="absolute inset-0" width={340} height={340}>
        {ring.map((_, i) => {
          const angle = (i / ring.length) * 2 * Math.PI - Math.PI / 2;
          const x2 = cx + r * Math.cos(angle);
          const y2 = cy + r * Math.sin(angle);
          return (
            <motion.line
              key={i}
              x1={cx} y1={cy} x2={x2} y2={y2}
              stroke="url(#lineGrad)"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.35 }}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.06, ease: "easeOut" }}
            />
          );
        })}
        <defs>
          <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="oklch(0.72 0.2 48)" />
            <stop offset="100%" stopColor="oklch(0.6 0.25 280)" />
          </linearGradient>
        </defs>
      </svg>

      {/* Centre node — Upload */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2, type: "spring", stiffness: 200 }}
        className="absolute"
        style={{ left: cx - 36, top: cy - 36 }}
      >
        <div className="relative grid h-[72px] w-[72px] place-items-center rounded-[22px] bg-gradient-to-br from-brand-orange to-brand-pink shadow-[0_8px_32px_oklch(0.72_0.2_48/0.45)] text-white">
          <Upload className="h-7 w-7" strokeWidth={1.8} />
          <motion.span
            className="absolute inset-0 rounded-[22px] border-2 border-brand-orange/40"
            animate={{ scale: [1, 1.25], opacity: [0.6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
          />
        </div>
      </motion.div>

      {/* Platform nodes */}
      {ring.map((p, i) => {
        const angle = (i / ring.length) * 2 * Math.PI - Math.PI / 2;
        const x = cx + r * Math.cos(angle);
        const y = cy + r * Math.sin(angle);
        return (
          <motion.div
            key={p.label}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.5 + i * 0.07, type: "spring", stiffness: 240 }}
            whileHover={{ scale: 1.15 }}
            className="absolute"
            style={{ left: x - 22, top: y - 22 }}
          >
            <div className={`grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br ${p.gradient} text-white shadow-soft`}>
              <p.icon className="h-4.5 w-4.5" strokeWidth={1.8} />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

/* ─────────────── SECTION 2: PROBLEM ─────────────── */

function ProblemSection() {
  return (
    <section className="relative overflow-hidden bg-[oklch(0.16_0.03_265)] py-28 text-white noise">
      <div className="bg-mesh-soft pointer-events-none absolute inset-0 opacity-70" />
      <div className="relative mx-auto max-w-5xl px-6">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-white/70">
            The Visibility Problem
          </span>
          <Reveal delay={0.05}>
            <h2 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl">
              One upload shouldn't mean <span className="gradient-text-multi">one platform.</span>
            </h2>
          </Reveal>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {/* Without */}
          <Reveal delay={0}>
            <div className="flex h-full flex-col rounded-[24px] border border-white/10 bg-white/[0.04] p-8">
              <div className="mb-6 flex items-center gap-3">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-white/5">
                  <XCircle className="h-4 w-4 text-white/40" />
                </span>
                <span className="text-sm font-bold uppercase tracking-wider text-white/50">Without Volaly</span>
              </div>
              <ol className="flex flex-1 flex-col gap-3">
                {[["Upload", ""], ["One Platform", "Only one audience sees it"], ["Repeat", "For every platform manually"], ["Repeat", "Again…"], ["Repeat", "And again…"]].map(([s, sub], i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-white/5">
                      <XCircle className="h-3 w-3 text-white/30" />
                    </span>
                    <div>
                      <span className="text-sm text-white/60">{s}</span>
                      {sub && <span className="block text-xs text-white/30">{sub}</span>}
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
          {/* With */}
          <Reveal delay={0.1}>
            <div className="flex h-full flex-col rounded-[24px] border border-brand-blue/30 bg-gradient-to-br from-brand-blue/8 to-brand-purple/8 p-8">
              <div className="mb-6 flex items-center gap-3">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-brand-green/15">
                  <CheckCircle2 className="h-4 w-4 text-brand-green" />
                </span>
                <span className="text-sm font-bold uppercase tracking-wider text-white/70">With Volaly</span>
              </div>
              <ol className="flex flex-1 flex-col gap-3">
                {[
                  ["Upload Once", ""],
                  ["Volaly AI", "Understands and transforms your content"],
                  ["Every Platform", "YouTube, TikTok, Instagram, Blog, SEO…"],
                  ["Automatic Growth", ""],
                ].map(([s, sub], i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-green/15">
                      <CheckCircle2 className="h-3 w-3 text-brand-green" />
                    </span>
                    <div>
                      <span className={`text-sm font-${i === 3 ? "extrabold" : "normal"} ${i === 3 ? "gradient-text-multi" : "text-white"}`}>{s}</span>
                      {sub && <span className="block text-xs text-white/50">{sub}</span>}
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ─────────────── SECTION 3: FEATURES GRID ─────────────── */

function FeaturesSection() {
  return (
    <section className="relative overflow-hidden py-32">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background via-brand-blue/[0.03] to-background" />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Everything Works Automatically"
          title={<>Eight tools. <span className="gradient-text-multi">Zero extra work.</span></>}
          subtitle="Every feature in the Visibility Suite runs automatically from the moment you upload."
        />
        <Stagger className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" gap={0.06}>
          {features.map((f) => (
            <StaggerItem key={f.title}>
              <motion.div
                whileHover={{ y: -5, scale: 1.01 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
                className={`glass-card group h-full rounded-[22px] bg-gradient-to-br ${f.gradient} p-7 transition-shadow duration-300 hover:shadow-[0_16px_48px_rgba(0,0,0,0.12)]`}
              >
                <div className={`mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-background/70 ${f.ic} shadow-soft transition-transform duration-300 group-hover:scale-110`}>
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-foreground">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

/* ─────────────── SECTION 4: WORKFLOW ─────────────── */

function WorkflowSection() {
  return (
    <section className="relative overflow-hidden bg-[oklch(0.16_0.03_265)] py-32 text-white noise">
      <div className="bg-mesh-soft pointer-events-none absolute inset-0 opacity-60" />
      <div className="relative mx-auto max-w-4xl px-6">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-white/70">
            One Upload Workflow
          </span>
          <Reveal delay={0.05}>
            <h2 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl">
              From one file to <span className="gradient-text-multi">everywhere.</span>
            </h2>
          </Reveal>
        </div>

        <div className="flex flex-col items-center gap-0">
          {/* Upload */}
          <WorkflowNode icon={Upload} label="Upload" sub="One piece of content" gradient="from-brand-orange to-brand-pink" delay={0} />
          <WorkflowArrow delay={0.1} />
          {/* Volaly AI */}
          <WorkflowNode icon={Sparkles} label="Volaly AI" sub="Understands, transforms and distributes" gradient="from-brand-purple to-brand-blue" delay={0.15} />
          <WorkflowArrow delay={0.25} />
          {/* Smart Shorts */}
          <WorkflowNode icon={Clapperboard} label="Smart Shorts" sub="Clips cut, captioned and branded automatically" gradient="from-brand-blue to-brand-cyan" delay={0.3} />
          <WorkflowArrow delay={0.4} />

          {/* Platform fan */}
          <Reveal delay={0.45}>
            <div className="grid grid-cols-5 gap-2.5 sm:grid-cols-10">
              {platforms.map((p) => (
                <motion.div
                  key={p.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: 0.45 + p.delay }}
                  whileHover={{ y: -4, scale: 1.1 }}
                  className="flex flex-col items-center gap-1.5"
                >
                  <div className={`grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br ${p.gradient} text-white shadow-soft`}>
                    <p.icon className="h-4 w-4" strokeWidth={1.8} />
                  </div>
                  <span className="text-[10px] text-white/50">{p.label}</span>
                </motion.div>
              ))}
            </div>
          </Reveal>

          <WorkflowArrow delay={0.55} />
          {/* Growth */}
          <Reveal delay={0.6}>
            <div className="flex items-center gap-4 rounded-[22px] bg-gradient-to-r from-brand-green to-brand-blue px-8 py-5 shadow-[0_8px_32px_rgba(0,0,0,0.22)] text-white">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-white/15">
                <TrendingUp className="h-5 w-5" strokeWidth={1.8} />
              </div>
              <div>
                <div className="text-base font-extrabold">Automatic Growth</div>
                <div className="text-xs text-white/70">More reach, more traffic, more revenue</div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function WorkflowNode({ icon: Icon, label, sub, gradient, delay }: { icon: React.ElementType; label: string; sub: string; gradient: string; delay: number }) {
  return (
    <Reveal delay={delay}>
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
        className="flex w-full max-w-md items-center gap-4 rounded-[22px] border border-white/10 bg-white/[0.05] px-6 py-5 backdrop-blur"
      >
        <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-gradient-to-br ${gradient} shadow-soft`}>
          <Icon className="h-5 w-5 text-white" strokeWidth={1.8} />
        </span>
        <div>
          <div className="text-sm font-extrabold text-white">{label}</div>
          <div className="text-xs text-white/50">{sub}</div>
        </div>
        <motion.span
          className="ml-auto rounded-full bg-brand-green/15 px-2.5 py-1 text-xs font-semibold text-brand-green"
        >
          Auto ✓
        </motion.span>
      </motion.div>
    </Reveal>
  );
}

function WorkflowArrow({ delay }: { delay: number }) {
  return (
    <motion.div
      initial={{ scaleY: 0, opacity: 0 }}
      whileInView={{ scaleY: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay }}
      style={{ originY: 0 }}
      className="mx-auto my-1 h-8 w-px bg-gradient-to-b from-white/30 to-white/10"
    />
  );
}

/* ─────────────── SECTION 5: DASHBOARD ─────────────── */

function DashboardSection({ topContent }: { topContent: TopContentItem[] }) {
  const barHeights = [40, 65, 52, 88, 72, 95, 58, 79];
  return (
    <section className="relative overflow-hidden py-32">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background via-brand-purple/[0.04] to-background" />
      <div className="relative mx-auto max-w-5xl px-6">
        <SectionHeading
          eyebrow="Growth Dashboard"
          title={<>Your growth, <span className="gradient-text-multi">at a glance.</span></>}
          subtitle="See exactly where your content is growing and what drives the most reach."
        />
        <Reveal delay={0.1}>
          <div className="mt-16 overflow-hidden rounded-[32px] border border-border/60 bg-background/90 shadow-[0_24px_64px_rgba(0,0,0,0.12)]">
            {/* Title bar */}
            <div className="flex items-center gap-2.5 border-b border-border/60 px-6 py-4">
              <span className="h-3 w-3 rounded-full bg-brand-orange/60" />
              <span className="h-3 w-3 rounded-full bg-brand-yellow/60" />
              <span className="h-3 w-3 rounded-full bg-brand-green/60" />
              <span className="ml-4 text-xs font-semibold text-muted-foreground">Visibility Dashboard — Volaly</span>
              <span className="ml-auto flex items-center gap-1.5 text-xs text-brand-green">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-green" />
                Live
              </span>
            </div>
            <div className="p-6 space-y-6">
              {/* Metrics */}
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
                {dashboardMetrics.map((d, i) => (
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

              {/* Bar chart */}
              <div className="flex h-24 items-end gap-2 rounded-2xl bg-muted/40 px-5 py-4">
                {barHeights.map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                    className="flex-1 rounded-t-md bg-gradient-to-t from-brand-blue to-brand-purple"
                  />
                ))}
              </div>

              {/* Top content */}
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground/60">Top Performing Content</p>
                <div className="space-y-2">
                  {topContent.map((c, i) => (
                    <motion.div
                      key={c.title}
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.08 }}
                      className="flex items-center gap-3 rounded-[14px] border border-border/50 bg-background/60 px-4 py-3"
                    >
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-brand-blue/20 to-brand-purple/20 text-xs font-extrabold text-brand-blue">
                        {i + 1}
                      </span>
                      <span className="flex-1 truncate text-sm font-medium text-foreground">{c.title}</span>
                      <span className="hidden shrink-0 text-xs text-muted-foreground sm:block">{c.platform}</span>
                      <span className="shrink-0 text-xs font-bold text-muted-foreground">{c.views} views</span>
                      <span className="shrink-0 text-xs font-extrabold text-brand-green">{c.trend}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ─────────────── SECTION 6: WHY ─────────────── */

function WhySection() {
  return (
    <section className="relative overflow-hidden bg-muted/20 py-28">
      <div className="relative mx-auto max-w-5xl px-6">
        <SectionHeading
          eyebrow="Why Visibility Suite?"
          title={<>Grow more with <span className="gradient-text-multi">less effort.</span></>}
        />
        <Stagger className="mt-14 grid gap-5 sm:grid-cols-3" gap={0.09}>
          {whyCards.map((c) => (
            <StaggerItem key={c.title}>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.22 }}
                className={`glass-card h-full rounded-[24px] bg-gradient-to-br ${c.gradient} p-8`}
              >
                <div className={`mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-background/70 ${c.ic} shadow-soft`}>
                  <c.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-extrabold text-foreground">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

/* ─────────────── SECTION 7: AUDIENCE ─────────────── */

function AudienceSection() {
  return (
    <section className="relative overflow-hidden py-28">
      <div className="relative mx-auto max-w-4xl px-6">
        <SectionHeading eyebrow="Who Benefits?" title={<>Built for <span className="gradient-text-multi">every business.</span></>} />
        <Stagger className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-7" gap={0.06}>
          {audiences.map((a) => (
            <StaggerItem key={a.label}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="group flex flex-col items-center gap-2.5 rounded-[20px] border border-border/60 bg-background/80 px-3 py-5 text-center transition-all duration-300 hover:border-brand-blue/30 hover:shadow-[0_12px_36px_rgba(0,0,0,0.08)]"
              >
                <div className={`grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br ${a.gradient} text-white shadow-soft transition-transform duration-300 group-hover:scale-110`}>
                  <a.icon className="h-4.5 w-4.5" strokeWidth={1.8} />
                </div>
                <span className="text-xs font-bold text-foreground">{a.label}</span>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
