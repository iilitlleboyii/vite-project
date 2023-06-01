import { createApp } from 'vue'
import App from './App.vue'

// 引入全局样式和变量
import './styles/index.scss'

// 引入element-plus插件及样式
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// @ts-expect-error 等待作者更新或者自己写个d.ts声明
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

// 配置SVG
import 'virtual:svg-icons-register'

// 引入自定义插件对象，注册整个项目全局组件
import globalComponent from './components'

// 引入路由守卫
import './permission'

import pinia from './stores'
import router from './router'

const app = createApp(App)
app.use(pinia)
app.use(router)
app.use(ElementPlus, {
  locale: zhCn,
})
app.use(globalComponent)

app.mount('#app')
