import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import SignUpScreen from './SignUpScreen'
import SignIn from './SignIn'

const Tab = createBottomTabNavigator()

const AuthWrapper: React.FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Login' component={SignIn} />
      <Tab.Screen name='Register' component={SignUpScreen} />
    </Tab.Navigator>
  )
}

export default AuthWrapper
