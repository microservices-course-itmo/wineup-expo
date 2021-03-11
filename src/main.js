import { registerRootComponent } from 'expo'
import Constants from 'expo-constants'

async function init() {
  let App

  if (Constants.manifest.extra.STORYBOOK) {
    App = (await import('../storybook')).default
  } else {
    App = (await import('./App')).default
  }

  registerRootComponent(App)
}

init()
