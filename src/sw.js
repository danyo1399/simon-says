import { getFiles, setupPrecaching, setupRouting } from 'preact-cli/sw';

setupRouting();
const urlsToCache = getFiles();

urlsToCache.push({url: 'https://danyo1399.github.io/simon-says/assets/favicon.ico', revision: null});
urlsToCache.push({url: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css', revision: null});
urlsToCache.push({url: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css', revision: null});
urlsToCache.push({url: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.jso', revision: null});
urlsToCache.push({url: 'https://fonts.googleapis.com/css2?family=Sarpanch:wght@800&display=swap', revision: null});
urlsToCache.push({url: 'https://danyo1399.github.io/simon-says/assets/game-logo-full.png', revision: null})

setupPrecaching(urlsToCache);
