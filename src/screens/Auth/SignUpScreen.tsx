import React, { useState, ReactElement, useEffect } from 'react'
import styled from 'styled-components/native'
import { isName, toBirthdayString } from '../../helpers'
import LabeledInput from '../../molecules/LabeledInput'
import LabeledDatePicker from '../../molecules/Auth/LabeledDatePicker'
import CityChooser from '../../molecules/CityChooser'
import ConsentCheckBox from '../../molecules/Auth/ConsentCheckBox'
import { useAuthContext } from './AuthContext'
import authBackground from '../../../assets/authBackground.png'
import authBackgroundLogo from '../../../assets/authBackgroundLogo.png'

const MAXIMUM_DATE = new Date()

MAXIMUM_DATE.setFullYear(MAXIMUM_DATE.getFullYear() - 18)

const NAME_ERROR_MESSAGE = '*Формат от 2 до 15 букв, не содержащих символов'

function SignUpScreen(): ReactElement {
  const [userName, setUserName] = useState<string>('')
  const [userDate, setUserDate] = useState<Date>(MAXIMUM_DATE)
  const [userCity, setUserCity] = useState<number>(1)
  const auth = useAuthContext()

  const [isSignUpEnabled, setIsSignUpEnabled] = useState<boolean>(false)
  const buttonOpacity = isSignUpEnabled ? 1 : 0.5

  const isValidName = isName(userName)
  const [isDateFilled, setIsDateFilled] = useState<boolean>(false)
  const [isCityFilled, setIsCityFilled] = useState<boolean>(false)
  const [isСonsentGiven, setIsConsentGiven] = useState<boolean>(false)

  useEffect(() => {
    setIsSignUpEnabled(
      isValidName && isDateFilled && isCityFilled && isСonsentGiven
    )
  }, [isValidName, isDateFilled, isCityFilled, isСonsentGiven])

  const handleSubmit = async () => {
    await auth.signup({
      birthday: toBirthdayString(userDate),
      name: userName,
      cityId: userCity,
    })
  }

  return (
    <StyledImageBackground source={authBackground} resizeMode='cover'>
      <StyledLogo source={authBackgroundLogo} />
      <StyledContainer>
        <StyledTextInsertData>Введите данные</StyledTextInsertData>
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
        <CityChooser
          label='Введите ваш город'
          onChange={setUserCity}
          hasFilled={isCityFilled}
          onFill={setIsCityFilled}
          showArrow
        />
        <ConsentCheckBox
          onPress={setIsConsentGiven}
          hasFilled={isСonsentGiven}
        />
        <StyledEnterButton
          buttonOpacity={buttonOpacity}
          onPress={handleSubmit}
          disabled={!isSignUpEnabled}
        >
          <StyledEnterTextButton>Войти</StyledEnterTextButton>
        </StyledEnterButton>
      </StyledContainer>
    </StyledImageBackground>
  )
}

export default SignUpScreen

const StyledImageBackground = styled.ImageBackground`
  flex: 1;
  width: 100%;
  height: 100%;
`
const StyledLogo = styled.Image`
  position: absolute;
  top: 0px;
  right: 20px;
`
const StyledContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  margin-top: 106px;
`
const StyledTextInsertData = styled.Text`
  font-size: 20px;
  font-family: 'PTSans_700Bold';
  color: rgb(255, 255, 255);
`
const StyledEnterTextButton = styled.Text`
  font-size: 16px;
  color: rgb(255, 255, 255);
  font-family: 'PTSans_700Bold';
`
/*eslint-disable */
type ButtonEnterProps = {
  buttonOpacity: number
}
/* eslint-enable */

const StyledEnterButton = styled.TouchableOpacity<ButtonEnterProps>`
  flex: 1;
  align-items: center;
  justify-content: center;
  width: 268px;
  max-height: 57px;
  min-height: 57px;
  background-color: rgb(147, 19, 50);
  border-radius: 5px;
  opacity: ${({ buttonOpacity }) => buttonOpacity};
  margin-top: 35px;
`
