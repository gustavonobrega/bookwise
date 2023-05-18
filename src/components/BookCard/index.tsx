import { IPopularBook } from '@/pages/home'
import { Ratings } from '../Ratings'
import { BookCardContainer, BookInfo } from './styles'
import Image from 'next/image'

interface BookCardProps {
  size: 'sm' | 'md' | 'lg'
  book: IPopularBook
  description?: string
  handleShowDialog?: (id: string) => void
}

const sizes = {
  sm: {
    width: 64,
    height: 94,
  },
  md: {
    width: 98,
    height: 134,
  },
  lg: {
    width: 108,
    height: 152,
  },
}

export function BookCard({
  size,
  book,
  description,
  handleShowDialog,
}: BookCardProps) {
  return (
    <BookCardContainer onClick={() => handleShowDialog!(book.id)}>
      <div>
        <Image
          width={`${sizes[size].width}`}
          height={`${sizes[size].height}`}
          src={book.cover_url}
          alt={book.name}
        />

        <BookInfo isSmall={size === 'sm'} isLarge={size === 'lg'}>
          <strong>{book.name}</strong>
          <span>{book.author}</span>

          <Ratings size={16} rate={book.rate} />
        </BookInfo>
      </div>

      {description && <p>{description}</p>}
    </BookCardContainer>
  )
}
