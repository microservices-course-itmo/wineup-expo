import React from 'react'
import styled from 'styled-components/native'
import { StyleProp, TouchableOpacity } from 'react-native'
import Checkbox from '../../atoms/Checkbox'

interface LabeledCheckboxProps {
  label: string
  checked?: boolean
  onPress?: () => void
  style?: StyleProp<any>
}

function LabeledCheckbox({
  label,
  checked,
  onPress = () => {},
  style,
}: LabeledCheckboxProps) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Container style={style}>
        <Checkbox size={18} checked={checked} />
        <Label checked={checked}>{label}</Label>
      </Container>
    </TouchableOpacity>
  )
}

export default LabeledCheckbox

const Container = styled.View`
  flex-direction: row;
  align-items: center;
`

const Label = styled.Text<{ checked?: boolean }>`
  margin-left: 10px;

  font-family: ${({ checked }) =>
    checked ? 'Roboto_400Regular' : 'Roboto_300Light'};
  font-weight: ${({ checked }) => (checked ? 400 : 200)};
  font-size: 16px;

  color: #333333;
`
