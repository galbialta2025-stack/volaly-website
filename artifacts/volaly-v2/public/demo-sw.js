/*
 * Volaly sales demo — offline service worker.
 *
 * Scope is "/" but it only handles:
 *   - navigations to /<lang>/demo(...)   → network first, cached app shell as fallback
 *   - /assets/* (hashed build files)     → cache first
 *   - /demo/* media + Volaly logo        → cache first (with byte-range support for video)
 * Every other request passes through untouched, so the rest of the site
 * behaves exactly as without a service worker.
 */
const CACHE = "volaly-demo-v1";
const SHELL = "/__demo_shell__";

const isDemoNavigation = (url) => /^\/[a-z]{2}\/demo(\/|$)/.test(url.pathname);
const isDemoAsset = (url) =>
  url.pathname.startsWith("/assets/") ||
  url.pathname.startsWith("/demo/") ||
  url.pathname === "/volaly-logo-v2.png" ||
  url.pathname === "/favicon.ico";

self.addEventListener("install", () => self.skipWaiting());

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(keys.filter((k) => k.startsWith("volaly-demo-") && k !== CACHE).map((k) => caches.delete(k)));
      await self.clients.claim();
    })(),
  );
});

async function cacheShellFrom(response) {
  if (!response || !response.ok) return;
  const cache = await caches.open(CACHE);
  await cache.put(SHELL, response.clone());
}

self.addEventListener("message", (event) => {
  const data = event.data || {};
  if (data.type !== "volaly-demo-precache" || !Array.isArray(data.urls)) return;
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE);
      // App shell + the build files the shell references.
      try {
        const page = data.urls[0];
        const res = await fetch(page, { cache: "no-cache" });
        if (res.ok) {
          await cache.put(SHELL, res.clone());
          const html = await res.text();
          const refs = [...html.matchAll(/(?:src|href)="(\/assets\/[^"]+)"/g)].map((m) => m[1]);
          await Promise.all(refs.map((u) => cache.match(u).then((hit) => hit || cache.add(u)).catch(() => undefined)));
        }
      } catch (_) {
        /* offline — keep whatever is cached */
      }
      await Promise.all(
        data.urls.slice(1).map((u) =>
          cache.match(u).then((hit) => hit || cache.add(u)).catch(() => undefined),
        ),
      );
    })(),
  );
});

async function rangeResponse(request, response) {
  const range = request.headers.get("range");
  if (!range) return response;
  const buf = await response.arrayBuffer();
  const m = /bytes=(\d*)-(\d*)/.exec(range);
  const size = buf.byteLength;
  let start = m && m[1] ? parseInt(m[1], 10) : 0;
  let end = m && m[2] ? parseInt(m[2], 10) : size - 1;
  if (m && !m[1] && m[2]) {
    start = size - parseInt(m[2], 10);
    end = size - 1;
  }
  end = Math.min(end, size - 1);
  return new Response(buf.slice(start, end + 1), {
    status: 206,
    statusText: "Partial Content",
    headers: {
      "Content-Type": response.headers.get("Content-Type") || "video/mp4",
      "Content-Range": `bytes ${start}-${end}/${size}`,
      "Content-Length": String(end - start + 1),
      "Accept-Ranges": "bytes",
    },
  });
}

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  if (request.mode === "navigate") {
    if (!isDemoNavigation(url)) return;
    event.respondWith(
      (async () => {
        try {
          const res = await fetch(request);
          await cacheShellFrom(res);
          return res;
        } catch (_) {
          const cached = await caches.match(SHELL);
          return cached || Response.error();
        }
      })(),
    );
    return;
  }

  if (!isDemoAsset(url)) return;

  event.respondWith(
    (async () => {
      const cache = await caches.open(CACHE);
      const key = url.pathname;
      let cached = await cache.match(key);
      if (!cached) {
        try {
          const res = await fetch(key);
          if (res.ok) await cache.put(key, res.clone());
          cached = res;
        } catch (_) {
          return Response.error();
        }
      }
      return rangeResponse(request, cached);
    })(),
  );
});
