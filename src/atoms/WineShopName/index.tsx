import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import styled from 'styled-components/native'
import Text from '../Text'

export interface Shop {
  name?: string
}

const WineShopName = ({ name }: Shop) => {
  if (!name) {
    return null
  }

  return (
    <Container>
      <Ionicons name='ios-pin' color='#931332' size={17} />
      <Name>{name}</Name>
    </Container>
  )
}

const Container = styled.View`
  flex-direction: row;
  align-items: center;
`

const Name = styled(Text)`
  margin-left: 7px;
`

export default WineShopName
