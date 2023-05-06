import logo from '../../assets/img/facebook.png'
import { LoginButton, LoginContainer, ProviderLogo, SignInText } from './styles'

const Login = () => {
  return (
    <LoginContainer>
      <LoginButton>
        <ProviderLogo src={logo} alt='Facebook' />
        <SignInText>Entrar com Facebook</SignInText>
      </LoginButton>
    </LoginContainer>
  )
}

export default Login
