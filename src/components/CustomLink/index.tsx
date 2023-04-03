import { ComponentProps, ReactNode } from 'react'
import { LinkContainer } from './styles'

interface CustomLinkProps extends ComponentProps<typeof LinkContainer> {
  children: ReactNode
  icon?: ReactNode
}

export function CustomLink({ children, icon, ...props }: CustomLinkProps) {
  return (
    <LinkContainer {...props}>
      {children}
      {icon}
    </LinkContainer>
  )
}
