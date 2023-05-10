import { useRouter } from 'next/router'
import { Binoculars, ChartLineUp, User } from 'phosphor-react'
import { HeaderContainer } from './styles'
import { useSession } from 'next-auth/react'

export function Header() {
  const router = useRouter()
  const session = useSession()

  const { id } = router.query

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

  if (
    router.asPath === `/profile/${session?.data?.user.id}` ||
    router.asPath === `/profile/${id}`
  ) {
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
