import React from 'react'
import { Text, TextInput as RNTextInput, View } from 'react-native'

import styles from './styles'

export type TProps = {
  label: string
  onChangeText: React.Dispatch<React.SetStateAction<string>>
  secureTextEntry?: boolean
  isValid?: boolean
  errorMessage?: string
}

const TextInput: React.FC<TProps> = ({
  label,
  onChangeText,
  secureTextEntry,
  isValid = true,
  errorMessage,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <RNTextInput
        selectionColor='#4E4E4E'
        style={[
          styles.input,
          isValid ? styles.inputSuccessColor : styles.inputFailedColor,
        ]}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
      <Text style={isValid ? { width: 0, height: 0 } : styles.failedLabel}>
        {errorMessage}
      </Text>
    </View>
  )
}

export default TextInput
