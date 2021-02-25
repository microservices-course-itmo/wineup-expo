import { WineUpResource } from './WineUpResource'

export default class ShopResource extends WineUpResource {
  readonly id: string = ''

  readonly site: string = ''

  pk(): string | undefined {
    return this.id
  }

  urlRoot = super.urlHandler('/shop/')
}
