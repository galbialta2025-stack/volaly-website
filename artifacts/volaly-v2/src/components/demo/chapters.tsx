import { useEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from "react";
import { motion, AnimatePresence, animate, useMotionValue, useTransform } from "motion/react";
import { Check, Sparkles, Clapperboard, Image as ImageIcon, Megaphone, Wand2, CircleDashed, ArrowRight } from "lucide-react";
import { FaFacebook, FaInstagram, FaThreads, FaLine } from "react-icons/fa6";
import { Link } from "@tanstack/react-router";
import type { DemoVenue, ShortsVariant } from "@/lib/demo-venues";
import { DEMO_CREDIT_COSTS, DEMO_PLANS } from "@/lib/demo-venues";
import { ChapterLayout } from "./ChapterLayout";
import {
  Bubble,
  CaptionCard,
  ChatArea,
  ChatHeader,
  DemoVideoPlayer,
  EASE,
  FitImage,
  PhoneFrame,
  PreparedTag,
  ScanSweep,
  SentStamp,
  Toggle,
  Typing,
  usePhases,
} from "./primitives";

export interface ChapterProps {
  venue: DemoVenue;
  lang: string;
  onRestart: () => void;
}

const TOOLS = [
  { name: "Smart Images", icon: ImageIcon, color: "from-brand-orange to-brand-pink" },
  { name: "Smart Shorts", icon: Clapperboard, color: "from-brand-purple to-brand-blue" },
  { name: "Smart Stories", icon: CircleDashed, color: "from-brand-pink to-brand-purple" },
  { name: "Smart Promo", icon: Megaphone, color: "from-brand-yellow to-brand-orange" },
  { name: "Smart Animate", icon: Wand2, color: "from-brand-cyan to-brand-blue" },
];

/* ═══════════════════ 0 · INTRO ═══════════════════ */

function CountUp({ to, duration = 1.6 }: { to: number; duration?: number }) {
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => Math.round(v).toLocaleString("en-US"));
  useEffect(() => {
    const c = animate(mv, to, { duration, ease: "easeOut", delay: 0.9 });
    return () => c.stop();
  }, [mv, to, duration]);
  return <motion.span>{rounded}</motion.span>;
}

export function HookChapter({ venue }: ChapterProps) {
  const tilts = [-9, 6, -4, 8, -6, 4];
  return (
    <div className="relative mx-auto flex h-full w-full max-w-6xl flex-col items-center justify-center px-4 text-center sm:px-6">
      {/* floating real results */}
      <div aria-hidden className="pointer-events-none absolute inset-0 hidden md:block">
        {venue.wall.slice(0, 6).map((src, i) => {
          const left = i % 2 === 0;
          const row = Math.floor(i / 2);
          return (
            <motion.img
              key={src}
              src={src}
              alt=""
              initial={{ opacity: 0, y: 40, rotate: 0 }}
              animate={{ opacity: 0.55, y: [0, -10, 0], rotate: tilts[i] }}
              transition={{
                opacity: { duration: 0.8, delay: 0.3 + i * 0.1 },
                rotate: { duration: 0.8, delay: 0.3 + i * 0.1, ease: EASE },
                y: { duration: 6 + i, repeat: Infinity, ease: "easeInOut" },
              }}
              className="absolute w-[13vw] max-w-[170px] rounded-2xl border border-white/10 object-cover shadow-2xl"
              style={{
                aspectRatio: "3 / 4",
                top: `${8 + row * 30}%`,
                [left ? "left" : "right"]: `${2 + (row % 2) * 6}%`,
              }}
            />
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: EASE }}
        className="relative mb-6 flex items-center gap-3 rounded-full border border-white/12 bg-white/[0.06] py-1.5 pl-1.5 pr-4 backdrop-blur"
      >
        <span className="grid h-9 w-14 place-items-center overflow-hidden rounded-full bg-black">
          <img src={venue.logo} alt={venue.name} className="h-full w-full object-contain px-1" />
        </span>
        <span className="text-sm font-semibold text-white/80">
          Prepared for <span className="text-white">{venue.name}</span> · {venue.location}
        </span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
        className="relative max-w-4xl text-[clamp(2.6rem,7vw,6rem)] font-black leading-[0.95] tracking-tight text-white"
      >
        One photo.
        <span className="block gradient-text-multi">Five ways to get seen.</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: EASE, delay: 0.25 }}
        className="relative mt-6 max-w-xl text-base text-white/65 md:text-lg"
      >
        The Volaly Visibility Suite turns what you already have — photos, videos, a line in a sheet — into posts, reels,
        stories and flyers. All from LINE.
      </motion.p>

      <div className="relative mt-9 flex max-w-3xl flex-wrap justify-center gap-2.5">
        {TOOLS.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 18, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, ease: EASE, delay: 0.45 + i * 0.1 }}
            className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.06] py-2 pl-2 pr-4 backdrop-blur"
          >
            <span className={`grid h-8 w-8 place-items-center rounded-xl bg-gradient-to-br ${t.color}`}>
              <t.icon className="h-4 w-4 text-white" />
            </span>
            <span className="text-sm font-bold text-white">{t.name}</span>
          </motion.div>
        ))}
      </div>

      {venue.stats?.[0] && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="relative mt-10 flex flex-col items-center"
        >
          <span className="text-5xl font-black tabular-nums text-white md:text-6xl">
            <CountUp to={venue.stats[0].value} />
          </span>
          <span className="mt-1 text-sm text-white/55">{venue.stats[0].label}</span>
        </motion.div>
      )}
    </div>
  );
}

/* ═══════════════════ 1 · SMART IMAGES ═══════════════════ */

function CompareImage({ before, after }: { before: string; after: string }) {
  const pos = useMotionValue(0);
  const clip = useTransform(pos, (v) => `inset(0 ${100 - v}% 0 0)`);
  const handleLeft = useTransform(pos, (v) => `${v}%`);
  const ref = useRef<HTMLDivElement>(null);
  const [interactive, setInteractive] = useState(false);

  useEffect(() => {
    const c = animate(pos, 100, { duration: 1.5, ease: "easeInOut", delay: 0.35 });
    const t = window.setTimeout(() => setInteractive(true), 1900);
    return () => {
      c.stop();
      clearTimeout(t);
    };
  }, [pos]);

  const onPointer = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (!interactive || !ref.current || (e.type === "pointermove" && e.buttons !== 1)) return;
    const r = ref.current.getBoundingClientRect();
    pos.set(Math.min(100, Math.max(0, ((e.clientX - r.left) / r.width) * 100)));
  };

  return (
    <div
      ref={ref}
      onPointerDown={onPointer}
      onPointerMove={onPointer}
      className={`relative aspect-[3/4] w-full touch-none select-none overflow-hidden ${interactive ? "cursor-ew-resize" : ""}`}
    >
      <img src={before} alt="Original photo" className="absolute inset-0 h-full w-full object-cover" draggable={false} />
      <motion.img
        src={after}
        alt="Finished Smart Images post"
        style={{ clipPath: clip }}
        className="absolute inset-0 h-full w-full object-cover"
        draggable={false}
      />
      <motion.div style={{ left: handleLeft }} className="absolute inset-y-0 z-10 w-0.5 -translate-x-1/2 bg-white shadow-[0_0_12px_rgba(255,255,255,0.8)]">
        {interactive && (
          <span className="absolute top-1/2 left-1/2 grid h-7 w-7 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-[10px] font-black text-black shadow-lg">
            ⇆
          </span>
        )}
      </motion.div>
      <motion.span
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: [0, 1, 0.6, 1], scale: [0.6, 1.15, 1] }}
        transition={{ delay: 1.9, duration: 1 }}
        className="pointer-events-none absolute bottom-[3%] left-[2%] z-10 h-[11%] w-[42%] rounded-lg ring-2 ring-brand-cyan"
      />
      <span className="absolute left-2 top-2 z-10 rounded-full bg-black/60 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white">
        Before / After
      </span>
    </div>
  );
}

export function ImagesChapter({ venue }: ChapterProps) {
  const p = usePhases([500, 1500, 2900, 4300]);
  return (
    <ChapterLayout
      info={{
        number: 1,
        tool: "Smart Images",
        credits: "1 credit",
        title: (
          <>
            Snap it. <span className="gradient-text-multi">Post it.</span>
          </>
        ),
        description:
          "Staff send photos to the venue's Volaly LINE. Volaly adds the logo, writes caption and hashtags and posts to Facebook and Instagram.",
        steps: ["Photo in LINE", "Logo + caption", "FB & IG post"],
      }}
      aside={p >= 4 ? <CaptionCard text={venue.images.caption} className="hidden md:block" /> : null}
      stage={
        <PhoneFrame>
          <ChatHeader venue={venue} />
          <ChatArea>
            {p >= 1 && (
              <Bubble from="user" className="w-[34%] p-1">
                <img src={venue.images.before} alt="" className="aspect-[3/4] w-full rounded-xl object-cover" />
                <SentStamp />
              </Bubble>
            )}
            <AnimatePresence>{p === 2 && <Typing />}</AnimatePresence>
            {p >= 3 && (
              <Bubble from="bot" className="w-[70%]">
                <CompareImage before={venue.images.before} after={venue.images.after} />
                <div className="px-3 pb-3 pt-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold">Logo added · caption ready</span>
                    <PreparedTag className="!bg-black/80" />
                  </div>
                  <p className="mt-1 line-clamp-2 text-[10.5px] text-black/60">{venue.images.caption}</p>
                  <div className="mt-2 flex items-center justify-center gap-1.5 rounded-lg bg-[#06c755] py-1.5 text-[11px] font-bold text-white">
                    <Check className="h-3 w-3" /> Ready for
                    <FaFacebook className="h-3 w-3" />
                    <FaInstagram className="h-3 w-3" />
                  </div>
                </div>
              </Bubble>
            )}
          </ChatArea>
        </PhoneFrame>
      }
    />
  );
}

/* ═══════════════════ 2 · SMART SHORTS ═══════════════════ */

const SHORTS_META: Record<ShortsVariant, { label: string; input: string; description: string }> = {
  slideshow: {
    label: "Slideshow",
    input: "Photos",
    description: "Send a few photos. Volaly turns them into a vertical video with music, your outro logo, caption and hashtags.",
  },
  clipping: {
    label: "Clipping",
    input: "1 long video",
    description: "Send one long video. Volaly cuts the strongest moments into short vertical clips with caption and hashtags.",
  },
  editing: {
    label: "Editing",
    input: "Several videos",
    description: "Send several videos. Volaly edits them into one short with music, your outro logo, caption and hashtags.",
  },
};

function OutroCard({ venue }: { venue: DemoVenue }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 z-20 grid place-items-center bg-black"
    >
      <motion.img
        src={venue.logo}
        alt={venue.name}
        initial={{ scale: 0.6, opacity: 0, filter: "blur(12px)" }}
        animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.9, ease: EASE }}
        className="w-[70%]"
      />
      <span className="absolute bottom-8 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/50">Outro logo</span>
    </motion.div>
  );
}

function SlideshowStage({ venue, music, outro }: { venue: DemoVenue; music: boolean; outro: boolean }) {
  const s = venue.shorts.slideshow!;
  const p = usePhases([300, 2300, 3700]);
  const [run, setRun] = useState(0);
  const [showOutro, setShowOutro] = useState(false);

  useEffect(() => {
    if (!showOutro) return;
    const t = window.setTimeout(() => {
      setShowOutro(false);
      setRun((r) => r + 1);
    }, 2600);
    return () => clearTimeout(t);
  }, [showOutro]);

  return (
    <div className="absolute inset-0 overflow-hidden bg-[linear-gradient(180deg,#1b2433,#0e1218)]">
      <AnimatePresence>
        {p < 3 && (
          <motion.div key="build" exit={{ opacity: 0, scale: 1.05 }} className="absolute inset-0 flex flex-col items-center justify-center gap-6 px-4">
            <div className="grid w-full grid-cols-3 gap-2">
              {s.sources.map((src, i) => (
                <motion.img
                  key={src}
                  src={src}
                  alt=""
                  initial={{ opacity: 0, x: (i % 3 - 1) * 90, y: i < 3 ? -260 : 260, rotate: (i - 2.5) * 14 }}
                  animate={
                    p >= 2
                      ? { opacity: 1, x: 0, y: 0, rotate: 0, scale: 0.92 }
                      : { opacity: 1, x: 0, y: 0, rotate: (i - 2.5) * 3 }
                  }
                  transition={{ duration: 0.8, ease: EASE, delay: 0.08 * i }}
                  className="aspect-[3/4] w-full rounded-xl object-cover shadow-xl"
                />
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: p >= 2 ? 1 : 0 }}
              className="w-full rounded-2xl border border-white/10 bg-white/[0.06] p-3 text-left backdrop-blur"
            >
              <div className="flex items-center gap-2 text-[11px] font-bold text-white">
                <Sparkles className="h-3.5 w-3.5 text-brand-cyan" /> Building 9:16 slideshow
              </div>
              <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-brand-purple to-brand-cyan"
                  initial={{ width: "0%" }}
                  animate={{ width: p >= 2 ? "100%" : "0%" }}
                  transition={{ duration: 1.3, ease: "easeInOut" }}
                />
              </div>
              <div className="mt-2 flex gap-1.5 text-[9.5px] text-white/60">
                <span>♫ {music ? "Music" : "No music"}</span>·<span>{outro ? "Outro logo" : "No outro"}</span>·<span>Caption</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {p >= 3 && (
        <motion.div initial={{ opacity: 0, scale: 1.04 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="absolute inset-0">
          <DemoVideoPlayer
            key={`${run}-${outro}`}
            src={s.src}
            poster={s.poster}
            soundOn={music}
            loop={!outro}
            onEnded={() => outro && setShowOutro(true)}
            showSoundButton={false}
          />
          <AnimatePresence>{showOutro && <OutroCard venue={venue} />}</AnimatePresence>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-3 pt-16">
            <div className="flex items-center gap-2">
              <span className="grid h-7 w-7 place-items-center overflow-hidden rounded-full bg-black ring-1 ring-white/40">
                <img src={venue.logo} alt="" className="h-full w-full object-contain p-0.5" />
              </span>
              <span className="text-[12px] font-bold text-white">{venue.name.toLowerCase()}</span>
            </div>
            <p className="mt-1.5 line-clamp-2 text-[11px] leading-snug text-white/90">{s.caption}</p>
          </div>
          <PreparedTag className="absolute left-3 top-9 z-10" />
        </motion.div>
      )}
    </div>
  );
}

function VideoResultStage({ src, poster, caption, venue }: { src: string; poster: string; caption: string; venue: DemoVenue }) {
  return (
    <div className="absolute inset-0">
      <DemoVideoPlayer src={src} poster={poster} />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/85 to-transparent p-3 pt-16">
        <span className="text-[12px] font-bold text-white">{venue.name.toLowerCase()}</span>
        <p className="mt-1 line-clamp-2 text-[11px] text-white/90">{caption}</p>
      </div>
      <PreparedTag className="absolute left-3 top-9 z-10" />
    </div>
  );
}

export function ShortsChapter({ venue }: ChapterProps) {
  const variants = (Object.keys(SHORTS_META) as ShortsVariant[]).filter((v) => venue.shorts[v]);
  const [variant, setVariant] = useState<ShortsVariant>(variants[0] ?? "slideshow");
  const [music, setMusic] = useState(false);
  const [outro, setOutro] = useState(true);
  const meta = SHORTS_META[variant];
  const current = venue.shorts[variant];

  return (
    <ChapterLayout
      info={{
        number: 2,
        tool: "Smart Shorts",
        credits: "3 credits",
        title: (
          <>
            From camera roll <span className="gradient-text-multi">to Reels.</span>
          </>
        ),
        description: meta.description,
        steps: [meta.input, SHORTS_META[variant].label, "Vertical video"],
      }}
      controls={
        <>
          {variants.length > 1 && (
            <div className="flex rounded-full border border-white/12 bg-white/5 p-1">
              {variants.map((v) => (
                <button
                  key={v}
                  type="button"
                  onClick={() => setVariant(v)}
                  className={`rounded-full px-4 py-1.5 text-sm font-semibold transition ${
                    v === variant ? "bg-white text-black" : "text-white/70 hover:text-white"
                  }`}
                >
                  {SHORTS_META[v].label}
                </button>
              ))}
            </div>
          )}
          {variant !== "clipping" && (
            <>
              <Toggle label="Music" checked={music} onChange={setMusic} />
              <Toggle label="Outro logo" checked={outro} onChange={setOutro} />
            </>
          )}
        </>
      }
      aside={current ? <CaptionCard text={current.caption} className="hidden md:block" /> : null}
      stage={
        <PhoneFrame>
          {variant === "slideshow" && venue.shorts.slideshow && <SlideshowStage venue={venue} music={music} outro={outro} />}
          {variant !== "slideshow" && current && (
            <VideoResultStage key={variant} src={current.src} poster={current.poster} caption={current.caption} venue={venue} />
          )}
        </PhoneFrame>
      }
    />
  );
}

/* ═══════════════════ 3 · SMART STORIES ═══════════════════ */

export function StoriesChapter({ venue }: ChapterProps) {
  const p = usePhases([500, 1500, 2600]);
  return (
    <ChapterLayout
      info={{
        number: 3,
        tool: "Smart Stories",
        credits: "1 credit",
        title: (
          <>
            Tonight&apos;s vibe, <span className="gradient-text-multi">live in Stories.</span>
          </>
        ),
        description:
          "Send a photo or video in LINE and it goes up as a Facebook and Instagram Story. No app switching, no logins.",
        steps: ["Photo or video", "Story format", "FB & IG Stories"],
      }}
      stage={
        <PhoneFrame>
          <AnimatePresence mode="wait">
            {p < 3 ? (
              <motion.div key="chat" exit={{ opacity: 0, scale: 0.96 }} className="absolute inset-0">
                <ChatHeader venue={venue} />
                <ChatArea>
                  {p >= 1 && (
                    <Bubble from="user" className="w-[34%] p-1">
                      <img src={venue.story.image} alt="" className="aspect-[3/4] w-full rounded-xl object-cover" />
                      <SentStamp />
                    </Bubble>
                  )}
                  <AnimatePresence>{p === 2 && <Typing />}</AnimatePresence>
                </ChatArea>
              </motion.div>
            ) : (
              <motion.div
                key="story"
                initial={{ opacity: 0, scale: 1.08 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: EASE }}
                className="absolute inset-0 bg-black"
              >
                <motion.div className="absolute inset-0" animate={{ scale: [1, 1.05] }} transition={{ duration: 6, ease: "linear" }}>
                  <FitImage src={venue.story.image} alt="Story preview" />
                </motion.div>
                <div className="absolute inset-x-0 top-0 z-10 bg-gradient-to-b from-black/60 to-transparent px-3 pb-8 pt-9">
                  <div className="flex gap-1">
                    {[0, 1, 2].map((i) => (
                      <div key={i} className="h-[2.5px] flex-1 overflow-hidden rounded-full bg-white/35">
                        {i === 0 && (
                          <motion.div
                            className="h-full bg-white"
                            initial={{ width: "0%" }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 6, ease: "linear" }}
                          />
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="mt-2.5 flex items-center gap-2">
                    <span className="grid h-7 w-7 place-items-center overflow-hidden rounded-full bg-black ring-2 ring-brand-pink">
                      <img src={venue.logo} alt="" className="h-full w-full object-contain p-0.5" />
                    </span>
                    <span className="text-[12px] font-bold text-white">{venue.name.toLowerCase()}</span>
                    <span className="text-[11px] text-white/70">now</span>
                  </div>
                </div>
                <div className="absolute inset-x-3 bottom-4 z-10 flex items-center gap-2">
                  <div className="flex-1 rounded-full border border-white/50 px-3 py-2 text-[11px] text-white/80">Send message</div>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="absolute left-1/2 top-[26%] z-10 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-black/65 px-3 py-1.5 text-[10px] font-bold text-white backdrop-blur"
                >
                  <FaFacebook className="h-3 w-3 text-[#1877f2]" />
                  <FaInstagram className="h-3 w-3 text-[#e1306c]" /> Story preview
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </PhoneFrame>
      }
    />
  );
}

/* ═══════════════════ 4 · SMART PROMO ═══════════════════ */

function SheetCard({ venue, active }: { venue: DemoVenue; active: number }) {
  const r = venue.promo.row;
  const cells: [string, string][] = [
    ["Name", r.name],
    ["Event Date", r.eventDate],
    ["Event Theme", r.theme],
    ["Event Infos", r.eventInfos],
    ["Outfit/Styling", r.styling],
    ["Colors", r.colors],
    ["Staff on flyer", r.staffOnFlyer],
  ];
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-white text-left text-black shadow-2xl">
      <div className="flex items-center gap-2 border-b border-black/10 bg-[#f1f3f4] px-3 py-2">
        <span className="grid h-5 w-5 place-items-center rounded bg-[#0f9d58] text-[10px] font-black text-white">▦</span>
        <span className="text-[12px] font-semibold">Promo · Google Sheet</span>
      </div>
      <div className="divide-y divide-black/5">
        {cells.map(([k, v], i) => (
          <motion.div
            key={k}
            animate={{
              backgroundColor: active === i ? "rgba(26,115,232,0.14)" : "rgba(255,255,255,0)",
            }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-[110px_1fr] gap-2 px-3 py-1.5 text-[12px]"
          >
            <span className="font-semibold text-black/45">{k}</span>
            <span className={`truncate ${active === i ? "font-semibold text-[#1a73e8]" : ""}`}>{v}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export function PromoChapter({ venue }: ChapterProps) {
  const p = usePhases([400, 2800, 3700, 4700]);
  const [active, setActive] = useState(-1);

  useEffect(() => {
    if (p !== 1) return;
    let i = 0;
    setActive(0);
    const t = window.setInterval(() => {
      i += 1;
      setActive(i < 7 ? i : -1);
      if (i >= 7) clearInterval(t);
    }, 330);
    return () => clearInterval(t);
  }, [p]);

  return (
    <ChapterLayout
      info={{
        number: 4,
        tool: "Smart Promo",
        credits: "2 credits · post + story",
        title: (
          <>
            One row. <span className="gradient-text-multi">A finished flyer.</span>
          </>
        ),
        description:
          "Fill in one row in a Google Sheet: theme, date, colours. Volaly designs the event flyer, writes the caption and publishes it as post and story.",
        steps: ["Sheet row", "Flyer design", "Post + story"],
      }}
      aside={
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3, duration: 0.6, ease: EASE }}>
          <SheetCard venue={venue} active={active} />
        </motion.div>
      }
      stage={
        <PhoneFrame>
          <div className="absolute inset-0 bg-[linear-gradient(180deg,#1b2433,#0e1218)]">
            {p >= 2 && (
              <motion.div
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <img src={venue.promo.flyer} alt="" aria-hidden className="absolute inset-0 h-full w-full scale-125 object-cover opacity-60 blur-2xl" />
                <motion.img
                  src={venue.promo.flyer}
                  alt="Event flyer"
                  initial={{ filter: "blur(24px) saturate(0.4)", scale: 1.12 }}
                  animate={p >= 3 ? { filter: "blur(0px) saturate(1)", scale: 1 } : { filter: "blur(18px) saturate(0.6)", scale: 1.08 }}
                  transition={{ duration: 1.1, ease: EASE }}
                  className="absolute inset-0 h-full w-full object-contain"
                />
                {p === 2 && <ScanSweep color="var(--brand-orange)" duration={0.9} />}
              </motion.div>
            )}
            {p < 2 && (
              <div className="absolute inset-0 grid place-items-center">
                <div className="flex flex-col items-center gap-3 text-white/60">
                  <Megaphone className="h-8 w-8" />
                  <span className="text-[12px] font-semibold">Reading the sheet row…</span>
                </div>
              </div>
            )}
            {p >= 3 && <PreparedTag className="absolute left-3 top-9 z-10" />}
            {p >= 4 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: EASE }}
                className="absolute inset-x-3 bottom-3 z-10 rounded-2xl bg-black/70 p-3 backdrop-blur"
              >
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-white/70">
                  <FaFacebook className="h-3 w-3 text-[#1877f2]" />
                  <FaInstagram className="h-3 w-3 text-[#e1306c]" /> Feed post + Story
                </div>
                <p className="mt-1.5 line-clamp-3 text-[11px] leading-snug text-white/90">{venue.promo.caption}</p>
              </motion.div>
            )}
          </div>
        </PhoneFrame>
      }
    />
  );
}

/* ═══════════════════ 5 · SMART ANIMATE ═══════════════════ */

function AnimateStage({ src, poster, label }: { src: string; poster: string; label: string }) {
  const p = usePhases([1300, 2100]);
  return (
    <div className="absolute inset-0 bg-black">
      <AnimatePresence>
        {p < 2 && (
          <motion.div key="still" exit={{ opacity: 0 }} transition={{ duration: 0.5 }} className="absolute inset-0 z-10">
            <FitImage src={poster} alt="Input image" />
            <span className="absolute left-3 top-9 z-10 rounded-full bg-black/65 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
              Input · still image
            </span>
            {p === 1 && <ScanSweep color="var(--brand-cyan)" duration={0.8} />}
          </motion.div>
        )}
      </AnimatePresence>
      {p >= 2 && <DemoVideoPlayer src={src} poster={poster} fit="contain" />}
      {p >= 2 && (
        <div className="absolute left-3 top-9 z-10 flex flex-col items-start gap-1">
          <PreparedTag />
          <span className="rounded-full bg-black/60 px-2 py-0.5 text-[9px] font-semibold text-white/85">{label}</span>
        </div>
      )}
    </div>
  );
}

export function AnimateChapter({ venue }: ChapterProps) {
  const [idx, setIdx] = useState(0);
  const ex = venue.animate[idx];
  if (!ex) return null;
  return (
    <ChapterLayout
      info={{
        number: 5,
        tool: "Smart Animate",
        credits: "3 credits",
        title: (
          <>
            Stop the scroll. <span className="gradient-text-multi">Make it move.</span>
          </>
        ),
        description:
          "Send a photo or flyer with a short prompt — what should move, smile or glow. Volaly turns it into a short animated video for Reels and Stories.",
        steps: ["Image + prompt", "Animation", "Motion video"],
      }}
      controls={
        <div className="flex flex-wrap gap-2">
          {venue.animate.map((a, i) => (
            <button
              key={a.id}
              type="button"
              onClick={() => setIdx(i)}
              className={`flex items-center gap-2 rounded-xl border p-1 pr-3 text-left text-[12px] font-semibold transition ${
                i === idx ? "border-white/60 bg-white/15 text-white" : "border-white/10 bg-white/5 text-white/60 hover:text-white"
              }`}
            >
              <img src={a.poster} alt="" className="h-9 w-7 rounded-lg object-cover" />
              {a.label}
            </button>
          ))}
        </div>
      }
      aside={
        ex.prompt ? (
          <motion.div
            key={ex.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl border border-white/10 bg-white/[0.06] p-4"
          >
            <div className="mb-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-white/45">Prompt</div>
            <p className="font-mono text-[13px] text-white/90">{ex.prompt}</p>
          </motion.div>
        ) : null
      }
      stage={
        <PhoneFrame>
          <AnimateStage key={ex.id} src={ex.src} poster={ex.poster} label={ex.label} />
        </PhoneFrame>
      }
    />
  );
}

/* ═══════════════════ 6 · ONE WEEK, EVERY CHANNEL ═══════════════════ */

const CHANNELS = [
  { name: "Facebook", icon: FaFacebook, color: "#1877f2" },
  { name: "Instagram", icon: FaInstagram, color: "#e1306c" },
  { name: "Threads", icon: FaThreads, color: "#ffffff" },
  { name: "LINE", icon: FaLine, color: "#06c755" },
];

export function WeekChapter({ venue }: ChapterProps) {
  const p = usePhases([300, 2000, 3000]);
  const s = venue.shorts.slideshow;
  const tiles = [
    { day: "Mon", tool: "Images", src: venue.wall[0] },
    { day: "Tue", tool: "Shorts", src: s?.poster ?? venue.wall[1], video: true },
    { day: "Wed", tool: "Stories", src: venue.story.image },
    { day: "Thu", tool: "Promo", src: venue.promo.flyer },
    { day: "Fri", tool: "Animate", src: venue.animate[0]?.poster ?? venue.wall[2], video: true },
    { day: "Sat", tool: "Images", src: venue.wall[1] },
    { day: "Sun", tool: "Images", src: venue.wall[2] },
  ];

  return (
    <ChapterLayout
      info={{
        number: 6,
        tool: "Distribution",
        title: (
          <>
            Seven days. <span className="gradient-text-multi">Every channel.</span>
          </>
        ),
        description:
          "Mix the tools and the feed never goes quiet. Content goes out to the channels the venue already uses.",
      }}
      aside={
        <div className="flex flex-col gap-4">
          <div>
            <div className="mb-2 text-[10px] font-bold uppercase tracking-[0.16em] text-white/45">Example week</div>
            <div className="grid grid-cols-7 gap-1.5">
              {tiles.map((t, i) => (
                <motion.div
                  key={t.day}
                  initial={{ opacity: 0, y: 30, rotate: (i - 3) * 6, scale: 0.8 }}
                  animate={p >= 1 ? { opacity: 1, y: 0, rotate: 0, scale: 1 } : {}}
                  transition={{ duration: 0.6, ease: EASE, delay: i * 0.12 }}
                  className="flex flex-col gap-1"
                >
                  <span className="text-center text-[10px] font-bold text-white/55">{t.day}</span>
                  <div className="relative overflow-hidden rounded-lg border border-white/10">
                    <img src={t.src} alt="" className="aspect-[3/4] w-full object-cover" />
                    {t.video && <span className="absolute right-1 top-1 text-[9px] text-white drop-shadow">▶</span>}
                  </div>
                  <span className="truncate text-center text-[9px] font-semibold text-white/60">{t.tool}</span>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {CHANNELS.map((c, i) => (
              <motion.span
                key={c.name}
                initial={{ opacity: 0.25 }}
                animate={p >= 2 ? { opacity: 1, scale: [1, 1.12, 1] } : { opacity: 0.25 }}
                transition={{ delay: i * 0.18, duration: 0.5 }}
                className="flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.06] px-3 py-1.5 text-[13px] font-semibold text-white"
              >
                <c.icon className="h-4 w-4" style={{ color: c.color }} /> {c.name}
              </motion.span>
            ))}
          </div>
        </div>
      }
      stage={
        <PhoneFrame>
          <div className="absolute inset-0 bg-black text-white">
            <div className="flex items-center justify-between px-3 pb-2 pt-9">
              <span className="text-[15px] font-bold tracking-tight">Instagram</span>
              <span className="rounded-full bg-white/10 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white/70">Post preview</span>
            </div>
            <AnimatePresence>
              {p >= 3 && (
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: EASE }}
                >
                  <div className="flex items-center gap-2 px-3 py-2">
                    <span className="grid h-7 w-7 place-items-center overflow-hidden rounded-full bg-black ring-1 ring-white/30">
                      <img src={venue.logo} alt="" className="h-full w-full object-contain p-0.5" />
                    </span>
                    <div className="leading-tight">
                      <div className="text-[12px] font-bold">{venue.name.toLowerCase()}</div>
                      <div className="text-[10px] text-white/55">{venue.location}</div>
                    </div>
                  </div>
                  <img src={venue.promo.flyer} alt="" className="aspect-[4/5] w-full object-cover" />
                  <div className="flex gap-3 px-3 py-2 text-[16px]">
                    <span>♡</span>
                    <span>💬</span>
                    <span>➤</span>
                  </div>
                  <p className="line-clamp-3 px-3 text-[11px] leading-snug text-white/85">
                    <span className="font-bold">{venue.name.toLowerCase()}</span> {venue.promo.caption}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </PhoneFrame>
      }
    />
  );
}

/* ═══════════════════ 7 · CLOSE ═══════════════════ */

export function CloseChapter({ venue, lang, onRestart }: ChapterProps) {
  return (
    <div className="mx-auto flex h-full w-full max-w-5xl flex-col items-center justify-center px-4 text-center sm:px-6">
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: EASE }}
        className="text-[clamp(2.2rem,5.5vw,4.5rem)] font-black leading-[1] tracking-tight text-white"
      >
        Ready for {venue.name}?
        <span className="block gradient-text-multi">Simple monthly credits.</span>
      </motion.h2>

      <div className="mt-9 grid w-full max-w-3xl gap-3 sm:grid-cols-3">
        {DEMO_PLANS.map((plan, i) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: EASE, delay: 0.15 + i * 0.1 }}
            className={`relative rounded-3xl border p-5 text-left ${
              "featured" in plan && plan.featured
                ? "border-brand-orange/60 bg-gradient-to-br from-brand-orange/20 to-brand-pink/10"
                : "border-white/10 bg-white/[0.05]"
            }`}
          >
            <div className="text-sm font-bold text-white/70">{plan.name}</div>
            <div className="mt-1 text-3xl font-black text-white">
              ฿{plan.priceThb.toLocaleString("en-US")}
              <span className="text-sm font-semibold text-white/50"> /month</span>
            </div>
            <div className="mt-3 text-[13px] text-white/75">
              {plan.credits} credits · {plan.channels} channels
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-5 flex flex-wrap justify-center gap-2"
      >
        {DEMO_CREDIT_COSTS.map((c) => (
          <span key={c.tool} className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-[12px] text-white/70">
            {c.tool} <span className="font-bold text-white">{c.credits} cr</span>
          </span>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.65, duration: 0.5 }}
        className="mt-9 flex flex-wrap justify-center gap-3"
      >
        <Link
          to="/$lang/contact"
          params={{ lang }}
          className="inline-flex h-12 items-center gap-2 rounded-xl bg-primary px-7 text-base font-bold text-primary-foreground shadow-[var(--shadow-glow-orange)] transition hover:-translate-y-0.5"
        >
          Get started <ArrowRight className="h-4 w-4" />
        </Link>
        <button
          type="button"
          onClick={onRestart}
          className="inline-flex h-12 items-center rounded-xl border border-white/20 bg-white/5 px-7 text-base font-bold text-white transition hover:bg-white/10"
        >
          Watch again
        </button>
      </motion.div>
    </div>
  );
}
