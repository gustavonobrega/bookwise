import { styled } from '@/styles/stitches.config'

export const ProfileContainer = styled('main', {
  display: 'flex',
  marginTop: '2.5rem',
})

export const RatedBooks = styled('section', {
  flex: 1,
})

export const Books = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$6',
  marginTop: '2rem',

  '> div': {
    span: {
      display: 'block',
      fontSize: '$sm',
      color: '$gray300',
      marginBottom: '0.5rem',
    },

    '> div': {
      '&:hover': {
        borderColor: '$gray700',
        cursor: 'default',
      },
    },
  },
})

export const UserInfo = styled('section', {
  width: '19.25rem',
  marginLeft: '4rem',

  position: 'relative',

  '> div': {
    borderLeft: '1px solid $gray700',
    paddingLeft: '3.625rem',

    position: 'fixed',
  },
})

export const UserHeader = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  '&:after': {
    content: '',
    width: '2rem',
    height: '0.25rem',
    background: '$gradient-vertical',
    borderRadius: '9999px',
    marginBlock: '2.5rem',
  },

  h1: {
    fontSize: '$xl',
    lineHeight: '$short',
    marginTop: '1.25rem',
  },

  h3: {
    fontSize: '$sm',
    lineHeight: '$base',
    fontWeight: '$regular',
  },
})

export const UserBody = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$10',

  '> div': {
    display: 'flex',
    alignItems: 'center',
    gap: '$5',

    svg: {
      color: '$green100',
    },

    '> div': {
      display: 'flex',
      flexDirection: 'column',

      strong: {
        lineHeight: '$short',
      },

      span: {
        fontSize: '$sm',
        color: '$gray300',
        lineHeight: '$base',
      },
    },
  },
})

export const Loading = styled('div', {
  marginTop: '2rem',
  maxWidth: 640,

  '> div': {
    marginTop: '2rem',
  },
})
