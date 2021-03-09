import {
  getStorybookUI,
  configure,
  addDecorator,
} from '@storybook/react-native'
import { withKnobs } from '@storybook/addon-knobs'
import centered from './addons/centred'

import { loadStories } from './storyLoader'

import './rn-addons'
import MockProvider from '@rest-hooks/test/legacy/MockProvider'
import React from 'react'
import { fixtures } from '../src/tests/__mocks__/fixtures'
import { AppLoading } from 'expo'
import { CacheProvider } from 'rest-hooks'
import useFonts from '../src/hooks/useFonts'

// enables knobs for all stories
addDecorator(withKnobs)
addDecorator(centered)

// import stories
configure(() => {
  loadStories()
}, module)

// Refer to https://github.com/storybookjs/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({
  asyncStorage: null,
})

export default function StorybookRoot() {
  const [fontsLoaded] = useFonts()

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <CacheProvider>
      <MockProvider results={fixtures}>
        <StorybookUIRoot />
      </MockProvider>
    </CacheProvider>
  )
}
