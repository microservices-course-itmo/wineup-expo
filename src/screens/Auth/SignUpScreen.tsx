import React, { useState, ReactElement, useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import LabeledInput from '../../molecules/LabeledInput'
import { isEmail, isAllowedPassword } from '../../helpers'

function SignUpScreen(): ReactElement {
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

const styles = StyleSheet.create({
  header: {
    fontSize: 30,
    fontFamily: 'Merriweather_700Bold',
    color: '#C23232',
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
    marginTop: 60,
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

export default SignUpScreen
