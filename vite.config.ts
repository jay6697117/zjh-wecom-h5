import { fileURLToPath, URL } from 'node:url'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path'
import mockDevServerPlugin from 'vite-plugin-mock-dev-server'
import vueSetupExtend from 'vite-plugin-vue-setup-extend'
// import viteCompression from "vite-plugin-compression";//gzip压缩:需要后端配合
import { createHtmlPlugin } from 'vite-plugin-html'

// 当前工作目录路径
const root: string = process.cwd()

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // 环境变量
  const env = loadEnv(mode, root, '')

  //当前环境
  console.log('当前环境是:', env.VITE_NODE_ENV, '| baseUrl:', env.VITE_BASE_API)
  //当前环境

  return {
    base: env.VITE_PUBLIC_PATH || '/',
    plugins: [
      vue(),
      vueJsx(),
      mockDevServerPlugin(),
      // Vant4 组件自动按需引入
      Components({
        // UI库解析器
        resolvers: [VantResolver()],
        // 指定组件位置，默认是src/components
        dirs: ['src/components'],
        extensions: ['vue'],
        // 配置文件生成位置
        dts: 'src/components.d.ts'
      }),
      // svg icon
      createSvgIconsPlugin({
        // 指定图标文件夹
        iconDirs: [path.resolve(root, 'src/icons/svg')],
        // 指定 symbolId 格式
        symbolId: 'icon-[dir]-[name]'
      }),
      // 允许 setup 语法糖上添加组件名属性
      vueSetupExtend(),
      // 生产环境 gzip 压缩资源
      // viteCompression(),
      // 注入模板数据
      createHtmlPlugin({
        inject: {
          data: {
            ENABLE_ERUDA: env.VITE_ENABLE_ERUDA || 'false'
          }
        }
      })
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    server: {
      // 仅在 proxy 中配置的代理前缀， mock-dev-server 才会拦截并 mock
      // doc: https://github.com/pengzhanbo/vite-plugin-mock-dev-server
      proxy: {
        '^/dev-api': {
          target: 'https://api-lucky-drow-test.yestae.com',
          changeOrigin: true,
          rewrite: path => path.replace(/^\/dev-api/, '')
        }
      }
    },
    build: {
      rollupOptions: {
        output: {
          chunkFileNames: 'static/js/[name]-[hash].js',
          entryFileNames: 'static/js/[name]-[hash].js',
          assetFileNames: 'static/[ext]/[name]-[hash].[ext]'
        }
      }
    }
  }
})
