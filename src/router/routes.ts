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
