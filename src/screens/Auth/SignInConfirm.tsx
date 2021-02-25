import React, { useState, useEffect, ReactElement, useContext } from 'react'
import { Text, TouchableOpacity, Image } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import styled from 'styled-components/native'
import Countdown from '../../molecules/Countdown'
import LabeledInput from '../../molecules/Auth/LabeledInput'
import { isRightCode } from '../../helpers'
import ROUTES from '../../routes'
import { AuthContext } from './AuthContext'
import styles from './styles'
import GoBackArrowIcon from '../../molecules/Auth/GoBackArrowIcon'
import confirmButtonCross from '../../../assets/confirmButtonCross.png'

type SignInConfirmScreenNavigationProps = StackNavigationProp<
  any,
  'SignInConfirm'
>

interface SignInConfirmProps {
  navigation: SignInConfirmScreenNavigationProps
}

const timeToResend = 4

function SignInConfirm({
  navigation,
}: SignInConfirmProps): ReactElement<SignInConfirmProps> {
  const [userCode, setUserCode] = useState('')
  const [isCorrectCode, setIsCorrectCode] = useState(false)
  const [isLongEnough, setIsLongEnough] = useState(false)
  const [isTimerStarted, setIsTimerStarted] = useState(false)
  const [isPenalty, setIsPenalty] = useState(false)
  const [isCodeEnteredOnce, setIsCodeEnteredOnce] = useState(false)
  const enterButtonOpacity = isLongEnough ? 1 : 0.4
  const resendOpacity = () => {
    if (!isCodeEnteredOnce) return 0
    if (isPenalty) return 0.4

    return 1
  }
  const [isWarningOn, setIsWarningOn] = useState(false)
  const warningOpacity = () => {
    if (isWarningOn) return isCodeEnteredOnce ? 1 : 0

    return 0
  }

  const isAuth = useContext(AuthContext)
  const isUnregistered = true

  const enterCodeHandler = () => {
    setIsCorrectCode(isRightCode(userCode))
    setIsWarningOn(!isWarningOn)
    if (isLongEnough) {
      setIsCodeEnteredOnce(true)
      if (!isCorrectCode) {
        setIsPenalty(true)
        setIsTimerStarted(true)
      } else if (isUnregistered) navigation.navigate(ROUTES.SIGN_UP)
      else isAuth.setIsAuth(true)
    }
  }

  const resendCode = () => {
    console.log('code resent')
  }

  useEffect(() => {
    setIsLongEnough(userCode.length === 6)
    setIsCorrectCode(isRightCode(userCode))
  }, [userCode])

  const StyledViewWarningContainer = styled.View`
    position: absolute;
    top: -80px;
    flex: 1;
    flex-direction: row;
    justifycontent: center;
    align-items: center;
    width: 220px;
    height: 45px;
    background-color: 'rgb(255, 255, 255)';
    border-radius: 50px;
    opacity: ${warningOpacity()};
  `

  return (
    <StyledViewContainer>
      <StyledBackButton activeOpacity={0.8} onPress={navigation.goBack}>
        <GoBackArrowIcon />
        <StyledBackButtonText>Вернуться назад</StyledBackButtonText>
      </StyledBackButton>

      <StyledViewInfoBlockContainer>
        <StyledViewWarningContainer>
          <Image source={confirmButtonCross} />
          <StyledWrongCodeText>
            Код введён <StyledWrongWord>неверно</StyledWrongWord>
          </StyledWrongCodeText>
        </StyledViewWarningContainer>
        <StyledCodeText>Введите код подтверждения</StyledCodeText>
        <StyledLabelCode
          value={userCode}
          placeholder='Например, 123456'
          onChangeText={setUserCode}
          maxLength={6}
          keyBoardType='numeric'
        />
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={enterCodeHandler}
          style={[
            styles.buttonStyle,
            { opacity: enterButtonOpacity, marginTop: 22 },
          ]}
          disabled={!isLongEnough}
        >
          <Text style={styles.buttonText}>Войти</Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={resendCode}
          style={[
            styles.buttonStyle,
            { position: 'absolute', top: 234, opacity: resendOpacity() },
          ]}
          disabled={isPenalty}
        >
          <Text style={styles.buttonText}>Отправить код повторно</Text>
        </TouchableOpacity>

        <Countdown
          isTimerEnabled={isTimerStarted}
          time={timeToResend}
          handleEnd={() => {
            setIsPenalty(false)
            console.log('isPenalty', isPenalty)
          }}
          style={[
            styles.resendCode,
            { opacity: warningOpacity(), position: 'relative', top: 118 },
          ]}
        />
      </StyledViewInfoBlockContainer>
    </StyledViewContainer>
  )
}

const StyledViewContainer = styled.View`
  flex: 1;
  align-items: center;
  justifycontent: center;
  margin-bottom: 10px;
`
const StyledBackButton = styled.TouchableOpacity`
  position: absolute;
  top: 56px;
  left: 16px;
  flex-direction: row;
  align-items: center;
`
const StyledBackButtonText = styled.Text`
  font-size: 14px;
  color: 'rgb(255, 255, 255)';
  font-family: 'PTSans_400Regular';
  margin-left: 6px;
`
const StyledViewInfoBlockContainer = styled.View`
  align-items: center;
`
const StyledWrongCodeText = styled.Text`
  color: 'rgb(226, 3, 56)';
  font-size: 16px;
  font-family: 'PTSans_400Regular';
  margin-left: 9px;
`
const StyledWrongWord = styled.Text`
  font-weight: bold;
`
const StyledCodeText = styled.Text`
  font-size: 20;
  font-family: 'PTSans_700Bold';
  color: 'rgb(255, 255, 255)';
`
const StyledLabelCode = styled(LabeledInput)`
  margin-top: 37px;
`
// const StyledButtonEnter = styled.TouchableOpacity``

export default SignInConfirm
