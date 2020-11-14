import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import WineCard, { Wine } from '../../molecules/WineCard'

interface CatalogViewProps {
  children: Wine[]
}

function RecommendationBlock({ children }: CatalogViewProps) {
  const cards = children
  const [currentCard, setCurrentCard] = useState(0)

  function previousCard() {
    if (currentCard === 0) {
      setCurrentCard(children.length - 1)
    } else {
      setCurrentCard(currentCard - 1)
    }
  }
  function nextCard() {
    if (currentCard === children.length - 1) {
      setCurrentCard(0)
    } else {
      setCurrentCard(currentCard + 1)
    }
  }

  return (
    <Block>
      <Title>Мы подобрали для вас{'\n'}схожие вина:</Title>
      <WineCard wine={cards[currentCard]} />
      <Buttons>
        <Icon>
          <Ionicons
            name='ios-arrow-dropleft-circle'
            size={70}
            color='#931332'
            onPress={previousCard}
          />
        </Icon>
        <TouchableOpacity>
          <Ionicons
            name='ios-arrow-dropright-circle'
            size={70}
            color='#931332'
            onPress={nextCard}
          />
        </TouchableOpacity>
      </Buttons>
    </Block>
  )
}
export default RecommendationBlock

const Block = styled.View`
  align-items: center;
  justify-content: center;
`
const Buttons = styled.View`
  flex-direction: row;
`
const Title = styled.Text`
  font-family: PlayfairDisplay_700Bold;
  font-weight: 700;
  font-size: 20px;
  text-align: center;
`
const Icon = styled.TouchableOpacity`
  margin-right: 30px;
`
