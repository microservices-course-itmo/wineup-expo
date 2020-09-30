import React from 'react'
import { View, Text } from 'react-native'
import Advice from '../atoms/advice'

const HomeScreen: React.FC = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {/* <Text>Home Screen</Text> */}
      <Advice ratioAdvice={100} />
    </View>
  )
}

export default HomeScreen
