import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  Upload, Sparkles, DollarSign, Rocket, TrendingUp,
  MessageSquare, Mic2, ShoppingBag, CreditCard, Share2, Link2,
  Clapperboard, Send, Search, Mail, BarChart3,
  ArrowRight, Play, CheckCircle2, XCircle, ChevronDown,
  Youtube, Instagram, BookOpen, Briefcase, MonitorPlay, Users,
  Star, Quote,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { AuroraOrbs } from "@/components/Backdrop";
import { Reveal, Stagger, StaggerItem } from "@/components/Motion";
import { SectionHeading, Eyebrow } from "@/components/sections/shared";
import { Button } from "@/components/ui/button";
import { HeroVideo } from "@/components/HeroVideo";
import { SEO } from "@/components/SEO";
import { JsonLd } from "@/components/JsonLd";
import { openDemo } from "@/lib/demo";

export const Route = createFileRoute("/$lang/creator")({
  component: CreatorPage,
});

/* ═══════════════════════════════════════════════
   DATA
═══════════════════════════════════════════════ */

const revenueCards = [
  { icon: MessageSquare, title: "AI FAQ", desc: "Answer fan and customer questions 24/7 — without lifting a finger.", color: "from-brand-blue/20 to-brand-purple/20", ic: "text-brand-blue" },
  { icon: Mic2,          title: "Voice AI",       desc: "Let your audience talk directly to your AI persona anytime.", color: "from-brand-purple/20 to-brand-pink/20", ic: "text-brand-purple" },
  { icon: ShoppingBag,   title: "Creator Shop",   desc: "Sell merch, digital products and courses from one upload.", color: "from-brand-orange/20 to-brand-yellow/20", ic: "text-brand-orange" },
  { icon: CreditCard,    title: "Memberships",    desc: "Build a recurring revenue stream from your most loyal fans.", color: "from-brand-green/20 to-brand-cyan/20", ic: "text-brand-green" },
  { icon: BookOpen,      title: "Digital Products", desc: "Package your knowledge into ebooks, templates and courses.", color: "from-brand-pink/20 to-brand-orange/20", ic: "text-brand-pink" },
  { icon: Link2,         title: "Affiliate",      desc: "Recommend what you already use and earn automatically.", color: "from-brand-cyan/20 to-brand-blue/20", ic: "text-brand-cyan" },
];

const visibilityCards = [
  { icon: Clapperboard, title: "Smart Shorts",    desc: "Turn one long video into dozens of high-performing clips.", color: "from-brand-purple/20 to-brand-blue/20", ic: "text-brand-purple" },
  { icon: Send,          title: "Auto Publishing", desc: "Publish to every platform from one upload — zero extra work.", color: "from-brand-blue/20 to-brand-cyan/20", ic: "text-brand-blue" },
  { icon: Search,        title: "SEO Content",    desc: "Every upload becomes an article that ranks in search.", color: "from-brand-green/20 to-brand-cyan/20", ic: "text-brand-green" },
  { icon: BookOpen,      title: "Blog",           desc: "Auto-generate long-form posts that build authority over time.", color: "from-brand-orange/20 to-brand-yellow/20", ic: "text-brand-orange" },
  { icon: Mail,          title: "Newsletter",     desc: "Send email campaigns generated directly from your content.", color: "from-brand-pink/20 to-brand-purple/20", ic: "text-brand-pink" },
  { icon: BarChart3,     title: "Analytics",      desc: "See exactly which content earns the most revenue and reach.", color: "from-brand-blue/20 to-brand-purple/20", ic: "text-brand-blue" },
];

const howItWorksSteps = [
  { icon: Upload,      label: "Upload",          gradient: "from-brand-orange to-brand-pink" },
  { icon: Sparkles,    label: "Volaly AI",       gradient: "from-brand-purple to-brand-blue" },
  { icon: DollarSign,  label: "Revenue Suite",   gradient: "from-brand-orange to-brand-yellow" },
  { icon: Rocket,      label: "Visibility Suite", gradient: "from-brand-blue to-brand-cyan" },
  { icon: TrendingUp,  label: "Growth",          gradient: "from-brand-green to-brand-blue", highlight: true },
];

const dashboardItems = [
  { label: "Revenue",    value: "+38%",  icon: DollarSign,   gradient: "from-brand-orange/20 to-brand-yellow/20",  ic: "text-brand-orange" },
  { label: "Visibility", value: "+124%", icon: TrendingUp,   gradient: "from-brand-blue/20 to-brand-cyan/20",     ic: "text-brand-blue" },
  { label: "Shop Sales", value: "142",   icon: ShoppingBag,  gradient: "from-brand-pink/20 to-brand-orange/20",   ic: "text-brand-pink" },
  { label: "Voice AI",   value: "24/7",  icon: Mic2,         gradient: "from-brand-purple/20 to-brand-blue/20",   ic: "text-brand-purple" },
  { label: "Analytics",  value: "Live",  icon: BarChart3,    gradient: "from-brand-green/20 to-brand-cyan/20",    ic: "text-brand-green" },
  { label: "Shorts",     value: "Auto",  icon: Clapperboard, gradient: "from-brand-blue/20 to-brand-purple/20",   ic: "text-brand-blue" },
];

const audiences = [
  { icon: Youtube,      label: "YouTubers",           gradient: "from-brand-orange to-brand-pink" },
  { icon: MonitorPlay,  label: "TikTok Creators",     gradient: "from-brand-pink to-brand-purple" },
  { icon: Instagram,    label: "Instagram Creators",  gradient: "from-brand-purple to-brand-blue" },
  { icon: BookOpen,     label: "Educators",           gradient: "from-brand-blue to-brand-cyan" },
  { icon: Users,        label: "Coaches",             gradient: "from-brand-green to-brand-cyan" },
  { icon: Briefcase,    label: "Businesses",          gradient: "from-brand-orange to-brand-yellow" },
];

const testimonials = [
  { name: "Alex K.", role: "YouTuber · 280K subs", quote: "I upload once and Volaly handles everything. My shop revenue doubled in 60 days.", stars: 5 },
  { name: "Mia T.",  role: "TikTok Creator · 1.2M", quote: "The Voice AI feature alone pays for itself. My fans love talking to my AI persona.", stars: 5 },
  { name: "James R.",role: "Online Coach",          quote: "Newsletter, blog and social posts — all generated from one video. Unreal.", stars: 5 },
];

const faqs = [
  { q: "Do I need to change how I create content?", a: "No. Keep using YouTube, Instagram, TikTok or any platform you love. Volaly connects to them and handles everything else automatically." },
  { q: "How does the Creator Shop work?",           a: "You can sell digital products, merch and memberships directly through your Volaly-powered shop. Setup takes minutes — no coding required." },
  { q: "What is Voice AI?",                         a: "Voice AI lets your audience have real conversations with an AI that sounds like you, powered by your uploaded content and brand voice." },
  { q: "Will Volaly post on my behalf?",            a: "Yes. Once you connect your accounts, Volaly automatically schedules and publishes content across all your platforms from every upload." },
  { q: "How long does setup take?",                 a: "Most creators are live within a day. Our team handles the AI training and onboarding for you." },
  { q: "Can I try Volaly for free?",                a: "Yes — start free and explore the platform before committing to any plan." },
];

/* ═══════════════════════════════════════════════
   PAGE
═══════════════════════════════════════════════ */

function CreatorPage() {
  const { lang } = Route.useParams();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const creatorSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Volaly for Creators — Turn Every Upload into Revenue",
    url: `https://volaly.com/${lang}/creator`,
    description: "Volaly helps creators automatically monetize and distribute every upload with AI-powered revenue streams, smart content distribution and 24/7 audience engagement.",
    publisher: { "@id": "https://volaly.com/#organization" },
  };

  return (
    <>
      <SEO
        title="Volaly for Creators — Turn Every Upload into Revenue"
        description="Keep creating. Volaly automatically transforms every upload into revenue, visibility and AI-powered audience experiences. Creator Shop, Voice AI, Memberships and more."
        canonical={`https://volaly.com/${lang}/creator`}
      />
      <JsonLd schema={creatorSchema} />

      {/* ── HERO ── */}
      <section className="bg-aurora noise relative overflow-hidden pt-36 pb-24">
        <AuroraOrbs />
        <div className="bg-grid pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(70%_60%_at_50%_35%,black,transparent)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <Eyebrow><Sparkles className="h-3.5 w-3.5 text-brand-orange" /> For Creators</Eyebrow>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="mt-7 text-[clamp(2.8rem,6vw,5.5rem)] font-black leading-[0.95] tracking-tight text-foreground"
            >
              One Upload.
              <span className="block gradient-text-multi">Volaly Does the Rest.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.16 }}
              className="mt-7 max-w-lg text-lg leading-relaxed text-muted-foreground"
            >
              Keep creating content. Volaly automatically transforms every upload into revenue, visibility and AI-powered customer conversations.
            </motion.p>
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
          </div>
          <div className="hidden lg:block">
            <HeroVideo title="Watch creator demo" onPlay={openDemo} />
          </div>
          {/* mobile video */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:hidden"
          >
            <HeroVideo title="Watch creator demo" onPlay={openDemo} />
          </motion.div>
        </div>
      </section>

      {/* ── CREATOR PROBLEM ── */}
      <section className="relative overflow-hidden bg-[oklch(0.16_0.03_265)] py-28 text-white noise">
        <div className="bg-mesh-soft pointer-events-none absolute inset-0 opacity-70" />
        <div className="relative mx-auto max-w-5xl px-6">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-white/70">
              The Creator Problem
            </span>
            <Reveal delay={0.05}>
              <h2 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl">
                Every upload takes <span className="gradient-text-multi">too much work.</span>
              </h2>
            </Reveal>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {/* Without */}
            <Reveal delay={0}>
              <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-8">
                <div className="mb-6 flex items-center gap-3">
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-white/5">
                    <XCircle className="h-4 w-4 text-white/40" />
                  </span>
                  <span className="text-sm font-bold uppercase tracking-wider text-white/50">Without Volaly</span>
                </div>
                <ol className="space-y-3">
                  {["Create", "Edit", "Post", "Reply", "Sell", "Repeat"].map((s) => (
                    <li key={s} className="flex items-center gap-3 text-white/60">
                      <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-white/5">
                        <XCircle className="h-3 w-3 text-white/30" />
                      </span>
                      <span className="text-sm">{s}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>
            {/* With */}
            <Reveal delay={0.1}>
              <div className="rounded-[24px] border border-brand-orange/30 bg-gradient-to-br from-brand-orange/8 to-brand-blue/8 p-8">
                <div className="mb-6 flex items-center gap-3">
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-brand-green/15">
                    <CheckCircle2 className="h-4 w-4 text-brand-green" />
                  </span>
                  <span className="text-sm font-bold uppercase tracking-wider text-white/70">With Volaly</span>
                </div>
                <ol className="space-y-3">
                  {["Create", "Upload", "Volaly does the rest"].map((s, i) => (
                    <li key={s} className="flex items-center gap-3">
                      <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-green/15">
                        <CheckCircle2 className="h-3 w-3 text-brand-green" />
                      </span>
                      <span className={`text-sm font-${i === 2 ? "extrabold" : "normal"} ${i === 2 ? "gradient-text-multi" : "text-white"}`}>{s}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── REVENUE SUITE ── */}
      <section className="relative overflow-hidden py-32">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background via-brand-orange/[0.03] to-background" />
        <div className="relative mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Revenue Suite"
            title={<>Earn More From <span className="gradient-text-multi">Every Upload.</span></>}
            subtitle="Six ways Volaly turns your content into income — automatically."
          />
          <Stagger className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" gap={0.07}>
            {revenueCards.map((c) => (
              <StaggerItem key={c.title}>
                <motion.div
                  whileHover={{ y: -4, scale: 1.01 }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                  className={`glass-card group h-full rounded-[22px] bg-gradient-to-br ${c.color} p-7 transition-shadow duration-300 hover:shadow-[0_16px_48px_rgba(0,0,0,0.12)]`}
                >
                  <div className={`mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-background/70 ${c.ic} shadow-soft transition-transform duration-300 group-hover:scale-110`}>
                    <c.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ── VISIBILITY SUITE ── */}
      <section className="relative overflow-hidden bg-muted/20 py-32">
        <div className="relative mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Visibility Suite"
            title={<>Grow Everywhere <span className="gradient-text-multi">Automatically.</span></>}
            subtitle="One upload. Volaly handles all your platforms so you never have to post twice."
          />
          <Stagger className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" gap={0.07}>
            {visibilityCards.map((c) => (
              <StaggerItem key={c.title}>
                <motion.div
                  whileHover={{ y: -4, scale: 1.01 }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                  className={`glass-card group h-full rounded-[22px] bg-gradient-to-br ${c.color} p-7 transition-shadow duration-300 hover:shadow-[0_16px_48px_rgba(0,0,0,0.12)]`}
                >
                  <div className={`mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-background/70 ${c.ic} shadow-soft transition-transform duration-300 group-hover:scale-110`}>
                    <c.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="bg-dots relative overflow-hidden py-32">
        <div className="relative mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="How It Works"
            title={<>From One Upload to <span className="gradient-text-multi">Complete Automation.</span></>}
          />
          {/* Desktop horizontal */}
          <Stagger className="mt-20 hidden lg:grid lg:grid-cols-5 gap-4 relative" gap={0.09}>
            <div className="pointer-events-none absolute top-11 left-[10%] right-[10%] h-px bg-gradient-to-r from-brand-orange via-brand-purple to-brand-green opacity-25" />
            {howItWorksSteps.map((s) => (
              <StaggerItem key={s.label}>
                <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2, ease: "easeOut" }} className="group flex flex-col items-center text-center">
                  <div className={`relative z-10 grid h-[80px] w-[80px] place-items-center rounded-[24px] bg-gradient-to-br ${s.gradient} text-white shadow-soft transition-transform duration-300 group-hover:scale-105 ${s.highlight ? "ring-2 ring-brand-green/40" : ""}`}>
                    <s.icon className="h-8 w-8" strokeWidth={1.7} />
                  </div>
                  <div className="glass-card mt-4 w-full rounded-[18px] px-4 py-3">
                    <p className={`text-sm font-extrabold ${s.highlight ? "gradient-text-multi" : "text-foreground"}`}>{s.label}</p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </Stagger>
          {/* Mobile vertical */}
          <Stagger className="mt-12 space-y-3 lg:hidden relative" gap={0.08}>
            <div className="absolute left-[27px] top-0 h-full w-px bg-gradient-to-b from-brand-orange via-brand-purple to-brand-green opacity-25" />
            {howItWorksSteps.map((s) => (
              <StaggerItem key={s.label}>
                <div className="relative flex items-center gap-4">
                  <div className={`relative z-10 grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br ${s.gradient} text-white`}>
                    <s.icon className="h-6 w-6" strokeWidth={1.8} />
                  </div>
                  <div className={`glass-card flex-1 rounded-[16px] px-4 py-3 ${s.highlight ? "bg-gradient-to-r from-brand-green/10 to-brand-blue/10" : ""}`}>
                    <p className={`text-sm font-extrabold ${s.highlight ? "gradient-text-multi" : "text-foreground"}`}>{s.label}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ── CREATOR DASHBOARD ── */}
      <section className="relative overflow-hidden py-32">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background via-brand-purple/[0.04] to-background" />
        <div className="relative mx-auto max-w-5xl px-6">
          <SectionHeading
            eyebrow="Creator Dashboard"
            title={<>Everything in <span className="gradient-text-multi">one place.</span></>}
            subtitle="Revenue, visibility, shop, voice and analytics — all live in your Volaly dashboard."
          />
          <Reveal delay={0.1}>
            <div className="mt-16 overflow-hidden rounded-[32px] border border-border/60 bg-background/80 shadow-[0_32px_80px_rgba(0,0,0,0.14)] backdrop-blur">
              {/* Title bar */}
              <div className="flex items-center gap-2.5 border-b border-border/60 px-6 py-4">
                <span className="h-3 w-3 rounded-full bg-brand-orange/60" />
                <span className="h-3 w-3 rounded-full bg-brand-yellow/60" />
                <span className="h-3 w-3 rounded-full bg-brand-green/60" />
                <span className="ml-4 text-xs font-semibold text-muted-foreground">Creator Dashboard — Volaly</span>
              </div>
              {/* Metric grid */}
              <div className="grid grid-cols-2 gap-4 p-6 sm:grid-cols-3">
                {dashboardItems.map((d, i) => (
                  <motion.div
                    key={d.label}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                    className={`rounded-[20px] bg-gradient-to-br ${d.gradient} p-5`}
                  >
                    <div className={`mb-3 grid h-10 w-10 place-items-center rounded-xl bg-background/60 ${d.ic}`}>
                      <d.icon className="h-5 w-5" />
                    </div>
                    <div className="text-2xl font-extrabold gradient-text-multi">{d.value}</div>
                    <div className="mt-0.5 text-xs text-muted-foreground">{d.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── WHO IS IT FOR ── */}
      <section className="relative overflow-hidden bg-muted/20 py-28">
        <div className="relative mx-auto max-w-5xl px-6">
          <SectionHeading eyebrow="Who Is It For" title={<>Built for <span className="gradient-text-multi">every creator.</span></>} />
          <Stagger className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3" gap={0.07}>
            {audiences.map((a) => (
              <StaggerItem key={a.label}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="group flex flex-col items-center gap-3 rounded-[20px] border border-border/60 bg-background/80 p-6 text-center transition-all duration-300 hover:border-brand-orange/30 hover:shadow-[0_12px_36px_rgba(0,0,0,0.08)]"
                >
                  <div className={`grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br ${a.gradient} text-white shadow-soft transition-transform duration-300 group-hover:scale-110`}>
                    <a.icon className="h-5 w-5" strokeWidth={1.8} />
                  </div>
                  <span className="text-sm font-bold text-foreground">{a.label}</span>
                </motion.div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="relative overflow-hidden py-28">
        <div className="relative mx-auto max-w-5xl px-6">
          <SectionHeading eyebrow="Testimonials" title={<>Creators who <span className="gradient-text-multi">already grow.</span></>} />
          <Stagger className="mt-14 grid gap-5 sm:grid-cols-3" gap={0.08}>
            {testimonials.map((t) => (
              <StaggerItem key={t.name}>
                <div className="glass-card flex h-full flex-col rounded-[22px] p-7">
                  <Quote className="mb-4 h-6 w-6 text-brand-orange/50" />
                  <p className="flex-1 text-sm leading-relaxed text-muted-foreground">{t.quote}</p>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gradient-to-br from-brand-orange/30 to-brand-purple/30 text-sm font-extrabold text-foreground">
                      {t.name[0]}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-foreground">{t.name}</div>
                      <div className="text-xs text-muted-foreground">{t.role}</div>
                    </div>
                  </div>
                  <div className="mt-3 flex gap-0.5">
                    {Array.from({ length: t.stars }).map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-brand-orange text-brand-orange" />
                    ))}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-mesh-soft relative overflow-hidden py-28">
        <div className="relative mx-auto max-w-3xl px-6">
          <SectionHeading
            eyebrow="FAQ"
            title={<>Creator <span className="gradient-text-multi">questions answered.</span></>}
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
                Join creators who upload once and let Volaly handle the rest.
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
