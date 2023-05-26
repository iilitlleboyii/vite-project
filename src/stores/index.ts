import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import piniaPluginRouter from 'pinia-plugin-router'
import router from '@/router'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
pinia.use(piniaPluginRouter(router))

export default pinia
