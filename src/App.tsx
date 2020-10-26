import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from './screens/Home'
import SettingsScreen from './screens/Settings'
import AuthWrapper from './screens/Auth/AuthWrapper'

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
        <AuthWrapper />
      )}
    </NavigationContainer>
  )
}

export default App
