import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import LabeledInput from './index'

storiesOf('LabeledInput', module)
  .add('Default', () => (
    <LabeledInput
      label={text('Label', 'Input')}
      onChangeText={action('onChangeText')}
    />
  ))
  .add('Secure text', () => (
    <LabeledInput
      label={text('Label', 'Input')}
      onChangeText={action('onChangeText')}
      secureTextEnty
    />
  ))
  .add('Invalid', () => (
    <LabeledInput
      label={text('Label', 'Input')}
      onChangeText={action('onChangeText')}
      secureTextEnty
      isValid={false}
    />
  ))
  .add('Invalid with message', () => (
    <LabeledInput
      label={text('Label', 'Input')}
      onChangeText={action('onChangeText')}
      secureTextEnty
      isValid={false}
      errorMessage={text('Error message', 'Error')}
    />
  ))
