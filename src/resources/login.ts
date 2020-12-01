import { Method, Resource } from 'rest-hooks'
import camelCase from 'lodash/camelCase'
import snakeCase from 'lodash/snakeCase'
import { deeplyApplyKeyTransform } from './utils'

export type User = {
  accessToken: string
  refreshToken: string
  user: {
    birthdate: string
    cityId: number
    id: string
    name: string
    phoneNumber: string
    role: string
  }
}

export default class LoginResource extends Resource {
  readonly authResponse: User = {
    accessToken: '',
    refreshToken: '',
    user: {
      birthdate: '',
      cityId: 0,
      id: '',
      name: '',
      phoneNumber: '',
      role: '',
    },
  }

  pk(): string | undefined {
    return this.authResponse.user.id
  }

  static async fetch(
    method: Method = 'post',
    url: string,
    // eslint-disable-next-line @typescript-eslint/ban-types
    body?: Readonly<object | string>
  ) {
    // we'll need to do the inverse operation when sending data back to the server
    if (body) {
      // eslint-disable-next-line no-param-reassign
      body = deeplyApplyKeyTransform(body, snakeCase)
    }
    // perform actual network request getting back json
    const jsonResponse = await super.fetch(method, url, body)

    // do the conversion!
    return deeplyApplyKeyTransform(jsonResponse, camelCase)
  }

  static urlRoot = 'http://77.234.215.138:48080/user-service/login/'

  static fetchOptionsPlugin(options: RequestInit) {
    return {
      ...options,
      headers: {
        ...options.headers,
      },
    }
  }
}
