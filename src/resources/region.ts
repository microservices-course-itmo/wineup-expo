import { WineUpResource } from './base'

export default class RegionResource extends WineUpResource {
  readonly id: string = ''

  readonly name: string = ''

  readonly country: string = ''

  pk(): string | undefined {
    return this.id
  }

  static urlRoot = WineUpResource.urlHandler('/region/')
}
