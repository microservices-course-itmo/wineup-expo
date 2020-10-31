import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {
  useFonts,
  Merriweather_400Regular,
  Merriweather_700Bold,
} from '@expo-google-fonts/merriweather'
import {
  Roboto_300Light,
  Roboto_400Regular_Italic,
  Roboto_300Light_Italic,
  Roboto_400Regular,
} from '@expo-google-fonts/roboto'
import {
  PlayfairDisplay_400Regular,
  PlayfairDisplay_400Regular_Italic,
  PlayfairDisplay_700Bold,
} from '@expo-google-fonts/playfair-display'
import { AppLoading } from 'expo'
import { SafeAreaView } from 'react-native'
import CatalogScreen from './screens/Catalog'
import AuthWrapper from './screens/Auth/AuthWrapper'
import SettingsScreen from './screens/Settings'

const Tab = createBottomTabNavigator()

const isAuth = true

const App: React.FC = () => {
  const [fontsLoaded] = useFonts({
    Merriweather_400Regular,
    Merriweather_700Bold,
    Roboto_300Light,
    PlayfairDisplay_400Regular,
    PlayfairDisplay_400Regular_Italic,
    PlayfairDisplay_700Bold,
    Roboto_300Light_Italic,
    Roboto_400Regular_Italic,
    Roboto_400Regular,
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        {isAuth ? (
          <Tab.Navigator>
            <Tab.Screen name='Каталог' component={CatalogScreen} />
            <Tab.Screen name='Settings' component={SettingsScreen} />
          </Tab.Navigator>
        ) : (
          <AuthWrapper />
        )}
      </NavigationContainer>
    </SafeAreaView>
  )
}

export default App
