// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  trailingSlash: 'never',
  output: 'server',
  adapter: vercel({
    imageService: false,
  })
});