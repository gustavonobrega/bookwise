import { MagnifyingGlass } from 'phosphor-react'
import { ComponentProps } from 'react'
import { Input, SearchInputContainer } from './styles'

interface SearchInputProps extends ComponentProps<typeof Input> {
  placeholder: string
}

export function SearchInput({ placeholder, ...props }: SearchInputProps) {
  return (
    <SearchInputContainer>
      <Input type="text" placeholder={placeholder} {...props} />
      <MagnifyingGlass size={20} />
    </SearchInputContainer>
  )
}
