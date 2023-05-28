// scr/router/index.ts
import { createRouter, createWebHistory } from 'vue-router'
import pinia from '@/stores'
import { useMenuStore } from '@/stores'

const $menuStore = useMenuStore(pinia)

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: $menuStore.menuList,
  scrollBehavior: () => {
    return {
      left: 0,
      top: 0,
      behavior: 'smooth',
    }
  },
})

router.beforeEach(async (to) => {
  let token = localStorage.getItem('TOKEN')
  if (to.name !== 'login') {
    if (token) {
      return true
    } else {
      return '/login'
    }
  } else {
    return true
  }
})

export default router
