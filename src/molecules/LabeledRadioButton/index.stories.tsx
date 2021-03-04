import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import LabeledRadioButton from './index'

storiesOf('LabeledRadioButton', module)
  .add('Default', () => (
    <LabeledRadioButton
      label={text('Label', 'Input')}
      onPress={action('onPress')}
    />
  ))
  .add('Checked', () => (
    <LabeledRadioButton
      label={text('Label', 'Input')}
      onPress={action('onPress')}
      checked
    />
  ))
