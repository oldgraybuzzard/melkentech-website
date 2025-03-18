const CACHE_NAME = 'melkentech-cache-v1';
const STATIC_CACHE_NAME = 'melkentech-static-v1';
const DYNAMIC_CACHE_NAME = 'melkentech-dynamic-v1';
const FORM_CACHE_NAME = 'melkentech-forms-v1';

// Assets to cache immediately
const STATIC_ASSETS = [
  '/',
  '/offline',
  '/styles/main.css',
  '/images/logo.png',
  '/images/hero.jpg',
  '/images/services-hero.jpg',
  '/fonts/geist-regular.woff2',
  '/fonts/geist-medium.woff2',
];

// API routes to cache with network-first strategy
const API_ROUTES = [
  '/api/blog',
  '/api/services',
];

// Initialize background sync for forms
const bgSync = async () => {
  try {
    await self.registration.sync.register('form-sync');
  } catch (err) {
    console.error('Background sync registration failed:', err);
  }
};

// Install event - cache static assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(STATIC_CACHE_NAME)
      .then(cache => cache.addAll(STATIC_ASSETS))
      .then(() => self.skipWaiting())
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames
          .filter(name => name.startsWith('melkentech-'))
          .filter(name => name !== STATIC_CACHE_NAME && 
                         name !== DYNAMIC_CACHE_NAME && 
                         name !== FORM_CACHE_NAME)
          .map(name => caches.delete(name))
      );
    })
  );
});

// Fetch event - implement caching strategies
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  // Handle API routes with network-first strategy
  if (API_ROUTES.some(route => url.pathname.startsWith(route))) {
    event.respondWith(networkFirst(request));
    return;
  }

  // Handle static assets with cache-first strategy
  if (request.destination === 'style' || 
      request.destination === 'script' || 
      request.destination === 'image') {
    event.respondWith(cacheFirst(request));
    return;
  }

  // Handle navigation requests with network-first strategy
  if (request.mode === 'navigate') {
    event.respondWith(
      networkFirst(request)
        .catch(() => caches.match('/offline'))
    );
    return;
  }

  // Default to network-first strategy
  event.respondWith(networkFirst(request));
});

// Cache-first strategy
async function cacheFirst(request) {
  const cachedResponse = await caches.match(request);
  if (cachedResponse) {
    return cachedResponse;
  }
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(DYNAMIC_CACHE_NAME);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    return caches.match('/offline');
  }
}

// Network-first strategy
async function networkFirst(request) {
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(DYNAMIC_CACHE_NAME);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    throw error;
  }
}

// Handle form submissions with background sync
self.addEventListener('sync', event => {
  if (event.tag === 'form-sync') {
    event.waitUntil(syncForms());
  }
});

// Process stored form submissions
async function syncForms() {
  try {
    const cache = await caches.open(FORM_CACHE_NAME);
    const requests = await cache.keys();
    
    return Promise.all(requests.map(async (request) => {
      const formData = await cache.match(request).then(r => r.json());
      
      try {
        const response = await fetch(request, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          return cache.delete(request);
        }
      } catch (error) {
        console.error('Form sync failed:', error);
      }
    }));
  } catch (error) {
    console.error('Form sync failed:', error);
  }
}

// Store form data when offline
self.addEventListener('fetch', event => {
  if (event.request.method === 'POST') {
    event.respondWith(
      fetch(event.request.clone()).catch(async () => {
        const formData = await event.request.json();
        const cache = await caches.open(FORM_CACHE_NAME);
        await cache.put(event.request.url, new Response(JSON.stringify(formData)));
        await bgSync();
        return new Response(JSON.stringify({ stored: true, offline: true }));
      })
    );
  }
});
