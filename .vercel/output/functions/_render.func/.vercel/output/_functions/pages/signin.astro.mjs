import { c as createComponent, r as renderTemplate, e as addAttribute, f as renderHead, g as renderSlot, b as createAstro, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_CYsYaCCC.mjs';
/* empty css                                  */
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro();
const $$Admin = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Admin;
  const { title, descr } = Astro2.props;
  return renderTemplate`<html lang="es-PE"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/png" href="/favicon-48x48.png" sizes="48x48"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="shortcut icon" href="/favicon.ico"><link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"><meta name="apple-mobile-web-app-title" content="Sol Naciente"><link rel="manifest" href="/site.webmanifest"><title>${title}</title><meta name="description"${addAttribute(descr, "content")}><meta name="generator"${addAttribute(Astro2.generator, "content")}><meta name="theme-color" content="#F8AB21"><link rel="preload" href="/portofino.woff2" as="font" type="font/woff2" crossorigin><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/Users/alan/Projects/sol-naciente/src/layouts/Admin.astro", void 0);

const $$Astro = createAstro();
const $$Signin = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Signin;
  const { cookies, redirect } = Astro2;
  const accessToken = cookies.get("sb-access-token");
  const refreshToken = cookies.get("sb-refresh-token");
  if (accessToken && refreshToken) {
    return redirect("/dashboard");
  }
  const title = "Sol Naciente | Iniciar Sesi\xF3n";
  const descr = "Iniciar Sesi\xF3n para cambiar los empleos :p";
  return renderTemplate`${renderComponent($$result, "Admin", $$Admin, { "title": title, "descr": descr }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Sign in</h1> <form action="/api/auth/signin" method="post"> <label for="email">Email</label> <input type="email" name="email" id="email"> <label for="password">Password</label> <input type="password" name="password" id="password"> <button type="submit">Login</button> </form> ` })}`;
}, "/Users/alan/Projects/sol-naciente/src/pages/signin.astro", void 0);

const $$file = "/Users/alan/Projects/sol-naciente/src/pages/signin.astro";
const $$url = "/signin";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Signin,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
