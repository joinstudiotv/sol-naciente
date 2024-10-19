import { c as createComponent, r as renderTemplate, a as renderComponent, d as defineScriptVars, m as maybeRenderHead } from '../chunks/astro/server_CYsYaCCC.mjs';
import { $ as $$Layout } from '../chunks/Layout_MmlC0ldW.mjs';
import { createClient } from '@vercel/kv';
/* empty css                                      */
export { renderers } from '../renderers.mjs';

const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "SITE": undefined, "SSR": true};
var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Cotizacion = createComponent(async ($$result, $$props, $$slots) => {
  const { KV_REST_API_URL, KV_REST_API_TOKEN } = Object.assign(__vite_import_meta_env__, {});
  const kv = createClient({
    url: KV_REST_API_URL,
    token: KV_REST_API_TOKEN
  });
  const title = "Sol Naciente | Cotización";
  const descr = "...";
  const phone = await kv.get("phone");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "descr": descr, "data-astro-cid-g62esh65": true }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([" ", '<article class="fcol fc" data-astro-cid-g62esh65> <section class="fcol fc" data-astro-cid-g62esh65> <h1 data-astro-cid-g62esh65>Cotizaciones</h1> <p data-astro-cid-g62esh65>En <strong data-astro-cid-g62esh65>Sol Naciente</strong> estamos para servirle. Dejenos sus datos y nos pondremos en contacto con usted rápidamente.</p> </section> <section class="form fcol fc" data-astro-cid-g62esh65> <label for="name" data-astro-cid-g62esh65> <span data-astro-cid-g62esh65>Nombre</span> <input type="text" name="name" id="name" placeholder="José Perez Rodriguez" required data-astro-cid-g62esh65> </label> <label for="company" data-astro-cid-g62esh65> <span data-astro-cid-g62esh65>Compañía</span> <input type="text" name="company" id="company" placeholder="Asociación de Ejemplo" required data-astro-cid-g62esh65> </label> <label for="msg" data-astro-cid-g62esh65> <span data-astro-cid-g62esh65>Asunto</span> <textarea name="msg" id="msg" rows="3" placeholder="Buenas, me interesaría saber el precio del servicio de almuerzo ejecutivo para una empresa de 45 trabajadores." data-astro-cid-g62esh65></textarea> </label> <button id="send" class="btn btn-brown" type="submit" data-astro-cid-g62esh65>Enviar</button> </section> </article> <script>(function(){', '\n		const btn = document.getElementById("send") \n		const name_input = document.getElementById("name")\n		const company_input = document.getElementById("company") \n		const msg_input = document.getElementById("msg")\n\n		btn.addEventListener("click", () => {\n			const name = name_input.value;\n			const company = company_input.value;\n			const msg = msg_input.value;\n\n			const whatsappMessage = `Hola, mi nombre es ${name} de la compañía ${company}. ${msg}`;\n						\n			const whatsappURL = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(whatsappMessage)}`;\n			\n			window.open(whatsappURL, \'_blank\');\n		})\n	})();</script> '], [" ", '<article class="fcol fc" data-astro-cid-g62esh65> <section class="fcol fc" data-astro-cid-g62esh65> <h1 data-astro-cid-g62esh65>Cotizaciones</h1> <p data-astro-cid-g62esh65>En <strong data-astro-cid-g62esh65>Sol Naciente</strong> estamos para servirle. Dejenos sus datos y nos pondremos en contacto con usted rápidamente.</p> </section> <section class="form fcol fc" data-astro-cid-g62esh65> <label for="name" data-astro-cid-g62esh65> <span data-astro-cid-g62esh65>Nombre</span> <input type="text" name="name" id="name" placeholder="José Perez Rodriguez" required data-astro-cid-g62esh65> </label> <label for="company" data-astro-cid-g62esh65> <span data-astro-cid-g62esh65>Compañía</span> <input type="text" name="company" id="company" placeholder="Asociación de Ejemplo" required data-astro-cid-g62esh65> </label> <label for="msg" data-astro-cid-g62esh65> <span data-astro-cid-g62esh65>Asunto</span> <textarea name="msg" id="msg" rows="3" placeholder="Buenas, me interesaría saber el precio del servicio de almuerzo ejecutivo para una empresa de 45 trabajadores." data-astro-cid-g62esh65></textarea> </label> <button id="send" class="btn btn-brown" type="submit" data-astro-cid-g62esh65>Enviar</button> </section> </article> <script>(function(){', '\n		const btn = document.getElementById("send") \n		const name_input = document.getElementById("name")\n		const company_input = document.getElementById("company") \n		const msg_input = document.getElementById("msg")\n\n		btn.addEventListener("click", () => {\n			const name = name_input.value;\n			const company = company_input.value;\n			const msg = msg_input.value;\n\n			const whatsappMessage = \\`Hola, mi nombre es \\${name} de la compañía \\${company}. \\${msg}\\`;\n						\n			const whatsappURL = \\`https://api.whatsapp.com/send?phone=\\${phone}&text=\\${encodeURIComponent(whatsappMessage)}\\`;\n			\n			window.open(whatsappURL, \'_blank\');\n		})\n	})();</script> '])), maybeRenderHead(), defineScriptVars({ phone })) })} `;
}, "/Users/alan/Projects/sol-naciente/src/pages/cotizacion.astro", void 0);
const $$file = "/Users/alan/Projects/sol-naciente/src/pages/cotizacion.astro";
const $$url = "/cotizacion";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Cotizacion,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
