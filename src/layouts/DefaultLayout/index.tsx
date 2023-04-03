import { Header } from '@/components/Header'
import { Sidebar } from '@/components/Sidebar'
import { ReactNode } from 'react'
import { DefaultLayoutContainer } from './styles'

interface DefaultLayoutProps {
  children: ReactNode
  className: string
}

export default function DefaultLayout({
  children,
  className,
}: DefaultLayoutProps) {
  return (
    <DefaultLayoutContainer className={className}>
      <Sidebar />

      <div>
        <Header />

        {children}
      </div>
    </DefaultLayoutContainer>
  )
}
