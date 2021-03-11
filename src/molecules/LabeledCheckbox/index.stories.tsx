import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import LabeledCheckbox from './index'

storiesOf('LabeledCheckbox', module)
  .add('Default', () => (
    <LabeledCheckbox
      label={text('Label', 'Checkbox')}
      onPress={action('onPress')}
    />
  ))
  .add('Checked', () => (
    <LabeledCheckbox
      label={text('Label', 'Checkbox')}
      onPress={action('onPress')}
      checked
    />
  ))
