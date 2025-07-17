import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: '2025-07-17',
  vite: {
    plugins: [tailwindcss()],
  },
  css: ["~/assets/css/main.css"],
  app: {
    head: {
      htmlAttrs: {
        // aquí pones el tema que quieras arrancar
        'data-theme': 'autumn'
      }
    }
  },
});