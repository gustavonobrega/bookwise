import { GetStaticProps } from 'next'
import { useState } from 'react'

import { prisma } from '@/lib/prisma'
import { api } from '@/lib/axios'

import { SearchInput } from '@/components/SearchInput'
import { BookCard } from '@/components/BookCard'
import { IPopularBook } from '../home'

import {
  Books,
  Category,
  Categories,
  ExploreContainer,
  ExploreContent,
} from './styles'
import { useDetailedBookDialog } from '@/hooks/useDetailedBookDialog'

interface IBooks extends IPopularBook {
  categories: [
    {
      category: {
        id: string
        name: string
      }
    },
  ]
}

interface ExploreProps {
  books: IBooks[]
  categories: [
    {
      id: string
      name: string
    },
  ]
}

export default function Explore({ books, categories }: ExploreProps) {
  const [selectedCategory, setSelectedCategory] = useState('Tudo')
  const [filteredBooks, setFilteredBooks] = useState<IBooks[]>([])

  const { showDialog, DetailedBookDialog } = useDetailedBookDialog()

  function handleShowDialog(id: string) {
    showDialog(id)
  }

  function handleSearchInput(input: string) {
    if (input.length > 0) {
      setSelectedCategory('')

      const filterByInput = books.filter(
        (book) =>
          book.name.toLocaleLowerCase().includes(input.toLocaleLowerCase()) ||
          book.author.toLocaleLowerCase().includes(input.toLocaleLowerCase()),
      )

      setFilteredBooks(filterByInput)
    }
  }

  function handleFilterByCategory(category: string) {
    setSelectedCategory(category)

    if (category === 'Tudo') {
      setFilteredBooks([])
    } else {
      const filterBooksByCat = books.filter((book) =>
        book.categories.some(
          (filterCategory) => filterCategory.category.name === category,
        ),
      )
      setFilteredBooks(filterBooksByCat)
    }
  }

  return (
    <ExploreContainer>
      <SearchInput
        placeholder="Buscar livro ou autor"
        handleSearchInput={handleSearchInput}
      />

      <ExploreContent>
        <Categories>
          <Category
            isActive={selectedCategory === 'Tudo'}
            disabled={selectedCategory === 'Tudo'}
            onClick={() => handleFilterByCategory('Tudo')}
          >
            Tudo
          </Category>
          {categories.map((category) => (
            <Category
              key={category.id}
              isActive={category.name === selectedCategory}
              disabled={category.name === selectedCategory}
              onClick={() => handleFilterByCategory(category.name)}
            >
              {category.name}
            </Category>
          ))}
        </Categories>

        <DetailedBookDialog />

        <Books>
          {filteredBooks.length > 0 ? (
            <>
              {filteredBooks.map((book) => (
                <BookCard
                  key={book.id}
                  size="md"
                  book={book}
                  handleShowDialog={handleShowDialog}
                />
              ))}
            </>
          ) : (
            <>
              {books.map((book) => (
                <BookCard
                  key={book.id}
                  size="md"
                  book={book}
                  handleShowDialog={handleShowDialog}
                />
              ))}
            </>
          )}
        </Books>
      </ExploreContent>
    </ExploreContainer>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const [response, categories] = await Promise.all([
    api.get('/books'),
    prisma.category.findMany(),
  ])

  return {
    props: {
      books: response.data,
      categories,
    },
  }
}
