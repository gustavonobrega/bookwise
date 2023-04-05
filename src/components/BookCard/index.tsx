import { Ratings } from '../Ratings'
import { BookCardContainer, BookInfo } from './styles'

interface BookCardProps {
  size: 'sm' | 'md' | 'lg'
  description?: string
}

export function BookCard({ size, description }: BookCardProps) {
  return (
    <BookCardContainer size={size}>
      <div>
        <img src="https://github.com/gustavonobrega.png" alt="" />

        <BookInfo>
          <strong>A revolução dos bichos</strong>
          <span>George Orwell</span>

          <Ratings size={16} />
        </BookInfo>
      </div>

      {description && <p>{description}</p>}
    </BookCardContainer>
  )
}
