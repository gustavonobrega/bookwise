import * as Dialog from '@radix-ui/react-dialog'
import Image from 'next/image'
import { BookOpen, BookmarkSimple, Check, X } from 'phosphor-react'

import {
  DialogOverlay,
  DialogContent,
  DialogClose,
  BookCard,
  BookDetail,
  Info,
  BookCategory,
  ExtraInfo,
  BookRatings,
  BookRatingsHeader,
  BookRatingCards,
  RatingCard,
  RatingCardHeader,
  RatingCardUser,
  RateForm,
  RateFormHeader,
  RateFormButtons,
} from './styles'
import { useEffect, useState } from 'react'
import { Ratings } from '../../components/Ratings'
import { UserAvatar } from '../../components/UserAvatar'
import { useQuery } from '@tanstack/react-query'
import { api } from '@/lib/axios'
import { formatTimeFromNow } from '@/utils/format-time-from-now'
import { useSession } from 'next-auth/react'
import { SignInDialog } from '@/components/SignInDialog'
import { BookDialogShimmer } from '@/components/Shimmers/BookDialogShimmer'
import { StarRating } from '@/components/StarRating'

interface IBookDetails {
  author: string
  cover_url: string
  created_at: string
  id: string
  name: string
  total_pages: string
  avgRate: number
  categories: {
    category: {
      id: string
      name: string
    }
  }[]
  ratings: {
    id: string
    created_at: string
    description: string
    rate: number

    user: {
      id: string
      name: string
      avatar_url: string
    }
  }[]
}

export function useDetailedBookDialog() {
  const [isOpen, setIsOpen] = useState(false)
  const [bookId, setBookId] = useState('')
  const [isRating, setIsRating] = useState(false)

  function showDialog(id: string) {
    setBookId(id)
    setIsOpen(true)
  }

  useEffect(() => {
    if (isOpen === false) {
      setIsRating(false)
    }
  }, [isRating, isOpen])

  const { data: book, isLoading } = useQuery<IBookDetails>(
    ['detailed-book', bookId],
    async () => {
      const response = await api.get(`/books/${bookId}`)

      const ratingDateFormatted = response.data.ratings.map((rating: any) => {
        return {
          ...rating,
          created_at: formatTimeFromNow(rating.created_at),
        }
      })

      const detailedBook = {
        ...response.data,
        ratings: ratingDateFormatted,
      }

      return detailedBook
    },
    {
      enabled: !!bookId,
    },
  )

  const session = useSession()

  const isAuthenticated = session.status === 'authenticated'
  const isAlreadyRated = book?.ratings.some(
    (rating) => rating.user.id === session.data?.user.id,
  )

  const DetailedBookDialog = () => {
    return (
      <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
        <Dialog.Portal>
          <DialogOverlay />

          <DialogContent onOpenAutoFocus={(e) => e.preventDefault()}>
            <DialogClose asChild>
              <X size={24} />
            </DialogClose>

            {!isLoading ? (
              <>
                <BookCard>
                  <BookDetail>
                    <Image
                      src={book!.cover_url}
                      alt={book!.name}
                      width={171}
                      height={242}
                    />

                    <Info>
                      <div>
                        <h3>{book?.name}</h3>
                        <h4>{book?.author}</h4>
                      </div>

                      <div>
                        <Ratings size={20} rate={book!.avgRate} />
                        <span>{book?.ratings.length} avaliações</span>
                      </div>
                    </Info>
                  </BookDetail>
                  <BookCategory>
                    <ExtraInfo>
                      <BookmarkSimple size={24} />

                      <div>
                        <span>Categoria</span>

                        <div>
                          {book?.categories.map((category, i) => (
                            <strong key={category.category.id}>
                              {book.categories[book.categories.length - 1] !==
                              category
                                ? `${category.category.name},`
                                : category.category.name}
                            </strong>
                          ))}
                        </div>
                      </div>
                    </ExtraInfo>
                    <ExtraInfo>
                      <BookOpen size={24} />

                      <div>
                        <span>Páginas</span>
                        <strong>{book?.total_pages}</strong>
                      </div>
                    </ExtraInfo>
                  </BookCategory>
                </BookCard>

                <BookRatings>
                  <BookRatingsHeader>
                    <span>Avaliações</span>
                    {!isAuthenticated && (
                      <Dialog.Root>
                        <Dialog.Trigger asChild>
                          <button>Avaliar</button>
                        </Dialog.Trigger>

                        <SignInDialog />
                      </Dialog.Root>
                    )}

                    {isAuthenticated && !isRating && !isAlreadyRated && (
                      <button onClick={() => setIsRating(true)}>Avaliar</button>
                    )}
                  </BookRatingsHeader>

                  {isRating && (
                    <RateForm>
                      <RateFormHeader>
                        <UserAvatar
                          src={session.data!.user.avatar_url}
                          size="md"
                        />

                        <strong>{session.data?.user.name}</strong>

                        <StarRating />
                      </RateFormHeader>

                      <textarea
                        maxLength={450}
                        placeholder="Escreva sua avaliação"
                      />

                      <RateFormButtons>
                        <button>
                          <X size={24} />
                        </button>

                        <button>
                          <Check size={24} />
                        </button>
                      </RateFormButtons>
                    </RateForm>
                  )}

                  <BookRatingCards>
                    {book?.ratings.map((ratingBook) => (
                      <RatingCard
                        key={ratingBook.id}
                        isRated={ratingBook.user.id === session.data?.user.id}
                      >
                        <RatingCardHeader>
                          <RatingCardUser>
                            <UserAvatar
                              src={ratingBook.user.avatar_url}
                              size="md"
                            />
                            <div>
                              <strong>{ratingBook.user.name}</strong>
                              <span>{ratingBook.created_at}</span>
                            </div>
                          </RatingCardUser>

                          <Ratings size={16} rate={ratingBook.rate} />
                        </RatingCardHeader>

                        <p>{ratingBook.description}</p>
                      </RatingCard>
                    ))}
                  </BookRatingCards>
                </BookRatings>
              </>
            ) : (
              <BookDialogShimmer />
            )}
          </DialogContent>
        </Dialog.Portal>
      </Dialog.Root>
    )
  }

  return {
    DetailedBookDialog,
    showDialog,
  }
}
