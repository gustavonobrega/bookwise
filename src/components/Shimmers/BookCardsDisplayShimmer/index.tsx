import { BookCardShimmer } from '../BookCardShimmer'
import { BookCardsShimmerContainer } from './styles'

interface BookCardsDisplayShimmerProps {
  templateCol?: 'grid-cols-1' | 'grid-cols-3'
}

export function BookCardsDisplayShimmer({
  templateCol,
}: BookCardsDisplayShimmerProps) {
  if (templateCol === 'grid-cols-3') {
    return (
      <BookCardsShimmerContainer templateCol={templateCol}>
        {Array.from({ length: 12 }).map((_, i) => {
          return <BookCardShimmer key={i} size="md" hasDescription={false} />
        })}
      </BookCardsShimmerContainer>
    )
  }

  return (
    <BookCardsShimmerContainer>
      <BookCardShimmer size="sm" hasDescription={false} />
      <BookCardShimmer size="sm" hasDescription={false} />
      <BookCardShimmer size="sm" hasDescription={false} />
      <BookCardShimmer size="sm" hasDescription={false} />
    </BookCardsShimmerContainer>
  )
}
