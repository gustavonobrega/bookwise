import { MagnifyingGlass } from 'phosphor-react'
import { ComponentProps } from 'react'
import { Input, SearchInputContainer } from './styles'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

interface SearchInputProps extends ComponentProps<typeof Input> {
  placeholder: string
  handleSearchInput: (input: string) => void
}

const searchInputFormSchema = z.object({
  'search-input': z.string().transform((input) => input.toLocaleLowerCase()),
})

type searchInputFormData = z.infer<typeof searchInputFormSchema>

export function SearchInput({
  placeholder,
  handleSearchInput,
  ...props
}: SearchInputProps) {
  const { register, handleSubmit, resetField } = useForm<searchInputFormData>({
    resolver: zodResolver(searchInputFormSchema),
  })

  function handleInputSubmit(data: searchInputFormData) {
    handleSearchInput(data['search-input'])
    resetField('search-input')
  }

  return (
    <SearchInputContainer onSubmit={handleSubmit(handleInputSubmit)}>
      <Input
        type="text"
        placeholder={placeholder}
        {...props}
        {...register('search-input')}
      />
      <MagnifyingGlass size={20} />
    </SearchInputContainer>
  )
}
