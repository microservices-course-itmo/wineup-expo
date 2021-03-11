import React, { Suspense, useRef } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { StyleProp, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import { useResource } from 'rest-hooks'
import Carousel from 'react-native-snap-carousel'
import { useNavigation } from '@react-navigation/native'
import WineCard from '../../molecules/WineCard'
import WineCardLoader from '../../molecules/WineCard/Loader'
import ROUTES from '../../routes'
import CatalogResource from '../../resources/catalog'

interface RecommendationBlockProps {
  style?: StyleProp<any>
}

function RecommendationBlock({ style }: RecommendationBlockProps) {
  const positions = useResource(CatalogResource.list(), {
    page: 0,
    amount: 5,
    filterBy: '',
  })

  const carouselRef = useRef<Carousel<any> | null>(null)
  const navigation = useNavigation()

  const navigate = (
    winePositionId: CatalogResource['winePositionId']
  ) => () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    navigation.push(ROUTES.WINE_PAGE, { winePositionId })
  }

  // eslint-disable-next-line react/no-unused-prop-types
  const renderItem = ({ item }: { item: CatalogResource }) => (
    <Suspense fallback={<WineCardLoader />}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={navigate(item.winePositionId)}
      >
        <WineCard position={item} />
      </TouchableOpacity>
    </Suspense>
  )

  const snapToNext = () => {
    carouselRef.current?.snapToNext()
  }
  const snapToPrev = () => {
    carouselRef.current?.snapToPrev()
  }

  return (
    <Container style={style}>
      <TitleBock>
        <Title>Мы подобрали для вас</Title>
        <Title>схожие вина:</Title>
      </TitleBock>
      <Carousel
        ref={carouselRef}
        data={positions!}
        renderItem={renderItem}
        sliderWidth={350}
        itemWidth={350}
        layout='tinder'
        loop
        useScrollView
      />
      <Buttons>
        <Icon onPress={snapToPrev}>
          <Ionicons
            name='ios-arrow-dropleft-circle'
            size={70}
            color='#931332'
          />
        </Icon>
        <Icon onPress={snapToNext}>
          <Ionicons
            name='ios-arrow-dropright-circle'
            size={70}
            color='#931332'
          />
        </Icon>
      </Buttons>
    </Container>
  )
}
export default RecommendationBlock

const Container = styled.View`
  align-items: center;
  justify-content: center;
`
const Buttons = styled.View`
  width: 130px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
const Title = styled.Text`
  font-family: PlayfairDisplay_700Bold;
  font-weight: 700;
  font-size: 20px;
  text-align: center;

  margin-bottom: 26px;
`
const TitleBock = styled.View``

const Icon = styled.TouchableOpacity``
