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

  variants: {
    size: {
      sm: {
        '> div': {
          img: {
            width: '4rem',
            height: '5.875rem',
          },
        },
      },
      md: {
        '> div': {
          img: {
            width: '6.125rem',
            height: '8.375rem',
          },
        },
      },
      lg: {
        '> div': {
          img: {
            width: '6.75rem',
            height: '9.5rem',
          },
        },
      },
    },
  },

  defaultVariants: {
    size: 'sm',
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
})
