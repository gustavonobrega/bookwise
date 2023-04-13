import { styled, keyframes } from '@/styles/stitches.config'

const shimmer = keyframes({
  '0%': {
    backgroundPosition: '0% 0%',
  },
  '100%': {
    backgroundPosition: '-135% 0%',
  },
})

export const Skeleton = styled('div', {
  backgroundImage: `linear-gradient(
    -90deg, 
    #0E1116 0%, 
    #252D4A 50%, 
    #0E1116 100%
  )`,

  backgroundSize: '400% 400%',

  animation: `${shimmer} 1.2s ease-in-out infinite`,
})
