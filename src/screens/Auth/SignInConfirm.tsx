import React, { useState, useEffect, ReactElement, useContext } from 'react'
import { Text, View, TouchableOpacity, Image } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RouteProp } from '@react-navigation/native'
import * as firebase from 'firebase'
import Countdown from '../../molecules/Countdown'
import LabeledInput from '../../molecules/Auth/LabeledInput'
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
  route: RouteProp<{ params: { verificationId: string } }, 'params'>
}

const timeToResend = 4

function SignInConfirm({
  navigation,
  route,
}: SignInConfirmProps): ReactElement<SignInConfirmProps> {
  let isCorrectCode = false
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

  const isAuth = useContext(AuthContext)
  const isUnregistered = true

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
        isCorrectCode = true
        const jwtToken = await userCredential.user.getIdToken()

        return jwtToken
      }

      return null
    } catch (err) {
      isCorrectCode = false
      console.log(err)

      return null
    }
  }

  // const signInWithJwtToken = async () => {
  //   try {
  //     const response = await fetch(
  //       'http://77.234.215.138:48080/user-service/login/',
  //       {
  //         method: 'POST',
  //         body: JSON.stringify({
  //           accessToken: jwtToken
  //         })
  //       }
  //     )
  //     const json = await response.json()
  //     console.log('json:', json)

  //     return json
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }

  const enterCodeHandler = () => {
    signInWithPhoneNumber().then((jwtToken) => {
      console.log(jwtToken)
      if (isLongEnough) {
        setIsCodeEnteredOnce(true)
        if (!isCorrectCode) {
          setIsWarningOn(true)
          setIsPenalty(true)
          setIsTimerStarted(true)
        } else if (isUnregistered) navigation.navigate(ROUTES.SIGN_UP)
        else isAuth.setIsAuth(true)
      }
    })
  }

  const resendCode = () => {
    console.log('code resent')
  }

  useEffect(() => {
    setIsLongEnough(userCode.length === 6)
  }, [userCode])

  return (
    <View style={[styles.container, { marginBottom: 10 }]}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={navigation.goBack}
        style={styles.goBackButton}
      >
        <GoBackArrowIcon />
        <Text style={styles.goBackButtonText}>Вернуться назад</Text>
      </TouchableOpacity>

      <View style={{ alignItems: 'center' }}>
        <View
          style={[styles.wrongCodeContainer, { opacity: warningOpacity() }]}
        >
          <Image source={confirmButtonCross} />
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
      </View>
    </View>
  )
}

export default SignInConfirm
