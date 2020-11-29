import React from 'react'
import { useCache } from 'rest-hooks'
import { useNavigation, useRoute } from '@react-navigation/native'
import styled from 'styled-components/native'
import { Ionicons } from '@expo/vector-icons'
import PositionResource from '../resources/position'
import WineCard from '../molecules/WineCard'
import WineDescription from '../organisms/WineDescription'
import RecommendationBlock from '../organisms/RecommendationBlock'
import WineReviews from '../organisms/WineReviews'
import { WineReviewCardProps } from '../molecules/WineReviewCard'

function WineScreen() {
  const {
    params: { winePositionId },
  } = useRoute()
  const position = useCache(PositionResource.detailShape(), { winePositionId })
  const { goBack } = useNavigation()

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Container>
        <BackButton onPress={goBack}>
          <Ionicons name='ios-arrow-back' size={24} color='black' />
        </BackButton>
        <WineCard position={position} full />
        <StyledWineDescription />
        <StyledWineReviews cards={reviews} />
        <StyledRecommendationBlock />
      </Container>
    </ScrollView>
  )
}

export default WineScreen

const reviews: WineReviewCardProps[] = [
  {
    username: 'Марков Павел',
    text:
      'Очень достойное. В меру фруктовое, прекрасно пьется. В моем личном рейтинге из всех российских вин уверенно занимает первое место — лучше только Франция!',
    date: '24 апреля 2016 г.',
    rating: 5,
  },
  {
    username: 'Петр Петров',
    text:
      'Вино очень понравилось. Легкое, приятно пьётся. Легкий аромат скошенных трав и фруктов',
    date: '24 апреля 2016 г.',
    rating: 3,
  },
]

const BackButton = styled.TouchableOpacity`
  position: absolute;
  top: 27px;
  left: 30px;
  z-index: 1;
`

const ScrollView = styled.ScrollView`
  background-color: #fff;
`

const Container = styled.View`
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding-bottom: 30px;
`
const StyledWineDescription = styled(WineDescription)`
  margin-top: 70px;
`
const StyledWineReviews = styled(WineReviews)`
  margin-top: 70px;
`

const StyledRecommendationBlock = styled(RecommendationBlock)`
  margin-top: 70px;
`
