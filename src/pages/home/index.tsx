import { useSession } from 'next-auth/react'
import { api } from '@/lib/axios'

import { LastRead } from './LastRead'
import { RecentReviews } from './RecentReviews'
import { TrendingBooks } from './TrendingBooks'
import { RecentReviewsShimmer } from '@/components/Shimmers/RecentReviewsShimmer'
import { BookCardsDisplayShimmer } from '@/components/Shimmers/BookCardsDisplayShimmer'

import { HomeContainer, MyBooks } from './styles'
import { formatTimeFromNow } from '@/utils/format-time-from-now'
import { useQuery } from '@tanstack/react-query'

export interface Rating {
  id: string
  rate: number
  created_at: string
  book: {
    name: string
    author: string
    summary: string
    cover_url: string
  }
  user: {
    name: string
    avatar_url: string
  }
}

export interface PopularBook {
  id: string
  author: string
  cover_url: string
  name: string
  summary: string
  rate: number
}

export interface LastReadBook {
  id: string
  rate: number
  created_at: string
  book: {
    name: string
    author: string
    summary: string
    cover_url: string
  }
}

export default function Home() {
  const session = useSession()

  const isSignedIn = session.status === 'authenticated'
  const userId = session.data?.user.id

  const { data: ratings, isLoading: isRatingsLoading } = useQuery<Rating[]>(
    ['ratings'],
    async () => {
      const response = await api.get('/ratings')

      const data = response.data.map((rating: Rating) => {
        return {
          id: rating.id,
          rate: rating.rate,
          created_at: formatTimeFromNow(rating.created_at),
          book: {
            name: rating.book.name,
            author: rating.book.author,
            summary: rating.book.summary,
            cover_url: rating.book.cover_url,
          },
          user: {
            name: rating.user.name,
            avatar_url: rating.user.avatar_url,
          },
        }
      })

      return data
    },
  )

  const { data: popularBooks, isLoading: isPopularLoading } = useQuery<
    PopularBook[]
  >(['popular'], async () => {
    const response = await api.get('/books/popular')

    return response.data
  })

  const { data: lastRead, isLoading: isLastReadLoading } =
    useQuery<LastReadBook>(['last-read', userId], async () => {
      const response = await api.get(`/profile/${userId}`)

      const book = {
        ...response.data.ratings[0],
        created_at: formatTimeFromNow(response.data.ratings[0].created_at),
      }

      return book
    })

  return (
    <HomeContainer>
      <MyBooks>
        {isSignedIn && !isLastReadLoading && lastRead && (
          <LastRead lastRead={lastRead} />
        )}
        {isRatingsLoading ? (
          <RecentReviewsShimmer />
        ) : (
          <RecentReviews ratings={ratings} />
        )}
      </MyBooks>

      {isPopularLoading ? (
        <BookCardsDisplayShimmer />
      ) : (
        <TrendingBooks popularBooks={popularBooks} />
      )}
    </HomeContainer>
  )
}
