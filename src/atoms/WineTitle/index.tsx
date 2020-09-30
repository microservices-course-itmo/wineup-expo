import React, { ReactElement } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export interface WineTitleProps {
  name: string
  description: string
  volume: number
}

const styles = StyleSheet.create({
  wineName: { fontSize: 20, fontWeight: 'bold', display: 'flex' },
})

function WineTitle({
  name,
  description,
  volume,
}: WineTitleProps): ReactElement<WineTitleProps> {
  return (
    <View>
      <Text style={styles.wineName}>{name}</Text>
      <Text>{description}</Text>
      <Text>{volume}</Text>
    </View>
  )
}
export default WineTitle
