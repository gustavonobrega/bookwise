import { styled } from '@/styles/stitches.config'

export const BookCardsShimmerContainer = styled('div', {
  display: 'grid',
  gap: '0.75rem',

  variants: {
    templateCol: {
      'grid-cols-1': {
        gridTemplateColumns: '1fr',
      },
      'grid-cols-3': {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
      },
    },
  },

  defaultVariants: {
    templateCol: 'grid-cols-1',
  },
})
