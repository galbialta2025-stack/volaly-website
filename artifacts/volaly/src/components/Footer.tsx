import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Music2, MessageCircle } from "lucide-react";
import { Logo } from "./Logo";
import { industryPages } from "@/lib/industries-data";

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
              <li><Link to="/privacy" className="text-muted-foreground hover:text-foreground">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-muted-foreground hover:text-foreground">Terms</Link></li>
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
              {[Facebook, Instagram, Music2, MessageCircle].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="grid h-10 w-10 place-items-center rounded-full border border-border/70 bg-background/70 text-muted-foreground backdrop-blur transition-all hover:-translate-y-0.5 hover:text-brand-orange"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-border/60 pt-6 text-sm text-muted-foreground">
          © {new Date().getFullYear()} Volaly. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
