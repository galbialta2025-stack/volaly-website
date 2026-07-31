import {
  Building2,
  Dumbbell,
  UtensilsCrossed,
  Home,
  FileCheck2,
  Car,
  Stethoscope,
  type LucideIcon,
} from "lucide-react";

export type Industry = {
  slug: string;
  name: string;
  icon: LucideIcon;
  tagline: string;
};

export const industries: Industry[] = [
  { slug: "hotels", name: "Hotels", icon: Building2, tagline: "Fill more rooms with automated bookings and 5-star reviews." },
  { slug: "restaurants", name: "Restaurants", icon: UtensilsCrossed, tagline: "Keep every table full with instant reservations." },
  { slug: "gyms", name: "Gyms", icon: Dumbbell, tagline: "Convert leads into members with AI follow-up." },
  { slug: "real-estate", name: "Real Estate", icon: Home, tagline: "Qualify leads and book viewings automatically." },
  { slug: "medical", name: "Medical", icon: Stethoscope, tagline: "Streamline patient communication and scheduling." },
  { slug: "visa-agencies", name: "Visa Agencies", icon: FileCheck2, tagline: "Answer visa questions instantly, 24/7, in any language." },
  { slug: "car-rental", name: "Car Rental", icon: Car, tagline: "Automated quotes and bookings for every vehicle." },
];

export const platforms = [
  "Google Business",
  "Facebook",
  "Instagram",
  "LINE",
  "WhatsApp",
  "TikTok",
];
