import { Skeleton } from '../Skeleton'
import {
  RecentReviewsShimmerWrapper,
  ReviewCardShimmerContainer,
  ReviewCardShimmerHeader,
  ReviewCardShimmerContent,
} from './styles'

export function RecentReviewsShimmer() {
  return (
    <RecentReviewsShimmerWrapper>
      <ReviewCardShimmerContainer>
        <ReviewCardShimmerHeader>
          <Skeleton className="avatar" />

          <div>
            <Skeleton className="text" />
            <Skeleton className="text" />
          </div>
        </ReviewCardShimmerHeader>

        <ReviewCardShimmerContent>
          <Skeleton className="book-image" />

          <div className="book-info">
            <Skeleton className="book-title" />

            <div className="book-description-wrapper">
              <Skeleton className="book-description" />
              <Skeleton className="book-description" />
              <Skeleton className="book-description" />
              <Skeleton className="book-description" />
            </div>
          </div>
        </ReviewCardShimmerContent>
      </ReviewCardShimmerContainer>

      <ReviewCardShimmerContainer>
        <ReviewCardShimmerHeader>
          <Skeleton className="avatar" />

          <div>
            <Skeleton className="text" />
            <Skeleton className="text" />
          </div>
        </ReviewCardShimmerHeader>

        <ReviewCardShimmerContent>
          <Skeleton className="book-image" />

          <div className="book-info">
            <Skeleton className="book-title" />

            <div className="book-description-wrapper">
              <Skeleton className="book-description" />
              <Skeleton className="book-description" />
              <Skeleton className="book-description" />
              <Skeleton className="book-description" />
            </div>
          </div>
        </ReviewCardShimmerContent>
      </ReviewCardShimmerContainer>
    </RecentReviewsShimmerWrapper>
  )
}
