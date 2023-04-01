import Image from 'next/image'
import { useRouter } from 'next/router'
import { Binoculars, ChartLineUp, SignIn, SignOut, User } from 'phosphor-react'

import logo from '../../assets/logo.svg'
import { UserAvatar } from '../UserAvatar'

import { NavItem, NavMenu, SidebarContainer, SignButton } from './styles'

export function Sidebar() {
  const isSignedIn = true
  const router = useRouter()

  return (
    <SidebarContainer>
      <Image src={logo} alt="Book wise logo" />

      <NavMenu>
        <NavItem href="/" isActive={router.pathname === router.asPath}>
          <ChartLineUp size={24} />
          <strong>Início</strong>
        </NavItem>
        <NavItem href="/explore" isActive={router.pathname === router.asPath}>
          <Binoculars size={24} />
          <strong>Explorar</strong>
        </NavItem>
        {isSignedIn && (
          <NavItem href="/profile" isActive={router.pathname === router.asPath}>
            <User size={24} />
            <strong>Perfil</strong>
          </NavItem>
        )}
      </NavMenu>

      {!isSignedIn ? (
        <SignButton>
          Fazer login
          <SignIn size={20} />
        </SignButton>
      ) : (
        <SignButton isSigned={isSignedIn}>
          <UserAvatar
            src="https://github.com/gustavonobrega.png"
            alt=""
            size="sm"
          />
          Gustavo
          <SignOut size={20} />
        </SignButton>
      )}
    </SidebarContainer>
  )
}
