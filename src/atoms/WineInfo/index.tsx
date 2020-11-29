import React, { ReactElement, useRef } from 'react'
import { TouchableOpacity, Text as RNText } from 'react-native'
import styled from 'styled-components/native'
import Text from '../Text'
import Heading from '../Heading'
import Rating from '../Rating'
import WineBottlePrice from '../WineBottlePrice'
import WineShopName from '../WineShopName'
import ExtraOptions from '../../organisms/ExtraOptions'
import CatalogResource from 'src/resources/CatalogResource'

// eslint-disable-next-line no-shadow
export enum WineSugar {
  DRY = 'сухое',
  SWEET = 'сладкое',
  SEMI_SWEET = 'полусладкое',
  SEMI_DRY = 'полусухое',
}

// eslint-disable-next-line no-shadow
export enum WineColor {
  RED = 'красное',
  ROSE = 'розовое',
  WHITE = 'белое',
}

export interface WineInfoProps {
  position: CatalogResource
}

function WineInfo({ position }: WineInfoProps): ReactElement<WineInfoProps> {
  const wine = position.wine
  const description = [
    wine.region[0].country,
    WineSugar[wine.sugar as keyof typeof WineSugar],
    WineColor[wine.color as keyof typeof WineColor],
    `${position.volume} л.`,
  ].join(', ')
  const discount = 1 - position.actual_price / position.price

  const optionsRef = useRef<RNText>(null)
  const extraOptions = [
    { param: 'Виноград', answ: wine.grape[0].name },
    { param: 'Region', answ: wine.region[0].name },
    { param: 'Производитель', answ: wine.producer.name },
    { param: 'Бренд', answ: wine.brand.name },
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
        {wine.grape[0].name}, {wine.year} г.
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
        <WineBottlePrice price={position.actual_price} discount={discount} />
        <WineShopName name={position.shop.site} />
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
