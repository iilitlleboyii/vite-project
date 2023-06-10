// src/hook/useLocale.ts
// @ts-expect-error ts-migrate(2305) FIXME: Module '"vue-i18n"' has no exported member 'useI18n'.
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

export default function useLocale() {
  const i18n = useI18n()

  // 必须使用计算属性，不然一直是en-US
  const currentLocale = computed(() => {
    return i18n.locale.value
  })
  const setLocale = (locale: string) => {
    i18n.locale.value = locale
    localStorage.setItem('LOCALE', locale)
  }
  return {
    i18n,
    currentLocale,
    setLocale,
  }
}
