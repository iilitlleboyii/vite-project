// scr/router/index.ts
import { createRouter, createWebHistory } from 'vue-router'
import { baseRoutes } from './routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: baseRoutes,
  scrollBehavior: () => {
    return {
      left: 0,
      top: 0,
      behavior: 'smooth',
    }
  },
})

export default router
