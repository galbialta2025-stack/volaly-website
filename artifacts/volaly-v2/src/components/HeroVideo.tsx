import { Play } from "lucide-react";
import { motion } from "motion/react";

interface HeroVideoProps {
  thumbnail?: string;
  videoUrl?: string;
  title?: string;
  onPlay?: () => void;
}

/**
 * Premium video preview card for the Hero section.
 * Displays a thumbnail with a centered play button.
 * Delegates actual playback to the caller via `onPlay`.
 */
export function HeroVideo({
  thumbnail,
  title = "Watch product demo",
  onPlay,
}: HeroVideoProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.85, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full"
    >
      {/* Glow blobs behind the card */}
      <div className="pointer-events-none absolute -inset-4 -z-10">
        <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-gradient-to-br from-brand-orange/25 to-brand-pink/25 blur-3xl" />
        <div className="absolute -bottom-8 -left-8 h-40 w-40 rounded-full bg-gradient-to-br from-brand-blue/20 to-brand-purple/20 blur-3xl" />
      </div>

      {/* Video card */}
      <button
        onClick={onPlay}
        aria-label={title}
        className="group relative block w-full overflow-hidden rounded-[24px] border border-white/20 bg-white/10 shadow-[0_24px_80px_rgba(0,0,0,0.18)] backdrop-blur-md transition-transform duration-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-blue/50 hover:scale-[1.015]"
      >
        {/* Aspect ratio container */}
        <div className="relative aspect-video w-full overflow-hidden rounded-[22px] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          {thumbnail ? (
            <img
              src={thumbnail}
              alt={title}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
            />
          ) : (
            /* Placeholder gradient when no thumbnail is provided */
            <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/20 via-brand-purple/20 to-brand-blue/20">
              <div className="absolute inset-0 flex items-center justify-center opacity-10">
                <svg viewBox="0 0 400 225" className="h-full w-full">
                  <defs>
                    <linearGradient id="vg" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FF6B35" />
                      <stop offset="50%" stopColor="#9B59B6" />
                      <stop offset="100%" stopColor="#3498DB" />
                    </linearGradient>
                  </defs>
                  <rect width="400" height="225" fill="url(#vg)" rx="4" />
                  <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle"
                    fill="white" fontSize="24" fontWeight="bold" fontFamily="sans-serif">
                    Volaly AI
                  </text>
                </svg>
              </div>
            </div>
          )}

          {/* Dark overlay on hover */}
          <div className="absolute inset-0 bg-black/10 transition-colors duration-300 group-hover:bg-black/20" />

          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="grid h-20 w-20 place-items-center rounded-full bg-white/95 shadow-[0_8px_32px_rgba(0,0,0,0.25)] backdrop-blur-sm transition-all duration-200 group-hover:bg-white"
            >
              <Play className="h-8 w-8 translate-x-0.5 text-slate-900" fill="currentColor" />
            </motion.div>
          </div>
        </div>

        {/* Bottom label strip */}
        <div className="flex items-center justify-between px-5 py-3.5">
          <span className="text-sm font-semibold text-foreground/80">{title}</span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-orange/10 px-3 py-1 text-xs font-semibold text-brand-orange">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-orange" />
            Live demo
          </span>
        </div>
      </button>
    </motion.div>
  );
}
