import type { APIRoute } from "astro";
import { supabase } from "../../../lib/supabase";

export const POST: APIRoute = async ({ request }) => {
	try {
		const { id, name, desc: content } = await request.json();

		if (!id || !name || !content) {
			return new Response("Todos los campos son necesarios", { status: 400 });
		}

		const { error } =  await supabase.from('empleos').update({ name, content }).eq('id', id);

		if (error) {
			console.error(error)
			return new Response(error.message, { status: 401 });
		}

		return new Response('Empleo actualizado correctamente', { status: 200 });
	} catch (error) {
    console.error('Error interno del servidor:', error);
    return new Response('Error interno del servidor', { status: 500 });
  }
};