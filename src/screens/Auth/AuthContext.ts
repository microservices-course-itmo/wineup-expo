import React from 'react'

interface AuthContextProps {
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>
  userTokens: { accessToken: string; refreshToken: string }
  setUserTokens: React.Dispatch<
    React.SetStateAction<{
      accessToken: string
      refreshToken: string
    }>
  >
}
export const AuthContext = React.createContext({} as AuthContextProps)
export const AuthProvider = AuthContext.Provider
