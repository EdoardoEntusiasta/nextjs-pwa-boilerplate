import type { I18n } from '@lingui/core'
import { en, it } from 'make-plural/plurals'

/** todo */

/**
 * Anounce which locales we are going to use and connect them to approprite plural rules
 * @param i18n 
 */
export function initTranslation(i18n: I18n): void {
  i18n.loadLocaleData({
    en: { plurals: en },
    it: { plurals: it },
    pseudo: { plurals: en }
  })
}


/**
 * Async load translation
 * @param locale 
 * @param isProduction 
 * @returns 
 */
export async function loadTranslation(locale: string, isProduction = true) {
  let data
  if (isProduction) {
    data = await import(`./../locales/${locale}/messages`)
  } else {
    data = await import(
      `@lingui/loader!./../locales/${locale}/messages.po`
    )
  }

  return data.messages
}