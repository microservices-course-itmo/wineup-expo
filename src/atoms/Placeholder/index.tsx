import React from 'react'
import styled from 'styled-components/native'

function Placeholder() {
  return (
    <Container>
      <Name>WINEUP</Name>
      <Circle />
    </Container>
  )
}

const Container = styled.View`
  position: absolute;
`

const Name = styled.Text`
  font-family: PlayfairDisplay_700Bold;
  font-weight: 700;
  font-size: 55px;
  color: #f1f2f2;
`

const Circle = styled.View`
  position: absolute;
  top: -35px;
  right: -35px;

  border-radius: 72.5px;
  width: 143px;
  height: 143px;
  border: 1px solid #f1f2f2;
`

export default Placeholder
