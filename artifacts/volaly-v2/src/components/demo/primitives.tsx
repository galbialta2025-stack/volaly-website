import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Volume2, VolumeX, CheckCheck } from "lucide-react";
import type { DemoVenue } from "@/lib/demo-venues";

export const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Deterministic phase scheduler: returns the current phase index, advancing
 * through the given timestamps (ms) once per mount. Remounting (new key)
 * replays the sequence from the start.
 */
export function usePhases(timestamps: number[]): number {
  const [phase, setPhase] = useState(0);
  useEffect(() => {
    const timers = timestamps.map((ms, i) => window.setTimeout(() => setPhase(i + 1), ms));
    return () => timers.forEach(clearTimeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return phase;
}

/** Phone bezel on tablet/desktop; a plain rounded screen on small phones. */
export function PhoneFrame({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`relative mx-auto w-[min(100%,300px,calc((100dvh_-_330px)*0.5))] md:w-[min(100%,340px,calc((100dvh_-_190px)*0.5))] md:rounded-[46px] md:border md:border-white/15 md:bg-[oklch(0.12_0.02_265)] md:p-[10px] md:shadow-[0_40px_120px_-30px_rgba(0,0,0,0.75),inset_0_0_0_1px_rgba(255,255,255,0.04)] ${className}`}
    >
      <div className="relative aspect-[9/18.5] overflow-hidden rounded-[28px] bg-[#0f1115] md:rounded-[36px]">
        {children}
      </div>
    </div>
  );
}

/** LINE-style chat header with the venue as the conversation partner. */
export function ChatHeader({ venue, subtitle = "Volaly · LINE" }: { venue: DemoVenue; subtitle?: string }) {
  return (
    <div className="relative z-20 flex items-center gap-2.5 bg-[#06c755] px-4 pb-2.5 pt-9 text-white">
      <div className="grid h-8 w-8 place-items-center overflow-hidden rounded-full bg-black ring-2 ring-white/40">
        <img src={venue.logo} alt="" className="h-full w-full object-contain p-0.5" />
      </div>
      <div className="min-w-0">
        <div className="truncate text-[13px] font-bold leading-tight">{venue.name} × Volaly</div>
        <div className="text-[10px] leading-tight text-white/80">{subtitle}</div>
      </div>
    </div>
  );
}

export function ChatArea({ children }: { children: ReactNode }) {
  return (
    <div className="absolute inset-x-0 bottom-0 top-[78px] flex flex-col justify-end gap-2.5 overflow-hidden bg-[linear-gradient(180deg,#1b2433,#121821)] px-3 pb-4">
      {children}
    </div>
  );
}

export function Bubble({
  from,
  children,
  className = "",
  delay = 0,
}: {
  from: "user" | "bot";
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const isUser = from === "user";
  return (
    <motion.div
      initial={{ opacity: 0, y: 14, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.45, ease: EASE, delay }}
      className={`flex ${isUser ? "justify-end" : "justify-start"}`}
    >
      <div
        className={`relative max-w-[86%] overflow-hidden rounded-2xl text-[12px] leading-snug shadow-lg ${
          isUser ? "rounded-br-md bg-[#85e249] text-black" : "rounded-bl-md bg-white text-black"
        } ${className}`}
      >
        {children}
      </div>
    </motion.div>
  );
}

export function SentStamp() {
  return (
    <div className="flex items-center justify-end gap-1 px-2 pb-1 pt-0.5 text-[9px] text-black/50">
      <CheckCheck className="h-3 w-3" /> Read
    </div>
  );
}

export function Typing() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex justify-start">
      <div className="flex items-center gap-1 rounded-2xl rounded-bl-md bg-white px-3 py-2.5">
        {[0, 1, 2].map((d) => (
          <motion.span
            key={d}
            className="h-1.5 w-1.5 rounded-full bg-black/40"
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 0.6, repeat: Infinity, delay: d * 0.12 }}
          />
        ))}
      </div>
    </motion.div>
  );
}

/** Small persistent tag on every output so nothing reads as live generation. */
export function PreparedTag({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full bg-black/60 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-white/90 backdrop-blur ${className}`}
    >
      Prepared result
    </span>
  );
}

/** Sweeping scan line used as the "processing" motion graphic. */
export function ScanSweep({ color = "var(--brand-cyan)", duration = 1.4 }: { color?: string; duration?: number }) {
  return (
    <motion.div
      aria-hidden
      className="pointer-events-none absolute inset-x-0 z-10 h-24"
      style={{ background: `linear-gradient(180deg, transparent, color-mix(in oklab, ${color} 45%, transparent), transparent)` }}
      initial={{ top: "-25%" }}
      animate={{ top: "110%" }}
      transition={{ duration, ease: "easeInOut" }}
    />
  );
}

export function Toggle({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className="flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 py-1.5 pl-1.5 pr-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
    >
      <span className={`relative h-6 w-10 rounded-full transition-colors ${checked ? "bg-brand-green" : "bg-white/20"}`}>
        <motion.span
          layout
          transition={{ type: "spring", stiffness: 500, damping: 32 }}
          className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow ${checked ? "left-[18px]" : "left-0.5"}`}
        />
      </span>
      {label}
    </button>
  );
}

/** Muted autoplay video with an explicit sound control (sound needs a user gesture). */
export function DemoVideoPlayer({
  src,
  poster,
  soundOn = false,
  loop = true,
  onEnded,
  className = "",
  showSoundButton = true,
  fit = "cover",
}: {
  src: string;
  poster: string;
  soundOn?: boolean;
  loop?: boolean;
  onEnded?: () => void;
  className?: string;
  showSoundButton?: boolean;
  /** "contain" shows the whole frame over a blurred copy, like Reels/Stories do for non-9:16 media. */
  fit?: "cover" | "contain";
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(!soundOn);

  useEffect(() => setMuted(!soundOn), [soundOn]);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.muted = muted;
    void v.play().catch(() => {
      v.muted = true;
      setMuted(true);
      void v.play().catch(() => undefined);
    });
  }, [muted, src]);

  return (
    <div className={`relative h-full w-full overflow-hidden ${className}`}>
      {fit === "contain" && (
        <img src={poster} alt="" aria-hidden className="absolute inset-0 h-full w-full scale-125 object-cover opacity-70 blur-2xl" />
      )}
      <video
        ref={ref}
        key={src}
        src={src}
        poster={poster}
        playsInline
        autoPlay
        muted={muted}
        loop={loop}
        preload="auto"
        onEnded={onEnded}
        className={`relative h-full w-full ${fit === "contain" ? "object-contain" : "object-cover"}`}
      />
      {showSoundButton && (
        <button
          type="button"
          onClick={() => setMuted((m) => !m)}
          aria-label={muted ? "Sound on" : "Sound off"}
          className="absolute bottom-3 right-3 z-20 grid h-8 w-8 place-items-center rounded-full bg-black/55 text-white backdrop-blur transition hover:bg-black/75"
        >
          {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
        </button>
      )}
    </div>
  );
}

export function CaptionCard({ text, className = "" }: { text: string; className?: string }) {
  const hashtagIdx = text.search(/(^|\s)#/);
  const body = hashtagIdx > -1 ? text.slice(0, hashtagIdx).trim() : text;
  const tags = hashtagIdx > -1 ? text.slice(hashtagIdx).trim() : "";
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: EASE }}
      className={`rounded-2xl border border-white/10 bg-white/[0.06] p-4 text-left backdrop-blur ${className}`}
    >
      <div className="mb-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-white/45">Caption &amp; hashtags</div>
      <p className="whitespace-pre-line text-[13px] leading-relaxed text-white/90">{body}</p>
      {tags && <p className="mt-2 text-[12px] leading-relaxed text-brand-cyan">{tags}</p>}
    </motion.div>
  );
}

/** Whole image visible, padded with a blurred copy of itself (Stories/Reels style). */
export function FitImage({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`absolute inset-0 overflow-hidden bg-black ${className}`}>
      <img src={src} alt="" aria-hidden className="absolute inset-0 h-full w-full scale-125 object-cover opacity-70 blur-2xl" />
      <img src={src} alt={alt} className="relative h-full w-full object-contain" />
    </div>
  );
}

export function Fade({ show, children }: { show: boolean; children: ReactNode }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.35 }}>
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
