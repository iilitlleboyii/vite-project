import Layout from '@/components/layout/index.vue'

export const baseRoutes = [
  {
    name: 'login',
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    meta: {
      title: '登录',
      authRequired: false,
    },
  },
  {
    name: 'layout',
    path: '/',
    component: Layout,
    meta: {
      title: '管理页',
      authRequired: true,
    },
  },
  {
    name: 'home',
    path: '/home',
    alias: '/index',
    component: () => import('@/views/home/index.vue'),
    meta: {
      title: '主页',
      authRequired: true,
    },
  },
  {
    name: '404',
    path: '/404',
    component: () => import('@/views/404/index.vue'),
    meta: {
      title: '404',
      authRequired: false,
    },
  },
  {
    name: 'any',
    path: '/:pathMatch(.*)*',
    redirect: '/404',
  },
]
