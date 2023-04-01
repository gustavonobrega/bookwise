import { ComponentProps } from 'react'
import { Avatar, AvatarContainer } from './styles'

interface UserAvatarProps extends ComponentProps<typeof Avatar> {
  size: 'sm' | 'md' | 'lg'
}

export function UserAvatar({ size, ...props }: UserAvatarProps) {
  return (
    <AvatarContainer>
      <Avatar {...props} size={size} />
    </AvatarContainer>
  )
}
