import React from 'react'
import styled from 'styled-components/native'
import { Ionicons } from '@expo/vector-icons'

import Rating from '../../atoms/Rating'

export interface WineReviewCardProps {
  text: string
  username: string
}

function WineReviewCard({ text, username }: WineReviewCardProps) {
  const [reviewText, setReviewText] = React.useState('')
  const [isCanShow, setIsCanShow] = React.useState(false)

  React.useEffect(() => {
    const textArray = text.split(' ')

    if (textArray.length > 20) {
      setIsCanShow(true)
      textArray.length = 20

      setReviewText(textArray.join(' '))
    } else {
      setReviewText(text)
    }
  }, [])

  const handleShowMoreText = () => {
    setIsCanShow(false)
    setReviewText(text)
  }

  return (
    <Card>
      <CardHead>
        <UserName>{username}</UserName>
        <Rating rating={3} />
      </CardHead>
      <ReviewText>
        “{reviewText}
        {isCanShow ? '...' : '"'}
      </ReviewText>
      {isCanShow && (
        <ShowMore onPress={() => handleShowMoreText()}>
          <ShowMoreText>Открыть полностью</ShowMoreText>
          <Ionicons name='ios-arrow-down' size={12} color='black' />
        </ShowMore>
      )}
      <Date>24 апреля 2016 г.</Date>
    </Card>
  )
}

export default WineReviewCard

const Card = styled.View`
  padding: 30px 20px 12px;
  border: 2px solid #f1f1f1;
  border-radius: 8px;
  background: white;
  margin-bottom: 25px;
`
const CardHead = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;
`

const UserName = styled.Text`
  font-size: 16px;
`

const ReviewText = styled.Text`
  font-size: 12px;
`

const ShowMore = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-top: 15px;
  padding: 5px 0;
  opacity: 0.5;
  margin-bottom: -10px;
`

const ShowMoreText = styled.Text`
  font-size: 10px;
  margin-right: 5px;
  margin-bottom: 3px;
`

const Date = styled.Text`
  font-size: 10px;
  opacity: 0.5;
  text-align: right;
  margin-top: 10px;
`
