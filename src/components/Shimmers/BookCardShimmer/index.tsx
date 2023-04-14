import { Skeleton } from '../Skeleton'
import {
  BookCardShimmerContainer,
  BookCardShimmerInfo,
  BookCardShimmerDescription,
} from './styles'

interface BookCardShimmerProps {
  size: 'sm' | 'md' | 'lg'
  hasDescription: boolean
}

const variants = {
  sm: {
    width: '4rem',
    height: '5.875rem',
  },
  md: {
    width: '6.125rem',
    height: '8.375rem',
  },
  lg: {
    width: '6.75rem',
    height: '9.5rem',
  },
}

export function BookCardShimmer({
  size,
  hasDescription,
}: BookCardShimmerProps) {
  return (
    <BookCardShimmerContainer>
      <div className="content">
        <Skeleton
          css={{
            width: `${variants[size].width}`,
            height: `${variants[size].height}`,
            borderRadius: '$sm',
          }}
        />

        <BookCardShimmerInfo>
          <div className="title-wrapper">
            <Skeleton className="title" />
            <Skeleton className="title" />
          </div>

          <Skeleton className="rating" />
        </BookCardShimmerInfo>
      </div>

      {hasDescription && (
        <BookCardShimmerDescription>
          <Skeleton className="description" />
          <Skeleton className="description" />
          <Skeleton className="description" />
        </BookCardShimmerDescription>
      )}
    </BookCardShimmerContainer>
  )
}
