if(!self.define){let e,s={};const c=(c,a)=>(c=new URL(c+".js",a).href,s[c]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=s,document.head.appendChild(e)}else e=c,importScripts(c),s()})).then((()=>{let e=s[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(a,i)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let t={};const r=e=>c(e,n),d={module:{uri:n},exports:t,require:r};s[n]=Promise.all(a.map((e=>d[e]||r(e)))).then((e=>(i(...e),t)))}}define(["./workbox-5f5b08d6"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/QqN9gG4A37n_BIUJDhM6C/_buildManifest.js",revision:"18e9b0fbeec647219d37863b2f91c67c"},{url:"/_next/static/QqN9gG4A37n_BIUJDhM6C/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/361-8592bce6d0efb313.js",revision:"8592bce6d0efb313"},{url:"/_next/static/chunks/3fff1979-3c55062582081192.js",revision:"3c55062582081192"},{url:"/_next/static/chunks/framework-4556c45dd113b893.js",revision:"4556c45dd113b893"},{url:"/_next/static/chunks/main-3fd3e3edfc037831.js",revision:"3fd3e3edfc037831"},{url:"/_next/static/chunks/pages/MyAccount-ac4d02060fee5907.js",revision:"ac4d02060fee5907"},{url:"/_next/static/chunks/pages/_app-7fc3abbaa7716699.js",revision:"7fc3abbaa7716699"},{url:"/_next/static/chunks/pages/_error-a4ba2246ff8fb532.js",revision:"a4ba2246ff8fb532"},{url:"/_next/static/chunks/pages/categories/%5Bid%5D-635eccd22e9bf2fe.js",revision:"635eccd22e9bf2fe"},{url:"/_next/static/chunks/pages/checkout-807beeb5dbafd768.js",revision:"807beeb5dbafd768"},{url:"/_next/static/chunks/pages/createAccount-881ab4bc0d576c87.js",revision:"881ab4bc0d576c87"},{url:"/_next/static/chunks/pages/dashboard-e349311aafe3b17c.js",revision:"e349311aafe3b17c"},{url:"/_next/static/chunks/pages/dashboard/edit/%5Bid%5D-34cf1fe9ee76cb37.js",revision:"34cf1fe9ee76cb37"},{url:"/_next/static/chunks/pages/index-032dca9a639848b9.js",revision:"032dca9a639848b9"},{url:"/_next/static/chunks/pages/login-9ebb2498d1396577.js",revision:"9ebb2498d1396577"},{url:"/_next/static/chunks/pages/password-245be6db71444da5.js",revision:"245be6db71444da5"},{url:"/_next/static/chunks/pages/password/success-a2452b5cc5526125.js",revision:"a2452b5cc5526125"},{url:"/_next/static/chunks/pages/product/%5Bid%5D-9a7435fd77a03aa9.js",revision:"9a7435fd77a03aa9"},{url:"/_next/static/chunks/pages/send-5e070d3f51fc7372.js",revision:"5e070d3f51fc7372"},{url:"/_next/static/chunks/polyfills-0d1b80a048d4787e.js",revision:"40ccea369337cec877151c906f22814d"},{url:"/_next/static/chunks/webpack-9b312e20a4e32339.js",revision:"9b312e20a4e32339"},{url:"/_next/static/css/04d3d46dfda91b13.css",revision:"04d3d46dfda91b13"},{url:"/_next/static/css/07dedf108fba8822.css",revision:"07dedf108fba8822"},{url:"/_next/static/css/131f07766795b20c.css",revision:"131f07766795b20c"},{url:"/_next/static/css/35ef28365cf7e3d0.css",revision:"35ef28365cf7e3d0"},{url:"/_next/static/css/4ae3ab28a15f1783.css",revision:"4ae3ab28a15f1783"},{url:"/_next/static/css/5cccdf0dbcc5a992.css",revision:"5cccdf0dbcc5a992"},{url:"/_next/static/css/62602c3ccdac0ba2.css",revision:"62602c3ccdac0ba2"},{url:"/_next/static/css/8d5278e9115880d1.css",revision:"8d5278e9115880d1"},{url:"/_next/static/css/a4430f08e5c99f95.css",revision:"a4430f08e5c99f95"},{url:"/_next/static/css/a765c38b1171e434.css",revision:"a765c38b1171e434"},{url:"/_next/static/css/ce4b7d75356a8ab3.css",revision:"ce4b7d75356a8ab3"},{url:"/_next/static/css/cf2a91da1d5292b0.css",revision:"cf2a91da1d5292b0"},{url:"/_next/static/css/f77b1d479d690538.css",revision:"f77b1d479d690538"},{url:"/_next/static/media/bt_add_to_cart.fb1463ea.svg",revision:"71145515323e376971e1802aa000b90e"},{url:"/_next/static/media/bt_added_to_cart.45632f53.svg",revision:"63405dfb04c4269ecfcc8dfd667cc12f"},{url:"/_next/static/media/email.d46af11e.svg",revision:"1a348c2540a98537a3257bdc67bd5667"},{url:"/_next/static/media/flechita.1c152575.svg",revision:"5d3b853e10a449f36ca6a3f9e8ea95a6"},{url:"/_next/static/media/icon_close.e791344b.png",revision:"e9796d47eb72b46bcaa1f27a41a0ff4b"},{url:"/_next/static/media/icon_menu.b70fc14a.svg",revision:"23ae2bbff5a3a0e37d238045dd321760"},{url:"/_next/static/media/icon_shopping_cart.665a6046.svg",revision:"cd2cb126a70d30fd14c927571fd1920e"},{url:"/_next/static/media/placeholder.dfb9cc89.jpg",revision:"6684f3589c924acf182ad5dccccba156"},{url:"/favicon.ico",revision:"02865aac8c5e69766f02335f8ae9b19b"},{url:"/icon-192x192.png",revision:"02865aac8c5e69766f02335f8ae9b19b"},{url:"/icon-256x256.png",revision:"ab5ffac7530921477c9879e1b327d53e"},{url:"/icon-384x384.png",revision:"79e97ef41b17b897040cdff0138a3671"},{url:"/icon-512x512.png",revision:"083cc46b5d31ff36989f9752c09d8e44"},{url:"/manifest.json",revision:"ef6e802e642397f6979968fa8e818eac"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:c,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
