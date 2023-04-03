import { styled } from '@/styles/stitches.config'

export const DefaultLayoutContainer = styled('div', {
  maxWidth: '90rem',
  width: '100%',
  margin: '0 auto',
  position: 'relative',

  paddingInline: '$5',

  '> div': {
    marginLeft: '21.75rem',
    marginTop: '4.5rem',
  },
})
