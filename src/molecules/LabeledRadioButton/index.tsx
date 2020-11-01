import React from 'react'
import styled from 'styled-components/native'
import { StyleProp, TouchableOpacity } from 'react-native'
import RadioButton from '../../atoms/RadioButton'

interface LabeledRadioButtonProps {
  label: string
  checked?: boolean
  onPress?: () => void
  style?: StyleProp<any>
}

function LabeledRadioButton({
  label,
  checked,
  onPress = () => {},
  style,
}: LabeledRadioButtonProps) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Container style={style}>
        <RadioButton checked={checked} />
        <Label checked={checked}>{label}</Label>
      </Container>
    </TouchableOpacity>
  )
}

export default LabeledRadioButton

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
