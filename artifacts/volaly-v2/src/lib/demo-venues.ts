/**
 * Prepared content for the guided sales demo (/demo).
 *
 * Every image, video and caption below is a real output of the Volaly
 * Visibility Suite workflows, exported from Cloudinary / Supabase and stored
 * locally under /public/demo so the presentation works offline.
 * Nothing in the demo is generated live.
 *
 * To personalise the demo for a prospect, add a new entry to DEMO_VENUES with
 * its own asset folder (/public/demo/<id>/). Any field left out falls back to
 * the default venue, so a partially prepared venue never breaks the demo.
 */

export type ShortsVariant = "slideshow" | "clipping" | "editing";

export interface DemoVideo {
  src: string;
  poster: string;
}

export interface AnimateExample extends DemoVideo {
  id: string;
  label: string;
  /** The real prompt used for this output. Leave undefined if unknown — the prompt block is then hidden. */
  prompt?: string;
}

export interface PromoSheetRow {
  name: string;
  logoFile: string;
  eventDate: string;
  theme: string;
  eventInfos: string;
  styling: string;
  colors: string;
  staffOnFlyer: string;
}

export interface DemoVenue {
  id: string;
  name: string;
  location: string;
  logo: string;
  /** Accent colour used for the venue's chat avatar and highlights. */
  accent: string;
  stats?: { label: string; value: number }[];
  images: { before: string; after: string; caption: string; staffName?: string };
  shorts: {
    slideshow?: DemoVideo & { sources: string[]; caption: string };
    clipping?: DemoVideo & { caption: string };
    editing?: DemoVideo & { caption: string };
  };
  story: { image: string };
  promo: { flyer: string; caption: string; row: PromoSheetRow };
  animate: AnimateExample[];
  wall: string[];
}

const SHARED_ANIMATE: AnimateExample[] = [
  {
    id: "robinhood-sunday-roast",
    label: "Restaurant · Sunday Roast",
    src: "/demo/shared/animate/robinhood-sunday-roast.mp4",
    poster: "/demo/shared/animate/robinhood-sunday-roast-poster.webp",
  },
  {
    id: "smartbar-halloween",
    label: "Bar · Halloween Party",
    src: "/demo/shared/animate/smartbar-halloween.mp4",
    poster: "/demo/shared/animate/smartbar-halloween-poster.webp",
  },
  {
    id: "smartbar-ice-birthday",
    label: "Bar · Ice Birthday Party",
    src: "/demo/shared/animate/smartbar-ice-birthday.mp4",
    poster: "/demo/shared/animate/smartbar-ice-birthday-poster.webp",
  },
];

const PROMO_CAPTION_DELUZION =
  "Get ready for the spookiest, sexiest Halloween at Deluzion! 🦇👻 Join us Soi 7 from 4 PM 'til 2 AM on 31.10.2026 for killer cocktails, epic beats, and frightfully good vibes you won't want to miss! 🎃🍹🎶 #Pattaya #Thailand #NightLife #PattayaThailand #GoodTimes #Cocktails #HappyHour #Deluzion #Halloween";

const SLIDESHOW_CAPTION_DELUZION =
  "Beware, mortals, for the spirits of Pattaya are rising! 👻\n\nOur Halloween squad is looking so good, it's scary! 🎃 Come join us tonight if you dare to witness these hauntingly beautiful faces up close. They're dying to meet you! 😉😈\n\n#PattayaHalloween #SpookySquad #NightlifePattaya #HalloweenParty #PattayaGirls #ThailandNightlife #HauntedBar #BoozyNights #ScaryGoodTime #ComeIfYouDare #PattayaVibes #HalloweenCostumes #PartyMonsters #PattayaThailand #NightlifeThailand";

const DELUZION: DemoVenue = {
  id: "deluzion",
  name: "Deluzion",
  location: "Soi 7, Pattaya",
  logo: "/demo/deluzion/logo.webp",
  accent: "#35d6f2",
  stats: [{ label: "Smart Images posts published for Deluzion", value: 177 }],
  images: {
    before: "/demo/deluzion/images-before.webp",
    after: "/demo/deluzion/images-after.webp",
    caption: PROMO_CAPTION_DELUZION,
    staffName: "Honey",
  },
  shorts: {
    slideshow: {
      src: "/demo/deluzion/slideshow.mp4",
      poster: "/demo/deluzion/slideshow-poster.webp",
      sources: [1, 2, 3, 4, 5, 6].map((i) => `/demo/deluzion/slide-${i}.webp`),
      caption: SLIDESHOW_CAPTION_DELUZION,
    },
  },
  story: { image: "/demo/deluzion/story.webp" },
  promo: {
    flyer: "/demo/deluzion/promo.webp",
    caption: PROMO_CAPTION_DELUZION,
    row: {
      name: "Deluzion",
      logoFile: "Deluzion logo.png",
      eventDate: "31.10.2026",
      theme: "Halloween",
      eventInfos: "31.10.2026, Start 4pm, Soi 7, til 2am",
      styling: "halloween makeup, halloween dress, halloween pumpkin, bats, fire",
      colors: "orange, red, purple, green",
      staffOnFlyer: "2",
    },
  },
  animate: [
    {
      id: "deluzion-halloween",
      label: "Bar · Halloween Party",
      src: "/demo/deluzion/animate-halloween.mp4",
      poster: "/demo/deluzion/animate-halloween-poster.webp",
      prompt: "Animate the Halloween makeup — glowing eyes, bats flying, spooky aura",
    },
    {
      id: "deluzion-ice-birthday",
      label: "Bar · Ice Birthday Party",
      src: "/demo/deluzion/animate-ice-birthday.mp4",
      poster: "/demo/deluzion/animate-ice-birthday-poster.webp",
      prompt: "Make the ice crystals sparkle and the dress shimmer with light rays",
    },
    ...SHARED_ANIMATE.filter((a) => !["smartbar-halloween", "smartbar-ice-birthday"].includes(a.id)),
  ],
  wall: [1, 2, 3, 4, 5, 6].map((i) => `/demo/deluzion/wall-${i}.webp`),
};

export const DEFAULT_VENUE_ID = DELUZION.id;

const DEMO_VENUES: Record<string, Partial<DemoVenue> & { id: string }> = {
  [DELUZION.id]: DELUZION,
};

/** Returns the venue config, filling every missing field from the default venue. */
export function getDemoVenue(id?: string): DemoVenue {
  const custom = id ? DEMO_VENUES[id.toLowerCase()] : undefined;
  if (!custom || custom.id === DELUZION.id) return DELUZION;
  return {
    ...DELUZION,
    ...custom,
    images: { ...DELUZION.images, ...custom.images },
    shorts: { ...DELUZION.shorts, ...custom.shorts },
    story: { ...DELUZION.story, ...custom.story },
    promo: { ...DELUZION.promo, ...custom.promo },
  } as DemoVenue;
}

/** Real Volaly plans (Supabase plan_config) and credit costs per tool (credit_config). */
export const DEMO_PLANS = [
  { name: "Starter", credits: 25, channels: 2, priceThb: 4900 },
  { name: "Pro", credits: 50, channels: 4, priceThb: 9900, featured: true },
  { name: "Business", credits: 80, channels: 6, priceThb: 14900 },
] as const;

export const DEMO_CREDIT_COSTS = [
  { tool: "Smart Images", credits: 1 },
  { tool: "Smart Stories", credits: 1 },
  { tool: "Smart Promo", credits: 2 },
  { tool: "Smart Shorts", credits: 3 },
  { tool: "Smart Animate", credits: 3 },
] as const;

/** Every asset a venue's demo uses — handed to the service worker for offline precaching. */
export function demoAssetUrls(venue: DemoVenue): string[] {
  const urls = new Set<string>([
    venue.logo,
    venue.images.before,
    venue.images.after,
    venue.story.image,
    venue.promo.flyer,
    ...venue.wall,
    "/volaly-logo-v2.png",
  ]);
  for (const v of Object.values(venue.shorts)) {
    if (!v) continue;
    urls.add(v.src);
    urls.add(v.poster);
    if ("sources" in v) v.sources.forEach((s) => urls.add(s));
  }
  for (const a of venue.animate) {
    urls.add(a.src);
    urls.add(a.poster);
  }
  return [...urls];
}
