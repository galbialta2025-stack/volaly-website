import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { AnimatePresence } from "motion/react";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";
import { openDemo } from "@/lib/demo";
import { ChatWidget } from "./ChatWidget";

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
  const [chatOpen, setChatOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <AnimatePresence>
        {chatOpen && <ChatWidget onClose={() => setChatOpen(false)} />}
      </AnimatePresence>

      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3 sm:pt-4">
        <nav
          className={`mx-auto flex h-[60px] max-w-6xl items-center justify-between gap-4 rounded-full px-4 transition-all duration-300 sm:px-5 ${
            scrolled
              ? "glass-nav border border-white/80 shadow-soft"
              : "glass-nav border border-white/70"
          }`}
        >
          <Logo className="relative" />

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

          {/* Desktop: View Demo button */}
          <div className="hidden lg:block">
            <Button variant="hero" size="sm" className="rounded-full" onClick={openDemo}>
              View Demo
            </Button>
          </div>

          {/* Chatbot bubble + hamburger (always visible on right) */}
          <div className="flex items-center gap-2">
            <button
              aria-label="Chat with Volaly AI"
              onClick={() => setChatOpen((v) => !v)}
              className="relative flex h-9 w-9 items-center justify-center rounded-full shadow-md transition-transform hover:scale-110 active:scale-95"
              style={{
                background:
                  "linear-gradient(135deg, #ff6b35, #f72585, #7209b7, #3a0ca3, #4361ee, #4cc9f0)",
              }}
            >
              <MessageCircle className="h-4 w-4 text-white drop-shadow" />
              <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full border-2 border-white bg-green-400" />
            </button>
            <button
              className="rounded-full p-2 text-foreground lg:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              {open ? <X /> : <Menu />}
            </button>
          </div>
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
                View Demo
              </Button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
