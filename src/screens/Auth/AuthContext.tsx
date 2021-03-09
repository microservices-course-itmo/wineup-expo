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
import useAuth, { SignUpRequestData } from '../../hooks/useAuth'
import useFirebase from '../../hooks/useFirebase'
import * as store from '../../utils/store'
import firebaseConfig from '../../../firebaseconfig'
import { Tokens } from '../../utils/store'

interface AuthContextProps {
  authenticate: (
    phoneNumber: string
  ) => Promise<(verificationCode: string) => void>
  authorize: () => Promise<void>
  accessToken: string | null
  signup: (data: Omit<SignUpRequestData, 'fireBaseToken'>) => Promise<void>
}

export const AuthContext = createContext({} as AuthContextProps)

export function AuthProvider({ children }: PropsWithChildren<any>) {
  const firebase = useFirebase()
  const auth = useAuth()
  const [tokens, setTokens] = useState<Tokens>({
    accessToken: null,
    refreshToken: null,
  })
  const recaptchaVerifier = useRef(new FirebaseRecaptchaVerifierModal({}))

  useEffect(() => {
    const init = async () => {
      setTokens(await store.getTokens())

      try {
        await authorize()
      } catch (_) {
        setTokens({ accessToken: null, refreshToken: null })
      }
    }

    init()
  }, [])

  const authorize = async () => {
    const { accessToken, refreshToken } = tokens

    if (!accessToken || !refreshToken) {
      const firebaseToken = await firebase.getIdToken()

      if (firebaseToken) {
        try {
          const response = await auth.signin(firebaseToken)

          await store.setTokens(response)
          setTokens(response)
        } catch (_) {
          await firebase.signout()

          throw new Error('User is not registered')
        }

        return
      }

      throw new Error('User is not authenticated')
    }

    const { exp } = jwt(accessToken)

    if (exp < Math.floor(Date.now() / 1000)) {
      const response = await auth.refresh(refreshToken)

      await store.setTokens(response)
      setTokens(response)
    }
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
          authorize,
          signup,
          accessToken: tokens.accessToken,
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
