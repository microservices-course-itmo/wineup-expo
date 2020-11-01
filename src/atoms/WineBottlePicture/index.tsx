import React from 'react'
import styled from 'styled-components/native'
import Placeholder from '../Placeholder'
import Ribbon from '../Ribbon'

interface ComponentProps {
  image: { uri: string }
}

const WineBottlePicture = ({ image }: ComponentProps) => {
  return (
    <Container>
      <Placeholder />
      <Ribbon>-20%</Ribbon>
      <Image resizeMethod='scale' resizeMode='contain' source={image} />
    </Container>
  )
}

export default WineBottlePicture

const Container = styled.View`
  width: 256px;
  height: 256px;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
  background-color: #ffffff;
`

const Image = styled.Image`
  width: 250px;
  height: 250px;
`
