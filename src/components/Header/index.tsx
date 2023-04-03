import { useRouter } from 'next/router'
import { Binoculars, ChartLineUp, User } from 'phosphor-react'
import { HeaderContainer } from './styles'

export function Header() {
  const router = useRouter()

  if (router.asPath === '/explore') {
    return (
      <HeaderContainer>
        <div>
          <Binoculars size={32} />
          <h1>Explorar</h1>
        </div>
      </HeaderContainer>
    )
  }

  if (router.asPath === '/profile') {
    return (
      <HeaderContainer>
        <div>
          <User size={32} />
          <h1>Perfil</h1>
        </div>
      </HeaderContainer>
    )
  }

  return (
    <HeaderContainer>
      <div>
        <ChartLineUp size={32} />
        <h1>Início</h1>
      </div>
    </HeaderContainer>
  )
}
