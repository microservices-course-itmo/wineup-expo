import React, { useState, ReactElement, useEffect, useContext } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { RouteProp } from '@react-navigation/native'
import * as SecureStore from 'expo-secure-store'
import { isName, User } from '../../helpers'
import LabeledInput from '../../molecules/Auth/LabeledInput'
import LabeledDatePicker from '../../molecules/Auth/LabeledDatePicker'
import LabeledDropdown from '../../molecules/Auth/LabeledDropdown'
import ConsentCheckBox from '../../molecules/Auth/ConsentCheckBox'
import { AuthContext } from './AuthContext'
import styles from './styles'

interface SignUpScreenProps {
  route: RouteProp<{ params: { jwtToken: string } }, 'params'>
}

function SignUpScreen({ route }: SignUpScreenProps): ReactElement {
  const maximumDate = new Date()

  maximumDate.setFullYear(maximumDate.getFullYear() - 18)
  const [userDate, setUserDate] = useState(maximumDate)
  const [userName, setUserName] = useState('')
  const [userCity, setUserCity] = useState(1)

  const [isSignUpEnabled, setIsSignUpEnabled] = useState<boolean | undefined>(
    false
  )
  const buttonOpacity = isSignUpEnabled ? 1 : 0.5
  const { setIsAuth } = useContext(AuthContext)

  const isValidName = isName(userName)
  const [isDateFilled, setIsDateFilled] = useState(false)
  const [isCityFilled, setIsCityFilled] = useState(false)
  const [isСonsentGiven, setIsConsentGiven] = useState(false)
  const errorMessageName = '*Формат от 2 до 15 букв, не содержащих символов'

  useEffect(() => {
    setIsSignUpEnabled(
      isValidName && isDateFilled && isCityFilled && isСonsentGiven
    )
  }, [isValidName, isDateFilled, isCityFilled, isСonsentGiven])

  async function signUpWithUserData(
    birthday: Date,
    cityId: number,
    name: string
  ) {
    try {
      const birthdayString = `${`0${birthday.getDate()}`.slice(-2)}.${`0${
        birthday.getMonth() + 1
      }`.slice(-2)}.${birthday.getFullYear()}`

      console.log(birthdayString)

      const response = await fetch(
        'http://77.234.215.138:48080/user-service/registration/',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            birthday: birthdayString,
            cityId,
            fireBaseToken: route.params.jwtToken,
            name,
          }),
        }
      )

      if (response.ok) {
        return response.json()
      }
      throw new Error(`Network response was not ok ${response.status}`)
    } catch (err) {
      console.log(err.message)

      return null
    }
  }

  const onSubmit = () => {
    signUpWithUserData(userDate, userCity, userName).then((data: User) => {
      if (data) {
        SecureStore.setItemAsync('accessToken', data.accessToken)
        SecureStore.setItemAsync('refreshToken', data.refreshToken)

        setIsAuth(true)
      }
    })
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
