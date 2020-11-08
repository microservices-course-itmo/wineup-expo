import React from 'react'
import { Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import SignUpScreen from './SignUpScreen'
import SignInScreen from './SignInScreen'
import ROUTES from '../../routes'
import AgeScreen from './AgeScreen'
import AgeBackScreen from './AgeBackScreen'

const Stack = createStackNavigator()

const SignInConfirmScreen = () => <Text>Экран подтверждения СМС</Text>

const AuthWrapper: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={ROUTES.CONFIRM_AGE} component={AgeScreen} />
      <Stack.Screen name={ROUTES.AGE_DENIED} component={AgeBackScreen} />
      <Stack.Screen name={ROUTES.SIGN_IN} component={SignInScreen} />

      <Stack.Screen
        name={ROUTES.SIGN_IN_CONFIRM}
        component={SignInConfirmScreen}
      />
      <Stack.Screen name={ROUTES.SIGN_UP} component={SignUpScreen} />
    </Stack.Navigator>
  )
}

export default AuthWrapper
