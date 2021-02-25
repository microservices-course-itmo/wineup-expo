import React from 'react'
import styled from 'styled-components/native'
import Placeholder from '../Placeholder'
import Ribbon from '../Ribbon'
import CatalogResource from '../../resources/catalog'

interface WineBottlePictureProps {
  position: CatalogResource
}

const WineBottlePicture = ({
  position: { discount, imageUri },
}: WineBottlePictureProps) => {
  return (
    <Container>
      <Placeholder />
      {discount > 0 && <Ribbon>-{discount * 100} %</Ribbon>}
      <Image
        resizeMethod='scale'
        resizeMode='contain'
        source={{ uri: imageUri }}
      />
    </Container>
  )
}

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

export default WineBottlePicture
