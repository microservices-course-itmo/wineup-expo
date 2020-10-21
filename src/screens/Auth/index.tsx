import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import SignUpScreen from './screens/SignUp'
import SignInScreen from './screens/SignIn'
import ConfirmAgeScreen from './screens/ConfirmAge'

const Stack = createStackNavigator()

// eslint-disable-next-line @typescript-eslint/ban-types
type TOuterProps = {}
type TProps = TOuterProps

const AuthNavigator: React.FC<TProps> = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='ConfirmAge' component={ConfirmAgeScreen} />
      <Stack.Screen name='Login' component={SignInScreen} />
      <Stack.Screen name='Register' component={SignUpScreen} />
    </Stack.Navigator>
  )
}

export default AuthNavigator
