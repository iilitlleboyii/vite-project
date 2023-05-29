/**
 * 验证path是否为外链
 * @param {string} path
 * @returns {Boolean}
 */
export function verifyIsExternalLink(path: string) {
  return /^(https?:|mailto:|tel:)/.test(path)
}
