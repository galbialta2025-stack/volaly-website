import {
  ImageIcon,
  Clapperboard,
  FileImage,
  Star,
  MapPin,
  MessageCircle,
  CalendarCheck,
  ShoppingCart,
  Users,
} from "lucide-react";
import { Engine } from "./Engine";

export function VisibilityEngine() {
  return (
    <Engine
      id="visibility"
      eyebrow="Visibility Engine"
      title={<>Get <span className="text-gradient">found</span> by more customers</>}
      subtitle="AI creates and publishes content that puts your business in front of the right people, everywhere they search."
      purpose="Get Found"
      accent="blue"
      items={[
        { icon: ImageIcon, name: "Smart Images", desc: "On-brand marketing images generated automatically." },
        { icon: Clapperboard, name: "Smart Shorts", desc: "Scroll-stopping short videos for social feeds." },
        { icon: FileImage, name: "Smart Flyers", desc: "Ready-to-post promotions and announcements." },
        { icon: Star, name: "Smart Reviews", desc: "Collect and grow authentic 5-star reviews." },
        { icon: MapPin, name: "Google Business", desc: "Rank higher on Google Maps and Search." },
      ]}
    />
  );
}

export function RevenueEngine() {
  return (
    <Engine
      id="revenue"
      eyebrow="Revenue Engine"
      title={<>Convert visitors into <span className="text-gradient">revenue</span></>}
      subtitle="AI replies instantly, books appointments and follows up — turning every enquiry into a paying customer."
      purpose="Convert Visitors"
      accent="orange"
      muted
      items={[
        { icon: MessageCircle, name: "Smart Chat", desc: "24/7 AI chat on LINE, WhatsApp and web." },
        { icon: CalendarCheck, name: "Smart Book", desc: "Turn conversations into confirmed bookings." },
        { icon: ShoppingCart, name: "Smart Sale", desc: "Upsell and close deals automatically." },
        { icon: Users, name: "Smart CRM", desc: "Every lead organised and followed up." },
      ]}
    />
  );
}
