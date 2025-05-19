// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react"; // ✅ Add this
import image from '@astrojs/image';

export default defineConfig({
  integrations: [tailwind(), react(),image()],
    
});
