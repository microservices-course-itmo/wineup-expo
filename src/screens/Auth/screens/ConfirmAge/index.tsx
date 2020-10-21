import React from 'react'
import { View } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'

import { TParamList } from 'screens/Auth/types'

import styles from './styles'

export type TOuterProps = StackScreenProps<TParamList, 'ConfirmAge'>
type TProps = TOuterProps

const ConfirmAgeScreen: React.FC<TProps> = () => {
  return <View style={styles.container} />
}

export default ConfirmAgeScreen
