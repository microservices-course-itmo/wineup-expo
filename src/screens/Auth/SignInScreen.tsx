import React, { useState } from 'react'
import { Text, View, TouchableOpacity, TextInput } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'
import ROUTES from '../../routes'
import styles from './styles'
import inputStyle from '../../molecules/Auth/styles'

export type TProps = StackScreenProps<any, typeof ROUTES.SIGN_IN>

const SignInScreen: React.FC<TProps> = ({ navigation }) => {
  const [userPhone, setUserPhone] = useState('')

  return (
    <View style={styles.container}>
      <Text style={[styles.header, { textAlign: 'center' }]}>
        Введите номер телефона для авторизации
      </Text>
      <View
        style={{
          backgroundColor: '#FFFFFF',
          width: 217,
          height: 57,
          marginTop: 30,
          borderRadius: 10,
        }}
      >
        <TextInput
          style={[inputStyle.input, { textAlign: 'center' }]}
          keyboardType='number-pad'
          maxLength={12}
          onChangeText={setUserPhone}
          placeholder='+7(9xx)-xxxxxxx'
          textAlignVertical='center'
          textContentType='telephoneNumber'
          editable
          selectionColor='#000'
        />
      </View>
      <TouchableOpacity
        style={[styles.buttonStyle, { marginTop: 23 }]}
        onPress={() => {
          navigation.navigate(ROUTES.SIGN_IN_CONFIRM)
          console.log(userPhone)
        }}
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
