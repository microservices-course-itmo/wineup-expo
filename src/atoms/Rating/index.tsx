import React from 'react'
import { Entypo } from '@expo/vector-icons'
import styled from 'styled-components/native'

export interface RatingProps {
  rating: number
}

function Rating({ rating }: RatingProps): JSX.Element {
  return (
    <Container>
      {new Array(5).fill(0).map((star, index) => {
        return (
          <Entypo
            key={index}
            name={index + 1 > rating ? 'star-outlined' : 'star'}
            size={16}
            color='#ECAB2E'
          />
        )
      })}
    </Container>
  )
}

export default Rating

const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 90px;
  margin: 5px 0;
`
