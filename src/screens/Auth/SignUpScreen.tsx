import React, { useState, ReactElement, useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import LabeledInput from '../../molecules/LabeledInput'
import { isName, isAllowedPassword, isPhone } from '../../helpers'

function SignUpScreen(): ReactElement {
  const [userName, setUserName] = useState('')
  const [userPassword, setUserPassword] = useState('')
  const [userPhone, setUserPhone] = useState('')

  const [isSignUpEnabled, setIsSignUpEnabled] = useState(false)
  const buttonOpacity = isSignUpEnabled ? 1 : 0.4
  const isValidName = isName(userName)
  const isValidPassword = isAllowedPassword(userPassword)
  const isValidPhone = isPhone(userPhone)
  const errorMessageName = 'Введите Ваше имя'
  const errorMessagePassword =
    'Пароль должен содержать минимум 8 символов, хотя бы 1 букву и 1 цифру'
  const errorMessagePhone = 'Некорректный номер телефона'

  useEffect(() => {
    setIsSignUpEnabled(isValidName && isValidPassword && isValidPhone)
  }, [
    userName,
    userPassword,
    userPhone,
    isValidName,
    isValidPassword,
    isValidPhone,
  ])

  const onSubmit = () => {
    console.log(userName, userPhone, userPassword)
    // fetch ? response.ok : response.error, return
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Регистрация</Text>
      <LabeledInput
        label='Имя'
        onChangeText={setUserName}
        isValid={isValidName}
        errorMessage={errorMessageName}
      />
      <LabeledInput
        label='Телефон'
        onChangeText={setUserPhone}
        isValid={isValidPhone}
        errorMessage={errorMessagePhone}
        maxLength={11}
        keyBoardType='numeric'
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
  phone: {
    marginTop: 45,
    width: 320,
    height: 56,
    fontSize: 16,
    borderRadius: 10,
    borderWidth: 1,
    paddingLeft: 10,
    borderColor: '#BCBCBC',
  },
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
