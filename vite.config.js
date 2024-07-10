import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import reactRefresh from "@vitejs/plugin-react-refresh";
import compressionPlugin from 'vite-plugin-compression';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), reactRefresh(), compressionPlugin({
      verbose: true,
      disable: false,
      threshold: 10240, // Size in bytes (e.g. 10kb)
      algorithm: 'gzip', // Choose from 'gzip', 'brotliCompress', 'deflate'
      ext: '.gz' // File extension for the compressed assets
    })],
  server: {
    host: "localhost",
    port: 3000,
  },
  preview: {
    host: true,
    port: 3000,
  },
});
