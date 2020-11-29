import React, { PropsWithChildren } from 'react'
import styled from 'styled-components/native'
import { StyleProp } from 'react-native'

interface PrimaryButtonProps {
  onPress?: () => void
  style?: StyleProp<any>
}

function PrimaryButton({
  onPress = () => {},
  children,
  style,
}: PropsWithChildren<PrimaryButtonProps>): JSX.Element {
  return (
    <Touchable onPress={onPress}>
      <Container style={style}>{children}</Container>
    </Touchable>
  )
}

export default PrimaryButton

const Container = styled.View`
  width: 100%;
  height: 50px;
  flex-direction: row;

  justify-content: center;
  align-items: center;
  background: #931332;
  padding: 16px 105px;
  border-radius: 4px;
`

const Touchable = styled.TouchableOpacity``
