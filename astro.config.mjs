// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react"; // ✅ Add this


export default defineConfig({
  integrations: [tailwind(), react()],
    
});
