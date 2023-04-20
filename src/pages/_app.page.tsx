import '../lib/dayjs'

import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { SessionProvider } from 'next-auth/react'
import { Nunito } from 'next/font/google'

import { globalStyles } from '@/styles/global'
import DefaultLayout from '@/layouts/DefaultLayout'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '@/lib/react-query'

const nunito = Nunito({ subsets: ['latin'] })

globalStyles()

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const router = useRouter()

  if (router.pathname === '/login') {
    return (
      <QueryClientProvider client={queryClient}>
        <SessionProvider session={session}>
          <div className={nunito.className}>
            <Component {...pageProps} />
          </div>
        </SessionProvider>
      </QueryClientProvider>
    )
  }

  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider session={session}>
        <DefaultLayout className={nunito.className}>
          <Component {...pageProps} />
        </DefaultLayout>
      </SessionProvider>
    </QueryClientProvider>
  )
}
