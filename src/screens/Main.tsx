import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
} from '@expo/vector-icons'
import CatalogScreen from './Catalog'
import FavouritesScreen from './Favourites'
import AuthorizedProfile from './AuthorizedProfile'
import UnauthorizedProfile from './UnauthorizedProfile'
import useNotifications from '../hooks/useNotifications'
import { useAuthContext } from './Auth/AuthContext'

const Tab = createBottomTabNavigator()

const EmptyTab = () => null

function MainScreen() {
  const { accessToken } = useAuthContext()

  useNotifications()

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let icon
          const iconColor = focused ? color : '#DEDEDE'

          switch (route.name) {
            case 'Главное':
              icon = (
                <FontAwesome name='newspaper-o' size={size} color={iconColor} />
              )
              break

            case 'Каталог':
              icon = (
                <MaterialCommunityIcons
                  name='book-open-page-variant'
                  size={size}
                  color={iconColor}
                />
              )
              break

            case 'Избранное':
              icon = <Ionicons name='ios-heart' size={size} color={iconColor} />
              break

            case 'Профиль':
              icon = <FontAwesome name='user' size={size} color={iconColor} />
              break

            default:
              icon = () => null
          }

          return icon
        },
      })}
      tabBarOptions={{
        activeTintColor: '#931332',
        inactiveTintColor: '#333333',
      }}
    >
      <Tab.Screen name='Главное' component={EmptyTab} />
      <Tab.Screen name='Каталог' component={CatalogScreen} />
      <Tab.Screen name='Избранное' component={FavouritesScreen} />
      <Tab.Screen
        name='Профиль'
        component={accessToken ? AuthorizedProfile : UnauthorizedProfile}
      />
    </Tab.Navigator>
  )
}

export default MainScreen
