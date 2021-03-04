import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { action } from '@storybook/addon-actions'
import LabeledDatePicker from './LabeledDatePicker'

storiesOf('LabeledDatePicker', module).add('Default', () => (
  <LabeledDatePicker
    value={new Date()}
    label='test'
    onChange={action('onChange')}
    maximumDate={new Date()}
    hasFilled
    onFill={action('onFill')}
  />
))
