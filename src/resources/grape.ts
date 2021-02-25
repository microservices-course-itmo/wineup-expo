import { WineUpResource } from './WineUpResource'

export default class GrapeResource extends WineUpResource {
  readonly id: string = ''

  readonly name: string = ''

  pk(): string | undefined {
    return this.id
  }

  urlRoot = super.urlHandler('/grape/')
}
