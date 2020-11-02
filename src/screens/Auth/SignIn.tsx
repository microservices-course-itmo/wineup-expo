import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'
import { TParamList } from '../../routes/type'
import ROUTES from '../../routes'

export type TProps = StackScreenProps<TParamList, typeof ROUTES.SIGN_IN>

const SignInScreen: React.FC<TProps> = ({ navigation }) => {
  const [userPhone, setUserPhone] = useState('')

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 18,
          marginBottom: 47,
          marginLeft: 40,
          marginRight: 40,
        }}
      >
        Введите номер телефона для авторизации
      </Text>
      <View
        style={{
          backgroundColor: '#FFFFFF',
          width: 217,
          height: 57,
          borderRadius: 10,
        }}
      >
        <TextInput
          keyboardType='number-pad'
          maxLength={12}
          onChangeText={setUserPhone}
          placeholder='+7(9xx)-xxxxxxx'
          textAlignVertical='center'
          textContentType='telephoneNumber'
          editable
        />
      </View>
      <TouchableOpacity
        style={[styles.buttonStyle]}
        onPress={() => {
          navigation.navigate('SignInConfirm')
          console.log(userPhone)
        }}
      >
        <Text>Войти</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.unregUser}>
        <Text style={{ textDecorationLine: 'underline' }}>
          Продолжить без авторизации
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default SignInScreen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
    padding: 20,
  },
  buttonStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    width: 217,
    maxHeight: 57,
    backgroundColor: '#C23232',
    borderRadius: 10,
  },
  unregUser: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    width: 316,
    maxHeight: 35,
  },
})
