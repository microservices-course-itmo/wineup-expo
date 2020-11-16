import React from 'react'
import styled from 'styled-components/native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import PrimaryButton from '../../atoms/PrimaryButton'
import WineReviewCard, {
  WineReviewCardProps,
} from '../../molecules/WineReviewCard'

export interface WineReviewsProps {
  cards: Array<WineReviewCardProps>
  onShowMore?: () => void
}

function WineReviews({ cards, onShowMore }: WineReviewsProps) {
  return (
    <>
      <Title>Отзывы</Title>
      <Container>
        {cards.map((card, index) => (
          <WineReviewCard key={index} {...card} />
        ))}
      </Container>
      <ShowMoreBtn>
        <PrimaryButton onPress={onShowMore}>
          <TextBtn>Больше отзывов</TextBtn>
          <MaterialCommunityIcons
            name='comment-text-outline'
            size={16}
            color='white'
          />
        </PrimaryButton>
      </ShowMoreBtn>
    </>
  )
}

export default WineReviews

const Title = styled.Text`
  font-size: 20;
  text-align: center;
`

const Container = styled.View`
  margin: 30px 0 0;
`
const TextBtn = styled.Text`
  font-size: 12px;
  letter-spacing: 0.05px;
  margin-right: 10px;
  color: #ffffff;
`

const ShowMoreBtn = styled.View`
  width: 210px;
  margin: 0 auto;
`
