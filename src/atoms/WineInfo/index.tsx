import React, { ReactElement, useRef } from 'react'
import { TouchableOpacity, Text as RNText, Linking } from 'react-native'
import styled from 'styled-components/native'
import { AntDesign } from '@expo/vector-icons'
import CatalogResource from '../../resources/catalog'
import Text from '../Text'
import Heading from '../Heading'
import Rating from '../Rating'
import WineBottlePrice from '../WineBottlePrice'
import WineShopName from '../WineShopName'
import ExtraOptions from '../../organisms/ExtraOptions'
import PrimaryButton from '../PrimaryButton'

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
  full?: boolean
}

function WineInfo({
  position,
  full,
}: WineInfoProps): ReactElement<WineInfoProps> {
  const { wine, shop } = position
  const description = [
    wine.region[0]?.country,
    WineSugar[wine.sugar as keyof typeof WineSugar],
    WineColor[wine.color as keyof typeof WineColor],
    `${position.volume} л.`,
  ]
    .filter((e) => e !== undefined)
    .join(', ')

  const optionsRef = useRef<RNText>(null)
  const extraOptions = []

  if (position.grapes) {
    extraOptions.push({
      param: 'Виноград',
      answ: position.grapes,
    })
  }

  if (position.regions) {
    extraOptions.push({
      param: 'Регион',
      answ: position.regions,
    })
  }

  if (wine.producer) {
    extraOptions.push({
      param: 'Производитель',
      answ: wine.producer.name,
    })
  }

  if (wine.brand) {
    extraOptions.push({
      param: 'Бренд',
      answ: wine.brand.name,
    })
  }

  const [isModalVisible, setModalVisible] = React.useState(false)

  const openModal = () => {
    setModalVisible(true)
  }

  const closeModal = () => {
    setModalVisible(false)
  }

  const goToShop = () => {
    Linking.openURL(position.linkToWine).catch(console.log)
  }

  return (
    <>
      <Rating rating={3} />
      <Heading>{wine.name}</Heading>
      <Heading>
        {position.grapes && `${position.grapes}, `}
        {wine.year} г.
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
      <BottomBar full={full}>
        <WineBottlePrice position={position} />
        <ShopContainer>
          <WineShopName name={shop.site} />
          {full && (
            <ToShopButton onPress={goToShop}>
              <ToShopLabel>В магазин</ToShopLabel>
              <AntDesign name='shoppingcart' color='#fff' size={16} />
            </ToShopButton>
          )}
        </ShopContainer>
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

const BottomBar = styled.View<{ full?: boolean }>`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: ${({ full }) => (full ? '0' : '0 15px 0 20px')};
  margin-top: ${({ full }) => (full ? 40 : 20)}px;
`

const ShopContainer = styled.View`
  max-width: 135px;
`

const ToShopButton = styled(PrimaryButton)`
  padding: 15px 24px;
  margin-top: 10px;
`

const ToShopLabel = styled.Text`
  margin-right: 5px;

  font-family: Roboto_400Regular;
  font-size: 12px;
  color: #fff;
`
