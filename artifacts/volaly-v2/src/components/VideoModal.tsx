import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { DEMO_EVENT } from "@/lib/demo";

// Replace with a real MP4, YouTube (nocookie) or Vimeo embed URL.
const VIDEO_URL = "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0";

function isEmbed(url: string) {
  return /youtube|youtu\.be|vimeo/.test(url);
}

export function VideoModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onOpen = () => setOpen(true);
    window.addEventListener(DEMO_EVENT, onOpen);
    return () => window.removeEventListener(DEMO_EVENT, onOpen);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Product demo video"
      className="fixed inset-0 z-[100] grid place-items-center p-4"
    >
      <div
        className="absolute inset-0 bg-foreground/60 backdrop-blur-sm"
        onClick={() => setOpen(false)}
      />
      <div className="glass relative w-full max-w-4xl overflow-hidden rounded-3xl shadow-[var(--shadow-glow-blue)]">
        <button
          onClick={() => setOpen(false)}
          aria-label="Close video"
          className="absolute right-3 top-3 z-10 grid h-10 w-10 place-items-center rounded-full bg-background/80 text-foreground transition-colors hover:bg-background"
        >
          <X className="h-5 w-5" />
        </button>
        <div className="aspect-video w-full bg-black">
          {isEmbed(VIDEO_URL) ? (
            <iframe
              src={VIDEO_URL}
              title="Volaly 2 minute demo"
              className="h-full w-full"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          ) : (
            <video src={VIDEO_URL} className="h-full w-full" controls autoPlay playsInline />
          )}
        </div>
      </div>
    </div>
  );
}
