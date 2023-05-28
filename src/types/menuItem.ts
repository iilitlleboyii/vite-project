import type { DefineComponent } from 'vue'
export interface MenuItem {
  name: string
  path: string
  alias?: string
  redirect?: string
  component?: DefineComponent | (() => Promise<any>)
  hidden?: boolean
  meta: {
    title: string
    authRequired: boolean
  }
  children?: MenuItem[]
}
