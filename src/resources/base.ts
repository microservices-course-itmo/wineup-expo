import camelCase from 'lodash/camelCase'
import snakeCase from 'lodash/snakeCase'
import { Method, Resource } from 'rest-hooks'

export abstract class WineUpResource extends Resource {
  static urlRoot = 'http://77.234.215.138:18080/catalog-service'

  static urlHandler(subPath: string) {
    return `${this.urlRoot}${subPath}`
  }

  static async fetch(
    method: Method = 'get',
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

  static fetchOptionsPlugin(options: RequestInit) {
    return {
      ...options,
      headers: {
        ...options.headers,
        accessToken: '123',
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
