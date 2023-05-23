import axios from 'axios'
// @ts-ignore
import { ElMessage } from 'element-plus'

let request = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 5000,
})

request.interceptors.request.use((config) => {
  return config
})

request.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    let msg = ''
    let status = error.response.status
    switch (status) {
      case 401:
        msg = 'token 过期'
        break
      case 403:
        msg = '暂无权限'
        break
      case 404:
        msg = '请求错误'
        break
    }
    ElMessage({
      type: 'error',
      msg,
    })
    return Promise.reject(error)
  },
)

export default request
