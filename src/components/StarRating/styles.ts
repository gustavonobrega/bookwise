import { styled } from '@/styles/stitches.config'

export const RateContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$1',

  svg: {
    color: '$purple100',
    cursor: 'pointer',
  },

  'input[type=radio]': {
    all: 'unset',
  },
})
