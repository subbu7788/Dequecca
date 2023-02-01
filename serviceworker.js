self.addEventListener('install', (e) => {
    e.waitUntil(
      caches.open('fox-store').then((cache) => cache.addAll([
        '/subbu7788.github.io/',
        '/subbu7788.github.io/index.html',
        '/subbu7788.github.io/JS/contrast.js',
        '/subbu7788.github.io/JS/deque-widgets.min.js',
        '/subbu7788.github.io/JS/dqu2019.min.js',
        '/subbu7788.github.io/JS/highlight.js',
        '/subbu7788.github.io/JS/jquery.min.js',
        '/subbu7788.github.io/JS/picker.js',
        '/subbu7788.github.io/CSS/contrast.css',
        '/subbu7788.github.io/CSS/deque-widgets.min.css',
        '/subbu7788.github.io/CSS/dqu2019.min.css',
        '/subbu7788.github.io/CSS/fontawesome-all.min.css',
        '/subbu7788.github.io/CSS/railscasts.css',
        '/subbu7788.github.io/CSS/ruleHelp.css',
        '/subbu7788.github.io/images/eyedropper.png',
      ])),
    );
  });
  
  self.addEventListener('fetch', (e) => {
    console.log(e.request.url);
    e.respondWith(
      caches.match(e.request).then((response) => response || fetch(e.request)),
    );
  });
