import React, { PropsWithChildren } from 'react'
import styled from 'styled-components/native'
import background from './background.png'

function Ribbon({ children }: PropsWithChildren<any>) {
  return (
    <Container source={background} resizeMode='stretch'>
      <Border />
      <Text>{children}</Text>
    </Container>
  )
}

export default Ribbon

const Container = styled.ImageBackground`
  position: absolute;
  width: 100px;
  height: 45px;

  justify-content: center;
  align-items: flex-end;
  padding-right: 20px;

  transform: translateX(58px);
`

const Border = styled.View`
  position: absolute;
  left: -22px;

  height: 45px;
  width: 45px;

  border-bottom-left-radius: 22.5px;
  border-top-left-radius: 22.5px;

  background-color: #931332;
`

const Text = styled.Text`
  font-family: PlayfairDisplay_400Regular_Italic;
  font-size: 23px;
  font-style: italic;
  color: #ffffff;

  transform: rotate(-3deg);
`
