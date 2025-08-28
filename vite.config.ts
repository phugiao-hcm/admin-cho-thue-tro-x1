// import { fileURLToPath, URL } from 'node:url'

// import { defineConfig } from 'vite'
// import vue from '@vitejs/plugin-vue'
// import vueDevTools from 'vite-plugin-vue-devtools'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [vue(), vueDevTools()],
//   base: 'admin-cho-thue-tro-x1/', // 👈 cực quan trọng, phải giống tên repo
//   // build: {
//   //   rollupOptions: {
//   //     output: {
//   //       manualChunks: undefined,
//   //     },
//   //   },
//   // },
//   build: {
//     // Không minify JS/CSS
//     minify: false,
//     // Tách CSS ra file riêng
//     cssCodeSplit: true,
//     rollupOptions: {
//       output: {
//         // Đặt tên file JS/CSS rõ ràng
//         entryFileNames: 'assets/[name].js',
//         chunkFileNames: 'assets/[name]-[hash].js',
//         assetFileNames: 'assets/[name][extname]',
//       },
//     },
//   },
//   resolve: {
//     alias: {
//       '@': fileURLToPath(new URL('./src', import.meta.url)),
//     },
//   },
// })

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  base: '/admin-cho-thue-tro-x1/', // 👈 cực quan trọng, phải giống tên repo
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
