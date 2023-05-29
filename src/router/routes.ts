import type { MenuItemType } from '@/types'
const baseRoutes: MenuItemType[] = [
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
    path: '/',
    alias: '/index',
    component: () => import('@/layout/index.vue'),
    meta: {
      title: '首页',
      icon: 'House',
      authRequired: true,
      isExternalLink: false,
    },
  },
  {
    name: 'bulletinBoard',
    path: '/bulletinBoard',
    component: () => import('@/layout/index.vue'),
    meta: {
      title: '看板中心',
      icon: 'DataBoard',
      authRequired: true,
      breadCrumb: true,
    },
    children: [
      {
        name: 'machineBoard',
        path: '/bulletinBoard/machineBoard',
        component: () => import('@/views/404/index.vue'),
        meta: {
          title: '设备看板',
          icon: 'Link',
          authRequired: true,
          breadCrumb: true,
        },
      },
      {
        name: 'orderBoard',
        path: '/bulletinBoard/orderBoard',
        component: () => import('@/views/404/index.vue'),
        meta: {
          title: '订单看板',
          icon: 'Link',
          authRequired: true,
        },
        children: [
          {
            name: 'test',
            path: '/bulletinBoard/orderBoard/test',
            component: () => import('@/views/404/index.vue'),
            meta: {
              title: '测试',
              icon: 'Link',
              authRequired: true,
              breadCrumb: true,
            },
          },
        ],
      },
    ],
  },
  {
    name: 'warehouseManagement',
    path: '/warehouseManagement',
    component: () => import('@/layout/index.vue'),
    meta: {
      title: '仓库管理',
      icon: 'Setting',
      authRequired: true,
    },
    children: [
      {
        name: 'materialInfo',
        path: '/warehouseManagement/materialInfo',
        component: () => import('@/views/404/index.vue'),
        meta: {
          title: '物料信息',
          icon: 'Link',
          authRequired: true,
        },
      },
      {
        name: 'wm',
        path: '/warehouseManagement/wm',
        component: () => import('@/views/404/index.vue'),
        meta: {
          title: '仓库管理',
          icon: 'Link',
          authRequired: true,
        },
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

const routes: any = baseRoutes

export default routes
