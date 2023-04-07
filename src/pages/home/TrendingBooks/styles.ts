import { styled } from '@/styles/stitches.config'

export const TrendingBooksContainer = styled('div', {})

export const TrendingBooksHeader = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  h4: {
    fontSize: '$sm',
    fontWeight: '$regular',
  },
})

export const TrendingBooksContent = styled('div', {
  marginTop: '1rem',
})
