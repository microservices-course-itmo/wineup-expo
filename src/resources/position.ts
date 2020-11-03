import { Method, Resource } from 'rest-hooks'
import camelCase from 'lodash/camelCase'
import snakeCase from 'lodash/snakeCase'
import { deeplyApplyKeyTransform } from './utils'

export default class PositionResource extends Resource {
  readonly winePositionId?: string = undefined

  readonly wineId: string = ''

  readonly shopId: string = ''

  readonly price: number = 0

  readonly actualPrice: number = 0

  readonly linkToWine: string = ''

  readonly volume: number = 0

  readonly description: string = ''

  readonly gastronomy: string = ''

  readonly image: string = ''

  pk(): string | undefined {
    return this.winePositionId
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

  static urlRoot = 'http://77.234.215.138:48080/catalog-service/position/'
}
