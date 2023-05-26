import { getAuth } from 'firebase/auth'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import firebaseApp from '../../config/firebase'
import { UserContext } from '../../context/UserContext'
import {
  AppTitle,
  HeaderContainer,
  ProfileName,
  ProfilePic,
  SignoutButton,
} from './styles'

const Header = () => {
  const { userName, profilePic, setProfilePic, setToken, setUserName } =
    useContext(UserContext)

  const navigate = useNavigate()

  const doSignout = () => {
    const auth = getAuth(firebaseApp)
    auth
      .signOut()
      .then(() => {
        setToken('')
        setUserName('')
        setProfilePic('')
        navigate('/')
      })
      .catch((error) => console.log(error))
  }

  return (
    <HeaderContainer>
      <AppTitle>Exemplo Auth</AppTitle>
      <ProfilePic
        src={profilePic}
        alt='Foto do usuário'
        referrerPolicy='no-referrer'
      />
      <ProfileName>{userName}</ProfileName>
      <SignoutButton onClick={() => doSignout()}>
        <FontAwesomeIcon
          icon={faArrowRightFromBracket}
          style={{ color: '#ffffff' }}
        />
      </SignoutButton>
    </HeaderContainer>
  )
}

export default Header
