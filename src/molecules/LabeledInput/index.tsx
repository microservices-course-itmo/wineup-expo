import React, { ReactElement, useState } from 'react'
import { StyleProp, TextInput, TextStyle, ViewStyle } from 'react-native'
import styled from 'styled-components/native'

export interface LabeledInputProps {
  value: string
  label?: string
  onChangeText: (value: string) => void
  secureTextEntry?: boolean
  isValid?: boolean
  errorMessage?: string
  maxLength?: number
  placeholder?: string
  keyBoardType?: 'default' | 'numeric' | 'phone-pad'
  style?: StyleProp<ViewStyle>
  inputStyle?: StyleProp<ViewStyle>
  labelStyle?: StyleProp<TextStyle>
  editable?: boolean
}

function LabeledInput({
  value,
  label,
  onChangeText,
  secureTextEntry,
  isValid = true,
  errorMessage,
  maxLength,
  placeholder,
  keyBoardType,
  style,
  inputStyle,
  labelStyle,
  editable = true,
}: LabeledInputProps): ReactElement<LabeledInputProps> {
  const [isFocused, setIsFocused] = useState(false)
  const handleFocus = () => {
    setIsFocused(true)
  }
  const handleBlur = () => {
    setIsFocused(false)
  }

  return (
    <Container style={style}>
      {label && <Label style={labelStyle}>{label}</Label>}
      <Input
        selectionColor='#4E4E4E'
        style={inputStyle}
        isValid={isValid}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        value={value}
        editable={editable}
        onFocus={handleFocus}
        onBlur={handleBlur}
        maxLength={maxLength}
        placeholder={placeholder}
        placeholderTextColor='#A3A3A3'
        keyboardType={keyBoardType}
      />
      {isFocused === true && errorMessage !== undefined && (
        <ErrorLabel isValid={isValid}>{errorMessage}</ErrorLabel>
      )}
    </Container>
  )
}

export default LabeledInput

const Container = styled.View`
  align-items: center;
  margin-top: 53px;
`

const Label = styled.Text`
  position: relative;
  top: 0;
  margin-bottom: 15px;
  margin-right: auto;
  margin-left: 15px;
  font-size: 14px;
  color: #ffffff;
  font-family: 'Merriweather_400Regular';
`

const Input = styled(TextInput)<{ isValid: boolean }>`
  flex: 1;
  justify-content: center;
  align-items: center;
  min-width: 268px;
  min-height: 57px;
  max-height: 57px;
  border-radius: 5px;
  padding-left: 10px;
  color: ${({ isValid }) => (isValid ? '#000000' : '#e20338')};
  background-color: #ffffff;
  border-color: ${({ isValid }) => (isValid ? '#bcbcbc' : '#e20338')};
`
const ErrorLabel = styled.Text<{ isValid: boolean }>`
  position: relative;
  text-align: center;
  top: 5px;
  width: 320px;
  font-size: 10px;
  color: ${({ isValid }) => (isValid ? '#a3a3a3' : '#e20338')};
  font-family: 'Merriweather_400Regular';
`
