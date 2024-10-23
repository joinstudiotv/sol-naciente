import type { APIRoute } from "astro";
import { supabase } from "../../../lib/supabase";

export const POST: APIRoute = async ({ request }) => {
	try {
		const { id } = await request.json();
    
    if (!id) {
      return new Response('ID del empleo es requerido', { status: 400 });
    }

		const { error } = await supabase.from('empleos').delete().eq('id', id);

		if (error) {
			return new Response('Error al eliminar el empleo', { status: 500 });
		}

		return new Response('Empleo eliminado correctamente', { status: 200 });
	} catch (error) {
    console.error('Error interno del servidor:', error);
    return new Response('Error interno del servidor', { status: 500 });
  }
};