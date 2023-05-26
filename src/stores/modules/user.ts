import { defineStore } from 'pinia'
import { reqLogin, reqVerifyCode } from '@/api/user'
const useUserStore = defineStore('userStore', {
  state: () => {
    const token = localStorage.getItem('TOKEN')
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

    async checkUser() {
      let res: any = await reqVerifyCode()
      if (res.code === 200) {
        return res.data
      }
    },
  },
  getters: {},
  persist: false,
})

export default useUserStore
