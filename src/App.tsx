import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import SettingsScreen from './screens/Settings'
import AuthWrapper from './screens/Auth/AuthWrapper'
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
        <AuthWrapper />
      )}
    </NavigationContainer>
  )
}

export default App
