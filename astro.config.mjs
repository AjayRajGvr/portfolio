import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

const site = "https://ajayraj.ca";

export default defineConfig({
  site,
  base,
  integrations: [react(), sitemap()],
});
