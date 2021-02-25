import { WineUpResource } from './base'

export default class ShopResource extends WineUpResource {
  readonly id: string = ''

  readonly site: string = ''

  pk(): string | undefined {
    return this.id
  }

  static urlRoot = WineUpResource.urlHandler('/shop/')
}
