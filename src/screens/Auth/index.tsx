import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import ROUTES from '../../routes/index'

import SignUpScreen from './SignUpScreen'
import SignIn from './SignIn'
import ConfirmAge from './AgeConfirm'
import AgeDenied from './AgeDenied'
import SignInConfirmScreen from '../SignInConfirm'

const Stack = createStackNavigator()

const AuthNavigator: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={ROUTES.CONFIRM_AGE} component={ConfirmAge} />
      <Stack.Screen name={ROUTES.AGE_DENIED} component={AgeDenied} />
      <Stack.Screen name={ROUTES.SIGN_IN} component={SignIn} />
      <Stack.Screen
        name={ROUTES.SIGN_IN_CONFIRM}
        component={SignInConfirmScreen}
      />
      <Stack.Screen name={ROUTES.SIGN_UP} component={SignUpScreen} />
    </Stack.Navigator>
  )
}

export default AuthNavigator
