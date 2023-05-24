// scr/router/index.ts
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    name: 'login',
    path: '/',
    component: () => import('@/views/login/login.vue'),
    meta: {
      title: '登录',
      authRequired: false,
    },
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
})

export default router
