import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { action } from '@storybook/addon-actions'
import LabeledInput from './LabeledInput'

storiesOf('AuthLabeledInput', module).add('Default', () => (
  <LabeledInput value='test' onChangeText={action('onChangeText')} />
))
