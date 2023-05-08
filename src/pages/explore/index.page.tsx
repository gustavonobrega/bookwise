import { GetStaticProps } from 'next'
import { useEffect, useState } from 'react'

import { prisma } from '@/lib/prisma'
import { api } from '@/lib/axios'

import { SearchInput } from '@/components/SearchInput'
import { BookCard } from '@/components/BookCard'
import { IPopularBook } from '../home'

import {
  Books,
  Categorie,
  Categories,
  ExploreContainer,
  ExploreContent,
} from './styles'

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
  const [selectedCategorie, setSelectedCategory] = useState('')
  const [searchInput, setSearchInput] = useState('')
  const [filteredBooks, setFilteredBooks] = useState<IBooks[]>([])

  function handleSearchInput(input: string) {
    setSelectedCategory('')
    setSearchInput(input)
  }

  useEffect(() => {
    if (selectedCategorie !== '') {
      const filterBooksByCat = books.filter((book) =>
        book.categories.some(
          (category) => category.category.name === selectedCategorie,
        ),
      )
      setFilteredBooks(filterBooksByCat)
      setSearchInput('')
    } else if (searchInput !== '') {
      const filterByInput = books.filter(
        (book) =>
          book.name.toLocaleLowerCase().includes(searchInput) ||
          book.author.toLocaleLowerCase().includes(searchInput),
      )
      setFilteredBooks(filterByInput)
      setSelectedCategory('')
    } else {
      setFilteredBooks([])
    }
  }, [selectedCategorie, books, searchInput])

  return (
    <ExploreContainer>
      <SearchInput
        placeholder="Buscar livro ou autor"
        handleSearchInput={handleSearchInput}
      />

      <ExploreContent>
        <Categories>
          <Categorie
            isActive={selectedCategorie === ''}
            disabled={selectedCategorie === ''}
            onClick={() => setSelectedCategory('')}
          >
            Tudo
          </Categorie>
          {categories.map((categorie) => (
            <Categorie
              key={categorie.id}
              isActive={categorie.name === selectedCategorie}
              disabled={categorie.name === selectedCategorie}
              onClick={() => setSelectedCategory(categorie.name)}
            >
              {categorie.name}
            </Categorie>
          ))}
        </Categories>

        <Books>
          {filteredBooks.length > 0 ? (
            <>
              {filteredBooks.map((book) => (
                <BookCard key={book.id} size="md" book={book} />
              ))}
            </>
          ) : (
            <>
              {books.map((book) => (
                <BookCard key={book.id} size="md" book={book} />
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
