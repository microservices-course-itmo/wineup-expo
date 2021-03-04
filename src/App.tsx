import React, { useState } from 'react'
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
// import { MockProvider } from '@rest-hooks/test'
import AuthWrapper from './screens/Auth/AuthWrapper'
import { AuthProvider } from './screens/Auth/AuthContext'
import MainRouter from './screens/Router'
// import { fixtures } from './tests/__mocks__/fixtures'

const App: React.FC = () => {
  const [isAuth, setIsAuth] = useState(false)

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
        {/* <MockProvider results={fixtures}> */}
        <NavigationContainer>
          {isAuth ? (
            <MainRouter />
          ) : (
            <AuthProvider value={{ setIsAuth }}>
              <AuthWrapper />
            </AuthProvider>
          )}
        </NavigationContainer>
        {/* </MockProvider> */}
      </CacheProvider>
    </SafeAreaView>
  )
}

export default App
