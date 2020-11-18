import React, { useState, useRef } from 'react'
import { Text, View, TouchableOpacity, TextInput, Image } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'
import * as firebase from 'firebase'
import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha'
import ROUTES from '../../routes'
import styles from './styles'
import inputStyle from '../../molecules/Auth/styles'
import phoneEnterIcon from '../../../assets/phoneEnterIcon.png'
import firebaseConfig from '../../../firebaseconfig'

export type TProps = StackScreenProps<any, typeof ROUTES.SIGN_IN>

const SignInScreen: React.FC<TProps> = ({ navigation }) => {
  const [userPhone, setUserPhone] = useState('')
  const recaptchaVerifier = useRef(new FirebaseRecaptchaVerifierModal({}))

  async function verifyPhoneNumber(phoneNumber: string) {
    try {
      const phoneProvider = new firebase.auth.PhoneAuthProvider()
      const verificationId = await phoneProvider.verifyPhoneNumber(
        phoneNumber,
        recaptchaVerifier.current
      )

      navigation.navigate(ROUTES.SIGN_IN_CONFIRM, { verificationId })
    } catch (err) {
      console.log(err)
    }
  }

  function handlePress() {
    setUserPhone('+71234567890')
    verifyPhoneNumber(userPhone)
  }

  return (
    <View style={styles.container}>
      <FirebaseRecaptchaVerifierModal
        style={{}}
        ref={recaptchaVerifier}
        firebaseConfig={firebaseConfig}
      />
      <Text style={[styles.header, { textAlign: 'center' }]}>
        Введите номер телефона для авторизации
      </Text>
      <View
        style={{
          backgroundColor: '#FFFFFF',
          width: 268,
          height: 57,
          marginTop: 30,
          borderRadius: 10,
        }}
      >
        <TextInput
          style={[inputStyle.input, inputStyle.textAreaStyle]}
          keyboardType='number-pad'
          maxLength={12}
          onChangeText={setUserPhone}
          placeholder='+7 (9XX) XXX XX XX'
          textAlignVertical='center'
          textContentType='telephoneNumber'
          editable
          selectionColor='#000'
        />
        <Image
          source={phoneEnterIcon}
          style={{ position: 'absolute', top: 17, left: 30 }}
        />
      </View>
      <TouchableOpacity
        activeOpacity={0.8}
        style={[styles.buttonStyle, { marginTop: 23 }]}
        onPress={handlePress}
      >
        <Text style={styles.buttonText}>Войти</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.unregUser}>
        <Text style={styles.resendCode}>Продолжить без авторизации</Text>
      </TouchableOpacity>
    </View>
  )
}

export default SignInScreen
