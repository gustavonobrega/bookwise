import Image from 'next/image'

import hero from '../../assets/hero.png'
import google from '../../assets/google-icon.svg'
import github from '../../assets/github-icon.svg'
import guest from '../../assets/guest-icon.svg'

import {
  LoginContainer,
  LoginType,
  ButtonsWrapper,
  SignInButton,
} from './styles'

export default function Login() {
  return (
    <LoginContainer>
      <Image src={hero} alt="Book Wise logo" quality={100} priority />
      <LoginType>
        <div>
          <h1>Boas vindas!</h1>
          <h2>Faça seu login ou acesse como visitante.</h2>

          <ButtonsWrapper>
            <SignInButton>
              <Image src={google} alt="Google icon" />
              Entrar com Google
            </SignInButton>
            <SignInButton>
              <Image src={github} alt="Github icon" />
              Entrar com GitHub
            </SignInButton>
            <SignInButton>
              <Image src={guest} alt="Guest icon" />
              Acessar como visitante
            </SignInButton>
          </ButtonsWrapper>
        </div>
      </LoginType>
    </LoginContainer>
  )
}
