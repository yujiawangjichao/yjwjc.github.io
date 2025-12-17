import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  // GitHub Pages project site is served under /<repo>/, e.g. https://<user>.github.io/yjwjc.github.io/
  // If VITE_BASE_URL isn't provided, fall back to the repo name path in production so assets load correctly.
  const base =
      env.VITE_BASE_URL && env.VITE_BASE_URL.trim().length > 0
          ? env.VITE_BASE_URL
          : mode === 'production'
              ? '/yjwjc.github.io/'
              : '/'

  return defineConfig({
    base,
    plugins: [vue()],
    build: {
      outDir: 'docs'
    }
  })
}