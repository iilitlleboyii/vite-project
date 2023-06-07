// @ts-expect-error 等待作者更新或者自己写个d.ts声明
import { createI18n } from 'vue-i18n'

import en from './en-US/en-US.ts'
import zh from './zh-CN/zh-CN.ts'

const defaultLocale = localStorage.getItem('LOCALE') || 'zh-CN'

const i18n = createI18n({
  locale: defaultLocale, // 当前语言
  fallbackLocale: 'en-US', // 不存在默认则为英文
  allowComposition: true, // 允许组合式api
  // legacy: false, // 如果要支持compositionAPI，此项必须设置为false;
  // globalInjection: true, // 全局注册$t方法
  messages: {
    // 标识:配置对象
    'en-US': en,
    'zh-CN': zh,
  },
})

export default i18n
