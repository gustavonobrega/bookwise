import { BookCard } from '@/components/BookCard'
import { CustomLink } from '@/components/CustomLink'
import { CaretRight } from 'phosphor-react'
import {
  TrendingBooksContainer,
  TrendingBooksContent,
  TrendingBooksHeader,
} from './styles'

export function TrendingBooks() {
  return (
    <TrendingBooksContainer>
      <TrendingBooksHeader>
        <h4>Livro populares</h4>
        <CustomLink href="/explore" icon={<CaretRight size={16} />}>
          Ver todos
        </CustomLink>
      </TrendingBooksHeader>

      <TrendingBooksContent>
        <BookCard size="sm" />
      </TrendingBooksContent>
    </TrendingBooksContainer>
  )
}
