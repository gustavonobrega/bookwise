import { styled } from '@/styles/stitches.config'

export const BookDialogShimmerContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  '.rating-text': {
    marginTop: 46,

    width: 132,
    height: 18,
    borderRadius: '$sm',
  },

  '.rating-box': {
    marginTop: 16,

    width: '100%',
    height: 178,
    borderRadius: '$sm',
  },
})

export const BookDialogShimmerCard = styled('div', {
  display: 'flex',
  gap: 32,

  padding: '1.5rem 2rem ',
  backgroundColor: '$gray700',
  borderRadius: '$md',

  '.book-image': {
    width: 171,
    height: 242,
    borderRadius: '$sm',
  },

  '.book-infos': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',

    paddingBlock: 4,

    '.infos': {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,

      '.info': {
        width: 160,
        height: 16,
        borderRadius: '$sm',
      },

      '.info:last-child': {
        width: 88,
      },
    },
  },
})
