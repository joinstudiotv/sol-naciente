import type { APIRoute } from 'astro';
import { createClient } from '@vercel/kv';

export const POST: APIRoute = async ({ request }) => {
  const { KV_REST_API_URL, KV_REST_API_TOKEN } = import.meta.env;
  const kv = createClient({ url: KV_REST_API_URL, token: KV_REST_API_TOKEN });

  try {
    const { email, phone } = await request.json();
    
    // Validar que los datos no estén vacíos
    if (!email || !phone) {
      return new Response('Email y teléfono son requeridos', { status: 400 });
    }

    // Actualizar los valores en Vercel KV
    await kv.set('email', email);
    await kv.set('phone', phone);

    return new Response(null, { status: 200 });
  } catch (error) {
    return new Response('Error interno del servidor', { status: 500 });
  }
};