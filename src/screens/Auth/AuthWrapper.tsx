import React from 'react'
import { Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import SignUpScreen from './SignUpScreen'
import SignIn from './SignIn'
import ROUTES from '../../routes'
import AgeScreen from './ConfirmAge'
import AgeBackScreen from './AgeDenied'
import Catalog from '../Catalog'

const Stack = createStackNavigator()

const SignInConfirmScreen = () => <Text>Экран подтверждения СМС</Text>

const AuthWrapper: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={ROUTES.CONFIRM_AGE} component={AgeScreen} />
      <Stack.Screen name={ROUTES.AGE_DENIED} component={AgeBackScreen} />
      <Stack.Screen name={ROUTES.SIGN_IN} component={SignIn} />

      <Stack.Screen
        name={ROUTES.SIGN_IN_CONFIRM}
        component={SignInConfirmScreen}
      />
      <Stack.Screen name={ROUTES.SIGN_UP} component={SignUpScreen} />
      <Stack.Screen name={ROUTES.Catalog} component={Catalog} />
    </Stack.Navigator>
  )
}

export default AuthWrapper
