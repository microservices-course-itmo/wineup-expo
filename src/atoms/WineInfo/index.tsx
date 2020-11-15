import React, { ReactElement, useRef } from 'react'
import { TouchableOpacity, Text as RNText } from 'react-native'
import styled from 'styled-components/native'
import { useResource } from 'rest-hooks'
import Text from '../Text'
import Heading from '../Heading'
import Rating from '../Rating'
import WineBottlePrice from '../WineBottlePrice'
import WineShopName from '../WineShopName'
import ExtraOptions from '../../organisms/ExtraOptions'
import WineResource from '../../resources/wine'
import PositionResource from '../../resources/position'
import RegionResource from '../../resources/region'
import ShopResource from '../../resources/shop'
import GrapeResource from '../../resources/grape'
import ProducerResource from '../../resources/producer'
import BrandResource from '../../resources/brand'

// eslint-disable-next-line no-shadow
enum WineSugar {
  DRY = 'сухое',
  SWEET = 'сладкое',
  SEMI_SWEET = 'полусладкое',
  SEMI_DRY = 'полусухое',
}

// eslint-disable-next-line no-shadow
enum WineColor {
  RED = 'красное',
  ROSE = 'розовое',
  WHITE = 'белое',
}

export interface WineInfoProps {
  wine: WineResource
  position: PositionResource
}

function WineInfo({
  wine,
  position,
}: WineInfoProps): ReactElement<WineInfoProps> {
  const [region, shop, grape, producer, brand] = useResource(
    [RegionResource.detailShape(), { id: wine.regionId }],
    [ShopResource.detailShape(), { id: position.shopId }],
    [GrapeResource.detailShape(), { id: wine.grapeId }],
    [ProducerResource.detailShape(), { id: wine.producerId }],
    [BrandResource.detailShape(), { id: wine.brandId }]
  )
  const description = [
    region.country,
    WineSugar[wine.sugar as keyof typeof WineSugar],
    WineColor[wine.color as keyof typeof WineColor],
    `${position.volume} л.`,
  ].join(', ')
  const discount = 1 - position.actualPrice / position.price

  const optionsRef = useRef<RNText>(null)
  const extraOptions = [
    { param: 'Виноград', answ: grape.name },
    { param: 'Region', answ: region.name },
    { param: 'Производитель', answ: producer.name },
    { param: 'Бренд', answ: brand.name },
  ]
  const [isModalVisible, setModalVisible] = React.useState(false)

  const openModal = () => {
    setModalVisible(true)
  }

  const closeModal = () => {
    setModalVisible(false)
  }

  return (
    <>
      <Rating rating={3} />
      <Heading>{wine.name}</Heading>
      <Heading>
        {grape.name}, {wine.year} г.
      </Heading>
      <Description>{description}</Description>
      {extraOptions && (
        <>
          <TouchableOpacity onPress={openModal}>
            <Parameters ref={optionsRef}>Доп. параметры</Parameters>
          </TouchableOpacity>
          <ExtraOptions
            target={optionsRef}
            visible={isModalVisible}
            data={extraOptions}
            handleClose={closeModal}
          />
        </>
      )}
      <BottomBar>
        <WineBottlePrice price={position.actualPrice} discount={discount} />
        <WineShopName name={shop.site} />
      </BottomBar>
    </>
  )
}

export default WineInfo

const Description = styled(Text)`
  margin-top: 14px;
`

const Parameters = styled(Text)`
  margin-top: 16px;
  text-decoration: underline;
`

const BottomBar = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 15px 0 20px;
  margin-top: 20px;
`
