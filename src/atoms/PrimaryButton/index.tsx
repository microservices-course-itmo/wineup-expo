import React, { PropsWithChildren } from 'react'
import styled from 'styled-components/native'

interface PrimaryButtonProps {
  onPress?: () => void
}

function PrimaryButton({
  onPress = () => {},
  children,
}: PropsWithChildren<PrimaryButtonProps>): JSX.Element {
  return (
    <Container>
      <Shadow />
      <Background />
      <Touchable onPress={onPress}>{children}</Touchable>
    </Container>
  )
}

export default PrimaryButton

const Container = styled.View`
  position: relative;
  width: 100%;
  height: 50px;

  justify-content: center;
  align-items: center;
  border-radius: 4px;
  color: #fff;
`

const Touchable = styled.TouchableOpacity`
  position: relative;
  width: 100%;
  height: 100%;

  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const Background = styled.View`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: #931332;
  padding: 16px 105px;
  border-radius: 4px;
`

const Shadow = styled.View`
  position: absolute;
  width: 95%;
  height: 35px;
  bottom: -5px;

  background: #680e24;
  box-shadow: 0px 4px 4px rgba(104, 14, 36, 0.25);
  border-radius: 10px;
  z-index: -2;
`
