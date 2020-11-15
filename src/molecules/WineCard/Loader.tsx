import React from 'react'
import ContentLoader, { Rect } from 'react-content-loader/native'
import styled from 'styled-components/native'
import Placeholder from '../../atoms/Placeholder'

function WineCardLoader() {
  return (
    <Container>
      <ContentLoader
        speed={1}
        width={380}
        height={450}
        viewBox='0 0 380 450'
        backgroundColor='#f3f3f3'
        foregroundColor='#931332'
      >
        <Rect x='77' y='0' rx='3' ry='3' width='226' height='11' />
        <PlaceholderContainer>
          <Placeholder />
        </PlaceholderContainer>
        <Rect x='110.5' y='270' rx='3' ry='3' width='159' height='11' />
        <Rect x='87' y='290' rx='3' ry='3' width='206' height='11' />
        <Rect x='67.5' y='330' rx='3' ry='3' width='245' height='9' />
        <Rect x='90' y='350' rx='3' ry='3' width='200' height='8' />
        <Rect x='50' y='400' rx='3' ry='3' width='100' height='40' />
        <Rect x='230' y='400' rx='3' ry='3' width='100' height='40' />
      </ContentLoader>
    </Container>
  )
}

export default WineCardLoader

const Container = styled.View`
  justify-content: center;
  align-items: center;
  margin: 10px;
  padding: 30px;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0px 3px 4px rgba(178, 178, 178, 0.5);
`

const PlaceholderContainer = styled.View`
  position: relative;
  top: 120px;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
  background-color: #ffffff;
`
