import React from 'react'
import { View } from 'react-native'
import styled from 'styled-components/native'
import Text from '../Text'
import { prettifyNumber } from '../../utils/strings'
import CatalogResource from '../../resources/catalog'

interface ComponentProps {
  position: CatalogResource
}

const WineBottlePrice = ({
  position: { price, actualPrice, discount },
}: ComponentProps) => {
  return (
    <View>
      {discount > 0 && (
        <OldPrice>{prettifyNumber(actualPrice.toFixed(0))} ₽</OldPrice>
      )}
      <Price>{prettifyNumber(price.toFixed(0))} ₽</Price>
    </View>
  )
}

const Price = styled(Text)`
  font-size: 23px;
  text-align: center;
  font-style: italic;
  font-weight: 400;
  font-family: Roboto_400Regular_Italic;

  transform: translateX(10px);
`

const OldPrice = styled(Text)`
  font-size: 14px;
  font-weight: 300;
  font-family: Roboto_300Light_Italic;
  text-decoration: line-through;
`

export default WineBottlePrice
