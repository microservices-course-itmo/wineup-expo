import camelCase from 'lodash/camelCase'
import snakeCase from 'lodash/snakeCase'
import { Resource } from '@rest-hooks/rest'
import Constants from 'expo-constants'
import { useAuthContext } from '../screens/Auth/AuthContext'

export abstract class WineUpResource extends Resource {
  static urlRoot = 'http://77.234.215.138:18080/catalog-service'

  static urlHandler(subPath: string) {
    return `${this.urlRoot}${subPath}`
  }

  static async fetch(input: RequestInfo, init: RequestInit) {
    if (init.body) {
      // eslint-disable-next-line no-param-reassign
      init.body = JSON.stringify(deeplyApplyKeyTransform(init.body, snakeCase))
    }

    const jsonResponse = await super.fetch(input, init)

    return deeplyApplyKeyTransform(jsonResponse, camelCase)
  }

  static useFetchInit(options: RequestInit) {
    let accessToken

    if (Constants.manifest.extra.STORYBOOK) {
      accessToken = undefined
    } else {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      accessToken = useAuthContext().accessToken
    }

    return {
      ...options,
      headers: {
        ...options.headers,
        accessToken: accessToken ? `Bearer ${accessToken}` : '123',
      },
    }
  }
}

export function deeplyApplyKeyTransform(
  obj: any,
  transform: (key: string) => string
) {
  const ret: Record<string, any> = Array.isArray(obj) ? [] : {}

  Object.keys(obj).forEach((key) => {
    if (obj[key] != null && typeof obj[key] === 'object') {
      ret[transform(key)] = deeplyApplyKeyTransform(obj[key], transform)
    } else {
      ret[transform(key)] = obj[key]
    }
  })

  return ret
}
