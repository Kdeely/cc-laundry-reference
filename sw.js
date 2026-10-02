const VERSION="ccc-ref-v1.6-"+"2026-10-02";
const CORE=["./","./index.html","./manifest.webmanifest","./icon.svg","./icon-192.png","./icon-512.png"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(VERSION).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting()));});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==VERSION).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener("fetch",e=>{
  const u=new URL(e.request.url);
  if(e.request.mode==="navigate"||CORE.some(p=>u.pathname.endsWith(p.replace("./","/"))||u.pathname.endsWith("/"))){
    // page: network first so a new deploy shows up, cache when offline
    e.respondWith(fetch(e.request).then(r=>{const cp=r.clone();caches.open(VERSION).then(c=>c.put(e.request,cp));return r;}).catch(()=>caches.match(e.request).then(r=>r||caches.match("./index.html"))));
    return;
  }
  if(u.hostname.endsWith("googleapis.com")||u.hostname.endsWith("gstatic.com")){
    // fonts: cache first, fall back to network, fail quietly offline
    e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(res=>{const cp=res.clone();caches.open(VERSION).then(c=>c.put(e.request,cp));return res;}).catch(()=>new Response("",{status:503}))));
  }
});