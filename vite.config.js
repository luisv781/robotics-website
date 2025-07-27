import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src', 'index.html'),
        about: resolve(__dirname, 'about', 'about.html'),
      },
    },
  },
  plugins: [
    tailwindcss(),
  ],
})