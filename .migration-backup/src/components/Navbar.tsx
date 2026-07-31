import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";
import { openDemo } from "@/lib/demo";

const links = [
  { href: "/#visibility", label: "Visibility" },
  { href: "/#revenue", label: "Revenue" },
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/#industries", label: "Industries" },
  { href: "/#platform", label: "Platform" },
  { href: "/#faq", label: "FAQ" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3 sm:pt-4">
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-full px-4 py-3 transition-all duration-300 sm:px-5 sm:py-3.5 ${
          scrolled
            ? "glass-nav border border-white/80 shadow-soft"
            : "glass-nav border border-white/70"
        }`}
      >
        <div className="rounded-xl bg-white/90 px-2 py-1 backdrop-blur-sm">
          <Logo className="relative" />
        </div>
        <div className="hidden items-center gap-0.5 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-white/50 hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </div>
        <div className="hidden lg:block">
          <Button variant="hero" size="lg" className="rounded-full" onClick={openDemo}>
            Book Demo
          </Button>
        </div>
        <button
          className="rounded-full p-2 text-foreground lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <div className="glass-nav mx-auto mt-2 max-w-6xl rounded-3xl border border-white/80 p-4 shadow-soft lg:hidden">
          <div className="flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-base font-medium text-muted-foreground hover:bg-white/70 hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            <Button
              variant="hero"
              size="lg"
              className="mt-2 rounded-full"
              onClick={() => {
                setOpen(false);
                openDemo();
              }}
            >
              Book Demo
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
