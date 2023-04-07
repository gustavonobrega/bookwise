import { styled } from '@/styles/stitches.config'

export const RecentReviewsContainer = styled('div', {
  h4: {
    fontSize: '$sm',
    fontWeight: '$regular',
    marginBottom: '1rem',
  },

  '> div': {
    display: 'flex',
    flexDirection: 'column',
    gap: '$3',
  },
})

export const ReviewCard = styled('div', {
  padding: '$6',
  background: '$gray700',
  borderRadius: '$sm',
  border: '2px solid transparent',
  cursor: 'pointer',

  '&:hover': {
    borderColor: '$gray600',
  },
})

export const ReviewCardHeader = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
})

export const ReviewUser = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$4',

  div: {
    display: 'flex',
    flexDirection: 'column',

    p: {
      lineHeight: '$base',
    },

    span: {
      fontSize: '$sm',
      color: '$gray400',
    },
  },
})

export const ReviewCardContent = styled('div', {
  marginTop: '2rem',
  display: 'flex',
  gap: '$5',
  maxHeight: '9.5rem',
  overflow: 'hidden',

  img: {
    width: '6.75rem',
    height: '9.5rem',
    objectFit: 'cover',
    borderRadius: '$sm',
  },

  div: {
    display: 'flex',
    flexDirection: 'column',

    span: {
      fontSize: '$sm',
      color: '$gray400',
    },

    p: {
      marginTop: '1.25rem',
      fontSize: '$sm',
      lineHeight: '$base',
      color: '$gray300',

      display: '-webkit-box',
      '-webkit-line-clamp': 4,
      '-webkit-box-orient': 'vertical',
      overflow: 'hidden',
    },
  },
})
