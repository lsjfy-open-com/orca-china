import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from '../../../shared/i18n/locales/en'
import zhCN from '../../../shared/i18n/locales/zh-CN'
import { setLocale, type I18nLocale } from '../../../shared/i18n'

const resources = {
  en: { translation: en },
  'zh-CN': { translation: zhCN }
}

export function initI18n(locale: I18nLocale = 'zh-CN'): Promise<void> {
  setLocale(locale)
  return i18next
    .use(initReactI18next)
    .init({
      resources,
      lng: locale,
      fallbackLng: 'en',
      interpolation: {
        escapeValue: false
      },
      returnNull: false,
      returnEmptyString: false
    })
    .then(() => undefined)
}

export default i18next
