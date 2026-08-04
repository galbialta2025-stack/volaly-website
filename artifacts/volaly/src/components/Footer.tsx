import { Link } from "@tanstack/react-router";
import { Youtube } from "lucide-react";
import { Logo } from "./Logo";
import { industryPages } from "@/lib/industries-data";

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.268h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.72a4.85 4.85 0 01-1.01-.03z" />
    </svg>
  );
}

const socials = [
  {
    Icon: FacebookIcon,
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61592148647140",
    color: "hover:text-[#1877F2]",
  },
  {
    Icon: InstagramIcon,
    label: "Instagram",
    href: "https://www.instagram.com/volal.y/",
    color: "hover:text-[#E1306C]",
  },
  {
    Icon: TikTokIcon,
    label: "TikTok",
    href: "#",
    color: "hover:text-foreground",
  },
  {
    Icon: Youtube,
    label: "YouTube",
    href: "https://www.youtube.com/@Volal.y",
    color: "hover:text-[#FF0000]",
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border/60 bg-background">
      <div className="bg-mesh-soft pointer-events-none absolute inset-0 opacity-60" />
      <div className="relative mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-5">
          <div className="md:col-span-1">
            <div className="inline-flex rounded-2xl bg-background/85 px-4 py-3 backdrop-blur-sm">
              <Logo withTagline />
            </div>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              The Business Growth Platform. Turn visibility into revenue with AI.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-foreground">Platform</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><a href="/#visibility" className="text-muted-foreground hover:text-foreground">Visibility Engine</a></li>
              <li><a href="/#revenue" className="text-muted-foreground hover:text-foreground">Revenue Engine</a></li>
              <li><a href="/#how-it-works" className="text-muted-foreground hover:text-foreground">How It Works</a></li>
              <li><a href="/#platform" className="text-muted-foreground hover:text-foreground">Capabilities</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-foreground">Company</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><a href="/#industries" className="text-muted-foreground hover:text-foreground">Industries</a></li>
              <li><a href="/#faq" className="text-muted-foreground hover:text-foreground">FAQ</a></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-foreground">Contact</Link></li>
              <li><Link to="/privacy" className="text-muted-foreground hover:text-foreground">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-muted-foreground hover:text-foreground">Terms</Link></li>
              <li><Link to="/cookie-policy" className="text-muted-foreground hover:text-foreground">Cookie Policy</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-foreground">Industries</h4>
            <ul className="mt-4 grid grid-cols-1 gap-2.5 text-sm sm:grid-cols-2 md:grid-cols-1">
              {industryPages.map((ind) => (
                <li key={ind.slug}>
                  <Link to={`/${ind.slug}` as "/"} className="text-muted-foreground hover:text-foreground">
                    {ind.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-foreground">Follow Us</h4>
            <div className="mt-4 flex gap-3">
              {socials.map(({ Icon, label, href, color }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target={href !== "#" ? "_blank" : undefined}
                  rel={href !== "#" ? "noopener noreferrer" : undefined}
                  className={`grid h-10 w-10 place-items-center rounded-full border border-border/70 bg-background/70 text-muted-foreground backdrop-blur transition-all hover:-translate-y-0.5 ${color}`}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-border/60 pt-6 space-y-2">
          <p className="text-xs text-muted-foreground/70 max-w-2xl leading-relaxed">
            * Individual results may vary and are not guaranteed. Statistics shown represent outcomes
            reported by select clients and may not reflect typical results. Past performance is not
            indicative of future results.
          </p>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Volaly. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
