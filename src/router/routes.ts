import type { MenuItemType } from '@/types'
const baseRoutes: MenuItemType[] = [
  {
    name: 'login',
    path: '/login',
    component: () => import('@/views/login/login.vue'),
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
        component: () => import('@/views/home/home.vue'),
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
    component: () => import('@/views/screen/screen.vue'),
    meta: {
      title: '数据大屏',
      icon: 'DataBoard',
      isExternalLink: true,
    },
  },
  {
    name: 'acl',
    path: '/acl',
    redirect: '/acl/user',
    component: () => import('@/layout/index.vue'),
    meta: {
      title: '权限管理',
      icon: 'Lock',
      breadCrumb: true,
    },
    children: [
      {
        name: 'user',
        path: '/acl/user',
        component: () => import('@/views/acl/user/user.vue'),
        meta: {
          title: '用户管理',
          icon: 'User',
        },
      },
      {
        name: 'role',
        path: '/acl/role',
        component: () => import('@/views/acl/role/role.vue'),
        meta: {
          title: '角色管理',
          icon: 'Operation',
        },
      },
      {
        name: 'menu',
        path: '/acl/menu',
        component: () => import('@/views/acl/menu/menu.vue'),
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
    redirect: '/warehouse/material',
    component: () => import('@/layout/index.vue'),
    meta: {
      title: '仓库管理',
      icon: 'Grid',
      breadCrumb: true,
    },
    children: [
      {
        name: 'material',
        path: '/warehouse/material',
        component: () => import('@/views/warehouse/material/material.vue'),
        meta: {
          title: '物料管理',
          icon: 'Files',
        },
      },
      {
        name: 'inventory',
        path: '/warehouse/inventory',
        component: () => import('@/views/warehouse/inventory/inventory.vue'),
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
    component: () => import('@/views/404/404.vue'),
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
