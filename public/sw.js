/**
 * Kill-switch service worker.
 * next-pwa was removed from this project, but browsers that visited the old
 * site still have its service worker registered — and it serves stale cached
 * pages indefinitely. This replacement takes over, deletes all caches, and
 * unregisters itself so every visitor gets a clean, live site again.
 */
self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(keys.map((key) => caches.delete(key)));
      await self.registration.unregister();
      const clients = await self.clients.matchAll({ type: "window" });
      clients.forEach((client) => client.navigate(client.url));
    })()
  );
});
