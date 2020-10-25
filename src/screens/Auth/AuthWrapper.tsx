import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import SignUpScreen from './SignUpScreen'
import SignInScreen from './SignInScreen'
import ConfirmationScreen from './ConfirmationScreen'

const Tab = createBottomTabNavigator()

const AuthWrapper: React.FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Login' component={SignInScreen} />
      <Tab.Screen name='Register' component={SignUpScreen} />
      <Tab.Screen name='Confirm' component={ConfirmationScreen} />
    </Tab.Navigator>
  )
}

export default AuthWrapper
