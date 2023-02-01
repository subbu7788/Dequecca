self.addEventListener('install', (e) => {
    e.waitUntil(
      caches.open('fox-store').then((cache) => cache.addAll([
        '/Dequecca/',
        '/Dequecca/index.html',
        '/Dequecca/JS/contrast.js',
        '/Dequecca/JS/deque-widgets.min.js',
        '/Dequecca/JS/dqu2019.min.js',
        '/Dequecca/JS/highlight.js',
        '/Dequecca/JS/jquery.min.js',
        '/Dequecca/JS/picker.js',
        '/Dequecca/CSS/contrast.css',
        '/Dequecca/CSS/deque-widgets.min.css',
        '/Dequecca/CSS/dqu2019.min.css',
        '/Dequecca/CSS/fontawesome-all.min.css',
        '/Dequecca/CSS/railscasts.css',
        '/Dequecca/CSS/ruleHelp.css',
        '/Dequecca/images/eyedropper.png',
      ])),
    );
  });
  
  self.addEventListener('fetch', (e) => {
    console.log(e.request.url);
    e.respondWith(
      caches.match(e.request).then((response) => response || fetch(e.request)),
    );
  });
