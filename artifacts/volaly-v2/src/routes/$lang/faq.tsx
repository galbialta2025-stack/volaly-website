import { useState, useMemo } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  Search, ChevronDown, ArrowRight, MessageSquare, Sparkles,
  HelpCircle, DollarSign, Eye, Users, Briefcase, CreditCard,
  Shield, Bot,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useTranslation } from "react-i18next";
import { AuroraOrbs } from "@/components/Backdrop";
import { Reveal } from "@/components/Motion";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { JsonLd } from "@/components/JsonLd";
import { openDemo } from "@/lib/demo";

export const Route = createFileRoute("/$lang/faq")({
  component: FaqPage,
});

/* ─────────────── VISUAL META (non-translatable) ─────────────── */

const categoryIcons: Record<string, React.ElementType> = {
  general: HelpCircle,
  revenue: DollarSign,
  visibility: Eye,
  creator: Users,
  business: Briefcase,
  pricing: CreditCard,
  security: Shield,
  ai: Bot,
};

const categoryOrder = ["general", "revenue", "visibility", "creator", "business", "pricing", "security", "ai"];

const ALL_ID = "all";

type FaqItem = { q: string; a: string };
type RawCategory = { id: string; label: string; items: FaqItem[] };
type Category = { id: string; label: string; icon: React.ElementType; items: FaqItem[] };

/* ─────────────── PAGE ─────────────── */

function FaqPage() {
  const { lang } = Route.useParams();
  const { t } = useTranslation("faq");

  const rawCategories = t("page.categories", { returnObjects: true }) as RawCategory[];
  const categories: Category[] = categoryOrder.map((id) => {
    const cat = rawCategories.find((c) => c.id === id)!;
    return { ...cat, icon: categoryIcons[id] };
  });

  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    name: "FAQ — Volaly",
    url: `https://volaly.com/${lang}/faq`,
    mainEntity: categories.flatMap((c) =>
      c.items.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      }))
    ),
  };
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState(ALL_ID);
  const [openItem, setOpenItem] = useState<string | null>(null);

  const tabs = [
    { id: ALL_ID, label: t("page.allTab"), icon: Sparkles },
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, activeCategory, categories]);

  const totalVisible = filtered.reduce((n, c) => n + c.items.length, 0);

  return (
    <>
      <SEO
        title={t("seo.title")}
        description={t("seo.description")}
        canonical={`https://volaly.com/${lang}/faq`}
      />
      <JsonLd schema={pageSchema} />

      {/* ── HERO ── */}
      <section className="bg-aurora noise relative overflow-hidden pt-36 pb-16">
        <AuroraOrbs />
        <div className="bg-grid pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(65%_55%_at_50%_30%,black,transparent)]" />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground shadow-soft backdrop-blur">
              <HelpCircle className="h-3.5 w-3.5 text-brand-orange" /> {t("hero.eyebrow")}
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 text-[clamp(2.4rem,5.5vw,4.5rem)] font-black leading-[0.96] tracking-tight"
          >
            {t("hero.titleLine1")}
            <span className="block gradient-text-multi">{t("hero.titleLine2")}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16 }}
            className="mx-auto mt-5 max-w-lg text-lg leading-relaxed text-muted-foreground"
          >
            {t("hero.subtitle")}
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
              placeholder={t("page.searchPlaceholder")}
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
                  ? t("page.resultsNotFound")
                  : totalVisible === 1
                  ? t("page.resultsFoundOne")
                  : t("page.resultsFoundMany", { count: totalVisible })}{" "}
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
                <p className="font-semibold text-foreground">{t("page.noResultsTitle")}</p>
                <p className="text-sm text-muted-foreground">{t("page.noResultsSubtitle")}</p>
                <Button variant="outline" size="sm" onClick={() => { setQuery(""); setActiveCategory(ALL_ID); }}>
                  {t("page.clearSearch")}
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
              <h3 className="text-xl font-extrabold text-foreground">{t("page.ctaTitle")}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {t("page.ctaSubtitle")}
              </p>
              <Button size="lg" variant="hero" className="mt-7 rounded-full" onClick={openDemo}>
                {t("page.ctaButton")} <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
