import { Method, Resource } from 'rest-hooks'
import camelCase from 'lodash/camelCase'
import snakeCase from 'lodash/snakeCase'
import { deeplyApplyKeyTransform } from './utils'

export default class ShopResource extends Resource {
  readonly id: string = ''

  readonly site: string = ''

  pk(): string | undefined {
    return this.id
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

  static urlRoot = 'http://77.234.215.138:48080/catalog-service/shop/'

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
