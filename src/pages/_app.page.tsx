import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { SessionProvider } from 'next-auth/react'
import { Nunito } from 'next/font/google'

import { globalStyles } from '@/styles/global'
import DefaultLayout from '@/layouts/DefaultLayout'

const nunito = Nunito({ subsets: ['latin'] })

globalStyles()

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const router = useRouter()

  if (router.pathname === '/login') {
    return (
      <div className={nunito.className}>
        <SessionProvider session={session}>
          <Component {...pageProps} />
        </SessionProvider>
      </div>
    )
  }

  return (
    <DefaultLayout className={nunito.className}>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </DefaultLayout>
  )
}
