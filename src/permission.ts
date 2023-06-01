import router from '@/router'
// 引入加载进度条
// @ts-expect-error 作者没写
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.configure({ showSpinner: false }) // 进度环隐藏
NProgress.configure({ ease: 'ease', speed: 200 }) // 调整动画曲线以及速度
NProgress.configure({ minimum: 0.3 }) // 设置最低百分比

router.beforeEach(async (to) => {
  NProgress.start()
  let token = localStorage.getItem('TOKEN')
  // 用户已登录
  if (token) {
    if (to.path === '/login') {
      return '/home'
    }
    return true
  }
  // 用户未登录
  else {
    if (to.path !== '/login') {
      return {
        path: '/login',
        query: {
          redirect: to.path,
        },
      }
    }
    return true
  }
})

router.afterEach(() => {
  NProgress.done()
})
