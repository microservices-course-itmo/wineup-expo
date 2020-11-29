import React from 'react'
import styled from 'styled-components/native'
import { StyleProp } from 'react-native'
import Text from '../../atoms/Text'

import background from './background.png'
import bottle from './bottle.png'
import fork from './fork.png'

interface WineDescriptionProps {
  style?: StyleProp<any>
}

function WineDescription({ style }: WineDescriptionProps) {
  return (
    <Container style={style}>
      <TasteLabel>
        Вкус вина — очень сухой, свежий и бархатистый, с приятной горчинкой,
        нотами белых цветов в нежном букете..
      </TasteLabel>
      <Background source={background} />
      <Bottle source={bottle} />
      <RecommendationContainer>
        <Fork source={fork} />
        <RecommendationLabel>
          Прекрасно в сочетании с жареным ягненком, свининой с овощами и сырами
          средней выдержки
        </RecommendationLabel>
      </RecommendationContainer>
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
