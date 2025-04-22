import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site:"https://github.com/iliestby.github.io",
  base :"PortfolioIlies",
  trailingSlash: "always",
  integrations: [tailwind()],
});
