import React, { useState, ReactElement, useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import {
  useFonts,
  Merriweather_400Regular,
  Merriweather_700Bold,
} from '@expo-google-fonts/merriweather'
import { AppLoading } from 'expo'
import LabeledInput from '../../molecules/LabeledInput'
import { isName } from '../../helpers'

function SignUpScreen(): ReactElement {
  const [userName, setUserName] = useState('')
  const [userDate, setUserDate] = useState('')
  const [userCity, setUserCity] = useState('')

  const [isSignUpEnabled, setIsSignUpEnabled] = useState<boolean | undefined>(
    false
  )
  const buttonOpacity = isSignUpEnabled ? 1 : 0.4
  const isValidName = isName(userName)
  const isDateFill = true
  const isCityFill = true
  const errorMessageName = '*Формат от 2 до 15 букв, не содержащих символов'

  useEffect(() => {
    setIsSignUpEnabled(isValidName && isDateFill && isCityFill)
  }, [userName, isValidName, userDate, userCity])

  const [fontsLoaded] = useFonts({
    Merriweather_400Regular,
    Merriweather_700Bold,
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  const onSubmit = () => {
    console.log(userName, userDate, userCity)
    // fetch ? response.ok : response.error, return
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Введите данные</Text>
      <LabeledInput
        value={userName}
        label='Введите ваше имя'
        onChangeText={setUserName}
        isValid={isValidName}
        errorMessage={errorMessageName}
        maxLength={15}
      />
      <LabeledInput
        value={userName}
        label='Введите дату рождения'
        onChangeText={setUserDate}
      />
      <LabeledInput
        value={userName}
        label='Введите ваш город'
        onChangeText={setUserCity}
      />
      <TouchableOpacity
        onPress={onSubmit}
        style={[styles.buttonStyle, { opacity: buttonOpacity }]}
        disabled={!isSignUpEnabled}
      >
        <Text style={styles.buttonText}>Войти</Text>
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
