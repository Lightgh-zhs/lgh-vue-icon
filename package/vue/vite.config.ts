import { defineConfig } from "vite";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
/** @type {import('vite').UserConfig} */
export default defineConfig({
  server: {
    host: true,
    port: 9000,
    open: true,
    proxy: {},
    hmr:true
  },
  base: "/",
  resolve: {
    alias: { "@": resolve(__dirname, "./src"),'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js'},
  },
  plugins:[
    vue()
  ]
});
