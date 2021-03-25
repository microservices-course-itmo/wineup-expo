import React from 'react'
import { storiesOf } from '@storybook/react-native'
import PhoneChangePopUp from './index'

storiesOf('PhoneChangePopup', module).add('Default', () => (
  <PhoneChangePopUp visible />
))
