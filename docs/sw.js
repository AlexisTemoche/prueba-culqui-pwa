if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let o={};const t=e=>i(e,l),a={module:{uri:l},exports:o,require:t};s[l]=Promise.all(n.map((e=>a[e]||t(e)))).then((e=>(r(...e),o)))}}define(["./workbox-cd63daf5"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/ContainerComponent-b0f3cbd3.js",revision:null},{url:"assets/HistoryOfEarningsAndOperationsPage-b9d56170.js",revision:null},{url:"assets/index-1fc94b7e.css",revision:null},{url:"assets/index-b0f42cb7.js",revision:null},{url:"assets/logo_black-bf0300a4.svg",revision:null},{url:"assets/logo_white-fa4c68eb.svg",revision:null},{url:"assets/NotFoundPage-ef874721.js",revision:null},{url:"assets/PaymentOfServicesPage-34277d7d.js",revision:null},{url:"assets/RechargesPage-2875652e.js",revision:null},{url:"assets/RechargesPage-ed9f3eb2.css",revision:null},{url:"icono-culqi.ico",revision:"046a01ed6caebe7de5fb5c6f1e88aa37"},{url:"index.html",revision:"fd298ecab8b5bc97eb9aea3c63e67a96"},{url:"registerSW.js",revision:"04ade53065357aaf1f674f6be422d887"},{url:"manifest.webmanifest",revision:"447e7fe17c55ffc68dd91c980220f1d2"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
