import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { action } from '@storybook/addon-actions'
import LabeledInput from './index'

storiesOf('LabeledInput', module).add('Default', () => (
  <LabeledInput label='test' onChangeText={action('onChangeText')} />
))
