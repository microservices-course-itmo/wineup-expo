import React from 'react'
import { storiesOf } from '@storybook/react-native'
import LabeledRadioButton from './index'

storiesOf('LabeledRadioButton', module).add('Default', () => (
  <LabeledRadioButton label='test' />
))
