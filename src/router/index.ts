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

router.beforeEach((to) => {
  let token = localStorage.getItem('TOKEN')
  if (to.name !== 'login') {
    if (token) {
      return true
    } else {
      router.replace('/login')
      return true
    }
  } else {
    return true
  }
})

export default router
