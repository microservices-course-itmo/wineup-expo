import React from 'react'
import { storiesOf } from '@storybook/react-native'
import ConfirmPopUp from './index'

storiesOf('ConsentCheckBox', module).add('Default', () => (
  <ConfirmPopUp visible />
))
