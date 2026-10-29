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

/** Two-column chapter: talking points left, phone stage right (stacked on phones). */
export function ChapterLayout({
  info,
  stage,
  controls,
  aside,
}: {
  info: ChapterInfo;
  stage: ReactNode;
  controls?: ReactNode;
  aside?: ReactNode;
}) {
  return (
    <div className="mx-auto grid h-full w-full max-w-6xl items-center gap-6 px-4 sm:px-6 md:grid-cols-[minmax(0,1fr)_minmax(0,360px)] md:gap-12 lg:gap-16">
      <div className="order-2 flex flex-col gap-5 md:order-1">
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
          className="text-[clamp(1.9rem,4.2vw,3.4rem)] font-black leading-[1.02] tracking-tight text-white"
        >
          {info.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.12 }}
          className="max-w-xl text-base leading-relaxed text-white/65 md:text-lg"
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
                  className={`rounded-xl px-3 py-2 text-[13px] font-semibold ${
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

        {controls && <div className="flex flex-wrap items-center gap-2.5">{controls}</div>}
        {aside}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, rotate: 1.5 }}
        animate={{ opacity: 1, y: 0, rotate: 0 }}
        transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
        className="order-1 w-full md:order-2"
      >
        {stage}
      </motion.div>
    </div>
  );
}
