import React from 'react'
import { Button, View } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'

import { TParamList } from 'screens/Auth/types'
import { ROUTES } from 'libs/constants/routes/auth'

import styles from './styles'

export type TProps = StackScreenProps<TParamList, ROUTES.CONFIRM_AGE>

const ConfirmAgeScreen: React.FC<TProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        title='Go to AgeDenied'
        onPress={() => navigation.push(ROUTES.AGE_DENIED)}
      />
      <Button
        title='Go to SignIn'
        onPress={() => navigation.navigate(ROUTES.SIGN_IN)}
      />
    </View>
  )
}

export default ConfirmAgeScreen
