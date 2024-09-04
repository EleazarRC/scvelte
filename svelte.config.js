import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter({
      // Especifica la carpeta de salida para Vercel
      pages: 'build',
      assets: 'build',
      fallback: null
    })
  }
};

export default config;
