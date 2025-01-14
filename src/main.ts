import 'windi.css'
import './styles/main.css'
import { ViteSSG } from 'vite-ssg'
import generatedRoutes from 'pages-generated'
import { setupLayouts } from 'layouts-generated'
import { setVant } from './vant/ setVant' // vant导入
import App from './App.vue'
const routes = setupLayouts(generatedRoutes)

// https://github.com/antfu/vite-ssg
export const createApp = ViteSSG(
  App,
  { routes },
  (ctx) => {
    setVant(ctx.app)
    // install all modules under `modules/`
    Object.values(import.meta.globEager('./modules/*.ts')).map(i => i.install?.(ctx))
  },
)
