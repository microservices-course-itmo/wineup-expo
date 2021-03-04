import React, { ComponentType } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

interface MockedNavigatorProps {
  component: ComponentType
  name?: string
  params: any
}

const Stack = createStackNavigator()
const MockedNavigator = ({
  component,
  params = {},
  name = 'MockedScreen',
}: MockedNavigatorProps) => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode='none'>
        <Stack.Screen
          name={name}
          component={component}
          initialParams={params}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MockedNavigator
