import { WineUpResource } from './WineUpResource'

export default class BrandResource extends WineUpResource {
  readonly id: string = ''

  readonly name: string = ''

  pk(): string | undefined {
    return this.id
  }

  urlRoot = super.urlHandler('/brand/')
}
