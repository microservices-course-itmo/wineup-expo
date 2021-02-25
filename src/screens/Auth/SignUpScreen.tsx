import React, { useState, ReactElement, useEffect, useContext } from 'react'
import styled from 'styled-components/native'
import { AuthContext } from './AuthContext'
import LabeledInput from '../../molecules/Auth/LabeledInput'
import LabeledDatePicker from '../../molecules/Auth/LabeledDatePicker'
import LabeledDropdown from '../../molecules/Auth/LabeledDropdown'
import ConsentCheckBox from '../../molecules/Auth/ConsentCheckBox'
import { isName, City } from '../../helpers'

const MAXIMUM_DATE = new Date()

MAXIMUM_DATE.setFullYear(MAXIMUM_DATE.getFullYear() - 18)

const NAME_ERROR_MESSAGE = '*Формат от 2 до 15 букв, не содержащих символов'

function SignUpScreen(): ReactElement {
  const [userName, setUserName] = useState<string>('')
  const [userDate, setUserDate] = useState<Date>(MAXIMUM_DATE)
  const [userCity, setUserCity] = useState<City>('Москва')

  const [isSignUpEnabled, setIsSignUpEnabled] = useState<boolean>(false)
  const buttonOpacity = isSignUpEnabled ? 1 : 0.5

  const isValidName = isName(userName)
  const [isDateFilled, setIsDateFilled] = useState<boolean>(false)
  const [isCityFilled, setIsCityFilled] = useState<boolean>(false)
  const [isСonsentGiven, setIsConsentGiven] = useState<boolean>(false)

  const isAuth = useContext(AuthContext)

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

  const handleSubmit = () => {
    console.log(userName, userDate, userCity)
    isAuth.setIsAuth(true)
    // fetch ? response.ok : response.error, return
  }

  return (
    <SingUpWrapper>
      <SingUpTitle>Введите данные</SingUpTitle>
      <LabeledInput
        value={userName}
        label='Введите ваше имя'
        onChangeText={setUserName}
        isValid={isValidName}
        errorMessage={NAME_ERROR_MESSAGE}
        maxLength={15}
      />
      <LabeledDatePicker
        value={userDate}
        label='Введите дату рождения'
        onChange={setUserDate}
        maximumDate={MAXIMUM_DATE}
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
      <SignUpButton
        onPress={handleSubmit}
        disabled={!isSignUpEnabled}
        buttonOpacity={buttonOpacity}
      >
        <SignUpButtonText>Войти</SignUpButtonText>
      </SignUpButton>
    </SingUpWrapper>
  )
}

const SingUpWrapper = styled.View`
  margin-top: 106px;
  flex: 1;
  align-items: center;
  justify-content: center;
`

const SingUpTitle = styled.Text`
  font-size: 20px;
  font-family: 'PTSans_700Bold';
  color: #fff;
`

const SignUpButton = styled.TouchableOpacity<{ buttonOpacity: number }>`
  margin-top: 35px;
  width: 268px;
  max-height: 57px;
  min-height: 57px;
  flex: 1;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background-color: #931332;
  opacity: ${(props) => props.buttonOpacity};
`
const SignUpButtonText = styled.Text`
  font-size: 16px;
  font-family: 'PTSans_700Bold';
  color: #fff;
`

export default SignUpScreen
