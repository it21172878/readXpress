// Service Worker for advanced popup blocker bypass
self.addEventListener("message", function (event) {
  if (event.data && event.data.type === "REDIRECT") {
    const url = event.data.url;

    // Method 1: Try to open URL directly
    try {
      self.clients.openWindow(url);
    } catch {
      // Method 2: Send message back to client to try other methods
      event.ports[0].postMessage({
        type: "REDIRECT_FALLBACK",
        url: url,
      });
    }
  }
});

// Install event
self.addEventListener("install", function () {
  self.skipWaiting();
});

// Activate event
self.addEventListener("activate", function (event) {
  event.waitUntil(self.clients.claim());
});
