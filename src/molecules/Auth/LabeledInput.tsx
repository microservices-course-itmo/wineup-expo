import React, { ReactElement, useState } from 'react'
import { Text, TextInput, View, StyleProp, ViewStyle } from 'react-native'
import styles from './styles'

interface LabeledInputProps {
  value: string
  label?: string
  onChangeText: React.Dispatch<React.SetStateAction<string>>
  secureTextEntry?: boolean
  isValid?: boolean
  errorMessage?: string
  maxLength?: number
  placeholder?: string
  keyBoardType?: 'default' | 'numeric'
  containerStyle?: StyleProp<ViewStyle>
  inputStyle?: StyleProp<ViewStyle>
  labelStyle?: StyleProp<ViewStyle>
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
  containerStyle,
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
    <View style={[styles.container, containerStyle]}>
      <Text style={[styles.label, labelStyle]}>{label}</Text>
      <TextInput
        selectionColor='#000'
        style={[
          styles.input,
          styles.textAreaStyle,
          isValid ? styles.inputSuccessColor : styles.inputFailedColor,
          inputStyle,
        ]}
        value={value}
        editable={editable}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        onFocus={handleFocus}
        onBlur={handleBlur}
        maxLength={maxLength}
        placeholder={placeholder}
        placeholderTextColor='#A3A3A3'
        keyboardType={keyBoardType}
      />
      {isFocused === true && (
        <Text
          style={[
            styles.formatLabel,
            isValid ? { color: '#A3A3A3' } : { color: '#E20338' },
          ]}
        >
          {errorMessage}
        </Text>
      )}
    </View>
  )
}

export default LabeledInput
