import {
  getStorybookUI,
  configure,
  addDecorator,
} from '@storybook/react-native'
import { withKnobs } from '@storybook/addon-knobs'
import centered from './addons/centred'

import { loadStories } from './storyLoader'

import './rn-addons'

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

export default StorybookUIRoot
