import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import SettingsScreen from './screens/Settings'
import AuthNavigator from './screens/Auth'
import CatalogScreen from './screens/Catalog'

const Tab = createBottomTabNavigator()

const isAuth = true

const App: React.FC = () => {
  return (
    <NavigationContainer>
      {isAuth ? (
        <Tab.Navigator>
          <Tab.Screen name='Home' component={CatalogScreen} />
          <Tab.Screen name='Settings' component={SettingsScreen} />
        </Tab.Navigator>
      ) : (
        <AuthNavigator />
      )}
    </NavigationContainer>
  )
}

export default App
