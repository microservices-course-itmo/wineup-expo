import React, { useState, ReactElement } from 'react'
import { Image, ActivityIndicator } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RouteProp } from '@react-navigation/native'
import styled from 'styled-components/native'
import Countdown from '../../molecules/Countdown'
import LabeledInput from '../../molecules/LabeledInput'
import ROUTES from '../../routes'
import GoBackArrowIcon from '../../molecules/Auth/GoBackArrowIcon'
import confirmButtonCross from '../../../assets/confirmButtonCross.png'
import { SignUpRequestData } from '../../hooks/useAuth'
import UnauthenticatedError from '../../errors/Unauthenticated'

type SignInConfirmScreenNavigationProps = StackNavigationProp<
  any,
  'SignInConfirm'
>

interface SignInConfirmProps {
  navigation: SignInConfirmScreenNavigationProps
  route: RouteProp<
    {
      params: {
        verify: (
          code: string
        ) => Promise<
          (
            data: Omit<SignUpRequestData, 'fireBaseToken'>
          ) => Promise<void> | undefined
        >
        resend: () => Promise<void>
      }
    },
    'params'
  >
}

const timeToResend = 4

function SignInConfirm({
  navigation,
  route,
}: SignInConfirmProps): ReactElement<SignInConfirmProps> {
  const [userCode, setUserCode] = useState('')
  const [isPenalty, setIsPenalty] = useState(false)
  const [isCodeEnteredOnce, setIsCodeEnteredOnce] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isWarningOn, setIsWarningOn] = useState(false)
  const [isResend, setIsResend] = useState(false)

  let resendOpacity = 0

  if (isCodeEnteredOnce) {
    resendOpacity = isPenalty ? 0.5 : 1
  }
  if (isResend) {
    resendOpacity = 0.5
  }

  const login = async () => {
    setIsLoading(true)
    try {
      await route.params.verify(userCode)
    } catch (error) {
      if (error instanceof UnauthenticatedError) {
        console.log('User is not registered')

        navigation.navigate(ROUTES.SIGN_UP)
      } else {
        setIsWarningOn(true)
        setIsPenalty(true)
      }
    }
    setIsLoading(false)
    resendOpacity = 1
  }

  const enterCodeHandler = async () => {
    setIsCodeEnteredOnce(true)
    setIsResend(false)
    login()
  }

  // TODO: implement code resend / probably with recaptcha again :(
  const resendCode = async () => {
    setIsResend(true)
    route.params.resend()
  }

  const onEnd = (): void => {
    setIsPenalty(false)
    setIsWarningOn(false)
  }

  return (
    <StyledViewContainer>
      <StyledBackButton activeOpacity={0.8} onPress={navigation.goBack}>
        <GoBackArrowIcon />
        <StyledBackButtonText>Вернуться назад</StyledBackButtonText>
      </StyledBackButton>
      <StyledViewInfoBlockContainer marginTop={isPenalty}>
        <StyledViewWarningContainer hidden={!isWarningOn}>
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
          disabled={userCode.length !== 6}
          resendOpacity={resendOpacity}
        >
          {isLoading ? (
            <ActivityIndicator size='small' color='#fff' />
          ) : (
            <StyledEnterTextButton>Войти</StyledEnterTextButton>
          )}
        </StyledButtonEnter>
        <StyledResetCode
          activeOpacity={0.8}
          onPress={resendCode}
          disabled={isPenalty || isResend}
          resendOpacity={resendOpacity}
        >
          <StyledResetCodeTextButton>
            Отправить код повторно
          </StyledResetCodeTextButton>
        </StyledResetCode>
        {isPenalty && <StyledCountdown time={timeToResend} onEnd={onEnd} />}
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
const StyledViewInfoBlockContainer = styled.View<{ marginTop: boolean }>`
  margin-top: ${({ marginTop }) => (marginTop ? 120 : 0)}
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

type StyledButtomProps = {
  disabled?: boolean
  resendOpacity: () => number
}
/* eslint-disable */
const StyledViewWarningContainer = styled.View<{ hidden: boolean }>`
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
  opacity: ${({ hidden }) => (hidden ? 0 : 1)};
`
const StyledButtonEnter = styled.TouchableOpacity<StyledButtomProps>`
  flex: 1;
  align-items: center;
  justify-content: center;
  width: 268px;
  max-height: 57px;
  min-height: 57px;
  background-color: rgb(147, 19, 50);
  border-radius: 5px;
  opacity: ${({ disabled }) => (disabled ? 0.4 : 1)};
  margin-top: 22px;
`
const StyledResetCode = styled.TouchableOpacity<StyledButtomProps>`
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
  margin-top: 10px;
  opacity: ${({ resendOpacity }) => resendOpacity};
`

const StyledCountdown = styled(Countdown)<{ hidden: boolean }>`
  text-decoration-line: underline;
  font-size: 16px;
  color: #fff;
  opacity: ${({ hidden }) => (hidden ? 0 : 1)};
  margin-top: 118px;
`
