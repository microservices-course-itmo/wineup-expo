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
import LabeledDatePicker from '../../molecules/LabeledDatePicker'

function SignUpScreen(): ReactElement {
  const [userName, setUserName] = useState('')

  const maximumDate = new Date()

  maximumDate.setFullYear(maximumDate.getFullYear() - 18)
  const [userDate, setUserDate] = useState(maximumDate)

  const [userCity, setUserCity] = useState('')

  setUserCity('Москва')

  const [isSignUpEnabled, setIsSignUpEnabled] = useState<boolean | undefined>(
    false
  )
  const buttonOpacity = isSignUpEnabled ? 1 : 0.4

  const isValidName = isName(userName)
  const [isDateFilled, setIsDateFilled] = useState(false)
  const isCityFilled = true
  const errorMessageName = '*Формат от 2 до 15 букв, не содержащих символов'

  useEffect(() => {
    setIsSignUpEnabled(isValidName && isDateFilled && isCityFilled)
  }, [userName, userDate, userCity, isValidName, isDateFilled, isCityFilled])

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
      <LabeledDatePicker
        value={userDate}
        label='Введите дату рождения'
        onChange={setUserDate}
        maximumDate={maximumDate}
        hasFilled={isDateFilled}
        onFill={setIsDateFilled}
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
  input: {
    marginTop: 45,
    width: 320,
    height: 56,
    fontSize: 16,
    borderRadius: 10,
    borderWidth: 1,
    paddingLeft: 10,
  },
})

export default SignUpScreen
