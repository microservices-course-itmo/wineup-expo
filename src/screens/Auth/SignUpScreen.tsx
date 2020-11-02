import React, { useState, ReactElement, useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { isName, City } from '../../helpers'
import LabeledInput from '../../molecules/Auth/LabeledInput'
import LabeledDatePicker from '../../molecules/Auth/LabeledDatePicker'
import LabeledDropdown from '../../molecules/Auth/LabeledDropdown'
import ConsentCheckBox from '../../molecules/Auth/ConsentCheckBox'

function SignUpScreen(): ReactElement {
  const [userName, setUserName] = useState('')

  const maximumDate = new Date()

  maximumDate.setFullYear(maximumDate.getFullYear() - 18)
  const [userDate, setUserDate] = useState(maximumDate)

  const [userCity, setUserCity] = useState<City>('Москва')

  const [isSignUpEnabled, setIsSignUpEnabled] = useState<boolean | undefined>(
    false
  )
  const buttonOpacity = isSignUpEnabled ? 1 : 0.4

  const isValidName = isName(userName)
  const [isDateFilled, setIsDateFilled] = useState(false)
  const [isCityFilled, setIsCityFilled] = useState(false)
  const [isСonsentGiven, setIsConsentGiven] = useState(false)
  const errorMessageName = '*Формат от 2 до 15 букв, не содержащих символов'

  useEffect(() => {
    setIsSignUpEnabled(
      isValidName && isDateFilled && isCityFilled && isСonsentGiven
    )
  }, [
    userName,
    userDate,
    userCity,
    isValidName,
    isDateFilled,
    isCityFilled,
    isСonsentGiven,
  ])

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
      <LabeledDropdown
        label='Введите ваш город'
        onChange={setUserCity}
        hasFilled={isCityFilled}
        onFill={setIsCityFilled}
      />
      <ConsentCheckBox onPress={setIsConsentGiven} hasFilled={isСonsentGiven} />
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
    fontSize: 24,
    fontFamily: 'Merriweather_700Bold',
    color: '#C23232',
  },
  container: {
    paddingTop: 125,
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  buttonStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 28,
    width: 320,
    maxHeight: 56,
    backgroundColor: '#C23232',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    fontFamily: 'Merriweather_400Regular',
  },
})

export default SignUpScreen
