import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
// import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // VitePWA({
    // mode: "production",
    // base: "/",
    // includeAssets: ["/favicon.ico"],
    // manifest: {
    // name: "Gura Click",
    // short_name: "Gura Click",
    // theme_color: "#EBECF1",
    // background_color: "#EBECF1",
    // prefer_related_applications: true,
    // icons: [
    // {
    // src: "images/logo-192x192.png",
    // sizes: "192x192",
    // type: "image/png",
    // },
    // {
    // src: "images/logo-512x512.png",
    // sizes: "512x512",
    // type: "image/png",
    // },
    // {
    // src: "images/logo-512x512.png",
    // sizes: "512x512",
    // type: "image/png",
    // purpose: "maskable",
    // },
    // ],
    // },
    // }),
  ],
});
