import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import ROUTES from 'libs/constants/routes/auth'

import SignUpScreen from './screens/SignUp'
import SignInScreen from './screens/SignIn'
import ConfirmAgeScreen from './screens/ConfirmAge'
import AgeDeniedScreen from './screens/AgeDenied'
import SignInConfirmScreen from './screens/SignInConfirm'

const Stack = createStackNavigator()

const AuthNavigator: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={ROUTES.CONFIRM_AGE} component={ConfirmAgeScreen} />
      <Stack.Screen name={ROUTES.AGE_DENIED} component={AgeDeniedScreen} />
      <Stack.Screen name={ROUTES.SIGN_IN} component={SignInScreen} />
      <Stack.Screen
        name={ROUTES.SIGN_IN_CONFIRM}
        component={SignInConfirmScreen}
      />
      <Stack.Screen name={ROUTES.SIGN_UP} component={SignUpScreen} />
    </Stack.Navigator>
  )
}

export default AuthNavigator
