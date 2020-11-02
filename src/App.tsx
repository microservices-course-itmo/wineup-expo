import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import AuthWrapper from './screens/Auth/AuthWrapper'
import AgeDenied from './screens/Auth/AgeDenied'
import SignInScreen from './screens/Auth/SignIn'
import AuthNavigator from './screens/Auth'

const Tab = createBottomTabNavigator()

const isAuth = true

const App: React.FC = () => {
  return (
    <NavigationContainer>
      {isAuth ? (
        <Tab.Navigator>
          <Tab.Screen name='Home' component={AuthNavigator} />
          <Tab.Screen name='Settings' component={AgeDenied} />
          <Tab.Screen name='Seings' component={SignInScreen} />
        </Tab.Navigator>
      ) : (
        <AuthWrapper />
      )}
    </NavigationContainer>
  )
}

export default App
