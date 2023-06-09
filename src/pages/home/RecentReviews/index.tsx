import { Ratings } from '@/components/Ratings'
import { UserAvatar } from '@/components/UserAvatar'

import { IRating } from '..'

import {
  RecentReviewsContainer,
  ReviewCard,
  ReviewCardContent,
  ReviewCardHeader,
  ReviewUser,
} from './styles'
import Image from 'next/image'
import { useDetailedBookDialog } from '@/hooks/useDetailedBookDialog'

interface RecentReviewsProps {
  ratings?: IRating[]
}

export function RecentReviews({ ratings }: RecentReviewsProps) {
  const { DetailedBookDialog, showDialog } = useDetailedBookDialog()

  return (
    <RecentReviewsContainer>
      <h4>Avaliações mais recentes</h4>

      <DetailedBookDialog />

      <div>
        {ratings?.map((rating) => (
          <ReviewCard
            key={rating.id}
            onClick={() => showDialog(rating.book.id)}
          >
            <ReviewCardHeader>
              <ReviewUser>
                <UserAvatar src={rating.user.avatar_url} size="md" />
                <div>
                  <p>{rating.user.name}</p>
                  <span>{rating.created_at}</span>
                </div>
              </ReviewUser>

              <Ratings size={16} rate={rating.rate} />
            </ReviewCardHeader>

            <ReviewCardContent>
              <Image
                src={rating.book.cover_url}
                alt={rating.book.name}
                width={108}
                height={152}
                priority
              />

              <div>
                <strong>{rating.book.name}</strong>
                <span>{rating.book.author}</span>

                <p>{rating.book.summary}</p>
              </div>
            </ReviewCardContent>
          </ReviewCard>
        ))}
      </div>
    </RecentReviewsContainer>
  )
}
