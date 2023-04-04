import { Star } from 'phosphor-react'
import { RatingsContainer } from './styles'

interface RatingsProps {
  size: 16 | 20 | 28
}

export function Ratings({ size }: RatingsProps) {
  return (
    <RatingsContainer>
      {Array.from({ length: 5 }, (_, i) => (
        <Star key={i} size={size} />
      ))}
    </RatingsContainer>
  )
}
