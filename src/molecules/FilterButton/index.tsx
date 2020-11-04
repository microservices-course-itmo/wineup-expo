import React, { PropsWithChildren } from 'react'
import styled from 'styled-components/native'
import { StyleProp, TouchableOpacity } from 'react-native'

interface FilterButtonProps {
  selected?: boolean
  onPress?: () => void
  style?: StyleProp<any>
}

function FilterButton({
  selected,
  onPress,
  children,
  style,
}: PropsWithChildren<FilterButtonProps>) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Container style={style} selected={selected}>
        <Text selected={selected}>{children}</Text>
      </Container>
    </TouchableOpacity>
  )
}

export default FilterButton

const Container = styled.View<FilterButtonProps>`
  justify-content: center;
  align-items: center;
  height: 26px;
  padding: 6px 14px;
  border: 1px solid #eeeeee;
  border-radius: 150px;

  background-color: ${({ selected }) => (selected ? '#931332' : '#fff')};
`

const Text = styled.Text<FilterButtonProps>`
  font-family: Roboto_300Light;
  font-weight: 300;
  font-size: 10px;

  color: ${({ selected }) => (selected ? '#fff' : '#333')};
`
