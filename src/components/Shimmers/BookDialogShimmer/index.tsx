import { Skeleton } from '../Skeleton'
import { BookDialogShimmerCard, BookDialogShimmerContainer } from './styles'

export function BookDialogShimmer() {
  return (
    <BookDialogShimmerContainer>
      <BookDialogShimmerCard>
        <Skeleton className="book-image" />

        <div className="book-infos">
          <div className="infos">
            <Skeleton className="info" />
            <Skeleton className="info" />
          </div>
          <div className="infos">
            <Skeleton className="info" />
            <Skeleton className="info" />
          </div>
        </div>
      </BookDialogShimmerCard>

      <Skeleton className="rating-text" />

      <Skeleton className="rating-box" />
    </BookDialogShimmerContainer>
  )
}
