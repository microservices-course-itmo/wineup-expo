import React, { ReactElement, useState, useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Linking } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import LabeledInput from '../../molecules/Auth/LabeledInput'
import { isEmail, isAllowedPassword } from '../../helpers'
import ROUTES from '../../routes'

type SignInScreenNavigationProps = StackNavigationProp<any, 'SignInScreen'>

interface SignInScreenProps {
  navigation: SignInScreenNavigationProps
}

function SignInScreen({
  navigation,
}: SignInScreenProps): ReactElement<SignInScreenProps> {
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

  const onSubmit = () => {
    console.log(userEmail, userPassword)
    navigation.navigate(ROUTES.SIGN_IN_CONFIRM)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Вход</Text>
      <LabeledInput
        value={userEmail}
        label='Адрес эл. почты'
        onChangeText={getUserEmail}
        isValid={isValidEmail}
        errorMessage={errorMessageEmail}
      />
      <LabeledInput
        value={userPassword}
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

const styles = StyleSheet.create({
  header: {
    fontSize: 30,
    fontFamily: 'Merriweather_700Bold',
    color: '#C23232',
  },
  helper: {
    paddingTop: 38,
    paddingLeft: 20,
    alignSelf: 'flex-start',
    fontSize: 16,
    color: '#4A7DFF',
    fontFamily: 'Merriweather_400Regular',
  },
  container: {
    paddingTop: 136,
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  buttonStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    width: 320,
    maxHeight: 56,
    backgroundColor: '#C23232',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
    fontFamily: 'Merriweather_400Regular',
  },
})
