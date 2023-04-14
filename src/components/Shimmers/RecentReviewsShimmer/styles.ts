import { styled } from '@/styles/stitches.config'

export const RecentReviewsShimmerWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$3',
})

export const ReviewCardShimmerContainer = styled('div', {
  padding: '$6',
  background: '$gray700',
  borderRadius: '$sm',
  border: '2px solid transparent',
})

export const ReviewCardShimmerHeader = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$4',

  '.avatar': {
    width: '2rem',
    height: '2rem',
    borderRadius: '999px',
  },

  div: {
    display: 'flex',
    flexDirection: 'column',
    gap: '$2',

    '.text': {
      borderRadius: '$xs',
      width: '5rem',
      height: '0.5rem',
    },

    '.text:last-child': {
      width: '2.5rem',
    },
  },
})

export const ReviewCardShimmerContent = styled('div', {
  display: 'grid',
  gridTemplateColumns: '6.75rem 1fr',
  gap: '$5',

  marginTop: '2rem',

  '.book-image': {
    width: '100%',
    height: '9.5rem',
    borderRadius: '$sm',
  },

  '.book-info': {
    width: '100%',
    padding: '0.5rem',

    '.book-title': {
      width: '5rem',
      height: '1rem',
      borderRadius: '$xs',
    },

    '.book-description-wrapper': {
      display: 'flex',
      flexDirection: 'column',
      gap: '$2',

      marginTop: '2.5rem',

      '.book-description': {
        width: '100%',
        height: '0.7rem',
        borderRadius: '$xs',
      },
    },
  },
})
