import { c as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, a as renderComponent, b as createAstro, u as unescapeHTML, F as Fragment, d as defineScriptVars } from '../chunks/astro/server_CYsYaCCC.mjs';
import { s as supabase } from '../chunks/supabase_4wgk0nn1.mjs';
import { createClient } from '@vercel/kv';
import { $ as $$Image } from '../chunks/_astro_assets_Cso4W6zG.mjs';
import { $ as $$Layout } from '../chunks/Layout_MmlC0ldW.mjs';
/* empty css                                  */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Acordion = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Acordion;
  const { value, content } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="collapse collapse-plus" data-astro-cid-ggzfog62> <input type="radio"${addAttribute(value, "value")} name="opciones" data-astro-cid-ggzfog62> <div class="collapse-title text-xl font-medium" data-astro-cid-ggzfog62> ${value} </div> <div class="collapse-content" data-astro-cid-ggzfog62> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(content)}` })} <button class="btn btn-yellow postular" type="button" data-astro-cid-ggzfog62>Postular</button> </div> </div> `;
}, "/Users/alan/Projects/sol-naciente/src/components/Acordion.astro", void 0);

const bg = new Proxy({"src":"/_astro/out.DB731T8R.jpg","width":2560,"height":735,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/alan/Projects/sol-naciente/src/images/out.jpg";
							}
							
							return target[name];
						}
					});

const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "SITE": undefined, "SSR": true};
var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Empleo = createComponent(async ($$result, $$props, $$slots) => {
  const { KV_REST_API_URL, KV_REST_API_TOKEN } = Object.assign(__vite_import_meta_env__, {});
  const kv = createClient({
    url: KV_REST_API_URL,
    token: KV_REST_API_TOKEN
  });
  const phone = await kv.get("phone");
  const { data: empleos, error } = await supabase.from("empleos").select("*");
  if (error) {
    console.error("Error al cargar los empleos:", error);
  }
  const title = "Sol Naciente | Trabaja con nosostros";
  const descr = "...";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "descr": descr, "data-astro-cid-audyu6ix": true }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([" ", '<div class="hero rel" data-astro-cid-audyu6ix> <div class="rel" data-astro-cid-audyu6ix> ', ' <div class="color abs" data-astro-cid-audyu6ix></div> </div> <svg class="deco abs do" width="1240" height="40" viewBox="0 0 1240 40" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-audyu6ix> <path d="M0 0C186.083 25.577 396.792 40 620 40C843.208 40 1053.92 25.577 1240 0H0Z" fill="white" data-astro-cid-audyu6ix></path> </svg> <svg class="deco abs mo" width="1240" height="80" viewBox="0 0 1240 80" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-audyu6ix> <path d="M0 0C186.083 51.154 396.792 80 620 80C843.208 80 1053.92 51.154 1240 0H0Z" fill="white" data-astro-cid-audyu6ix></path> </svg> <h1 class="abs" data-astro-cid-audyu6ix>Sé parte de nuestra familia</h1> </div> <p class="text" data-astro-cid-audyu6ix>\nBuscamos personas <em data-astro-cid-audyu6ix>apasionadas</em> por la gastronomía y con\n<strong data-astro-cid-audyu6ix>espíritu creativo</strong> para unirse a nuestra familia.\n		Si te gusta innovar en la cocina, ofrecer un gran servicio y\n		formar parte de un equipo dinámico en el mundo del catering,\n<strong data-astro-cid-audyu6ix>¡queremos conocerte!</strong> </p> <h1 class="porq" data-astro-cid-audyu6ix>\n¿Por qué Trabajar <br data-astro-cid-audyu6ix>con Nosotros?\n</h1> <section class="cards fcc" data-astro-cid-audyu6ix> <article class="fcol fcc" data-astro-cid-audyu6ix> <h1 data-astro-cid-audyu6ix>Empresa Reconocida</h1> <p data-astro-cid-audyu6ix>Somos conocidos por nuestra dedicación a brindar un servicio de calidad y personalizado en cada evento.</p> </article> <article class="fcol fcc" data-astro-cid-audyu6ix> <h1 data-astro-cid-audyu6ix>Oportunidades de Crecimiento</h1> <p data-astro-cid-audyu6ix>Aquí no solo trabajas, ¡creces! Fomentamos el desarrollo profesional y oportunidades para que puedas avanzar en tu carrera.</p> </article> <article class="fcol fcc" data-astro-cid-audyu6ix> <h1 data-astro-cid-audyu6ix>Ambiente Colaborativo</h1> <p data-astro-cid-audyu6ix>Valoramos el trabajo en equipo, contamos con un equipo dinámico y unido que busca ofrecer la mejor experiencia gastronómica.</p> </article> <article class="fcol fcc" data-astro-cid-audyu6ix> <h1 data-astro-cid-audyu6ix>Innovación y Creatividad</h1> <p data-astro-cid-audyu6ix>Sol Naciente es el lugar ideal para que pongas tu creatividad a prueba.</p> </article> <article class="fcol fcc" data-astro-cid-audyu6ix> <h1 data-astro-cid-audyu6ix>Compromiso con la Calidad</h1> <p data-astro-cid-audyu6ix>Estamos comprometidos con mantener altos estándares, desde la preparación de alimentos hasta la atención al cliente.</p> </article> </section> <form class="posiciones fcol fc" data-astro-cid-audyu6ix> <h1 data-astro-cid-audyu6ix>Posiciones abiertas</h1> <div class="puestos fcol" data-astro-cid-audyu6ix> ', " </div> </form> <script>(function(){", "\n    const buttons = document.querySelectorAll('.postular');\n    const radios = document.querySelectorAll('input[name=\"opciones\"]');\n    \n    let lastCheckedRadio = null;\n\n    radios.forEach(radio => {\n			radio.addEventListener('click', (e) => {\n				const currentRadio = e.target;\n\n				// Si el radio fue previamente seleccionado (y es el mismo que se está cliqueando), lo desmarcamos\n				if (lastCheckedRadio === currentRadio) {\n					currentRadio.checked = false;\n					lastCheckedRadio = null; // reseteamos la referencia\n				} else {\n					// Si no, guardamos el radio seleccionado como el último en ser clickeado\n					lastCheckedRadio = currentRadio;\n				}\n			});\n    });\n\n    buttons.forEach(button => {\n			button.addEventListener('click', () => {\n				const selectedOption = document.querySelector('input[name=\"opciones\"]:checked');\n\n				if (selectedOption) {\n					const trabail = selectedOption.value;\n					const whatsappMessage = `Hola, estoy interesado en el puesto de ${trabail}`;\n					const whatsappURL = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(whatsappMessage)}`;\n					\n					window.open(whatsappURL, '_blank');\n				}\n			});\n    });\n})();</script> "], [" ", '<div class="hero rel" data-astro-cid-audyu6ix> <div class="rel" data-astro-cid-audyu6ix> ', ' <div class="color abs" data-astro-cid-audyu6ix></div> </div> <svg class="deco abs do" width="1240" height="40" viewBox="0 0 1240 40" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-audyu6ix> <path d="M0 0C186.083 25.577 396.792 40 620 40C843.208 40 1053.92 25.577 1240 0H0Z" fill="white" data-astro-cid-audyu6ix></path> </svg> <svg class="deco abs mo" width="1240" height="80" viewBox="0 0 1240 80" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-audyu6ix> <path d="M0 0C186.083 51.154 396.792 80 620 80C843.208 80 1053.92 51.154 1240 0H0Z" fill="white" data-astro-cid-audyu6ix></path> </svg> <h1 class="abs" data-astro-cid-audyu6ix>Sé parte de nuestra familia</h1> </div> <p class="text" data-astro-cid-audyu6ix>\nBuscamos personas <em data-astro-cid-audyu6ix>apasionadas</em> por la gastronomía y con\n<strong data-astro-cid-audyu6ix>espíritu creativo</strong> para unirse a nuestra familia.\n		Si te gusta innovar en la cocina, ofrecer un gran servicio y\n		formar parte de un equipo dinámico en el mundo del catering,\n<strong data-astro-cid-audyu6ix>¡queremos conocerte!</strong> </p> <h1 class="porq" data-astro-cid-audyu6ix>\n¿Por qué Trabajar <br data-astro-cid-audyu6ix>con Nosotros?\n</h1> <section class="cards fcc" data-astro-cid-audyu6ix> <article class="fcol fcc" data-astro-cid-audyu6ix> <h1 data-astro-cid-audyu6ix>Empresa Reconocida</h1> <p data-astro-cid-audyu6ix>Somos conocidos por nuestra dedicación a brindar un servicio de calidad y personalizado en cada evento.</p> </article> <article class="fcol fcc" data-astro-cid-audyu6ix> <h1 data-astro-cid-audyu6ix>Oportunidades de Crecimiento</h1> <p data-astro-cid-audyu6ix>Aquí no solo trabajas, ¡creces! Fomentamos el desarrollo profesional y oportunidades para que puedas avanzar en tu carrera.</p> </article> <article class="fcol fcc" data-astro-cid-audyu6ix> <h1 data-astro-cid-audyu6ix>Ambiente Colaborativo</h1> <p data-astro-cid-audyu6ix>Valoramos el trabajo en equipo, contamos con un equipo dinámico y unido que busca ofrecer la mejor experiencia gastronómica.</p> </article> <article class="fcol fcc" data-astro-cid-audyu6ix> <h1 data-astro-cid-audyu6ix>Innovación y Creatividad</h1> <p data-astro-cid-audyu6ix>Sol Naciente es el lugar ideal para que pongas tu creatividad a prueba.</p> </article> <article class="fcol fcc" data-astro-cid-audyu6ix> <h1 data-astro-cid-audyu6ix>Compromiso con la Calidad</h1> <p data-astro-cid-audyu6ix>Estamos comprometidos con mantener altos estándares, desde la preparación de alimentos hasta la atención al cliente.</p> </article> </section> <form class="posiciones fcol fc" data-astro-cid-audyu6ix> <h1 data-astro-cid-audyu6ix>Posiciones abiertas</h1> <div class="puestos fcol" data-astro-cid-audyu6ix> ', " </div> </form> <script>(function(){", "\n    const buttons = document.querySelectorAll('.postular');\n    const radios = document.querySelectorAll('input[name=\"opciones\"]');\n    \n    let lastCheckedRadio = null;\n\n    radios.forEach(radio => {\n			radio.addEventListener('click', (e) => {\n				const currentRadio = e.target;\n\n				// Si el radio fue previamente seleccionado (y es el mismo que se está cliqueando), lo desmarcamos\n				if (lastCheckedRadio === currentRadio) {\n					currentRadio.checked = false;\n					lastCheckedRadio = null; // reseteamos la referencia\n				} else {\n					// Si no, guardamos el radio seleccionado como el último en ser clickeado\n					lastCheckedRadio = currentRadio;\n				}\n			});\n    });\n\n    buttons.forEach(button => {\n			button.addEventListener('click', () => {\n				const selectedOption = document.querySelector('input[name=\"opciones\"]:checked');\n\n				if (selectedOption) {\n					const trabail = selectedOption.value;\n					const whatsappMessage = \\`Hola, estoy interesado en el puesto de \\${trabail}\\`;\n					const whatsappURL = \\`https://api.whatsapp.com/send?phone=\\${phone}&text=\\${encodeURIComponent(whatsappMessage)}\\`;\n					\n					window.open(whatsappURL, '_blank');\n				}\n			});\n    });\n})();</script> "])), maybeRenderHead(), renderComponent($$result2, "Image", $$Image, { "width": bg.width / 2, "densities": [1, 2], "src": bg, "alt": "Chefs", "format": "avif", "quality": "50", "data-astro-cid-audyu6ix": true }), empleos && empleos.map((empleo) => renderTemplate`${renderComponent($$result2, "Acordion", $$Acordion, { "value": empleo.name, "content": empleo.content, "data-astro-cid-audyu6ix": true })}`), defineScriptVars({ phone })) })} `;
}, "/Users/alan/Projects/sol-naciente/src/pages/empleo.astro", void 0);
const $$file = "/Users/alan/Projects/sol-naciente/src/pages/empleo.astro";
const $$url = "/empleo";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Empleo,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
