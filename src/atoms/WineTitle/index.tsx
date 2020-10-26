import React from 'react'
import { Text, View } from 'react-native'

import styles from './styles'

export type TProps = {
  name: string
  description: string
  volume: number
}

const WineTitle: React.FC<TProps> = ({ name, description, volume }) => {
  return (
    <View>
      <Text style={styles.wineName}>{name}</Text>
      <Text>{description}</Text>
      <Text>{volume}л</Text>
    </View>
  )
}

export default WineTitle
