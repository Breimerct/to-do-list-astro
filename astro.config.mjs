import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  output: "static",
  buildOptions: {
    baseUrl: "https://breimerct.github.io/to-do-list-astro/",
  },
});
