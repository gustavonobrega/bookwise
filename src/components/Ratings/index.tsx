import { Star } from 'phosphor-react'
import { RatingsContainer } from './styles'

interface RatingsProps {
  size: 16 | 20 | 28
  rate: number
}

export function Ratings({ size, rate }: RatingsProps) {
  const stars = Array.from({ length: 5 }, (_, i) =>
    i + 1 <= rate ? 'fill' : 'regular',
  )

  return (
    <RatingsContainer>
      {stars.map((starWeight, i) => (
        <Star key={i} size={size} weight={starWeight} />
      ))}
    </RatingsContainer>
  )
}
