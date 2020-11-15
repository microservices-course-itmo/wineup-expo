import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import CatalogScreen from './Catalog'
import SettingsScreen from './Settings'

const Tab = createBottomTabNavigator()

function MainScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Каталог' component={CatalogScreen} />
      <Tab.Screen name='Settings' component={SettingsScreen} />
    </Tab.Navigator>
  )
}

export default MainScreen
