import en from './locales/en'
import zhCN from './locales/zh-CN'

export type I18nKey = string
export type I18nLocale = 'en' | 'zh-CN'

const locales: Record<I18nLocale, Record<string, unknown>> = {
  en: en as unknown as Record<string, unknown>,
  'zh-CN': zhCN as unknown as Record<string, unknown>
}

let currentLocale: I18nLocale = 'zh-CN'

export function setLocale(locale: I18nLocale): void {
  currentLocale = locale
}

export function getLocale(): I18nLocale {
  return currentLocale
}

function getNested(obj: Record<string, unknown>, path: string): string | undefined {
  const keys = path.split('.')
  let current: unknown = obj
  for (const key of keys) {
    if (current == null || typeof current !== 'object') {
      return undefined
    }
    current = (current as Record<string, unknown>)[key]
  }
  return typeof current === 'string' ? current : undefined
}

export function t(key: string, params?: Record<string, string | number>): string {
  const localeData = locales[currentLocale] ?? locales['en']
  let value = getNested(localeData, key)
  if (value === undefined) {
    value = getNested(locales['en'], key)
  }
  if (value === undefined) {
    return key
  }
  if (params) {
    for (const [k, v] of Object.entries(params)) {
      value = value.replace(`{{${k}}}`, String(v))
    }
  }
  return value
}

export function translateText(value: string, params?: Record<string, string | number>): string {
  const localeData = locales[currentLocale] ?? locales['en']
  const uiText = localeData.uiText
  const fallbackUiText = locales['en'].uiText
  let translated =
    uiText && typeof uiText === 'object' ? (uiText as Record<string, unknown>)[value] : undefined
  if (typeof translated !== 'string') {
    translated =
      fallbackUiText && typeof fallbackUiText === 'object'
        ? (fallbackUiText as Record<string, unknown>)[value]
        : undefined
  }
  let result = typeof translated === 'string' ? translated : value
  if (params) {
    for (const [k, v] of Object.entries(params)) {
      result = result.replace(`{{${k}}}`, String(v))
    }
  }
  return result
}

export { en, zhCN }
export default locales
