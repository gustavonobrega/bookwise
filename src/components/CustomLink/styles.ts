import { styled } from '@/styles/stitches.config'
import Link from 'next/link'

export const LinkContainer = styled(Link, {
  display: 'flex',
  alignItems: 'center',
  gap: '$2',

  padding: '$1',
  borderRadius: '$sm',
  fontSize: '$sm',
  textDecoration: 'none',

  variants: {
    variant: {
      primary: {
        color: '$purple100',

        '&:hover': {
          background: 'rgba(131, 129, 217, 0.06)',
        },
      },
      secondary: {
        color: '$gray100',
        flexDirection: 'row-reverse',

        '&:hover': {
          background: 'rgba(230, 232, 242, 0.04)',
        },
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
  },
})
