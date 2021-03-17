import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ROUTES from '../routes'
import MainScreen from './Main'
import WineScreen from './Wine'
import { useAuthContext } from './Auth/AuthContext'
import AuthWrapper from './Auth/AuthWrapper'

const Stack = createStackNavigator()

function MainRouter() {
  const { accessToken, isAnonymous } = useAuthContext()

  if (accessToken || isAnonymous) {
    return (
      <Stack.Navigator headerMode='screen'>
        <Stack.Screen
          options={{ header: () => null }}
          name={ROUTES.MAIN}
          component={MainScreen}
        />
        <Stack.Screen
          options={{ header: () => null }}
          name={ROUTES.WINE_PAGE}
          component={WineScreen}
        />
      </Stack.Navigator>
    )
  }

  return <AuthWrapper />
}

export default MainRouter
