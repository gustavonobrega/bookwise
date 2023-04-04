import { ComponentProps } from 'react'
import { Avatar, AvatarContainer } from './styles'

interface UserAvatarProps extends ComponentProps<typeof Avatar> {
  size: 'sm' | 'md' | 'lg'
  src: string
}

export function UserAvatar({ size, src, ...props }: UserAvatarProps) {
  return (
    <AvatarContainer>
      <Avatar {...props} src={src} size={size} />
    </AvatarContainer>
  )
}
