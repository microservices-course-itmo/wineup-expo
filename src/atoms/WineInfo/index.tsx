import React, { ReactElement } from 'react'
import styled from 'styled-components/native'
import Text from '../Text'
import Heading from '../Heading'
import Rating from '../Rating'
import WineBottlePrice from '../WineBottlePrice'
import WineShopName from '../WineShopName'

export interface WineTitleProps {
  name: string
  country: string
  dryness: string
  color: string
  volume: number
  shop?: string
  year: number
}

function WineInfo({
  name,
  country,
  dryness,
  color,
  volume,
  shop,
  year,
}: WineTitleProps): ReactElement<WineTitleProps> {
  const description = [country, dryness, color, `${volume} л.`].join(', ')

  return (
    <>
      <Rating rating={3} />
      <Heading>{name}</Heading>
      <Heading>Merlot, {year} г.</Heading>
      <Description>{description}</Description>
      <Parameters>Доп. параметры</Parameters>
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
