import React, { useState, ReactElement, useEffect, useContext } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { isName, City } from '../../helpers'
import LabeledInput from '../../molecules/Auth/LabeledInput'
import LabeledDatePicker from '../../molecules/Auth/LabeledDatePicker'
import LabeledDropdown from '../../molecules/Auth/LabeledDropdown'
import ConsentCheckBox from '../../molecules/Auth/ConsentCheckBox'
import { AuthContext } from './AuthContext'
import styles from './styles'

function SignUpScreen(): ReactElement {
  const [userName, setUserName] = useState('')

  const maximumDate = new Date()

  maximumDate.setFullYear(maximumDate.getFullYear() - 18)
  const [userDate, setUserDate] = useState(maximumDate)

  const [userCity, setUserCity] = useState<City>('Москва')

  const [isSignUpEnabled, setIsSignUpEnabled] = useState<boolean | undefined>(
    false
  )
  const buttonOpacity = isSignUpEnabled ? 1 : 0.5
  const isAuth = useContext(AuthContext)

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
    isAuth.setIsAuth(true)
    // fetch ? response.ok : response.error, return
  }

  return (
    <View style={[styles.container, { marginTop: 106 }]}>
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
        style={[styles.buttonStyle, { opacity: buttonOpacity, marginTop: 35 }]}
        disabled={!isSignUpEnabled}
      >
        <Text style={styles.buttonText}>Войти</Text>
      </TouchableOpacity>
    </View>
  )
}

export default SignUpScreen
