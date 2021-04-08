import { WineUpResource } from './base'
import CatalogResource from './catalog'

export default class RecommendedResource extends WineUpResource {
  public readonly winePosition: CatalogResource | null = null

  public readonly recommendations: CatalogResource[] = []

  pk() {
    return this.winePosition?.winePositionId || undefined
  }

  static list() {
    const endpoint = super.list()
    const url = `${this.urlRoot}/byId`

    return endpoint.extend({
      url({ id }) {
        return `${url}/${id}`
      },
      schema: {
        winePosition: CatalogResource,
        recommendations: [CatalogResource],
      },
    })
  }

  static urlRoot = WineUpResource.urlHandler('/rec/true')
}
