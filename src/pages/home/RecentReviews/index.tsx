import { Ratings } from '@/components/Ratings'
import { UserAvatar } from '@/components/UserAvatar'
import {
  RecentReviewsContainer,
  ReviewCard,
  ReviewCardContent,
  ReviewCardHeader,
  ReviewUser,
} from './styles'

export function RecentReviews() {
  return (
    <RecentReviewsContainer>
      <h4>Avaliações mais recentes</h4>

      <div>
        <ReviewCard>
          <ReviewCardHeader>
            <ReviewUser>
              <UserAvatar
                src="https://github.com/gustavonobrega.png"
                size="md"
              />
              <div>
                <p>Jaxson Dias</p>
                <span>Hoje</span>
              </div>
            </ReviewUser>

            <Ratings size={16} />
          </ReviewCardHeader>

          <ReviewCardContent>
            <img src="https://github.com/gustavonobrega.png" alt="" />

            <div>
              <strong>O Hobbit</strong>
              <span>J.R.R Tolkien</span>

              <p>
                Semper et sapien proin vitae nisi. Feugiat neque integer donec
                et aenean posuere amet ultrices. Cras fermentum id pulvinar
                varius leo a in. Amet libero pharetra nunc elementum fringilla
                velit ipsum. Sed vulputate massa velit nibh
              </p>
            </div>
          </ReviewCardContent>
        </ReviewCard>
      </div>
    </RecentReviewsContainer>
  )
}
