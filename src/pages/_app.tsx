import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { i18n } from '@lingui/core'
import { I18nProvider } from '@lingui/react'
import { useRouter } from 'next/router'
import { useRef } from 'react'

function MyApp({ Component, pageProps }: AppProps) {

  const router = useRouter()
  const locale = String(router.locale || router.defaultLocale)
  const firstRender = useRef(true)

  if (pageProps.translation && firstRender.current) {
    //load the translations for the locale
    i18n.load(locale, pageProps.translation)
    i18n.activate(locale)
    // render only once
    firstRender.current = false
  }


  return (
    <I18nProvider i18n={i18n}>
      <Component {...pageProps} />
    </I18nProvider>
  );
}

export default MyApp
