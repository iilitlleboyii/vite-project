// scr/router/index.ts
import { createRouter, createWebHistory } from 'vue-router'
import pinia from '@/stores'
import { useMenuStore } from '@/stores'
// @ts-expect-error 作者没写
import NProgress from 'nprogress'

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

NProgress.configure({ showSpinner: false }) // 进度环隐藏
NProgress.configure({ ease: 'ease', speed: 200 }) // 调整动画曲线以及速度
NProgress.configure({ minimum: 0.3 }) // 设置最低百分比

router.beforeEach(async (to) => {
  NProgress.start()
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

router.afterEach(() => {
  NProgress.done()
})

export default router
