import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import WineCardScreen from './atoms/wineTitle/index'
import HomeScreen from './screens/Home'
import SettingsScreen from './screens/Settings'

const Tab = createBottomTabNavigator()

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Home' component={HomeScreen} />
        <Tab.Screen name='Settings' component={SettingsScreen} />
        <Tab.Screen name='WineCard' component={WineCardScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App
