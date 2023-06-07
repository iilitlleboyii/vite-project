import { createApp } from 'vue'
import App from './App.vue'

// 国际化语言配置
import i18n from './locale'

// 引入全局样式和变量
import './styles/index.scss'

// 引入element-plus插件及样式
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// @ts-expect-error 国际化配置
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

// 配置SVG
import 'virtual:svg-icons-register'

// 引入自定义插件对象，注册整个项目全局组件
import globalComponent from './components'

// 引入路由守卫
import './permission'

import pinia from './stores'
import router from './router'

const localeObj = {
  'zh-CN': zhCn,
}
const currentLocale = i18n.global.locale

const app = createApp(App)
app
  .use(pinia)
  .use(router)
  .use(ElementPlus, {
    locale: localeObj[currentLocale as keyof typeof localeObj],
  })
  .use(globalComponent)
  .use(i18n)

setTimeout(() => {
  app.mount('#app')
}, 1000 * 1.5)
