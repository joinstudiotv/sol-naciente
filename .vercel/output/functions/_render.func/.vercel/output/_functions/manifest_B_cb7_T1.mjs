import { h as decodeKey } from './chunks/astro/server_CYsYaCCC.mjs';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_DKkzE0WF.mjs';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/alan/Projects/sol-naciente/","adapterName":"@astrojs/vercel/serverless","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/astro@4.16.3_@types+node@22.7.6_rollup@4.24.0_typescript@5.6.3/node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/auth/signout","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/auth\\/signout$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"auth","dynamic":false,"spread":false}],[{"content":"signout","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/auth/signout.ts","pathname":"/api/auth/signout","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/auth/singin","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/auth\\/singin$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"auth","dynamic":false,"spread":false}],[{"content":"singin","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/auth/singin.ts","pathname":"/api/auth/singin","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"const t=document.getElementById(\"bbtn\"),r=document.getElementById(\"close\"),n=document.querySelector(\".mobile-nav\"),s=document.querySelector(\"body\");t.addEventListener(\"click\",()=>{t.classList.add(\"active\"),n.classList.add(\"active\"),s.classList.add(\"active\")});r.addEventListener(\"click\",()=>{t.classList.remove(\"active\"),n.classList.remove(\"active\"),s.classList.remove(\"active\")});const o=document.getElementById(\"title\"),e=o.getBoundingClientRect();document.addEventListener(\"mousemove\",function(c){const i=c.clientX-e.left,d=c.clientY-e.top,a=i/e.width*100,l=d/e.height*100;o.style.background=`radial-gradient(circle farthest-side at ${a}% ${l}%, var(--yellow) 0%, var(--brown) 34%)`});\n"}],"styles":[{"type":"external","src":"/_astro/cotizacion.CLEfGBMe.css"},{"type":"inline","content":"article[data-astro-cid-g62esh65]{padding:128px 32px;text-align:center;gap:128px}section[data-astro-cid-g62esh65]{gap:32px}p[data-astro-cid-g62esh65]{max-width:55ch}.form[data-astro-cid-g62esh65]{max-width:36ch;width:100%}input[data-astro-cid-g62esh65],textarea[data-astro-cid-g62esh65],label[data-astro-cid-g62esh65]{width:100%}.btn[data-astro-cid-g62esh65]{background:var(--brown)}@media (max-width: 700px){article[data-astro-cid-g62esh65]{padding:64px 16px;gap:64px}}\n"}],"routeData":{"route":"/cotizacion","isIndex":false,"type":"page","pattern":"^\\/cotizacion$","segments":[[{"content":"cotizacion","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/cotizacion.astro","pathname":"/cotizacion","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"const t=document.getElementById(\"bbtn\"),r=document.getElementById(\"close\"),n=document.querySelector(\".mobile-nav\"),s=document.querySelector(\"body\");t.addEventListener(\"click\",()=>{t.classList.add(\"active\"),n.classList.add(\"active\"),s.classList.add(\"active\")});r.addEventListener(\"click\",()=>{t.classList.remove(\"active\"),n.classList.remove(\"active\"),s.classList.remove(\"active\")});const o=document.getElementById(\"title\"),e=o.getBoundingClientRect();document.addEventListener(\"mousemove\",function(c){const i=c.clientX-e.left,d=c.clientY-e.top,a=i/e.width*100,l=d/e.height*100;o.style.background=`radial-gradient(circle farthest-side at ${a}% ${l}%, var(--yellow) 0%, var(--brown) 34%)`});\n"}],"styles":[{"type":"external","src":"/_astro/cotizacion.CLEfGBMe.css"}],"routeData":{"route":"/dashboard","isIndex":false,"type":"page","pattern":"^\\/dashboard$","segments":[[{"content":"dashboard","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/dashboard.astro","pathname":"/dashboard","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"const t=document.getElementById(\"bbtn\"),r=document.getElementById(\"close\"),n=document.querySelector(\".mobile-nav\"),s=document.querySelector(\"body\");t.addEventListener(\"click\",()=>{t.classList.add(\"active\"),n.classList.add(\"active\"),s.classList.add(\"active\")});r.addEventListener(\"click\",()=>{t.classList.remove(\"active\"),n.classList.remove(\"active\"),s.classList.remove(\"active\")});const o=document.getElementById(\"title\"),e=o.getBoundingClientRect();document.addEventListener(\"mousemove\",function(c){const i=c.clientX-e.left,d=c.clientY-e.top,a=i/e.width*100,l=d/e.height*100;o.style.background=`radial-gradient(circle farthest-side at ${a}% ${l}%, var(--yellow) 0%, var(--brown) 34%)`});\n"}],"styles":[{"type":"external","src":"/_astro/cotizacion.CLEfGBMe.css"},{"type":"external","src":"/_astro/empleo.CmpC4_Qn.css"}],"routeData":{"route":"/empleo","isIndex":false,"type":"page","pattern":"^\\/empleo$","segments":[[{"content":"empleo","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/empleo.astro","pathname":"/empleo","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"const t=document.getElementById(\"bbtn\"),r=document.getElementById(\"close\"),n=document.querySelector(\".mobile-nav\"),s=document.querySelector(\"body\");t.addEventListener(\"click\",()=>{t.classList.add(\"active\"),n.classList.add(\"active\"),s.classList.add(\"active\")});r.addEventListener(\"click\",()=>{t.classList.remove(\"active\"),n.classList.remove(\"active\"),s.classList.remove(\"active\")});const o=document.getElementById(\"title\"),e=o.getBoundingClientRect();document.addEventListener(\"mousemove\",function(c){const i=c.clientX-e.left,d=c.clientY-e.top,a=i/e.width*100,l=d/e.height*100;o.style.background=`radial-gradient(circle farthest-side at ${a}% ${l}%, var(--yellow) 0%, var(--brown) 34%)`});\n"}],"styles":[{"type":"external","src":"/_astro/cotizacion.CLEfGBMe.css"},{"type":"inline","content":"p[data-astro-cid-tvv6smhg]{line-height:1.4;text-align:center;font-size:48px;max-width:75vw;margin:auto;padding:128px 16px 0}strong[data-astro-cid-tvv6smhg]{color:var(--yellow)}.deco[data-astro-cid-tvv6smhg]{top:0;width:100%;height:auto}.color[data-astro-cid-tvv6smhg]{inset:0;background:linear-gradient(0,#f8ab2100 50%,var(--yellow))}.hero[data-astro-cid-tvv6smhg] img[data-astro-cid-tvv6smhg]{filter:brightness(.75);width:100%;height:70vh}article[data-astro-cid-tvv6smhg]{max-width:1080px;margin:auto;display:grid;grid-template-columns:1fr 1fr;gap:32px;padding:128px 16px}.img[data-astro-cid-tvv6smhg] img[data-astro-cid-tvv6smhg]{width:100%;height:100%;transition:.2s ease-in-out;filter:grayscale(1)}.img[data-astro-cid-tvv6smhg]{border-radius:16px;overflow:hidden}.img[data-astro-cid-tvv6smhg]:hover img[data-astro-cid-tvv6smhg]{transform:scale(1.2);filter:grayscale(0)}.sec[data-astro-cid-tvv6smhg]{grid-column-start:2;grid-column-end:3;grid-row-start:1;grid-row-end:3}.last[data-astro-cid-tvv6smhg]{grid-column-start:1;grid-column-end:3;grid-row-start:4;grid-row-end:5}@media (max-width: 960px){.hero[data-astro-cid-tvv6smhg] img[data-astro-cid-tvv6smhg]{height:400px}p[data-astro-cid-tvv6smhg]{font-size:36px}}@media (max-width: 700px){p[data-astro-cid-tvv6smhg]{font-size:24px;padding:64px 16px 0;max-width:unset}article[data-astro-cid-tvv6smhg]{padding:64px 16px;grid-template-columns:1fr}.sec[data-astro-cid-tvv6smhg],.last[data-astro-cid-tvv6smhg]{grid-column-start:unset;grid-column-end:unset;grid-row-start:unset;grid-row-end:unset}.img[data-astro-cid-tvv6smhg] img[data-astro-cid-tvv6smhg]{filter:grayscale(0)}.img[data-astro-cid-tvv6smhg]:hover img[data-astro-cid-tvv6smhg]{transform:scale(1)}}\n"}],"routeData":{"route":"/galeria","isIndex":false,"type":"page","pattern":"^\\/galeria$","segments":[[{"content":"galeria","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/galeria.astro","pathname":"/galeria","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"const t=document.getElementById(\"bbtn\"),r=document.getElementById(\"close\"),n=document.querySelector(\".mobile-nav\"),s=document.querySelector(\"body\");t.addEventListener(\"click\",()=>{t.classList.add(\"active\"),n.classList.add(\"active\"),s.classList.add(\"active\")});r.addEventListener(\"click\",()=>{t.classList.remove(\"active\"),n.classList.remove(\"active\"),s.classList.remove(\"active\")});const o=document.getElementById(\"title\"),e=o.getBoundingClientRect();document.addEventListener(\"mousemove\",function(c){const i=c.clientX-e.left,d=c.clientY-e.top,a=i/e.width*100,l=d/e.height*100;o.style.background=`radial-gradient(circle farthest-side at ${a}% ${l}%, var(--yellow) 0%, var(--brown) 34%)`});\n"}],"styles":[{"type":"external","src":"/_astro/cotizacion.CLEfGBMe.css"},{"type":"inline","content":".text[data-astro-cid-noeej2nj]{gap:32px;padding:64px;text-align:end}.text[data-astro-cid-noeej2nj] h1[data-astro-cid-noeej2nj]{text-align:end}.two[data-astro-cid-noeej2nj]{display:grid;grid-template-columns:1fr 1fr;align-items:center;background:var(--peach)}.two[data-astro-cid-noeej2nj] .rel[data-astro-cid-noeej2nj]{height:100%}.deco[data-astro-cid-noeej2nj]{top:0;width:100%;height:auto}.color[data-astro-cid-noeej2nj]{inset:0;background:linear-gradient(0,#f8ab2100 50%,#f8ab2159)}.hero[data-astro-cid-noeej2nj] img[data-astro-cid-noeej2nj]{filter:brightness(.75);width:100%;height:87vh}.valores[data-astro-cid-noeej2nj]{padding:64px 32px;gap:96px;color:#fff;background:var(--yellow)}.valores[data-astro-cid-noeej2nj] .fcol[data-astro-cid-noeej2nj]{gap:1em}.valores[data-astro-cid-noeej2nj] svg[data-astro-cid-noeej2nj]{width:16vw;height:300px}.gallery[data-astro-cid-noeej2nj]{overflow:hidden;gap:1em;left:0;right:0;top:-200px}.gallery[data-astro-cid-noeej2nj] img[data-astro-cid-noeej2nj]:nth-child(2n-1){transform:translateY(32px)}.gallery[data-astro-cid-noeej2nj] img[data-astro-cid-noeej2nj]:nth-child(2n){transform:translateY(-32px)}.valores[data-astro-cid-noeej2nj] img[data-astro-cid-noeej2nj]{width:110px;height:86px;aspect-ratio:unset}h1[data-astro-cid-noeej2nj]{font-family:Poppins}h3[data-astro-cid-noeej2nj]{margin:0;text-align:center}.cont[data-astro-cid-noeej2nj]{overflow:hidden;margin-top:312px;background:var(--peach);padding-bottom:64px;border-bottom:32px solid var(--brown)}.cont[data-astro-cid-noeej2nj]>h1[data-astro-cid-noeej2nj]{font-family:Dancing Script;padding:256px 32px 64px}.separator[data-astro-cid-noeej2nj]{background:var(--brown);height:100%;width:2px}.cols[data-astro-cid-noeej2nj]{display:grid;grid-template-columns:1fr 2px 1fr;gap:64px;margin:auto;padding:32px;max-width:1080px}article[data-astro-cid-noeej2nj]{text-align:center;gap:.5em}@media (max-width: 960px){.text[data-astro-cid-noeej2nj]{gap:16px;padding:32px}.valores[data-astro-cid-noeej2nj]{gap:64px}}@media (max-width: 700px){.hero[data-astro-cid-noeej2nj] img[data-astro-cid-noeej2nj]{height:320px}.valores[data-astro-cid-noeej2nj]{flex-direction:column}.valores[data-astro-cid-noeej2nj] .fcol[data-astro-cid-noeej2nj]{width:100%}.valores[data-astro-cid-noeej2nj] h3[data-astro-cid-noeej2nj]{font-size:32px}.valores[data-astro-cid-noeej2nj] svg[data-astro-cid-noeej2nj]{width:100%;height:auto}.cols[data-astro-cid-noeej2nj]{grid-template-columns:1fr;padding:32px 16px}.two[data-astro-cid-noeej2nj]{grid-template-columns:1fr}.text[data-astro-cid-noeej2nj]{align-items:center;text-align:center;padding:64px 16px}.text[data-astro-cid-noeej2nj] h1[data-astro-cid-noeej2nj]{text-align:center}.cont[data-astro-cid-noeej2nj]>h1[data-astro-cid-noeej2nj]{font-size:48px}.cont[data-astro-cid-noeej2nj]{border-bottom:16px solid var(--brown)}.separator[data-astro-cid-noeej2nj]{height:2px;width:100%}}\n"}],"routeData":{"route":"/nosotros","isIndex":false,"type":"page","pattern":"^\\/nosotros$","segments":[[{"content":"nosotros","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/nosotros.astro","pathname":"/nosotros","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"const t=document.getElementById(\"bbtn\"),r=document.getElementById(\"close\"),n=document.querySelector(\".mobile-nav\"),s=document.querySelector(\"body\");t.addEventListener(\"click\",()=>{t.classList.add(\"active\"),n.classList.add(\"active\"),s.classList.add(\"active\")});r.addEventListener(\"click\",()=>{t.classList.remove(\"active\"),n.classList.remove(\"active\"),s.classList.remove(\"active\")});const o=document.getElementById(\"title\"),e=o.getBoundingClientRect();document.addEventListener(\"mousemove\",function(c){const i=c.clientX-e.left,d=c.clientY-e.top,a=i/e.width*100,l=d/e.height*100;o.style.background=`radial-gradient(circle farthest-side at ${a}% ${l}%, var(--yellow) 0%, var(--brown) 34%)`});\n"}],"styles":[{"type":"external","src":"/_astro/cotizacion.CLEfGBMe.css"},{"type":"inline","content":".deco[data-astro-cid-wrzvmyuk]{top:0;width:100%;height:auto}.hero[data-astro-cid-wrzvmyuk] img[data-astro-cid-wrzvmyuk]{width:100%;height:400px;filter:brightness(.5)}.hero[data-astro-cid-wrzvmyuk] h1[data-astro-cid-wrzvmyuk]{color:#fff;left:0;right:0;bottom:0;padding:32px;text-align:center}.sections[data-astro-cid-wrzvmyuk]{padding-block:128px;gap:128px}section[data-astro-cid-wrzvmyuk] h1[data-astro-cid-wrzvmyuk],p[data-astro-cid-wrzvmyuk]{color:#000;text-align:inherit}section[data-astro-cid-wrzvmyuk]{width:80vw;display:grid;align-items:center;gap:64px;background:var(--peach)}section[data-astro-cid-wrzvmyuk]:nth-child(2n){border-radius:0 360px 360px 0;grid-template-columns:1fr 1.5fr}section[data-astro-cid-wrzvmyuk]:nth-child(2n-1){border-radius:360px 0 0 360px;grid-template-columns:1.5fr 1fr;align-self:flex-end}section[data-astro-cid-wrzvmyuk]:nth-child(2n) .fcol[data-astro-cid-wrzvmyuk]{padding:32px 128px 32px 0;text-align:start}section[data-astro-cid-wrzvmyuk]:nth-child(2n-1) .fcol[data-astro-cid-wrzvmyuk]{padding:32px 0 32px 128px;text-align:end}section[data-astro-cid-wrzvmyuk] .fcol[data-astro-cid-wrzvmyuk]{gap:1em}section[data-astro-cid-wrzvmyuk] img[data-astro-cid-wrzvmyuk]{width:100%;min-height:100%;aspect-ratio:1;height:auto}@media (max-width: 1420px){section[data-astro-cid-wrzvmyuk]{width:85vw}}@media (max-width: 960px){.hero[data-astro-cid-wrzvmyuk] img[data-astro-cid-wrzvmyuk]{height:256px}.sections[data-astro-cid-wrzvmyuk]{padding-block:64px;gap:64px}section[data-astro-cid-wrzvmyuk]{gap:32px;width:93vw}section[data-astro-cid-wrzvmyuk]:nth-child(2n) .fcol[data-astro-cid-wrzvmyuk]{padding:32px 64px 32px 0}section[data-astro-cid-wrzvmyuk]:nth-child(2n-1) .fcol[data-astro-cid-wrzvmyuk]{padding:32px 0 32px 64px}}@media (max-width: 700px){.hero[data-astro-cid-wrzvmyuk] img[data-astro-cid-wrzvmyuk]{height:136px}.hero[data-astro-cid-wrzvmyuk] h1[data-astro-cid-wrzvmyuk]{padding:16px}section[data-astro-cid-wrzvmyuk]{width:100%;gap:0;grid-template-columns:1fr!important;border-radius:0!important}section[data-astro-cid-wrzvmyuk] .fcol[data-astro-cid-wrzvmyuk]{text-align:center!important;padding:32px 16px!important}section[data-astro-cid-wrzvmyuk] img[data-astro-cid-wrzvmyuk]{grid-row:1}}\n"}],"routeData":{"route":"/servicios","isIndex":false,"type":"page","pattern":"^\\/servicios$","segments":[[{"content":"servicios","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/servicios.astro","pathname":"/servicios","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"*{box-sizing:border-box}:root{--brown: #291B05;--yellow: #F8AB21;--gray: #909090;--peach: #EFECE8}:root,input,textarea,button{font-family:Poppins;font-weight:300;font-size:24px}body{margin:0}body.active{overflow:hidden}img,svg,video{display:block;flex-shrink:0;object-fit:cover}button{padding:0;border:none;background:none}p{margin:0}button:active{scale:.95}label{display:flex;flex-direction:column}input,textarea{background:transparent;padding-block:10px;border:none;border-bottom:1px solid black}input:focus,textarea:focus{outline:none;background:#e3ded4}h1{font-size:64px;line-height:1;text-align:center}.abs{position:absolute}.rel{position:relative}.fc{display:flex;align-items:center}.fcc{display:flex;align-items:center;justify-content:center}.fcol{display:flex;flex-direction:column}.between{justify-content:space-between}.p4{padding:1em}.g4{gap:1em}.mo{display:none}.btn{padding:.5em 1em;border-radius:36px;font-weight:500;color:#fff;text-decoration:none}.btn-brown{background:var(--brown)}.btn-brown:hover{background:#493412}.btn-yellow{background:var(--yellow)}.btn-yellow:hover{background:#ffc861}@media (max-width: 1420px){:root,input,textarea,button{font-size:20px}h1{font-size:52px}}@media (max-width: 960px){:root,input,textarea,button{font-size:18px}.do{display:none}.mo{display:block}h1{font-size:36px}}@media (max-width: 700px){:root,input,textarea,button{font-size:16px}h1{font-size:30px}}\n"}],"routeData":{"route":"/signin","isIndex":false,"type":"page","pattern":"^\\/signin$","segments":[[{"content":"signin","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/signin.astro","pathname":"/signin","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"const t=document.getElementById(\"bbtn\"),r=document.getElementById(\"close\"),n=document.querySelector(\".mobile-nav\"),s=document.querySelector(\"body\");t.addEventListener(\"click\",()=>{t.classList.add(\"active\"),n.classList.add(\"active\"),s.classList.add(\"active\")});r.addEventListener(\"click\",()=>{t.classList.remove(\"active\"),n.classList.remove(\"active\"),s.classList.remove(\"active\")});const o=document.getElementById(\"title\"),e=o.getBoundingClientRect();document.addEventListener(\"mousemove\",function(c){const i=c.clientX-e.left,d=c.clientY-e.top,a=i/e.width*100,l=d/e.height*100;o.style.background=`radial-gradient(circle farthest-side at ${a}% ${l}%, var(--yellow) 0%, var(--brown) 34%)`});\n"}],"styles":[{"type":"inline","content":"img[data-astro-cid-dohjnao5]{aspect-ratio:640 / 360;width:100%;height:auto;border-radius:24px}article[data-astro-cid-dohjnao5]{background:var(--peach);border-radius:24px}article[data-astro-cid-dohjnao5]>p[data-astro-cid-dohjnao5]{text-align:center}.fcol[data-astro-cid-dohjnao5]{align-items:end;inset:0;background:#00000057;width:100%;padding:32px;border-radius:24px}.fcol[data-astro-cid-dohjnao5] h2[data-astro-cid-dohjnao5],.fcol[data-astro-cid-dohjnao5] p[data-astro-cid-dohjnao5]{color:#fff}.deco[data-astro-cid-j7pv25f6]{top:0}.cards[data-astro-cid-j7pv25f6]{display:grid;grid-template-columns:1fr 1fr;gap:64px;padding:128px 32px 0;max-width:1080px;margin:auto}.hero[data-astro-cid-j7pv25f6] .big[data-astro-cid-j7pv25f6]{width:100%;max-width:1080px;left:0;right:0;margin:auto;bottom:0}.color[data-astro-cid-j7pv25f6]{background:linear-gradient(0,#1a1002c7,transparent);inset:0}.hero[data-astro-cid-j7pv25f6] .fcol[data-astro-cid-j7pv25f6]{padding:32px;width:75%}.hero[data-astro-cid-j7pv25f6] h1[data-astro-cid-j7pv25f6],.hero[data-astro-cid-j7pv25f6] p[data-astro-cid-j7pv25f6]{color:#fff;text-align:start}span[data-astro-cid-j7pv25f6]{color:var(--yellow)}svg[data-astro-cid-j7pv25f6]{width:100%;height:auto}h1[data-astro-cid-j7pv25f6],p[data-astro-cid-j7pv25f6]{text-align:center}.big-img[data-astro-cid-j7pv25f6]{width:100%;height:calc(100% + 256px);top:-128px;z-index:-1}.hero[data-astro-cid-j7pv25f6] video[data-astro-cid-j7pv25f6]{height:unset;width:100%;aspect-ratio:auto 1736 / 971}.platillos[data-astro-cid-j7pv25f6]{padding:17vw 32px 128px;gap:32px;color:#fff;background:var(--yellow);position:relative}.platillos[data-astro-cid-j7pv25f6] h1[data-astro-cid-j7pv25f6],.platillos[data-astro-cid-j7pv25f6] p[data-astro-cid-j7pv25f6]{max-width:600px;margin:auto}.platillos[data-astro-cid-j7pv25f6] img[data-astro-cid-j7pv25f6]{width:100%;height:unset;position:absolute;top:0;left:0;right:0}.platillos[data-astro-cid-j7pv25f6] h1[data-astro-cid-j7pv25f6]{color:#fff}.card[data-astro-cid-j7pv25f6]{margin:128px auto;background:#fff;max-width:1048px;display:grid;grid-template-columns:1fr 1fr;border-radius:48px;overflow:hidden}.card[data-astro-cid-j7pv25f6] img[data-astro-cid-j7pv25f6]{width:100%;aspect-ratio:unset;height:100%}article[data-astro-cid-j7pv25f6]{padding:64px 32px;gap:32px}@media (max-width: 1420px){.platillos[data-astro-cid-j7pv25f6]{padding:256px 16px 64px}.platillos[data-astro-cid-j7pv25f6] img[data-astro-cid-j7pv25f6]{height:212px}}@media (max-width: 960px){.cards[data-astro-cid-j7pv25f6]{padding:64px 32px;gap:32px}.hero[data-astro-cid-j7pv25f6] img[data-astro-cid-j7pv25f6]{aspect-ratio:1.25}article[data-astro-cid-j7pv25f6]{padding:32px 16px;gap:16px}.card[data-astro-cid-j7pv25f6]{margin:64px}}@media (max-width: 700px){.color[data-astro-cid-j7pv25f6]{display:none}.hero[data-astro-cid-j7pv25f6] h1[data-astro-cid-j7pv25f6],.hero[data-astro-cid-j7pv25f6] p[data-astro-cid-j7pv25f6]{color:var(--brown);text-align:center}.hero[data-astro-cid-j7pv25f6] .big[data-astro-cid-j7pv25f6]{position:static}.hero[data-astro-cid-j7pv25f6] .fcol[data-astro-cid-j7pv25f6]{padding:1em;width:100%}.cards[data-astro-cid-j7pv25f6]{grid-template-columns:1fr;padding:32px 16px}.platillos[data-astro-cid-j7pv25f6]{padding:128px 16px 32px}.platillos[data-astro-cid-j7pv25f6] img[data-astro-cid-j7pv25f6]{height:100px}.card[data-astro-cid-j7pv25f6]{grid-template-columns:1fr;border-radius:0;margin:0}.card[data-astro-cid-j7pv25f6] img[data-astro-cid-j7pv25f6]{grid-row:1}}\n"},{"type":"external","src":"/_astro/cotizacion.CLEfGBMe.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}}],"base":"/","trailingSlash":"never","compressHTML":true,"componentMetadata":[["/Users/alan/Projects/sol-naciente/src/pages/signin.astro",{"propagation":"none","containsHead":true}],["/Users/alan/Projects/sol-naciente/src/pages/cotizacion.astro",{"propagation":"none","containsHead":true}],["/Users/alan/Projects/sol-naciente/src/pages/dashboard.astro",{"propagation":"none","containsHead":true}],["/Users/alan/Projects/sol-naciente/src/pages/empleo.astro",{"propagation":"none","containsHead":true}],["/Users/alan/Projects/sol-naciente/src/pages/galeria.astro",{"propagation":"none","containsHead":true}],["/Users/alan/Projects/sol-naciente/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/alan/Projects/sol-naciente/src/pages/nosotros.astro",{"propagation":"none","containsHead":true}],["/Users/alan/Projects/sol-naciente/src/pages/servicios.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/api/auth/signout@_@ts":"pages/api/auth/signout.astro.mjs","\u0000@astro-page:src/pages/api/auth/singin@_@ts":"pages/api/auth/singin.astro.mjs","\u0000@astro-page:src/pages/cotizacion@_@astro":"pages/cotizacion.astro.mjs","\u0000@astro-page:src/pages/dashboard@_@astro":"pages/dashboard.astro.mjs","\u0000@astro-page:node_modules/.pnpm/astro@4.16.3_@types+node@22.7.6_rollup@4.24.0_typescript@5.6.3/node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/signin@_@astro":"pages/signin.astro.mjs","\u0000@astro-page:src/pages/empleo@_@astro":"pages/empleo.astro.mjs","\u0000@astro-page:src/pages/nosotros@_@astro":"pages/nosotros.astro.mjs","\u0000@astro-page:src/pages/servicios@_@astro":"pages/servicios.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:src/pages/galeria@_@astro":"pages/galeria.astro.mjs","/Users/alan/Projects/sol-naciente/node_modules/.pnpm/astro@4.16.3_@types+node@22.7.6_rollup@4.24.0_typescript@5.6.3/node_modules/astro/dist/env/setup.js":"chunks/astro/env-setup_Cr6XTFvb.mjs","\u0000@astrojs-manifest":"manifest_B_cb7_T1.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.GN3Wk9Tm.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/galeria.DUUMPldk.jpg","/_astro/img3.DDyH5bkj.png","/_astro/img2.C2640lGg.png","/_astro/img1.BPJkfj27.png","/_astro/img4.cUmlSvfU.png","/_astro/img5.CAOjdzPU.png","/_astro/img6.CU13ciJm.png","/_astro/top1.DI5K1T96.png","/_astro/top4.BxFsxROV.png","/_astro/top3.CrxWs9tJ.png","/_astro/top2.BaB2_6JE.png","/_astro/coldplay.Cse6NozC.jpg","/_astro/wasa.CWmdl7qW.jpg","/_astro/serv1.BPfPDXoF.jpg","/_astro/serv2.BcMf1CEG.png","/_astro/serv3.nkvPd-W0.png","/_astro/serv4.DwJUXnVE.png","/_astro/cubiertos.CwqgzJjn.png","/_astro/tech.CUoXEcic.jpg","/_astro/f1.Np9KzsiW.jpg","/_astro/fondo.BG0YLsUv.png","/_astro/valores.4tx8HW3Q.png","/_astro/out.DB731T8R.jpg","/_astro/cotizacion.CLEfGBMe.css","/_astro/empleo.CmpC4_Qn.css","/apple-touch-icon.png","/big.avif","/favicon-48x48.png","/favicon.ico","/favicon.svg","/output.webm","/portofino.woff2","/poster.avif","/site.webmanifest","/small.avif","/web-app-manifest-192x192.png","/web-app-manifest-512x512.png"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"5AdMTU0rCTNIZJqywY7JxOdCgzar9dUsfIz6QTglJjQ=","experimentalEnvGetSecretEnabled":false});

export { manifest };
