import React from 'react'
import { storiesOf } from '@storybook/react-native'
import LabeledCheckbox from './index'

storiesOf('LabeledCheckbox', module).add('Default', () => (
  <LabeledCheckbox label='test' />
))
