import { StyleProp, TouchableOpacity } from 'react-native'
import React, { PropsWithChildren } from 'react'
import styled from 'styled-components/native'

interface RoundedButtonProps {
  selected?: boolean
  onPress?: () => void
  style?: StyleProp<any>
  textStyle?: StyleProp<any>
}

function RoundedButton({
  selected,
  onPress,
  style,
  textStyle,
  children,
}: PropsWithChildren<RoundedButtonProps>) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Container style={style} selected={selected}>
        <Text style={textStyle} selected={selected}>
          {children}
        </Text>
      </Container>
    </TouchableOpacity>
  )
}

export default RoundedButton

const Container = styled.View<{ selected?: boolean }>`
  justify-content: center;
  align-items: center;
  height: 26px;
  padding: 6px 14px;
  border: 1px solid #eeeeee;
  border-radius: 150px;

  background-color: ${({ selected }) => (selected ? '#931332' : '#fff')};
`

const Text = styled.Text<{ selected?: boolean }>`
  font-family: Roboto_300Light;
  font-weight: 300;
  font-size: 10px;

  color: ${({ selected }) => (selected ? '#fff' : '#333')};
`
