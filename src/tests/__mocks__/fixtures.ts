import RegionResource from '../../resources/region'
import ShopResource from '../../resources/shop'
import GrapeResource from '../../resources/grape'
import ProducerResource from '../../resources/producer'
import BrandResource from '../../resources/brand'
import WineResource from '../../resources/wine'
import PositionResource from '../../resources/position'
import CatalogResource from '../../resources/catalog'
import bottleImage from './bottle.png'

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

export const wine1CatMock = {
  actualPrice: 600,
  description: 'description1',
  gastronomy: 'gastronomy1',
  image: bottleImage,
  linkToWine: 'http://shop1.com/wine1',
  price: 1200,
  shop: { id: '10', site: 'http://shop1.com/', name: 'Shop 1' },
  volume: 0.75,
  wine: {
    avg: 14,
    brand: { id: '1', name: 'brand1' },
    color: 'RED',
    grape: [{ id: '1', name: 'grape1' }],
    name: 'Sweet Pays D`Herault',
    producer: { id: '1', name: 'producer1' },
    region: [{ country: 'France', id: '1', name: 'Languedoc-Roussillon' }],
    sugar: 'SEMI-DRY',
    wineId: 'wine_1',
    year: 2014,
  },
  winePositionId: 'wine_position_1',
}

export const wine2CatMock = {
  actualPrice: 1400,
  description: 'description2',
  gastronomy: 'gastronomy2',
  image: '',
  linkToWine: 'http://shop1.com/wine2',
  price: 1400,
  shop: { id: 10, site: 'http://shop1.com/' },
  volume: 0.75,
  wine: {
    avg: 12,
    brand: { id: '2', name: 'brand2' },
    color: 'WHITE',
    grape: [{ id: '2', name: 'grape2' }],
    name: 'Tenute del Neccio Chianti',
    producer: { id: '2', name: 'producer2' },
    region: [{ country: 'Italy', id: '2', name: 'Toskana' }],
    sugar: 'SWEET',
    wineId: 'wine_2',
    year: 2016,
  },
  winePositionId: 'wine_position_2',
}

export const fixtures = [
  {
    request: RegionResource.detail(),
    params: { id: 'region1' },
    result: {
      id: 'region1',
      name: 'region',
      country: 'Russia',
    },
  },
  {
    request: ShopResource.detail(),
    params: {
      id: 'shop1',
    },
    result: {
      id: 'shop1',
      site: 'http://shop1.com/',
    },
  },
  {
    request: GrapeResource.detail(),
    params: {
      id: 'grape1',
    },
    result: {
      id: 'grape1',
      name: 'Izabel',
    },
  },
  {
    request: ProducerResource.detail(),
    params: {
      id: 'producer1',
    },
    result: {
      id: 'producer1',
      name: 'prod 1',
    },
  },
  {
    request: BrandResource.detail(),
    params: {
      id: 'brand1',
    },
    result: {
      id: 'brand1',
      name: 'AAA',
    },
  },
  {
    request: WineResource.detail(),
    params: { wineId: 'wine1' },
    result: wineMock,
  },
  {
    request: PositionResource.list(),
    params: {},
    result: [
      positionMock,
      { ...positionMock, winePositionId: 'wine_position2' },
    ],
  },
  {
    request: RegionResource.list(),
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
  {
    request: CatalogResource.list(),
    params: { to: 5, searchParameters: '' },
    result: [wine1CatMock, wine2CatMock],
  },
  {
    request: CatalogResource.detail(),
    params: { winePositionId: 'wine_position_1' },
    result: wine1CatMock,
  },
]
