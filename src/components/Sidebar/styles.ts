import { styled } from '@/styles/stitches.config'
import Link from 'next/link'

export const SidebarContainer = styled('aside', {
  width: '14.5rem',
  background: '$gray700',
  borderRadius: '$md',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  position: 'fixed',
  top: '$5',
  bottom: '$5',

  paddingBlock: '$10 $7',
})

export const NavMenu = styled('nav', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',

  marginTop: '4rem',
})

export const NavItem = styled(Link, {
  display: 'flex',
  alignItems: 'center',
  gap: '$3',

  textDecoration: 'none',
  color: '$gray400',
  fontSize: '$md',
  transition: 'color 0.1s',

  '&:before': {
    content: '',
    width: '0.25rem',
    height: '100%',
    background: '$gray700',
    borderRadius: '9999px',
    marginRight: '$1',
  },

  '&:hover': {
    color: '$gray100',
  },

  variants: {
    isActive: {
      true: {
        strong: {
          color: '$gray100',
        },

        '&:before': {
          background: '$gradient-vertical',
        },
      },
    },
  },
})

export const SignButton = styled('button', {
  display: 'flex',
  alignItems: 'center',
  gap: '$3',

  marginTop: 'auto',
  border: 0,
  background: 'transparent',
  color: '$gray200',
  fontSize: '$4',
  fontWeight: '$bold',
  cursor: 'pointer',

  svg: {
    color: '$green100',
  },

  variants: {
    isSigned: {
      true: {
        svg: {
          color: '#F75A68',
        },
      },
    },
  },
})
