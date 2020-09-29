import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'

interface LabeledInputProps {
  inputName: string
  onChangeText: React.Dispatch<React.SetStateAction<string>>
  secureEntry?: boolean
}

const LabeledInput: React.FC<LabeledInputProps> = (props) => {
  const { inputName, onChangeText, secureEntry } = props
  const handleInputChange = (text: string) => {
    onChangeText(text)
  }

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{inputName}</Text>
      <TextInput
        selectionColor='#4E4E4E'
        style={styles.input}
        onChange={(e) => handleInputChange(e.nativeEvent.text)}
        secureTextEntry={secureEntry}
      />
    </View>
  )
}

LabeledInput.defaultProps = {
  secureEntry: false,
}

const styles = StyleSheet.create({
  label: {
    position: 'absolute',
    top: -28,
    fontSize: 16,
    color: '#888888',
    fontFamily: 'Merriweather_400Regular',
  },
  inputContainer: {
    marginTop: 40,
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

export default LabeledInput
