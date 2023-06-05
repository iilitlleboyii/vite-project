/**
 * 防抖函数，用于限制事件的触发频率
 * @param func 需要防抖的函数
 * @param delay 防抖延迟时间（毫秒）
 * @returns 一个新的函数，具有防抖功能
 */
export function debounce<T extends Function>(
  func: T,
  delay: number,
): (...args: any[]) => void {
  let timerId: ReturnType<typeof setTimeout> | null
  return function (this: any, ...args: any[]) {
    if (timerId) {
      clearTimeout(timerId)
    }
    timerId = setTimeout(() => {
      func.apply(this, args)
      timerId = null
    }, delay)
  }
}
