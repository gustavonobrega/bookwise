import { globalCss } from './stitches.config'

export const globalStyles = globalCss({
  '*': {
    boxSizing: 'border-box',
    padding: 0,
    margin: 0,

    '&::-webkit-scrollbar': {
      width: 6,
    },

    '&::-webkit-scrollbar-thumb': {
      background: '$gray600',
      borderRadius: 999,
    },

    '&::-webkit-scrollbar-track': {
      background: '$gray700',
    },
  },

  body: {
    backgroundColor: '$gray800',
    color: '$gray100',
    '-webkit-font-smoothing': 'antialiased',
    fontFamily: '$default',
  },
})
