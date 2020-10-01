import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import UserTypeSwitcher from './UserTypeSwitcher'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

const SignUpScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <UserTypeSwitcher />
      <Text>Sign up</Text>
    </View>
  )
}

export default SignUpScreen
