import React, { ReactElement, useState, useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Countdown from '../../molecules/Countdown'
import LabeledInput from '../../molecules/LabeledInput'
import { isRightCode } from '../../helpers'

const timeToResend = 60

function ConfirmationScreen(): ReactElement {
  const [userCode, setUserCode] = useState('')
  const [isCorrectCode, setIsCorrectCode] = useState(false)
  const [isSendingEnabled, setIsSendingEnabled] = useState(false)
  const [isTimerStarted, setIsTimerStarted] = useState(false)
  const [isPenalty, setIsPenalty] = useState(false)
  const [isCodeEnteredOnce, setIsCodeEnteredOnce] = useState(false)
  const enterButtonOpacity = isSendingEnabled && userCode.length > 0 ? 1 : 0.4
  const wrongCodeOpacity = !isCorrectCode && isCodeEnteredOnce ? 1 : 0
  const resendOpacity = () => {
    if (!isCodeEnteredOnce) return 0
    if (isPenalty) return 0.4

    return 1
  }

  const enterCodeHandler = () => {
    if (isSendingEnabled) {
      setIsCodeEnteredOnce(true)
      setIsCorrectCode(isRightCode(userCode))
      if (!isCorrectCode) {
        setIsPenalty(true)
        setIsTimerStarted(true)
      }
    }
  }

  const resendCode = () => {
    console.log('code resent')
  }

  useEffect(() => {
    setIsSendingEnabled(userCode.length === 6)
  }, [userCode])

  return (
    <View style={styles.container}>
      <Text style={[styles.wrongCode, { opacity: wrongCodeOpacity }]}>
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
        disabled={!isSendingEnabled}
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

      <Text style={[styles.resendCode, { opacity: wrongCodeOpacity }]}>
        <Countdown
          isTimerEnabled={isTimerStarted}
          time={timeToResend}
          handleEnd={() => {
            setIsPenalty(false)
            console.log('isPenalty', isPenalty)
          }}
        />
      </Text>
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

export default ConfirmationScreen
