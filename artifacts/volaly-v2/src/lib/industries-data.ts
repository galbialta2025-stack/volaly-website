import {
  Dumbbell,
  Smile,
  Sparkles,
  FileCheck2,
  Home,
  Megaphone,
  Car,
  Building2,
  Martini,
  UtensilsCrossed,
  type LucideIcon,
} from "lucide-react";

export type IndustryPageData = {
  slug: string;
  name: string;
  icon: LucideIcon;
  eyebrow: string;
  headline: string;
  highlight: string;
  subtitle: string;
  metaTitle: string;
  metaDescription: string;
  videoUrl: string;
  videoTitle: string;
  stats: { value: string; label: string }[];
  pains: string[];
  solutions: { title: string; desc: string }[];
};

const yt = (id: string) => `https://www.youtube-nocookie.com/embed/${id}?rel=0&modestbranding=1`;

export const industryPages: IndustryPageData[] = [
  {
    slug: "gym",
    name: "Gyms & Fitness Studios",
    icon: Dumbbell,
    eyebrow: "Gyms & Fitness",
    headline: "Fill your gym with",
    highlight: "members on autopilot",
    subtitle:
      "AI answers every enquiry in seconds, books trial sessions and follows up with leads until they sign up — while you focus on training.",
    metaTitle: "AI Marketing & Automation for Gyms — Volaly",
    metaDescription:
      "Volaly helps gyms and fitness studios get found online, reply to every lead instantly and convert trials into paying members.",
    videoUrl: yt("qY4AafC9JS4"),
    videoTitle: "Volaly for gyms — 2 minute demo",
    stats: [
      { value: "+124%", label: "More trial bookings" },
      { value: "<30s", label: "Average reply time" },
      { value: "24/7", label: "Lead follow-up" },
    ],
    pains: [
      "Leads message at night and never get a reply",
      "Trial visitors are never followed up",
      "Social content takes hours every week",
    ],
    solutions: [
      { title: "Instant lead replies", desc: "Smart Chat answers pricing and class questions on Instagram, LINE and WhatsApp 24/7." },
      { title: "Trial bookings", desc: "Turn every conversation into a booked trial session in your calendar." },
      { title: "Member follow-up", desc: "Automatic reminders and offers that convert trials into memberships." },
      { title: "Content on autopilot", desc: "On-brand posts, reels and promos generated and published for you." },
    ],
  },
  {
    slug: "dentist",
    name: "Dental Clinics",
    icon: Smile,
    eyebrow: "Dentists",
    headline: "Keep your chairs full with",
    highlight: "automated patient bookings",
    subtitle:
      "Volaly answers patient questions, books appointments and reduces no-shows — so your front desk can focus on care.",
    metaTitle: "AI Patient Booking & Marketing for Dentists — Volaly",
    metaDescription:
      "Volaly helps dental clinics rank higher on Google, answer patient enquiries instantly and fill the appointment calendar automatically.",
    videoUrl: yt("qY4AafC9JS4"),
    videoTitle: "Volaly for dental clinics — 2 minute demo",
    stats: [
      { value: "+62%", label: "More booked appointments" },
      { value: "-41%", label: "Fewer no-shows" },
      { value: "5★", label: "Review growth" },
    ],
    pains: [
      "Reception is too busy to answer every call and chat",
      "Patients forget appointments",
      "Few Google reviews compared to competitors",
    ],
    solutions: [
      { title: "24/7 patient chat", desc: "Answer treatment, price and insurance questions instantly in any language." },
      { title: "Smart scheduling", desc: "Patients book and reschedule themselves — synced to your calendar." },
      { title: "Reminders", desc: "Automated confirmations and reminders that cut no-shows dramatically." },
      { title: "Review engine", desc: "Invite happy patients to leave 5-star Google reviews automatically." },
    ],
  },
  {
    slug: "medical-beauty",
    name: "Medical Beauty Clinics",
    icon: Sparkles,
    eyebrow: "Medical Beauty",
    headline: "Turn attention into",
    highlight: "high-value treatments",
    subtitle:
      "Beauty and aesthetic clinics win on visibility and speed. Volaly delivers both — stunning content plus instant, on-brand consultations.",
    metaTitle: "AI Marketing for Medical Beauty & Aesthetic Clinics — Volaly",
    metaDescription:
      "Volaly generates on-brand content, replies to every enquiry instantly and books consultations for medical beauty and aesthetic clinics.",
    videoUrl: yt("qY4AafC9JS4"),
    videoTitle: "Volaly for medical beauty clinics — 2 minute demo",
    stats: [
      { value: "+3.1x", label: "Consultation requests" },
      { value: "+38%", label: "Average revenue lift" },
      { value: "6+", label: "Channels automated" },
    ],
    pains: [
      "Enquiries come from 5 different channels at once",
      "Content must look premium — every single day",
      "High-value leads go cold without follow-up",
    ],
    solutions: [
      { title: "Premium visuals", desc: "Smart Images and Shorts create polished, on-brand content daily." },
      { title: "Consultation booking", desc: "Qualify interest and book paid consultations automatically." },
      { title: "Upsell flows", desc: "Smart Sale recommends packages and follow-up treatments." },
      { title: "Unified inbox", desc: "Instagram, LINE, WhatsApp and web chat in one AI-powered place." },
    ],
  },
  {
    slug: "visa-agency",
    name: "Visa Agencies",
    icon: FileCheck2,
    eyebrow: "Visa Agencies",
    headline: "Answer visa questions",
    highlight: "instantly, in any language",
    subtitle:
      "Volaly handles repetitive document and requirement questions 24/7, qualifies applicants and books consultations for your team.",
    metaTitle: "AI Automation for Visa Agencies — Volaly",
    metaDescription:
      "Volaly answers visa questions 24/7 in any language, qualifies applicants and books consultations automatically for visa agencies.",
    videoUrl: yt("qY4AafC9JS4"),
    videoTitle: "Volaly for visa agencies — 2 minute demo",
    stats: [
      { value: "90%", label: "Questions auto-answered" },
      { value: "40+", label: "Languages supported" },
      { value: "24/7", label: "Availability" },
    ],
    pains: [
      "The same questions asked hundreds of times a week",
      "Clients write in many different languages",
      "Qualified applicants lost in the inbox",
    ],
    solutions: [
      { title: "Multilingual AI", desc: "Reply accurately in the applicant's own language, around the clock." },
      { title: "Document guidance", desc: "Walk applicants through requirements and checklists step by step." },
      { title: "Lead qualification", desc: "Only serious, qualified applicants reach your consultants." },
      { title: "Consultation booking", desc: "Confirmed appointments straight into your calendar." },
    ],
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    icon: Home,
    eyebrow: "Real Estate",
    headline: "Qualify buyers and",
    highlight: "book viewings automatically",
    subtitle:
      "Every property enquiry gets an instant, informed reply. Volaly qualifies budget and intent, then books the viewing for your agents.",
    metaTitle: "AI Lead Qualification for Real Estate Agencies — Volaly",
    metaDescription:
      "Volaly replies to every property enquiry instantly, qualifies buyers and books viewings automatically for real estate agencies.",
    videoUrl: yt("qY4AafC9JS4"),
    videoTitle: "Volaly for real estate — 2 minute demo",
    stats: [
      { value: "+87%", label: "More viewings booked" },
      { value: "<1min", label: "First response time" },
      { value: "100%", label: "Leads followed up" },
    ],
    pains: [
      "Buyers contact three agencies — the fastest wins",
      "Agents waste time on unqualified leads",
      "Listings need constant fresh content",
    ],
    solutions: [
      { title: "Instant response", desc: "Be the first agency to reply, every single time." },
      { title: "Buyer qualification", desc: "Budget, timeline and intent captured before your agent steps in." },
      { title: "Viewing scheduler", desc: "Confirmed viewings booked directly into agent calendars." },
      { title: "Listing content", desc: "Automated property posts, flyers and short videos." },
    ],
  },
  {
    slug: "social-media-influencer",
    name: "Social Media Influencers",
    icon: Megaphone,
    eyebrow: "Creators & Influencers",
    headline: "Post more, reply faster,",
    highlight: "monetise everything",
    subtitle:
      "Volaly produces daily content, handles DMs and brand enquiries, and turns your audience into a real, monetised business.",
    metaTitle: "AI Content & DM Automation for Influencers — Volaly",
    metaDescription:
      "Volaly creates daily content, handles DMs and brand enquiries, and helps social media influencers monetise their audience.",
    videoUrl: yt("qY4AafC9JS4"),
    videoTitle: "Volaly for creators — 2 minute demo",
    stats: [
      { value: "10x", label: "Faster content output" },
      { value: "0", label: "Missed DMs" },
      { value: "+38%", label: "Revenue lift" },
    ],
    pains: [
      "Content production eats the whole week",
      "Thousands of unanswered DMs",
      "Brand deals lost to slow replies",
    ],
    solutions: [
      { title: "Daily content engine", desc: "Smart Shorts and Images keep your feed alive without burnout." },
      { title: "DM automation", desc: "AI replies to fans and filters real business enquiries." },
      { title: "Brand deal inbox", desc: "Collaboration requests qualified and organised in your CRM." },
      { title: "Monetisation flows", desc: "Sell products, courses and services directly in chat." },
    ],
  },
  {
    slug: "car-rental",
    name: "Car Rental",
    icon: Car,
    eyebrow: "Car Rental",
    headline: "Automated quotes and",
    highlight: "bookings for every vehicle",
    subtitle:
      "Volaly quotes rates, checks availability and confirms rentals 24/7 — so no traveller ever waits for an answer.",
    metaTitle: "AI Booking Automation for Car Rental Companies — Volaly",
    metaDescription:
      "Volaly quotes rates, checks availability and confirms car rental bookings automatically, 24/7, in any language.",
    videoUrl: yt("qY4AafC9JS4"),
    videoTitle: "Volaly for car rental — 2 minute demo",
    stats: [
      { value: "+71%", label: "More confirmed rentals" },
      { value: "24/7", label: "Quotes and booking" },
      { value: "40+", label: "Languages" },
    ],
    pains: [
      "Travellers ask for quotes at 3am",
      "Availability questions repeat endlessly",
      "Bookings lost to faster competitors",
    ],
    solutions: [
      { title: "Instant quoting", desc: "Rates, insurance and extras explained in seconds." },
      { title: "Availability checks", desc: "AI confirms which vehicles are free for the requested dates." },
      { title: "Booking confirmation", desc: "Deposits, documents and pickup details handled in chat." },
      { title: "Local visibility", desc: "Rank higher on Google Maps where travellers search." },
    ],
  },
  {
    slug: "hotel",
    name: "Hotels & Resorts",
    icon: Building2,
    eyebrow: "Hotels & Resorts",
    headline: "Fill more rooms with",
    highlight: "direct bookings",
    subtitle:
      "Volaly answers guest questions instantly, drives direct reservations and grows your 5-star reviews — cutting OTA dependency.",
    metaTitle: "AI Guest Communication & Direct Bookings for Hotels — Volaly",
    metaDescription:
      "Volaly answers guest questions 24/7, drives direct hotel bookings and grows 5-star reviews — reducing OTA commission.",
    videoUrl: yt("qY4AafC9JS4"),
    videoTitle: "Volaly for hotels — 2 minute demo",
    stats: [
      { value: "+46%", label: "More direct bookings" },
      { value: "5★", label: "Review growth" },
      { value: "24/7", label: "Guest support" },
    ],
    pains: [
      "High OTA commission on every booking",
      "Guests ask the same questions all night",
      "Reviews decide bookings — and yours are thin",
    ],
    solutions: [
      { title: "Direct booking chat", desc: "Guide guests from question to confirmed direct reservation." },
      { title: "24/7 concierge", desc: "Check-in, amenities and transfer questions answered instantly." },
      { title: "Review engine", desc: "Automatically collect authentic 5-star reviews after each stay." },
      { title: "Google visibility", desc: "Rank higher on Maps and Search in your destination." },
    ],
  },
  {
    slug: "bar",
    name: "Bars & Nightlife",
    icon: Martini,
    eyebrow: "Bars & Nightlife",
    headline: "Pack the venue",
    highlight: "every single night",
    subtitle:
      "Event promos, table reservations and instant replies — Volaly keeps your bar visible and your tables booked.",
    metaTitle: "AI Marketing & Reservations for Bars and Nightlife — Volaly",
    metaDescription:
      "Volaly promotes your events, replies to guests instantly and fills tables with automated reservations for bars and nightlife venues.",
    videoUrl: yt("qY4AafC9JS4"),
    videoTitle: "Volaly for bars — 2 minute demo",
    stats: [
      { value: "+2.4x", label: "Table reservations" },
      { value: "Daily", label: "Event content" },
      { value: "24/7", label: "Guest replies" },
    ],
    pains: [
      "Every event needs new promo content",
      "Table requests come in via DM at peak hours",
      "Walk-in traffic depends on being found online",
    ],
    solutions: [
      { title: "Event promos", desc: "Flyers, reels and posts for every night, generated automatically." },
      { title: "Table booking", desc: "Reservations confirmed in chat without staff involvement." },
      { title: "Guest list & VIP", desc: "Capture and organise regulars and VIP guests in your CRM." },
      { title: "Local discovery", desc: "Show up on Google and social when people search nightlife nearby." },
    ],
  },
  {
    slug: "restaurant",
    name: "Restaurants",
    icon: UtensilsCrossed,
    eyebrow: "Restaurants",
    headline: "Keep every table full with",
    highlight: "instant reservations",
    subtitle:
      "Volaly handles reservations, menu questions and delivery enquiries across every channel — and keeps your feed hungry-looking.",
    metaTitle: "AI Reservations & Marketing for Restaurants — Volaly",
    metaDescription:
      "Volaly takes reservations, answers menu questions and promotes your restaurant automatically across Google, LINE, WhatsApp and social.",
    videoUrl: yt("qY4AafC9JS4"),
    videoTitle: "Volaly for restaurants — 2 minute demo",
    stats: [
      { value: "+58%", label: "More reservations" },
      { value: "5★", label: "Review growth" },
      { value: "6+", label: "Channels automated" },
    ],
    pains: [
      "Phone rings during the dinner rush",
      "Menu and opening-hour questions never stop",
      "Food content needs to look great daily",
    ],
    solutions: [
      { title: "Reservation AI", desc: "Bookings confirmed instantly on web, LINE, WhatsApp and Instagram." },
      { title: "Menu assistant", desc: "Dishes, allergens, hours and delivery answered automatically." },
      { title: "Food content", desc: "Appetising posts and short videos published for you." },
      { title: "Review growth", desc: "Turn happy diners into a stream of 5-star Google reviews." },
    ],
  },
];

export const industryBySlug = Object.fromEntries(
  industryPages.map((i) => [i.slug, i]),
) as Record<string, IndustryPageData>;
