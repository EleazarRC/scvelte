import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter({
      // Directorio de salida para la construcción de la aplicación
      out: 'build',

      // Puedes especificar otras opciones como el puerto y el host
      precompress: false, // Si deseas precomprimir archivos con gzip o brotli
      envPrefix: '', // Prefijo para variables de entorno
    })
  }
};

export default config;
