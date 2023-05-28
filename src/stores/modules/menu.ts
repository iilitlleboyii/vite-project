import { defineStore } from 'pinia'
import routes from '@/router/routes'
export const useMenuStore = defineStore('menuStore', {
  state: () => {
    return {
      menuList: routes,
    }
  },
  actions: {},
  getters: {},
  persist: false,
})
