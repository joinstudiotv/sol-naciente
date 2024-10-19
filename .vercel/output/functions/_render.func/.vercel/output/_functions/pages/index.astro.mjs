import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent, b as createAstro } from '../chunks/astro/server_CYsYaCCC.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_Cso4W6zG.mjs';
/* empty css                                 */
import { $ as $$Layout } from '../chunks/Layout_MmlC0ldW.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Card;
  const { name, desc, text, src } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article data-astro-cid-dohjnao5> <div class="rel" data-astro-cid-dohjnao5> ${renderComponent($$result, "Image", $$Image, { "width": src.width / 2, "densities": [1, 2], "src": src, "alt": "no seeee", "format": "avif", "quality": "50", "data-astro-cid-dohjnao5": true })} <section class="abs fcol" data-astro-cid-dohjnao5> <h2 data-astro-cid-dohjnao5>${name}</h2> <p data-astro-cid-dohjnao5>${desc}</p> </section> </div> <p class="p4" data-astro-cid-dohjnao5>${text}</p> </article> `;
}, "/Users/alan/Projects/sol-naciente/src/components/Card.astro", void 0);

const cubiertos = new Proxy({"src":"/_astro/cubiertos.CwqgzJjn.png","width":3840,"height":424,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/alan/Projects/sol-naciente/src/images/cubiertos.png";
							}
							
							return target[name];
						}
					});

const bg = new Proxy({"src":"/_astro/fondo.BG0YLsUv.png","width":1920,"height":823,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/alan/Projects/sol-naciente/src/images/fondo.png";
							}
							
							return target[name];
						}
					});

const chef = new Proxy({"src":"/_astro/valores.4tx8HW3Q.png","width":1612,"height":1394,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/alan/Projects/sol-naciente/src/images/valores.png";
							}
							
							return target[name];
						}
					});

const f1 = new Proxy({"src":"/_astro/f1.Np9KzsiW.jpg","width":1280,"height":720,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/alan/Projects/sol-naciente/src/images/f1.jpg";
							}
							
							return target[name];
						}
					});

const tech = new Proxy({"src":"/_astro/tech.CUoXEcic.jpg","width":768,"height":512,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/alan/Projects/sol-naciente/src/images/tech.jpg";
							}
							
							return target[name];
						}
					});

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const title = "Sol Naciente";
  const descr = "...";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "descr": descr, "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="hero rel" data-astro-cid-j7pv25f6> <div class="rel" data-astro-cid-j7pv25f6> <video autoplay loop muted preload="auto" width="1920" height="1080" poster="/poster.avif" data-astro-cid-j7pv25f6> <source src="/output.webm" type="video/webm" data-astro-cid-j7pv25f6>
Your browser does not support the video tag.
</video> <div class="color abs" data-astro-cid-j7pv25f6></div> </div> <svg class="deco abs do" width="1240" height="40" viewBox="0 0 1240 40" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-j7pv25f6> <path d="M0 0C186.083 25.577 396.792 40 620 40C843.208 40 1053.92 25.577 1240 0H0Z" fill="white" data-astro-cid-j7pv25f6></path> </svg> <svg class="deco abs mo" width="1240" height="80" viewBox="0 0 1240 80" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-j7pv25f6> <path d="M0 0C186.083 51.154 396.792 80 620 80C843.208 80 1053.92 51.154 1240 0H0Z" fill="white" data-astro-cid-j7pv25f6></path> </svg> <div class="abs big" data-astro-cid-j7pv25f6> <div class="fcol p4 g4" data-astro-cid-j7pv25f6> <h1 data-astro-cid-j7pv25f6>Alimentación <span data-astro-cid-j7pv25f6>Corporativa</span> que Transforma</h1> <p data-astro-cid-j7pv25f6>
En <strong data-astro-cid-j7pv25f6>Sol Naciente</strong>, llevamos calidad, sabor y bienestar a tu
					empresa. Mejora la productividad y el clima laboral con soluciones
					alimentarias personalizadas, seguras y deliciosas. ¡Nos adaptamos a tus
					necesidades!
</p> </div> </div> </section> <section class="cards" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Card", $$Card, { "src": f1, "name": "ORGULLO", "desc": "Pasi\xF3n por la calidad", "text": "Nos enorgullece ofrecer alimentos de la m\xE1s alta calidad, siempre frescos y con ingredientes seleccionados cuidadosamente para garantizar sabor y bienestar.", "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Card", $$Card, { "src": tech, "name": "INNOVACI\xD3N", "desc": "Soluciones modernas", "text": "Nos adaptamos a las \xFAltimas tendencias en alimentaci\xF3n y tecnolog\xEDa, brindando opciones innovadoras como estaciones de comida m\xF3vil y men\xFAs personalizados.", "data-astro-cid-j7pv25f6": true })} </section> <section class="platillos fcol" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Image", $$Image, { "width": cubiertos.width / 2, "densities": [1, 2], "src": cubiertos, "alt": "Chefs", "format": "avif", "quality": "50", "data-astro-cid-j7pv25f6": true })} <h1 data-astro-cid-j7pv25f6>Disfruta de nuestros platillos</h1> <p data-astro-cid-j7pv25f6>
Explora una amplia variedad de platillos que hemos creado para satisfacer
			todos los gustos. Desde opciones saludables y equilibradas hasta comidas
			gourmet, ofrecemos una experiencia culinaria completa.
</p> </section> <section class="rel valores" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Image", $$Image, { "class": "abs big-img", "width": bg.width / 2, "densities": [1, 2], "src": bg, "alt": "Chefs", "format": "avif", "quality": "50", "data-astro-cid-j7pv25f6": true })} <div class="card" data-astro-cid-j7pv25f6> <article class="fcol fc" data-astro-cid-j7pv25f6> <h1 data-astro-cid-j7pv25f6>Nuestros Valores</h1> <p data-astro-cid-j7pv25f6>
En <strong data-astro-cid-j7pv25f6>Sol Naciente</strong>, nos guiamos por principios de calidad,
					innovación y responsabilidad. Cada uno de nuestros servicios está
					diseñado para aportar bienestar a nuestros clientes, con un enfoque
					sostenible y comprometido con el entorno.
</p> <a class="btn btn-yellow" href="/about" data-astro-cid-j7pv25f6>Conócenos</a> </article> ${renderComponent($$result2, "Image", $$Image, { "width": chef.width / 2, "densities": [1, 2], "src": chef, "alt": "Chefs", "format": "avif", "quality": "50", "data-astro-cid-j7pv25f6": true })} </div> </section> ` })} `;
}, "/Users/alan/Projects/sol-naciente/src/pages/index.astro", void 0);

const $$file = "/Users/alan/Projects/sol-naciente/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
