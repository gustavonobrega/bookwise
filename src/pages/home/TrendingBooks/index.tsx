import { BookCard } from '@/components/BookCard'
import { CustomLink } from '@/components/CustomLink'
import { CaretRight } from 'phosphor-react'
import {
  TrendingBooksContainer,
  TrendingBooksContent,
  TrendingBooksHeader,
} from './styles'
import { IPopularBook } from '..'

interface TrendingBooksProps {
  popularBooks?: IPopularBook[]
}

export function TrendingBooks({ popularBooks }: TrendingBooksProps) {
  return (
    <TrendingBooksContainer>
      <TrendingBooksHeader>
        <h4>Livro populares</h4>
        <CustomLink href="/explore" icon={<CaretRight size={16} />}>
          Ver todos
        </CustomLink>
      </TrendingBooksHeader>

      <TrendingBooksContent>
        {popularBooks?.map((popular) => (
          <BookCard size="sm" key={popular.id} book={popular} />
        ))}
      </TrendingBooksContent>
    </TrendingBooksContainer>
  )
}
