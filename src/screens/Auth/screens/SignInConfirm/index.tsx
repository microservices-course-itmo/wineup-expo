import React from 'react'
import { Button, View } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'

import { TParamList } from 'screens/Auth/types'
import { AUTH_ROUTES } from 'libs/constants/routes'

import styles from './styles'

export type TProps = StackScreenProps<TParamList, AUTH_ROUTES.SIGN_IN_CONFIRM>

const SignInConfirmScreen: React.FC<TProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button title='Go to back' onPress={() => navigation.goBack()} />
      <Button
        title='Go to SignUp'
        onPress={() => navigation.navigate(AUTH_ROUTES.SIGN_UP)}
      />
    </View>
  )
}

export default SignInConfirmScreen
