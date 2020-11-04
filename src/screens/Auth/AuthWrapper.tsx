import React from 'react'
import { Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import SignUpScreen from './SignUpScreen'
import SignInScreen from './SignInScreen'
import HomeScreen from '../Home'
import ROUTES from '../../routes'
import ConfirmationScreen from './ConfirmationScreen'

const Stack = createStackNavigator()

const ConfirmAgeScreen = () => <Text>Экран подтверждения возраста</Text>
const AgeDeniedScreen = () => (
  <Text>Экран подтверждения возраста - доступ запрещен</Text>
)
const SignInConfirmScreen = () => <Text>Экран подтверждения СМС</Text>

const AuthWrapper: React.FC = () => {
  return (
    <Stack.Navigator>
      {/* @ts-ignore */}
      {/* <Stack.Screen name={ROUTES.CONFIRM_AGE} component={ConfirmAgeScreen} /> */}
      {/* @ts-ignore */}
      {/* <Stack.Screen name={ROUTES.AGE_DENIED} component={AgeDeniedScreen} /> */}
      {/* <Stack.Screen name={ROUTES.SIGN_IN} component={SignInScreen} /> */}

      <Stack.Screen
        name={ROUTES.SIGN_IN_CONFIRM}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        component={ConfirmationScreen}
      />
      {/* <Stack.Screen name={ROUTES.SIGN_UP} component={SignUpScreen} /> */}
      <Stack.Screen name='Home' component={HomeScreen} />
    </Stack.Navigator>
  )
}

export default AuthWrapper
