import { styled } from '@/styles/stitches.config'

export const LastReadContainer = styled('div', {
  marginBottom: '2.5rem',
})

export const LastReadHeader = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  h4: {
    fontSize: '$sm',
    fontWeight: '$regular',
  },
})

export const LastReadCard = styled('div', {
  display: 'flex',
  gap: '$6',

  marginTop: '1rem',
  maxHeight: '12rem',
  padding: '$5 $6',
  background: '$gray600',
  border: '2px solid transparent',
  borderRadius: '$md',

  overflow: 'hidden',

  cursor: 'pointer',

  '&:hover': {
    borderColor: '$gray500',
  },

  img: {
    objectFit: 'cover',
    borderRadius: '$sm',
  },
})

export const LastReadBookDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',
})

export const LastReadCardHeader = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  '> span': {
    color: '$gray300',
    fontSize: '$sm',
  },
})

export const MainInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  strong: {
    marginTop: '0.75rem',
    lineHeight: '$short',
  },

  '> span': {
    fontSize: '$sm',
    color: '$gray400',
  },

  p: {
    marginTop: '1.5rem',
    fontSize: '$sm',
    lineHeight: '$base',
    color: '$gray300',

    display: '-webkit-box',
    '-webkit-line-clamp': 2,
    '-webkit-box-orient': 'vertical',
    overflow: 'hidden',
  },
})
