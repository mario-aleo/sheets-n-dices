/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["bower_components/app-layout/app-header-layout/app-header-layout.html","1a245471f67c4cae360d77ec3df99add"],["bower_components/app-layout/app-header/app-header.html","220801b4c2187e1213834be4ca9dec24"],["bower_components/app-layout/app-layout-behavior/app-layout-behavior.html","f1663d4eb4f1932c1b87d52ae10c4c1e"],["bower_components/app-layout/app-scroll-effects/app-scroll-effects-behavior.html","20fdf88fadfbb26b2c9170e04e1f7548"],["bower_components/app-layout/app-scroll-effects/effects/waterfall.html","6ffd9de5d1e97c1578f1fc8a2449aaad"],["bower_components/app-layout/app-toolbar/app-toolbar.html","5f67aea4a70b83d62357070a53e79b1a"],["bower_components/app-layout/helpers/helpers.html","ed3bdc746c9680011cf9911d8608975a"],["bower_components/app-route/app-location.html","019e31989ed66e00c9270ded74108219"],["bower_components/app-route/app-route-converter-behavior.html","67ec6daf2bbe9f59beecbdd5b863af14"],["bower_components/app-route/app-route.html","bb3a99b6cb10f85afc019fae4ee2adde"],["bower_components/app-storage/app-indexeddb-mirror/app-indexeddb-mirror-client.html","967936b06e54dfc9118cd5b992b1940d"],["bower_components/app-storage/app-indexeddb-mirror/app-indexeddb-mirror.html","c7f9d76f9e0eee78c360ffe41c9bd634"],["bower_components/app-storage/app-indexeddb-mirror/common-worker.html","966ec8a5d7df441e187672e513c34471"],["bower_components/app-storage/app-network-status-behavior.html","e89fe8c2a02950c44a37d66f7b686c84"],["bower_components/app-storage/app-storage-behavior.html","4f7b4f0f816ba651861d86d1c4cc1c40"],["bower_components/firebase/firebase-app.js","9a447f87bfa89415a34758f9e14d9430"],["bower_components/firebase/firebase-auth.js","0cd20e835b6fa9732a800ef0ffcb5e6a"],["bower_components/firebase/firebase-database.js","3a1800ea377e98f027a5ca50fdad982e"],["bower_components/firebase/firebase-messaging.js","3124dee08663d586bb91402d665f0ad7"],["bower_components/firebase/firebase-storage.js","a63c0647cc14458b9988ee521539e2ab"],["bower_components/font-roboto/roboto.html","22fe760d42278ca3b2b3718390fbb1bd"],["bower_components/iron-a11y-announcer/iron-a11y-announcer.html","8fe2cb69118fbeec2cca16d3bc66f7f0"],["bower_components/iron-a11y-keys-behavior/iron-a11y-keys-behavior.html","0974e9f6aa9c95ecba116535117ee4a7"],["bower_components/iron-autogrow-textarea/iron-autogrow-textarea.html","ca2ac1ff3bf65ad111e97881f30d1adc"],["bower_components/iron-behaviors/iron-button-state.html","6236169a9b34b17d13b7ae71dac4a23f"],["bower_components/iron-behaviors/iron-control-state.html","84acae5cebda37fdf8b5b28f83546d42"],["bower_components/iron-checked-element-behavior/iron-checked-element-behavior.html","d94237f52ebf55f4b342146d99d2a84d"],["bower_components/iron-dropdown/iron-dropdown-scroll-manager.html","fdbd0ac4976c7154e669cd8c32555ecd"],["bower_components/iron-dropdown/iron-dropdown.html","8dd17e53f14d00fca303b2ba8287a4d2"],["bower_components/iron-fit-behavior/iron-fit-behavior.html","64baf11e4e7953a7fe05291754085442"],["bower_components/iron-flex-layout/iron-flex-layout.html","e2784155f5abdeb2f03998199f182a73"],["bower_components/iron-form-element-behavior/iron-form-element-behavior.html","b01c564985afe597f3eae64241eeec15"],["bower_components/iron-icon/iron-icon.html","e091eb159dd5e13d1e6c29bbf2b010a6"],["bower_components/iron-icons/iron-icons.html","019e6a0be2ce7f859224a673665ddeb6"],["bower_components/iron-iconset-svg/iron-iconset-svg.html","de33474ea22a3426e3cb610941dfc3af"],["bower_components/iron-image/iron-image.html","5beb2a773ccb83dbb3daa650a9444df6"],["bower_components/iron-input/iron-input.html","75cb6824171499ef97db84cdd6bfec64"],["bower_components/iron-location/iron-location.html","5f9928431926deb0dbd59ea0d0bbb731"],["bower_components/iron-location/iron-query-params.html","7784514d311ff2726b8875d3cd61693e"],["bower_components/iron-menu-behavior/iron-menu-behavior.html","9f5a1b5994df4fd22a1f18f193d3daad"],["bower_components/iron-menu-behavior/iron-menubar-behavior.html","c0f598916359f195a6df70714951a535"],["bower_components/iron-meta/iron-meta.html","0ac606734525bf8221f648084bbd3fb8"],["bower_components/iron-overlay-behavior/iron-focusables-helper.html","063ab3216a9fe0f7618d0301c3a307ab"],["bower_components/iron-overlay-behavior/iron-overlay-backdrop.html","8882011516f169ccbe145c4fd208b299"],["bower_components/iron-overlay-behavior/iron-overlay-behavior.html","36caadd36a302e4e87dd28e536861619"],["bower_components/iron-overlay-behavior/iron-overlay-manager.html","c124d00c73877b72fa73481f595809c0"],["bower_components/iron-pages/iron-pages.html","95b6ecec0a440ff501e033d0233e4658"],["bower_components/iron-resizable-behavior/iron-resizable-behavior.html","ad663b95797a1cf47ddfc667b70372ee"],["bower_components/iron-scroll-target-behavior/iron-scroll-target-behavior.html","76d0dd190d8eface6d06b4b9ac8c4a68"],["bower_components/iron-selector/iron-multi-selectable.html","31c38f335502f5ab5769634f4172a100"],["bower_components/iron-selector/iron-selectable.html","53b47c13a34cad2d2873255193762d59"],["bower_components/iron-selector/iron-selection.html","410ec3e558fb0c2e66ccf23030a65aec"],["bower_components/iron-validatable-behavior/iron-validatable-behavior.html","d68ba1fa37bd24b359ca4845e66fe433"],["bower_components/neon-animation/animations/fade-in-animation.html","7bdd30f5126d96da24c21fcdca4fcfb0"],["bower_components/neon-animation/animations/fade-out-animation.html","3f2012017a7a62fbe625cf39c69a668e"],["bower_components/neon-animation/neon-animatable-behavior.html","6c723dde5257b0c48e2b7f294ffbbda9"],["bower_components/neon-animation/neon-animation-behavior.html","38ce6a047dabf57bc46a189eb7dd23b5"],["bower_components/neon-animation/neon-animation-runner-behavior.html","40ae6579f23d2f0de07c8e0920b47965"],["bower_components/paper-behaviors/paper-button-behavior.html","1dae7ff9050c725a91f6afe6668cb750"],["bower_components/paper-behaviors/paper-checked-element-behavior.html","5115d0df0b092f63672bd5f379ef1729"],["bower_components/paper-behaviors/paper-inky-focus-behavior.html","f3b7894412ff5aad2484c6a459dd2714"],["bower_components/paper-behaviors/paper-ripple-behavior.html","b88aed60586bd2ca3c20a4a5ce977050"],["bower_components/paper-button/paper-button.html","6a935e67a38ef16ad9bafac157a7eb16"],["bower_components/paper-card/paper-card.html","192bf4c7f9e63bba0cce9576e89da800"],["bower_components/paper-checkbox/paper-checkbox.html","20de6b36b6a7ea5b66068e3072e802ea"],["bower_components/paper-dialog-behavior/paper-dialog-behavior.html","fcc063e7b57f2fbb5631e6a5ef41060b"],["bower_components/paper-dialog-behavior/paper-dialog-shared-styles.html","b4ce145e5ba7930090317c23e8990811"],["bower_components/paper-dialog/paper-dialog.html","499c89f216d9c0aa4317f9b2d86a2a7f"],["bower_components/paper-dropdown-menu/paper-dropdown-menu-icons.html","5b53a861c536bc68421cdc8996697804"],["bower_components/paper-dropdown-menu/paper-dropdown-menu-shared-styles.html","006b032af38ebb3114272475e64f208f"],["bower_components/paper-dropdown-menu/paper-dropdown-menu.html","61c9d4c657ff3083685482657f966592"],["bower_components/paper-fab/paper-fab.html","87a45e750e9c258ebd903aba0164ee1e"],["bower_components/paper-icon-button/paper-icon-button.html","180dbc81a67a95eda6700855c880f75f"],["bower_components/paper-input/paper-input-addon-behavior.html","e1e4ca850180ff67335cfcf82cdfa66c"],["bower_components/paper-input/paper-input-behavior.html","eecded0d85ff331208579db484fc0fce"],["bower_components/paper-input/paper-input-char-counter.html","878bba9247d6b230b4eecbccffda315c"],["bower_components/paper-input/paper-input-container.html","2b0bf844ef9ec83fd90d2df95e0809ce"],["bower_components/paper-input/paper-input-error.html","686379f6cbfd878b797791bb9db0b2fa"],["bower_components/paper-input/paper-input.html","65903e5c49cc00d2a2657266c5449569"],["bower_components/paper-input/paper-textarea.html","51b52c206f8396db7afab477f857c154"],["bower_components/paper-item/paper-item-behavior.html","f92309b08210b0dd4c9b4b63ccaa6828"],["bower_components/paper-item/paper-item-shared-styles.html","15b1aad4ca2fa26e0e4229c854dc07ba"],["bower_components/paper-item/paper-item.html","ebd5973964f0a587a2b6bc1b778aadf5"],["bower_components/paper-listbox/paper-listbox.html","5110d7d4c2e8fe64f2edb83606fce5e4"],["bower_components/paper-menu-button/paper-menu-button-animations.html","a8d8938006ffb95bbaec75f10373e4b8"],["bower_components/paper-menu-button/paper-menu-button.html","6080a9e4ec28279bf414b2e16c0d7d5f"],["bower_components/paper-ripple/paper-ripple.html","c01ed86b7c513277c579ea958ee096f6"],["bower_components/paper-styles/color.html","0bee1212eacd6ea7fcc0c2e6211a9d52"],["bower_components/paper-styles/default-theme.html","e69931aff30bfe4671f0621ce4d52b9c"],["bower_components/paper-styles/element-styles/paper-material-styles.html","7fa473750d47f8cceac27f745711fb81"],["bower_components/paper-styles/shadow.html","0e0a41589c15fa772391a5f9bf5487de"],["bower_components/paper-styles/typography.html","37d88a94cb474c18a7451d9dc657a378"],["bower_components/paper-tabs/paper-tab.html","4149c700cb8f17994aa9ede9ba28f510"],["bower_components/paper-tabs/paper-tabs-icons.html","5fee261c14c6e205050652f8da680060"],["bower_components/paper-tabs/paper-tabs.html","f3dbfe9a93e077b21f80f730df78428f"],["bower_components/paper-toast/paper-toast.html","2cd97843f343cee93481e21da5769688"],["bower_components/polymer/lib/elements/array-selector.html","c34d6bfb62cd4c09e7cffce59411579e"],["bower_components/polymer/lib/elements/custom-style.html","4ef62f8f74e23ccea47c706aef66f0ad"],["bower_components/polymer/lib/elements/dom-bind.html","fd23c8e86236eb1f7ff2c16424895184"],["bower_components/polymer/lib/elements/dom-if.html","c4e7ebb46618a7393df294b55e136279"],["bower_components/polymer/lib/elements/dom-module.html","33cdf0eed03206c333502d2f3827875e"],["bower_components/polymer/lib/elements/dom-repeat.html","a6d44581cd5edbb4a4f4c80677ad0f7f"],["bower_components/polymer/lib/legacy/class.html","6e52d21379a98a0d99eae10f74edede1"],["bower_components/polymer/lib/legacy/legacy-element-mixin.html","72479ab029984b4f7415692d689b955d"],["bower_components/polymer/lib/legacy/mutable-data-behavior.html","7fc3134fb280d3ece9908b2a77bfb0a7"],["bower_components/polymer/lib/legacy/polymer-fn.html","a086b863b9ce6c5c6043043da275fe1d"],["bower_components/polymer/lib/legacy/polymer.dom.html","8be989187b082de77b6957ff53506010"],["bower_components/polymer/lib/legacy/templatizer-behavior.html","c4fe9e73f0155e2fc68360ff4e3ed0c0"],["bower_components/polymer/lib/mixins/element-mixin.html","cfd03ea5ffabb0b3aa52ea405732c58f"],["bower_components/polymer/lib/mixins/gesture-event-listeners.html","c83a188fabaa98f6304233744a743a42"],["bower_components/polymer/lib/mixins/mutable-data.html","c6ea58be7caccb95ac23f71f77b3af3a"],["bower_components/polymer/lib/mixins/property-accessors.html","6730776dca092ad27ee0128b126935f0"],["bower_components/polymer/lib/mixins/property-effects.html","bc7ef7301b462e77473768e4aff125b4"],["bower_components/polymer/lib/mixins/template-stamp.html","1adee2f298cae73d899b5063ca487c44"],["bower_components/polymer/lib/utils/array-splice.html","d7eaa537f60c4b70d308ed43af7e6674"],["bower_components/polymer/lib/utils/async.html","29b2820f0492de17d7afdec266c0bcac"],["bower_components/polymer/lib/utils/boot.html","c6e529cc82ed94f9be8ae1ce71273930"],["bower_components/polymer/lib/utils/case-map.html","401de7ce577768373fe6a7150dd43a9e"],["bower_components/polymer/lib/utils/debounce.html","51bcda070179a5e38177828465fd9636"],["bower_components/polymer/lib/utils/flattened-nodes-observer.html","1083f362be71533a69d2a45155a839fc"],["bower_components/polymer/lib/utils/flush.html","c4b6509fbb2d38db24ac90d0c6c0e37e"],["bower_components/polymer/lib/utils/gestures.html","0a495e97d3bc2591a82d3929db3e9d0b"],["bower_components/polymer/lib/utils/import-href.html","5dcdf73cb3b4b0aec86dfca90de8baeb"],["bower_components/polymer/lib/utils/mixin.html","680a68b940824785430a9f74cdd5983c"],["bower_components/polymer/lib/utils/path.html","3d3235f99f643378df5f2f0ddfa26e08"],["bower_components/polymer/lib/utils/render-status.html","f04da4700fc3a9cb97fe08b6f723c996"],["bower_components/polymer/lib/utils/resolve-url.html","2e45052a300d65c6b73f4dec39f14d28"],["bower_components/polymer/lib/utils/style-gather.html","10b9a8b034f93a301e9d7c817cf87ff7"],["bower_components/polymer/lib/utils/templatize.html","d680fa23a4806db4215e56cc2f231a5b"],["bower_components/polymer/lib/utils/unresolved.html","2ed3277470301933b1af10d413d8c614"],["bower_components/polymer/polymer-element.html","adee8924b73f74cd74190383feadf13e"],["bower_components/polymer/polymer.html","06fac75a2cb45d455be9f34dfe248800"],["bower_components/polymerfire/firebase-app-script.html","16e784d3645b8caacbdffebe9d1ee555"],["bower_components/polymerfire/firebase-app.html","f6db99ebf88b8e3895dea5c4d247324d"],["bower_components/polymerfire/firebase-auth-script.html","bb149ef28cb1d9bc1a4a86fed2bde3d1"],["bower_components/polymerfire/firebase-auth.html","5ce7b1a1063c736c11d44692b19d0f49"],["bower_components/polymerfire/firebase-common-behavior.html","a529b1cd272da3d403ca043293d345cf"],["bower_components/polymerfire/firebase-database-behavior.html","306efe18e3bfcfbe2a4ceb05ac032cb5"],["bower_components/polymerfire/firebase-database-script.html","66f101d87f467bdc75ecf00a16ebbd17"],["bower_components/polymerfire/firebase-document.html","4cc7fcb6faea68ece1aad37a6d97ad1a"],["bower_components/polymerfire/firebase-messaging-script.html","546b0aba2ae4613bc6433e4cfcea8f0c"],["bower_components/polymerfire/firebase-query.html","8cf1bbe9bf1f4eb937de7938f4640b1d"],["bower_components/polymerfire/firebase-storage-script.html","86ccc80ff844f990ecc8422d5434790f"],["bower_components/shadycss/apply-shim.html","e77c26755ebd590793dfd33295c90f4d"],["bower_components/shadycss/apply-shim.min.js","ceeaad90c0e6d9265c81f0ddf3a6612c"],["bower_components/shadycss/custom-style-interface.html","5bfbeb127a043a9adba50edd885945ee"],["bower_components/shadycss/custom-style-interface.min.js","c87605744df92a24f8a3faa0776bfd2e"],["index.html","93ab6f0870fc38804db909b6c35f514e"],["src/snd-app/snd-app.html","bb118f5c3380a8cc829998cf1dfa76c0"],["src/snd-chip/snd-chip.html","e93899b79446368810af285f18204cb1"],["src/snd-list/snd-list.html","d76c88779d41b48708e96c5d96815252"],["src/snd-new/snd-new.html","bbd6096b6d142dbc2d2978a1940b6cc9"],["src/snd-sheet/snd-sheet.html","5e6a6a46860edde959fe6e1707c9771d"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = '';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = 'index.html';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted(["\\/[^\\/\\.]*(\\?|$)"], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







