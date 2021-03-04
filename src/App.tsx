import React, { useState, useEffect, useRef } from 'react'
import { NavigationContainer } from '@react-navigation/native'
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
  Roboto_500Medium,
} from '@expo-google-fonts/roboto'
import {
  PlayfairDisplay_400Regular,
  PlayfairDisplay_400Regular_Italic,
  PlayfairDisplay_700Bold,
} from '@expo-google-fonts/playfair-display'
import { PTSans_400Regular, PTSans_700Bold } from '@expo-google-fonts/pt-sans'
import { AppLoading } from 'expo'
import { SafeAreaView, StatusBar } from 'react-native'
import { CacheProvider } from 'rest-hooks'
import * as firebase from 'firebase'
import * as SecureStore from 'expo-secure-store'
import { MockProvider } from '@rest-hooks/test'
import * as Notifications from 'expo-notifications'
import { Subscription } from '@unimodules/core'
import AuthWrapper from './screens/Auth/AuthWrapper'
import { AuthProvider } from './screens/Auth/AuthContext'
import MainRouter from './screens/Router'
import firebaseConfig from '../firebaseconfig'
import { fixtures } from './tests/__mocks__/fixtures'
import { registerForPushNotificationsAsync } from './utils/notifications'

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
})

const App: React.FC = () => {
  const [isAuth, setIsAuth] = useState<boolean>(false)
  const [isRegistered, setIsRegistered] = useState<boolean>(false)
  const notificationListener = useRef<Subscription>()
  const responseListener = useRef<Subscription>()

  if (!isAuth) {
    SecureStore.getItemAsync('accessToken').then((accessToken) => {
      if (accessToken) {
        setIsAuth(true)
        setIsRegistered(true)
      }
    })
  }

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
  }

  useEffect(() => {
    registerForPushNotificationsAsync()

    notificationListener.current = Notifications.addNotificationReceivedListener(
      (notification) => {
        console.log(notification)
      }
    )

    responseListener.current = Notifications.addNotificationResponseReceivedListener(
      (response) => {
        console.log(response)
      }
    )

    return () => {
      Notifications.removeNotificationSubscription(
        notificationListener.current as Subscription
      )
      Notifications.removeNotificationSubscription(
        responseListener.current as Subscription
      )
    }
  }, [])

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
    Roboto_500Medium,
    PTSans_400Regular,
    PTSans_700Bold,
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar hidden />
      <CacheProvider>
        <MockProvider results={fixtures}>
          <NavigationContainer>
            <AuthProvider value={{ setIsAuth, setIsRegistered, isRegistered }}>
              {isAuth ? <MainRouter /> : <AuthWrapper />}
            </AuthProvider>
          </NavigationContainer>
        </MockProvider>
      </CacheProvider>
    </SafeAreaView>
  )
}

export default App
