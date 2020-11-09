import React, { useState, useEffect, ReactElement, useContext } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import Countdown from '../../molecules/Countdown'
import LabeledInput from '../../molecules/Auth/LabeledInput'
import { isRightCode } from '../../helpers'
import ROUTES from '../../routes'
import { AuthContext } from './AuthContext'
import styles from './styles'

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

  return (
    <View style={[styles.container, { marginBottom: 10 }]}>
      <View style={{ alignItems: 'center' }}>
        <View
          style={[styles.wrongCodeContainer, { opacity: warningOpacity() }]}
        >
          <Text style={styles.wrongCode}>
            Код введён <Text style={{ fontWeight: 'bold' }}>неверно</Text>
          </Text>
        </View>
        <Text style={styles.header}>Введите код подтверждения</Text>
        <LabeledInput
          value={userCode}
          placeholder='Например, 123456'
          onChangeText={setUserCode}
          maxLength={6}
          keyBoardType='numeric'
          containerStyle={{ marginTop: 37 }}
        />
        <TouchableOpacity
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
      </View>
    </View>
  )
}

export default SignInConfirm
