import { Method, Resource } from 'rest-hooks'
import camelCase from 'lodash/camelCase'
import snakeCase from 'lodash/snakeCase'
import { deeplyApplyKeyTransform } from './utils'
import ProducerResource from './producer'
import BrandResource from './brand'
import RegionResource from './region'
import GrapeResource from './grape'

export default class WineResource extends Resource {
  readonly wineId: string = ''

  readonly name: string = ''

  readonly producerId: string = ''

  readonly brandId: string = ''

  readonly regionId: string = ''

  readonly grapeId: string = ''

  readonly color: string = ''

  readonly sugar: string = ''

  readonly avg: number = 0

  readonly year: number = 0

  pk(): string | undefined {
    return this.wineId
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

  static urlRoot = 'http://77.234.215.138:48080/catalog-service/wine/'

  static schema = {
    producerId: ProducerResource.asSchema(),
    brandId: BrandResource.asSchema(),
    regionId: RegionResource.asSchema(),
    grapeId: GrapeResource.asSchema(),
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
