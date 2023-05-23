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
    let message = ''
    let status = error.response.status
    switch (status) {
      case 401:
        message = 'token 过期'
        break
      case 403:
        message = '暂无权限'
        break
      case 404:
        message = '请求错误'
        break
    }
    ElMessage.error(message)
    return Promise.reject(error)
  },
)

export default request
