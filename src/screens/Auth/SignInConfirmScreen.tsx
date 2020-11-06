import React, { useState, useEffect, ReactElement, useContext } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import Countdown from '../../molecules/Countdown'
import LabeledInput from '../../molecules/LabeledInput'
import { isRightCode } from '../../helpers'
import ROUTES from '../../routes'
import { AuthContext } from './AuthContext'

type SignInConfirmScreenNavigationProps = StackNavigationProp<
  any,
  'SignInConfirm'
>

interface SignInConfirmProps {
  navigation: SignInConfirmScreenNavigationProps
}

const timeToResend = 60

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
  const isUnregistered = false

  const enterCodeHandler = () => {
    setIsCorrectCode(isRightCode(userCode))
    setIsWarningOn(!isCorrectCode)
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
    <View style={styles.container}>
      <Text style={[styles.wrongCode, { opacity: warningOpacity() }]}>
        Код введён неверно
      </Text>
      <Text style={styles.header}>Введите код подтверждения</Text>
      <LabeledInput
        placeholder='Например, 123456'
        onChangeText={setUserCode}
        maxLength={6}
        keyBoardType='numeric'
      />
      <TouchableOpacity
        onPress={enterCodeHandler}
        style={[styles.buttonStyle, { opacity: enterButtonOpacity }]}
        disabled={!isLongEnough}
      >
        <Text style={styles.buttonText}>Войти</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={resendCode}
        style={[styles.buttonStyle, { opacity: resendOpacity() }]}
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
        style={[styles.resendCode, { opacity: warningOpacity() }]}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  resendCode: {
    textDecorationLine: 'underline',
    marginTop: 20,
  },
  wrongCode: {
    width: 220,
    height: 45,
    borderRadius: 50,
    backgroundColor: '#C23232',
    paddingLeft: 10,
    paddingTop: 12,
    justifyContent: 'center',
  },
  header: {
    fontSize: 30,
    fontFamily: 'Merriweather_700Bold',
    color: '#C23232',
  },
  container: {
    paddingTop: 136,
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  buttonStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 60,
    width: 320,
    maxHeight: 56,
    backgroundColor: '#C23232',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
    fontFamily: 'Merriweather_400Regular',
  },
})

export default SignInConfirm
