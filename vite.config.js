import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: [
        "brand/icon/favicon.ico",
        "brand/icon/icon-192.png",
        "brand/icon/icon-512.png",
        "brand/logo/asenda-icon.svg",
        "brand/logo/asenda-logo-primary.svg"
      ],
      manifest: {
        name: "ASENDA Studio",
        short_name: "ASENDA",
        description: "Premium digital products and freelance software delivery.",
        theme_color: "#FF6B2C",
        background_color: "#FAFAFA",
        display: "standalone",
        start_url: "/",
        icons: [
          { src: "/brand/icon/icon-192.png", sizes: "192x192", type: "image/png" },
          { src: "/brand/icon/icon-512.png", sizes: "512x512", type: "image/png" }
        ]
      },
      build: {
        outDir: "dist"
      }
    })
  ]
});
