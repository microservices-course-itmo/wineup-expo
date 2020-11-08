import React, { ReactElement, useRef } from 'react'
import { TouchableOpacity, Text as RNText } from 'react-native'
import styled from 'styled-components/native'
import Text from '../Text'
import Heading from '../Heading'
import Rating from '../Rating'
import WineBottlePrice from '../WineBottlePrice'
import WineShopName from '../WineShopName'
import ExtraOptions from '../../organisms/ExtraOptions'

export interface WineTitleProps {
  name: string
  country: string
  dryness: string
  color: string
  volume: number
  shop?: string
  extraOptions?: Array<any>
}

function WineInfo({
  name,
  country,
  dryness,
  color,
  volume,
  shop,
  extraOptions,
}: WineTitleProps): ReactElement<WineTitleProps> {
  const description = [country, dryness, color, `${volume} л.`].join(', ')
  const optionsRef = useRef<RNText>(null)
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
      <Heading>{name}</Heading>
      <Heading>Merlot, 2011 г.</Heading>
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
        <WineBottlePrice price={1500} />
        <WineShopName name={shop} />
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
