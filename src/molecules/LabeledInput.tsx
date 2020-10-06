import React, { ReactElement } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { isAllowedPassword, isEmail } from '../helpers'

interface LabeledInputProps {
  label: string
  onChangeText: React.Dispatch<React.SetStateAction<string>>
  secureTextEntry?: boolean
  value: string
}

function LabeledInput({
  label,
  onChangeText,
  secureTextEntry,
  value,
}: LabeledInputProps): ReactElement<LabeledInputProps> {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        value={value}
        selectionColor='#4E4E4E'
        style={
          (!isEmail(value) && label === 'Адрес эл. почты') ||
          (!isAllowedPassword(value) && label === 'Пароль')
            ? styles.inputFailed
            : styles.inputSuccess
        }
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
  inputSuccess: {
    width: 320,
    height: 56,
    fontSize: 16,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#BCBCBC',
    paddingLeft: 10,
  },
  inputFailed: {
    width: 320,
    height: 56,
    fontSize: 16,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#C23232',
    paddingLeft: 10,
  },
})
