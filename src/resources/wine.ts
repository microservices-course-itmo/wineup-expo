import ProducerResource from './producer'
import BrandResource from './brand'
import RegionResource from './region'
import GrapeResource from './grape'
import { WineUpResource } from './base'

export default class WineResource extends WineUpResource {
  readonly wineId: string = ''

  readonly name: string = ''

  readonly producerId: string = ''

  readonly brandId: string = ''

  readonly regionId: string = ''

  readonly grapeId: string = ''

  readonly color: string = ''

  readonly sugar: string = ''

  readonly avg: number = 0

  readonly year: number = 0

  pk(): string | undefined {
    return this.wineId
  }

  static urlRoot = WineUpResource.urlHandler('/wine/')

  static schema = {
    producerId: ProducerResource,
    brandId: BrandResource,
    regionId: RegionResource,
    grapeId: GrapeResource,
  }
}
