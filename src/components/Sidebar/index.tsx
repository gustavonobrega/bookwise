import Image from 'next/image'
import * as Dialog from '@radix-ui/react-dialog'
import { useRouter } from 'next/router'
import { signOut, useSession } from 'next-auth/react'
import { Binoculars, ChartLineUp, SignIn, SignOut, User } from 'phosphor-react'

import logo from '../../assets/logo.svg'
import { UserAvatar } from '../UserAvatar'

import { NavItem, NavMenu, SidebarContainer, SignButton } from './styles'
import { SidebarShimmer } from '../Shimmers/SidebarShimmer'
import { SignInDialog } from '../SignInDialog'

export function Sidebar() {
  const router = useRouter()
  const session = useSession()

  const isLoading = session.status === 'loading'
  const isSignedIn = session.status === 'authenticated'
  const { id } = router.query

  if (isLoading) {
    return <SidebarShimmer />
  }

  return (
    <SidebarContainer>
      <Image src={logo} alt="Book wise logo" />

      <NavMenu>
        <NavItem href="/" isActive={router.asPath === '/'}>
          <ChartLineUp size={24} />
          <strong>Início</strong>
        </NavItem>
        <NavItem href="/explore" isActive={router.asPath === '/explore'}>
          <Binoculars size={24} />
          <strong>Explorar</strong>
        </NavItem>
        {isSignedIn && (
          <NavItem
            href={`/profile/${session.data.user.id}`}
            isActive={
              router.asPath === `/profile/${session.data.user.id}` ||
              router.asPath === `/profile/${id}`
            }
          >
            <User size={24} />
            <strong>Perfil</strong>
          </NavItem>
        )}
      </NavMenu>

      {!isSignedIn ? (
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <SignButton>
              Fazer login
              <SignIn size={20} />
            </SignButton>
          </Dialog.Trigger>

          <SignInDialog />
        </Dialog.Root>
      ) : (
        <SignButton isSigned={isSignedIn} onClick={() => signOut()}>
          <UserAvatar
            src={session.data.user.avatar_url}
            alt={session.data.user.name}
            size="sm"
          />
          {session.data.user.name}
          <SignOut size={20} />
        </SignButton>
      )}
    </SidebarContainer>
  )
}
