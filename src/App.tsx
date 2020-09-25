import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from './screens/Home'
import SettingsScreen from './screens/Settings'
// import RegistrationScreen from './screens/Registration'

const Tab = createBottomTabNavigator()

const App: React.FC = () => {
  return (
    // <RegistrationScreen/>
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Home' component={HomeScreen} />
        <Tab.Screen name='Settings' component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App
