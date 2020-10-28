import React, { ReactElement, useState } from 'react'
import { Text, TextInput, View } from 'react-native'
import styles from './styles'

interface LabeledInputProps {
  value: string
  label: string
  onChangeText: React.Dispatch<React.SetStateAction<string>>
  secureTextEntry?: boolean
  isValid?: boolean
  errorMessage?: string
  maxLength?: number
}

function LabeledInput({
  value,
  label,
  onChangeText,
  secureTextEntry,
  isValid = true,
  errorMessage,
  maxLength,
}: LabeledInputProps): ReactElement<LabeledInputProps> {
  const [isFocused, setIsFocused] = useState(false)
  const handleFocus = () => {
    setIsFocused(true)
  }
  const handleBlur = () => {
    setIsFocused(false)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        selectionColor='#4E4E4E'
        style={[
          styles.input,
          styles.textAreaStyle,
          isValid ? styles.inputSuccessColor : styles.inputFailedColor,
        ]}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        onFocus={handleFocus}
        onBlur={handleBlur}
        maxLength={maxLength}
      />
      {isFocused === true && (
        <Text
          style={[
            styles.formatLabel,
            isValid ? { color: '#A3A3A3' } : { color: '#C23232' },
          ]}
        >
          {errorMessage}
        </Text>
      )}
    </View>
  )
}

export default LabeledInput
