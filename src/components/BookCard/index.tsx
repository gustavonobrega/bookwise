import { PopularBook } from '@/pages/home'
import { Ratings } from '../Ratings'
import { BookCardContainer, BookInfo } from './styles'
import Image from 'next/image'

interface BookCardProps {
  size: 'sm' | 'md' | 'lg'
  popularBook: PopularBook
  description?: string
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

export function BookCard({ size, popularBook, description }: BookCardProps) {
  return (
    <BookCardContainer>
      <div>
        <Image
          width={`${sizes[size].width}`}
          height={`${sizes[size].height}`}
          src={popularBook.cover_url}
          alt={popularBook.name}
        />

        <BookInfo isSmall={size === 'sm'}>
          <strong>{popularBook.name}</strong>
          <span>{popularBook.author}</span>

          <Ratings size={16} rate={popularBook.rate} />
        </BookInfo>
      </div>

      {description && <p>{description}</p>}
    </BookCardContainer>
  )
}
