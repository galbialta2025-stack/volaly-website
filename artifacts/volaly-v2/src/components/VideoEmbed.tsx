import { useState } from "react";
import { Play } from "lucide-react";

export function VideoEmbed({
  url,
  title,
  poster,
}: {
  url: string;
  title: string;
  poster?: string;
}) {
  const [active, setActive] = useState(false);
  const isFile = /\.(mp4|webm)$/i.test(url);
  const src = active && !isFile ? `${url}${url.includes("?") ? "&" : "?"}autoplay=1` : url;

  return (
    <div className="glass-card relative overflow-hidden rounded-[28px] p-2 shadow-soft">
      <div className="relative aspect-video w-full overflow-hidden rounded-[22px] bg-[oklch(0.16_0.03_265)]">
        {isFile ? (
          <video src={url} poster={poster} controls playsInline className="h-full w-full" />
        ) : active ? (
          <iframe
            src={src}
            title={title}
            className="h-full w-full"
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
            loading="lazy"
          />
        ) : (
          <button
            type="button"
            onClick={() => setActive(true)}
            aria-label={`Play video: ${title}`}
            className="group absolute inset-0 grid place-items-center"
          >
            {poster && (
              <img
                src={poster}
                alt=""
                className="absolute inset-0 h-full w-full object-cover opacity-80"
                loading="lazy"
              />
            )}
            <span className="bg-mesh-soft pointer-events-none absolute inset-0 opacity-40" />
            <span className="relative grid h-20 w-20 place-items-center rounded-full bg-white/95 text-brand-orange shadow-[var(--shadow-glow-orange)] transition-transform duration-300 group-hover:scale-110">
              <Play className="ml-1 h-7 w-7 fill-current" />
            </span>
            <span className="absolute bottom-5 left-6 right-6 text-left text-sm font-semibold text-white/90">
              {title}
            </span>
          </button>
        )}
      </div>
    </div>
  );
}
