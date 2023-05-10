import { styled } from '@/styles/stitches.config'

export const BookCardContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  '> div': {
    display: 'flex',
    gap: '$5',

    img: {
      objectFit: 'cover',
      borderRadius: '$sm',
    },
  },

  padding: '1.125rem 1.25rem',
  background: '$gray700',
  border: '2px solid transparent',
  borderRadius: '$md',
  cursor: 'pointer',

  '&:hover': {
    borderColor: '$gray600',
  },

  p: {
    marginTop: '1.5rem',
    fontSize: '$sm',
    color: '$gray300',
  },
})

export const BookInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  strong: {
    lineHeight: '$short',
  },

  span: {
    color: '$gray400',
    fontSize: '$sm',
  },

  '> div': {
    marginTop: 'auto',
  },

  variants: {
    isSmall: {
      true: {
        strong: {
          display: '-webkit-box',
          '-webkit-line-clamp': 2,
          '-webkit-box-orient': 'vertical',
          overflow: 'hidden',
        },
      },
    },
    isLarge: {
      true: {
        strong: {
          fontSize: '$lg',
        },
      },
    },
  },
})
