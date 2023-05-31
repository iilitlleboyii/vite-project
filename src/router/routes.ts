import type { MenuItemType } from '@/types'
const baseRoutes: MenuItemType[] = [
  {
    name: 'login',
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    hidden: true,
    meta: {
      title: '登录',
    },
  },
  {
    name: 'index',
    path: '/',
    redirect: '/home',
    component: () => import('@/layout/index.vue'),
    meta: {
      title: '首页',
    },
    children: [
      {
        name: 'home',
        path: '/home',
        component: () => import('@/views/404/index.vue'),
        meta: {
          title: '首页',
          icon: 'House',
          isExternalLink: false,
        },
      },
    ],
  },
  {
    name: 'screen',
    path: '/screen',
    component: () => import('@/views/screen/index.vue'),
    meta: {
      title: '数据大屏',
      icon: 'DataBoard',
    },
  },
  {
    name: 'acl',
    path: '/acl',
    component: () => import('@/layout/index.vue'),
    meta: {
      title: '权限管理',
      icon: 'Lock',
    },
    children: [
      {
        name: 'user',
        path: '/acl/user',
        component: () => import('@/views/acl/user/index.vue'),
        meta: {
          title: '用户管理',
          icon: 'User',
        },
      },
      {
        name: 'role',
        path: '/acl/role',
        component: () => import('@/views/acl/role/index.vue'),
        meta: {
          title: '角色管理',
          icon: 'Operation',
        },
      },
      {
        name: 'menu',
        path: '/acl/menu',
        component: () => import('@/views/acl/menu/index.vue'),
        meta: {
          title: '菜单管理',
          icon: 'Menu',
        },
      },
    ],
  },
  {
    name: 'warehouse',
    path: '/warehouse',
    component: () => import('@/layout/index.vue'),
    meta: {
      title: '仓库管理',
      icon: 'Grid',
    },
    children: [
      {
        name: 'material',
        path: '/warehouse/material',
        component: () => import('@/views/warehouse/material/index.vue'),
        meta: {
          title: '物料管理',
          icon: 'Files',
        },
      },
      {
        name: 'inventory',
        path: '/warehouse/inventory',
        component: () => import('@/views/warehouse/inventory/index.vue'),
        meta: {
          title: '库存管理',
          icon: 'Present',
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
    },
  },
  {
    name: 'any',
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    hidden: true,
    meta: {
      title: 'any',
    },
  },
]

const routes: any = baseRoutes

export default routes
