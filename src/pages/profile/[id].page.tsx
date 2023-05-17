import {
  BookOpen,
  BookmarkSimple,
  Books as BooksIcon,
  UserList,
} from 'phosphor-react'
import { api } from '@/lib/axios'

import { SearchInput } from '@/components/SearchInput'
import { BookCard } from '@/components/BookCard'
import { UserAvatar } from '@/components/UserAvatar'

import {
  ProfileContainer,
  RatedBooks,
  Books,
  UserInfo,
  UserHeader,
  UserBody,
  Loading,
} from './styles'

import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import { formatTimeFromNow } from '@/utils/format-time-from-now'
import { useState } from 'react'
import { BookCardShimmer } from '@/components/Shimmers/BookCardShimmer'

interface ICategory {
  category: {
    id: string
    name: string
  }
}

interface IBook {
  id: string
  name: string
  author: string
  summary: string
  rate: number
  cover_url: string
  total_pages: number
  categories: ICategory[]
}

interface IRating {
  id: string
  rate: number
  description: string
  created_at: string
  user_id: string
  book_id: string
  book: IBook
}

interface IProfile {
  id: string
  name: string
  avatar_url: string
  created_at: string
  ratings: IRating[]
  totalPages: number
  totalAuthors: string[]
  categoryMostReaded: number
}

export default function Profile() {
  const [filteredRatings, setFilteredRatings] = useState<IRating[]>([])
  const router = useRouter()
  const session = useSession()

  if (session.status === 'unauthenticated') {
    router.push('/login')
  }

  const { id } = router.query

  const { data, isLoading } = useQuery<IProfile>(['profile', id], async () => {
    const response = await api.get(`/profile/${id}`)

    const { totalPages, totalAuthors, categoriesMostReaded } =
      response.data.ratings.reduce(
        (acc: any, rating: IRating) => {
          acc.totalPages += rating.book.total_pages

          if (!acc.totalAuthors.includes(rating.book.author)) {
            acc.totalAuthors.push(rating.book.author)
          }

          rating.book.categories.forEach(
            (category) =>
              (acc.categoriesMostReaded[category.category.name] = acc
                .categoriesMostReaded[category.category.name]
                ? acc.categoriesMostReaded[category.category.name] + 1
                : 1),
          )

          return acc
        },
        {
          totalPages: 0,
          totalAuthors: [],
          categoriesMostReaded: {},
        },
      )

    const maxCategoryReaded = Math.max(
      ...Object.values<number>(categoriesMostReaded),
    )

    const categoryMostReaded = Object.keys(categoriesMostReaded).find(
      (key) => categoriesMostReaded[key] === maxCategoryReaded,
    )

    const data = {
      ...response.data,
      created_at: formatTimeFromNow(response.data.created_at),
      totalPages,
      totalAuthors,
      categoryMostReaded,
    }

    return data
  })

  function handleSearchInput(input: string) {
    if (input.length > 0) {
      const filteredData = data?.ratings.filter((rating: any) =>
        rating.book.name
          .toLocaleLowerCase()
          .includes(input.toLocaleLowerCase()),
      )

      setFilteredRatings(filteredData ?? [])
    } else {
      setFilteredRatings([])
    }
  }

  if (isLoading) {
    return (
      <Loading>
        <BookCardShimmer size="lg" hasDescription={true} />
        <BookCardShimmer size="lg" hasDescription={true} />
      </Loading>
    )
  }

  return (
    <ProfileContainer>
      <RatedBooks>
        <SearchInput
          placeholder="Buscar livro avaliado"
          handleSearchInput={handleSearchInput}
        />

        {filteredRatings.length > 0 ? (
          <Books>
            {filteredRatings?.map((rating) => (
              <div key={rating.book_id}>
                <span>{formatTimeFromNow(rating.created_at)}</span>
                <BookCard
                  size="lg"
                  book={{
                    id: rating.id,
                    author: rating.book.author,
                    cover_url: rating.book.cover_url,
                    name: rating.book.name,
                    summary: rating.description,
                    rate: rating.rate,
                  }}
                  description={rating.book.summary}
                />
              </div>
            ))}
          </Books>
        ) : (
          <Books>
            {data?.ratings.map((rating: IRating) => (
              <div key={rating.book_id}>
                <span>{formatTimeFromNow(rating.created_at)}</span>
                <BookCard
                  size="lg"
                  book={{
                    id: rating.id,
                    author: rating.book.author,
                    cover_url: rating.book.cover_url,
                    name: rating.book.name,
                    summary: rating.description,
                    rate: rating.rate,
                  }}
                  description={rating.book.summary}
                />
              </div>
            ))}
          </Books>
        )}
      </RatedBooks>

      <UserInfo>
        <div>
          <UserHeader>
            <UserAvatar size="lg" src={data!.avatar_url} />
            <h1>{data?.name}</h1>
            <h3>membro {data?.created_at}</h3>
          </UserHeader>

          <UserBody>
            <div>
              <BookOpen size={32} />

              <div>
                <strong>{data?.totalPages}</strong>
                <span>Páginas lidas</span>
              </div>
            </div>

            <div>
              <BooksIcon size={32} />

              <div>
                <strong>{data?.ratings.length}</strong>
                <span>Livros avaliados</span>
              </div>
            </div>

            <div>
              <UserList size={32} />

              <div>
                <strong>{data?.totalAuthors.length}</strong>
                <span>Autores lidos</span>
              </div>
            </div>

            <div>
              <BookmarkSimple size={32} />

              <div>
                <strong>{data?.categoryMostReaded}</strong>
                <span>Categoria mais lida</span>
              </div>
            </div>
          </UserBody>
        </div>
      </UserInfo>
    </ProfileContainer>
  )
}
