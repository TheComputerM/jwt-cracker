import { defineConfig } from 'vite'
import { qwikVite } from '@builder.io/qwik/optimizer'
import wasm from "vite-plugin-wasm";


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    qwikVite({
      csr: true,
    }),
    wasm()
  ],
})
