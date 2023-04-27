import * as Dialog from '@radix-ui/react-dialog'
import Image from 'next/image'
import { X } from 'phosphor-react'

import google from '../../assets/google-icon.svg'
import github from '../../assets/github-icon.svg'

import {
  DialogOverlay,
  DialogContent,
  DialogTitle,
  DialogClose,
  SignInButtons,
  SignInButton,
} from './styles'
import { signIn } from 'next-auth/react'

export function SignInDialog() {
  return (
    <Dialog.Portal>
      <DialogOverlay />
      <DialogContent>
        <DialogClose asChild>
          <X size={24} />
        </DialogClose>

        <DialogTitle>Faça login para deixar sua avaliação</DialogTitle>

        <SignInButtons>
          <SignInButton onClick={() => signIn('google')}>
            <Image src={google} alt="Google icon" />
            Entrar com Google
          </SignInButton>
          <SignInButton onClick={() => signIn('github')}>
            <Image src={github} alt="Github icon" />
            Entrar com GitHub
          </SignInButton>
        </SignInButtons>
      </DialogContent>
    </Dialog.Portal>
  )
}
