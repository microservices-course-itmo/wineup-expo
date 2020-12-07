import React from 'react'
import styled from 'styled-components/native'
import { StyleProp } from 'react-native'
import Text from '../../atoms/Text'

import background from './background.png'
import fork from './fork.png'
import CatalogResource from '../../resources/catalog'

interface WineDescriptionProps {
  position: CatalogResource
  style?: StyleProp<any>
}

function WineDescription({ style, position }: WineDescriptionProps) {
  return (
    <Container style={style}>
      <TasteLabel>{position.description}</TasteLabel>
      <Background source={background} />
      <Bottle
        resizeMethod='scale'
        resizeMode='contain'
        source={{ uri: position.imageUri }}
      />
      {position.gastronomy.length > 0 && (
        <RecommendationContainer>
          <Fork source={fork} />
          <RecommendationLabel>{position.gastronomy}</RecommendationLabel>
        </RecommendationContainer>
      )}
    </Container>
  )
}

export default WineDescription

const Container = styled.View``

const TasteLabel = styled(Text)`
  padding: 10px 100px 0 20px;

  font-family: PlayfairDisplay_400Regular;
  font-size: 14px;
`

const Background = styled.Image``

const Bottle = styled.Image`
  position: absolute;
  width: 100px;
  height: 300px;
  right: 0;
`

const RecommendationContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding-right: 150px;
`

const Fork = styled.Image`
  margin: 0 10px;
`

const RecommendationLabel = styled(Text)`
  font-family: Roboto_300Light;
  font-size: 12px;
`
