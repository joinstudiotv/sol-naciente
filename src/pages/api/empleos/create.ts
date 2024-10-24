import type { APIRoute } from "astro";
import { supabase } from "../../../lib/supabase";

export const POST: APIRoute = async ({ request }) => {
	try {
		const { name, desc: content } = await request.json();
    
    if (!name || !content) {
      return new Response('Faltan campos', { status: 400 });
    }

		const { data, error } = await supabase.from('empleos').insert({ name, content }).select();

		let id :any = 0

		if (error) {
			return new Response('Error al crear nuevo empleo', { status: 500 });
		} else if (data) {
			id = data[0].id
		}
		return new Response(id, { status: 200 });
	} catch (error) {
    console.error('Error interno del servidor:', error);
    return new Response('Error interno del servidor', { status: 500 });
  }
};