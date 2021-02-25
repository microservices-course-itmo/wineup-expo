import { Resource } from 'rest-hooks'
import { Utils } from './utils'

export default class RegionResource extends Resource {
  readonly id: string = ''

  readonly name: string = ''

  readonly country: string = ''

  pk(): string | undefined {
    return this.id
  }

  static fetch = Utils.fetch

  static fetchOptionsPlugin = Utils.fetchOptionsPlugin

  static urlRoot = `${Utils.urlRoot}/region/`
}
