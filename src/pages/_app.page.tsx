import type { AppProps } from 'next/app'
import { Nunito } from 'next/font/google'

import { globalStyles } from '@/styles/global'
import { useRouter } from 'next/router'
import DefaultLayout from '@/layouts/DefaultLayout'

const nunito = Nunito({ subsets: ['latin'] })

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  if (router.pathname === '/login') {
    return (
      <div className={nunito.className}>
        <Component {...pageProps} />
      </div>
    )
  }

  return (
    <DefaultLayout className={nunito.className}>
      <Component {...pageProps} />
    </DefaultLayout>
  )
}
