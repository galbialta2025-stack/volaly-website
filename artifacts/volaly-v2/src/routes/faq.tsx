import { useState, useMemo } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  Search, ChevronDown, ArrowRight, MessageSquare, Sparkles,
  HelpCircle, DollarSign, Eye, Users, Briefcase, CreditCard,
  Shield, Bot,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { AuroraOrbs } from "@/components/Backdrop";
import { Reveal } from "@/components/Motion";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { JsonLd } from "@/components/JsonLd";
import { openDemo } from "@/lib/demo";

export const Route = createFileRoute("/faq")({
  component: FaqPage,
});

/* ─────────────── DATA ─────────────── */

type FaqItem = { q: string; a: string };
type Category = { id: string; label: string; icon: React.ElementType; items: FaqItem[] };

const categories: Category[] = [
  {
    id: "general",
    label: "General",
    icon: HelpCircle,
    items: [
      {
        q: "What is Volaly?",
        a: "Volaly is an AI-powered growth platform for creators and businesses. You upload your content once and Volaly automatically transforms it into revenue streams, multi-platform visibility and AI-powered customer conversations — with no manual work required.",
      },
      {
        q: "Who is Volaly for?",
        a: "Volaly is built for content creators (YouTubers, TikTok creators, podcasters, educators, coaches) and businesses (restaurants, hotels, gyms, real estate agencies, dental practices and more) who want to grow online without spending hours on manual marketing.",
      },
      {
        q: "How does Volaly work?",
        a: "You connect your content sources (YouTube, social media, your own uploads) and Volaly's AI processes every piece of content. It creates short-form clips, blog posts, newsletters, SEO pages, product listings and AI customer conversations — all automatically distributed to every platform.",
      },
      {
        q: "What makes Volaly different?",
        a: "Most tools automate one thing. Volaly automates everything. One upload triggers a complete growth engine — Revenue Suite for monetisation and Visibility Suite for distribution. There's no other platform that connects content creation directly to revenue and reach in a single workflow.",
      },
    ],
  },
  {
    id: "revenue",
    label: "Revenue Suite",
    icon: DollarSign,
    items: [
      {
        q: "What is Revenue Suite?",
        a: "Revenue Suite is the monetisation engine inside Volaly. It includes AI FAQ, Voice AI, Creator Shop, Memberships, Digital Products and Affiliate — all powered automatically by your uploaded content.",
      },
      {
        q: "How does AI FAQ work?",
        a: "AI FAQ trains on your content and answers customer or fan questions 24/7 — on your website, your creator page or embedded anywhere. It sounds like you, uses your products and pricing, and handles objections automatically.",
      },
      {
        q: "What is Voice AI?",
        a: "Voice AI creates an interactive voice persona powered by your content. Your audience can literally have a real-time voice conversation with your AI — answering questions, recommending products and booking appointments around the clock.",
      },
      {
        q: "Can I sell digital products?",
        a: "Yes. You can sell ebooks, templates, courses and any downloadable product through your Volaly-powered Creator Shop. Setup takes minutes — Volaly handles payments, delivery and follow-up automatically.",
      },
      {
        q: "Can I sell memberships?",
        a: "Yes. Create tiered memberships with custom perks and pricing. Volaly manages recurring billing, access control and member communications automatically.",
      },
      {
        q: "Can I sell merchandise?",
        a: "Yes. Connect your merch store or set one up through Volaly. Your AI can recommend and promote products in every customer conversation automatically.",
      },
      {
        q: "How do affiliate products work?",
        a: "Connect your affiliate links once and Volaly's AI will naturally recommend them in relevant customer conversations. You earn commissions automatically without adding any manual promotion to your workflow.",
      },
    ],
  },
  {
    id: "visibility",
    label: "Visibility Suite",
    icon: Eye,
    items: [
      {
        q: "What is Visibility Suite?",
        a: "Visibility Suite is the distribution engine inside Volaly. One upload automatically becomes short-form clips, long-form blog posts, newsletter editions, SEO pages and social posts — published across every platform without any manual work.",
      },
      {
        q: "What are Smart Shorts?",
        a: "Smart Shorts uses AI to watch your long-form video, identify the strongest moments (hooks, highlights, punchlines) and automatically create platform-optimised vertical clips for TikTok, Instagram Reels and YouTube Shorts — complete with captions and branding.",
      },
      {
        q: "Can Volaly publish automatically?",
        a: "Yes. Connect your social accounts once and Volaly handles all scheduling, formatting and publishing. Content is automatically adapted for each platform's native format, aspect ratio and style.",
      },
      {
        q: "Can I connect my social accounts?",
        a: "Yes. Volaly connects to YouTube, TikTok, Instagram, Facebook, LinkedIn, X and Threads. Connect once from your dashboard and every future upload is automatically distributed across all platforms.",
      },
      {
        q: "Does Volaly generate blog posts?",
        a: "Yes. Every upload is automatically transformed into a long-form, SEO-optimised blog post written in your brand voice. Posts are structured for search ranking and published to your connected blog or website.",
      },
      {
        q: "Does Volaly create newsletters?",
        a: "Yes. Each upload generates a newsletter edition ready to send to your email list. Volaly handles the writing, formatting and scheduling — you just review and approve.",
      },
    ],
  },
  {
    id: "creator",
    label: "Creator",
    icon: Users,
    items: [
      {
        q: "Can creators use Volaly?",
        a: "Absolutely — Volaly is built for creators. Whether you're a YouTuber, TikTok creator, podcaster, educator or coach, Volaly turns your content into memberships, digital products, a creator shop and automatic distribution across every platform.",
      },
      {
        q: "Do I need 5,000 followers to join?",
        a: "Only for the Creator Partner (free) plan, which is invitation-only. The paid Creator, Creator Pro and Creator Elite plans are open to everyone regardless of audience size.",
      },
      {
        q: "What is Creator Partner?",
        a: "Creator Partner is our free, invitation-only plan for established creators (5,000+ followers or approved applicants). Instead of a monthly fee, Volaly earns a revenue share on sales you generate through the platform. We grow together.",
      },
      {
        q: "Can I migrate from another platform?",
        a: "Yes. If you're currently using another creator tool or monetisation platform, our team will help you migrate your audience, products and content to Volaly. Contact us for a personalised migration plan.",
      },
    ],
  },
  {
    id: "business",
    label: "Business",
    icon: Briefcase,
    items: [
      {
        q: "Can businesses use Volaly?",
        a: "Yes. Volaly is designed for both creators and local/global businesses. Restaurants, hotels, gyms, dental practices, real estate agencies, medical beauty clinics, car rental companies and many more use Volaly to grow their online presence and automate customer communication.",
      },
      {
        q: "Which industries are supported?",
        a: "Volaly supports restaurants, hotels, gyms, dental practices, real estate, medical beauty, car rental, bars, social media agencies, visa agencies and many more. If your business has customers and creates any form of content, Volaly can automate your growth.",
      },
      {
        q: "Can I use Volaly for multiple locations?",
        a: "Yes. Creator Elite and Enterprise plans support multiple locations and team members. Each location can have its own AI persona, product catalogue and content distribution — all managed from one dashboard.",
      },
    ],
  },
  {
    id: "pricing",
    label: "Pricing",
    icon: CreditCard,
    items: [
      {
        q: "How does revenue sharing work?",
        a: "On the Creator Partner (free) plan, Volaly earns a percentage of sales you make through the platform instead of charging a monthly fee. On paid plans, the revenue share decreases significantly — so the more you earn, the better value a paid plan becomes.",
      },
      {
        q: "Can I upgrade my plan anytime?",
        a: "Yes. Upgrades take effect immediately and your new features are available right away. Downgrades apply at the start of your next billing cycle so you always get full value from your current plan.",
      },
      {
        q: "Can I cancel my subscription?",
        a: "Yes. Cancel at any time from your dashboard — no questions asked. Your account stays active until the end of your current billing period and you keep access to all your content and data.",
      },
      {
        q: "Do I own my customers?",
        a: "100%. Your customers, your data, your relationships. Volaly never contacts, markets to or monetises your audience without your explicit permission. You own every customer relationship built through the platform.",
      },
    ],
  },
  {
    id: "security",
    label: "Security",
    icon: Shield,
    items: [
      {
        q: "Is my content secure?",
        a: "Yes. All content is encrypted in transit and at rest. Your data is stored in secure, ISO 27001-compliant infrastructure. We never share, sell or use your content to train third-party models.",
      },
      {
        q: "Who has access to my data?",
        a: "Only you and team members you explicitly authorise have access to your account data. Volaly staff can only access your account for support purposes and only with your permission.",
      },
      {
        q: "Does Volaly comply with GDPR?",
        a: "Yes. Volaly is fully GDPR-compliant. You have full control over your data — you can export or delete your account and all associated data at any time from your dashboard.",
      },
    ],
  },
  {
    id: "ai",
    label: "AI",
    icon: Bot,
    items: [
      {
        q: "How does the AI learn?",
        a: "Volaly's AI is trained on the content you upload — your videos, PDFs, websites and product information. It learns your tone, your products, your pricing and your brand so every interaction feels like you.",
      },
      {
        q: "Does the AI improve over time?",
        a: "Yes. The more content you add, the more accurate and capable your AI becomes. Customer conversations also help the AI learn what questions your audience asks most — so it improves with every interaction.",
      },
      {
        q: "Can I upload PDFs?",
        a: "Yes. Upload product guides, menus, price lists, course materials or any PDF and Volaly's AI will learn from them instantly. The AI can then reference and recommend this content in customer conversations.",
      },
      {
        q: "Can I upload videos?",
        a: "Yes. Video is Volaly's primary content type. Upload any video and the AI transcribes, analyses and learns from it — then uses that knowledge to power your AI FAQ, Voice AI, Smart Shorts, blog posts and newsletters.",
      },
      {
        q: "Can I connect my website?",
        a: "Yes. Connect your website URL and Volaly's AI will crawl and learn from your existing content — pages, blog posts, product descriptions and FAQs. This makes your AI immediately knowledgeable about your business.",
      },
    ],
  },
];

const ALL_ID = "all";

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  name: "FAQ — Volaly",
  url: "https://volaly.com/faq",
  mainEntity: categories.flatMap((c) =>
    c.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    }))
  ),
};

/* ─────────────── PAGE ─────────────── */

function FaqPage() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState(ALL_ID);
  const [openItem, setOpenItem] = useState<string | null>(null);

  const tabs = [
    { id: ALL_ID, label: "All", icon: Sparkles },
    ...categories.map((c) => ({ id: c.id, label: c.label, icon: c.icon })),
  ];

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    return categories
      .filter((c) => activeCategory === ALL_ID || c.id === activeCategory)
      .map((c) => ({
        ...c,
        items: c.items.filter(
          (item) =>
            !q ||
            item.q.toLowerCase().includes(q) ||
            item.a.toLowerCase().includes(q)
        ),
      }))
      .filter((c) => c.items.length > 0);
  }, [query, activeCategory]);

  const totalVisible = filtered.reduce((n, c) => n + c.items.length, 0);

  return (
    <>
      <SEO
        title="FAQ — Everything You Need to Know About Volaly"
        description="Find answers to every question about Volaly — Revenue Suite, Visibility Suite, AI, pricing, creators, businesses and more."
        canonical="https://volaly.com/faq"
      />
      <JsonLd schema={pageSchema} />

      {/* ── HERO ── */}
      <section className="bg-aurora noise relative overflow-hidden pt-36 pb-16">
        <AuroraOrbs />
        <div className="bg-grid pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(65%_55%_at_50%_30%,black,transparent)]" />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground shadow-soft backdrop-blur">
              <HelpCircle className="h-3.5 w-3.5 text-brand-orange" /> FAQ
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 text-[clamp(2.4rem,5.5vw,4.5rem)] font-black leading-[0.96] tracking-tight"
          >
            Frequently Asked
            <span className="block gradient-text-multi">Questions.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16 }}
            className="mx-auto mt-5 max-w-lg text-lg leading-relaxed text-muted-foreground"
          >
            Everything you need to know about Volaly.
          </motion.p>

          {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24 }}
            className="mt-10 relative"
          >
            <Search className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground/50" />
            <input
              type="search"
              value={query}
              onChange={(e) => { setQuery(e.target.value); setOpenItem(null); }}
              placeholder="Search questions…"
              className="w-full rounded-2xl border border-border/70 bg-background/80 py-4 pl-14 pr-5 text-base shadow-soft backdrop-blur placeholder:text-muted-foreground/40 focus:border-brand-orange/40 focus:outline-none focus:ring-2 focus:ring-brand-orange/15 transition-all duration-200"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-muted/60 p-1 text-muted-foreground hover:bg-muted transition-colors"
              >
                <svg className="h-3.5 w-3.5" viewBox="0 0 14 14" fill="none">
                  <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            )}
          </motion.div>
        </div>
      </section>

      {/* ── CONTENT ── */}
      <section className="relative overflow-hidden py-16 pb-32">
        <div className="relative mx-auto max-w-3xl px-6">

          {/* Category tabs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-10 flex flex-wrap gap-2"
          >
            {tabs.map((tab) => {
              const active = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => { setActiveCategory(tab.id); setOpenItem(null); }}
                  className={`inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                    active
                      ? "border-brand-orange/40 bg-brand-orange/10 text-brand-orange shadow-soft"
                      : "border-border/60 bg-background/70 text-muted-foreground hover:border-brand-orange/25 hover:text-foreground"
                  }`}
                >
                  <tab.icon className="h-3.5 w-3.5" />
                  {tab.label}
                </button>
              );
            })}
          </motion.div>

          {/* Results count when searching */}
          <AnimatePresence>
            {query && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mb-6 text-sm text-muted-foreground"
              >
                {totalVisible === 0
                  ? "No results for "
                  : `${totalVisible} result${totalVisible === 1 ? "" : "s"} for `}
                <span className="font-semibold text-foreground">"{query}"</span>
              </motion.p>
            )}
          </AnimatePresence>

          {/* FAQ groups */}
          <AnimatePresence mode="wait">
            {filtered.length === 0 ? (
              <motion.div
                key="empty"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center gap-4 py-20 text-center"
              >
                <div className="grid h-16 w-16 place-items-center rounded-2xl bg-muted/60">
                  <Search className="h-7 w-7 text-muted-foreground/40" />
                </div>
                <p className="font-semibold text-foreground">No questions found</p>
                <p className="text-sm text-muted-foreground">Try different keywords or browse all categories.</p>
                <Button variant="outline" size="sm" onClick={() => { setQuery(""); setActiveCategory(ALL_ID); }}>
                  Clear search
                </Button>
              </motion.div>
            ) : (
              <motion.div
                key={`${activeCategory}-${query}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="space-y-10"
              >
                {filtered.map((cat, ci) => (
                  <div key={cat.id}>
                    {/* Category header (hidden when single category active and no search) */}
                    {(activeCategory === ALL_ID || query) && (
                      <motion.div
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: ci * 0.04 }}
                        className="mb-4 flex items-center gap-2.5"
                      >
                        <div className="grid h-8 w-8 place-items-center rounded-xl bg-gradient-to-br from-brand-orange/20 to-brand-pink/20 text-brand-orange">
                          <cat.icon className="h-4 w-4" />
                        </div>
                        <h2 className="text-sm font-extrabold uppercase tracking-wider text-foreground">{cat.label}</h2>
                        <span className="rounded-full bg-muted px-2 py-0.5 text-xs font-semibold text-muted-foreground">{cat.items.length}</span>
                      </motion.div>
                    )}
                    <div className="space-y-2.5">
                      {cat.items.map((item, ii) => {
                        const key = `${cat.id}-${ii}`;
                        const isOpen = openItem === key;
                        return (
                          <motion.div
                            key={key}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: ci * 0.04 + ii * 0.03 }}
                          >
                            <div className={`overflow-hidden rounded-[20px] border transition-all duration-200 ${isOpen ? "gradient-border shadow-[0_4px_24px_rgba(0,0,0,0.08)]" : "border-border/60 bg-background/70 hover:border-border"} backdrop-blur`}>
                              <button
                                onClick={() => setOpenItem(isOpen ? null : key)}
                                aria-expanded={isOpen}
                                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                              >
                                <span className="text-base font-semibold text-foreground leading-snug">{item.q}</span>
                                <ChevronDown className={`h-5 w-5 shrink-0 text-brand-orange transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                              </button>
                              <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                                <div className="overflow-hidden">
                                  <p className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Bottom CTA */}
          <Reveal delay={0.1}>
            <div className="mt-20 overflow-hidden rounded-[28px] border border-border/60 bg-background/80 p-8 text-center shadow-soft">
              <div className="mx-auto mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-brand-orange/20 to-brand-pink/20">
                <MessageSquare className="h-6 w-6 text-brand-orange" />
              </div>
              <h3 className="text-xl font-extrabold text-foreground">Still have questions?</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Talk to Volaly AI — it knows everything about the platform and answers instantly.
              </p>
              <Button size="lg" variant="hero" className="mt-7 rounded-full" onClick={openDemo}>
                Start Chat <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
