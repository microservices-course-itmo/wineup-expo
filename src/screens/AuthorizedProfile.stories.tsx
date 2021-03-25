import React, { Suspense } from 'react'
import { Text } from 'react-native'
import { storiesOf } from '@storybook/react-native'
import AuthorizedProfile from './AuthorizedProfile'
import { AuthProvider } from './Auth/AuthContext'

const Story = () => (
  <Suspense fallback={<Text>Loading</Text>}>
    <AuthProvider>
      <AuthorizedProfile />
    </AuthProvider>
  </Suspense>
)

storiesOf('AuthorizedProfile', module).add('Default', () => <Story />)
