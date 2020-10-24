import React, { useState, useEffect } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import {
  useFonts,
  Merriweather_400Regular,
  Merriweather_700Bold,
} from '@expo-google-fonts/merriweather'
import { AppLoading } from 'expo'
import { StackScreenProps } from '@react-navigation/stack'

import { isEmail, isAllowedPassword } from '@libs/helpers'
import LabeledInput from '@molecules/TextInput'

import { TParamList } from '@screens/Auth/types'
import ROUTES from '@libs/constants/routes/auth'

import styles from './styles'

export type TProps = StackScreenProps<TParamList, typeof ROUTES.SIGN_UP>

const SignUpScreen: React.FC<TProps> = () => {
  const [userName, setUserName] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')

  const [isSignUpEnabled, setIsSignUpEnabled] = useState(false)
  const buttonOpacity = isSignUpEnabled ? 1 : 0.4
  const isValidPassword = isAllowedPassword(userPassword)
  const isValidEmail = isEmail(userEmail)
  const errorMessagePassword =
    'Пароль должен содержать минимум 8 символов, хотя бы 1 букву и 1 цифру'
  const errorMessageEmail = 'Неккоректный адрес эл. почты'

  useEffect(() => {
    setIsSignUpEnabled(isValidPassword && isValidEmail)
  }, [userEmail, userPassword, isValidPassword, isValidEmail])

  const [fontsLoaded] = useFonts({
    Merriweather_400Regular,
    Merriweather_700Bold,
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  const onSubmit = () => {
    console.log(userName, userEmail, userPassword)
    // fetch ? response.ok : response.error, return
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Регистрация</Text>
      <LabeledInput label='ФИО' onChangeText={setUserName} />
      <LabeledInput
        label='Адрес эл. почты'
        onChangeText={setUserEmail}
        isValid={isValidEmail}
        errorMessage={errorMessageEmail}
      />
      <LabeledInput
        label='Пароль'
        onChangeText={setUserPassword}
        secureTextEntry
        isValid={isValidPassword}
        errorMessage={errorMessagePassword}
      />

      <TouchableOpacity
        onPress={onSubmit}
        style={[styles.buttonStyle, { opacity: buttonOpacity }]}
        disabled={!isSignUpEnabled}
      >
        <Text style={styles.buttonText}>Зарегистрироваться</Text>
      </TouchableOpacity>
    </View>
  )
}

export default SignUpScreen
