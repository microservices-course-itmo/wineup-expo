import { Resource } from 'rest-hooks'

interface IShop {
  id: string
  site: string
}

interface NameIdProps {
  id: string
  name: string
}

interface RegionProps {
  country: string
  id: string
  name: string
}

interface IWine {
  avg: number
  brand: NameIdProps
  color: string
  grape: [NameIdProps]
  name: string
  producer: NameIdProps
  region: [RegionProps]
  sugar: string
  wine_id: string
  year: number
}

export default class CatalogResource extends Resource {
  readonly actual_price: number = 0

  readonly description: string = ''

  readonly gastronomy: string = ''

  readonly image: string = ''

  readonly link_to_wine: string = ''

  readonly price: number = 0

  readonly shop: IShop = { id: '', site: '' }

  readonly volume: number = 0

  readonly wine: IWine = {
    avg: 0,
    brand: {
      id: '',
      name: '',
    },
    color: '',
    grape: [
      {
        id: '',
        name: '',
      },
    ],
    name: '',
    producer: {
      id: '',
      name: '',
    },
    region: [
      {
        country: '',
        id: '',
        name: '',
      },
    ],
    sugar: '',
    wine_id: '',
    year: 0,
  }
  readonly wine_position_id: string = ''

  pk() {
    return this.actual_price?.toString()
  }

  static fetchOptionsPlugin = (options: RequestInit) => {
    return {
      ...options,
      headers: {
        ...options.headers,
        accessToken: '123',
      },
    }
  }

  static urlRoot =
    'http://77.234.215.138:48 number = 08 number = 0/catalog-service/position/true/'
}
