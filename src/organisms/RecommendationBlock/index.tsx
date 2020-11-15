import React, { Suspense, useRef } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import { useResource } from 'rest-hooks'
import Carousel from 'react-native-snap-carousel'
import WineCard from '../../molecules/WineCard'
import PositionResource from '../../resources/position'
import WineCardLoader from '../../molecules/WineCard/Loader'

function RecommendationBlock() {
  const positions = useResource(PositionResource.listShape(), {})
  const carouselRef = useRef<Carousel | null>(null)

  const renderItem = ({ item }) => (
    <Suspense fallback={<WineCardLoader />}>
      <WineCard position={item} />
    </Suspense>
  )

  const snapToNext = () => {
    carouselRef.current?.snapToNext()
  }
  const snapToPrev = () => {
    carouselRef.current?.snapToPrev()
  }

  return (
    <Block>
      <Title>Мы подобрали для вас{'\n'}схожие вина:</Title>
      <Carousel
        ref={carouselRef}
        data={positions}
        renderItem={renderItem}
        sliderWidth={350}
        itemWidth={350}
        layout='tinder'
        loop
        useScrollView
      />
      <Buttons>
        <Icon>
          <Ionicons
            name='ios-arrow-dropleft-circle'
            size={70}
            color='#931332'
            onPress={snapToPrev}
          />
        </Icon>
        <TouchableOpacity>
          <Ionicons
            name='ios-arrow-dropright-circle'
            size={70}
            color='#931332'
            onPress={snapToNext}
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
