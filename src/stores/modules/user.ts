import { defineStore } from 'pinia'
import { reqLogin } from '@/api/user'
export const useUserStore = defineStore('userStore', {
  state: () => {
    const token = localStorage.getItem('TOKEN') || ''
    return {
      token,
    }
  },
  actions: {
    async userLogin(formParams: any) {
      let res = await reqLogin(formParams)
      if (res.code === 200) {
        this.token = res.data.token!
        localStorage.setItem('TOKEN', this.token)
        return Promise.resolve()
      } else {
        return Promise.reject(res.data.message)
      }
    },
  },
  getters: {},
  persist: false,
})
