import React, { ReactElement } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

interface LabeledInputProps {
  label: string
  onChangeText: React.Dispatch<React.SetStateAction<string>>
  secureTextEntry?: boolean
  isValid?: boolean
  errorMessage?: string
  maxLength?: number
  keyBoardType?: 'default' | 'numeric' | undefined
}

function LabeledInput({
  label,
  onChangeText,
  secureTextEntry,
  isValid = true,
  errorMessage,
  maxLength,
  keyBoardType = 'default',
}: LabeledInputProps): ReactElement<LabeledInputProps> {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        selectionColor='#4E4E4E'
        style={[
          styles.input,
          isValid ? styles.inputSuccessColor : styles.inputFailedColor,
        ]}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        maxLength={maxLength}
        keyboardType={keyBoardType}
      />
      {isValid === false && (
        <Text style={styles.failedLabel}>{errorMessage}</Text>
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
  failedLabel: {
    position: 'absolute',
    top: 57,
    width: 320,
    fontSize: 13,
    color: '#C23232',
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
  },
})
