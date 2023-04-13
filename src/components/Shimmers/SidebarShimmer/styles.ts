import { SidebarContainer } from '@/components/Sidebar/styles'
import { styled } from '@/styles/stitches.config'

export const SidebarShimmerContainer = styled(SidebarContainer, {})

export const SidebarShimmerHeader = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$2',

  '.image': {
    borderRadius: '$sm',
    width: '1.5rem',
    height: '1.5rem',
  },

  '.title': {
    fontSize: '1.32rem',
    fontWeight: 'bold',
    backgroundClip: 'text',
    '-webkit-background-clip': 'text',
    color: 'transparent',
  },
})

export const SidebarShimmerNav = styled('ul', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',

  marginTop: '4rem',
  listStyle: 'none',

  li: {
    marginRight: '$8',
    display: 'flex',
    alignItems: 'center',
    gap: '$4',

    '.item-svg': {
      borderRadius: '$sm',
      width: '1.25rem',
      height: '1.25rem',
    },

    '.item-title': {
      borderRadius: '$md',
      width: '4rem',
      height: '0.5rem',
    },
  },
})
