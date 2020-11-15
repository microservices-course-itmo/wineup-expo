import React from 'react'
import { View } from 'react-native'
import styled from 'styled-components/native'
import Text from '../Text'
import { prettifyNumber } from '../../utils/strings'

interface ComponentProps {
  price: number
  discount?: number
}

const WineBottlePrice = ({ price, discount = 0 }: ComponentProps) => {
  const factor = 1 - discount

  return (
    <View>
      {discount > 0 && (
        <OldPrice>{prettifyNumber(price.toFixed(2))} ₽</OldPrice>
      )}
      <Price>{prettifyNumber((factor * price).toFixed(2))} ₽</Price>
    </View>
  )
}

export default WineBottlePrice

const Price = styled(Text)`
  font-size: 23px;
  text-align: center;
  font-style: italic;
  font-weight: 400;
  font-family: Roboto_400Regular_Italic;
`

const OldPrice = styled(Text)`
  font-size: 14px;
  font-weight: 200;
  font-family: Roboto_300Light_Italic;
  text-decoration: line-through;

  transform: translateX(-20px);
`
