import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_HsbnDPG_.mjs';
import { manifest } from './manifest_B_cb7_T1.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/auth/signout.astro.mjs');
const _page2 = () => import('./pages/api/auth/singin.astro.mjs');
const _page3 = () => import('./pages/cotizacion.astro.mjs');
const _page4 = () => import('./pages/dashboard.astro.mjs');
const _page5 = () => import('./pages/empleo.astro.mjs');
const _page6 = () => import('./pages/galeria.astro.mjs');
const _page7 = () => import('./pages/nosotros.astro.mjs');
const _page8 = () => import('./pages/servicios.astro.mjs');
const _page9 = () => import('./pages/signin.astro.mjs');
const _page10 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/.pnpm/astro@4.16.3_@types+node@22.7.6_rollup@4.24.0_typescript@5.6.3/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/auth/signout.ts", _page1],
    ["src/pages/api/auth/singin.ts", _page2],
    ["src/pages/cotizacion.astro", _page3],
    ["src/pages/dashboard.astro", _page4],
    ["src/pages/empleo.astro", _page5],
    ["src/pages/galeria.astro", _page6],
    ["src/pages/nosotros.astro", _page7],
    ["src/pages/servicios.astro", _page8],
    ["src/pages/signin.astro", _page9],
    ["src/pages/index.astro", _page10]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "dba0e3f4-7a56-4448-8637-d441d609b3e4",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
