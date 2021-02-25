import { WineUpResource} from './WineUpResource'
import WineResource from './wine'
import ShopResource from './shop'

export default class PositionResource extends WineUpResource {
  readonly winePositionId?: string = undefined

  readonly wineId: string = ''

  readonly shopId: string = ''

  readonly price: number = 0

  readonly actualPrice: number = 0

  readonly linkToWine: string = ''

  readonly volume: number = 0

  readonly description: string = ''

  readonly gastronomy: string = ''

  readonly image: string = ''

  pk(): string | undefined {
    return this.winePositionId
  }

  urlRoot = super.urlHandler('/position/')

  static schema = {
    wineId: WineResource.asSchema(),
    shopId: ShopResource.asSchema(),
  }
}
