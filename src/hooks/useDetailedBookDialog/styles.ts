import { keyframes, styled } from '@/styles/stitches.config'
import * as Dialog from '@radix-ui/react-dialog'

const overlayShow = keyframes({
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
  },
})

export const DialogOverlay = styled(Dialog.Overlay, {
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  position: 'fixed',
  inset: 0,

  animation: `${overlayShow} 150ms`,
})

export const DialogContent = styled(Dialog.Content, {
  maxWidth: '40.375rem',
  width: '100%',
  height: '100vh',
  padding: '4rem 3rem 0',
  backgroundColor: '$gray800',
  border: 0,
  boxShadow: '4px 16px 24px rgba(0, 0, 0, 0.25)',

  position: 'fixed',
  right: 0,
  top: 0,
  bottom: 0,

  overflow: 'auto',
})

export const DialogClose = styled(Dialog.Close, {
  position: 'absolute',
  top: 24,
  right: 48,
  cursor: 'pointer',

  color: '$gray400',
  transition: 'all 0.1s',

  '&:hover': {
    color: '$gray500',
  },
})

export const BookCard = styled('div', {
  padding: '1.5rem 2rem 1rem',
  backgroundColor: '$gray700',
  borderRadius: '$md',
})

export const BookDetail = styled('div', {
  display: 'flex',
  gap: '2rem',
})

export const Info = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  '> div:first-child': {
    h3: {
      fontSize: '$lg',
      lineHeight: '$short',
    },

    h4: {
      marginTop: '0.5rem',

      fontSize: '$md',
      color: '$gray300',
      fontWeight: '$regular',
      lineHeight: '$base',
    },
  },

  '> div:last-child': {
    span: {
      display: 'block',
      marginTop: '0.25rem',

      fontSize: '$sm',
      color: '$gray400',
      lineHeight: '$base',
    },
  },
})

export const BookCategory = styled('div', {
  marginTop: '2.5rem',
  padding: '1.5rem 0',
  borderTop: '1px solid $gray600',

  display: 'flex',
  gap: '3.5rem',
})

export const ExtraInfo = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',

  svg: {
    color: '$green100',
  },

  div: {
    display: 'flex',
    flexDirection: 'column',

    span: {
      fontSize: '$sm',
      color: '$gray300',
      lineHeight: '$base',
    },

    '> div': {
      display: 'flex',
      flexDirection: 'row',
      gap: '$1',

      strong: {
        color: '$gray200',
        lineHeight: '$short',
      },
    },
  },
})

export const BookRatings = styled('div', {
  marginTop: '2.875rem',
})

export const BookRatingsHeader = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '1.25rem',

  span: {
    fontSize: '$sm',
    color: '$gray200',
  },

  button: {
    fontSize: '$md',
    fontWeight: '$bold',
    background: 'transparent',
    border: 0,
    cursor: 'pointer',
    color: '$purple100',
    transition: 'color 0.1s',
    outline: 0,

    '&:hover': {
      color: '$purple200',
    },

    '&:focus': {
      outline: '1px solid $green200',
    },
  },
})

export const BookRatingCards = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$3',
})

export const RatingCard = styled('div', {
  padding: '1.5rem',
  background: '$gray700',
  borderRadius: '$sm',
  border: '2px solid transparent',
  cursor: 'pointer',

  '&:hover': {
    borderColor: '$gray600',
  },

  '> p': {
    fontSize: '$sm',
    marginTop: '1.25rem',
    color: '$gray300',
    lineHeight: '$base',
  },

  variants: {
    isRated: {
      true: {
        background: '$gray600',
      },
    },
    notAuthenticated: {
      true: {
        cursor: 'default',

        '&:hover': {
          borderColor: '$gray700',
        },
      },
    },
  },
})

export const RatingCardHeader = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
})

export const RatingCardUser = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$4',

  div: {
    display: 'flex',
    flexDirection: 'column',

    strong: {
      fontSize: '$md',
      lineHeight: '$short',
    },

    span: {
      fontSize: '$sm',
      color: '$gray400',
      lineHeight: '$base',
    },
  },
})

export const RateForm = styled('form', {
  padding: '1.5rem',
  background: '$gray700',
  borderRadius: '$sm',
  border: '2px solid transparent',
  marginBottom: '0.75rem',

  textarea: {
    marginTop: '1.5rem',
    width: '100%',
    height: '10.25rem',
    padding: '0.875rem 1.25rem 0.875rem 1.25rem',

    backgroundColor: '$gray800',
    border: '1px solid $gray500',
    borderRadius: '$sm',
    fontSize: '$sm',
    color: '$gray200',
    lineHeight: '$base',
    resize: 'none',

    '&:focus': {
      outline: 'none',
      borderColor: '$green200',
      caretColor: '$green200',
    },

    '&::placeholder': {
      color: '$gray400',
      fontSize: '$sm',
    },
  },
})

export const RateFormHeader = styled('div', {
  display: 'flex',
  alignItems: 'center',

  strong: {
    flex: 1,

    marginLeft: '1rem',
    lineHeight: '$short',
  },
})

export const RateFormButtons = styled('div', {
  marginTop: '0.75rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  gap: '$2',

  button: {
    padding: '0.5rem',
    backgroundColor: '$gray600',
    lineHeight: 0,
    border: 0,
    borderRadius: '$sm',
    cursor: 'pointer',
    color: '$purple100',

    '&:hover': {
      backgroundColor: '$gray500',
    },

    '&:focus': {
      outline: '1px solid $green200',
    },

    '&:last-child': {
      color: '$green100',
    },
  },
})
