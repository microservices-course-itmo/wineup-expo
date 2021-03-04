import React, { useState, useEffect, ReactElement, useContext } from 'react'
import { Image } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RouteProp } from '@react-navigation/native'
import * as firebase from 'firebase'
import * as SecureStore from 'expo-secure-store'
import styled from 'styled-components/native'
import Countdown from '../../molecules/Countdown'
import LabeledInput from '../../molecules/Auth/LabeledInput'
import ROUTES from '../../routes'
import { AuthContext } from './AuthContext'
import styles from './styles'
import GoBackArrowIcon from '../../molecules/Auth/GoBackArrowIcon'
import confirmButtonCross from '../../../assets/confirmButtonCross.png'
import { User } from '../../helpers'

type SignInConfirmScreenNavigationProps = StackNavigationProp<
  any,
  'SignInConfirm'
>

interface SignInConfirmProps {
  navigation: SignInConfirmScreenNavigationProps
  route: RouteProp<{ params: { verificationId: string } }, 'params'>
}

const timeToResend = 4

function SignInConfirm({
  navigation,
  route,
}: SignInConfirmProps): ReactElement<SignInConfirmProps> {
  const [userCode, setUserCode] = useState('')
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

  const { setIsAuth, setIsRegistered } = useContext(AuthContext)
  let isUnregistered = false

  async function signInWithPhoneNumber() {
    try {
      const credential = firebase.auth.PhoneAuthProvider.credential(
        route.params.verificationId,
        userCode
      )

      const userCredential = await firebase
        .auth()
        .signInWithCredential(credential)

      if (userCredential.user) {
        return userCredential.user.getIdToken()
      }

      return null
    } catch (err) {
      console.log(err)

      return null
    }
  }

  async function signInWithJwtToken(jwtToken: string) {
    try {
      const response = await fetch(
        'http://77.234.215.138:18080/user-service/login/',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            fireBaseToken: jwtToken,
          }),
        }
      )

      if (response.status === 401) {
        isUnregistered = true

        return null
      }

      return response.json()
    } catch (err) {
      console.log(err.message)

      return null
    }
  }

  const enterCodeHandler = () => {
    setIsCodeEnteredOnce(true)
    signInWithPhoneNumber().then((jwtToken) => {
      if (jwtToken) {
        signInWithJwtToken(jwtToken)
          .then((data: User) => {
            if (data) {
              SecureStore.setItemAsync('accessToken', data.accessToken)
              SecureStore.setItemAsync('refreshToken', data.refreshToken)

              setIsAuth(true)
              setIsRegistered(true)
            } else if (isUnregistered)
              navigation.navigate(ROUTES.SIGN_UP, { jwtToken })
            else {
              throw new Error('Network response was not ok')
            }
          })
          .catch((err) => {
            console.log(err.message)
          })
      } else {
        setIsWarningOn(true)
        setIsPenalty(true)
        setIsTimerStarted(true)
      }
    })
  }

  // TODO: implement code resend / probably with recaptcha again :(
  const resendCode = () => {
    console.log('code resent')
  }

  const onEnd = (): void => {
    setIsPenalty(false)
    console.log('isPenalty', isPenalty)
  }

  useEffect(() => {
    setIsLongEnough(userCode.length === 6)
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
  color: rgb(255, 255, 255);
  font-family: 'PTSans_400Regular';
  margin-left: 6px;
`
const StyledViewInfoBlockContainer = styled.View`
  align-items: center;
`
const StyledWrongCodeText = styled.Text`
  color: rgb(226, 3, 56);
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
  color: rgb(255, 255, 255);
`
const StyledLabelCode = styled(LabeledInput)`
  margin-top: 37px;
`
const StyledEnterTextButton = styled.Text`
  font-size: 16px;
  color: rgb(255, 255, 255);
  font-family: 'PTSans_700Bold';
`
const StyledResetCodeTextButton = styled.Text`
  font-size: 16px;
  color: rgb(255, 255, 255);
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
  background-color: rgb(255, 255, 255);
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
  background-color: rgb(147, 19, 50);
  border-radius: 5px;
  opacity: ${({ enterButtonOpacity }) => enterButtonOpacity};
  margin-top: 22px;
`
const StyledResetCode = styled.TouchableOpacity<StyledResetCodeProps>`
  flex: 1;
  align-items: center;
  justify-content: center;
  width: 268px;
  max-height: 57px;
  min-height: 57px;
  background-color: rgb(147, 19, 50);
  border-radius: 5px;
  position: absolute;
  top: 234px;
  opacity: ${({ resendOpacity }) => resendOpacity()};
`
