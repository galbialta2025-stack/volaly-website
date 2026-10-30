import type { ReactNode } from "react";
import { motion } from "motion/react";
import { ArrowRight, Coins } from "lucide-react";
import { EASE } from "./primitives";

export interface ChapterInfo {
  number: number;
  tool: string;
  title: ReactNode;
  description: string;
  steps?: [string, string, string];
  credits?: string;
}

/** Two-column chapter: talking points left, phone stage right (stacked on phones).
 *  shareBar — rendered below the phone on desktop (right column), hidden on mobile.
 */
export function ChapterLayout({
  info,
  stage,
  controls,
  aside,
  shareBar,
}: {
  info: ChapterInfo;
  stage: ReactNode;
  controls?: ReactNode;
  aside?: ReactNode;
  shareBar?: ReactNode;
}) {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 sm:px-6 md:grid md:h-full md:grid-cols-[minmax(0,1fr)_minmax(0,520px)] md:items-center md:gap-6 md:overflow-hidden lg:gap-10">
      {/* ── Left column: text + controls + aside ── */}
      <div className="order-2 flex flex-col gap-2 md:order-1 md:min-h-0 md:flex-shrink md:gap-4">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="flex flex-wrap items-center gap-2.5"
        >
          <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-white/70">
            {String(info.number).padStart(2, "0")} · {info.tool}
          </span>
          {info.credits && (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-yellow/15 px-3 py-1 text-[11px] font-bold text-brand-yellow">
              <Coins className="h-3.5 w-3.5" /> {info.credits}
            </span>
          )}
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.05 }}
          className="text-[clamp(1.15rem,2.6vw,2.2rem)] font-black leading-[1.05] tracking-tight text-white"
        >
          {info.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.12 }}
          className="max-w-xl text-sm leading-relaxed text-white/65 md:text-base"
        >
          {info.description}
        </motion.p>

        {info.steps && (
          <div className="flex flex-wrap items-center gap-2">
            {info.steps.map((s, i) => (
              <motion.div
                key={s}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.45, ease: EASE, delay: 0.25 + i * 0.12 }}
                className="flex items-center gap-2"
              >
                <span
                  className={`rounded-xl px-3 py-1.5 text-[12px] font-semibold ${
                    i === 1
                      ? "bg-gradient-to-r from-brand-purple to-brand-blue text-white"
                      : "border border-white/12 bg-white/[0.06] text-white/85"
                  }`}
                >
                  {s}
                </span>
                {i < 2 && <ArrowRight className="h-4 w-4 text-white/35" />}
              </motion.div>
            ))}
          </div>
        )}

        {controls && <div className="flex flex-wrap items-center gap-2">{controls}</div>}
        {aside && <div>{aside}</div>}
      </div>

      {/* ── Right column: phone + shareBar below ── */}
      <div className="order-1 flex flex-col gap-3 md:order-2 md:min-h-0">
        <motion.div
          initial={{ opacity: 0, y: 30, rotate: 1.5 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
          className="w-full flex-shrink-0 basis-[55vh] overflow-hidden md:basis-auto md:overflow-visible"
        >
          {stage}
        </motion.div>
        {shareBar && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE, delay: 0.4 }}
          >
            {shareBar}
          </motion.div>
        )}
      </div>
    </div>
  );
}
