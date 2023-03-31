import { styled } from '@/styles/stitches.config'

export const LoginContainer = styled('div', {
  height: '100vh',
  maxWidth: '90rem',
  width: '100%',
  margin: '0 auto',
  display: 'grid',
  gridTemplateColumns: '37.375rem 1fr',

  '> img': {
    height: '100vh',
    padding: '1.25rem',
  },
})

export const LoginType = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  '> div': {
    width: '21.875rem',
  },

  h1: {
    fontSize: '$2xl',
    lineHeight: '$short',
    marginBottom: '$1',
  },

  h2: {
    fontSize: '$md',
    fontWeight: '$regular',
  },
})

export const ButtonsWrapper = styled('div', {
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
