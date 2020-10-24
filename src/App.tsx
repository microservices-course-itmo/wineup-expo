import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import HomeScreen from './screens/Home'
import SettingsScreen from './screens/Settings'
import AuthNavigator from './screens/Auth'

const Tab = createBottomTabNavigator()

const isAuth = false

const App: React.FC = () => {
  return (
    <NavigationContainer>
      {isAuth ? (
        <Tab.Navigator>
          <Tab.Screen name='Home' component={HomeScreen} />
          <Tab.Screen name='Settings' component={SettingsScreen} />
        </Tab.Navigator>
      ) : (
        <AuthNavigator />
      )}
    </NavigationContainer>
  )
}

export default App
