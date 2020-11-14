import { Resource } from 'rest-hooks'

export default class WineCardResource extends Resource {
  readonly avg: number = 0
  readonly brand_id: string = ''
  readonly color: string = ''
  readonly grape_id: string = ''
  readonly name: string = ''
  readonly producer_id: string = ''
  readonly region_id: string = ''
  readonly sugar: string = ''
  readonly wine_id: string = ''
  readonly year: number = 0

  pk() {
    return this.name?.toString()
  }

  static fetchOptionsPlugin = (options: RequestInit) => {
    return {
      ...options,
      headers: {
        ...options.headers,
        accessToken: 123,
      },
    }
  }
  static urlRoot = 'http://77.234.215.138:48080/catalog-service/wine/'
}
