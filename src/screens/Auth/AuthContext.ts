import React from 'react'

interface AuthContextProps {
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>
  isRegistered: boolean
  setIsRegistered: React.Dispatch<React.SetStateAction<boolean>>
}
export const AuthContext = React.createContext({} as AuthContextProps)
export const AuthProvider = AuthContext.Provider
