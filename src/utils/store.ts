import * as SecureStore from 'expo-secure-store'

export interface Tokens {
  accessToken: string | null
  refreshToken: string | null
}

export async function setTokens({ accessToken, refreshToken }: Tokens) {
  if (accessToken) {
    await SecureStore.setItemAsync('accessToken', accessToken)
  } else {
    await SecureStore.deleteItemAsync('accessToken')
  }

  if (refreshToken) {
    await SecureStore.setItemAsync('refreshToken', refreshToken)
  } else {
    await SecureStore.deleteItemAsync('refreshToken')
  }
}

export async function getTokens(): Promise<Tokens> {
  const accessToken = await SecureStore.getItemAsync('accessToken')
  const refreshToken = await SecureStore.getItemAsync('refreshToken')

  return { accessToken, refreshToken }
}
