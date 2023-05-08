import { styled } from '@/styles/stitches.config'

export const SearchInputContainer = styled('form', {
  border: '1px solid $gray500',
  borderRadius: '$sm',
  padding: '0.875rem 1.25rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  svg: {
    color: '$gray500',
  },

  '&:has(input:focus)': {
    borderColor: '$green200',
    svg: {
      color: '$green200',
    },
  },
})

export const Input = styled('input', {
  all: 'unset',
  width: '100%',
  fontSize: '$sm',

  '&::placeholder': {
    color: '$gray400',
  },
})
