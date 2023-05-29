import type { DefineComponent } from 'vue'
export interface MenuItemType {
  name: string
  path: string
  alias?: string
  redirect?: string
  component?: DefineComponent | (() => Promise<any>)
  hidden?: boolean
  meta: {
    title: string
    icon?: string
    authRequired: boolean
    isExternalLink?: boolean
  }
  children?: MenuItemType[]
}
