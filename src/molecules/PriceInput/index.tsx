import React from 'react'
import styled from 'styled-components/native'

interface PriceInputProps {
  label: string
  value: string
  defaultValue?: string
  onChange?: (value: string) => void
}

function PriceInput({
  label,
  value,
  onChange = () => {},
  defaultValue,
}: PriceInputProps) {
  return (
    <Container>
      <Label>{label}</Label>
      <InputContainer>
        <Input
          selectTextOnFocus
          keyboardType='numeric'
          value={value}
          onChangeText={onChange}
          defaultValue={defaultValue}
        />
        <CurrencyLabel>₽</CurrencyLabel>
      </InputContainer>
    </Container>
  )
}

export default PriceInput

const Container = styled.View`
  min-width: 126px;

  padding-bottom: 8px;
  border-bottom-width: 1px;
  border-bottom-color: rgba(220, 220, 220, 0.6);
`

const Label = styled.Text`
  margin-bottom: 5px;

  font-family: Roboto_300Light;
  font-weight: 300;
  font-size: 12px;

  color: #dcdcdc;
`

const InputContainer = styled.View`
  flex-direction: row;
`

const Input = styled.TextInput`
  font-family: Roboto_400Regular_Italic;
  font-style: italic;
  font-size: 18px;
  color: #333333;
`

const CurrencyLabel = styled.Text`
  margin-left: auto;

  font-family: Roboto_300Light_Italic;
  font-style: italic;
  font-size: 18px;
  font-weight: 300;
  color: #dcdcdc;
`
