import React, { useState, useEffect, ReactElement, useContext } from 'react'
import { Image } from 'react-native'
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

  const onEnd = (): void => {
    setIsPenalty(false)
    console.log('isPenalty', isPenalty)
  }

  useEffect(() => {
    setIsLongEnough(userCode.length === 6)
    setIsCorrectCode(isRightCode(userCode))
  }, [userCode])

  return (
    <StyledViewContainer>
      <StyledBackButton activeOpacity={0.8} onPress={navigation.goBack}>
        <GoBackArrowIcon />
        <StyledBackButtonText>Вернуться назад</StyledBackButtonText>
      </StyledBackButton>
      <StyledViewInfoBlockContainer>
        <StyledViewWarningContainer warningOpacity={warningOpacity}>
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
        <StyledButtonEnter
          activeOpacity={0.8}
          onPress={enterCodeHandler}
          disabled={!isLongEnough}
          enterButtonOpacity={enterButtonOpacity}
        >
          <StyledEnterTextButton>Войти</StyledEnterTextButton>
        </StyledButtonEnter>
        <StyledResetCode
          activeOpacity={0.8}
          onPress={resendCode}
          disabled={isPenalty}
          resendOpacity={resendOpacity}
        >
          <StyledResetCodeTextButton>
            Отправить код повторно
          </StyledResetCodeTextButton>
        </StyledResetCode>
        <Countdown // need to fix CountDown component for styling
          isTimerEnabled={isTimerStarted}
          time={timeToResend}
          handleEnd={onEnd}
          style={[
            styles.resendCode,
            { opacity: warningOpacity(), position: 'relative', top: 118 },
          ]}
        />
      </StyledViewInfoBlockContainer>
    </StyledViewContainer>
  )
}

export default SignInConfirm

const StyledViewContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
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
  font-size: 20px;
  font-family: 'PTSans_700Bold';
  color: 'rgb(255, 255, 255)';
`
const StyledLabelCode = styled(LabeledInput)`
  margin-top: 37px;
`
const StyledEnterTextButton = styled.Text`
  font-size: 16px;
  color: 'rgb(255, 255, 255)';
  font-family: 'PTSans_700Bold';
`
const StyledResetCodeTextButton = styled.Text`
  font-size: 16px;
  color: 'rgb(255, 255, 255)';
  font-family: 'PTSans_700Bold';
`
/*eslint-disable */
type StyledViewWarningContainerProps = {
  warningOpacity: () => number
}

type StyledButtonEnterProps = {
  enterButtonOpacity: number
}

type StyledResetCodeProps = {
  resendOpacity: () => number
}
/* eslint-enable */
const StyledViewWarningContainer = styled.View<StyledViewWarningContainerProps>`
  position: absolute;
  top: -80px;
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 220px;
  height: 45px;
  background-color: 'rgb(255, 255, 255)';
  border-radius: 50px;
  opacity: ${({ warningOpacity }) => warningOpacity()};
`
const StyledButtonEnter = styled.TouchableOpacity<StyledButtonEnterProps>`
  flex: 1;
  align-items: center;
  justify-content: center;
  width: 268px;
  max-height: 57px;
  min-height: 57px;
  background-color: 'rgb(147, 19, 50)';
  border-radius: 5px;
  opacity: ${({ enterButtonOpacity }) => enterButtonOpacity};
  margin-top: 22;
`
const StyledResetCode = styled.TouchableOpacity<StyledResetCodeProps>`
  flex: 1;
  align-items: center;
  justify-content: center;
  width: 268px;
  max-height: 57px;
  min-height: 57px;
  background-color: 'rgb(147, 19, 50)';
  border-radius: 5px;
  position: absolute;
  top: 234px;
  opacity: ${({ resendOpacity }) => resendOpacity()};
`
