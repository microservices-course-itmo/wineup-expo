import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { AppLoading } from 'expo'
import { SafeAreaView, StatusBar } from 'react-native'
import { CacheProvider } from 'rest-hooks'
import * as Notifications from 'expo-notifications'
import { enableScreens } from 'react-native-screens'
import { AuthProvider } from './screens/Auth/AuthContext'
import MainRouter from './screens/Router'
import useFonts from './hooks/useFonts'

enableScreens()

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
})

const App: React.FC = () => {
  const [fontsLoaded] = useFonts()

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar hidden />
      <CacheProvider>
        <NavigationContainer>
          <AuthProvider>
            <MainRouter />
          </AuthProvider>
        </NavigationContainer>
      </CacheProvider>
    </SafeAreaView>
  )
}

export default App
