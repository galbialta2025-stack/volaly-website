/**
 * Offline support for the sales demo only.
 *
 * Registers /demo-sw.js (which ignores every request outside the demo) and
 * hands it the asset list of the current venue so the whole presentation is
 * cached after the first online visit.
 */
const MANIFEST_ID = "volaly-demo-manifest";

export function registerDemoOffline(assetUrls: string[]) {
  if (typeof window === "undefined") return;

  if (!document.getElementById(MANIFEST_ID)) {
    const link = document.createElement("link");
    link.id = MANIFEST_ID;
    link.rel = "manifest";
    link.href = "/demo-manifest.webmanifest";
    document.head.appendChild(link);
  }

  if (!("serviceWorker" in navigator) || !window.isSecureContext) return;

  const send = (sw: ServiceWorker | null | undefined) =>
    sw?.postMessage({ type: "volaly-demo-precache", urls: [window.location.pathname, ...assetUrls] });

  navigator.serviceWorker
    .register("/demo-sw.js", { scope: "/" })
    .then(async (reg) => {
      const ready = await navigator.serviceWorker.ready;
      send(ready.active ?? reg.active ?? reg.installing ?? reg.waiting);
    })
    .catch(() => undefined);
}
