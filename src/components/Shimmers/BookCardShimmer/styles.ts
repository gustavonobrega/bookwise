import { styled } from '@/styles/stitches.config'

export const BookCardShimmerContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  padding: '1.125rem 1.25rem',
  background: '$gray700',
  border: '2px solid transparent',
  borderRadius: '$md',

  '.content': {
    display: 'flex',
    gap: '$5',
  },
})

export const BookCardShimmerInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  marginTop: '$2',

  '.title-wrapper': {
    display: 'flex',
    flexDirection: 'column',
    gap: '$2',

    '.title': {
      width: '6rem',
      height: '0.6rem',
      borderRadius: '$xs',
    },

    '.title:last-child': {
      width: '4rem',
      height: '0.5rem',
    },
  },

  '.rating': {
    marginTop: 'auto',
    width: '6rem',
    height: '0.7rem',
    borderRadius: '$xs',
  },
})

export const BookCardShimmerDescription = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$2',

  marginTop: '1.5rem',

  '.description': {
    width: '100%',
    height: '0.7rem',
    borderRadius: '$xs',
  },
})
