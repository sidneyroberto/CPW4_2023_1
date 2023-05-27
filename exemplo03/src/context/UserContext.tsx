import { ReactNode, createContext, useEffect, useState } from 'react'

type UserContextType = {
  token: string
  userName: string
  profilePic: string
  setToken: (newState: string) => void
  setUserName: (newState: string) => void
  setProfilePic: (newState: string) => void
}

const initialValue: UserContextType = {
  token: localStorage.getItem('token') || '',
  userName: localStorage.getItem('userName') || '',
  profilePic: localStorage.getItem('profilePic') || '',
  setToken: () => {},
  setUserName: () => {},
  setProfilePic: () => {},
}

export const UserContext = createContext(initialValue)

type Props = {
  children: ReactNode
}

export const UserContextProvider = ({ children }: Props) => {
  const [token, setToken] = useState(initialValue.token)
  const [userName, setUserName] = useState(initialValue.userName)
  const [profilePic, setProfilePic] = useState(initialValue.profilePic)

  useEffect(() => {
    localStorage.setItem('token', token)
    localStorage.setItem('userName', userName)
    localStorage.setItem('profilePic', profilePic)
  }, [token, userName, profilePic])

  return (
    <UserContext.Provider
      value={{
        token,
        setToken,
        userName,
        setUserName,
        profilePic,
        setProfilePic,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
