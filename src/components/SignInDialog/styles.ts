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

const contentShow = keyframes({
  from: {
    opacity: 0,
    transform: 'translate(-50%, -48%) scale(0.96)',
  },
  to: {
    opacity: 1,
    transform: 'translate(-50%, -50%) scale(1)',
  },
})

export const DialogOverlay = styled(Dialog.Overlay, {
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  position: 'fixed',
  inset: 0,

  animation: `${overlayShow} 150ms`,
})

export const DialogContent = styled(Dialog.Content, {
  maxWidth: '32.25rem',
  width: '100%',
  padding: '3.5rem 4.5rem',
  backgroundColor: '$gray700',
  borderRadius: '$md',
  border: 0,
  boxShadow: '4px 16px 24px rgba(0, 0, 0, 0.25)',

  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',

  animation: `${contentShow} 150ms`,
})

export const DialogTitle = styled(Dialog.Title, {
  fontFamily: '$default',
  fontSize: '$md',
  color: '$gray200',
  lineHeight: '$short',
  textAlign: 'center',
})

export const DialogClose = styled(Dialog.Close, {
  position: 'absolute',
  top: 16,
  right: 16,
  cursor: 'pointer',

  color: '$gray400',
  transition: 'all 0.1s',

  '&:hover': {
    color: '$gray500',
  },
})

export const SignInButtons = styled('div', {
  marginTop: '$10',

  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
})

export const SignInButton = styled('button', {
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  gap: '$5',

  padding: '$5 $6',
  border: 0,
  borderRadius: '$md',
  backgroundColor: '$gray600',
  color: '$gray200',
  fontSize: '$lg',
  fontWeight: '$bold',
  cursor: 'pointer',
  transition: 'all 0.1s',

  svg: {
    width: 32,
    height: 32,
  },

  '&:hover': {
    backgroundColor: '$gray500',
  },
})
