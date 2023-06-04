import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import SvgIcon from './SvgIcon/index.vue'
import Echarts from './Echarts/index.vue'
import SearchBar from './SearchBar/index.vue'
import type { App, Component } from 'vue'

const customComponents: { [name: string]: Component } = {
  SvgIcon,
  Echarts,
  SearchBar,
}

export default {
  install(app: App) {
    // Register ElementPlusIconsVue components
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component)
    }

    // Register custom components
    for (const [key, component] of Object.entries(customComponents)) {
      app.component(key, component)
    }
  },
}
