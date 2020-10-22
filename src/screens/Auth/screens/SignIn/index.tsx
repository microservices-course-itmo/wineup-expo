import React, { useState, useEffect } from 'react'
import { Text, View, TouchableOpacity, Linking } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'
import {
  useFonts,
  Merriweather_400Regular,
  Merriweather_700Bold,
} from '@expo-google-fonts/merriweather'
import { AppLoading } from 'expo'

import { isEmail, isAllowedPassword } from 'libs/helpers'
import LabeledInput from 'components/TextInput'

import { TParamList } from 'screens/Auth/types'
import ROUTES from 'libs/constants/routes/auth'

import styles from './styles'

export type TProps = StackScreenProps<TParamList, ROUTES.SIGN_IN>

const SignInScreen: React.FC<TProps> = ({ navigation }) => {
  const [userEmail, getUserEmail] = useState('')
  const [userPassword, getUserPassword] = useState('')

  const [isSignInEnabled, setIsSignInEnabled] = useState(false)
  const buttonOpacity = isSignInEnabled ? 1 : 0.4
  const isValidPassword = isAllowedPassword(userPassword)
  const isValidEmail = isEmail(userEmail)
  const errorMessagePassword =
    'Пароль должен содержать минимум 8 символов, хотя бы 1 букву и 1 цифру'
  const errorMessageEmail = 'Неккоректный адрес эл. почты'

  useEffect(() => {
    setIsSignInEnabled(isValidPassword && isValidEmail)
  }, [userEmail, userPassword, isValidPassword, isValidEmail])

  const [fontsLoaded] = useFonts({
    Merriweather_400Regular,
    Merriweather_700Bold,
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  const onSubmit = () => {
    console.log(userEmail, userPassword)
    navigation.push(ROUTES.SIGN_IN_CONFIRM)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Вход</Text>
      <LabeledInput
        label='Адрес эл. почты'
        onChangeText={getUserEmail}
        isValid={isValidEmail}
        errorMessage={errorMessageEmail}
      />
      <LabeledInput
        label='Пароль'
        onChangeText={getUserPassword}
        secureTextEntry
        isValid={isValidPassword}
        errorMessage={errorMessagePassword}
      />
      <Text
        style={styles.helper}
        onPress={() => Linking.openURL('https://vk.com/asuhovitskiy')}
      >
        Проблемы со входом?
      </Text>
      <TouchableOpacity
        onPress={onSubmit}
        style={[styles.buttonStyle, { opacity: buttonOpacity }]}
        disabled={!isSignInEnabled}
      >
        <Text style={styles.buttonText}>Войти</Text>
      </TouchableOpacity>
    </View>
  )
}

export default SignInScreen
