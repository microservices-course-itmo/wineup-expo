import RegionResource from '../../resources/region'
import ShopResource from '../../resources/shop'
import GrapeResource from '../../resources/grape'
import ProducerResource from '../../resources/producer'
import BrandResource from '../../resources/brand'
import WineResource from '../../resources/wine'
import PositionResource from '../../resources/position'

export const positionMock = {
  winePositionId: 'wine_position1',
  wineId: 'wine1',
  shopId: 'shop1',
  price: 890.0,
  actualPrice: 790.5,
  linkToWine: 'http://shop1.com/wine1',
  volume: 10.0,
  description: '',
  gastronomy: 'gast',
  image: [0],
}

export const wineMock = {
  wineId: 'wine1',
  name: 'Wine 1',
  producerId: 'producer1',
  brandId: 'brand1',
  regionId: 'region1',
  grapeId: 'grape1',
  avg: 15.0,
  color: 'RED',
  sugar: 'DRY',
  year: 2018,
}

export const fixtures = [
  {
    request: RegionResource.detailShape(),
    params: { id: 'region1' },
    result: {
      id: 'region1',
      name: 'region',
      country: 'Russia',
    },
  },
  {
    request: ShopResource.detailShape(),
    params: {
      id: 'shop1',
    },
    result: {
      id: 'shop1',
      site: 'http://shop1.com/',
    },
  },
  {
    request: GrapeResource.detailShape(),
    params: {
      id: 'grape1',
    },
    result: {
      id: 'grape1',
      name: 'Izabel',
    },
  },
  {
    request: ProducerResource.detailShape(),
    params: {
      id: 'producer1',
    },
    result: {
      id: 'producer1',
      name: 'prod 1',
    },
  },
  {
    request: BrandResource.detailShape(),
    params: {
      id: 'brand1',
    },
    result: {
      id: 'brand1',
      name: 'AAA',
    },
  },
  {
    request: WineResource.detailShape(),
    params: { wineId: 'wine1' },
    result: wineMock,
  },
  {
    request: PositionResource.listShape(),
    params: {},
    result: [
      positionMock,
      { ...positionMock, winePositionId: 'wine_position2' },
    ],
  },
  {
    request: RegionResource.listShape(),
    params: {},
    result: [
      {
        id: 'region1',
        name: 'region',
        country: 'Russia',
      },
      {
        id: 'region2',
        name: 'region',
        country: 'Italy',
      },
      {
        id: 'region3',
        name: 'region',
        country: 'Spain',
      },
      {
        id: 'region4',
        name: 'region',
        country: 'USA',
      },
    ],
  },
]
