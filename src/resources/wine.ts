import ProducerResource from './producer'
import BrandResource from './brand'
import RegionResource from './region'
import GrapeResource from './grape'
import { WineUpResource } from './WineUpResource'

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

  urlRoot = super.urlHandler('/wine/')

  static schema = {
    producerId: ProducerResource.asSchema(),
    brandId: BrandResource.asSchema(),
    regionId: RegionResource.asSchema(),
    grapeId: GrapeResource.asSchema(),
  }
}
