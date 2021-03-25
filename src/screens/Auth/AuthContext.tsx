import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react'
import jwt from 'jwt-decode'
import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha'
import { useResetter } from 'rest-hooks'
import useAuth, { SignUpRequestData } from '../../hooks/useAuth'
import useFirebase from '../../hooks/useFirebase'
import * as store from '../../utils/store'
import firebaseConfig from '../../../firebaseconfig'
import { Tokens } from '../../utils/store'

interface AuthContextProps {
  authenticate: (
    phoneNumber: string
  ) => Promise<(verificationCode: string) => void>
  accessToken: string | null
  signup: (data: Omit<SignUpRequestData, 'fireBaseToken'>) => Promise<void>
  signout: () => Promise<void>
  isAnonymous: boolean
  authorizeAsAnonymous: () => void
  closeAnonymousSession: () => void
}

export const AuthContext = createContext({} as AuthContextProps)

export function AuthProvider({ children }: PropsWithChildren<any>) {
  const resetCache = useResetter()
  const firebase = useFirebase()
  const auth = useAuth()
  const [tokens, setTokens] = useState<Tokens>({
    accessToken: null,
    refreshToken: null,
  })
  const [isAnonymous, setIsAnonymous] = useState(false)
  const recaptchaVerifier = useRef(new FirebaseRecaptchaVerifierModal({}))

  useEffect(() => {
    const effect = async () => {
      const storedTokens = await store.getTokens()

      console.log(storedTokens)

      try {
        await authorize(storedTokens)
      } catch (_) {
        setTokens({ accessToken: null, refreshToken: null })
      }
    }

    effect()
  }, [])

  const authorize = async ({ accessToken, refreshToken }: Tokens) => {
    if (!accessToken || !refreshToken) {
      const firebaseToken = await firebase.getIdToken()

      if (!firebaseToken) {
        throw new Error('User is not authenticated')
      }

      try {
        const response = await auth.signin(firebaseToken)

        await store.setTokens(response)
        setTokens(response)
        setIsAnonymous(false)
      } catch (_) {
        await firebase.signout()

        throw new Error('User is not registered')
      }

      return
    }

    const { exp } = jwt(accessToken)

    if (exp < Math.floor(Date.now() / 1000)) {
      const response = await auth.refresh(refreshToken)

      await store.setTokens(response)
      setTokens(response)

      return
    }

    setTokens({ accessToken, refreshToken })
  }

  const authenticate = async (phoneNumber: string) => {
    const verificationId = await firebase.getVerificationId(
      phoneNumber,
      recaptchaVerifier.current
    )

    return async (verificationCode: string) => {
      const firebaseToken = await firebase.signin(
        verificationId,
        verificationCode
      )

      const newTokens = await auth.signin(firebaseToken as string)

      await store.setTokens(newTokens)
      setTokens(newTokens)
      setIsAnonymous(false)
    }
  }

  const signup = async (data: Omit<SignUpRequestData, 'fireBaseToken'>) => {
    const fireBaseToken = (await firebase.getIdToken()) as string

    if (!fireBaseToken) {
      throw new Error('User is not authenticated in Firebase')
    }

    const newTokens = await auth.signup({
      ...data,
      fireBaseToken,
    })

    await store.setTokens(newTokens)
    setTokens(newTokens)
    setIsAnonymous(false)
  }

  const signout = async () => {
    const newTokens = { accessToken: null, refreshToken: null }

    await firebase.signout()

    await store.setTokens(newTokens)
    setTokens(newTokens)

    resetCache()
  }

  const authorizeAsAnonymous = () => {
    setIsAnonymous(true)
  }

  const closeAnonymousSession = () => {
    setIsAnonymous(false)
  }

  return (
    <>
      <FirebaseRecaptchaVerifierModal
        cancelLabel='ОТМЕНА'
        style={{ marginTop: '10%' }}
        ref={recaptchaVerifier}
        firebaseConfig={firebaseConfig}
      />
      <AuthContext.Provider
        value={{
          authenticate,
          signup,
          signout,
          accessToken: tokens.accessToken,
          isAnonymous,
          authorizeAsAnonymous,
          closeAnonymousSession,
        }}
      >
        {children}
      </AuthContext.Provider>
    </>
  )
}

export function useAuthContext() {
  return useContext(AuthContext)
}
