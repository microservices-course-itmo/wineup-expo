import { ReadShape, SchemaList, AbstractInstanceType } from 'rest-hooks'
import { Resource } from '@rest-hooks/rest'
import { WineUpResource } from './base'

interface Shop {
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

interface Wine {
  avg: number
  brand: NameIdProps
  color: string
  grape: NameIdProps[]
  name: string
  producer: NameIdProps
  region: RegionProps[]
  sugar: string
  wineId: string
  year: number
}

interface FilterParams {
  from: number
  to: number
  searchParameters: number
  sortBy: {
    attributeName: string
    order: 'asc' | 'desc'
  }
}

export default class CatalogResource extends WineUpResource {
  readonly winePositionId: string = ''

  readonly actualPrice: number = 0

  readonly description: string = ''

  readonly gastronomy: string = ''

  readonly image: string = ''

  readonly linkToWine: string = ''

  readonly price: number = 0

  readonly shop: Shop = { id: '', site: '' }

  readonly volume: number = 0

  readonly wine: Wine = {
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
    wineId: '',
    year: 0,
  }

  pk(): string {
    return this.winePositionId
  }

  static filtered<T extends typeof Resource>(
    this: T
  ): ReadShape<SchemaList<Readonly<AbstractInstanceType<T>>>> {
    return {
      ...this.listShape(),
      getFetchKey: (params: FilterParams): string => {
        return JSON.stringify(params)
      },
    }
  }

  get discount() {
    return 1 - this.actualPrice / this.price
  }

  get grapes() {
    if (!this.wine.grape.length) {
      return null
    }

    return this.wine.grape.map(({ name }) => name).join(', ')
  }

  get regions() {
    if (!this.wine.region.length) {
      return null
    }

    return this.wine.region.map(({ name }) => name).join(', ')
  }

  get imageUri() {
    let uri = ''
    const bytes = new Uint8Array(this.image)
    const len = bytes.byteLength

    for (let i = 0; i < len; i += 1) {
      uri += String.fromCharCode(bytes[i])
    }

    return uri
  }

  static urlRoot = WineUpResource.urlHandler('/position/true/')
}
