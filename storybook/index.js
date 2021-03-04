import {
  getStorybookUI,
  configure,
  addDecorator,
} from '@storybook/react-native'
import { withKnobs } from '@storybook/addon-knobs'
import centered from './addons/centred'

import { loadStories } from './storyLoader'

import './rn-addons'
import { MockProvider } from '@rest-hooks/test'
import React from 'react'
import { fixtures } from '../src/tests/__mocks__/fixtures'
import {
  Merriweather_400Regular,
  Merriweather_700Bold,
  useFonts,
} from '@expo-google-fonts/merriweather'
import {
  Roboto_300Light,
  Roboto_300Light_Italic,
  Roboto_400Regular,
  Roboto_400Regular_Italic,
  Roboto_500Medium,
} from '@expo-google-fonts/roboto'
import {
  PlayfairDisplay_400Regular,
  PlayfairDisplay_400Regular_Italic,
  PlayfairDisplay_700Bold,
} from '@expo-google-fonts/playfair-display'
import { PTSans_400Regular, PTSans_700Bold } from '@expo-google-fonts/pt-sans'
import { AppLoading } from 'expo'
import { CacheProvider } from 'rest-hooks'

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
    <CacheProvider>
      <MockProvider results={fixtures}>
        <StorybookUIRoot />
      </MockProvider>
    </CacheProvider>
  )
}
