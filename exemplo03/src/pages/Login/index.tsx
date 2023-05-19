import { GoogleAuthProvider, getAuth } from 'firebase/auth'
import { useContext, useEffect, useState } from 'react'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router-dom'

import logo from '../../assets/img/facebook.png'
import firebaseApp from '../../config/firebase'
import { UserContext } from '../../context/UserContext'
import { LoginButton, LoginContainer, ProviderLogo, SignInText } from './styles'

const Login = () => {
  const navigate = useNavigate()
  const { setProfilePic, setToken, setUserName, token } =
    useContext(UserContext)

  useEffect(() => {
    // Ponto de vulnerabilidade
    if (token) {
      navigate('/home')
    }
  })

  const [tokenProvided, setTokenProvided] = useState(true)

  const auth = getAuth(firebaseApp)
  auth.languageCode = 'pt-br'

  const [signinWithGoogle, googleUserCredentials, googleLoading, googleError] =
    useSignInWithGoogle(auth)

  if (googleUserCredentials) {
    const credentials = GoogleAuthProvider.credentialFromResult(
      googleUserCredentials
    )

    const token = credentials?.accessToken
    const { user } = googleUserCredentials
    const userName = user.displayName
    const profilePic = user.photoURL

    if (token) {
      setToken(token)
      setUserName(userName || '')
      setProfilePic(profilePic || '')
      navigate('/home')
    } else {
      setTokenProvided(false)
    }
  }

  if (googleError) {
    console.log(googleError)
  }

  return (
    <LoginContainer>
      <LoginButton onClick={() => signinWithGoogle()}>
        <ProviderLogo src={logo} alt='Facebook' />
        <SignInText>Entrar com Facebook</SignInText>
      </LoginButton>
    </LoginContainer>
  )
}

export default Login
