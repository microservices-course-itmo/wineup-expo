import { CityID } from '../molecules/CityChooser'
import UnauthenticatedError from '../errors/Unauthenticated'

const API_URL = 'http://77.234.215.138:18080/user-service'

export interface SignUpRequestData {
  birthday: string
  fireBaseToken: string
  cityId: CityID
  name: string
}

enum AuthMethods {
  SignIn = '/login',
  SignUp = '/registration',
  Refresh = '/refresh',
  Validate = '/validate',
}

async function makeRequest(
  method: AuthMethods,
  { body, params }: { body?: any; params?: Record<string, string> }
) {
  let url = API_URL + method

  if (params) {
    url += `?${new URLSearchParams(params).toString()}`
  }

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    ...(body && { body: JSON.stringify(body) }),
  })

  if (response.status === 401) {
    throw new UnauthenticatedError(response.url)
  }

  return response
}

export default function useAuth() {
  const signin = async (firebaseToken: string) => {
    const response = await (
      await makeRequest(AuthMethods.SignIn, {
        body: { fireBaseToken: firebaseToken },
      })
    ).json()

    return {
      accessToken: response.accessToken,
      refreshToken: response.refreshToken,
    }
  }

  const signup = async (data: SignUpRequestData) => {
    return (await makeRequest(AuthMethods.SignUp, { body: data })).json()
  }

  const refresh = async (refreshToken: string) => {
    const response = await (
      await makeRequest(AuthMethods.Refresh, { params: { refreshToken } })
    ).json()

    return {
      accessToken: response.accessToken,
      refreshToken: response.refreshToken,
    }
  }

  const validate = async (token: string | null): Promise<boolean> => {
    if (token === null) {
      return false
    }

    return (
      (await makeRequest(AuthMethods.Validate, { params: { token } }))
        .status === 200
    )
  }

  return {
    signin,
    signup,
    refresh,
    validate,
  }
}
