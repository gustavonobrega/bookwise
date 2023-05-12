import { useRouter } from 'next/router'
import { Binoculars, CaretLeft, ChartLineUp, User } from 'phosphor-react'
import { HeaderContainer } from './styles'
import { useSession } from 'next-auth/react'
import { CustomLink } from '../CustomLink'

export function Header() {
  const router = useRouter()
  const session = useSession()

  const { id } = router.query
  const loggedUser = session?.data?.user.id === id

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
          {loggedUser ? (
            <>
              <User size={32} />
              <h1>Perfil</h1>
            </>
          ) : (
            <CustomLink href="/" variant="secondary">
              Voltar
              <CaretLeft size={20} color="#F8F9FC" />
            </CustomLink>
          )}
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
