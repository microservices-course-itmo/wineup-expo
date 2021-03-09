import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { AppLoading } from 'expo'
import { SafeAreaView, StatusBar } from 'react-native'
import { CacheProvider } from 'rest-hooks'
import { MockProvider } from '@rest-hooks/test'
import * as Notifications from 'expo-notifications'
import { AuthProvider } from './screens/Auth/AuthContext'
import MainRouter from './screens/Router'
import { fixtures } from './tests/__mocks__/fixtures'
import useNotifications from './hooks/useNotifications'
import useFonts from './hooks/useFonts'

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
})

const App: React.FC = () => {
  useNotifications()

  const [fontsLoaded] = useFonts()

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar hidden />
      <CacheProvider>
        <MockProvider results={fixtures}>
          <NavigationContainer>
            <AuthProvider>
              <MainRouter />
            </AuthProvider>
          </NavigationContainer>
        </MockProvider>
      </CacheProvider>
    </SafeAreaView>
  )
}

export default App
