import React from 'react'
import { Button, View } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'

import { TParamList } from 'screens/Auth/types'
import { AUTH_ROUTES } from 'libs/constants/routes'

import styles from './styles'

export type TProps = StackScreenProps<TParamList, AUTH_ROUTES.AGE_DENIED>

const AgeDeniedScreen: React.FC<TProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button title='Go to back' onPress={() => navigation.goBack()} />
    </View>
  )
}

export default AgeDeniedScreen
