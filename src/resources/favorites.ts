import { WineUpResource } from './base'
import CatalogResource from './catalog'

export default class FavoritesResource extends WineUpResource {
  public readonly description = ''

  public readonly id = ''

  public readonly name = ''

  pk() {
    return this.id
  }

  static create() {
    const endpoint = super.create()
    const { urlRoot } = this

    return endpoint.extend({
      url({ id }) {
        return `${urlRoot}${id}`
      },
    })
  }

  static list() {
    const endpoint = super.list()
    const urlRoot = super.urlRoot

    return endpoint.extend({
      url() {
        return `${urlRoot}/favorites`
      },
      schema: [CatalogResource],
    })
  }

  static urlRoot = 'http://77.234.215.138:18080/user-service/favorites/'
}
