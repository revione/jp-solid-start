import solid from "solid-start/vite";
import icons from "unplugin-icons/vite";
import { defineConfig } from "vite";
import netlify from "solid-start-netlify";

export default defineConfig({
  plugins: [
    icons({
      compiler: "solid",
    }),
    solid({
      adapter: netlify({ edge: true }),
      experimental: { islands: true, islandsRouter: true },
      // adapter: netlify({ edge: true }),
      ssr: true,
    }),
  ],
});
