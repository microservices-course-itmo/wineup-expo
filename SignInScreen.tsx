import React, { Component, useState } from 'react'
import {
  StyleSheet, Text, View, TextInput, TouchableOpacity, Linking
} from 'react-native'
import { useFonts, Merriweather_400Regular, Merriweather_700Bold, } from '@expo-google-fonts/merriweather'
import { AppLoading } from 'expo'
interface LabeledInputProps {
  inputName: string
  setInputState: React.Dispatch<React.SetStateAction<string>>
  secureTextEntry: boolean
}

const LabeledInput: React.FC<LabeledInputProps> = (
  Props: LabeledInputProps
) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{Props.inputName}</Text>
      <TextInput
        selectionColor='#4E4E4E'
        style={styles.input}
        onChangeText={(state) => Props.setInputState(state)}
      />
    </View>
  )
}
const LabeledInputPass: React.FC<LabeledInputProps> = (
  Props: LabeledInputProps
) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{Props.inputName}</Text>
      <TextInput
        selectionColor='#4E4E4E'
        style={styles.input}
        onChangeText={(state) => Props.setInputState(state)}
        secureTextEntry={true}
      />
    </View>
  )
}

const SignInScreen: React.FC = () => {
  const [userEmail, getUserEmail] = useState('')
  const [userPassword, getUserPassword] = useState('')

  const [fontsLoaded] = useFonts({
    Merriweather_400Regular,
    Merriweather_700Bold,
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  const onSubmit = () => {
    console.log(userEmail, userPassword)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Вход</Text>
      <LabeledInput inputName='Адрес эл. почты' setInputState={getUserEmail} />
      <LabeledInputPass inputName='Пароль'setInputState={getUserPassword} />
      <Text style={styles.helper} onPress={() => Linking.openURL('https://vk.com/asuhovitskiy')}>
        Проблемы со входом?
      </Text>
      <TouchableOpacity onPress={onSubmit} style={styles.buttonStyle}>
        <Text style={styles.btntext}>Войти</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    fontSize: 30,
    fontFamily: 'Merriweather_700Bold',
    color: '#C23232',
  },
  helper: {
    paddingTop: 20,
    textAlign: 'left',
    fontSize: 16,
    color: '#4A7DFF',
    fontFamily: 'Merriweather_400Regular',
  },
  label: {
    position: 'absolute',
    top: -28,
    fontSize: 16,
    color: '#888888',
    fontFamily: 'Merriweather_400Regular',
  },
  container: {
    marginTop: 136,
    flex: 1,
    alignItems: 'center',
  },
  inputContainer: {
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
  buttonStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 60,
    width: 320,
    maxHeight: 56,
    backgroundColor: '#C23232',
    borderRadius: 10,
  },
  btntext: {
    fontSize: 20,
    color: '#fff',
    fontFamily: 'Merriweather_400Regular',
  },
})
export default SignInScreen
