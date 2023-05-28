import type { MenuItem } from '@/types'
const baseRoutes: MenuItem[] = [
  {
    name: 'login',
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    hidden: true,
    meta: {
      title: '登录',
      authRequired: false,
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
    name: 'layout',
    path: '/',
    component: () => import('@/components/layout/index.vue'),
    meta: {
      title: '管理页',
      authRequired: true,
    },
    children: [
      {
        name: 'test1',
        path: '/test1',
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: '测试页1',
          authRequired: true,
        },
      },
      {
        name: 'test2',
        path: '/test2',
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: '测试页2',
          authRequired: true,
        },
      },
      {
        name: 'test3',
        path: '/test3',
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: '测试页3',
          authRequired: true,
        },
        children: [
          {
            name: 'test31',
            path: '/test31',
            component: () => import('@/views/home/index.vue'),
            meta: {
              title: '测试页31',
              authRequired: true,
            },
          },
          {
            name: 'test32',
            path: '/test32',
            component: () => import('@/views/home/index.vue'),
            meta: {
              title: '测试页32',
              authRequired: true,
            },
          },
        ],
      },
    ],
  },
  {
    name: '404',
    path: '/404',
    component: () => import('@/views/404/index.vue'),
    hidden: true,
    meta: {
      title: '404',
      authRequired: false,
    },
  },
  {
    name: 'any',
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    hidden: true,
    meta: {
      title: 'any',
      authRequired: false,
    },
  },
]

const routes = baseRoutes

export default routes
