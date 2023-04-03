import { styled } from '@/styles/stitches.config'

export const HeaderContainer = styled('header', {
  div: {
    display: 'flex',
    gap: '$3',

    svg: {
      color: '$green100',
    },

    h1: {
      fontSize: '1.5rem',
    },
  },
})
