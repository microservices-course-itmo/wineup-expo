import { Resource } from 'rest-hooks'
import { Utils } from './utils'

export default class ShopResource extends Resource {
  readonly id: string = ''

  readonly site: string = ''

  pk(): string | undefined {
    return this.id
  }

  static fetch = Utils.fetch

  static fetchOptionsPlugin = Utils.fetchOptionsPlugin

  static urlRoot = `${Utils.urlRoot}/shop/`
}
