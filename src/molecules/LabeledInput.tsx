import React, { ReactElement, useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

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

const styles = StyleSheet.create({
  label: {
    position: 'absolute',
    top: -28,
    fontSize: 16,
    color: '#888888',
    fontFamily: 'Merriweather_400Regular',
  },
  formatLabel: {
    position: 'absolute',
    top: 57,
    width: 320,
    fontSize: 10,
    fontFamily: 'Merriweather_400Regular',
  },
  container: {
    marginTop: 45,
  },
  input: {
    width: 320,
    height: 56,
    fontSize: 16,
    borderRadius: 10,
    borderWidth: 1,
    paddingLeft: 10,
  },
  inputSuccessColor: {
    borderColor: '#BCBCBC',
  },
  inputFailedColor: {
    borderColor: '#C23232',
    color: '#C23232',
  },
})
