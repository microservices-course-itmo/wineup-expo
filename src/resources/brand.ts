import { WineUpResource } from './base'

export default class BrandResource extends WineUpResource {
  readonly id: string = ''

  readonly name: string = ''

  pk(): string | undefined {
    return this.id
  }

  static urlRoot = WineUpResource.urlHandler('/brand/')
}
