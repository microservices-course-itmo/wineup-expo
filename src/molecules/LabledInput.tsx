import React, { ReactElement } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

interface LabeledInputProps {
  label: string
  onChangeText: React.Dispatch<React.SetStateAction<string>>
  secureTextEntry?: boolean
}

function LabeledInput({
  label,
  onChangeText,
  secureTextEntry,
}: LabeledInputProps): ReactElement<LabeledInputProps> {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        selectionColor='#4E4E4E'
        style={styles.input}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
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
  container: {
    marginTop: 45,
  },
  input: {
    width: 320,
    height: 56,
    fontSize: 16,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#BCBCBC',
    paddingLeft: 10,
  },
})
