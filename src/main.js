import { registerRootComponent } from 'expo'
import Constants from 'expo-constants'
import App from './App'
import StorybookRoot from '../storybook'

if (Constants.manifest.extra.STORYBOOK) {
  registerRootComponent(StorybookRoot)
} else {
  registerRootComponent(App)
}
