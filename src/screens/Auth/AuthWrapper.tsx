import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import SignUpScreen from './SignUpScreen'
import ROUTES from '../../routes'
import SignInScreen from './SignInScreen'
import SignInConfirm from './SignInConfirm'
import AgeConfirm from './AgeConfirm'
import AgeDenied from './AgeDenied'

const Stack = createStackNavigator()

const AuthWrapper: React.FC = () => (
  <Stack.Navigator
    mode='modal'
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: 'transparent', opacity: 1 },
      animationEnabled: false,
    }}
  >
    <Stack.Screen name={ROUTES.CONFIRM_AGE} component={AgeConfirm} />
    <Stack.Screen name={ROUTES.AGE_DENIED} component={AgeDenied} />
    <Stack.Screen name={ROUTES.SIGN_IN} component={SignInScreen} />
    <Stack.Screen name={ROUTES.SIGN_IN_CONFIRM} component={SignInConfirm} />
    <Stack.Screen name={ROUTES.SIGN_UP} component={SignUpScreen} />
  </Stack.Navigator>
)

export default AuthWrapper
