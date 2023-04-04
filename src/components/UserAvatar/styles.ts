import { styled } from '@/styles/stitches.config'

export const AvatarContainer = styled('div', {
  width: 'fit-content',
  background: '$gradient-vertical',
  borderRadius: '999px',
  lineHeight: 0,
})

export const Avatar = styled('img', {
  border: '1px solid transparent',
  borderRadius: '999px',

  variants: {
    size: {
      sm: {
        width: '2rem',
        height: '2rem',
      },
      md: {
        width: '2.5rem',
        height: '2.5rem',
      },
      lg: {
        width: '4.5rem',
        height: '4.5rem',
      },
    },
  },

  defaultVariants: {
    size: 'sm',
  },
})
