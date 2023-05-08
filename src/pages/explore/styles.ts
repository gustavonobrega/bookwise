import { styled } from '@/styles/stitches.config'

export const ExploreContainer = styled('div', {
  '> form': {
    position: 'absolute',
    right: 0,
    top: -9,
    width: '27.063rem',
  },
})

export const ExploreContent = styled('section', {
  marginTop: '3.375rem',
})

export const Categories = styled('ul', {
  display: 'flex',
  alignItems: 'center',
  gap: '$3',
  paddingBottom: '$2',

  overflowX: 'scroll',

  '&::-webkit-scrollbar': {
    height: 6,
  },
})

export const Categorie = styled('button', {
  padding: '4px 16px',
  border: '1px solid $purple100',
  borderRadius: '$full',
  fontSize: '$md',
  color: '$purple100',
  lineHeight: '$base',

  backgroundColor: '$gray800',
  transition: 'all 0.1s',
  cursor: 'pointer',

  '&:not(:disabled):hover': {
    backgroundColor: '$purple200',
    color: '$gray100',
  },

  variants: {
    isActive: {
      true: {
        backgroundColor: '$purple200',
        color: '$gray100',
        borderColor: 'transparent',
        cursor: 'default',
      },
    },
  },
})

export const Books = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '$5',

  marginTop: '3rem',
})
