import React from 'react'
import styled from 'styled-components/native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { StyleProp } from 'react-native'
import PrimaryButton from '../../atoms/PrimaryButton'
import WineReviewCard, {
  WineReviewCardProps,
} from '../../molecules/WineReviewCard'

export interface WineReviewsProps {
  cards: Array<WineReviewCardProps>
  onShowMore?: () => void
  style?: StyleProp<any>
}

function WineReviews({ cards, onShowMore, style }: WineReviewsProps) {
  return (
    <Wrapper style={style}>
      <Title>Отзывы</Title>
      <Container>
        {cards.map((card, index) => (
          <WineReviewCard key={index} {...card} />
        ))}
      </Container>
      <ShowMoreBtn>
        <StyledPrimaryButton onPress={onShowMore}>
          <TextBtn>Больше отзывов</TextBtn>
          <MaterialCommunityIcons
            name='comment-text-outline'
            size={16}
            color='#ffffff'
          />
        </StyledPrimaryButton>
      </ShowMoreBtn>
    </Wrapper>
  )
}

export default WineReviews

const Wrapper = styled.View`
  padding: 0 15px;
`

const Title = styled.Text`
  font-size: 20px;
  text-align: center;
`

const Container = styled.View`
  margin: 30px 0 0;
`
const StyledPrimaryButton = styled(PrimaryButton)`
  padding: 16px 20px;
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
