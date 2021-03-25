import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import LabeledInput from './index'

storiesOf('LabeledInput', module)
  .add('Default', () => (
    <LabeledInput
      value={text('Value', 'Value')}
      label={text('Label', 'Input')}
      onChangeText={action('onChangeText')}
    />
  ))
  .add('Secure text', () => (
    <LabeledInput
      value={text('Value', 'Value')}
      label={text('Label', 'Input')}
      onChangeText={action('onChangeText')}
      secureTextEntry
    />
  ))
  .add('Invalid', () => (
    <LabeledInput
      value={text('Value', 'Value')}
      label={text('Label', 'Input')}
      onChangeText={action('onChangeText')}
      secureTextEntry
      isValid={false}
    />
  ))
  .add('Invalid with message', () => (
    <LabeledInput
      value={text('Value', 'Value')}
      label={text('Label', 'Input')}
      onChangeText={action('onChangeText')}
      secureTextEntry
      isValid={false}
      errorMessage={text('Error message', 'Error')}
    />
  ))
