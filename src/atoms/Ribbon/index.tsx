import React, { PropsWithChildren } from 'react'
import styled from 'styled-components/native'
import background from './background.png'

function Ribbon({ children }: PropsWithChildren<any>) {
  return (
    <Container source={background}>
      <Text>{children}</Text>
    </Container>
  )
}

const Container = styled.ImageBackground`
  position: absolute;
  width: 144px;
  height: 45px;

  justify-content: center;
  align-items: flex-end;
  padding-right: 35px;

  transform: translateX(55px);
`

const Text = styled.Text`
  font-family: PlayfairDisplay_400Regular_Italic;
  font-size: 23px;
  font-style: italic;
  color: #ffffff;

  transform: rotate(-3deg);
`

export default Ribbon
