import { defineConfig } from 'vite'
import { resolve } from 'path'
import { copyFileSync, mkdirSync, existsSync } from 'fs'

export default defineConfig({
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        desktop: resolve(__dirname, 'src/js/desktop.js'),
        config: resolve(__dirname, 'src/js/config.js'),
        mobile: resolve(__dirname, 'src/js/mobile.js')
      },
      external: ['kintone'],
      output: {
        entryFileNames: 'js/[name].js',
        chunkFileNames: 'js/[name].js',
        assetFileNames: (assetInfo) => {
          if (assetInfo.name.endsWith('.css')) {
            // すべてのCSSをmain.cssに統合
            return 'css/main.css'
          }
          if (assetInfo.name.endsWith('.png') || assetInfo.name.endsWith('.jpg') || assetInfo.name.endsWith('.jpeg') || assetInfo.name.endsWith('.gif') || assetInfo.name.endsWith('.svg')) {
            return 'image/[name][extname]'
          }
          return '[name][extname]'
        }
      }
    }
  },
  plugins: [
    {
      name: 'copy-static-files',
      writeBundle() {
        // HTMLファイルをコピー
        const htmlFiles = ['config.html', 'sample.html']
        htmlFiles.forEach(file => {
          const src = resolve(__dirname, `src/html/${file}`)
          const dest = resolve(__dirname, `dist/html/${file}`)
          if (existsSync(src)) {
            mkdirSync(resolve(__dirname, 'dist/html'), { recursive: true })
            copyFileSync(src, dest)
          }
        })

        // manifest.jsonをコピー
        const manifestSrc = resolve(__dirname, 'src/manifest.json')
        const manifestDest = resolve(__dirname, 'dist/manifest.json')
        if (existsSync(manifestSrc)) {
          copyFileSync(manifestSrc, manifestDest)
        }

        // アイコンファイルをコピー
        const iconSrc = resolve(__dirname, 'src/image/icon.png')
        const iconDest = resolve(__dirname, 'dist/image/icon.png')
        if (existsSync(iconSrc)) {
          mkdirSync(resolve(__dirname, 'dist/image'), { recursive: true })
          copyFileSync(iconSrc, iconDest)
        }
      }
    }
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "sass:map"; @use "./variables" as *;`
      }
    }
  }
})