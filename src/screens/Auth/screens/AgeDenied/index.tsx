import React from 'react'
import { Button, View } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'

import { TParamList } from '../../types'
import ROUTES from '../../../../libs/constants/routes/auth'

import styles from './styles'

export type TProps = StackScreenProps<TParamList, typeof ROUTES.AGE_DENIED>

const AgeDeniedScreen: React.FC<TProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button title='Go to back' onPress={() => navigation.goBack()} />
    </View>
  )
}

export default AgeDeniedScreen
