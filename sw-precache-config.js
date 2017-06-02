module.exports = {
  staticFileGlobs: [
    '/index.html',
    '/manifest.json',
    '/bower_components/webcomponentsjs/webcomponents-lite.min.js',
    '/bower_components/web-animations-js/web-animations-next-lite.min.js',
    '/bower_components/app-storage/app-indexeddb-mirror/common-worker-scope.js',
    '/bower_components/app-storage/app-indexeddb-mirror/app-indexeddb-mirror-worker.js'
  ],
  navigateFallback: '/index.html',
  navigateFallbackWhitelist: [/^(?!\/__)/]
};