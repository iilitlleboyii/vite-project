import SvgIcon from './SvgIcon/index.vue'
import Echarts from './Echarts/index.vue'
import type { App, Component } from 'vue'

const components: { [name: string]: Component } = { SvgIcon, Echarts }

export default {
  install(app: App) {
    Object.keys(components).forEach((key: string) => {
      console.log(key)
      app.component(key, components[key])
    })
  },
}
