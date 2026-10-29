import { useCallback, useEffect, useState, type ComponentType } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, RotateCcw, Maximize2, Minimize2 } from "lucide-react";
import { AuroraOrbs } from "@/components/Backdrop";
import { SEO } from "@/components/SEO";
import { demoAssetUrls, getDemoVenue } from "@/lib/demo-venues";
import { registerDemoOffline } from "@/lib/demo-offline";
import {
  AnimateChapter,
  CloseChapter,
  HookChapter,
  ImagesChapter,
  PromoChapter,
  ShortsChapter,
  StoriesChapter,
  WeekChapter,
  type ChapterProps,
} from "./chapters";

const CHAPTERS: { id: string; label: string; Component: ComponentType<ChapterProps> }[] = [
  { id: "intro", label: "Intro", Component: HookChapter },
  { id: "images", label: "Images", Component: ImagesChapter },
  { id: "shorts", label: "Shorts", Component: ShortsChapter },
  { id: "stories", label: "Stories", Component: StoriesChapter },
  { id: "promo", label: "Promo", Component: PromoChapter },
  { id: "animate", label: "Animate", Component: AnimateChapter },
  { id: "week", label: "Channels", Component: WeekChapter },
  { id: "close", label: "Plans", Component: CloseChapter },
];

export function SalesDemo({ lang, venueId }: { lang: string; venueId?: string }) {
  const venue = getDemoVenue(venueId);
  const [step, setStep] = useState(0);
  const [dir, setDir] = useState(1);
  const [run, setRun] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const last = CHAPTERS.length - 1;

  const go = useCallback(
    (to: number) => {
      const next = Math.max(0, Math.min(last, to));
      setDir(next >= step ? 1 : -1);
      setStep(next);
    },
    [last, step],
  );
  const next = useCallback(() => go(step + 1), [go, step]);
  const back = useCallback(() => go(step - 1), [go, step]);
  const restart = useCallback(() => {
    setDir(-1);
    setStep(0);
    setRun((r) => r + 1);
  }, []);

  const toggleFullscreen = useCallback(() => {
    if (typeof document === "undefined") return;
    if (document.fullscreenElement) void document.exitFullscreen();
    else void document.documentElement.requestFullscreen?.().catch(() => undefined);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const target = e.target as HTMLElement | null;
      if ((e.key === " " || e.key === "Enter") && target?.closest("button, a, input, textarea")) return;
      if (["ArrowRight", "PageDown", " ", "Enter"].includes(e.key)) {
        e.preventDefault();
        next();
      } else if (["ArrowLeft", "PageUp", "Backspace"].includes(e.key)) {
        e.preventDefault();
        back();
      } else if (e.key === "r" || e.key === "R" || e.key === "Home") {
        restart();
      } else if (e.key === "f" || e.key === "F") {
        toggleFullscreen();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, back, restart, toggleFullscreen]);

  useEffect(() => {
    const onFs = () => setIsFullscreen(Boolean(document.fullscreenElement));
    document.addEventListener("fullscreenchange", onFs);
    return () => document.removeEventListener("fullscreenchange", onFs);
  }, []);

  // Offline support: cache the app shell and every asset of this venue's demo.
  useEffect(() => {
    registerDemoOffline(demoAssetUrls(venue));
  }, [venue]);

  // Warm the browser cache so every chapter renders instantly.
  useEffect(() => {
    for (const url of demoAssetUrls(venue)) {
      if (url.endsWith(".mp4")) continue;
      const img = new Image();
      img.src = url;
    }
  }, [venue]);

  const { Component } = CHAPTERS[step];

  return (
    <div className="noise relative flex h-[100dvh] flex-col overflow-hidden bg-[oklch(0.15_0.03_265)] text-white">
      <SEO
        title={`Volaly Visibility Suite — Demo for ${venue.name}`}
        description="Guided Volaly sales demo with prepared example results."
        canonical={`https://volaly.com/${lang}/demo`}
        noIndex
      />
      <AuroraOrbs />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_40%,transparent,rgba(0,0,0,0.55))]" />

      {/* Top bar */}
      <header className="relative z-20 flex items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <div className="flex min-w-0 items-center gap-3">
          <img src="/volaly-logo-v2.png" alt="Volaly" className="h-8 w-auto sm:h-9" />
          <span className="hidden rounded-full border border-brand-yellow/40 bg-brand-yellow/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-brand-yellow sm:inline">
            Demo · prepared examples
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="rounded-full border border-brand-yellow/40 bg-brand-yellow/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-brand-yellow sm:hidden">
            Demo
          </span>
          <button
            type="button"
            onClick={restart}
            aria-label="Restart demo"
            className="grid h-9 w-9 place-items-center rounded-full border border-white/12 bg-white/5 text-white/80 transition hover:bg-white/10 hover:text-white"
          >
            <RotateCcw className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={toggleFullscreen}
            aria-label={isFullscreen ? "Exit full screen" : "Full screen"}
            className="hidden h-9 w-9 place-items-center rounded-full border border-white/12 bg-white/5 text-white/80 transition hover:bg-white/10 hover:text-white sm:grid"
          >
            {isFullscreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
          </button>
        </div>
      </header>

      {/* Stage */}
      <main className="relative z-10 min-h-0 flex-1 overflow-y-auto overflow-x-hidden md:overflow-hidden">
        <AnimatePresence mode="wait" custom={dir} initial={false}>
          <motion.div
            key={`${run}-${step}`}
            custom={dir}
            initial={{ opacity: 0, x: dir * 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: dir * -60 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="flex min-h-full w-full items-start py-4 pb-6 md:h-full md:items-center md:py-0 md:pb-0"
          >
            <Component venue={venue} lang={lang} onRestart={restart} />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Controls */}
      <footer className="relative z-20 flex items-center gap-3 px-4 pb-[max(12px,env(safe-area-inset-bottom))] pt-3 sm:px-6">
        <button
          type="button"
          onClick={back}
          disabled={step === 0}
          className="inline-flex h-11 items-center gap-1.5 rounded-xl border border-white/15 bg-white/5 px-4 text-sm font-bold text-white transition hover:bg-white/10 disabled:opacity-30"
        >
          <ChevronLeft className="h-4 w-4" /> <span className="hidden sm:inline">Back</span>
        </button>

        <nav aria-label="Demo chapters" className="flex min-w-0 flex-1 items-center gap-1.5">
          {CHAPTERS.map((c, i) => (
            <button
              key={c.id}
              type="button"
              onClick={() => go(i)}
              aria-label={c.label}
              aria-current={i === step ? "step" : undefined}
              className="group flex min-w-0 flex-1 flex-col gap-1.5"
            >
              <span className="relative h-1 w-full overflow-hidden rounded-full bg-white/15">
                <motion.span
                  className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-brand-orange to-brand-pink"
                  initial={false}
                  animate={{ width: i <= step ? "100%" : "0%" }}
                  transition={{ duration: 0.45 }}
                />
              </span>
              <span
                className={`hidden truncate text-left text-[11px] font-semibold transition lg:block ${
                  i === step ? "text-white" : "text-white/40 group-hover:text-white/70"
                }`}
              >
                {c.label}
              </span>
            </button>
          ))}
        </nav>

        <button
          type="button"
          onClick={step === last ? restart : next}
          className="inline-flex h-11 items-center gap-1.5 rounded-xl bg-primary px-5 text-sm font-bold text-primary-foreground shadow-[var(--shadow-glow-orange)] transition hover:-translate-y-0.5"
        >
          {step === last ? (
            <>
              <RotateCcw className="h-4 w-4" /> Restart
            </>
          ) : (
            <>
              Next <ChevronRight className="h-4 w-4" />
            </>
          )}
        </button>
      </footer>
    </div>
  );
}
